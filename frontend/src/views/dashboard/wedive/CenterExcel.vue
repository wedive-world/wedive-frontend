<template>
  <b-card
    title="센터 엑셀처럼 관리"
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
        v-b-modal.modal-add
        variant="outline-primary"
      >
      센터 추가
    </b-button>
    <div class="dashboard-list-box fl-wrap">
      <vue-editable-grid
        class="my-grid-class"
        ref="grid"
        id="mygrid"
        :column-defs="columnDefs"
        :row-data="centers"
        row-data-key='_id'
        @cell-updated="cellUpdated"
        >
        <template v-slot:header>
            
        </template>
        <template v-slot:header-r>
            Total rows: {{ centers.length }}
        </template>
      </vue-editable-grid>
    </div>

    
    

    <b-modal
      id="modal-add"
      title="센터 추가"
      ok-only
      ok-title="Add"
      @ok="AddCenter"
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

    <b-modal
      id="modal-delete"
      title="관심사항 삭제"
      ok-only
      ok-title="Delete"
      @ok="DeleteInterest"
      ref="modal"
      >
      <p>climate, popularity는 삭제가 불가합니다.</p>
      <b-form-select
        v-model="delSelected"
        :options="interests.filter(interest=>interest.type!='climate'&&interest.type!='popularity').map((inter)=>{return ({text: inter.title, value: inter._id})})"
        size="sm"
        class="mt-1"
      />
      
    </b-modal>
  </b-card>

</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect, BLink } from 'bootstrap-vue'
import VueContext from 'vue-context'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
const { getAllInterestsTitleType, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')
const { upsertDiveCenter, getAllDiveCenters } = require('@/wedive-frontend-graphql/dive-center-service')
const { getAllDivePointsUniquenameId } = require('@/wedive-frontend-graphql/dive-point-service')
const { upsertProduct, deleteProductById } = require('@/wedive-frontend-graphql/product-service')


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
    { sortable: true, filter: true, field: 'divingType', headerName: '타입', editable: true },
    { sortable: true, filter: true, field: 'institutionTypes', headerName: '다이빙 단체', editable: true },

    { sortable: true, filter: true, field: 'latitude', headerName: '위도', editable: true },
    { sortable: true, filter: true, field: 'longitude', headerName: '경도', editable: true },
    
    { sortable: true, filter: true, field: 'divePointsName', headerName: '포인트', editable: true },
    { sortable: true, filter: true, field: 'adminScore', headerName: '총점', editable: true },
    { sortable: true, filter: true, field: 'viewScore', headerName: '경치 점수', editable: true },
    { sortable: true, filter: true, field: 'educationScore', headerName: '교육 점수', editable: true },
    { sortable: true, filter: true, field: 'facilityScore', headerName: '시설 점수', editable: true },
    { sortable: true, filter: true, field: 'serviceScore', headerName: '서비스 점수', editable: true },
    
    { sortable: true, filter: true, field: 'phoneNumber', headerName: '전화번호', editable: true },
    { sortable: true, filter: true, field: 'email', headerName: '이메일', editable: true },
    { sortable: true, filter: true, field: 'geoAddress', headerName: '주소', editable: true },
    { sortable: true, filter: true, field: 'webPageUrl', headerName: '홈페이지', editable: true },
    { sortable: true, filter: true, field: 'enteranceLevelFree', headerName: '입장레벨 (프리)', editable: true },
    { sortable: true, filter: true, field: 'enteranceLevelScuba', headerName: '입장레벨 (스쿠버)', editable: true },

    { sortable: true, filter: true, field: 'wediveComments', headerName: '위다이브 코멘트', editable: true },
    { sortable: true, filter: true, field: 'aliases', headerName: '동의어 (별명)', editable: true },
    { sortable: true, filter: true, field: 'searchTerms', headerName: '유의어 (검색)', editable: true },

    { sortable: true, filter: true, field: 'interestsTitle', headerName: '관심사항', editable: true },
    { sortable: true, filter: true, field: 'openingHours', headerName: '영업시간', editable: true },
    { sortable: true, filter: true, field: 'rentalsName', headerName: '장비', editable: true },
    { sortable: true, filter: true, field: 'ticketsName', headerName: '입장료', editable: true },
    
    { sortable: true, filter: true, field: 'youtubeVideoIds', headerName: '유튜브 영상', editable: true },
    { sortable: true, filter: true, field: 'referenceUrls', headerName: '참고 사이트', editable: true },
    { sortable: true, filter: true, field: 'memo', headerName: '메모', editable: true },
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
      centers: [],
      points: [],

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
    var interests = await getAllInterestsTitleType();
    var interest_types = await getInterestTypes();
    var centers = await getAllDiveCenters();
    var points = await getAllDivePointsUniquenameId();
    next(vm => {vm.setInterests(interests, interest_types, centers, points)});
  },
  methods: {
    setInterests: function(interests, interest_types, centers, points) {
      this.interests = interests;
      this.interest_types = interest_types;
      //this.interests.forEach(interest=>{if(interest.aliases) {interest.aliases_show = interest.aliases.join();}if(interest.searchTerms){interest.searchTerms_show = interest.searchTerms.join();}});

      this.centers = centers.getAllDiveCenters;
      this.centers.forEach(center => {center.divePointsName = center.divePoints.map(point => {return point.uniqueName})})
      this.centers.forEach(center => {center.interestsTitle = center.interests.map(interest => {return interest.title})})
      this.centers.forEach(center => {center.rentalsName = center.rentals.map(rental => {return [rental.name,((rental.unitName==null)?'':rental.unitName),((rental.price==null)?'':rental.price)]})})
      this.centers.forEach(center => {center.ticketsName = center.tickets.map(ticket => {return [ticket.unitName,((ticket.price==null)?'':ticket.price)]})})
      this.points = points.getAllDivePoints;
    },
    async cellUpdated($event) {
      console.log($event);
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
      // rentals
      if (field == 'rentalsName') {
        var temp_list = JSON.parse(value.replace(/\'/gi,'"'));
        console.log(value);
        console.log(temp_list);
        var _id_list = new Array();
        for (var i=0 ; i<temp_list.length; i++) {
          var _id2 = $event.row.rentals[i]._id;
          var ipt = {name: temp_list[i][0], type: ["rental"]};
          ipt.unitName = temp_list[i][1];
          ipt.price = parseInt(temp_list[i][2]);
          if (_id2 != null) ipt._id = _id2;

          var resultProduct = await upsertProduct(ipt);
          _id_list.push(resultProduct.upsertProduct._id)
        }
        
        field = 'rentals';
        value = _id_list;
      }
      // tickets
      if (field == 'ticketsName') {
        var temp_list = JSON.parse(value.replace(/\'/gi,'"'));
        var _id_list = new Array();
        for (var i=0 ; i<temp_list.length; i++) {
          var _id2 = $event.row.tickets[i]._id;
          var ipt = {name: "입장료", type: ["ticket"]};
          ipt.unitName = temp_list[i][0];
          ipt.price = parseInt(temp_list[i][1]);
          if (_id2 != null) ipt._id = _id2;

          var resultProduct = await upsertProduct(ipt);
          _id_list.push(resultProduct.upsertProduct._id)
        }
        
        field = 'tickets';
        value = _id_list;
      }

      //divingPoint
      if (field == 'divePointsName') {
        var temp_list = JSON.parse(value.replace(/\'/gi,'"'));
        value = temp_list.map(temp => {
          var _list = this.points.filter(point=>point.uniqueName == temp);
          if (_list.length > 0) {
            return _list[0]._id
          } else {
            errString = temp + ' 값을 point에서 찾을 수 없습니다.';
            hasError = true;
          }
        });
        field = 'divePoints';
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
          var result = await upsertDiveCenter(ipt);
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
    async AddCenter() {
      var i_input = {uniqueName: this.uniqueName.value, name: this.name.value, latitude: parseFloat(this.latitude), longitude: parseFloat(this.longitude)};
      try {
        await upsertDiveCenter(i_input)
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
      location.reload();
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