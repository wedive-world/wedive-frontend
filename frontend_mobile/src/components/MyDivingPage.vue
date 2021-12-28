<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="content mt-0">
                <div class="color-highlight font-12 mb-2">
                    <i class="fas fa-location-arrow"></i> 제주도 근처의 다이빙 센터 입니다.
                </div>
                <div v-for="center in center_list">
                    <div class="map-box">
                        <a href="/center">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="center.img" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15"> {{center.title}} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{center.desc}} </p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                            {{center.feature}}
                                        </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{center.star}} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <img src="/static/images/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">￦</span>
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
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
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
          console.log(this.divingData);
      }
  },
  
}


</script>


<style scoped>


</style>
