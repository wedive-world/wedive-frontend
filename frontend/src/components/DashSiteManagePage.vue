<template>
  <div class="">
    <a href="/dashboard/site_add" class="add_new-dashboard">사이트 추가<i class="fal fa-layer-plus"></i></a>
    <div class="dashboard-title fl-wrap">
        <h3>사이트 리스트</h3>
    </div>
    <!-- dashboard-list-box--> 
    <div class="dashboard-list-box fl-wrap" v-for="interest in interests">
        {{interest.title}}
    </div>
    
    <div class="dashboard-list-box fl-wrap">
        <!-- dashboard-list -->    
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">양양</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 강원도</a></div>
                </div>
            </div>
        </div>
        <!-- dashboard-list end-->    
        <!-- dashboard-list -->    
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">고성</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 강원도</a></div>
                </div>
            </div>
        </div>
        <!-- dashboard-list end-->                                          
        <!-- dashboard-list -->    
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">강릉</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 강원도</a></div>
                </div>
            </div>
        </div>
        <!-- dashboard-list end-->                                           
        <!-- dashboard-list -->    
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">서귀포 (문섬 등 포인트 포함)</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 제주도</a></div>
                </div>
            </div>
        </div>
        <!-- dashboard-list end-->   
        <!-- dashboard-list -->    
        <div class="dashboard-list fl-wrap">
            <div class="dashboard-message">
                <div class="booking-list-contr">
                    <a href="#" class="color-bg tolt" data-microtip-position="left" data-tooltip="Edit"><i class="fal fa-edit"></i></a>
                    <a href="#" class="red-bg tolt" data-microtip-position="left" data-tooltip="Delete"><i class="fal fa-trash"></i></a>
                </div>
                <div class="dashboard-message-text">
                    <img src="images/all/1.jpg" alt="">
                    <h4><a href="listing-single.html">성산 (우도, 성산일출봉 포인트가 포함)</a></h4>
                    <div class="geodir-category-location clearfix"><a href="#">대한민국, 제주도</a></div>
                </div>
            </div>
        </div>
        <!-- dashboard-list end-->                                          
    </div>
    <!-- dashboard-list-box end--> 
    <div class="pagination">
        <a href="#" class="prevposts-link"><i class="fas fa-caret-left"></i><span>Prev</span></a>
        <a href="#">1</a>
        <a href="#" class="current-page">2</a>
        <a href="#">3</a>
        <a href="#">...</a>
        <a href="#">7</a>
        <a href="#" class="nextposts-link"><span>Next</span><i class="fas fa-caret-right"></i></a>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'DashboardPage',
  data () {
    return {
      interests: [],
    }
  },
  apollo: {
      interests: gql`
        query Query {
            interests {
                title
                type
                iconType
                iconName
                iconUrl
                iconColor
            }
        }
    `
  },
  mounted() {
    $("#dash_site_manage").addClass("user-profile-act");
  }
}
</script>


<style scoped>
@import '../../static/css/dashboard-style.css';
</style>
