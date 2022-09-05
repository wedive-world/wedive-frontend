<template>
  <div class="">
    <div data-menu-active="nav-site"></div>

    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
    <template slot="top-block" slot-scope="props">
      <div :class="'top-load-wrapper opacity-50' + (props.state === 'loaded-done' ? ' fadeout' : '')">
        <i class="font-18 fas"
             :class="{
                'fa-arrow-down': props.state === 'trigger',
                'fa-spinner': props.state === 'loading',
                'fa-check': props.state === 'loaded-done'
             }"
             aria-hidden="true">
        </i>
        {{ props.stateText }}
      </div>
    </template>
    <div class="page-content pt-2">
        <div v-on:click="goList()" class="card card-style hide" style="background: white;height:148px;">
            <div class="content mb-0 mt-3">
                <img class="float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/save_earth.png" style="position: absolute;z-index: 11;right: 10px;top:40px;"/>
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">지구 구석구석 다이빙 사이트 검색</h4>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(100% - 30px);z-index: 9;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="37,216개의 장소가 준비되어있어요." data-search>
                </div>
                
            </div>
        </div>

        <div v-on:click="goSiteMap()" class="card card-style" style="box-shadow: none;background-image: linear-gradient(45deg, #35415f, #181818 70%);">
            <div class="content mb-0 mt-3" style="min-height: 80px;">
                <div class="row mb-0" style="position: relative;min-height: 80px;">
                    <div class="col-9">
                        <h4 class="text-start pt-2 mb-0 color-white">지도에서 한눈에</h4>
                        <p class="text-start mb-0 color-white opacity-70">전세계 곳곳을 한눈에 여행해요.</p>
                    </div>
                    <img class="col-3 ps-0" src="https://d34l91104zg4p3.cloudfront.net/assets/earth_low.gif" style="position:absolute;bottom:0;right:0;max-width:90px;width:90px;"/>
                </div>
            </div>
        </div>

        <ContentLoader :width="windowWidth" height="700" id="div_content_loader" primaryColor="#e3e7ef" secondaryColor="#f4f7ff">
            <rect x="10" y="0" rx="20" ry="20" :width="windowWidth-20" height="120" />
            <rect x="10" y="130" rx="20" ry="20" :width="windowWidth-20" height="170" />
            <rect x="10" y="310" rx="20" ry="20" :width="windowWidth-20" height="50" />
            <rect x="10" y="370" rx="20" ry="20" :width="windowWidth-20" height="50" />
            <rect x="10" y="430" rx="20" ry="20" :width="windowWidth-20" height="50" />
            
        </ContentLoader>

        

        <div v-for="(recommendation,rec_idx) in getUserRecommendationsByTargetType">
            <div v-if="recommendation.previewCount == 0" v-on:click="moveRecommend(recommendation._id, 'recommendation')" class="card card-style" :style="recommendation.cssStyle.includes('|') ? recommendation.cssStyle.split('|')[0] : recommendation.cssStyle">
                <div :class="'content mb-0 mt-3 me-0' + (recommendation.className ? ' ' + recommendation.className : '')">
                    <h4 class="text-start mb-0 font-600" v-html="recommendation.title"></h4><i class="wedive-txt-all wedive_right"></i>
                    <p class="mb-0 opacity-60 ls-n1">{{ recommendation.description ? recommendation.description : '' }}</p>
                    
                    <img v-if="recommendation.cssStyle.includes('|')" :class="recommendation.cssStyle.split('|')[2]" :src="'https://d34l91104zg4p3.cloudfront.net/assets/' + recommendation.cssStyle.split('|')[1]" style="padding-bottom:16px;max-height:200px;"/>
                </div>
            </div>

            <div v-else-if="recommendation.previewCount == 2 || recommendation.previewCount == 3" class="card card-style">
                <div class="content mb-0 mt-3">
                    <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                        <h4 class="text-start mb-0">{{ recommendation.title }}<i class="wedive-txt-all wedive_right"></i></h4>
                        <p class="mb-3 color-gray-light-mid">{{ recommendation.description ? recommendation.description : '' }}</p>
                    </div>
                    
                    <div v-for="(site,index) in recommendation.previews.filter(x=>x.__typename == 'DiveSite')">
                        <div class="map-box">
                            <a v-on:click="movePreview(site)">
                                <div class="bx">
                                    <div class="justify-content-center mb-0 text-start">
                                        <div class="thumb-img me-2">
                                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                <clipPath id="clipSquircle">
                                                    <use xlink:href="#shapeSquircle"/>
                                                </clipPath>
                                                </defs>
                                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                            </svg>
                                        </div>
                                        <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                            <img v-bind:src="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                        </div>-->
                                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 156px);">
                                            <h4 class="font-15"> {{ site.name }} </h4>
                                            <p class="pb-0 mb-0 nearby_desc"> {{ site.description }} </p>
                                            
                                            <p class="pb-0 mb-0"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                                <span> {{(site.adminScore/20).toFixed(1)}} </span>
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
            <div v-else>
                <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                    <h4 :class="'text-start mb-0' + (rec_idx==0 ? '' : ' mt-4')" style="margin-left: 14px;margin-right: 14px;position:relative;">{{ recommendation.title }}<i class="wedive-txt-all wedive_right" style="top:3px !important;"></i></h4>
                    <p v-if="recommendation.description" class="mb-2 color-gray-light-mid" style="margin-left: 14px;margin-right: 14px;margin-top:-2px;">{{ recommendation.description }}</p>
                </div>
                <div class="splide single-slider-site slider-no-arrows visible-slider slider-no-dots" :id="'single-slider-'+recommendation._id" style="height:276px;">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="(site, index) in recommendation.previews.filter(x=>x.__typename == 'DiveSite')" class="splide__slide">
                                <a v-on:click="movePreview(site)">
                                    <div class="card card-style card-nearby" :style="'background: url('+((site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="260">
                                        <div class="card-top px-3 py-3">
                                            <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                                        </div>
                                        <div class="card-bottom px-3 py-3">
                                            <h4 class="color-white font-18 font-600">{{ site.name }}</h4>
                                            <div class="divider bg-white opacity-20 mb-1"></div>
                                            <div class="d-flex">
                                                <div class="align-self-center" style="max-width: 100%;">
                                                    <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">{{ site.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-overlay bg-gradient opacity-30"></div>
                                        <div class="card-overlay bg-gradient"></div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--
        <div class="card card-style" style="background: #2885df;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-1">환상의 시간, 리브어보드</h4>
                <p class="color-white mb-0 color-gray">287개 리브어보드 모아보기</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="float-right mt-n3 movebox" src="https://d34l91104zg4p3.cloudfront.net/assets/boat.png" style="padding-bottom:16px;"/>
                <img class="movebox2" src="https://d34l91104zg4p3.cloudfront.net/assets/cloud.png" width="100"/>
                <img class="movebox3" src="https://d34l91104zg4p3.cloudfront.net/assets/cloud.png" width="70"/>
            </div>
        </div>

        -->
        
        <div data-menu-load="/static/menu-footer.html"></div>
    </div>
    </pull-to>


    <!-- End of Page Content--> 
    <a v-on:click="concierge" id="btn_new" :class="'btn btn-m mb-3 rounded-xl font-900 shadow-s icon-concierge'" style="background-color: #181818;"></a>
    
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
import { ContentLoader } from 'vue-content-loader'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  mounted() {
    init_template();
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    localStorage.perferedSite = '/site_list';
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
    $("#btn_new").hide();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    
  },
  data () {
    return {
        windowWidth: window.innerWidth,
        getUserRecommendationsByTargetType: [],
        prev_driection: true,
        lastScrollPosition: 0,
        scrollTop: 0,
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
  apollo: {
    getUserRecommendationsByTargetType: {
        query: gql`query Query($targetType: RecommendationTargetType) {
            getUserRecommendationsByTargetType(targetType: $targetType) {
                _id
                title
                description
                previewCount
                cssStyle
                className
                type
                targetType
                previews {
                ... on Diving {
                    diveCenters {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                    divePoints {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                    diveSites {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                }
                ... on DiveSite {
                    _id
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on DivePoint {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on DiveCenter {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on Instructor {
                    _id
                    gender
                    profileImages {
                    _id
                    thumbnailUrl
                    }
                    careers
                    introduction
                }
                }
            }
        }`,
        variables () {
            return {
                targetType: "diveSite"
            }
        },
        async result () {
            setTimeout(function() {
                $("#div_content_loader").hide();
            },200);
            var id_arr = new Array();
            var width_arr = new Array();
            this.getUserRecommendationsByTargetType.filter(x=>x.previewCount > 3).forEach(x => {
                x.previews.forEach(y => {
                    if (y.backgroundImages.length > 0) {
                        id_arr.push(y.backgroundImages[0]._id);
                        width_arr.push(720);
                    }
                });
            });
            if (id_arr.length > 0) {
                var result_image = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    },
                    data: {
                        query: `
                            query Query($ids: [ID], $widths: [Int]) {
                                getImageUrlsByIds(_ids: $ids, widths: $widths)
                            }
                        `,
                        variables: {
                            ids: id_arr,
                            widths: width_arr
                        }

                    }
                });
                if (result_image.data.data.getImageUrlsByIds) {
                    var cnt = 0;
                    this.getUserRecommendationsByTargetType.filter(x=>x.previewCount > 3).forEach(x => {
                        x.previews.forEach(y => {
                            if (y.backgroundImages.length > 0) {
                                y.backgroundImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[cnt];
                                cnt++;
                            }
                        });
                    });
                    //console.log(result_image.data.data.getImageUrlsByIds);
                }
            }
            
            var splide = document.getElementsByClassName('splide');
            if(splide.length){
                var singleSlider = document.querySelectorAll('.single-slider-site');
                if(singleSlider.length) {
                    singleSlider.forEach(function(e){
                        //setTimeout(function(e) {
                            var single = new Splide( '#'+e.id, {
                                type:'loop',
                                autoplay:true,
                                interval:4000,
                                perPage: 1,
                            }).mount();
                            var sliderNext = document.querySelectorAll('.slider-next');
                            var sliderPrev = document.querySelectorAll('.slider-prev');
                            sliderNext.forEach(el => el.addEventListener('click', el => {single.go('>');}));
                            sliderPrev.forEach(el => el.addEventListener('click', el => {single.go('<');}));
                        //},100, e);
                        
                    });
                }
                //Card Extender
                const cards = document.getElementsByClassName('card');
                function card_extender(){
                    var headerHeight, footerHeight, headerOnPage;
                    var headerOnPage = document.querySelectorAll('.header:not(.header-transparent)')[0];
                    var footerOnPage = document.querySelectorAll('#footer-bar')[0];

                    headerOnPage ? headerHeight = document.querySelectorAll('.header')[0].offsetHeight : headerHeight = 0
                    footerOnPage ? footerHeight = document.querySelectorAll('#footer-bar')[0].offsetHeight : footerHeight = 0

                    for (let i = 0; i < cards.length; i++) {
                        if(cards[i].getAttribute('data-card-height') === "cover"){
                            if (window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.outerHeight;}
                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.innerHeight;}
                            var coverHeight = windowHeight - headerHeight - footerHeight + 'px';
                        }
                        if(cards[i].getAttribute('data-card-height') === "cover-card"){
                            var windowHeight = window.outerHeight;
                            var coverHeight = windowHeight - 275 + 'px';
                            cards[i].style.height =  coverHeight
                        }
                        if(cards[i].getAttribute('data-card-height') === "cover-full"){
                            if (window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.outerHeight;}
                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.innerHeight;}
                            var coverHeight = windowHeight + 'px';
                            cards[i].style.height =  coverHeight
                        }
                        if(cards[i].hasAttribute('data-card-height')){
                            var getHeight = cards[i].getAttribute('data-card-height');
                            cards[i].style.height= getHeight +'px';
                            if(getHeight === "cover"){
                                var totalHeight = getHeight
                                cards[i].style.height =  coverHeight
                            }
                        }
                    }
                }

                if(cards.length){
                    card_extender();
                    window.addEventListener("resize", card_extender);
                }
            }
        },
        fetchPolicy: 'no-cache'
    },
  },
  components: {
    PullTo,
    ContentLoader,
  },
  methods: {
    async moveRecommend(id, targetType) {
        await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                mutation Mutation($targetId: ID!, $targetType: UserReactionTargetType!) {
                    view(targetId: $targetId, targetType: $targetType)
                }
                `,
                variables: {
                    "targetId": id,
                    "targetType": targetType
                }
            }
        });
        location.href = '/recommend/' + id;
    },
    async movePreview(item) {
        var dic_type1 = {"DiveSite": "diveSite", "DivePoint": "divePoint", "DiveCenter": "diveCenter", "Diving": "diving", "User": "user", "Review": "review", "Forum": "forum", "Recommendation": "recommendation"};
        await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                mutation Mutation($targetId: ID!, $targetType: UserReactionTargetType!) {
                    view(targetId: $targetId, targetType: $targetType)
                }
                `,
                variables: {
                    "targetId": item._id,
                    "targetType": dic_type1[item.__typename]
                }
            }
        });
        var dic_type2 = {"DiveSite": "site", "DivePoint": "point", "DiveCenter": "center", "Diving": "diving", "User": "user", "Review": "review", "Forum": "forum", "Recommendation": "recommendation"};
        location.href = '/' + dic_type2[item.__typename] + '/' + item.uniqueName;
    },
    async refresh(loaded) {
      if ($(document).scrollTop() == 0) {
          await this.$apollo.queries.getUserRecommendationsByTargetType.refetch()
          loaded('done')
        
      } else {
        console.log("1")
        loaded('done')
        return false;
      }
    },
    stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
            this.iconLink = '#fa-arrow-down';
        } else if (state === 'loading') {
            this.iconLink = '#fa-spinner';
        } else if (state === 'loaded-done') {
            this.iconLink = '#fa-check';
        }
    },
    goSiteMap: function() {
        //location.href = '/site_home' + location.search;
        location.href = '/site/map' + location.search;
    },
    goList: function() {
        location.href='/center_list' + location.search;
    },
    handleScroll (event) {
        this.scrollTop = $(document).scrollTop();
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) { 
            return
        } 
        if ((currentScrollPosition < this.lastScrollPosition) == false && this.prev_driection == true) {
            $("#btn_new").show(500);
        } else if ((currentScrollPosition < this.lastScrollPosition) == true && this.prev_driection == false) {
            $("#btn_new").hide(300);
        }
        this.prev_driection = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
    },
    login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          location.href='/user/create';
        }
      },
      async concierge() {
        if (localStorage.idToken) {
            var result = await axios({
                url: 'https://chat.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        query {
                            getJoinedRoomList {
                                lastChatMessage {
                                text
                                author {
                                    _id
                                    uid
                                    name
                                    avatarOrigin
                                }
                                createdAt
                                }
                                _id
                                title
                                type
                                lastMessageAt
                                numOfmessages
                                unread
                                createdAt
                                chatUsers {
                                _id
                                name
                                uid
                                avatarOrigin
                                }
                                usersCount
                                owner {
                                _id
                                uid
                                name
                                avatarOrigin
                                }
                            }
                        }
                    `
                }
            });
            
            var concierge_uid = "RuOiMt9YUTbRUJQTrXv4cWMEimr2";
            // 개설된 채팅이 있는지 확인한다.
            var go_flag = false;
            result.data.data.getJoinedRoomList.forEach(room => {
                if (room.type == 'direct' && room.chatUsers.filter(u=>u._id == concierge_uid).length > 0) {
                    go_flag = true;
                    location.href = '/chat/' + room._id;
                }
            })
            if (go_flag == false) {
                // 없는경우, 더미로 하나 만든다.
                //localStorage.chatType = 'direct';
                //var chatUids = new Array();
                //chatUids.push(concierge_uid);
                //localStorage.chatUids = JSON.stringify(chatUids);
                //localStorage.chatName = "WeDive";
                //location.href = '/chat/create'

                //this.$router.push({name: "ChatDummyPage", params: {is_concierge: true, roomName: "WeDive", chatType: "direct", chatUids: JSON.stringify([concierge_uid])}});
                location.href = '/chat/create?uid=['+concierge_uid+']'
            }
        } else { // 로그인
            this.login();
        }
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-chip {padding-left: 16px;margin: 0px 4px 0px 0px;margin-bottom: 4px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 3px;}
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.ls-n1 {letter-spacing: -1px;}

@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
-webkit-@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}
-webkit-@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}

.movebox {animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;}
.movebox2 {position:absolute;white-space: nowrap;left:-100px;padding-top:5px;opacity:.5;animation: motion-endtoend 20s linear infinite;-webkit-animation: motion-endtoend 20s linear infinite;}
.movebox3 {position:absolute;white-space: nowrap;left:-100px;padding-top:50px;opacity:.5;animation: motion-endtoend 30s linear infinite;-webkit-animation: motion-endtoend 30s linear infinite;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.card-nearby {margin-left: 10px;background-size: cover !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}

.card-white > h4 {color: white}
.card-white > p {color: white !important;}
.card-white .wedive-txt-all {color: white;filter: brightness(100) !important;}
.thumb-img {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
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
