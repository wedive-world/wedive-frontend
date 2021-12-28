<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">나의 버디찾기</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div class="page-content transform-none" style="margin-top: 50px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="content mt-3">
                <div v-for="diving in divingData">
                    <div class="map-box">
                        <a :href="'/diving/' + diving._id">
                            <div :class="'bx position-relative' + ((diving.status == 'divingComplete') ? ' opacity-40':'')">
                                <div class="justify-content-center mb-0 text-start">
                                    <div v-if="diving.locationData && diving.locationData.backgroundImages" class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="diving.locationData.backgroundImages.thumbnailUrl" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15">{{ diving.title }}</h4>
                                        <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ diving.location }}</p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">등록 : {{ timeForToday(diving.createdAt) }}</p>
                                    </div>
                                    <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
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
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  data () {
    return {
        divingData: [],
    }
  },
  methods: {
      setData(_divingData) {
          this.divingData = _divingData;
          //console.log(this.divingData);
          this.divingData.sort(function(a, b) {
            return new Date(b.startedAt) - new Date(a.startedAt);
          });
          var now = new Date();
          this.divingData.forEach(diving => {

            var startedAt = new Date(diving.startedAt);
            var finishedAt = new Date(diving.finishedAt);
            if (diving.startedAt == diving.finishedAt) {
                diving.title = (startedAt.getMonth()+1) + "월 " + startedAt.getDate() + "일 "
            } else {
                diving.title = (startedAt.getMonth()+1) + "/" + startedAt.getDate() + " ~ " + (finishedAt.getMonth()+1) + "/" + finishedAt.getDate() + " "
            }
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
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;top:20px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
.position-relative {position: relative;}
</style>
