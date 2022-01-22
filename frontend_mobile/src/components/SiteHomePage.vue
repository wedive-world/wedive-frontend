<template>
  <div class="" style="height: 100%; !important">
    <div data-menu-active="nav-site"></div>
    <div class="main-header header header-fixed header-logo-center" style="height: 58px !important;">
        <a class="" href="/" style="margin-left: 16px;"><img class="logo-image" src="/static/images/assets/logo-dark.svg" height="46" /></a>
        
        <a href="/site_list" class="header-icon header-icon-3" style="margin-right: 18px;"><img src="/static/images/assets/icon_list2.png" width="26" style="margin-top: 12px;"/></i></a>
        <a v-on:click="searchBox()" href="#" class="header-icon header-icon-4" style="margin-right: 11px;"><img src="/static/images/assets/icon_search.png" width="28" style="margin-top: 12px;"/></a>
        <!--<a href="#" class="header-icon header-icon-4 color-theme circular_image" data-menu="menu-main" :style="'background: url('+((userThumbnail) ? userThumbnail : '/static/images/assets/user_empty_'+((gender)?gender:'m')+'.png')+');background-size:cover;width:36px;height:36px;margin-top:7px !important;margin-right:7px;'"></a>-->
    </div>
    

    <div class="page-content pb-0" style="height: 100% !important;">
        
        <div id="map" style="height: 100% !important;position: inherit !important;"></div>

        <div class="map-search hide">
            <div class="bx-search">
                
                
                <vue-typeahead-bootstrap
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="2"
                    placeholder="사이트, 포인트, 센터 (수영장)"
                    inputClass="special-input-class"
                    :disabledValues="(selecteduser ? [selecteduser.name] : [])"
                    @input="lookupUser3"
                    >
                    <template slot="suggestion" slot-scope="{ data, htmlText }">
                        <div class="d-flex align-items-center">
                        <img
                            class="rounded-s me-2"
                            :src="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                            style="width: 40px; height: 40px;" />
                        <span v-if="data.type == 'site'" class="ml-4" v-html="'<span class=\'badge border color-site border-site\'>사이트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'badge border color-point border-point\'>포인트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>센터</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        </div>
                    </template>
                </vue-typeahead-bootstrap>
            </div>
        </div>


        
        
        <div class="map-box hide">
            <a id="map_box_href" href="">
                <div class="bx">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                            <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                        </div>
                        
                        <div class="" style="padding-left: 110px;">
                            <h4 id="map_box_shop_name" class="mb-0"></h4>
                            <p id="map_box_shop_desc" class="pb-0 mb-0 line-height-m ellipsis"></p>
                            <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>&nbsp;
                                <span id="map_box_shop_star"></span>
                                <span id="map_box_agency" class="hide">
                                    <font class="color-gray-light">&nbsp;|&nbsp;</font>
                                    <img id="map_box_agency_img" src="" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                </span>
                                <span id="map_box_price" class="hide">
                                    <font class="color-gray-light">&nbsp;|&nbsp;</font>
                                    <span id="map_box_price_index" style="letter-spacing: -2px;"></span>
                                </span>
                            </p>
                            <div class="box-bottom">
                                <div class="wedive-corner wedive-corner-bottom"></div>
                                <div class="box-bottom-area color-white row" style="box-shadow: inset 0px 0px 5px rgb(0 0 0 / 50%);">
                                    <a href="" class="col-4 text-center box-bottom-item">컨시어지</a><a href="" class="col-4 text-center box-bottom-item">버디찾기</a><a href="" class="col-4 text-center box-bottom-item">강사찾기</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
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
                        <label for="filter_type" class="color-highlight font-700">타입</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_cate1" v-model="check_cate1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_cate1">사이트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-map-marker font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_cate2" v-model="check_cate2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_cate2">포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-map-pin font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_cate3" v-model="check_cate3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_cate3">센터 (수영장)</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-store font-17 color-highlight"></i>
                    </div>

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

    <a id="btn_filter" data-menu="menu-filter" class="btn btn-m mb-3 rounded-xl font-900 shadow-s icon-filter" style="background-color: #181818;"></a>
    <a href="/buddy_create" id="btn_new" class="btn btn-m mb-3 rounded-xl font-900 shadow-s icon-concierge" style="background-color: #181818;"></a>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';

const axios = require("axios")

var map = null;
var markerList = [];
var selecteduser = null;

var siteList = new Array();
var pointList = new Array();
var centerList = new Array();
var searchParams = {};
var check_cate1 = true;
var check_cate2 = true;
var check_cate3 = true;

async function updateAll() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();

    var _searchParams = JSON.parse(JSON.stringify(searchParams));
    _searchParams.lat1 = sw.lat();
    _searchParams.lng1 = sw.lng();
    _searchParams.lat2 = ne.lat();
    _searchParams.lng2 = ne.lng();
    if (_searchParams.adminScore) _searchParams.adminScore *= 20;
    if (_searchParams.waterEnvironmentScore) _searchParams.waterEnvironmentScore *= 20;
    if (_searchParams.eyeSightScore) _searchParams.eyeSightScore *= 20;
    
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
                        __typename`+
                        ((check_cate1) ? `... on DiveSite {
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
                        }` : ``)+
                        ((check_cate2) ? `... on DivePoint {
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
                        }` : ``)+
                        ((check_cate3) ? `... on DiveCenter {
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
                        }` : ``)+
                        `
                        address
                        latitude
                        longitude
                        countryCode
                    }
                }
            `,
            variables: {
                "limit": 50,
                "searchParams": _searchParams,
            }
        }
    });
    siteList = [];
    pointList = [];
    centerList = [];
    if (result.data.data.searchPlaces) {
        result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => siteList.push(item));
        result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => pointList.push(item));
        result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => centerList.push(item));
    }
    
    // 필요 없는 그린 마커를 모두 삭제한다.
    var zoomLevel = map.getZoom();
    for (var i = 0; i < markerList.length; i++ ) {
        if ((siteList && siteList.filter(x=>x._id == markerList[i]._id).length == 0 && pointList && pointList.filter(x=>x._id == markerList[i]._id).length == 0 && centerList && centerList.filter(x=>x._id == markerList[i]._id).length == 0) || (zoomLevel>12 && markerList[i].type == 'site')) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
        else if (zoomLevel < 9) {
            markerList[i].setLabel(" ");
            if (selecteduser != null && selecteduser._id == markerList[i]._id) {
                new google.maps.event.trigger( markerList[i], 'click' );
                selecteduser = null;
            }
        } else {
            var label_color = (markerList[i].type=='site') ? '#5f6368' : ((markerList[i].type=='point') ? '#498c99' : '#2a526f')
            var label_text = markerList[i].title + ((markerList[i].type=='site')?' 사이트' : ((markerList[i].type=='point') ? '': ''));
            markerList[i].setLabel({ color: label_color, fontWeight: 'bold', fontSize: '14px', className: 'wedive-label', text: label_text });
            if (selecteduser != null && selecteduser._id == markerList[i]._id) {
                new google.maps.event.trigger( markerList[i], 'click' );
                selecteduser = null;
            }
        }
    }
    
    // 새롭게 마커를 그려준다.
    var allList_item = ["site", "point", "center"];
    for (var k=0; k<3; k++) {
        var allList = [];
        if (k == 0 && check_cate1) {if (zoomLevel > 12)allList = []; else allList = siteList;}
        else if (k == 1 && check_cate2) allList = pointList;
        else if (k == 2 && check_cate3) allList = centerList;
        for (var i=0; i<allList.length; i++) {
            if (markerList && markerList.filter(x=>x._id == allList[i]._id).length == 0) {
                const img_path = (allList[i].adminScore > 40) ? '/static/images/assets/ico_pin'+k+'.png' : '/static/images/assets/ico_pin_small'+k+'.png'
                const img = (allList[i].backgroundImages && allList[i].backgroundImages.length>0) ? allList[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
                const img_size = new google.maps.Size(38,43);
                const title = allList[i].name;
                const uniqueName = allList[i].uniqueName;
                const desc = allList[i].description;
                const star = (allList[i].adminScore/20).toFixed(1);
                const position = {lat: allList[i].latitude, lng: allList[i].longitude};
                const _id = allList[i]._id;

                const institutionTypes = (k==2) ? (allList[i].institutionTypes) : null;
                var priceIdxs = (k==2 && allList[i].interests) ? (allList[i].interests.filter(x=>x.type=='priceIndex')) : null;
                const price_index = (priceIdxs && priceIdxs.length>0 && priceIdxs[0].title) ? priceIdxs[0].title.replace(/\$/gi, '₩') : '';
                const institution_types = (k==2 && allList[i].institutionTypes) ? (allList[i].institutionTypes) : null;
                const m_type = allList_item[k];
                const _k = k;

                const label_text = (zoomLevel < 9) ? ' ' : (title + ((k==0)?' 사이트':((k==1)?'':'')));
                const label_color = (k==0) ? '#5f6368' : ((k==1) ? '#498c99' : '#2a526f');
                
                const marker_shop = new google.maps.Marker({
                    map: map,
                    position: position,
                    icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
                    label: { color: label_color, fontWeight: 'bold', fontSize: '14px', className: 'wedive-label', text: label_text },
                    img_path: img_path,
                    star: star,
                    title: title,
                    _id: _id,
                    type: m_type,
                    institutionTypes: institutionTypes,
                });
                if (label_text == ' ') {
                    marker_shop.setLabel(" ");
                }
                marker_shop.addListener("click", () => {
                    $(".map-box").removeClass("hide");
                    $("#btn_new").addClass("hide");
                    $("#btn_filter").addClass("hide");
                    for (var j=0; j<markerList.length; j++) {
                        var _icon = markerList[j].getIcon();
                        if (_icon.size.width != 38) {
                            markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                        }
                    }

                    $("#map_box_shop_name").text(title + (k==0?' 사이트':(k==1?'':'')));
                    $("#map_box_shop_desc").text(desc);
                    $("#map_box_shop_star").text(star);
                    $("#map_box_href").attr("href", "/" + m_type + "/" + uniqueName);
                    
                    $(".box-bottom").removeClass('site').removeClass('point').removeClass('center');
                    $(".box-bottom").addClass(m_type)

                    if ($("#map_box_agency").hasClass("hide") == false) $("#map_box_agency").addClass("hide");
                    if ($("#map_box_price").hasClass("hide") == false) $("#map_box_price").addClass("hide");
                    
                    $("#map_box_shop_feature").text('');
                    $("#map_box_shop_img").attr("src", img);

                    if (institutionTypes && institutionTypes.length > 0) {
                        $("#map_box_agency").removeClass("hide");
                        $("#map_box_agency_img").attr("src", '/static/images/agency/logo_'+institutionTypes[0].toLowerCase()+'.svg');
                    }
                    if (price_index && price_index != '') {
                        $("#map_box_price").removeClass("hide");
                        $("#map_box_price_index").text(price_index);
                        
                    }
                    
                    marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big'+_k+'.png', null, null, null, new google.maps.Size(58,66)));
                    map.panTo(marker_shop.getPosition());
                    /*if (map.getZoom() == 18) {
                        map.panTo(marker_shop.getPosition());
                    } else {
                        map.setZoom(18);
                        map.setCenter(marker_shop.getPosition());
                    }*/
                });

                if (selecteduser != null && selecteduser._id == _id) {
                    new google.maps.event.trigger( marker_shop, 'click' );
                    selecteduser = null;
                }
                
                markerList.push(marker_shop);
            }
        }
    }

    //new MarkerClusterer({ markerList, map });

}

async function updateSite() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    
    
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
                query GetDiveSitesNearby($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
                    getDiveSitesNearby(lat1: $lat1, lon1: $lon1, lat2: $lat2, lon2: $lon2) {
                        _id
                        name
                        uniqueName
                        description
                        highlightDescription
                        adminScore
                        latitude
                        longitude
                        eyeSightScore
                        flowRateScore
                        waterEnvironmentScore
                        backgroundImages {
                            thumbnailUrl
                        }
                    }
                }
            `,
            variables: {
                "lat1": sw.lat(),
                "lon1": sw.lng(),
                "lat2": ne.lat(),
                "lon2": ne.lng()
            }
        }
    });
    siteList = [];
    result.data.data.getDiveSitesNearby.forEach(item => siteList.push(item));
    // 필요 없는 그린 마커를 모두 삭제한다.
    for (var i = 0; i < markerList.length; i++ ) {
        if (siteList && siteList.filter(x=>x._id == markerList[i]._id).length == 0 && pointList && pointList.filter(x=>x._id == markerList[i]._id).length == 0 && centerList && centerList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        } else if (map.getZoom() < 9) {
            markerList[i].setLabel("");
        }
    }
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<siteList.length; i++) {
        if (markerList && markerList.filter(x=>x._id == siteList[i]._id).length == 0) {
            const img_path = (siteList[i].adminScore > 40) ? '/static/images/assets/ico_pin0.png' : '/static/images/assets/ico_pin_small0.png'
            const img = (siteList[i].backgroundImages && siteList[i].backgroundImages.length>0) ? siteList[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
            const img_size = new google.maps.Size(38,43);
            const title = siteList[i].name;
            const uniqueName = siteList[i].uniqueName;
            const desc = siteList[i].description;
            const star = (siteList[i].adminScore/20).toFixed(1);
            const price_index = '';
            const position = {lat: siteList[i].latitude, lng: siteList[i].longitude};
            const _id = siteList[i]._id;
            const label_text = (map.getZoom() < 9) ? '' : (title + ((k==0)?' 사이트':((k==1)?'':'')));
            

            const marker_shop = new google.maps.Marker({
                map: map,
                position: position,
                icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
                label: { color: '#5f6368', fontWeight: 'bold', fontSize: '14px', className: 'wedive-label', text: label_text },
                img_path: img_path,
                star: star,
                title: title,
                _id: _id,
                type: 'site',
            });
            marker_shop.addListener("click", () => {
                $(".map-box").removeClass("hide");
                $("#btn_new").addClass("hide");
                $("#btn_filter").addClass("hide");
                for (var j=0; j<markerList.length; j++) {
                    var _icon = markerList[j].getIcon();
                    if (_icon.size.width != 38) {
                        markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                    }
                }

                $("#map_box_shop_name").text(title + " 사이트");
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text(star);
                $("#map_box_href").attr("href", "/site/" + uniqueName);
                
                $(".box-bottom").removeClass('site').removeClass('point').removeClass('center');
                $(".box-bottom").addClass('site')

                if ($("#map_box_agency").hasClass("hide") == false) $("#map_box_agency").addClass("hide");
                if ($("#map_box_price").hasClass("hide") == false) $("#map_box_price").addClass("hide");
                
                $("#map_box_shop_feature").text('');
                $("#map_box_shop_img").attr("src", img);
                
                
                marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big0.png', null, null, null, new google.maps.Size(58,66)));
                map.panTo(marker_shop.getPosition());
                /*if (map.getZoom() == 18) {
                    map.panTo(marker_shop.getPosition());
                } else {
                    map.setZoom(18);
                    map.setCenter(marker_shop.getPosition());
                }*/
            });
            
            markerList.push(marker_shop);
        }
    }
}

async function updatePoint() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    
    
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
                query GetDivePointsNearBy($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
                    getDivePointsNearBy(lat1: $lat1, lon1: $lon1, lat2: $lat2, lon2: $lon2) {
                        _id
                        name
                        uniqueName
                        description
                        highlightDescription
                        adminScore
                        latitude
                        longitude
                        flowRateScore
                        waterEnvironmentScore
                        eyeSightScore
                        backgroundImages {
                        thumbnailUrl
                        }
                    }
                }
            `,
            variables: {
                "lat1": sw.lat(),
                "lon1": sw.lng(),
                "lat2": ne.lat(),
                "lon2": ne.lng()
            }
        }
    });
    pointList = [];
    result.data.data.getDivePointsNearBy.forEach(item => pointList.push(item));
    // 필요 없는 그린 마커를 모두 삭제한다.
    for (var i = 0; i < markerList.length; i++ ) {
        if (pointList && pointList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
    }
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<pointList.length; i++) {
        if (markerList && markerList.filter(x=>x._id == pointList[i]._id).length == 0) {
            const img_path = (pointList[i].adminScore > 40) ? '/static/images/assets/ico_pin2.png' : '/static/images/assets/ico_pin_small2.png'
            const img = (pointList[i].backgroundImages && pointList[i].backgroundImages.length>0) ? pointList[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
            const img_size = new google.maps.Size(38,43);
            const title = pointList[i].name;
            const uniqueName = pointList[i].uniqueName;
            const desc = pointList[i].description;
            const star = (pointList[i].adminScore/20).toFixed(1);
            const price_index = '';
            const position = {lat: pointList[i].latitude, lng: pointList[i].longitude};
            const _id = pointList[i]._id;

            const marker_shop = new google.maps.Marker({
                map: map,
                position: position,
                icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
                img_path: img_path,
                star: star,
                title: title,
                _id: _id,
                type: 'point',
            });
            marker_shop.addListener("click", () => {
                $(".map-box").removeClass("hide");
                $("#btn_new").addClass("hide");
                $("#btn_filter").addClass("hide");
                for (var j=0; j<markerList.length; j++) {
                    var _icon = markerList[j].getIcon();
                    if (_icon.size.width != 38) {
                        markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                    }
                }

                $("#map_box_shop_name").text(title);
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text(star);
                $("#map_box_href").attr("href", "/point/" + uniqueName);
                
                $(".box-bottom").removeClass('site').removeClass('point').removeClass('center');
                $(".box-bottom").addClass('point');

                if ($("#map_box_agency").hasClass("hide") == false) $("#map_box_agency").addClass("hide");
                if ($("#map_box_price").hasClass("hide") == false) $("#map_box_price").addClass("hide");
                
                $("#map_box_shop_feature").text('');
                $("#map_box_shop_img").attr("src", img);
                
                
                marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
                map.panTo(marker_shop.getPosition());
                /*if (map.getZoom() == 18) {
                    map.panTo(marker_shop.getPosition());
                } else {
                    map.setZoom(18);
                    map.setCenter(marker_shop.getPosition());
                }*/
            });
            
            markerList.push(marker_shop);
        }
    }
}
async function updateCenter() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    
    
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
                query GetDiveCentersNearBy($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
                    getDiveCentersNearBy(lat1: $lat1, lon1: $lon1, lat2: $lat2, lon2: $lon2) {
                        _id
                        name
                        uniqueName
                        description
                        adminScore
                        latitude
                        longitude
                        viewScore
                        educationScore
                        facilityScore
                        serviceScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        interests {
                            title
                            type
                        }
                    }
                }
            `,
            variables: {
                "lat1": sw.lat(),
                "lon1": sw.lng(),
                "lat2": ne.lat(),
                "lon2": ne.lng()
            }
        }
    });
    centerList = [];
    result.data.data.getDiveCentersNearBy.forEach(item => centerList.push(item));
    // 필요 없는 그린 마커를 모두 삭제한다.
    for (var i = 0; i < markerList.length; i++ ) {
        if (centerList && centerList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
    }
    
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<centerList.length; i++) {
        if (markerList && markerList.filter(x=>x._id == centerList[i]._id).length == 0) {
            const img_path = (centerList[i].adminScore > 40) ? '/static/images/assets/ico_pin1.png' : '/static/images/assets/ico_pin_small1.png'
            const img = (centerList[i].backgroundImages && centerList[i].backgroundImages.length>0) ? centerList[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
            const img_size = new google.maps.Size(38,43);
            const title = centerList[i].name;
            const uniqueName = centerList[i].uniqueName;
            const desc = centerList[i].description;
            const star = (centerList[i].adminScore/20).toFixed(1);
            const position = {lat: centerList[i].latitude, lng: centerList[i].longitude};
            const _id = centerList[i]._id;
            const institutionTypes = centerList[i].institutionTypes;
            var priceIdxs = (centerList[i].interests) ? centerList[i].interests.filter(x=>x.type=='priceIndex') : null;
            const price_index = (priceIdxs && priceIdxs.length>0) ? priceIdxs[0].title.replace(/\$/gi, '₩') : '';

            const marker_shop = new google.maps.Marker({
                map: map,
                position: position,
                icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
                img_path: img_path,
                star: star,
                title: title,
                _id: _id,
                type: 'center',
                institutionTypes: institutionTypes,
            });
            marker_shop.addListener("click", () => {
                $(".map-box").removeClass("hide");
                $("#btn_new").addClass("hide");
                $("#btn_filter").addClass("hide");
                for (var j=0; j<markerList.length; j++) {
                    var _icon = markerList[j].getIcon();
                    if (_icon.size.width != 38) {
                        markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                    }
                }

                $("#map_box_shop_name").text(title);
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text(star);
                $("#map_box_href").attr("href", "/center/" + uniqueName);
                
                $(".box-bottom").removeClass('site').removeClass('point').removeClass('center');
                $(".box-bottom").addClass('center')
                
                $("#map_box_shop_feature").text('');
                $("#map_box_shop_img").attr("src", img);

                if ($("#map_box_agency").hasClass("hide") == false) $("#map_box_agency").addClass("hide");
                if (institutionTypes && institutionTypes.length > 0) {
                    $("#map_box_agency").removeClass("hide");
                    $("#map_box_agency_img").attr("src", '/static/images/agency/logo_'+institutionTypes[0].toLowerCase()+'.svg');
                }
                if ($("#map_box_price").hasClass("hide") == false) $("#map_box_price").addClass("hide");
                if (price_index != '') {
                    $("#map_box_price").removeClass("hide");
                    $("#map_box_price_index").text(price_index);
                }
                
                
                marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big1.png', null, null, null, new google.maps.Size(58,66)));
                map.panTo(marker_shop.getPosition());
                /*if (map.getZoom() == 18) {
                    map.panTo(marker_shop.getPosition());
                } else {
                    map.setZoom(18);
                    map.setCenter(marker_shop.getPosition());
                }*/
            });
            
            markerList.push(marker_shop);
        }
    }
}
export default {
  name: 'HelloWorld',
  mounted() {
    // get Geo location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.my_latitude = position.coords.latitude;
            this.my_longitude = position.coords.longitude;
        });
    }
    localStorage.perferedSite = '/site_home';




    document.getElementById("page-back").classList.remove("hide");
    //document.getElementById("footer-bar").classList.add("hide");
    document.getElementById("footer-bar").style.borderRadius = "30px 30px 0 0";

    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
    document.body.appendChild(script);
    //let script2 = document.createElement('script');
    //script2.src = 'https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js';
    //document.body.appendChild(script2);
    script.onload = () => {
        const night_style = [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ];

        const light_style = [
            
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "road",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
            },
            
        ];

        const map_style = (localStorage['wedive-Theme'] == 'light-mode') ? light_style : night_style;

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.24134444312815, lng: 126.56484940647604},
            zoom: 11,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
            styles: map_style
        });

        
        map.addListener("click", (e) => {
            for (var j=0; j<markerList.length; j++) {
                var _icon = markerList[j].getIcon();
                if (_icon.size.width != 38) {
                    markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                }
            }

            $(".map-box").addClass("hide");
            $("#btn_new").removeClass("hide");
            $("#btn_filter").removeClass("hide");
            if ($('.map-search').hasClass("hide") == false ) $('.map-search').addClass("hide");
        });

        
        map.addListener('zoom_changed', async function() {
            if ($(".map-box").hasClass("hide") == false) $(".map-box").addClass("hide");
            var zoomLevel = map.getZoom();
            //updateSite();
            //updatePoint();
            //updateCenter();
            updateAll();
            /*if (zoomLevel < 10) { // site
                updateSite();
                if (zoomLevel > 7) updatePoint();
            } else if (zoomLevel < 14) { // point
                updatePoint();
                if (zoomLevel < 12) updateSite();
                else updatePoint();
            } else {
                updateCenter();
                if (zoomLevel < 17) updatePoint();
            }*/
        });

        map.addListener('dragend', async function() {
            //updateSite();
            //updatePoint();
            //updateCenter();
            updateAll();
            /*var zoomLevel = map.getZoom();
            if (zoomLevel < 10) { // site
                updateSite();
            } else if (zoomLevel < 14) { // point
                updatePoint();
            } else {
                updateCenter();
            }*/
        });

        map.setCenter({lat: this.my_latitude, lng: this.my_longitude});
        setTimeout(function() {
            //updateSite();
            //updatePoint();
            //updateCenter();
            updateAll();
        },500)
        
    };
    //$(".page-title-wrapper").css("background-color", "#eef2f1");
    //$(".page-title-wrapper").css("height", "58px");
    //$(".page-title-wrapper").css("width", "100%");
    //$(".page-title-wrapper").css("z-index", "980");
    //$(".page-title-wrapper").css("position", "absolute");
    //$(".page-title-fixed").css("position", "absolute");
    //$(".page-title-fixed").css("z-index", "990");
    $(".page-title-clear").addClass("hide");
    var body = document.body, html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    document.getElementById('map').style.height = height + 'px';

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
    this.btn_new_html = $("#btn_new").html();
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 50);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        btn_new_html: '',
        users: [],
        my_latitude: 37.56425754670452,
        my_longitude: 126.9741944890715,
        nickName: localStorage.nickName,
        userThumbnail: localStorage.userThumbnail,
        gender: localStorage.gender,
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
  }, 
  watch: {
      my_latitude: function(newVal, oldVal) {
        if (map && this.my_latitude) {
            map.setCenter({lat: this.my_latitude, lng: this.my_longitude});
        }
      },
      check_cate1: function(newVal, oldVal) {
        check_cate1 = newVal;
      },
      check_cate2: function(newVal, oldVal) {
        check_cate2 = newVal;
      },
      check_cate3: function(newVal, oldVal) {
        check_cate3 = newVal;
      },
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

        siteList = [];
        pointList = [];
        centerList = [];
        for (var i = (markerList.length-1); i >=0 ; i-- ) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
        
        updateAll();
      },
      enableNext2(ev) {
          selecteduser = ev;
          if (map.getZoom() < 10)
            map.setZoom(10);
          setTimeout(function(lat, lng) {
              map.panTo({lat: lat, lng: lng});
              updateAll();
          },50, ev.latitude, ev.longitude)
          
      },
      mapFilter(type) {
        if ($("#map-item-" + type).css("display") == 'none') $("#map-item-" + type).fadeIn(200);
        else $("#map-item-" + type).fadeOut(200);
      },
      searchBox() {
        if ($('.map-search').hasClass("hide") ) $('.map-search').removeClass("hide");
        else $('.map-search').addClass("hide");

        $(".bx-search input").css("border-width", "0");
        setTimeout(function() {
            $(".bx-search input").focus();
        },200)
      },
      async lookupUser3() {
        this.users = [];
        const query = this.query;
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
                            ... on DiveCenter {
                                _id
                                uniqueName
                                name
                                description
                                divingType
                                adminScore
                                latitude
                                longitude
                                backgroundImages {
                                    thumbnailUrl
                                }
                            }
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
                    "searchParams": {
                        "query": query
                    }
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
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-box {position: absolute;right: 0;bottom: 75px;left: 0;margin: 5px 10px 4px;border-radius:16px;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;background:white;}
.map-box-gradient {
  background: radial-gradient(1.5em 6.28571em at 1.95em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(1.5em 6.28571em at -0.45em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 1.5em 5.5em, radial-gradient(2.3em 4.57143em at 2.99em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(2.3em 4.57143em at -0.69em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 2.3em 4em, radial-gradient(3.5em 6.28571em at 4.55em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(3.5em 6.28571em at -1.05em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 3.5em 5.5em, radial-gradient(#fff, #e2e7ec);
  background-color: #fff;
  background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em, 3.5em 11em, 100% 100%;
  background-repeat: repeat;
}

.display-block {display:inline-block;}
.map-search {position: absolute;right: 0;top: 57px;left: 0;margin: 5px 12px 4px;border-radius:16px;background-color: white;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.bx {padding: 15px 14px;min-height: 125px;}
.bx-search {padding: 8px 14px;min-height: 48px;}
.bx-filter {border: 1px solid rgba(0,0,0,.1);padding: 8px 4px;display:inline-block;}

.wedive-corner {position: absolute;width: 30px;height: 30px;overflow: hidden;z-index:999;}
.wedive-corner:after {content: '';position: absolute;height: 200%;width: 200%;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #eef2f1;}
.wedive-corner-bottom {left:-16px;bottom:0;width:16px;height:16px;}
.site .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #31373b !important;}
.point .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #308f7f !important;}
.center .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #376a97 !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background: url(/static/images/assets/concierge.gif);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.icon-filter {position: fixed;width: 58px;height: 58px;bottom: 140px;right:24px;background: url(/static/images/assets/filter2.png);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;background-position: bottom;}
.box-bottom {width:calc(100% - 120px);height:36px;position: absolute;right: 0;bottom: 0;display:flex;}
.box-bottom-corner {display:inline-block;width:36px;height:36px;z-index:999;}
.box-bottom-corner:before {content: '';position: absolute;height: 80px;width: 80px;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #1d397c;}
.box-bottom-area {width:100%;border-radius: 24px 0 16px 0;justify-content: space-around;margin:0 !important;padding: 0 4px;}
.box-bottom-item {padding: 6px 0;}
.box-bottom-item:not(:last-child) {border-right: 1px solid rgba(255,255,255,.3);box-shadow: inset -2px 0px 0px 0px rgb(0 0 0 / 20%);}
.header-bottom-round {osition: absolute;top: 50px;left: 0px;right: 0px;height:30px;}
.bx-search input {border-width: 0 !important;}
.bx-search > div > div {display: contents;}
.main-header {background:#eef2f1;}
.site .box-bottom-area {background-color: #3f474c;}
.point .box-bottom-area {background-color: #3cb5a0;}
.center .box-bottom-area {background-color: #4687c1;}
</style>
