<template>
  <b-card-code
    no-body
    title="Basic Table"
  >
    
    <div class="dashboard-list-box fl-wrap">
        <vue-editable-grid
            class="my-grid-class"
            ref="grid"
            id="mygrid"
            :column-defs="columnDefs"
            :row-data="interests"
            row-data-key='shipmentId'
            @cell-updated="cellUpdated"
            >
            <template v-slot:header>
                추가를 원하시면 우상단 추가하기 버튼을 클릭하세요.
            </template>
            <template v-slot:header-r>
                Total rows: {{ interests.length }}
            </template>
        </vue-editable-grid>
    </div>
    
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BTable } from 'bootstrap-vue'
import gql from 'graphql-tag'

const columnDefinition = [
    { sortable: true, filter: true, field: 'title', headerName: '관심내용', editable: true },
    { sortable: true, filter: true, field: 'type', headerName: '타입', editable: true},
    { sortable: true, filter: true, field: 'iconType', headerName: '아이콘타입', editable: true },
    { sortable: true, filter: true, field: 'iconName', headerName: '아이콘내용', type: 'html', editable: true },
];

const GET_INTERESTS = gql`
    query GetInerests {
        interests {
            _id
            title
            type
            iconType
            iconName
            iconUrl
            iconColor
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
    BCardCode,
    BTable,
  },
  data() {
    return {
      columnDefs: columnDefinition,
      interests: [],
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
        console.log(i_input);
        this.$apollo.mutate({mutation: CREATE_INTEREST, variables: {interestInput: i_input}}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});

    }
  },
}
</script>
