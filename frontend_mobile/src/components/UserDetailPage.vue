<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="header-icon header-icon-4"><img src="/static/images/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div class="page-content">
        
        <div class="card mb-0 border-bottom" style="margin-top:50px; z-index:1">
            <div class="content mt-3 pb-2 mb-0">
                <img class="inline-block me-2" src="/static/images/assets/user_empty_m.png" width="50" style="vertical-align: top;"/>
                <div class="inline-block font-noto">
                    <h5 class="mb-0 font-500">{{ divingData.hostUser.nickName || "" }}</h5>
                    <p class="mb-0 font-12 color-gray">{{ divingData.hostUser.levelShow || "" }}</p>
                </div>
            </div>
            <div class="row m-0">
                <div class="col-6 pe-1">
                    <a href="#" class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 6px 0 !important;">대화하기</a>
                </div>
                <div class="col-6 ps-1">
                    <a href="#" class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 6px 0 !important;">평가하기</a>
                </div>
            </div>
            <div class="content pb-3">
                <h2 class="font-15 font-700 mb-1">매너수심</h2>
                <div class="text-end">
                    <div class="inline-block text-start">
                        <div class="font-noto font-600 font-16 me-1" style="color:#cd5b3c;">18m</div>
                    </div>
                    <img class="inline-block me-2" src="/static/images/assets/heart.png" width="30" style="vertical-align: top;"/>
                </div>
                <div class="progress rounded-l wedive-deep" style="height:8px">
                    <div class="progress-bar bg-heart text-start ps-3 color-white" 
                         role="progressbar" style="width: 18%" 
                         aria-valuenow="10" aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>



        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-3">
                <h2 class="font-15 font-700 mb-1">스쿠버다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-2 me-4" src="/static/images/assets/certification.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-16 color-gray mb-1">SCUBA DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">오픈워터 자격증</p>
                    </div>
                    <img src="/static/images/agency/logo_padi.svg" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">호스트 참여횟수 1회</h2>
            </div>
        </div>
        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">게스트 참여횟수 20회</h2>
            </div>
        </div>
        
        
    </div>

    </div>


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        /*var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            data: {
                query: `
                query GetDivingById($id: ID!) {
                    getDivingById(_id: $id) {
                        title
                        description
                        status
                        hostUser {
                            _id
                            nickName
                            scubaLicenseLevel
                            freeLicenseLevel
                            instructorTypes
                            birthAge
                            gender
                        }
                        diveSites {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            interests {
                                title
                                type
                            }
                        }
                        divePoints {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            interests {
                                title
                                type
                            }
                        }
                        diveCenters {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            institutionTypes
                            interests {
                                title
                                type
                            }
                        }
                        participants {
                            user {
                                _id
                                nickName
                            }
                            status
                            name
                            birth
                            gender
                        }
                    }
                }
                `,
                variables: {
                    id: to.params.id
                }

            }
            }, {
            headers: {
                countryCode: 'ko',
                android: (localStorage.android) ? localStorage.android : "",
            }
        });
        console.log(result)
        
        
        
        next(vm => {vm.setData(result.data.data.getDivingById)});*/
        next(vm => {vm.setData({_id: '61b47d6213f324035a6ca34e',
    title: null,
    description: '잠실 프리다이빙을 모집해요.\n여러분 함께해요.',
    status: 'searchable',
    hostUser: {
        _id:'61b0ae4a13f324035a6baf25',
        nickName: '짱스',
        name: '장성환',
        birthAge: 1985,
        gender: 'm',
        instructorTypes: [],
        scubaLicenseLevel:1,
	    freeLicenseLevel:0
    },
    participants: [
        {
            user: null,
            name: null,
            birth: null,
            gender: 'm',
            _id: '61b47d6213f324035a6ca34f'
        },
        {
            user: null,
            name: null,
            birth: null,
            gender: 'f',
            _id: '61b47d6213f324035a6ca350'
        }
    ],
    applicants: [],
    interests: [{"title":"프리다이빙", "type": ""},{"title":"남자", "type": ""},{"title":"뒷풀이", "type": ""},{"title":"초보환영", "type": ""}],
    diveSites: null,
    divePoints: null,
    diveCenters: [
        {
            _id: '6189f9d94c8a87c504b16fca',
            name: '잠실수영장',
            uniqueName: 'jamsil',
            description: '잠실종합수영장 제2수영장에 위치한 다이빙 전용 수영장입니다. 서울 시내에 있어 접근이 용이합니다.',
            backgroundImages: [
                {_id: '61aae2e3eac3ebfb7ac9c2e6', thumbnailUrl: 'https://dwj4aa6a673st.cloudfront.net/image/resized/61b4730c13f324035a6c8b36.jpg'}
            ],
            adminScore: 70,
            latitude: 37.51452599991783,
            longitude: 127.07622881130571,
            institutionTypes: [],
            interests: [{type: 'priceIndex', title: '$$$'}]
        }
    ],
    startedAt: '2021-12-20T20:00:00.000Z',
    finishedAt: '2021-12-20T20:00:00.000Z',
    images: [],
    createdAt: '2021-12-11T10:28:50.525Z',
    updatedAt: '2021-12-11T10:28:50.525Z',})});
    }
  },
  async mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    document.getElementById("footer-bar").classList.add("hide");
    $("body").css("background-color", "white");
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
        $("#footer-bar").hide();
    }

  },
  components: {
    StarRating
  },
  data () {
    return {
        map: null,
        divingData: {},
        locationData: {},
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        review_detail: '',
    }
  },
  methods: {
      showReivewModal() {
          var menuData = 'menu-rating';
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
      },
      weDiveDateFormat(date, showTime) {
          var _date = null
          if (typeof(date) != 'object') {
              _date = new Date(date);
          } else {
              _date = date;
          }

          if (showTime) {
              return _date.getFullYear() + "년 " + (_date.getMonth()+1) + "월 " + _date.getDate() + "일 " + _date.getHours() + "시 " + _date.getMinutes() + "분";
          } else {
              return _date.getFullYear() + "년 " + (_date.getMonth()+1) + "월 " + _date.getDate() + "일";
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
      setRating(rating) {
          //this.rating = rating;
          switch ((rating+"")) {
              case '1':
                this.rateDescription = '매우 아쉬워요';
              break;
              case '2':
                this.rateDescription = '아쉬워요';
              break;
              case '3':
                this.rateDescription = '나쁘지 않아요.';
              break;
              case '4':
                this.rateDescription = '만족해요!';
              break;
              case '5':
                this.rateDescription = '매우 만족해요!';
              break;
              default:
              break;
          }
          
      },
      setData(_divingData) {
          this.divingData = _divingData;
          // 다이버 레벨 보여주기
          this.divingData.hostUser.levelShow = '초보';
          var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사"];
          var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
          if (scuba_level > free_level) {
            this.divingData.hostUser.levelShow = (this.divingData.hostUser.scubaLicenseLevel>0) ? "스쿠버 " + scuba_level[this.divingData.hostUser.scubaLicenseLevel] : this.divingData.hostUser.levelShow;
          } else {
            this.divingData.hostUser.levelShow = (this.divingData.hostUser.freeLicenseLevel>0) ? "프리 " + free_level[this.divingData.hostUser.freeLicenseLevel] : this.divingData.hostUser.levelShow;
          }
          this.divingData.hostUser.levelShow += " 다이버";
          this.divingData.description = this.divingData.description.replace(/\n/gi, '<br/>');
          this.divingData.title = '';
          var startedAt = new Date(this.divingData.startedAt);
          var finishedAt = new Date(this.divingData.finishedAt);
          if (this.divingData.startedAt == this.divingData.finishedAt) {
              this.divingData.title = startedAt.getFullYear() + "년 " + (startedAt.getMonth()+1) + "월 " + startedAt.getDate() + "일 "
          } else {
              this.divingData.title = startedAt.getFullYear() + "년 " + (startedAt.getMonth()+1) + "/" + startedAt.getDate() + " ~ " + (finishedAt.getMonth()+1) + "/" + finishedAt.getDate() + " "
          }

          this.divingData.location = '';
          if (this.divingData.diveSites && this.divingData.diveSites.length > 0) {
              this.locationData = this.divingData.diveSites[0];
              this.divingData.location = this.divingData.diveSites[0].name + " 사이트";
          } else if (this.divingData.divePoints && this.divingData.divePoints.length > 0) {
              this.locationData = this.divingData.divePoints[0];
              this.divingData.location = this.divingData.divePoints[0].name + " 포인트";
          } else if (this.divingData.diveCenters && this.divingData.diveCenters.length > 0) {
              this.locationData = this.divingData.diveCenters[0];
              this.divingData.location = this.divingData.diveCenters[0].name;
          }
          
          /*_nearData.forEach(d => {
              if (d._id != this.locationData._id) {
                  this.nearData.push(d);
              }
          });*/
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);
      },
      goUserPage(user) {
          if (user && user._id) {
              location.href = '/user/' + user._id;
          }
      },
      goDetail(type, uniqueName) {
          location.href = type + '/' + uniqueName;
      },
      call: function() {
          console.log("call");
      },
      goCourse: function() {
          location.href='/course';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline-block {display: inline-block;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 130px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
</style>
