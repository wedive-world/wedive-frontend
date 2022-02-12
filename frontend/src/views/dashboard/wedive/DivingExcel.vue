<template>
  <b-card
    title="버디찾기 엑셀처럼 관리"
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
      버디찾기 추가
    </b-button>
    <div class="dashboard-list-box fl-wrap">
      <vue-editable-grid
        class="my-grid-class"
        ref="grid"
        id="mygrid"
        :column-defs="columnDefs"
        :row-data="divings"
        row-data-key='_id'
        @cell-updated="cellUpdated"
        >
        <template v-slot:header>
            
        </template>
        <template v-slot:header-r>
            Total rows: {{ divings.length }}
        </template>
      </vue-editable-grid>
    </div>

    <b-modal
      id="modal-add2"
      title="버디찾기 추가"
      ok-only
      ok-title="Add"
      @ok="AddDiving2"
      ref="modal"
    >
      <b-row>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="추가 갯수"
            label-for="addCount"
          >
            <b-form-input
              id="addCount"
              v-model="addCount"
              placeholder="추가 갯수 (숫자만 입력)"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      id="modal-add"
      title="버디찾기 추가"
      ok-only
      ok-title="Add"
      @ok="AddDiving"
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
const { upsertDiving, getAllDivings } = require('@/wedive-frontend-graphql/diving-service')
const { getAllDiveSites } = require('@/wedive-frontend-graphql/dive-site-service')
const { getAllDiveCenters } = require('@/wedive-frontend-graphql/dive-center-service')

const selectOptionsStatus = [
  {value: 'searchable', text: 'searchable'},
  {value: 'publicEnded', text: 'publicEnded'},
  {value: 'divingComplete', text: 'divingComplete'},
  {value: 'canceled', text: 'canceled'},
  {value: 'banned', text: 'banned'}
]

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

const columnDefinition = [
    { sortable: true, filter: true, field: 'status', headerName: '상태', editable: true, type: 'select', selectOptions: selectOptionsStatus },
    { sortable: true, filter: true, field: '_id', headerName: 'ID', editable: false },
    { sortable: true, filter: true, field: 'destination', headerName: '목적지', editable: true },
    { sortable: true, filter: true, field: 'title', headerName: '제목', editable: true},
    { sortable: true, filter: true, field: 'description', headerName: '설명', editable: true },
    
    { sortable: true, filter: true, field: 'type', headerName: '[타입]', editable: true },
    { sortable: true, filter: true, field: 'maxPeopleNumber', headerName: '최대인원', editable: true },
    { sortable: true, filter: true, field: 'maleCnt', headerName: '남자참석', editable: true },
    { sortable: true, filter: true, field: 'femaleCnt', headerName: '여자참석', editable: true },
    { sortable: true, filter: true, field: 'startedAt', headerName: '시작일', editable: true },
    { sortable: true, filter: true, field: 'finishedAt', headerName: '종료일', editable: true },
    
    { sortable: true, filter: true, field: 'interestsTitle', headerName: '관심사항', editable: true },
];


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
      divings: [],
      sites: [],
      centers: [],
      
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
    var divings = await getAllDivings();
    var sites = await getAllDiveSites();
    var centers = await getAllDiveCenters();
    next(vm => {vm.setDivings(interests, interest_types, divings, sites, centers)});
  },
  methods: {
    setDivings: function(interests, interest_types, divings, sites, centers) {
      this.interests = interests;
      this.interest_types = interest_types;
      this.interests.forEach(interest=>{if(interest.aliases) {interest.aliases_show = interest.aliases.join();}if(interest.searchTerms){interest.searchTerms_show = interest.searchTerms.join();}});

      this.divings = divings.getAllDivings;
      this.sites = sites.getAllDiveSites;
      this.centers = sites.getAllDiveCenters;
      this.divings.forEach(diving => {diving.interestsTitle = diving.interests.map(interest => {return interest.title})})
      this.divings.forEach(diving => {diving.destination = (diving.diveSites.length > 0) ? '[사이트] '+diving.diveSites[0].name : (diving.divePoints.length > 0) ? '[포인트] '+diving.divePoints[0].name : '[센터] '+diving.diveCenters[0].name})
      
      this.divings.forEach(diving => {diving.maleCnt = diving.participants.filter(participant => participant.gender == 'm').length});
      this.divings.forEach(diving => {diving.femaleCnt = diving.participants.filter(participant => participant.gender == 'f').length});
    },
    async cellUpdated($event) {
      var appLoading = document.getElementById('loading-bg')
      if (appLoading) {
        appLoading.style.display = 'block'
        appLoading.style.position = 'relative'
      }
      //console.log($event);
      var _id = $event.row._id;
      var field = $event.column.field;
      var value = $event.value;
      if (field == 'maxPeopleNumber') value = parseInt(value);

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
      var participants = new Array();

      // maleCnt
      if (field == 'maleCnt') {
        for (var i=0; i<parseInt(value); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "m", "status": "joined"});
        }
        for (var i=0; i<parseInt($event.row.participants.filter(participant=>participant.genter=='f')); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "f", "status": "joined"});
        }
        
        field = 'participants';
        value = participants;
      }

      // femailCnt
      if (field == 'femaleCnt') {
        for (var i=0; i<parseInt($event.row.participants.filter(participant=>participant.genter=='m')); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "m", "status": "joined"});
        }
        for (var i=0; i<parseInt(value); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "f", "status": "joined"});
        }

        field = 'participants';
        value = participants;
      }

      // destination
      if (field == 'destination') {
        var destination_type = 'center';
        if (value.includes('[사이트] ')) destination_type = 'site'
        else if (value.includes('[포인트] ')) destination_type = 'point'

        var destination_name = value.replace('[사이트] ', '').replace('[포인트] ', '').replace('[센터] ', '');

        if (destination_type == 'site') {
            var site_search = this.sites.filter(site => site.name == destination_name);
            if (site_search.length > 0) {
                value = [site_search[0]._id];
                field = 'diveSites';
            }
        }
        /*else if (destination_type == 'point') {
            var point_search = this.points.filter(point => point.name == destination_name);
            if (point_search.length > 0) {
                value = [point_search[0]._id];
                field = 'divePoints';
            }
        }*/
        else if (destination_type == 'center') {
            var center_search = this.centers.filter(center => center.name == destination_name);
            if (center_search.length > 0) {
                value = [center_search[0]._id];
                field = 'diveCenters';
            }
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
          var ipt = {_id : _id };
          ipt[field] = value;
          console.log(ipt);
          var result = await upsertDiving(ipt);
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
      if (appLoading) {
        appLoading.style.display = 'none'
        appLoading.style.position = 'fixed'
      }
    },
    async AddDiving2() {
      var cnt = parseInt(this.addCount);
      for (var i=0; i<cnt; i++) {
        var uuid = generateUUID();
        //var i_input = {uniqueName: this.uniqueName.value, name: this.name.value, latitude: parseFloat(this.latitude), longitude: parseFloat(this.longitude)};
        var i_input = {title: '', description: ''};
        try {
          await upsertDiving(i_input)
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
      this.$swal({
        title: '완료',
        text: '추가가 완료되었습니다.',
        icon: 'success',
        customClass: {
          confirmButton: 'btn btn-primary',
        },
        buttonsStyling: false,
      })
      //this.$apollo.mutate({mutation: CREATE_INTEREST, variables: {interestInput: i_input}}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});
    },
    async AddDiving() {
      var i_input = {uniqueName: this.uniqueName.value, name: this.name.value, latitude: parseFloat(this.latitude), longitude: parseFloat(this.longitude)};
      try {
        await upsertDiving(i_input)
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