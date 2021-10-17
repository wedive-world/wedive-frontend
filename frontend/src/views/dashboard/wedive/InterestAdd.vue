<template>
  <b-card
    title="관심사항 관리"
  >
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
            <v-select
              @input="setSelected"
              id="type"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="type_options"
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
      <b-form-select
        v-model="delSelected"
        :options="interests.map((inter)=>{return ({text: inter.title, value: inter._id})})"
        size="sm"
        class="mt-1"
      />
      
    </b-modal>
  </b-card>
</template>

<script>
import { BTable, BCard, BButton, BModal, BFormInput, BRow, BCol, BFormGroup, BFormSelect } from 'bootstrap-vue'
import gql from 'graphql-tag'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

const columnDefinition = [
    { sortable: true, filter: true, field: 'title', headerName: '관심내용', editable: true },
    { sortable: true, filter: true, field: 'type', headerName: '타입', editable: true},
    { sortable: true, filter: true, field: 'iconType', headerName: '아이콘타입', editable: true },
    { sortable: true, filter: true, field: 'iconName', headerName: '아이콘내용', editable: true },
];

const GET_INTERESTS = gql`
    query Query {
      getAllInterests {
        _id
        title
        type
        iconType
        iconName
        iconColor
        iconUrl
      }
    }
`;

const CREATE_INTEREST = gql`
    mutation InterestMutation($interestInput: InterestInput!) {
        interest(input: $interestInput) {
            _id
            title
            type
            iconType
            iconName
            iconColor
            iconUrl
        }
    }
`;

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
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      columnDefs: columnDefinition,
      interests: [],
      type_options: ['discountTarget', 'discountOption', 'gender', 'age', 'diving', 'amity', 'tripFeature'],
      title: '',
      addType: '',
      iconType: 'awesome-font',
      iconName: '',
      delSelected: '',
    }
  },
  apollo: {
    interests: {
        query: GET_INTERESTS
    }
  },
  methods: {
    cellUpdated($event) {
      var i_input = {_id: $event.row._id, title: $event.row.title, type: $event.row.type, iconType: $event.row.iconType, iconName: $event.row.iconName, iconColor: $event.row.iconColor, iconUrl: $event.row.iconUrl};
      i_input[$event.column.field] = $event.value;
      this.$apollo.mutate({mutation: CREATE_INTEREST, variables: {interestInput: i_input}}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});
    },
    AddInterest() {
      //console.log(title.value);
      //console.log(this.addType);
      //console.log(iconType.value);
      //console.log(iconName.value);
      var i_input = {title: title.value, type: this.addType, iconType: iconType.value, iconName: iconName.value, iconColor: "", iconUrl: null};
      this.$apollo.mutate({mutation: CREATE_INTEREST, variables: {interestInput: i_input}}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});
    },
    DeleteInterest() {
      console.log("DeleteInterest");
      console.log(this.delSelected);
    },
    
    setSelected(value) {
      this.addType = value;
    },
  },
}
</script>

<style scoped>
.my-grid-class {
  height: 400px;
}
</style>