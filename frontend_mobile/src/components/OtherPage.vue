<template>
  <div class="">
    <div data-menu-active="nav-other"></div>
    <div :class="'page-content font-noto card text-center' + ((idToken != null && nickName != null && nickName != 'null')?' hide':'')" style="height: calc(100vh - 101px);display:block;">
        <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_login.jpg" width="60%" style="margin-top:25%;"/>
        <p class="color-gray mt-2">{{ login_word }}이 필요한 페이지 입니다.</p>
        <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
    </div>
    <div :class="'page-content font-noto card ps-2 pe-2'+((idToken != null && nickName != null && nickName != 'null')?'':' hide')">
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">나의 설정</h2>
            </div>
        </div>
        <a href="/user/my" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_user.png" height="30" /><span class="ms-2 vertical-m">내 프로필</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <a href="/other/noti"  class="position-relative border-bottom hide" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_alarm.png" height="30" /><span class="ms-2 vertical-m">알림 설정</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">서비스</h2>
            </div>
        </div>
        <a href="/reservation/my" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_reservation.png" height="30" /><span class="ms-2 vertical-m">나의 예약</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <a href="/other/subscribe" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_alarm2.png" height="30" /><span class="ms-2 vertical-m">나의 구독 장소</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <!--<a href="/other/subscribe" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_interest.png" height="30" /><span class="ms-2 vertical-m">나의 관심 장소</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>-->
        <a href="/diving/my" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_diving.png" height="30" /><span class="ms-2 vertical-m">나의 버디찾기</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <div class="position-relative border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_review.png" height="30" /><span class="ms-2 vertical-m">나의 리뷰</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative hide" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_coupon.png" height="30" /><span class="ms-2 vertical-m">쿠폰</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative hide" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_bill.png" height="30" /><span class="ms-2 vertical-m">영수증</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">약관 및 정책</h2>
            </div>
        </div>
        <a href="/other/terms" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_terms.png" height="30" /><span class="ms-2 vertical-m">이용약관</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>
        <a href="/other/privacy" class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="https://d34l91104zg4p3.cloudfront.net/assets/other_privacy.png" height="30" /><span class="ms-2 vertical-m">개인정보 처리 방침</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </a>

        <div class="row ps-3 pe-3 mt-3">
            <div v-on:click="logout()" class="col-6 text-center border-black p-1" style="width: calc(50% - 4px);margin-right: 4px;">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_logout.png" height="30" /><span class="ms-2 vertical-m">로그아웃</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
            <div v-on:click="byebye()" class="col-6 text-center border-black p-1" style="width: calc(50% - 4px);margin-left: 4px;">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_bye.png" height="30" /><span class="ms-2 vertical-m">회원탈퇴</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        
        
    </div>

    </div>


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async mounted() {
    try {
        if (window.navigator.userAgent.toLowerCase().indexOf('android') !== -1) {
            const userInformation = JSON.parse(Android.getUserInformation());
            //console.log(`android connected, ${JSON.stringify(userInformation)}`);
            localStorage.idToken = Android.getIdToken();
            localStorage.setItem(userAuthKey, userInformation);
            if (userInformation.uid) localStorage.uid = userInformation.uid;
            //if (userInformation.idToken) localStorage.idToken = userInformation.idToken;
            if (userInformation.email) localStorage.userEmail = userInformation.email;
            if (userInformation.languageCode) localStorage.languageCode = userInformation.languageCode;

            //var axios = require("axios");
            if (localStorage.nickName == null || localStorage.nickName == 'null') {
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        query Query($uid: ID!) {
                        getUserByUid(uid: $uid) {
                            _id
                            nickName
                            birthAge
                            gender
                        }
                        }
                    `,
                    variables: {
                        "uid": localStorage.uid
                    }
                }
            });
            if (result.data.data.getUserByUid != null && result.data.data.getUserByUid.nickName != null && result.data.data.getUserByUid.nickName != 'null') {
                localStorage.nickName = result.data.data.getUserByUid.nickName;
                localStorage.userId = result.data.data.getUserByUid._id;
            }
            }
        } 
    } catch(e) {
        var toastData = 'debug-error';
        $("#" + toastData).text(e.toString().replace(/\\n/gi, '<br/>'));
        var notificationToast = document.getElementById(toastData);
        var notificationToast = new bootstrap.Toast(notificationToast);
        notificationToast.show();
    }
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
        $("#footer-bar").hide();
    }

  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 50);
  },
  data () {
    return {
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
    }
  },
  methods: {
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          location.href='/user/create';
        }
      },
      logout() {
        localStorage.clear();
        this.$root.$children[0].signOut();
        location.href='/';
        // android token 삭제
      },
      byebye() {
        this.$root.$children[0].deleteCurrentUser();
        localStorage.clear();
        this.$root.$children[0].signOut();
        location.href='/';
        // api호출
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.vertical-m {vertical-align: middle;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.2) !important}
.br-0 {border-radius: 0 !important;}
.position-relative {position: relative;}
.border-black {border: 1px solid black;}
</style>
