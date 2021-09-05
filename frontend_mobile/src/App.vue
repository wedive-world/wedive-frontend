<template>
  <div id="app">
    <div id="preloader"><div class="spinner-border color-highlight" role="status"></div></div>
    
      <div id="page">
          
          <div class="header header-auto-show header-fixed header-logo-center">
              <a href="index.html" class="header-title"><img src="/static/images/logo-dark_38.png" height="38" /></a>
              <a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-dark"><i class="fas fa-sun"></i></a>
              <a href="#" data-toggle-theme class="header-icon header-icon-4 show-on-theme-light"><i class="fas fa-moon"></i></a>
              <a href="#" data-menu="menu-share" class="header-icon header-icon-3"><i class="fas fa-share-alt"></i></a>
          </div>

          
          <div id="footer-bar" class="footer-bar-6">
              <a href="index-components.html"><img src="/static/images/menu1.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>버디찾기</span></a>
              <a href="index-pages.html"><img src="/static/images/menu2.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>강의찾기</span></a>
              <a href="index.html" class="circle-nav active-nav"><i class="fa fa-home"></i><span>Home</span></a>
              <a href="index-projects.html"><img src="/static/images/menu3.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>센터찾기</span></a>
              <a href="#" data-menu="menu-main"><img src="/static/images/menu4.png" height="22" style="margin-bottom:5px;opacity: 65%;" /><span>채팅</span></a>
          </div>
              
          <div class="page-title page-title-fixed">
          <img src="/static/images/logo-dark_38.png" style="padding-top: 3px;margin-left: 15px;margin-right: auto;"/>
              <a href="#" class="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-share"><i class="fa fa-share-alt"></i></a>
              <a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-light" data-toggle-theme><i class="fa fa-moon"></i></a>
              <a href="#" class="page-title-icon shadow-xl bg-theme color-theme show-on-theme-dark" data-toggle-theme><i class="fa fa-lightbulb color-yellow-dark"></i></a>
              <a href="#" class="page-title-icon shadow-xl bg-theme color-theme" data-menu="menu-main"><i class="fa fa-bars"></i></a>
          </div>
          <div class="page-title-clear"></div>

          <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-welcome" data-menu-load=""></div>    
          <div id="menu-share" class="menu menu-box-bottom rounded-m"  data-menu-load="" data-menu-height="370"> </div> 
          <div id="menu-colors" class="menu menu-box-bottom rounded-m" data-menu-load="" data-menu-height="480"></div>

          
          <div class="page-content">

              <router-view/>

              
          </div>
          <!-- End of Page Content--> 
          <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

          <!-- Menu Share -->
          <div id="menu-share" class="menu menu-box-bottom menu-box-detached">
              <div class="menu-title mt-n1"><h1>Share the Love</h1><p class="color-highlight">Just Tap the Social Icon. We'll add the Link</p><a href="#" class="close-menu"><i class="fa fa-times"></i></a></div>
              <div class="content mb-0">
                  <div class="divider mb-0"></div>
                  <div class="list-group list-custom-small list-icon-0">
                      <a href="auto_generated" class="shareToFacebook external-link">
                          <i class="font-18 fab fa-facebook-square color-facebook"></i>
                          <span class="font-13">Facebook</span>
                          <i class="fa fa-angle-right"></i>
                      </a>
                      <a href="auto_generated" class="shareToTwitter external-link">
                          <i class="font-18 fab fa-twitter-square color-twitter"></i>
                          <span class="font-13">Twitter</span>
                          <i class="fa fa-angle-right"></i>
                      </a>
                      <a href="auto_generated" class="shareToLinkedIn external-link">
                          <i class="font-18 fab fa-linkedin color-linkedin"></i>
                          <span class="font-13">LinkedIn</span>
                          <i class="fa fa-angle-right"></i>
                      </a>        
                      <a href="auto_generated" class="shareToWhatsApp external-link">
                          <i class="font-18 fab fa-whatsapp-square color-whatsapp"></i>
                          <span class="font-13">WhatsApp</span>
                          <i class="fa fa-angle-right"></i>
                      </a>   
                      <a href="auto_generated" class="shareToMail external-link border-0">
                          <i class="font-18 fa fa-envelope-square color-mail"></i>
                          <span class="font-13">Email</span>
                          <i class="fa fa-angle-right"></i>
                      </a>
                  </div>
              </div>
          </div>

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
