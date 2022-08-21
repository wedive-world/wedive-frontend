<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">나의 버디찾기</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div class="page-content transform-none" style="margin-top: 50px;padding:0;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0" style="min-height: calc(100vh - 50px)">
            <div v-if="getDivings.length == 0" class="text-center">
                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="60%" style="margin-top:25%;" />
                <p class="color-gray-light-mid">아직 버디찾기를 한번도 해보지 않으셨네요!</p>
                <a href="/buddy/create" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"> 버디찾기 생성 </a>
            </div>
            <div v-else class="content mt-1">
                <pull-to :bottom-load-method="refresh" @bottom-state-change="stateChange" :bottom-config="TOP_DEFAULT_CONFIG">
                <div v-for="diving in getDivings">
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
                                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="diving.locationData && diving.locationData.backgroundImages && diving.locationData.backgroundImages.length > 0 && diving.locationData.backgroundImages[0].thumbnailUrl ? diving.locationData.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                        </svg>
                                    </div>
                                    
                                    <div class="mt-2" style="display:inline-block;vertical-align: top;max-width: calc(100vw - 122px);">
                                        <h4 class="mb-0 font-16 font-500 ellipsis" style="">{{ diving.showAt }} ({{ diving.typeShow }})</h4>
                                        <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ diving.location }}</p>
                                        <p class="font-13 pb-0 mb-0 mt-n1 ellipsis color-gray">{{ diving.title }}</p>
                                    </div>
                                    <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">
                                        <i class="fa fa-user color-gray"></i>
                                        <span class="" style="margin-right:2px;">{{ diving.participants.filter(parti=>parti.status=='joined').length + 1 }}</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <!--<div class="divider mt-3 mb-3"></div>-->
                </div>
                </pull-to>
                
                
                
            </div>
            
        </div>
    
    </div>
    

  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
    PullTo,
  },
  apollo: {
    getDivingsRelatedWithCurrentUser: {
        query: gql`
            query GetDivingsRelatedWithCurrentUser($skip: Int!, $limit: Int!) {
                getDivingsRelatedWithCurrentUser(skip: $skip, limit: $limit) {
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
                    diveShops {
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
        variables () {
            return {
                limit: this.limit,
                skip: this.skip,
                uid: (localStorage.uid ? localStorage.uid : ''),
            }
        },
        result (data) {
            var now = new Date();
            this.getDivingsRelatedWithCurrentUser.forEach(diving => {

                var startedAt = new Date(diving.startedAt);
                var finishedAt = new Date(diving.finishedAt);
                if (startedAt.getMonth() == finishedAt.getMonth() && startedAt.getDate() == finishedAt.getDate()) {
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
                    diving.location = diving.diveSites[0].name;
                } else if (diving.divePoints && diving.divePoints.length > 0) {
                    diving.locationData = diving.divePoints[0];
                    diving.location = diving.divePoints[0].name;
                } else if (diving.diveCenters && diving.diveCenters.length > 0) {
                    diving.locationData = diving.diveCenters[0];
                    diving.location = diving.diveCenters[0].name;
                } else if (diving.diveShops && diving.diveShops.length > 0) {
                    diving.locationData = diving.diveShops[0];
                    diving.location = diving.diveShops[0].name;
                }
            });

            this.getDivingsRelatedWithCurrentUser.forEach(x => this.getDivings.push(x));
            if (this.getDivings.length != this.getDivingsRelatedWithCurrentUser.length) {
                setTimeout(function() {
                    $(".vue-pull-to-wrapper").css("padding-top", "50px");
                },100);
            }
            
            setTimeout(function() {
                $("#div_content_loader").hide();
            },200);
        },
        
        
    },
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
        getDivingsRelatedWithCurrentUser: [],
        getDivings: [],
        userGender: localStorage.userGender,
        skip: 0,
        limit: 10,
        prev_height: 0,
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
  methods: {
      stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
            this.iconLink = '#fa-arrow-down';
        } else if (state === 'loading') {
            this.iconLink = '#fa-spinner';
        } else if (state === 'loaded-done') {
            this.iconLink = '#fa-check';
        }
      },
      async refresh(loaded) {
        this.skip += this.limit;

        const _skip = this.skip;
        const _limit = this.limit
        
        this.$apollo.queries.getDivingsRelatedWithCurrentUser.fetchMore({
            // New variables
            variables: {
                skip: _skip,
                limit: _limit,
                uid: (localStorage.uid ? localStorage.uid : ''),
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
                return {};
            },
            /*
            // Transform the previous result with new data
            updateQuery: (previousResult, { fetchMoreResult }) => {
                console.log("aa")
                console.log("aa")
                console.log("aa")
                console.log("aa")
                console.log("aa")
                console.log("aa")
                console.log("aa")
                if (!fetchMoreResult) return previousResult;
                //console.log(previousResult)
                //console.log(fetchMoreResult)
                return {
                    getDivingsRelatedWithCurrentUser: [
                        ...previousResult,
                        ...fetchMoreResult || [],
                    ],
                }
            },*/
        });
      },
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
                diving.location = diving.diveSites[0].name;
            } else if (diving.divePoints && diving.divePoints.length > 0) {
                diving.locationData = diving.divePoints[0];
                diving.location = diving.divePoints[0].name;
            } else if (diving.diveCenters && diving.diveCenters.length > 0) {
                diving.locationData = diving.diveCenters[0];
                diving.location = diving.diveCenters[0].name;
            } else if (diving.diveShops && diving.diveShops.length > 0) {
                diving.locationData = diving.diveShops[0];
                diving.location = diving.diveShops[0].name;
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
  .vue-pull-to-wrapper {padding-top:50px;}
}
</style>
