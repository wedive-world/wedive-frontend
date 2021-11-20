<template>
  <div>
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <a class="header-title" v-on:click="goHome()"><img class="logo-image" src="/static/images/logo-dark.svg" height="38" /></a>
              <a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>
          </div>

          
          <div id="footer-bar" class="footer-bar">
            <a href="/" id="nav-home"><div class="menu-ico menu-ico0"></div><span>홈</span></a>
            <a href="/buddy_home" id="nav-buddy"><div class="menu-ico menu-ico1"></div><span>버디찾기</span></a>
            <a href="/site_home" id="nav-site"><div class="menu-ico menu-ico2"></div><span>사이트찾기</span></a>
            <a href="/shop_home" id="nav-shopping"><div class="menu-ico menu-ico3"></div><span>쇼핑</span></a>
            <a href="/chat_home" id="nav-chat"><div class="menu-ico menu-ico4"></div><span>채팅</span></a>
          </div>
        

          <div class="page-title-wrapper">
          </div>
          <div class="page-title page-title-fixed ps-3">
            <i class="fas fa-arrow-left font-24 me-2 pt-2 hide" style="opacity: 0.6;" id="page-back" v-on:click="goBack()"></i>
            <img v-on:click="goHome()" class="logo-image mt-n2" style="margin-right: auto;" src="/static/images/logo-dark.svg" height="46"/>
            <a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i class="fa fa-moon"></i></a>
            <a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i class="fa fa-sun"></i></a>
            <a href="#" class="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i class="fa fa-bars"></i></a>
          </div>
          <div class="page-title-clear"></div>

          <router-view/>
          
          
          <!-- Be sure this is on your main visiting page, for example, the index.html page-->
          <!-- Install Prompt for Android -->
          <div id="menu-install-pwa-android" class="menu menu-box-bottom rounded-m">
              <img class="mx-auto mt-4 rounded-m" src="/static/images/logo_d.png" alt="img" width="90">
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
                  <img class="mx-auto mt-4 rounded-m" src="/static/images/logo_d.png" alt="img" width="90">
                  <h4 class="text-center mt-4 mb-2">WeDive on your Home Screen</h4>
                  <p class="text-center ms-3 me-3">
                      Install WeDive on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
                  </p>
                  <a href="#" class="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-900 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
              </div>
          </div>  
          
      </div>

    <div class="menu-hider"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
      goHack: function() {
          window.history.back();
      },
      goHome: function() {
          window.location.href="/";
      }
  }
}

const userAgent = navigator.userAgent.toLowerCase();

if (userAgent.indexOf('android') !== -1) {

  window.console.log(`android connected, ${andorid.getUserUid()}`)

} else if (userAgent.indexOf('iphone') !== -1 || userAgent.indexOf('ipad') !== -1) {
  //ios

} else { // 안드로이드, IOS 가 아닌 경우 (더 조건을 추가해서 처리해도 됨)
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
#nav-home > .menu-ico {background: url('/static/images/menu0_off.png');}
#nav-buddy > .menu-ico {background: url('/static/images/menu1_off.png');}
#nav-site > .menu-ico {background: url('/static/images/menu2_off.png');}
#nav-shopping > .menu-ico {background: url('/static/images/menu3_off.png');}
#nav-chat  .menu-ico {background: url('/static/images/menu4_off.png');}
#nav-training > .menu-ico {background: url('/static/images/menu5_off.png');}
.active-nav > .menu-ico0 {background: url('/static/images/menu0_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico1 {background: url('/static/images/menu1_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico2 {background: url('/static/images/menu2_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico3 {background: url('/static/images/menu3_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
.active-nav > .menu-ico4 {background: url('/static/images/menu4_on.png') !important;background-size: 22px 22px !important;background-position: center !important;background-repeat: no-repeat !important;}
</style>
