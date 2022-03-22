<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 0px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="p-3 pb-0">
                <vue-typeahead-bootstrap
                    id="input_query"
                    v-model="query"
                    class="wedive-search disable-search-result"
                    :data="users"
                    :serializer="item => item.name"
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
            <div class="content mt-0 mb-0" style="min-height: calc(100vh - 143px);padding-bottom:40px;">
                <div v-for="item in users">
                    <div class="map-box">
                        <a :href="'/' + ((item.__typename=='DiveSite') ? 'site' : (item.__typename=='DivePoint') ? 'point' : 'center') + '/' + item.uniqueName">
                        
                            <div class="bx mt-3 mb-3">
                                <div class="justify-content-center mb-0 text-start">
                                    <div style="float: left;position: relative;width: 75px; height:75px;">
                                        <div class="thumb-img me-2">
                                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                <clipPath id="clipSquircle">
                                                    <use xlink:href="#shapeSquircle"/>
                                                </clipPath>
                                                </defs>
                                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(item.backgroundImages && item.backgroundImages.length>0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                            </svg>
                                        </div>
                                        <!--<img v-bind:src="(item.backgroundImages && item.backgroundImages.length>0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="75" height="75" style="object-fit: cover;">-->
                                    </div>
                                    <div :class="item.__typename" style="display:inline-block;vertical-align: top;width: calc(100vw - 130px);margin-left:16px;min-height:80px;padding-top:8px;">
                                        <span class="map_box_cate">{{ ((item.__typename=='DiveSite')? '사이트' : (item.__typename=='DivePoint')? '포인트' : '센터') }}</span><span class="font-18 pb-0 font-600"> {{item.name}} </span>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{ (item.description == '') ? '&nbsp;' : item.description }} </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{(item.adminScore/20).toFixed(1)}} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-if="item.institutionTypes && item.institutionTypes.length > 0"><span v-for="(insti,index) in item.institutionTypes" v-if="index < 2" v-on:click="openInstitutionBottomSheet()"><img class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="17" style="padding-bottom: 1px;filter: grayscale(100%) contrast(0.5);" /><span v-if="index != (item.institutionTypes.length-1)">&nbsp;&nbsp;</span></span>&nbsp;<font class="color-gray-light">|</font>&nbsp;</span>
                                            <span v-if="item.interests && item.interests.filter(x=>x.type=='priceIndex') != null && item.interests.filter(x=>x.type=='priceIndex').length > 0">{{ item.interests.filter(x=>x.type=='priceIndex')[0].title.replace(/\$/gi, '₩') }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    
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
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
const axios = require("axios")
var searchParams = {};

export default {
  name: 'HelloWorld',
  watch: {
      query: function(newVal, oldVal) {
        if(localStorage.suggestionFlag && localStorage.suggestionFlag == '1') {
            localStorage.suggestionFlag = '0';
            
            this.lookupUser3();
        } else {
            this.openSuggestion();
            this.query_place = JSON.parse(JSON.stringify(this.query)) + "";
            setTimeout(function() {
                $("#suggestion_typeahead > .input-group > input").focus();
            }, 200)
        }
      },
  },
  
  methods: {
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
      removeSuggestSelected() {
          //console.log("removeSuggestSelected")
      },
      selectSuggestion(item) {
          if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
          }
          localStorage.suggestionFlag = '1';
          this.query = item;
          //document.getElementById("search-suggestion").classList.remove('menu-active');
          //document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
      },
      handleFire() {
          localStorage.suggestionFlag = '1';
          this.query = (JSON.parse(JSON.stringify(this.query_place))+"");
          //document.getElementById("search-suggestion").classList.remove('menu-active');
          //document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
      },
      openSuggestion() {
            /*var menuData = "search-suggestion";
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
            // jjangs : open menu
            if(window.location.href.split('/').pop() != 'modal'){
                window.history.pushState({}, 'modal', window.location.pathname + '/modal');
            }
            
            var menu = document.getElementById(menuData);
            var menuEffect = menu.getAttribute('data-menu-effect');
            var menuLeft = menu.classList.contains('menu-box-left');
            var menuRight = menu.classList.contains('menu-box-right');
            var menuTop = menu.classList.contains('menu-box-top');
            var menuBottom = menu.classList.contains('menu-box-bottom');
            var menuWidth = menu.offsetWidth;
            var menuHeight = menu.offsetHeight;
            var menuTimeout = menu.getAttribute('data-menu-hide');

            if(menuTimeout){
                setTimeout(function(){
                    document.getElementById(menuData).classList.remove('menu-active');
                    document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
                },menuTimeout)
            }

            if(menuEffect === "menu-push"){
                var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth+"px)"}}
                if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth+"px)"}}
                if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight+"px)"}}
                if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight+"px)"}}
            }
            if(menuEffect === "menu-parallax"){
                var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth/10+"px)"}}
                if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth/10+"px)"}}
                if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight/5+"px)"}}
                if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight/5+"px)"}}
            }*/
      },
      submit_filter() {
        searchParams = {};
        // admin Score
        for (var i=0; i<3; i++) {
            if (this["check_star"+(i*10+70)] == true) {
                searchParams.adminScore = (i*10+70);
                break;
            }
        }

        // env Score
        for (var i=1; i<6; i++) {
            if (this["check_fish"+(i*10+70)] == true) {
                searchParams.waterEnvironmentScore = (i*10+70);
                break;
            }
        }

        // sight Score
        for (var i=1; i<6; i++) {
            if (this["check_sight"+(i*10+70)] == true) {
                searchParams.eyeSightScore = (i*10+70);
                break;
            }
        }

        if (this.check_type1 == true) {
            if (searchParams.divingTypes == null)
                searchParams.divingTypes = [];
            searchParams.divingTypes.push("scubaDiving")
        }
        if (this.check_type2 == true) {
            if (searchParams.divingTypes == null)
                searchParams.divingTypes = [];
            searchParams.divingTypes.push("freeDiving")
        }

        // 다이빙 환경
        var interest_env_list = {"1": ["61990d68ae1cc12e02c3cd11","61990d34ae1cc12e02c3cd0e"], "2": ["61dd64859815533e8906ba88"], "3": ["61dd64a69815533e8906ba94","61a2fefa098b3785ef439cb3","61d4398c85923732bbf43f34","61d539d74d981dc13e870736"], "4": ["61ac9de8eac3ebfb7ac9f95e","61d539b44d981dc13e870733","61780725f7c3a048b4704ce2","61780715f7c3a048b4704ce0","619a6aa77b2668ca7778e722","619a6abb7b2668ca7778e725","6176377ef7c3a048b4704785"], "5": ["61dd64b59815533e8906ba97"], "6": ["61abfc1ceac3ebfb7ac9f84e","61abfbfeeac3ebfb7ac9f84b"], "7": ["61763aa7f7c3a048b47047ac","61763a77f7c3a048b47047a8","6198fdf7ae1cc12e02c3cc7d"]};
        for (var i=1; i<8; i++) {
            if (this["check_env"+i] == true) {
                if (searchParams.interests == null)
                    searchParams.interests = [];
                for (var j=0; j<interest_env_list[(i+"")].length; j++) {
                    searchParams.interests.push(interest_env_list[(i+"")][j]);
                }
            }
        }

        // 다이빙 종류
        var interest_type_list = {"1": ["6174da75a60639819c3e6ae5"], "2": ["61f0f11f260f98aa0c452ae2","6198fd3eae1cc12e02c3cc75","6178021ff7c3a048b4704a7a","61780228f7c3a048b4704a7c"], "3": ["61dd659a9815533e8906baa2"], "4": ["61763794f7c3a048b4704789"]}
        for (var i=1; i<5; i++) {
            if (this["check_point"+i] == true) {
                if (searchParams.interests == null)
                    searchParams.interests = [];
                for (var j=0; j<interest_type_list[(i+"")].length; j++) {
                    searchParams.interests.push(interest_type_list[(i+"")][j]);
                }
            }
        }

        
      },
      async lookupUser3() {
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
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchPlaces) {
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => {item.type='site';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => {item.type='point';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => {item.type='center';result_list.push(item)});
        }
        //if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        //if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        //if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;

        if(preloader){
            preloader.classList.remove('opacity-50');
            preloader.classList.add('preloader-hide');
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

    ////////////
    const oSuggestion = this.openSuggestion;
    setTimeout(function() {
        oSuggestion();
    }, 800);
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
        users: [],
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
.action-filter:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/assets/icon_filter.png);text-indent: -9999px;vertical-align: middle;}
.action-map {position: relative;float: right;width: 74px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-map:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/assets/icon_map.png);text-indent: -9999px;vertical-align: middle;}
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

</style>
