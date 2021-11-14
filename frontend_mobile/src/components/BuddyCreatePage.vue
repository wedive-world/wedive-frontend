<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-buddy" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">버디 모집</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-3"> 
        
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="mt-1 p-3 mb-0">
            <div class="" id="div_login">
              <p class="mb-0 font-noto">정확한 매칭을 위해서<br/>로그인 또는 회원가입을 해주세요.</p>
            </div>
            <div class="" style="position: absolute;right:16px;top:16px;">
              <a href="#" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> 로그인</a>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom" v-on:click="goSwimming()">
          <div class="mt-1">
            <div class="p-4" id="div_login">
              <span class="font-noto font-20 font-500">수영장 버디 모집</span>
              <p class="font-noto color-gray mb-0 font-200">수영장에서 함께 해요.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom" v-on:click="goSea()">
          <div class="mt-1">
            <div class="p-4" id="div_login">
              <span class="font-noto font-20 font-500">바다 버디 모집</span>
              <p class="font-noto color-gray mb-0 font-200">바다에서 함께 해요.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom" v-on:click="goAbroad()">
          <div class="mt-1">
            <div class="p-4" id="div_login">
              <span class="font-noto font-20 font-500">해외 버디 모집</span>
              <p class="font-noto color-gray mb-0 font-200">해외 다이빙, 리브어보드 버디를 모집합니다.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom">
          <div class="mt-1">
            <div class="p-4" id="div_login">
              <span class="font-noto font-20 font-500">위다이브 컨시어지</span>
              <p class="font-noto color-gray mb-0 font-200">위다이브의 매칭 매니저에게 요청합니다.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>
        
    </div>
    <!-- Page content ends here-->
        
    
    <!-- Menu Schedule -->
    <div id="menu-schedule" 
         class="menu menu-box-modal rounded-m" 
         data-menu-height="350" 
         data-menu-width="350">
        <div class="menu-title">
            <h1 class="font-14">일정 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="divider divider-margins mt-3 mb-0"></div>
        <div class="content">
            <div class="row mb-1">
                <div class="input-style input-style-always-active has-borders no-icon col-6">
                    <input type="date" value="2021-09-20" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="Phone">
                    <label for="form_start" class="color-highlight">시작일</label>
                    <i class="fa fa-check disabled valid me-4 pe-3 font-12 color-green-dark"></i>
                    <i class="fa fa-check disabled invalid me-4 pe-3 font-12 color-red-dark"></i>
                </div>
                <div class="input-style input-style-always-active has-borders no-icon col-6">
                    <input type="date" value="2021-09-20" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="Phone">
                    <label for="form_end" class="color-highlight">종료일</label>
                    <i class="fa fa-check disabled valid me-4 pe-3 font-12 color-green-dark"></i>
                    <i class="fa fa-check disabled invalid me-4 pe-3 font-12 color-red-dark"></i>
                </div>
            </div>

            
            <vue-typeahead-bootstrap
                class="wedive-search search-dark shadow-xl border-0 bg-theme rounded-sm bottom-0 mb-4"
                v-model="query"
                :data="users"
                :serializer="item => item.name_ko"
                :screen-reader-text-serializer="item => `${item.name_ko}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event"
                :minMatchingChars="2"
                placeholder="Search Github Users"
                inputClass="special-input-class"
                :disabledValues="(selecteduser ? [selecteduser.name_ko] : [])"
                @input="lookupUser2"
                >
                <template slot="suggestion" slot-scope="{ data, htmlText }">
                    <div class="d-flex align-items-center">
                    <img
                        class="rounded-s me-2"
                        :src="data.img_url"
                        style="width: 40px; height: 40px;" />
                    
                    
                    
                    <span v-if="data.type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + htmlText"></span>
                    <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + htmlText"></span>
                    <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + htmlText"></span>
                    </div>
                </template>
            </vue-typeahead-bootstrap>
            
            
        </div>
        <div class="divider divider-margins mt-1 mb-1"></div>
        <div class="content">
          <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2">입력</a>
        </div>
    </div>


    <div id="snackbar-maxerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>최대 5개 까지의 일정만 추가할 수 있습니다.</div>


    <!-- Menu : Add Schedule -->
    <div id="menu-add-schedule" 
         class="menu menu-box-modal rounded-m bg-theme" 
         data-menu-width="350"
         data-menu-height="300">
        <div class="menu-title p-2">
            <h1 class="font-600 font-18">일정 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>


        <div class="content mt-0">
          <div class="form-check icon-check" style="top: -8px;">
              <input class="form-check-input" type="checkbox" value="" id="check_nodate">
              <label class="form-check-label" for="check_nodate">일정 미정</label>
              <i class="icon-check-1 far fa-square color-gray-dark font-16" style="top: 0;"></i>
              <i class="icon-check-2 far fa-check-square font-16 color-highlight" style="top: 0;"></i>
          </div>
        </div>        
        <div class="content row mb-0 mt-0">

            <div class="input-style validate-field col-6 pe-3 ps-0 after-tilde">
              <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일" style="height: 45px !important;border-width: 1px;padding-top: 0 !important;padding-left: 10px;border-radius: 4px;">
              <label for="form_start" class="color-highlight" style="transform: translateX(8px) !important;opacity: 1;">시작일</label>
            </div>
            <div class="input-style validate-field col-6 ps-3 pe-0">
              <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일" style="height: 45px !important;border-width: 1px;padding-top: 0 !important;padding-left: 10px;border-radius: 4px;">
              <label for="form_end" class="color-highlight" style="transform: translateX(22px) !important;opacity: 1;">종료일</label>
            </div>

            <div class="mt-2 pe-0 ps-0">
              <vue-typeahead-bootstrap
                  class="typeahead-input"
                  v-model="query"
                  :data="users"
                  :serializer="item => item.name_ko"
                  :screen-reader-text-serializer="item => `${item.name_ko}`"
                  highlightClass="special-highlight-class"
                  @hit="selecteduser = $event"
                  :minMatchingChars="2"
                  placeholder="지역명, 다이빙 포인트, 센터명"
                  inputClass="special-input-class"
                  :disabledValues="(selecteduser ? [selecteduser.name_ko] : [])"
                  @input="lookupUser2"
                  >
                  <template slot="suggestion" slot-scope="{ data, htmlText }">
                      <div class="d-flex align-items-center">
                      <img
                          class="rounded-s me-2"
                          :src="data.img_url"
                          style="width: 40px; height: 40px;" />
                      
                      
                      
                      <span v-if="data.type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + htmlText"></span>
                      <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + htmlText"></span>
                      <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + htmlText"></span>
                      </div>
                  </template>
              </vue-typeahead-bootstrap>
            </div>

            
            <div class="mt-2 p-0">
            <div class="form-check interest-check interest-check_secondary" style="width: calc(50% + 20px);margin-right: -5px;text-align:center;">
              <input class="form-check-input" type="radio" value="" name="check_schedule" id="check_schedule1" checked>
              <label class="form-check rounded-xl border-08" for="check_schedule1" style="padding-left: 12px;height:38px;border-radius: 4px 0px 0px 4px !important;padding-top:6px;">스쿠버 다이빙</label>
              
            </div>
            <div class="form-check interest-check interest-check_secondary" style="width: calc(50% + 20px);margin-right: -5px;text-align:center;">
              <input class="form-check-input" type="radio" value="" name="check_schedule" id="check_schedule2">
              <label class="form-check rounded-xl border-08" for="check_schedule2" style="padding-left: 12px;height:38px;border-radius: 0px 4px 4px 0px !important;padding-top:6px;">프리 다이빙</label>
              
            </div>
            </div>
            <a href="#" v-on:click="addPersonalBest()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mt-2 font-14" style="height: 38px;padding-top:8px;">추가하기</a>
        </div>
        
    </div>
    
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
var schedule_status = [0, 0, 0, 0, 0];

export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    $(".page-title").hide();
    $(".page-title-clear").hide();

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }

    $("#check_nodate").change(function(){
      $(this).toggleClass("checked");
      if ($(this).is(":checked")) {
        $("#form_start").attr("disabled", true);
      } else {
        $("#form_start").attr("disabled", false);
      }
    });
  },
  components: {
    VueTypeaheadBootstrap
  },
  created() {
    
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
      goSwimming() {
        location.href='/buddy_swimming';
      },
      goSea() {
        location.href='/buddy_sea';
      },
      goAbroad() {
        location.href='/buddy_abroad';
      },
      lookupUser: debounce(function(){
        // in practice this action should be debounced
        fetch(`https://api.github.com/search/users?q=${this.query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.users = data.items;
          })
      }, 500),
      lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
      closeSchedule: function(el_idx) {
        $("#div_schedule" + el_idx).addClass("hide");
        schedule_status[(el_idx-1)] = 0;
        if (schedule_status.includes(1) == false) {
          $("#div_empty").fadeIn(100);;
        }
      },
      addSchedule: function() {
        if (schedule_status.includes(1) == false) {
          $("#div_empty").fadeOut(100);;
          //$("#delete_schedule").removeClass("hide");
        }
        if (schedule_status.includes(0) == false) {
          var toastData = 'snackbar-maxerror';
          var notificationToast = document.getElementById(toastData);
          var notificationToast = new bootstrap.Toast(notificationToast);
          notificationToast.show();
        } else{
          for (var i=1; i<(schedule_status.length+1); i++) {
            if (schedule_status[i-1] == 0) {
              $("#div_schedule" + i).removeClass("hide");
              schedule_status[i-1] = 1;
              break;
            }
          }
          
        }
      },
      reserve_next: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);

          setTimeout(function() {
            var menuData = 'menu-reserve2';
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          },200);
      },
      reserve_finish: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);
      },
      goPoint: function() {
          location.href = '/point';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -40px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -40px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -40px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -40px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -40px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -40px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -78px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -78px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -78px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -78px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -78px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -78px;}




#btn-filter1 {padding: 5px 10px !important;margin-right: -2px;border-radius: 20px 0px 0px 20px !important;border: 1px solid #091a42;}
#btn-filter1:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/icon_scubadiving.png);text-indent: -9999px;vertical-align: middle;}
#btn-filter2 {padding: 5px 10px !important;margin-left: -3px;border-radius: 0px 20px 20px 0px !important;border: 1px solid #091a42;}
#btn-filter2:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/icon_freediving.png);text-indent: -9999px;vertical-align: middle;}



.timeline-item .timeline-icon {top: -10px !important;}
.timeline-item-content, .timeline-item-content-full {border: none !important;background-color: transparent!important;padding: 0 !important;}
.icon-check i{top: -8px;}
.btn-wedive-next {width: 30%;float: right;margin-top: 10px;border-radius: 20px !important;margin-right: 10px;}
.point-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

.border-top {border-top: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
.pl-10px {padding-left: 10px !important;}
.wedive-label {left: 34px !important;transform: translateX(-14px) !important;position: absolute;padding: 0px 8px !important;height: 23px;margin-top: -27px;font-size: 12px;transition: all 250ms ease;background-color: #FFF;width: auto;}
.after-tilde:after {content: '~';position: absolute;right: -5px;top: 16px;color: gray;margin-top: -4px;}
.schedule-close {text-align: right;position: absolute;right: 16px;}
.wedive-timeline-image {width: 70px;height:70px;object-fit: cover;}
.timeline-item .timeline-icon {width: 35px !important;height: 35px !important;left:10px !important;}
.timeline-deco {left: 28px !important;}
.timeline-item-content, .timeline-item-content-full{margin: 0px 15px 30px 56px !important;}

.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean';}
.card-style i:last-child {position: absolute;top: 37%;right: 20px;}
</style>
