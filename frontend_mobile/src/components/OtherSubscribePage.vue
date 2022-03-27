<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">나의 구독 장소</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div data-menu-active="nav-other"></div>

    
    <div :class="'page-content font-noto card text-center pb-0 mb-0' + ((idToken && nickName)?' hide':'')" style="height: calc(100vh - 50px);display:block;margin-top:50px;">
        <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_login.jpg" width="60%" style="margin-top:25%;"/>
        <p class="color-gray mt-2">{{ login_word }}이 필요한 페이지 입니다.</p>
        <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
    </div>
    <div :class="'page-content pb-0' + ((idToken && nickName)?'':' hide')" style="margin-top:50px;">
        <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
        <template slot="top-block" slot-scope="props">
            <div :class="'top-load-wrapper opacity-50' + (props.state === 'loaded-done' ? ' fadeout' : '')">
                <i class="font-18 fas"
                    :class="{
                        'fa-arrow-down': props.state === 'pull',
                        'fa-arrow-down': props.state === 'trigger',
                        'fa-spinner': props.state === 'loading',
                        'fa-check': props.state === 'loaded-done'
                    }"
                    aria-hidden="true">
                </i>
                {{ props.stateText }}
            </div>
        </template>
        <div class="card mb-0" style="min-height: calc(100vh - 50px);">
            <div v-for="site in getUserSubsciption.diveSites">
                <div v-on:click="clickEvent(site, 'site')" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <div v-if="site.backgroundImages && site.backgroundImages.length>0" class="" style="float: left;position: relative;width: 68px; height:68px;">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                            </svg>
                        </div>
                        <!--<img v-bind:src="site.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="68" height="68" style="object-fit: cover;">-->
                    </div>
                    <div class="" style="padding-left: 82px;">
                        <h4 class="mb-2 font-16 font-600">{{ site.name }}</h4>
                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis2 color-gray" style="line-height: 1.3;">{{ site.description }}</p>
                    </div>
                </div>
            </div>
            <div v-for="point in getUserSubsciption.divepoints">
                <div v-on:click="clickEvent(point, 'point')" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <div v-if="point.backgroundImages && point.backgroundImages.length>0" class="" style="float: left;position: relative;width: 68px; height:68px;">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(point.backgroundImages && point.backgroundImages.length > 0) ? point.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                            </svg>
                        </div>
                        <!--<img v-bind:src="point.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="68" height="68" style="object-fit: cover;">-->
                    </div>
                    <div class="" style="padding-left: 82px;">
                        <h4 class="mb-2 font-16 font-600">{{ point.name }}</h4>
                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis2 color-gray" style="line-height: 1.3;">{{ point.description }}</p>
                    </div>
                </div>
            </div>
            <div v-for="center in getUserSubsciption.diveCenters">
                <div v-on:click="clickEvent(center, 'center')" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <div v-if="center.backgroundImages && center.backgroundImages.length>0" class="" style="float: left;position: relative;width: 68px; height:68px;">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(center.backgroundImages && center.backgroundImages.length > 0) ? center.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                            </svg>
                        </div>
                        <!--<img v-bind:src="center.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="68" height="68" style="object-fit: cover;">-->
                    </div>
                    <div class="" style="padding-left: 82px;">
                        <h4 class="mb-2 font-16 font-600">{{ center.name }}</h4>
                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis2 color-gray" style="line-height: 1.3;">{{ center.description }}</p>
                    </div>
                </div>
            </div>
            <div v-for="diving in getUserSubsciption.divings">
                <div v-on:click="clickEvent(diving, 'diving')" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <div v-if="diving.backgroundImages && diving.backgroundImages.length>0" class="" style="float: left;position: relative;width: 68px; height:68px;">
                        <img v-bind:src="diving.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="68" height="68" style="object-fit: cover;">
                    </div>
                    <div class="" style="padding-left: 82px;">
                        <h4 class="mb-2 font-16 font-600">{{ diving.name }}</h4>
                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis2 color-gray" style="line-height: 1.3;">{{ diving.description }}</p>
                    </div>
                </div>
            </div>
        </div>
        </pull-to>
    </div>
    


    <!-- End of Page Content--> 
    
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
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
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        getUserSubsciption: [],
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        notiClass: {"onParticipantJoined": "fas fa-user-friends color-highlight", "onParticipantAccepted": "fas fa-glass-cheers color-twitter", "onDivingPreparation": "fas fa-clock color-whatsapp", "onDivingPublicEnded": "fas fa-calendar color-shopping", "onDivingComplete": "fas fa-check-square color-shopping", "onDivingCreatedInDiveCenter": "fas fa-swimming-pool color-secondary", "onDivingCreatedInDivePoint": "fas fa-fish color-secondary", "onDivingCreatedInDiveSite": "fas fa-fish color-secondary", "onDivingCreatedByInstructor": "fas fa-users color-secondary"},
        scrollTop: 0,
        TOP_DEFAULT_CONFIG: {
            pullText: '당겨서 새로고침', // The text is displayed when you pull down
            triggerText: '업데이트', // The text that appears when the trigger distance is pulled down
            loadingText: '로딩중...', // The text in the load
            doneText: '새로고침 완료', // Load the finished text
            failText: '실패', // Load failed text
            loadedStayTime: 400, // Time to stay after loading ms
            stayDistance: 50, // Trigger the distance after the refresh
            triggerDistance: 70 // Pull down the trigger to trigger the distance
        },
    }
  }, 
  apollo: {
      getUserSubsciption: {
        query: gql`
            query GetUserSubsciption {
                getUserSubsciption {
                    targetIds
                    diveCenters {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages{
                        thumbnailUrl
                    }
                    }
                    divePoints {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages{
                        thumbnailUrl
                    }
                    }
                    diveSites {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages{
                        thumbnailUrl
                    }
                    }
                    divings {
                    _id
                    title
                    description
                    status
                    participants {
                        status
                        name
                        birth
                        gender
                    }
                    maxPeopleNumber
                    startedAt
                    finishedAt
                    }
                    users {
                    _id
                    uid
                    nickName
                    birthAge
                    gender
                    }
                }
            }
        `,
        fetchPolicy: 'no-cache'
      },
  },
  components: {
    PullTo,
  },
  methods: {
    clickEvent(item, type) {
        location.href = '/' + type + '/' + item.uniqueName;
    },
    async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
          await this.$apollo.queries.getUserSubsciption.refetch()
          loaded('done')
        } else {
            console.log("1")
            loaded('done')
            return false;
        }
    },
    handleScroll (event) {
        this.scrollTop = $(document).scrollTop();
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) { 
            return
        } 
        if ((currentScrollPosition < this.lastScrollPosition) == false && this.prev_driection == true) {
            $("#btn_new").show(500);
        } else if ((currentScrollPosition < this.lastScrollPosition) == true && this.prev_driection == false) {
            $("#btn_new").hide(300);
        }
        this.prev_driection = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
    },
    stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
            this.iconLink = '#fa-arrow-down';
        } else if (state === 'loading') {
            this.iconLink = '#fa-spinner';
        } else if (state === 'loaded-done') {
            this.iconLink = '#fa-check';
        }
    },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}

.movebox {animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;}
.chip span {line-height: 24px !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.position-relative {position: relative;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}

.abs-right:before {margin-left:0;right:0 !important;margin-right: -10px;}
.thumb-img {
  position: relative;
  display: inline-block;
  width: 66px;
  height: 66px;
  overflow: hidden;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3csvg width='88px' height='88px' viewBox='0 0 88 88' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M44%2c0.5 C59.8650505%2c0.5 70.7664452%2c3.40244096 77.6820021%2c10.3179979 C84.597559%2c17.2335548 87.5%2c28.1349495 87.5%2c44 C87.5%2c59.8650505 84.597559%2c70.7664452 77.6820021%2c77.6820021 C70.7664452%2c84.597559 59.8650505%2c87.5 44%2c87.5 C28.1349495%2c87.5 17.2335548%2c84.597559 10.3179979%2c77.6820021 C3.40244096%2c70.7664452 0.5%2c59.8650505 0.5%2c44 C0.5%2c28.1349495 3.40244096%2c17.2335548 10.3179979%2c10.3179979 C17.2335548%2c3.40244096 28.1349495%2c0.5 44%2c0.5 Z' fill='none' stroke='rgba(0,0,0,0.3)'%3e%3c/path%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .svg-profile {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .default-txt {
    font-size: 2em;
    fill: #fff;
  }

  .default-bg {
    width: 100%;
    height: 100%;
    @each $num, $color in $userImgBgs {
      &[data-color="#{$num}"] {
        fill: $color;
      }
    }
  }
}
</style>
