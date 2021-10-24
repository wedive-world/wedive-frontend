<template>
  <b-card
    title="관심사항 관리"
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
      관심사항 추가
    </b-button>
    <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-modal.modal-delete
        variant="outline-primary"
        class="ml-1"
      >
      관심사항 삭제
    </b-button>
    <div class="dashboard-list-box fl-wrap">
      <vue-editable-grid
        class="my-grid-class"
        ref="grid"
        id="mygrid"
        :column-defs="columnDefs"
        :row-data="interests"
        row-data-key='_id'
        @cell-updated="cellUpdated"
        >
        <template v-slot:header>
            
        </template>
        <template v-slot:header-r>
            Total rows: {{ interests.length }}
        </template>
      </vue-editable-grid>
    </div>

    
    

    <b-modal
      id="modal-add"
      title="관심사항 추가"
      ok-only
      ok-title="Add"
      @ok="AddInterest"
      ref="modal"
    >
      <b-row>
        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="관심내용"
            label-for="title"
          >
            <b-form-input
              id="title"
              v-model="title"
              placeholder="관심내용"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="타입"
            label-for="type"
          >
          <b-form-select
            v-model="addType"
            :options="interest_types"
            size="sm"
            class="mt-1"
          />
            
             
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="아이콘 타입"
            label-for="iconType"
          >
            <b-form-input
              id="iconType"
              v-model="iconType"
              placeholder="아이콘 타입"
              value="awesome-font"
            />
          </b-form-group>
        </b-col>

        <b-col
          md="6"
          xl="6"
          class="mb-1"
        >

          <b-form-group
            label="아이콘 내용"
            label-for="iconName"
          >
            <b-form-input
              id="iconName"
              v-model="iconName"
              placeholder="아이콘 내용"
            />
          </b-form-group>
        </b-col>
      </b-row>
      아이콘 내용은 <code><a href="https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free" target="_blank">이곳</a></code>을 클릭해서 확인하세요. (fa-코드 입력)
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
const { getAllInterests, getInterestTypes, upsertInterest, deleteInterestById } = require ('@/wedive-frontend-graphql/interest-service')


const columnDefinition = [
    { sortable: true, filter: true, field: 'title', headerName: '관심내용', editable: true },
    { sortable: true, filter: true, field: 'type', headerName: '타입', editable: true},
    { sortable: true, filter: true, field: 'iconType', headerName: '아이콘타입', editable: true },
    { sortable: true, filter: true, field: 'iconName', headerName: '아이콘내용', editable: true },
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
      title: '',
      addType: '',
      iconType: 'awesome-font',
      iconName: '',
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
    next(vm => {vm.setInterests(interests, interest_types)});
  },
  methods: {
    setInterests: function(interests, interest_types) {
      this.interests = interests;
      this.interest_types = interest_types;
    },
    async cellUpdated($event) {
      var i_input = {_id: $event.row._id, title: $event.row.title, uniqueName: $event.row.title, type: $event.row.type, iconType: $event.row.iconType, iconName: $event.row.iconName, iconColor: $event.row.iconColor, iconUrl: $event.row.iconUrl};
      i_input[$event.column.field] = $event.value;
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
      }
    },
    async AddInterest() {
      var i_input = {title: title.value, uniqueName: title.value, type: this.addType, iconType: iconType.value, iconName: iconName.value, iconColor: "", iconUrl: null};
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
.my-grid-class {
  height: 400px;
}
</style>