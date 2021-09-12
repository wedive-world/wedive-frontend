<template>
  <div id="app">
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <a href="index.html" class="header-title"><img class="logo-image" src="/static/images/logo-dark.svg" height="38" /></a>
              <a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>
          </div>

          
          <div id="footer-bar" class="footer-bar-6">
              <a href="index-components.html" id="nav-buddy"><img src="/static/images/menu1.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>버디찾기</span></a>
              <a href="index-pages.html" id="nav-training"><img src="/static/images/menu2.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>강의찾기</span></a>
              <a href="index.html" class="circle-nav" id="nav-welcome"><i class="fa fa-home"></i><span>Home</span></a>
              <a href="index-projects.html" id="nav-center"><img src="/static/images/menu3.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>센터찾기</span></a>
              <a href="#" data-menu="menu-main"><img src="/static/images/menu4.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>채팅</span></a>
          </div>
        
          <div class="page-title-wrapper">
          </div>
          <div class="page-title page-title-fixed ps-3">
            <i class="fas fa-arrow-left font-24 me-2 pt-2 hide" style="opacity: 0.6;" id="page-back"></i>
            <img class="logo-image mt-n2" style="margin-right: auto;" src="/static/images/logo-dark.svg" height="46"/>
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
              <h4 class="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
              <p class="text-center boxed-text-xl">
                  Install Appkit on your home screen, and access it just like a regular app. It really is that simple!
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
                  <h4 class="text-center mt-4 mb-2">Appkit on your Home Screen</h4>
                  <p class="text-center ms-3 me-3">
                      Install Appkit on your home screen, and access it just like a regular app. Open your Safari menu and tap "Add to Home Screen".
                  </p>
                  <a href="#" class="pwa-dismiss close-menu btn-full mt-3 text-center text-uppercase font-900 color-red-light opacity-90 font-110 pb-5">Maybe later</a>
              </div>
          </div>  
          
      </div>

    
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
