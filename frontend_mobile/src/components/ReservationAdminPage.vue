<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <ContentLoader :width="windowWidth" :height="windowHeight-58" id="div_content_loader" primaryColor="#e3e7ef" secondaryColor="#f4f7ff">
        <rect x="20" y="60" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="130" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="200" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="270" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="340" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="410" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="480" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="550" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="620" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="20" y="690" rx="10" ry="10" :width="windowWidth-40" height="60" />
    </ContentLoader>

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">예약관리 (관리자)</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div class="page-content transform-none" style="margin-top: 50px;padding:0;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0" style="min-height: calc(100vh - 50px)">
            <div v-if="getOpenedReservation.length == 0" class="text-center">
                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="60%" style="margin-top:25%;" />
                <p class="color-gray-light-mid">앗! 아직 예약된 내용이 없네요!</p>
                <a href="/site_map" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"> 다이빙 떠나기 </a>
            </div>
            <div v-else class="content mt-1">
                <div v-for="reservation in getOpenedReservation">
                    <div class="map-box">
                        <a :href="'/reservation/' + reservation._id">
                            <div :class="'pt-2 pb-2 bx position-relative' + ((reservation.status == 'complete') ? ' opacity-40':'')">
                                <div class="justify-content-center mb-0 text-start font-noto">
                                    <div class="thumb-img me-2">
                                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                            <defs>
                                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                            <clipPath id="clipSquircle">
                                                <use xlink:href="#shapeSquircle"/>
                                            </clipPath>
                                            </defs>
                                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="reservation.backgroundImage ? reservation.backgroundImage : '/static/empty.jpg'"/>
                                        </svg>
                                    </div>
                                    
                                    <div class="mt-2" style="display:inline-block;vertical-align: top;max-width: calc(100vw - 122px);">
                                        <h4 class="mb-0 font-16 font-500 ellipsis" style="">{{ (reservation.dateStartedAt.getMonth()+1) + '월' + reservation.dateStartedAt.getDate() + '일' + ((reservation.dateStartedAt.getMonth() != reservation.dateFinishedAt.getMonth() || reservation.dateStartedAt.getDate() != reservation.dateFinishedAt.getDate()) ? ' ~ ' + (reservation.dateFinishedAt.getMonth()+1) + '월' + reservation.dateFinishedAt.getDate() + '일' : '') }}, {{ reservation.peopleNumber + '명 예약' }}</h4>
                                        <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ reservation.location }}</p>
                                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis color-gray">{{ statusDic[reservation.status] }} | {{ (reservation.dateCreatedAt.getMonth()+1) + '월' + reservation.dateCreatedAt.getDate() + '일 예약함'}}
                                        {{ ' (' + parseInt((now.getTime() - reservation.dateCreatedAt.getTime()) / (1000 * 3600 * 24)) + '일전)' }}
                                        </p>
                                    </div>
                                    <!--<span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">
                                        <i class="fa fa-user color-gray"></i>
                                        <span class="" style="margin-right:2px;">{{ diving.participants.filter(parti=>parti.status=='joined').length + 1 }}</span>
                                    </span>-->
                                </div>
                            </div>
                        </a>
                    </div>
                    <!--<div class="divider mt-3 mb-3"></div>-->
                </div>
                
                
                
            </div>
            
        </div>
    
    </div>
    

  </div>
</template>
<script>
import gql from 'graphql-tag'
import { ContentLoader } from 'vue-content-loader'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  beforeRouteEnter(to, from, next) {
    if (localStorage.uid != 'vNGp2P5dvGSMXFLMeWMizMqBNtQ2' && localStorage.uid != 'jOdIDk2TuGe88mHscllU2sdj7p22' && localStorage.uid != 'teQTnjYiQrRj8jTcLuHWFOLAta82' && localStorage.uid != 'RuOiMt9YUTbRUJQTrXv4cWMEimr2') {
        location.href = '/reservation/my'
        return false;
    } else {
        next(vm => {});
    }
  },
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  components: {
    ContentLoader,
  },
  data () {
    return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        getOpenedReservation: [],
        statusDic: {requested : '요청완료',accepted : '예약승인',complete : '종료',rejected : '거절',cancelRequested : '취소요청중',cancelAccepted : '취소승인',canceled : '취소',cancelRejected : '취소거절'},
        now : new Date(),
    }
  },
  apollo: {
      getOpenedReservation: {
          query:gql `
            query Query {
                getOpenedReservation {
                    _id
                    peopleNumber
                    startedAt
                    finishedAt
                    name
                    email
                    phoneNumber
                    user {
                    _id
                    uid
                    email
                    nickName
                    birthAge
                    gender
                    }
                    status
                    adminStatus
                    admin {
                    _id
                    uid
                    email
                    nickName
                    birthAge
                    gender
                    }
                    receipts {
                    product {
                        unitName
                        amount
                    }
                    quantity
                    }
                    requirementText
                    createdAt
                    updatedAt
                    reviews {
                    title
                    rating
                    content
                    author {
                        uid
                        nickName
                        birthAge
                        gender
                        views
                        likes
                    }
                    }
                    reviewCount
                    diveCenter {
                    _id
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                        _id
                        reference
                    }
                    name
                    uniqueName
                    description
                    }
                    diveShop {
                    _id
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                        _id
                        reference
                    }
                    name
                    uniqueName
                    description
                    }
                }
                }
          `,
          variables() {
              return {
                limit: 20,
                uid: (localStorage.uid ? localStorage.uid : '')
              }
          },
          result() {
              this.getOpenedReservation.forEach(x => {
                  x.centerData = (x.diveCenter ? x.diveCenter : (x.diveShop ? x.diveShop : null))
                  x.backgroundImage = (x.centerData && x.centerData.backgroundImages && x.centerData.backgroundImages.length > 0 ? x.centerData.backgroundImages[0].thumbnailUrl : '/static/empty.jpg');
                  x.location = (x.centerData ? x.centerData.name : '');
                  x.dateStartedAt = new Date(x.startedAt);
                  x.dateFinishedAt = new Date(x.finishedAt);
                  x.dateCreatedAt = new Date(x.createdAt);
              });
              this.getOpenedReservation.sort(function(a, b) {
                  return a.startedAt > b.startedAt ? -1 : 1;
              });
              setTimeout(function() {
                $("#div_content_loader").hide();
              },200);
          }
      }
  },
  methods: {
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

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
  },
  
}


</script>


<style scoped>
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;top:18px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
.position-relative {position: relative;}

.thumb-img {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
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
