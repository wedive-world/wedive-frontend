<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">알림</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div data-menu-active="nav-other"></div>

    <div :class="'page-content font-noto card text-center pb-0 mb-0' + ((idToken && nickName)?' hide':'')" style="height: calc(100vh - 50px);display:block;margin-top:50px;">
        <img src="/static/images/assets/empty_login.jpg" width="60%" style="margin-top:25%;"/>
        <p class="color-gray mt-2">{{ login_word }}이 필요한 페이지 입니다.</p>
        <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
    </div>
    <div :class="'page-content' + ((idToken && nickName)?'':' hide')">
        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <div v-for="(noti,index) in notiData">
                    <div class="map-box">
                        <a href="/center/k26">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="noti.img" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15"> {{noti.title}} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{noti.desc}} </p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                            {{noti.feature}}
                                        </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{noti.star}} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <img src="/static/images/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
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
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
            query GetNotifications($skip: Int, $limit: Int) {
                getNotifications(skip: $skip, limit: $limit) {
                    userId
                    targetId
                    targetType
                    target {
                        ... on DiveCenter {
                            name
                            uniqueName
                            description
                        }
                        ... on DiveSite {
                            name
                            uniqueName
                            description
                        }
                        ... on DivePoint {
                            name
                            uniqueName
                            description
                        }
                        ... on Diving {
                            _id
                            title
                            description
                            status
                            type
                            hostUser {
                                _id
                                uid
                                nickName
                                gender
                                birthAge
                                profileImages {
                                    thumbnailUrl
                                }
                            }
                        }
                        ... on Instructor {
                            introduction
                            careers
                            profileImages {
                                thumbnailUrl
                                _id
                            }
                            user {
                            nickName
                            gender
                            birthAge
                            name
                            }
                        }
                        ... on User {
                            uid
                            nickName
                            gender
                            birthAge
                            name
                        }
                    }
                    subjectType
                    subject {
                        ... on DiveCenter {
                            name
                            uniqueName
                            description
                        }
                        ... on DiveSite {
                            name
                            uniqueName
                            description
                        }
                        ... on DivePoint {
                            name
                            uniqueName
                            description
                        }
                        ... on Diving {
                            _id
                            title
                            description
                            status
                            type
                            hostUser {
                                _id
                                uid
                                nickName
                                gender
                                birthAge
                                profileImages {
                                    thumbnailUrl
                                }
                            }
                        }
                        ... on Instructor {
                            introduction
                            careers
                            profileImages {
                                thumbnailUrl
                                _id
                            }
                            user {
                            nickName
                            gender
                            birthAge
                            name
                            }
                        }
                        ... on User {
                            uid
                            nickName
                            gender
                            birthAge
                            name
                        }
                    }
                    event
                    read
                }
            }
            `
        }
    });
    var notiData = null;
    if ((result.data && result.data.data && result.data.data.getNotifications)) {
        notiData = result.data.data.getNotifications;
        localStorage.notiAt = (new Date()).getTime();
        if (notiData.length > 0) {
            localStorage.notiData = JSON.stringify([notiData[0]]);
        } else {
            localStorage.notiData = '[]';
        }
        
    }
    next(vm => {vm.setData(notiData)});
  },
  mounted() {
    console.log("a")
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
  },
  destroyed () {
    
  },
  data () {
    return {
        notiData: [],
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
    }
  }, methods: {
    setData(notiData) {
        this.notiData = notiData;
    },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
