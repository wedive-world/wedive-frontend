<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-buddy" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">버디 모집</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
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
              <a href="/user_create" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> 로그인</a>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom">
          <div class="mt-1">
            <div class="p-4">
              <span class="font-noto font-20 font-500">컨시어지</span>
              <p class="font-noto color-gray mb-0 font-200">위다이브의 전문 매니저에게 요청합니다.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom" data-menu="menu-type">
          <div class="mt-1">
            <div class="p-4">
              <span class="font-noto font-20 font-500">직접 모집</span>
              <p class="font-noto color-gray mb-0 font-200">직접 맞춤 버디를 모집할께요.</p>
              <i class="wedive_icoset2x wedive_icoset2x_rightarrow"></i>
            </div>
          </div>
        </div>

        
    </div>
    <!-- Page content ends here-->
        
    
    <!-- Menu type -->
    <div id="menu-type" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h4 class="p-4">어디로 가실까요?</h4>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mt-0 row">
            <div v-on:click="goSwimming()" class="col-4 text-center p-0">
              <div class="m-1 border-08 pool">
                <img class="m-4 mb-2 opacity-60" src="/static/images/assets/icon_pool.png" width="40%"/>
                <p class="mb-4">수영장</p>
              </div>
            </div>
            <div v-on:click="goSea()" class="col-4 text-center p-0">
              <div class="m-1 border-08 sea">
                <img class="m-4 mb-2 opacity-60" src="/static/images/assets/icon_sea.png" width="40%"/>
                <p class="mb-4">바다</p>
              </div>
            </div>
            <div v-on:click="goAbroad()" class="col-4 text-center p-0">
              <div class="m-1 border-08 oversea">
                <img class="m-4 mb-2 opacity-60" src="/static/images/assets/icon_oversea.png" width="40%"/>
                <p class="mb-4">해외/리브어보드</p>
              </div>
            </div>
        </div>
        <br/>
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
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
      goSwimming() {
        $(".pool").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_swimming';
        }, 50);
      },
      goSea() {
        console.log("sea")
        $(".sea").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_sea';
        }, 50);
      },
      goAbroad() {
        $(".oversea").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_abroad';
        }, 50);
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
          $("#div_empty").fadeIn(100);
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

.border-top {border-top: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;border-radius:8px;}

.font-exo2 {font-family: 'Exo 2', sans-serif;}
.font-noto {font-family: 'Noto Sans Korean';}
.card-style i:last-child {position: absolute;top: 37%;right: 20px;}

</style>
