<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 0px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="pb-0">
                <vue-typeahead-bootstrap
                    id="input_query"
                    v-model="query"
                    class="wedive-search disable-search-result mt-3 me-3 ms-3"
                    :data="agendas"
                    :serializer="item => item.title"
                    :showAllResults="true"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="2"
                    placeholder="검색어를 입력하세요."
                    inputClass="special-input-class"
                    :disabledValues="[(selecteduser ? [selecteduser.name] : [])]"
                    @input="lookupUser3"
                    >
                    
                </vue-typeahead-bootstrap>
                
            </div>
            <div class="" style="min-height: calc(100vh - 143px);padding-bottom:40px;">
                <div v-for="agenda in agendas">
                    <div class="p-3">
                    <div v-on:click="goUser(agenda.author)" style="position:relative;">
                        <div class="user-img-s me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" 
                                :xlink:href="agenda.author && agenda.author.profileImages && agenda.author.profileImages.length > 0 && agenda.author.profileImages[0].thumbnailUrl ? agenda.author.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                        <div class="inline-block font-noto v-align-top mt-1">
                            <h5 class="mb-0 font-500 font-15">{{ agenda.author.nickName }}</h5>
                            <p class="mb-0 mt-n1 font-13 color-gray">{{ getDiverLevel(agenda.author.freeLicenseLevel, agenda.author.scubaLicenseLevel) }}</p>
                        </div>
                        <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">{{ timeForToday(agenda.createdAt) }}</p>
                    </div>
                    <div v-if="agenda.agendaPlaces && agenda.agendaPlaces.length > 0 && agenda.agendaPlaces[0].name" class="">
                        <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ agenda.agendaPlaces[0].name }}</p>
                    </div>
                    <div v-on:click="goDetail(agenda)">
                        <h5 class="font-600 mt-3 mb-2 font-17"><span v-if="agenda.types && agenda.types.length > 0 && agenda.types[0].name == '질문'" class="color-highlight" style="background: #e1e2e3;border-radius:8px;padding:2px 5px 2px;">Q.</span> {{ agenda.title }}</h5>
                        <p class="mb-0 font-noto opacity-90 ellipsis5" style="line-height: 1.5;" v-html="agenda.content.replace(/\n/gi, '<br/>')">
                        </p>
                        <p class="color-gray mt-2 mb-0">... 더 보기</p>
                    </div>
                    </div>
                    <div
                    v-if="agenda.images && agenda.images.length == 1"
                    class="img_square">
                    <div class="img_square_inner" :style="'background: url('+agenda.images[0].thumbnailUrl+');'"/>
                    <vue-star :id="agenda._id" class="img-center-icon" animate="animated wobble" color="#FF5160">
                        <i slot="icon" class="fa fa-heart" style="font-size:80px;"></i>
                    </vue-star>
                    <div class="img_square_inner" style="z-index: 900;" v-on:click="likeAnimation(agenda, false)"/>
                    </div>
                    <div v-if="agenda.images && agenda.images.length > 1" style="position: relative;">
                    <swiper
                        class="swiper wedive-swiper"
                        :options="swiperImgOption"
                        >
                        <swiper-slide v-for="(image,img_idx) in agenda.images" :key="image._id">
                            <div class="img_square">
                            <div class="img_square_inner" :style="'background: url('+image.thumbnailUrl+');'"/>
                            <vue-star v-if="img_idx==0" :id="agenda._id" class="img-center-icon" animate="animated wobble" color="#FF5160">
                                <i slot="icon" class="fa fa-heart" style="font-size:80px;"></i>
                            </vue-star>
                            <div v-if="img_idx==0" class="img_square_inner" style="z-index: 900;" v-on:click="likeAnimation(agenda, false)"/>
                            </div>
                        </swiper-slide>
                    </swiper>
                    
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                    <div class="p-3">
                    <div class="mt-1">
                        <span v-for="tag in agenda.hashTags" class="bg-gray-light color-gray rounded-sm me-1" style="padding: 6px 12px;">#{{ tag.name }}</span>
                    </div>
                    <div class="mt-4 mb-3">
                        <vue-star :id="'like_' + agenda._id" :class="(agenda.isUserLike ? 'heart-active-force' : 'heart-disabled-force')" animate="animated rubberBand" color="#FF5160">
                            <i v-on:click="likeAnimation(agenda, true)" slot="icon" class="fa fa-heart font-20"></i>
                        </vue-star>
                            <span class="font-14 font-noto ms-4">{{ agenda.likes || 0 }}</span>
                        <span v-on:click="goDetail(agenda)">
                        <i class="fas fa-comment me-1 ms-2 font-20" style="color:#bbb;"></i>
                            <span class="font-14 font-noto">{{ agenda.reviewCount || 0 }}</span>
                        </span>
                    </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
                </div>
                
            </div>
            
        </div>
    
    </div>
    
    



    <!--<div id="search-suggestion" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a href="" class="header-title color font-noto font-16">검색</a>
            </div>
        </div>
        
        <div class="card rounded-0 content">
            <vue-typeahead-bootstrap
                id="suggestion_typeahead"
                class="wedive-search disable-search-result"
                v-model="query_place"
                :data="places"
                :serializer="item => item"
                :screen-reader-text-serializer="item => `${item}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event;enableNext2($event);"
                :minMatchingChars="1"
                placeholder="사이트, 포인트, 센터 (수영장)"
                inputClass="special-input-class"
                @input="lookupPlace"
                @keyup.enter="handleFire"
                >
            </vue-typeahead-bootstrap>
            <div class="content mt-0 mb-0" style="min-height: calc(100vh - 208px);padding-top:8px;padding-bottom:40px;">
                <div v-for="item in places">
                    <div class="map-box">
                        <a v-on:click="selectSuggestion(item)">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start" style="padding-top: 2px;">
                                    <i class="fas fa-search font-16 pe-2 color-gray"></i>
                                    <span class="pb-0 mb-0 line-height-m ellipsis"> {{ item }} </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>
    </div>-->
    
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import VueStar from 'vue-star'
const axios = require("axios")
var searchParams = {};

export default {
  name: 'HelloWorld',
  components: {
      Swiper,
      SwiperSlide,
      VueStar,
  },
  methods: {
      goUser(user) {
        location.href='/user/' + user._id;
      },
      goDetail(agenda) {
        location.href='/agenda/' + agenda._id;
      },
      getDiverLevel(freeLicenseLevel, scubaLicenseLevel) {
        var levelShow = '초보';
        var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
        var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];

        var my_s_lvl = parseInt((scubaLicenseLevel)?scubaLicenseLevel:"0");
        var my_f_lvl = parseInt((freeLicenseLevel)?freeLicenseLevel:"0")
        if (my_s_lvl > my_f_lvl) {
            levelShow = (my_s_lvl>0) ? "스쿠바 " + scuba_level[my_s_lvl] : levelShow;
        } else {
            levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] : levelShow;
        }
        levelShow += " 다이버";
        if(my_s_lvl>5) levelShow = scuba_level[my_s_lvl];
        
        return levelShow;
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
      enableNext2(ev) {
          if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
          }
      },
      async lookupPlace() {
        if (this.query_place == '') {
            this.places = [];
        } else {
            if (this.suggestions.length > 0) {
                this.places = this.suggestions.filter(x => (x && x.includes(this.query_place)));
            } 
            if (this.suggestions.length == 0 || this.places.length == 0) {
                var headers = (localStorage.idToken) ? {countrycode: 'ko', idtoken: localStorage.idToken} : {countrycode: 'ko'};
                var result = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: headers,
                    data: {
                    query: `
                        query Query($query: String!) {
                           findSearchSuggestions(query: $query)
                        }
                        `,
                        variables: {
                            "query": this.query_place
                        }
                    }
                });
                if (result.data.data.findSearchSuggestions) {
                    this.places = result.data.data.findSearchSuggestions;
                }
            }
        }
      },
      async lookupUser3() {
        if (this.query.length > 2) {
            // progress bar
            var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }
            this.users = [];
            
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                query: `
                    query SearchAgenda($query: String, $skip: Int, $limit: Int) {
                        searchAgenda(query: $query, skip: $skip, limit: $limit) {
                            _id
                            types {
                            _id
                            name
                            }
                            author {
                            nickName
                            profileImages {
                                thumbnailUrl
                            }
                            _id
                            uid
                            freeLicenseLevel
                            scubaLicenseLevel
                            }
                            hashTags {
                            name
                            }
                            languageCode
                            title
                            content
                            reviewCount
                            createdAt
                            images {
                            thumbnailUrl
                            _id
                            }
                            likes
                            dislikes
                            isUserDislike
                            isUserLike
                            views
                            agendaPlaces {
                            ... on DiveCenter {
                                name
                            }
                            ... on DiveSite {
                                name
                            }
                            ... on DivePoint {
                                name
                            }
                            }
                        }
                    }
                    `,
                    variables: {
                        "skip": this.skip,
                        "limit": this.limit,
                        "query": this.query
                    }
                }
            });
            
            if (result && result.data && result.data.data && result.data.data.searchAgenda) {
                this.agendas = result.data.data.searchAgenda;
            }
            console.log(this.agendas);
            
            if(preloader){
                preloader.classList.remove('opacity-50');
                preloader.classList.add('preloader-hide');
            }
        }
      },
  },
  mounted() {
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    setTimeout(function() {
        $("#input_query > .input-group > input").focus();
        $("#suggestion_typeahead > .input-group > input").focus();
    },500);

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
        query: '',
        query_place: '',
        selecteduser: null,
        agendas: [],
        places: [],
        skip: 0,
        limit: 10,
        suggestSelectedList: [],
        suggestions : (localStorage.suggestion ? JSON.parse(localStorage.suggestion) : []),
    }
  }

  
}


</script>


<style scoped>

#menu_condition:before {width: 12px;height: 13px;background-position: 0px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_condition.on:before {width: 12px;height: 13px;background-position: -10px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_sort:before {width: 14px;height: 11px;background-position: -35px 0px;content: '';margin-right: 5px;}
#menu_sort.on:before {width: 14px;height: 11px;background-position: -49px 0px;content: '';margin-right: 5px;}
#menu_map:before {width: 10px;height: 15px;background-position: -225px 0px;content: '';margin-right: 5px;vertical-align: -2px;}
#menu_map.on:before {width: 14px;height: 11px;background-position: -235px 0px;content: '';margin-right: 5px;}
.center_list_tab {position: relative;display: block;padding-top: 2px;text-align: center;line-height: 38px;background-color: #f7f7f9;color: #333;font-size: 15px;width: 100%;border-left: 1px solid #eaeaec;}
.center_menu {justify-content: space-around;border-top: 1px solid #e1e4e7;border-bottom: 1px solid #e1e4e7;}


.wedive-action {position: fixed;background-color: #1d397c;height:36px;border-radius: 18px;left: 50%!important;bottom: 90px;-webkit-box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);-webkit-transform: translateX(-50%);transform: translateX(-50%);}
.wedive-action:before {display: block;clear: both;content: "";position: absolute;top: 9px;left: 50%;width: 1px;height: 16px;background-color: #fff;}
.action-filter {display: block;float: left;width: 84px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-filter:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/icon_filter.png);text-indent: -9999px;vertical-align: middle;}
.action-map {position: relative;float: right;width: 74px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-map:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/icon_map.png);text-indent: -9999px;vertical-align: middle;}
#filter_list {white-space: nowrap;overflow-x: scroll;height: 32px;}
.transform-none {transform: inherit !important;};

.DiveSite-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #3f474c;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}
.DivePoint-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #3cb5a0;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}
.DiveCenter-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #4687c1;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}

.map_box_cate {padding: 2px 6px;margin-bottom:2px;margin-right:6px;border-radius:4px;}
.DiveSite .map_box_cate {border: 1px solid #3f474c;color:#3f474c}
.DivePoint .map_box_cate {border: 1px solid #3cb5a0;color:#3cb5a0}
.DiveCenter .map_box_cate {border: 1px solid #4687c1;color:#4687c1}

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
.inline-block {display: inline-block !important;}
.v-align-top {vertical-align: top !important;}
.user-img-s {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
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
