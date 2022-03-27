<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">알림 설정</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div data-menu-active="nav-other"></div>

    
    <div :class="'page-content font-noto card text-center pb-0 mb-0' + ((idToken && nickName)?' hide':'')" style="height: calc(100vh - 50px);display:block;margin-top:50px;">
        <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_login.jpg" width="60%" style="margin-top:25%;"/>
        <p class="color-gray mt-2">{{ login_word }}이 필요한 페이지 입니다.</p>
        <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
    </div>
    <div :class="'page-content mb-0 card' + ((idToken && nickName)?'':' hide')" style="margin-top:50px;display: inherit;min-height: calc(100vh - 50px);">
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">알림</h2>
            </div>
        </div>
        <div class="" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0" style="position: relative;">
                    <span class="ms-2 vertical-m">채팅 알림</span>
                    <div class="ms-auto me-4 pe-2 mt-2 wedive-right">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-1">
                            <label class="custom-control-label" for="toggle-id-1"></label>
                        </div>
                    </div>
                </h2>
            </div>
        </div>
        <div class="" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0" style="position: relative;">
                    <span class="ms-2 vertical-m">노티 알림</span>
                    <div class="ms-auto me-4 pe-2 mt-2 wedive-right">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-2">
                            <label class="custom-control-label" for="toggle-id-2"></label>
                        </div>
                    </div>
                </h2>
            </div>
        </div>
        <div class="" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0" style="position: relative;">
                    <span class="ms-2 vertical-m">진동</span>
                    <div class="ms-auto me-4 pe-2 mt-2 wedive-right">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-3">
                            <label class="custom-control-label" for="toggle-id-3"></label>
                        </div>
                    </div>
                </h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">기타</h2>
            </div>
        </div>
        <a class="" data-menu="menu-interrupt" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0" style="position: relative;">
                    <span class="ms-2 vertical-m">방해금지 시간대 설정</span>
                    <div class="ms-auto me-4 pe-2 mt-2 wedive-right">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-4" disabled="disabled">
                            <label class="custom-control-label" for="toggle-id-4"></label>
                        </div>
                    </div>
                </h2>
            </div>
        </a>
    </div>
    


    <!-- End of Page Content--> 
    <div id="menu-interrupt" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a href="" class="header-title color font-noto font-16">방해금지 시간대 설정</a>
            </div>
        </div>
        
        <div class="card rounded-0 content" style="display: block;">
            <div class="" style="z-index:1;min-height:55px;">
                <div class="content pb-0">
                    <h2 class="font-15 font-300 mb-0" style="position: relative;">
                        <span class="vertical-m">방해금지 시간대 설정</span>
                        <div class="ms-auto me-4 pe-2 mt-2 wedive-right">
                            <div class="custom-control ios-switch">
                                <input type="checkbox" class="ios-input" id="toggle-id-5">
                                <label class="custom-control-label" for="toggle-id-5"></label>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
            <div class="me-2 ms-2">
                <span class="font-noto font-200" style="width: 48%;">시작</span><span class="font-noto font-200" style="width: 48%;float: right;">종료</span>
                <vue-timepicker class="wedive-form-time" format="hh:mm A" style="width: 48%;"></vue-timepicker>
                <vue-timepicker class="wedive-form-time" format="hh:mm A" style="width: 48%;float: right;"></vue-timepicker>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import gql from 'graphql-tag'
const axios = require("axios");

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
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  beforeDestroy() {
    
  },
  data () {
    return {
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
    }
  },
  components: {
    VueTimepicker
  },
  methods: {
    
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-right {position: absolute;top: 0px;right: 10px;}
.ios-switch {margin-top: 0px !important;}
</style>
