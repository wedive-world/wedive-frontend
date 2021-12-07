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
        <div v-if="userToken == null || nickName == null" class="card card-full pb-0 mb-0 border-bottom">
          <div class="mt-1 p-3 mb-0">
            <div id="div_login">
              <p v-if="userToken == null && nickName == null" class="mb-0 font-noto">정확한 매칭을 위해서<br/>로그인 또는 회원가입을 해주세요.</p>
              <p v-else class="mb-0 font-noto">정확한 매칭을 위해서<br/>사용자 프로필을 등록해주세요.</p>
            </div>
            <div style="position: absolute;right:16px;top:16px;">
              <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 mt-4 border-bottom" :data-toast="((userToken != null && nickName != null) ? '' : 'snackbar-info')">
          <div class="mt-1">
            <div class="p-4">
              <span :class="'font-noto font-20 font-500' + ((userToken == null || nickName == null) ? ' opacity-40' : '')">컨시어지</span>
              <p :class="'font-noto color-gray mb-0 font-200' + ((userToken == null || nickName == null) ? ' opacity-40' : '')">위다이브의 전문 매니저에게 요청합니다.</p>
              <i :class="'wedive_icoset2x wedive_icoset2x_rightarrow' + ((userToken == null || nickName == null) ? ' opacity-40' : '')"></i>
            </div>
          </div>
        </div>

        <div class="card card-style pb-0 mb-3 ms-3 me-3 border-bottom" :data-menu="((userToken != null && nickName != null) ? 'menu-type' : '')" :data-toast="((userToken != null && nickName != null) ? '' : 'snackbar-info')">
          <div class="mt-1">
            <div class="p-4">
              <span :class="'font-noto font-20 font-500' + ((userToken == null || nickName == null) ? ' opacity-40' : '')">직접 모집</span>
              <p :class="'font-noto color-gray mb-0 font-200' + ((userToken == null || nickName == null) ? ' opacity-40' : '')">직접 맞춤 버디를 모집할께요.</p>
              <i :class="'wedive_icoset2x wedive_icoset2x_rightarrow' + ((userToken == null || nickName == null) ? ' opacity-40' : '')"></i>
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
    <div id="snackbar-info" class="snackbar-toast color-white bg-yellow-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>{{login_word}}을 먼저 해주세요.</div>
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
        userToken: localStorage.userToken,
        nickName: localStorage.nickName,
        login_word : (localStorage.userToken == null) ? '로그인' : '등록',
    }
  }, methods: {
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("userToken") == false || localStorage.userToken == null) {
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          //Open Clicked Menu
          var menuData = "menu-login"
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          //Check and Apply Effects
          var menu = document.getElementById(menuData);
          var menuEffect = menu.getAttribute('data-menu-effect');
          var menuLeft = menu.classList.contains('menu-box-left');
          var menuRight = menu.classList.contains('menu-box-right');
          var menuTop = menu.classList.contains('menu-box-top');
          var menuBottom = menu.classList.contains('menu-box-bottom');
          var menuWidth = menu.offsetWidth;
          var menuHeight = menu.offsetHeight;
          var menuTimeout = menu.getAttribute('data-menu-hide');

          if(menuTimeout){
              setTimeout(function(){
                  document.getElementById(menuData).classList.remove('menu-active');
                  document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
              },menuTimeout)
          }

          if(menuEffect === "menu-push"){
              var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
              if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth+"px)"}}
              if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth+"px)"}}
              if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight+"px)"}}
              if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight+"px)"}}
          }
          if(menuEffect === "menu-parallax"){
              var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
              if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth/10+"px)"}}
              if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth/10+"px)"}}
              if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight/5+"px)"}}
              if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight/5+"px)"}}
          }
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null) {
          location.href='/user_create';
        }
      },
      goSwimming() {
        $(".pool").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_swimming';
        }, 30);
      },
      goSea() {
        console.log("sea")
        $(".sea").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_sea';
        }, 30);
      },
      goAbroad() {
        $(".oversea").css("background", "#25beb2");
        setTimeout(function() {
          location.href='/buddy_abroad';
        }, 30);
      },
      
      
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
