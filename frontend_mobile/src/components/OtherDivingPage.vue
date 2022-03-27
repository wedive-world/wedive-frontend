<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">나의 버디찾기</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div class="page-content transform-none" style="margin-top: 50px;padding:0;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0" style="min-height: calc(100vh - 50px)">
            <div v-if="divingData.length == 0" class="text-center">
                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="60%" style="margin-top:25%;" />
                <p class="color-gray-light-mid">앗! 아직 버디찾기를 한번도 해보지 않으셨네요!</p>
                <a href="/buddy_create" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"> 버디찾기 생성 </a>
            </div>
            <div v-else class="content mt-1">
                <div v-for="diving in divingData">
                    <div class="map-box">
                        <a :href="'/diving/' + diving._id">
                            <div :class="'pt-2 pb-2 bx position-relative' + ((diving.status == 'divingComplete') ? ' opacity-40':'')">
                                <div class="justify-content-center mb-0 text-start font-noto">
                                    <div class="thumb-img me-2">
                                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                            <defs>
                                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                            <clipPath id="clipSquircle">
                                                <use xlink:href="#shapeSquircle"/>
                                            </clipPath>
                                            </defs>
                                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="diving.locationData.backgroundImages && diving.locationData.backgroundImages.length > 0 && diving.locationData.backgroundImages[0].thumbnailUrl ? diving.locationData.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                        </svg>
                                    </div>
                                    
                                    <div class="mt-2" style="display:inline-block;vertical-align: top;">
                                        <h4 class="mb-0 font-16 font-500">{{ diving.title }}</h4>
                                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis color-gray">{{ diving.showAt }} ({{ diving.typeShow }})</p>
                                        <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ diving.location }}</p>
                                    </div>
                                    <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">
                                        <i class="far fa-user"></i>
                                        <span class="color-highlight" style="margin-right:2px;">{{ diving.participants.filter(parti=>parti.gender=='m'&&parti.status=='joined').length + (userGender=='m' ? 1:0) }}</span>/
                                        <span class="color-shopping">{{ diving.participants.filter(parti=>parti.gender=='f'&&parti.status=='joined').length + (userGender=='f' ? 1:0) }}</span>
                                    </span>
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
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (localStorage.userId != null) {
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                query GetDivingsByHostUserId($hostUserId: ID!) {
                    getDivingsByHostUserId(hostUserId: $hostUserId) {
                        diveCenters {
                        backgroundImages {
                            _id
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        adminScore
                        }
                        divePoints {
                        backgroundImages {
                            _id
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        adminScore
                        }
                        diveSites {
                        backgroundImages {
                            _id
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        adminScore
                        }
                        _id
                        title
                        description
                        status
                        type
                        participants {
                        user {
                            uid
                            nickName
                            profileImages {
                            thumbnailUrl
                            }
                            gender
                        }
                        name
                        gender
                        status
                        }
                        maxPeopleNumber
                        startedAt
                        finishedAt
                        createdAt
                        views
                        likes
                        _id
                    }
                }
                `,
                variables: {
                    hostUserId: localStorage.userId
                }

            }
        });
        
        
        var ret = (result.data && result.data.data && result.data.data.getDivingsByHostUserId) ? result.data.data.getDivingsByHostUserId : null
        next(vm => {vm.setData(ret)});
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
  data () {
    return {
        divingData: [],
        userGender: localStorage.userGender,
    }
  },
  methods: {
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      setData(_divingData) {
          this.divingData = _divingData;
          this.divingData.sort(function(a, b) {
            return new Date(b.startedAt) - new Date(a.startedAt);
          });
          var now = new Date();
          this.divingData.forEach(diving => {

            var startedAt = new Date(diving.startedAt);
            var finishedAt = new Date(diving.finishedAt);
            if (diving.startedAt == diving.finishedAt) {
                diving.showAt = (startedAt.getMonth()+1) + "월 " + startedAt.getDate() + "일"
            } else {
                diving.showAt = (startedAt.getMonth()+1) + "/" + startedAt.getDate() + " ~ " + (finishedAt.getMonth()+1) + "/" + finishedAt.getDate() + ""
            }
            diving.typeShow = (diving.type.join().replace(/scubaDiving/gi,"스쿠바").replace(/freeDiving/gi,"프리").replace(/,/gi, "/"));
            
            if (startedAt.getFullYear() == finishedAt.getFullYear() && startedAt.getMonth() == finishedAt.getMonth() && startedAt.getDate() == finishedAt.getDate()) {
                diving.showFinishedAt = true;
            }

            if (startedAt < now) {
                diving.status = 'divingComplete';
            }

            diving.location = '';
            diving.locationData = {};
            if (diving.diveSites && diving.diveSites.length > 0) {
                diving.locationData = diving.diveSites[0];
                diving.location = diving.diveSites[0].name + " 사이트";
            } else if (diving.divePoints && diving.divePoints.length > 0) {
                diving.locationData = diving.divePoints[0];
                diving.location = diving.divePoints[0].name + " 포인트";
            } else if (diving.diveCenters && diving.diveCenters.length > 0) {
                diving.locationData = diving.diveCenters[0];
                diving.location = diving.diveCenters[0].name;
            }
          });
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
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;bottom:26px;}
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
