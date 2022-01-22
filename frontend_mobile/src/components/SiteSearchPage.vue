<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="wedive-action text-center" style="z-index: 99;">
            <button data-menu="menu-filter" class="action-filter"><span>필터</span></button>
            <a href="/site_home" class="action-map"><span>지도</span></a>
        </div>
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="p-3">
                <vue-typeahead-bootstrap
                    v-model="query"
                    class="wedive-search disable-search-result"
                    :data="users"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="2"
                    placeholder="사이트, 포인트, 센터 (수영장)"
                    inputClass="special-input-class"
                    :disabledValues="[(selecteduser ? [selecteduser.name] : [])]"
                    @input="lookupUser3"
                    >
                    
                </vue-typeahead-bootstrap>
                
            </div>
            <div class="content mt-0 mb-0" style="height: calc(100vh - 208px);">
                <div v-for="item in users">
                    <div class="map-box">
                        <a :href="'/' + ((item.__typename=='DiveSite') ? 'site' : (item.__typename=='DivePoint') ? 'point' : 'center') + '/' + item.uniqueName">
                        
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div :class="item.__typename + '-tag'" style="float: left;position: relative;width: 75px; height:75px;">
                                        <img v-bind:src="(item.backgroundImages && item.backgroundImages.length>0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="75" height="75" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 90px;">
                                        <h4 class="font-15 pb-0"> {{item.name}} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{item.description}} </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{(item.adminScore/20).toFixed(1)}} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-if="item.institutionTypes && item.institutionTypes.length > 0"><span v-for="(insti,index) in item.institutionTypes" v-if="index < 2" v-on:click="openInstitutionBottomSheet()"><img class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="17" style="padding-bottom: 1px;filter: grayscale(100%) contrast(0.5);" /><span v-if="index != (item.institutionTypes.length-1)">&nbsp;&nbsp;</span></span>&nbsp;<font class="color-gray-light">|</font>&nbsp;</span>
                                            <span v-if="item.interests && item.interests.filter(x=>x.type=='priceIndex')">{{ item.interests.filter(x=>x.type=='priceIndex')[0].title.replace(/\$/gi, '₩') }}</span>
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
    
    <!-- Menu Fliter -->
    <div id="menu-filter" class="menu menu-box-bottom" style="height:100%;border-radius: 0px !important;">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 mb-0 text-center">필터를 선택하세요</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content m-0 text-start" style="height:calc(100vh - 125px);">
            <div class="card card-style ms-0 me-0 rounded-0 mb-0">
                <div class="content">
                    
                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 종류</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_type1" v-model="check_type1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_type1">스쿠버 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fas fa-mask font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_type2" v-model="check_type2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_type2">프리 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-swimmer font-17 color-secondary"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">총 평점</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star5" v-model="check_star5" v-on:click="check_star1=false;check_star2=false;check_star3=false;check_star4=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star4" v-model="check_star4" v-on:click="check_star5=!check_star4;check_star1=false;check_star2=false;check_star3=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star3" v-model="check_star3" v-on:click="check_star4=!check_star3;check_star5=!check_star3;check_star1=false;check_star2=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star2" v-model="check_star2" v-on:click="check_star3=!check_star2;check_star4=!check_star2;check_star5=!check_star2;check_star1=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star1" v-model="check_star1" v-on:click="check_star2=!check_star1;check_star3=!check_star1;check_star4=!check_star1;check_star5=!check_star1;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">수중 환경</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish5" v-model="check_fish5" v-on:click="check_fish1=false;check_fish2=false;check_fish3=false;check_fish4=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish4" v-model="check_fish4" v-on:click="check_fish5=!check_fish4;check_fish1=false;check_fish2=false;check_fish3=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish3" v-model="check_fish3" v-on:click="check_fish4=!check_fish3;check_fish5=!check_fish3;check_fish1=false;check_fish2=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish2" v-model="check_fish2" v-on:click="check_fish3=!check_fish2;check_fish4=!check_fish2;check_fish5=!check_fish2;check_fish1=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish1" v-model="check_fish1" v-on:click="check_fish2=!check_fish1;check_fish3=!check_fish1;check_fish4=!check_fish1;check_fish5=!check_fish1;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">시야</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight5" v-model="check_sight5" v-on:click="check_sight1=false;check_sight2=false;check_sight3=false;check_sight4=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight4" v-model="check_sight4" v-on:click="check_sight5=!check_sight4;check_sight1=false;check_sight2=false;check_sight3=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight3" v-model="check_sight3" v-on:click="check_sight4=!check_sight3;check_sight5=!check_sight3;check_sight1=false;check_sight2=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight2" v-model="check_sight2" v-on:click="check_sight3=!check_sight2;check_sight4=!check_sight2;check_sight5=!check_sight2;check_sight1=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight1" v-model="check_sight1" v-on:click="check_sight2=!check_sight1;check_sight3=!check_sight1;check_sight4=!check_sight1;check_sight5=!check_sight1;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 환경</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env1" v-model="check_env1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env1">난파선</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-ship font-17 color-brown-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env2" v-model="check_env2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env2">초대형 난파선</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-ship font-17 color-blue-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env3" v-model="check_env3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env3">마크로</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-gray-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env4" v-model="check_env4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env4">대물</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-blue-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env5" v-model="check_env5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env5">가두리 양식장</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fab fa-buffer font-17 color-gray-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env6" v-model="check_env6">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env6">수중 조형물</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fab fa-sourcetree font-17 color-blue-light"></i>
                    </div>


                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 종류</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point1" v-model="check_point1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point1">동굴다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-archway font-17 color-magenta-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point2" v-model="check_point2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point2">월다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-window-restore font-17 color-green-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point3" v-model="check_point3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point3">해루질</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-slash font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point4" v-model="check_point4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point4">케이지다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-align-center font-17 color-instagram"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point5" v-model="check_point5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point5">나이트록스</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-cube font-17 color-dark-dark"></i>
                    </div>

                </div>
                
                   
            </div>
            <div style="position: absolute;width: 100%;bottom:16px;">
                <div id="filter_list" class="ms-3 me-3 mb-3"></div>
                <a v-on:click="submit_filter" href="#" class="close-menu btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3">적용</a>
            </div>
        </div>
    </div>


  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
const axios = require("axios")
var searchParams = {};

export default {
  name: 'HelloWorld',
  watch: {
      
  },
  
  methods: {
      submit_filter() {
        // admin Score
        for (var i=1; i<6; i++) {
            if (this["check_star"+i] == true) {
                searchParams.adminScore = i
                break;
            }
        }

        // env Score
        for (var i=1; i<6; i++) {
            if (this["check_fish"+i] == true) {
                searchParams.waterEnvironmentScore = i
                break;
            }
        }

        // sight Score
        for (var i=1; i<6; i++) {
            if (this["check_sight"+i] == true) {
                searchParams.eyeSightScore = i
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
        var interest_env_list = ["617806f5f7c3a048b4704cde","61990d34ae1cc12e02c3cd0e","6178f01cf7c3a048b4706cc6","61a2fefa098b3785ef439cb3","61780725f7c3a048b4704ce2","619a6aa77b2668ca7778e722"];
        for (var i=1; i<7; i++) {
            if (this["check_env"+i] == true) {
                if (searchParams.interests == null)
                    searchParams.interests = [];
                searchParams.interests.push(interest_env_list[(i-1)]);
            }
        }

        // 다이빙 종류
        var interest_type_list = ["61780259f7c3a048b4704a82","6176374df7c3a048b4704782","61780278f7c3a048b4704a85","61780715f7c3a048b4704ce0","6198ff69ae1cc12e02c3cca3"];
        for (var i=1; i<6; i++) {
            if (this["check_point"+i] == true) {
                if (searchParams.interests == null)
                    searchParams.interests = [];
                searchParams.interests.push(interest_type_list[(i-1)]);
            }
        }

        
      },
      async lookupUser3() {
        this.users = [];
        var query = this.query;
        var _searchParams = JSON.parse(JSON.stringify(searchParams));
        if (_searchParams.adminScore) _searchParams.adminScore *= 20;
        if (_searchParams.waterEnvironmentScore) _searchParams.waterEnvironmentScore *= 20;
        if (_searchParams.eyeSightScore) _searchParams.eyeSightScore *= 20;
        _searchParams.query = query;
        

        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
            query: `
                query SearchPlaces($searchParams: SearchParams, $limit: Int) {
                    searchPlaces(searchParams: $searchParams, limit: $limit) {
                        __typename
                        ... on DiveSite {
                            _id
                            uniqueName
                            name
                            description
                            adminScore
                            latitude
                            longitude
                            backgroundImages {
                                thumbnailUrl
                            }
                            interests {
                                title
                                type
                            }
                        }
                        ... on DivePoint {
                            _id
                            uniqueName
                            name
                            description
                            adminScore
                            latitude
                            longitude
                            backgroundImages {
                                thumbnailUrl
                            }
                            interests {
                                title
                                type
                            }
                        }
                        ... on DiveCenter {
                            _id
                            uniqueName
                            name
                            description
                            divingType
                            adminScore
                            latitude
                            longitude
                            institutionTypes
                            backgroundImages {
                                thumbnailUrl
                            }
                            interests {
                                title
                                type
                            }
                        }
                        address
                        latitude
                        longitude
                        countryCode
                    }
                }
                `,
                variables: {
                    "limit": 100,
                    "searchParams": _searchParams
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
      },
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
        selecteduser: null,
        users: [],
        check_star1: false,
        check_star2: false,
        check_star3: false,
        check_star4: false,
        check_star5: false,
        check_fish1: false,
        check_fish2: false,
        check_fish3: false,
        check_fish4: false,
        check_fish5: false,
        check_sight1: false,
        check_sight2: false,
        check_sight3: false,
        check_sight4: false,
        check_sight5: false,
        check_cate1: true,
        check_cate2: true,
        check_cate3: true,
        check_type1: false,
        check_type2: false,
        check_env1: false,
        check_env2: false,
        check_env3: false,
        check_env4: false,
        check_env5: false,
        check_env6: false,
        check_point1: false,
        check_point2: false,
        check_point3: false,
        check_point4: false,
        check_point5: false,
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
</style>
