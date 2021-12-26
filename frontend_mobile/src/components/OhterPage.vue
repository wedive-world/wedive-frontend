<template>
  <div class="">
    <div data-menu-active="nav-other"></div>
    <div class="page-content font-noto card ps-2 pe-2">
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">나의 설정</h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_user.png" height="30" /><span class="ms-2 vertical-m">내 프로필</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_alarm.png" height="30" /><span class="ms-2 vertical-m">알림 설정</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">서비스</h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_diving.png" height="30" /><span class="ms-2 vertical-m">나의 버디찾기</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_divinglog.png" height="30" /><span class="ms-2 vertical-m">나의 다이빙 로그</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_review.png" height="30" /><span class="ms-2 vertical-m">나의 리뷰</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_coupon.png" height="30" /><span class="ms-2 vertical-m">쿠폰</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_bill.png" height="30" /><span class="ms-2 vertical-m">영수증</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="m-3">
                <h2 class="font-18 font-600 mb-0">약관 및 정책</h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_terms.png" height="30" /><span class="ms-2 vertical-m">이용약관</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
            </div>
        </div>
        <div class="position-relative" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-300 mb-0"><img src="/static/images/assets/other_privacy.png" height="30" /><span class="ms-2 vertical-m">개인정보 처리 방침</span><i class="wedive-txt-all wedive_right" style="top:22px;"></i></h2>
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
        console.log(ret)
        
        next(vm => {vm.setData(ret)});
    }
    else {
        next(vm => {vm.setData(null)});
    }
  },
  async mounted() {
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
    }, 500);
  },
  data () {
    return {
    }
  },
  methods: {
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
</style>
