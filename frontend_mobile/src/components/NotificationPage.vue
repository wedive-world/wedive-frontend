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
    <div :class="'page-content pb-0' + ((idToken && nickName)?'':' hide')">
        <div class="card mb-0" style="margin-top:50px;min-height: calc(100vh - 50px);">
            <div v-for="(noti,index) in notiData" v-if="noti.title">
                <div v-on:click="clickNoti(noti)" class="pt-3 pb-3 pe-4 ps-4 border-bottom">
                    <h4 class="font-13"><i :class="'me-1 '+notiClass[noti.event]"></i><span class="opacity-70"> {{noti.title}} </span></h4>
                    <p class="font-15 mb-0 me-3 ms-3" style="line-height:1.3"> {{noti.message}} </p>
                </div>
            </div>
        </div>

    </div>
    


    <!-- End of Page Content--> 
    
  </div>
</template>
<script>
const axios = require("axios");

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
        notiClass: {"onParticipantJoined": "fas fa-user-friends color-highlight", "onParticipantAccepted": "fas fa-glass-cheers color-twitter", "onDivingPreparation": "fas fa-clock color-whatsapp", "onDivingPublicEnded": "fas fa-calendar color-shopping", "onDivingComplete": "fas fa-check-square color-shopping", "onDivingCreatedInDiveCenter": "fas fa-swimming-pool color-secondary", "onDivingCreatedInDivePoint": "fas fa-fish color-secondary", "onDivingCreatedInDiveSite": "fas fa-fish color-secondary", "onDivingCreatedByInstructor": "fas fa-users color-secondary"},
    }
  }, 
  methods: {
    setData(notiData) {
        this.notiData = notiData;
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
          location.href = type_to_url[noti.subjectType] + "/" + noti.subject._id;
    },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
