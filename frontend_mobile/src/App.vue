<template>
  <div>
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <a class="header-title" href="/"><img class="logo-image" src="/static/images/assets/logo-dark.svg" height="38" /></a>
              <!--<a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>-->
          </div>

          
          <div id="footer-bar" class="footer-bar" style="border-radius: 30px 30px 0px 0px;">
            <a href="/" id="nav-buddy"><div class="menu-ico menu-ico1"></div><span>버디</span></a>
            <a href="/site_home" id="nav-site"><div class="menu-ico menu-ico2"></div><span>장소</span></a>
            <a href="/book_home" id="nav-book"><div class="menu-ico menu-ico3"></div><span>로그북</span></a>
            <a href="/chat_home" id="nav-chat"><div class="menu-ico menu-ico4"></div><span>채팅</span></a>
          </div>
        

          <div class="page-title-wrapper">
          </div>
          <div class="page-title page-title-fixed ps-3">
            <i class="fas fa-arrow-left font-24 me-2 pt-2 hide" style="opacity: 0.6;" id="page-back" v-on:click="goBack()"></i>
            <img href="/" class="logo-image mt-n2" style="margin-right: auto;" src="/static/images/assets/logo-dark.svg" height="46"/>
            <a v-on:click="addItem()" id="wedive-add" class="page-title-icon color-theme hide"><i class="wedive_plus"></i></a>
            <!--<a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i class="fa fa-moon"></i></a>
            <a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i class="fa fa-sun"></i></a>
            <a href="#" class="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i class="fa fa-bars"></i></a>-->
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
    <div id="snackbar-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>로그인에 실패하였습니다.</div>
  </div>
</template>

<script>
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export default {
  name: 'App',
  mounted() {
    var item = ($("#menu-main").data("menu-active")) ? $("#menu-main").data("menu-active").replace("nav-","") : "";
    if (item == 'buddy' || item == 'book' || item == 'chat') {
      $("#wedive-add").removeClass("hide");
    }
  },
  methods: {
    addItem() {
      var item = ($("#menu-main").data("menu-active")) ? $("#menu-main").data("menu-active").replace("nav-","") : "";
      switch(item) {
        case "buddy":
          location.href="/buddy_create";
        break;
        case "book":
          location.href="/book_create";
        break;
        case "chat":
          location.href="/chat_create";
        break;
      }
    },
    goHack: function() {
        window.history.back();
    },
    goHome: function() {
        window.location.href="/";
    },
    loginGoogle: function() {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      auth.languageCode = 'ko';

      signInWithPopup(auth, provider)
      .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          
          localStorage.userName = user.hasOwnProperty('displayName') ? user.displayName : "";
          localStorage.userEmail = user.hasOwnProperty('email') ? user.email : "";
          localStorage.userToken = token;
          localStorage.firebaseUid = user.hasOwnProperty('uid') ? user.uid : "";
          localStorage.photoUrl = user.hasOwnProperty('photoUrl') ? user.photoUrl : "";
          localStorage.loginBy = "google"
          localStorage.loginAt = (new Date()).getTime();

          location.href='/user_create';
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          
          console.log(errorCode)
          console.log(errorMessage)
          var toastData = 'snackbar-error';
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
#nav-training > .menu-ico {background: url('/static/images/assets/menu5_off.png');}
.active-nav > .menu-ico0 {background: url('/static/images/assets/menu0_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico1 {background: url('/static/images/assets/menu1_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico2 {background: url('/static/images/assets/menu2_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico3 {background: url('/static/images/assets/menu3_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico4 {background: url('/static/images/assets/menu4_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('/static/images/assets/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:block;}
.ico-26 {width: 26px !important; height: 26px !important;}
.ico-26:before {background-size: 26px 26px !important;width: 26px !important;height: 26px !important;}
</style>
