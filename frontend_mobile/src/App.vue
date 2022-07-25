<template>
  <div>
    <!--<div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-load="">
    </div>-->
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <div class="header-title" v-on:click="goHome()"><img class="logo-image" src="https://d34l91104zg4p3.cloudfront.net/assets/logo-gray.svg" height="42" /></div>
              <!--<a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>-->
          </div>

          
          <div v-if="footer_list.includes(pathname)" id="footer-bar" class="footer-bar" style="border-radius: 30px 30px 0px 0px;">
            <a href="/" id="nav-buddy"><div class="menu-ico menu-ico0"></div><span>홈</span></a>
            <a v-on:click="moveSite()" id="nav-site"><div class="menu-ico menu-ico2"></div><span>장소</span></a>
            <a href="/forum_home" id="nav-forum"><div class="menu-ico menu-ico3"></div><span>포럼</span></a>
            <a href="/chat_home" id="nav-chat"><div class="menu-ico menu-ico4"></div><span>채팅</span></a>
            <a href="/other_home" id="nav-other"><div class="menu-ico menu-ico5"></div><span>더보기</span></a>
          </div>
          <div v-if="footer_list.includes(pathname) && locationsearch.includes('footer=hide')" id="aaabbbccc" class="footer-bar" style="border-radius: 30px 30px 0px 0px;height: 64px;position: fixed;bottom: 0px;left: 0px;right: 0px;z-index: 98;-webkit-backdrop-filter: saturate(180%) blur(20px);backdrop-filter: saturate(180%) blur(20px);background-color: rgba(255, 255, 255, 0.7);display: flex;min-height: 51px;border-top: solid 1px rgba(0, 0, 0, 0.05);text-align: center;transition: transform 350ms ease !important;">
            <div style=""></div>
          </div>
        

          <div class="page-title-wrapper">
          </div>
          <div class="page-title page-title-fixed ps-3">
            <i class="fas fa-arrow-left font-24 me-2 pt-2 hide" style="opacity: 0.6;" id="page-back" v-on:click="goBack()"></i>
            <a href="/" style="vertical-align: middle;margin-right: auto;"><img class="logo-image" src="https://d34l91104zg4p3.cloudfront.net/assets/logo-gray.svg" height="42"/></a>
            <a v-on:click="goNoti()" id="wedive-noti" :class="'page-title-icon font-18 hide' + (notiData && notiData.length > 0 && notiData[0].read != null && notiData[0].read == false ? ' has-notification' : '')" style="color:#858585 !important;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_notification.png" width="28"></a>
            <a v-if="pathname == '/'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_buddy_new.png" width="28"></a>
            <a v-else-if="pathname == '/chat_home'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_chat_new.png" width="26"></a>
            <a v-else-if="pathname == '/forum_home'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_book_new.png" width="24"></a>
            <a v-else v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_write.png" width="24"></a>
            <!--<a v-on:click="settingForum()" id="wedive-group" class="page-title-icon color-theme hide"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_setting_fill.png" width="26"></a>-->
            <a v-if="$route.path=='/site_map'" v-on:click="move('/site_map')" class="page-title-icon font-18" style="color: #858585;margin-right: 13.3333333333px;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_map_fill.png" width="26"></a>
            <a v-on:click="searchItem()" id="wedive-search" class="page-title-icon font-18 hide" style="color:#858585 !important;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_search_fill.png" width="28"></a>
            <a v-on:click="shareItem()" id="wedive-share" class="page-title-icon font-18 hide" style="color:#858585 !important;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_share_fill.png" height="24"/></a>
            <!--<a href="#" class="page-title-icon" data-menu="menu-main" :style="'background: url('+((userThumbnail) ? userThumbnail : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+((gender)?gender:'m')+'.png')+');background-size:cover;'"></a>-->
          </div>
          <div class="page-title-clear"></div>

          
          <router-view/>
          
          
          
          <!-- Be sure this is on your main visiting page, for example, the index.html page-->
          <!-- Install Prompt for Android -->
          <div id="menu-install-pwa-android" class="menu menu-box-bottom rounded-m">
              <img class="mx-auto mt-4 rounded-m" src="https://d34l91104zg4p3.cloudfront.net/assets/logo_d.png" alt="img" width="90">
              <h4 class="text-center mt-4 mb-2">WeDive on your Home Screen</h4>
              <p class="text-center boxed-text-xl">
                  Install WeDive on your home screen, and access it just like a regular app. It really is that simple!
              </p>
              <div class="boxed-text-l">
                  <a href="#" class="pwa-install mx-auto btn btn-m font-600 bg-highlight">Add to Home Screen</a>
                  <a href="#" class="pwa-dismiss close-menu btn-full mt-3 pt-2 text-center text-uppercase font-600 color-red-light font-12 pb-4 mb-3">Maybe later</a>
              </div>
          </div>

          <!-- Install instructions for iOS -->
          <div id="menu-install-pwa-ios" class="menu menu-box-bottom rounded-m">
              <div class="boxed-text-xl top-25">
                  <img class="mx-auto mt-4 rounded-m" src="https://d34l91104zg4p3.cloudfront.net/assets/logo_d.png" alt="img" width="90">
                  <h4 class="text-center mt-4 mb-2">WeDive on your Home Screen</h4>
                  <p class="text-center ms-3 me-3">
                      Install WeDive on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
                  </p>
                  <a href="#" class="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-900 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
              </div>
          </div>
          
      </div>

      <vue-bottom-sheet ref="createBottomSheet" @opened="bottomSheetOepn" @closed="bottomSheetClose">
        <div class="text-center">
          <div class="color-primary font-noto font-20 font-600"> 버디 모집</div>
          <p class="mb-2 color-gray">어디로 가실까요?</p>
        </div>
        <div class="content mt-0 row" :style="(locationsearch.includes('footer=hide') ? 'margin-bottom:64px;' : '')">
          <div v-on:click="goSwimming()" class="col-4 text-center p-0">
            <div class="m-1 border-08 pool">
              <img class="m-4 mb-2 opacity-60" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_pool.png" width="40%"/>
              <p class="mb-4">수영장</p>
            </div>
          </div>
          <div v-on:click="goSea()" class="col-4 text-center p-0">
            <div class="m-1 border-08 sea">
              <img class="m-4 mb-2 opacity-60" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_sea.png" width="40%"/>
              <p class="mb-4">바다</p>
            </div>
          </div>
          <div v-on:click="goAbroad()" class="col-4 text-center p-0">
            <div class="m-1 border-08 oversea">
              <img class="m-4 mb-2 opacity-60" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_oversea.png" width="40%"/>
              <p class="mb-4">해외/리브어보드</p>
            </div>
          </div>
        </div>
      </vue-bottom-sheet>

      <!-- Menu login -->
      <vue-bottom-sheet ref="nicknameBottomSheet" @opened="bottomSheetOepn" @closed="bottomSheetClose">
        <div class="m-3 text-center">
            <div class="color-primary font-noto font-20 font-600">프로필 등록이 필요합니다.</div>
        </div>
        <div class="content pt-3 row">
              <a href="/user/create" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fa fa-user rounded-xl font-16 text-center"></i> 프로필 등록하기</a>
              <!--<a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fab fa-apple rounded-xl font-16 text-center"></i> Apple 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-yellow-dark btn-icon font-600"><i class="text-center rounded-xl" style="position: absolute;left: 0px;top: 0px;line-height: 43px;width: 40px;height: 100%;background-color: rgba(0, 0, 0, 0.1);"><img src="https://d34l91104zg4p3.cloudfront.net/assets/logo_kakao.png" height="16" style="vertical-align: middle;"/></i> Kakao 계정으로 로그인</a>-->
          </div>
      </vue-bottom-sheet>

      <!-- Menu login -->
      <vue-bottom-sheet ref="loginBottomSheet" @opened="bottomSheetOepn" @closed="bottomSheetClose">
        <div class="m-3 text-center">
            <div class="color-primary font-noto font-20 font-600"><i class="ico ico-wedive-w color-primary ico-26" style="display: inline-block;margin:0;margin-bottom: -5px;"></i> wedive에 로그인</div>
        </div>
        <div class="content pt-3 row">
              <a v-on:click="loginGoogle()" href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-google btn-icon font-600"><i class="fab fa-google rounded-xl font-16 text-center"></i> Google 계정으로 로그인</a>
              <!--<a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fab fa-apple rounded-xl font-16 text-center"></i> Apple 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-yellow-dark btn-icon font-600"><i class="text-center rounded-xl" style="position: absolute;left: 0px;top: 0px;line-height: 43px;width: 40px;height: 100%;background-color: rgba(0, 0, 0, 0.1);"><img src="https://d34l91104zg4p3.cloudfront.net/assets/logo_kakao.png" height="16" style="vertical-align: middle;"/></i> Kakao 계정으로 로그인</a>-->
          </div>
      </vue-bottom-sheet>
      <div id="menu-login" class="menu menu-box-bottom rounded-half">
          <div class="menu-title">
              <div class="m-3 text-center">
                  <div class="color-primary font-noto font-20 font-600"><i class="ico ico-wedive-w color-primary ico-26" style="display: inline-block;margin:0;margin-bottom: -5px;"></i> wedive에 로그인</div>
              </div>
              <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
          </div>
          <div class="content pt-3 row">
              <a v-on:click="loginGoogle()" href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-google btn-icon font-600"><i class="fab fa-google rounded-xl font-16 text-center"></i> Google 계정으로 로그인</a>
              <!--<a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fab fa-apple rounded-xl font-16 text-center"></i> Apple 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-yellow-dark btn-icon font-600"><i class="text-center rounded-xl" style="position: absolute;left: 0px;top: 0px;line-height: 43px;width: 40px;height: 100%;background-color: rgba(0, 0, 0, 0.1);"><img src="https://d34l91104zg4p3.cloudfront.net/assets/logo_kakao.png" height="16" style="vertical-align: middle;"/></i> Kakao 계정으로 로그인</a>-->
          </div>
          <br/>
      </div>

      
    <div class="menu-hider"></div>
    <div id="snackbar-login-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>로그인에 실패하였습니다.</div>
    <div id="snackbar-login-success" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>{{nickName}}님 돌아와주셨군요!</div>
  </div>
</template>

<script>
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import { GoogleAuthProvider, getAuth, signOut, signInWithPopup, onAuthStateChanged, onIdTokenChanged  } from "firebase/auth";
const axios = require("axios")
var closeBottomSheet = null;
var closeCreateSheet = null;

export default {
  name: 'App',
  mounted() {
    if (localStorage.tokenAt == null || (new Date().getTime() - localStorage.tokenAt) > 50000) {
      this.getFirebaseToken()
    }

    try {
      const userInformation = JSON.parse(Android.getUserInformation());
    
      console.log(`android connected, ${JSON.stringify(userInformation)}`);
      localStorage.setItem(userAuthKey, userInformation);
      if (userInformation.uid) localStorage.uid = userInformation.uid;
      if (userInformation.idToken) localStorage.idToken = userInformation.idToken;
      if (userInformation.email) localStorage.userEmail = userInformation.email;
      if (userInformation.languageCode) localStorage.languageCode = userInformation.languageCode;
    }catch(e) {

    }
    
    
    //$("#menu-main").attr("data-menu-width", $( window ).width());
    
    try {
      var item = window.location.pathname;
      if (item == '/') {
        //$("#wedive-add").removeClass("hide");
        //$("#wedive-search").removeClass("hide");
        $("#wedive-noti").removeClass("hide");
      } else if (item == '/chat_home') {
        $("#wedive-add").removeClass("hide");
        $("#wedive-noti").removeClass("hide");
      }else if (item == '/forum_home') {
        $("#wedive-add").removeClass("hide");
        //$("#wedive-group").removeClass("hide");
        $("#wedive-noti").removeClass("hide");
        $("#wedive-search").removeClass("hide");
      } else if (item == '/site_list') {
        $("#wedive-search").removeClass("hide");
        $("#wedive-noti").removeClass("hide");
      } else if (item == '/other_home') {
        $("#wedive-noti").removeClass("hide");
      } else {
        setTimeout(function(item) {
          try {
            var item_menu = $("[data-menu-active]").data("menu-active").replace('nav-', '');
            if (item_menu == 'site' && item != '/site/search' && item != '/site_home' && item != '/diving/search') {
              $("#wedive-share").fadeIn(1000);
              $("#wedive-share").removeClass("hide");
            }
          } catch(e) {}
        },1000, item)
        
      }
    } catch (e) {console.log(e)}
    
    
    
    //if (localStorage.perferedSite == null) {
      localStorage.perferedSite = '/site_list';
    //}

    window.onpopstate = history.onpushstate = function(e) {
      if(window.location.href.split('/').pop().indexOf('modal')===-1){
        //console.log(">>set1");
        //window.localStorage.gclose = "1";
        try {
          $(".gclose").eq(0).click();
        } catch (e) {

        }

        try {
          var activeMenu = document.querySelectorAll('.menu-active');
          for(var i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
        } catch (e) {
          
        }

        try {
          closeBottomSheet();
        } catch (e) {
          
        }

        try {
          closeCreateSheet();
        } catch (e) {
          
        }
        
      }
    }
  },
  async created() {
    var noti = null;
    var now = (new Date()).getTime();
    if (localStorage.idToken != null && (localStorage.notiAt == null || (localStorage.notiAt && (now - parseInt(localStorage.notiAt) > 3600000)))) {
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                query GetNotifications($skip: Int, $limit: Int) {
                  getNotifications(skip: $skip, limit: $limit) {
                      read
                  }
                }
                `,
                variables: {
                    limit: 1,
                    skip: 0
                }

            }
        });
        if ((result.data && result.data.data && result.data.data.getNotifications)) {
            this.notiData = result.data.data.getNotifications;
            localStorage.notiAt = now;
            localStorage.notiData = JSON.stringify(this.notiData);
        }
    } else if (localStorage.notiData && localStorage.notiData != '') {
      this.notiData = JSON.parse(localStorage.notiData);
    }

    closeBottomSheet = this.closeLoginBottomSheet;
    closeCreateSheet = this.closeCreateSheet;
  },
  destroyed() {
    
  },
  data () {
    return {
      idToken: localStorage.idToken,
      nickName: localStorage.nickName,
      userThumbnail: localStorage.userThumbnail,
      gender: localStorage.gender,
      pathname: window.location.pathname,
      notiData: null,
      footer_list: ['/', '/site_list', '/site_map', '/forum_home', '/chat_home', '/other_home'],
      locationsearch: window.location.search,
      report_items: localStorage.reports ? JSON.parse(localStorage.reports) : [],
    }
  },
  /*apollo: {
    getNotifications: {
      query:gql `
        query GetNotifications($skip: Int, $limit: Int) {
          getNotifications(skip: $skip, limit: $limit) {
              read
          }
        }
      `,
      variables() {
        return {
          limit: 1,
          skip: 0
        }
      },
      result() {
      },
    },
  },*/
  components: {
    VueBottomSheet,
  },
  methods: {
    bottomSheetOepn() {
      // jjangs : open menu
      if(window.location.href.split('/').pop() != 'modal'){
          window.history.pushState({}, 'modal', (window.location.pathname == '/' ? '/modal' : window.location.pathname + '/modal'));
      }
    },
    bottomSheetClose() {
      if(window.location.href.split('/').pop() == 'modal'){
        window.history.back(); 
      }
    },
    goNoti() {
      if(this.idToken != null && this.nickName != null && this.nickName != 'null')
        location.href = '/other/notification';
      else if (this.nickName == null || this.nickName == 'null')
        this.$refs.nicknameBottomSheet.open();
      else
        this.$refs.loginBottomSheet.open();
    },
    move(loc) {
      location.href = loc + location.search;
    },
    openCreateSheet() {
      if(this.idToken != null && this.nickName != null && this.nickName != 'null')
        this.$refs.createBottomSheet.open();
      else if (this.nickName == null || this.nickName == 'null')
        this.$refs.nicknameBottomSheet.open();
      else
        this.$refs.loginBottomSheet.open();
    },
    closeCreateSheet() {
      this.$refs.createBottomSheet.close();
    },
    goSwimming() {
      $(".pool").css("background", "#2c9ac3");
      $(".pool img").css("-webkit-filter", "invert(100%)");
      $(".pool img").css("filter", "invert(100%)");
      $(".pool p").css("color", "white");
      if(window.location.href.split('/').pop() == 'modal'){
        window.history.back(); 
      }
      setTimeout(function() {
        location.href='/buddy/swimming';
      }, 30);
    },
    goSea() {
      console.log("sea")
      $(".sea").css("background", "#2c9ac3");
      $(".sea img").css("-webkit-filter", "invert(100%)");
      $(".sea img").css("filter", "invert(100%)");
      $(".sea p").css("color", "white");
      if(window.location.href.split('/').pop() == 'modal'){
        window.history.back(); 
      }
      setTimeout(function() {
        location.href='/buddy/sea';
      }, 30);
    },
    goAbroad() {
      $(".oversea").css("background", "#2c9ac3");
      $(".oversea img").css("-webkit-filter", "invert(100%)");
      $(".oversea img").css("filter", "invert(100%)");
      $(".oversea p").css("color", "white");
      if(window.location.href.split('/').pop() == 'modal'){
        window.history.back(); 
      }
      setTimeout(function() {
        location.href='/buddy/abroad';
      }, 30);
    },
    openLoginBottomSheet() {
      this.$refs.loginBottomSheet.open();
    },
    closeLoginBottomSheet() {
      this.$refs.loginBottomSheet.close();
    },
    moveSite() {
      //location.href = localStorage.perferedSite + location.search;
      location.href = '/site_map';
    },
    settingForum() {
      //var menuData = "forum-add";
      var menuData = "agenda-type-add";
      document.getElementById(menuData).classList.add('menu-active');
      document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
      // jjangs : open menu
      if(window.location.href.split('/').pop() != 'modal'){
          window.history.pushState({}, 'modal', window.location.pathname + '/modal');
      }

      
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
    },
    addItem() {
      var item = $("[data-menu-active]").data("menu-active").replace('nav-', '');
      switch(item) {
        case "buddy":
          this.openCreateSheet()
        break;
        case "forum":
          if(this.idToken != null && this.nickName != null && this.nickName != 'null') {
            var menuData = "agenda-add";
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
            // jjangs : open menu
            if(window.location.href.split('/').pop() != 'modal'){
                window.history.pushState({}, 'modal', window.location.pathname + '/modal');
            }

            
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
          }
          else if (this.nickName == null || this.nickName == 'null') {
            this.$refs.nicknameBottomSheet.open();
          }
          else {
            this.$refs.loginBottomSheet.open();
          }
        break;
        case "chat":
          var menuData = "chat-add";
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          // jjangs : open menu
          if(window.location.href.split('/').pop() != 'modal'){
              window.history.pushState({}, 'modal', window.location.pathname + '/modal');
          }

          
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

          setTimeout(function() {
            $("#search_typeahead > .input-group > input").focus();
          }, 500);
        break;
      }
    },
    searchItem() {
      var item = window.location.pathname;
      if (item == '/site_list') {
        location.href='/site/search';
      }
      else if (item == '/forum_home') {
        if ($("#tab-forum .swiper .swiper-wrapper .swiper-slide-active").text() == '동호회') {
          location.href = '/community/search';
        } else {
          location.href = '/forum/search';
        }
      }
      else if (item == '/') {
        location.href='/diving/search';
      }
    },
    shareItem() {
      console.log("shareItem")
    },
    goHack: function() {
        window.history.back();
    },
    goHome: function() {
      if (Android != null)
        window.location.href="/";
    },
    signOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        try {
          Android.signOut()
        } catch (e) {

        }
        console.log("sign-out success");
        // Sign-out successful.
      }).catch((error) => {
        console.log(error);
        // An error happened.
      });
    },
    async deleteCurrentUser() {
      var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
                mutation Mutation {
                  deleteCurrentUser {
                    success
                  }
                }
            `
        }
      });
      console.log(result);
    },
    getFirebaseToken() {
      const auth = getAuth();
      onIdTokenChanged(auth, async (user) => {
        if (user) {
          localStorage.uid = user.uid;
          localStorage.idToken = await user.getIdToken(false);
          localStorage.tokenAt = (new Date()).getTime();
        } else {
          //console.log("signed out");
        }
      });
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          localStorage.uid = user.uid;
          localStorage.idToken = await user.getIdToken(false);
          localStorage.tokenAt = (new Date()).getTime();
        } else {
          //console.log("signed out");
        }
      });
    },
    loginGoogle: function() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      auth.languageCode = 'ko';

      signInWithPopup(auth, provider)
      .then(async(result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          var idToken = await user.getIdToken(false);
          localStorage.userName = user.hasOwnProperty('displayName') ? user.displayName : "";
          localStorage.providerId = user.providerId;
          localStorage.userEmail = user.hasOwnProperty('email') ? user.email : "";
          localStorage.idToken = idToken;
          //console.log(localStorage.idToken);
          localStorage.uid = user.hasOwnProperty('uid') ? user.uid : "";
          //console.log(localStorage.uid);
          localStorage.loginAt = (new Date()).getTime();

          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    query Query($uid: ID!) {
                      getUserByUid(uid: $uid) {
                        _id
                        nickName
                        birthAge
                        gender
                      }
                    }
                `,
                variables: {
                    "uid": localStorage.uid
                }
            }
          });
          if (result.data.data.getUserByUid != null ) {
            localStorage.nickName = result.data.data.getUserByUid.nickName;
            localStorage.userId = result.data.data.getUserByUid._id;
            localStorage.userGender = result.data.data.getUserByUid.gender;
            this.nickName = localStorage.nickName;
            
            this.$refs.loginBottomSheet.close();

            var toastData = 'snackbar-login-success';
            setTimeout(function() {
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
            },1000);
            
            if (location.pathname.includes('/modal')) {
              window.history.back();
            }
            location.reload();
          } else {
            // 신규 아이디를 등록해준다.
            var input_temp = {"uid": localStorage.uid, "authProvider": localStorage.providerId, "oauthToken": localStorage.idToken, "email": localStorage.userEmail, "name": localStorage.userName};
            const ipt = input_temp;
            
            var result2 = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Mutation($input: UserInput) {
                            upsertUser(input: $input) {
                                _id
                            }
                        }
                    `,
                    variables: {
                        "input": ipt
                    }
                }
            });
            location.href='/user/create';
          }
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          
          console.log(errorCode)
          console.log(errorMessage)
          var toastData = 'snackbar-login-error';
          var notificationToast = document.getElementById(toastData);
          var notificationToast = new bootstrap.Toast(notificationToast);
          notificationToast.show();
      });
    },
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.footer-bar > a{color: #a8a8b1;flex: 1 1 0px !important;}
.footer-bar .active-nav span {color: #1d397c !important;font-weight:600 !important;}
.menu-ico {height:22px;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;margin-bottom:5px;}
#nav-home > .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu1_off.png');}
#nav-buddy > .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu0_off.png');}
#nav-site > .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu2_off.png');}
#nav-forum > .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu3_off.png');}
#nav-chat  .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu4_off.png');}
#nav-other  .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu5_off.png');}
#nav-training > .menu-ico {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu5_off.png');}
.active-nav > .menu-ico0 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu0_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico1 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu1_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico2 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu2_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico3 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu3_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico4 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu4_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico5 {background: url('https://d34l91104zg4p3.cloudfront.net/assets/menu5_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('https://d34l91104zg4p3.cloudfront.net/assets/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:block;}
.ico-26 {width: 26px !important; height: 26px !important;}
.ico-26:before {background-size: 26px 26px !important;width: 26px !important;height: 26px !important;}
.has-notification:before {content: '●';color: #ff5160;position:absolute;top:0;font-size:5px;margin-top: -9px;margin-left: 20px;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
</style>
