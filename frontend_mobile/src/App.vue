<template>
  <div>
    <!--<div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-load="">
    </div>-->
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <a class="header-title" href="/"><img class="logo-image" src="/static/images/assets/logo-gray.svg" height="42" /></a>
              <!--<a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>-->
          </div>

          
          <div id="footer-bar" class="footer-bar" style="border-radius: 30px 30px 0px 0px;">
            <a href="/" id="nav-buddy"><div class="menu-ico menu-ico1"></div><span>버디</span></a>
            <a v-on:click="moveSite()" id="nav-site"><div class="menu-ico menu-ico2"></div><span>장소</span></a>
            <a href="/book_home" id="nav-book"><div class="menu-ico menu-ico3"></div><span>로그북</span></a>
            <a href="/chat_home" id="nav-chat"><div class="menu-ico menu-ico4"></div><span>채팅</span></a>
            <a href="/other_home" id="nav-other"><div class="menu-ico menu-ico5"></div><span>더보기</span></a>
          </div>
        

          <div class="page-title-wrapper">
          </div>
          <div class="page-title page-title-fixed ps-3">
            <i class="fas fa-arrow-left font-24 me-2 pt-2 hide" style="opacity: 0.6;" id="page-back" v-on:click="goBack()"></i>
            <img href="/" class="logo-image" style="margin-right: auto;" src="/static/images/assets/logo-gray.svg" height="42"/>
            <a v-if="pathname == '/'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="/static/images/assets/icon_buddy_new.png" width="28"></a>
            <a v-else-if="pathname == '/chat_home'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="/static/images/assets/icon_chat_new.png" width="26"></a>
            <a v-else-if="pathname == '/book_home'" v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="/static/images/assets/icon_book_new.png" width="24"></a>
            <a v-else v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><img src="/static/images/assets/icon_write.png" width="24"></a>
            <a v-on:click="addItem()" id="wedive-group" class="page-title-icon color-theme hide"><img src="/static/images/assets/icon_setting_fill.png" width="26"></a>
            <a v-if="$route.path=='/site_list'" href="/site_home" class="page-title-icon font-18" style="color: #858585;margin-right: 13.3333333333px;"><img src="/static/images/assets/icon_map_fill.png" width="26"></a>
            <a v-on:click="searchItem()" id="wedive-search" class="page-title-icon font-18 hide" style="color:#858585 !important;"><img src="/static/images/assets/icon_search_fill.png" width="28"></a>
            <a v-on:click="shareItem()" id="wedive-share" class="page-title-icon font-18 hide" style="color:#858585 !important;"><img src="/static/images/assets/icon_share_fill.png" height="24"/></a>
            <!--<a href="#" class="page-title-icon" data-menu="menu-main" :style="'background: url('+((userThumbnail) ? userThumbnail : '/static/images/assets/user_empty_'+((gender)?gender:'m')+'.png')+');background-size:cover;'"></a>-->
          </div>
          <div class="page-title-clear"></div>

          
          <router-view/>
          
          
          
          <!-- Be sure this is on your main visiting page, for example, the index.html page-->
          <!-- Install Prompt for Android -->
          <div id="menu-install-pwa-android" class="menu menu-box-bottom rounded-m">
              <img class="mx-auto mt-4 rounded-m" src="/static/images/assets/logo_d.png" alt="img" width="90">
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
                  <img class="mx-auto mt-4 rounded-m" src="/static/images/assets/logo_d.png" alt="img" width="90">
                  <h4 class="text-center mt-4 mb-2">WeDive on your Home Screen</h4>
                  <p class="text-center ms-3 me-3">
                      Install WeDive on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
                  </p>
                  <a href="#" class="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-900 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
              </div>
          </div>  
          
      </div>

      <!-- Menu login -->
      <vue-bottom-sheet ref="loginBottomSheet">
        <div class="m-3 text-center">
            <div class="color-primary font-noto font-20 font-600"><i class="ico ico-wedive-w color-primary ico-26" style="display: inline-block;margin:0;margin-bottom: -5px;"></i> wedive에 로그인</div>
        </div>
        <div class="content pt-3 row">
              <a v-on:click="loginGoogle()" href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-google btn-icon font-600"><i class="fab fa-google rounded-xl font-16 text-center"></i> Google 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fab fa-apple rounded-xl font-16 text-center"></i> Apple 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-yellow-dark btn-icon font-600"><i class="text-center rounded-xl" style="position: absolute;left: 0px;top: 0px;line-height: 43px;width: 40px;height: 100%;background-color: rgba(0, 0, 0, 0.1);"><img src="/static/images/assets/logo_kakao.png" height="16" style="vertical-align: middle;"/></i> Kakao 계정으로 로그인</a>
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
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-dark-dark btn-icon font-600"><i class="fab fa-apple rounded-xl font-16 text-center"></i> Apple 계정으로 로그인</a>
              <a href="#" class="mb-3 rounded-xl text-start btn btn-m btn-full bg-yellow-dark btn-icon font-600"><i class="text-center rounded-xl" style="position: absolute;left: 0px;top: 0px;line-height: 43px;width: 40px;height: 100%;background-color: rgba(0, 0, 0, 0.1);"><img src="/static/images/assets/logo_kakao.png" height="16" style="vertical-align: middle;"/></i> Kakao 계정으로 로그인</a>
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
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, onIdTokenChanged  } from "firebase/auth";
const axios = require("axios")

export default {
  name: 'App',
  mounted() {
    if (localStorage.tokenAt == null || (new Date().getTime() - localStorage.tokenAt) > 100000) {
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
      if (item == '/' || item == '/chat_home') {
        $("#wedive-add").removeClass("hide");
        $("#wedive-search").removeClass("hide");
      } else if (item == '/book_home') {
        $("#wedive-add").removeClass("hide");
        $("#wedive-group").removeClass("hide");
      } else if (item == '/site_list') {
        $("#wedive-search").removeClass("hide");
      } else {
        setTimeout(function(item) {
          try {
            var item_menu = $("[data-menu-active]").data("menu-active").replace('nav-', '');
            if (item_menu == 'site' && item != '/site_search' && item != '/site_home' && item != '/diving_search') {
              $("#wedive-share").fadeIn(1000);
              $("#wedive-share").removeClass("hide");
            }
          } catch(e) {}
        },1000, item)
        
      }
    } catch (e) {console.log(e)}
    
    
    
    if (localStorage.perferedSite == null) {
      localStorage.perferedSite = '/site_list';
    }
  },
  created() {
    
  },
  destroyed() {
    
  },
  data() {
    return {
      nickName: localStorage.nickName,
      userThumbnail: localStorage.userThumbnail,
      gender: localStorage.gender,
      pathname: window.location.pathname,
    }
  },
  components: {
    VueBottomSheet,
  },
  methods: {
    openLoginBottomSheet() {
      this.$refs.loginBottomSheet.open();
    },
    closeLoginBottomSheet() {
      this.$refs.loginBottomSheet.close();
    },
    moveSite() {
      location.href = localStorage.perferedSite;
    },
    addItem() {
      var item = $("[data-menu-active]").data("menu-active").replace('nav-', '');
      switch(item) {
        case "buddy":
          location.href="/buddy_create";
        break;
        case "book":
          location.href="/book_create";
        break;
        case "chat":
          var menuData = "chat-add";
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');

          
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
        location.href='/site_search';
      }
      if (item == '/') {
        location.href='/diving_search';
      }
      console.log("searchItem");
    },
    shareItem() {
      console.log("shareItem")
    },
    goHack: function() {
        window.history.back();
    },
    goHome: function() {
        window.location.href="/";
    },
    getFirebaseToken() {
      const auth = getAuth();
      onIdTokenChanged(auth, async (user) => {
        if (user) {
          localStorage.uid = user.uid;
          localStorage.idToken = await user.getIdToken(false);
          localStorage.tokenAt = (new Date()).getTime();
        } else {
          console.log("signed out");
        }
      });
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          localStorage.uid = user.uid;
          localStorage.idToken = await user.getIdToken(false);
          localStorage.tokenAt = (new Date()).getTime();
        } else {
          console.log("signed out");
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
            location.href='/user_create';
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
#nav-home > .menu-ico {background: url('/static/images/assets/menu0_off.png');}
#nav-buddy > .menu-ico {background: url('/static/images/assets/menu1_off.png');}
#nav-site > .menu-ico {background: url('/static/images/assets/menu2_off.png');}
#nav-book > .menu-ico {background: url('/static/images/assets/menu3_off.png');}
#nav-chat  .menu-ico {background: url('/static/images/assets/menu4_off.png');}
#nav-other  .menu-ico {background: url('/static/images/assets/menu5_off.png');}
#nav-training > .menu-ico {background: url('/static/images/assets/menu5_off.png');}
.active-nav > .menu-ico0 {background: url('/static/images/assets/menu0_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico1 {background: url('/static/images/assets/menu1_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico2 {background: url('/static/images/assets/menu2_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico3 {background: url('/static/images/assets/menu3_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico4 {background: url('/static/images/assets/menu4_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico5 {background: url('/static/images/assets/menu5_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('/static/images/assets/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:block;}
.ico-26 {width: 26px !important; height: 26px !important;}
.ico-26:before {background-size: 26px 26px !important;width: 26px !important;height: 26px !important;}
</style>
