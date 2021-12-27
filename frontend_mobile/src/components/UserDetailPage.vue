<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">사용자 프로필</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="header-icon header-icon-4"><img src="/static/images/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="/static/images/assets/empty_list2.jpg" width="80%" style="margin-top:100px;"/>
            <p class="font-noto">앗! 찾을 수 없는 사용자 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>

    <div class="page-content">
        <div class="card mb-0 border-bottom" style="margin-top:50px; z-index:1">
            <div class="content mt-3 pb-2 mb-0">
                <img class="inline-block me-2 circular_image" :src="(userData.profileImages && userData.profileImages.length>0) ? userData.profileImages[0].thumbnailUrl : ('/static/images/assets/user_empty_'+((userData.gender)?userData.gender:'m')+'.png')" width="50" style="vertical-align: top;"/>
                <div class="inline-block font-noto">
                    <h5 class="mb-0 font-500">{{ userData.nickName }}</h5>
                    <p class="mb-0 font-12 color-gray">{{ userData.levelShow }}</p>
                </div>
            </div>
            <div class="row m-0 mt-2">
                <div v-on:click="sendDirectMessage()" class="col-4 pe-1">
                    <span  class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 6px 0 !important;"><img src="/static/images/assets/ico_chat.png" height="16"/> 대화하기</span>
                </div>
                <div v-on:click="clickLike()" class="col-4">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 6px 0 !important;"><img :src="'/static/images/assets/'+like_img+'.png'" height="16"/> 좋아요 {{ userData.likes }}</span>
                </div>
                <div v-on:click="clickSubscribe()" class="col-4 ps-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 6px 0 !important;"><img :src="'/static/images/assets/'+subscribe_img+'.png'" height="16"/> 알림</span>
                </div>
            </div>
            <div class="content pb-3">
                <h2 class="font-15 font-700 mb-1">매너수심</h2>
                <div class="text-end">
                    <div class="inline-block text-start">
                        <div class="font-noto font-600 font-16 me-1" style="color:#cd5b3c;">18m</div>
                    </div>
                    <img class="inline-block me-2" src="/static/images/assets/heart.png" width="26" style="vertical-align: top;"/>
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



        <div v-if="userData.scubaLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">스쿠버다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="/static/images/assets/award1.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">SCUBA DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ userData.scubaLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ userData.scubaLicenseType }}</p>
                    </div>
                    <img :src="(userData.scubaLicenseType)?'/static/images/agency/logo_'+userData.scubaLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div v-if="userData.freeLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">프리다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="/static/images/assets/award2.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">FREE DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ userData.freeLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ userData.freeLicenseType }}</p>
                    </div>
                    <img :src="(userData.freeLicenseType)?'/static/images/agency/logo_'+userData.freeLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
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

    <!-- DM 팝업 -->
    <div id="menu-dm" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">메시지 전송</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 font-noto">메시지를 입력하세요.</p>
            <textarea class="wedive-textarea" placeholder="메시지" v-model="dm_text"></textarea>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소하기</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="chatUser()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">신청하기</a>
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
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                query GetUserById($id: ID!) {
                    getUserById(_id: $id) {
                        _id
                        uid
                        authProvider
                        oauthToken
                        fcmToken
                        email
                        emailVerified
                        phoneNumber
                        profileImages {
                        _id
                        thumbnailUrl
                        }
                        nickName
                        name
                        birthAge
                        gender
                        residence
                        interests {
                        title
                        type
                        }
                        divingLog
                        freeDivingBests
                        freeLicenseLevel
                        freeLicenseType
                        scubaLicenseLevel
                        scubaLicenseType
                        createdAt
                    }
                }
                `,
                variables: {
                    id: to.params.id
                }

            }
            });

        var ret = null;
        if (result && result.data && result.data.data && result.data.data.getUserById) {ret = result.data.data.getUserById;}
        
        next(vm => {vm.setData(ret)});
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
        userData: {},
        locationData: {},
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        review_detail: '',
        is_empty: false,
        dm_text: '',
        like_img: 'ico_heart',
        subscribe_img: 'ico_subscribe',
    }
  },
  methods: {
      async sendDirectMessage() {
        const message = this.sendText;
        var result = await axios({
            url: 'https://chat.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                mutation Mutation($userId: String!, $input: String!) {
                    postMessageToUser(userId: $userId, input: $input) {
                        _id
                        text
                    }
                }
                `,
                variables: {
                    "userId": "jOdIDk2TuGe88mHscllU2sdj7p22",
                    "input": message
                }

            }
        });
        
        this.sendText = '';
        var ret = (result.data && result.data.data && result.data.data.getJoinedRoomList) ? result.data.data.getJoinedRoomList : null
      },
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
      setData(_userData) {
          if (_userData == null) {
              this.is_empty = true;
          } else {
            this.userData = _userData;
            // 다이버 레벨 보여주기
            this.userData.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사"];
            var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
            var s_lvl = parseInt(this.userData.scubaLicenseLevel);
            var f_lvl = parseInt(this.userData.freeLicenseLevel);
            this.userData.scubaLevelShow = (s_lvl>0) ? scuba_level[s_lvl] : "";
            this.userData.freeLevelShow = (f_lvl>0) ? free_level[f_lvl] : "";
            if (s_lvl > f_lvl) {
                this.userData.levelShow = (s_lvl>0) ? "스쿠버 " + scuba_level[s_lvl] : this.userData.levelShow;
            } else {
                this.userData.levelShow = (f_lvl>0) ? "프리 " + free_level[f_lvl] : this.userData.levelShow;
            }
            this.userData.levelShow += " 다이버";
            
            setTimeout(function() {
                init_template();
                var preloader = document.getElementById('preloader')
                if(preloader){preloader.classList.add('preloader-hide');}
            }, 1000);
          }
      },
      async clickLike() {
          if (localStorage.idToken) {
            const targetId = this.userData._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Like($targetId: ID!, $targetType: UserReactionTargetType!) {
                            like(targetId: $targetId, targetType: $targetType) {
                                success
                            }
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "user"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.like.success && result.data.data.like.success == true) {
                this.like_img = 'ico_heart2';
                this.userData.likes = ((this.userData.likes==null)?0:this.userData.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like.success && result.data.data.like.success == true) {
                this.like_img = 'ico_heart';
                this.userData.likes = this.userData.likes - 1;
            }
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken) {
            const targetId = this.userData._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Subscribe($targetId: ID!, $targetType: UserReactionTargetType!) {
                            subscribe(targetId: $targetId, targetType: $targetType) {
                                success
                            }
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "user"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.subscribe.success && result.data.data.subscribe.success == true) {
                this.subscribe_img = 'ico_subscribe2';
            } else if (result && result.data && result.data.data && result.data.data.subscribe.success && result.data.data.subscribe.success == false) {
                this.subscribe_img = 'ico_subscribe';
            }
          }
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline-block {display: inline-block;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 130px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
</style>
