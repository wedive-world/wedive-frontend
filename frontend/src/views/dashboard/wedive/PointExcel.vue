<template>
  <b-card
    title="포인트 엑셀처럼 관리"
  >
    <vue-context ref="menu">
      <li>
        <b-link
          v-for="data in menuData"
          :key="data.text"
          class="d-flex align-items-center"
          @click="optionClicked(data.text,data.icon)"
        >
          <feather-icon
            :icon="data.icon"
            size="16"
          />
          <span class="ml-75">{{ data.text }}</span>
        </b-link>
      </li>
    </vue-context>
    <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-add2
        variant="outline-primary"
      >
      포인트 추가
    </b-button>
    <div class="dashboard-list-box fl-wrap">
      <vue-editable-grid
        class="my-grid-class"
        ref="grid"
        id="mygrid"
        :column-defs="columnDefs"
        :row-data="points"
        row-data-key='_id'
        @cell-updated="cellUpdated"
        >
        <template v-slot:header>
            
        </template>
        <template v-slot:header-r>
            Total rows: {{ points.length }}
        </template>
      </vue-editable-grid>
    </div>

    <b-modal
      id="modal-add2"
      title="포인트 추가"
      ok-only
      ok-title="Add"
      @ok="AddPoint2"
      ref="modal"
    >
      <b-row>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="몇개나 추가하시겠어요?"
            label-for="addCount"
          >
            <b-form-input
              id="addCount"
              type="number"
              v-model="addCount"
              placeholder="몇개나 추가하시겠어요? (숫자만 입력)"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="modal-add"
      title="포인트 추가"
      ok-only
      ok-title="Add"
      @ok="AddPoint"
      ref="modal"
    >
      <b-row>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="url"
            label-for="uniqueName"
          >
            <b-form-input
              id="uniqueName"
              v-model="uniqueName"
              placeholder="url"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="이름"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="name"
              placeholder="이름"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="위도"
            label-for="latitude"
          >
            <b-form-input
              id="latitude"
              v-model="latitude"
              placeholder="위도"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="경도"
            label-for="longitude"
          >
            <b-form-input
              id="longitude"
              v-model="longitude"
              placeholder="경도"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>

  </b-card>

</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect, BLink } from 'bootstrap-vue'
import VueContext from 'vue-context'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
const { getAllInterests, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')
const { upsertDivePoint, getAllDivePoints } = require('@/wedive-frontend-graphql/dive-point-service')
const { getAllDiveSitesOnlyName } = require('@/wedive-frontend-graphql/dive-site-service')

const selectOptionsStatus = [
  {value: 'pending', text: 'pending'},
  {value: 'active', text: 'active'},
  {value: 'inactive', text: 'inactive'},
  {value: 'deleted', text: 'deleted'}
]

const columnDefinition = [
    { sortable: true, filter: true, field: 'publishStatus', headerName: '상태', editable: true, type: 'select', selectOptions: selectOptionsStatus },
    { sortable: true, filter: true, field: 'uniqueName', headerName: 'URL', editable: true },
    { sortable: true, filter: true, field: 'name', headerName: '이름', editable: true},
    { sortable: true, filter: true, field: 'description', headerName: '한줄설명', editable: true },
    { sortable: true, filter: true, field: 'highlightDescription', headerName: '하이라이트 설명', editable: true },

    { sortable: true, filter: true, field: 'latitude', headerName: '위도', editable: true },
    { sortable: true, filter: true, field: 'longitude', headerName: '경도', editable: true },
    
    { sortable: true, filter: true, field: 'diveSiteName', headerName: '사이트', editable: true },
    { sortable: true, filter: true, field: 'adminScore', headerName: '총점', editable: true },
    { sortable: true, filter: true, field: 'flowRateScore', headerName: '유속 점수', editable: true },
    { sortable: true, filter: true, field: 'waterEnvironmentScore', headerName: '환경 점수', editable: true },
    { sortable: true, filter: true, field: 'eyeSightScore', headerName: '시야 점수', editable: true },
    
    { sortable: true, filter: true, field: 'minDepth', headerName: '최소 깊이', editable: true },
    { sortable: true, filter: true, field: 'maxDepth', headerName: '최대 깊이', editable: true },
    { sortable: true, filter: true, field: 'minSight', headerName: '최소 시야', editable: true },
    { sortable: true, filter: true, field: 'maxSight', headerName: '최대 시야', editable: true },
    
    { sortable: true, filter: true, field: 'aliases', headerName: '동의어 (별명)', editable: true },
    { sortable: true, filter: true, field: 'searchTerms', headerName: '유의어 (검색)', editable: true },

    { sortable: true, filter: true, field: 'interestsTitle', headerName: '관심사항', editable: true },
    { sortable: true, filter: true, field: 'month1Title', headerName: '1월', editable: true },
    { sortable: true, filter: true, field: 'month2Title', headerName: '2월', editable: true },
    { sortable: true, filter: true, field: 'month3Title', headerName: '3월', editable: true },
    { sortable: true, filter: true, field: 'month4Title', headerName: '4월', editable: true },
    { sortable: true, filter: true, field: 'month5Title', headerName: '5월', editable: true },
    { sortable: true, filter: true, field: 'month6Title', headerName: '6월', editable: true },
    { sortable: true, filter: true, field: 'month7Title', headerName: '7월', editable: true },
    { sortable: true, filter: true, field: 'month8Title', headerName: '8월', editable: true },
    { sortable: true, filter: true, field: 'month9Title', headerName: '9월', editable: true },
    { sortable: true, filter: true, field: 'month10Title', headerName: '10월', editable: true },
    { sortable: true, filter: true, field: 'month11Title', headerName: '11월', editable: true },
    { sortable: true, filter: true, field: 'month12Title', headerName: '12월', editable: true },


    { sortable: true, filter: true, field: 'youtubeVideoIds', headerName: '유튜브 영상', editable: true },
    { sortable: true, filter: true, field: 'referenceUrls', headerName: '참고 사이트', editable: true },
    { sortable: true, filter: true, field: 'memo', headerName: '메모', editable: true },
];


function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export default {
  components: {
    BCard,
    BTable,
    BButton,
    BModal,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    BFormSelect,
    vSelect,
    BLink,
    VueContext,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      columnDefs: columnDefinition,
      interests: [],
      interest_types: [],
      sites: [],
      points: [],
      
      addCount: 1,
      uniqueName: '',
      name: '',
      latitude: '',
      longitude: '',

      delSelected: '',
      menuData: [
        { icon: 'PlusIcon', text: 'New' },
        { icon: 'FileIcon', text: 'Open' },
        { icon: 'SaveIcon', text: 'Save' },
        { icon: 'SaveIcon', text: 'Save As' },
        { icon: 'XIcon', text: 'Close' },
      ],
    }
  },
  async beforeRouteEnter(to, from, next) {
    var interests = await getAllInterests();
    var interest_types = await getInterestTypes();
    var sites = await getAllDiveSitesOnlyName();
    var points = await getAllDivePoints();
    next(vm => {vm.setInterests(interests, interest_types, sites, points)});
  },
  methods: {
    setInterests: function(interests, interest_types, sites, points) {
      this.interests = interests;
      this.interest_types = interest_types;
      this.interests.forEach(interest=>{if(interest.aliases) {interest.aliases_show = interest.aliases.join();}if(interest.searchTerms){interest.searchTerms_show = interest.searchTerms.join();}});

      this.sites = sites.getAllDiveSites;
      this.points = points.getAllDivePoints;

      this.points.forEach(point => {
          try {
                point.diveSiteName = '';
                point.diveSiteName = (point.diveSiteId != null) ? (this.sites.filter(x=>x._id == point.diveSiteId)[0].uniqueName) : '';
            } catch(e) {
                console.log(e);
            }
      }
      );
      //this.points.forEach(point => {point.diveSitesName = point.diveSites.map(site => {return site.name})})
      
      
      this.points.forEach(point => {point.interestsTitle = point.interests.map(interest => {return interest.title})})
      for (var i=1 ; i<13; i++) {
          this.points.forEach(point => {point['month'+i+'Title'] = point['month'+i].map(interest => {return interest.title})})
      }
    },
    async cellUpdated($event) {
      //console.log($event);
      var _id = $event.row._id;
      var uniqueName = $event.row.uniqueName;
      var latitude = parseFloat($event.row.latitude);
      var longitude = parseFloat($event.row.longitude);
      var field = $event.column.field;
      var value = $event.value;
      if (field == 'latitude' || field == 'longitude') value = parseFloat(value);
      if (field == 'divingType' || field == 'openingHours' || field == 'wediveComments' || field == 'institutionTypes' || field == 'youtubeVideoIds' || field == 'referenceUrls' || field == 'aliases' || field == 'searchTerms') value = JSON.parse(value.replace(/\'/gi,'"'));

      var hasError = false;
      var errString = '';
      // interests
      if (field == 'interestsTitle') {
        var temp_list = JSON.parse(value.replace(/\'/gi,'"'));
        value = temp_list.map(temp => {
          var _list = this.interests.filter(interest=>interest.title == temp);
          if (_list.length > 0) {
            return _list[0]._id
          } else {
            errString = temp + ' 값을 interest에서 찾을 수 없습니다.';
            hasError = true;
          }
        });
        field = 'interests';
      } 

      // month1 ~ month12
      if (field.includes('month') && field.includes('Title')) {
        var temp_list = JSON.parse(value.replace(/\'/gi,'"'));
        var month = field.replace('Title','');
        value = temp_list.map(temp => {
          var _list = this.interests.filter(interest=>interest.title == temp);
          if (_list.length > 0) {
            return _list[0]._id
          } else {
            errString = temp + ' 값을 interest에서 찾을 수 없습니다.';
            hasError = true;
          }
        });
        field = month;
      }

      //divingSite
      if (field == 'diveSiteName') {
        var temp = this.sites.filter(site=>site.uniqueName == value);
        if (temp.length > 0) {
            value = temp[0]._id;
            field = 'diveSite';
        }
        else {
            errString = temp + ' 값을 site에서 찾을 수 없습니다.';
            hasError = true;
        }
      }
      

      if (hasError) {
        this.$swal({
          title: 'Error!',
          text: errString,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      } else {
        try {
          var ipt = {_id : _id, uniqueName: uniqueName, latitude: latitude, longitude: longitude };
          ipt[field] = value;
          console.log(ipt);
          var result = await upsertDivePoint(ipt);
        } catch(e) {
          this.$swal({
            title: 'Error!',
            text: e,
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
          })
        }
      }
      
      
      
      /*var aliases = [];
      if ($event.row.hasOwnProperty("aliases_show")) {aliases = $event.row.aliases_show.replace(/, /gi,",").split(",");}
      var searchTerms = [];
      if ($event.row.hasOwnProperty("searchTerms_show")) {searchTerms = $event.row.searchTerms_show.replace(/, /gi,",").split(",");}
      console.log(aliases)
      console.log(searchTerms)
      var i_input = {_id: $event.row._id, title: $event.row.title, uniqueName: $event.row.title, type: $event.row.type, aliases: aliases, searchTerms: searchTerms, iconColor: $event.row.iconColor, iconUrl: $event.row.iconUrl};
      if ($event.column.field == 'aliases_show') {
        i_input['aliases'] = $event.value.replace(/, /gi,",").split(",");
      } else if ($event.column.field == 'searchTerms_show') {
        i_input['searchTerms'] = $event.value.replace(/, /gi,",").split(",");
      } else {
        i_input[$event.column.field] = $event.value;
      }
      try {
        await upsertInterest(i_input)
      } catch (e) {
        this.$swal({
          title: 'Error!',
          text: e,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      }*/
    },
    async AddPoint2() {
      var cnt = parseInt(this.addCount);
      for (var i=0; i<cnt; i++) {
        var uuid = generateUUID();
        var i_input = {uniqueName: uuid, name: uuid, latitude: 1.1, longitude: 2.2};
        try {
          await upsertDivePoint(i_input)
        } catch (e) {
          this.$swal({
            title: 'Error!',
            text: e,
            icon: 'error',
            customClass: {
              confirmButton: 'btn btn-primary',
            },
            buttonsStyling: false,
          })
        }
      }
    },
    async AddPoint() {
      var i_input = {uniqueName: this.uniqueName.value, name: this.name.value, latitude: parseFloat(this.latitude), longitude: parseFloat(this.longitude)};
      try {
        await upsertDivePoint(i_input)
      } catch (e) {
        this.$swal({
          title: 'Error!',
          text: e,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      }
      //this.$apollo.mutate({mutation: CREATE_INTEREST, variables: {interestInput: i_input}}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});
    },
    async DeleteInterest() {
      try {
        await deleteInterestById(this.delSelected)
      } catch (e) {
        this.$swal({
          title: 'Error!',
          text: e,
          icon: 'error',
          customClass: {
            confirmButton: 'btn btn-primary',
          },
          buttonsStyling: false,
        })
      }
    },
    contextMenu ($event) {
      console.log($event)
    },
    optionClicked(text, icon) {
      console.log("aaaaaaa ${text}");
      /*this.$toast({
        component: ToastificationContent,
        props: {
          title: `You have click on ${text}!`,
          icon,
        },
      })*/
    },
    
    setSelected(value) {
      this.addType = value;
    },
  },
}
</script>

<style scoped lang="scss">
@import '@core/scss/vue/libs/vue-context.scss';

</style>