<template>
  <div class="">
    <!-- Modal -->
    <div id="modal_add" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    

    <a href="/dashboard/site_add" class="add_new-dashboard">사이트 추가<i class="fal fa-layer-plus"></i></a>
    <div class="dashboard-title fl-wrap">
        <h3>관심사항 리스트</h3>
    </div>
    

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
    
    <!--
    <div class="dashboard-list-box fl-wrap" v-for="interest in interests">
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">{{interest.title}}</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 강원도</a></div>
                </div>
            </div>
        </div>                                     
    </div>
    -->
    <!-- dashboard-list-box end--> 
    <!--<div class="pagination">
        <a href="#" class="prevposts-link"><i class="fas fa-caret-left"></i><span>Prev</span></a>
        <a href="#">1</a>
        <a href="#" class="current-page">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">7</a>
        <a href="#" class="nextposts-link"><span>Next</span><i class="fas fa-caret-right"></i></a>
    </div>-->
  </div>
</template>

<script>
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
  name: 'DashboardPage',
  data () {
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
  mounted() {
    $("#dash_site_manage").addClass("user-profile-act");
  },
  created() {
    
  },
  methods: {
    cellUpdated($event) {
        console.log($event.row);
        this.$apollo.mutate({mutation: CREATE_INTEREST, variables: $event.row}).then((data) => {console.log(data)}).catch((error) => {console.log(error);});

    }
  }
}
</script>


<style scoped>
@import '../../static/css/dashboard-style.css';

.my-grid-class {
  height: 400px;
}
</style>
