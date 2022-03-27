<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">알림</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
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
            <div v-for="(noti,index) in getNotifications" v-if="noti.title">
                <div v-on:click="clickNoti(noti)" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <h4 class="font-13" style="position: relative;">
                        <i :class="'me-1 '+notiClass[noti.event]"></i><span class="opacity-70"> {{noti.title}} </span>
                        <span :class="'font-13 opacity-50' + (noti.read === false ? ' has-notification abs-right' : '')" style="position:absolute;right:0px;">{{ timeForToday(noti.createdAt) }}</span>
                    </h4>
                    <p class="font-15 mb-0 me-3 ms-3" style="line-height:1.3"> {{noti.message}} </p>
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
        getNotifications: [],
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
      getNotifications: {
        query: gql`
            query Query($skip: Int, $limit: Int) {
                getNotifications(skip: $skip, limit: $limit) {
                    _id
                    targetId
                    targetType
                    subjectType
                    subject {
                    ... on Diving {
                        _id
                    }
                    ... on DiveSite {
                        _id
                    }
                    ... on DivePoint {
                        _id
                    }
                    ... on DiveCenter {
                        _id
                    }
                    ... on Instructor {
                        _id
                    }
                    ... on User {
                        _id
                    }
                    }
                    title
                    message
                    event
                    read
                    createdAt
                }
            }
        `,
        result (result) {
            if ((result.data && result.data.getNotifications)) {
                localStorage.notiAt = (new Date()).getTime();
                if (result.data.getNotifications.length > 0) {
                    localStorage.notiData = JSON.stringify([result.data.getNotifications[0]]);
                } else {
                    localStorage.notiData = '[]';
                }
            }
        },
        fetchPolicy: 'no-cache'
      },
  },
  components: {
    PullTo,
  },
  methods: {
    historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
    },
    async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
          await this.$apollo.queries.getNotifications.refetch()
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
    setData(notiData) {
        this.notiData = notiData;
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
    timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
    },
    async clickNoti(noti) {
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Mutation($notificationId: ID!) {
                        read(notificationId: $notificationId) {
                            success
                        }
                    }
                `,
                variables: {
                    "notificationId": noti._id
                }
            }
          });
          if (result.data && result.data.data && result.data.data.read && result.data.data.read.success == false) {
              console.log("READ RESULT ERR >>");
              console.log(result);
          }
          var type_to_url = {"diving": "diving", "user": "user", "instructor": "instructor", "diveSite": "site", "divePoint": "point", "diveCenter": "center"};
          location.href = "/" + type_to_url[noti.subjectType] + "/" + noti.subject._id;
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
</style>
