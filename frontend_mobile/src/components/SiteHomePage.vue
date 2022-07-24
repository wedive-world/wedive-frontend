<template>
  <div class="" style="height: 100%; !important">
    <div data-menu-active="nav-site"></div>
    <div class="main-header header header-fixed header-logo-center" style="height: 58px !important;">
        <a class="" href="/" style="margin-left: 16px;"><img class="logo-image" src="https://d34l91104zg4p3.cloudfront.net/assets/logo-gray.svg" height="42" style="margin-top:8px;"/></a>
        
        <a v-if="idToken != null && nickName != null && nickName != 'null'" v-on:click="goNoti()" :class="'header-icon header-icon-4' + (notiData && notiData.length > 0 && notiData[0].read != null && notiData[0].read == false ? ' has-notification' : '')" style="color:#858585 !important;margin-right: 18px;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_notification.png" width="28" style="margin-top: 12px;"></a>
        
        <!--<a v-on:click="searchBox()" href="#" class="header-icon header-icon-4" style="margin-right: 11px;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/icon_search_fill.png" width="28" style="margin-top: 12px;"/></a>-->
        <!--<a href="#" class="header-icon header-icon-4 color-theme circular_image" data-menu="menu-main" :style="'background: url('+((userThumbnail) ? userThumbnail : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+((gender)?gender:'m')+'.png')+');background-size:cover;width:36px;height:36px;margin-top:7px !important;margin-right:7px;'"></a>-->
    </div>
    <div v-if="isPermissionEnabled == false" class="" style="height: 100vh;padding-top:200px;">
        <div class="text-center">
            <img src="/static/images/assets/no-location.png" width="160"/>
            <p class="mb-0 opacity-30 font-noto font-14 mt-2 mb-1 ">위치 권한이 없어 추천이 되지 않아요.</p>
            <a href="#" v-on:click="showAppSettingActivity" class="btn font-400 rounded-s shadow-l bg-secondary color-white bd-w-0 font-13">권한 부여하기</a>
        </div>
    </div>
    <div v-else class="page-content pb-0" style="height: 100% !important;">
        
        <div id="map" style="height: 100% !important;position: inherit !important;"></div>

        <div class="map-search">
            <div class="bx-search">
                
                <input class="form-control top-search" style="padding-top: 8px;" @focus="openSuggestion()" placeholder="다이빙 장소를 검색하세요."></input>
                <!--
                <vue-typeahead-bootstrap
                    id="search_typeahead_font16"
                    class="form-control font-noto"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="1"
                    placeholder="다이빙 장소를 검색하세요"
                    inputClass="special-input-class"
                    :disabledValues="(selecteduser ? [selecteduser.name] : [])"
                    :showAllResults="true"
                    @input="lookupUser3"
                    style="background: transparent;border-width: 0;padding:0;margin-botttom:8px;"
                    >
                    <template slot="suggestion" slot-scope="{ data, htmlText }">
                        <div class="d-flex align-items-center" style="position:relative !important;">
                        <div style="position:relative;">
                            <div class="p-2 rounded-s" style="background: #f1f1f1;border: 1px solid #eaeaea;margin-right:8px;">
                                <img
                                :src="'/static/images/assets/' + (data.__typename == 'DiveShop' ? 'i_shop' : data.__typename == 'DiveCenter' ? 'i_center' : 'i_site') + '.png'"
                                style="width: 30px; height: 30px;" />
                            </div>
                        </div>
                        <p v-if="data.__typename == 'DiveSite'" style="margin-top: -22px;margin-bottom: 0;position: relative;width: calc(100vw - 136px);" v-html="'<p class=\'mb-0 font-noto font-15 ellipsis\' style=\'max-width: calc(100vw - 214px);display: inline-block;\'>' + htmlText + '</p><span class=\'font-14 ms-2\' style=\'margin-bottom: 0;position: absolute;right: 0px;top: 0px;\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'color-gray font-13 ellipsis\' style=\'width: 100%;position: absolute;margin-top: -2px;\'>' + (data.description ? data.description : '')+'</span>'"></p>
                        <p v-else-if="data.__typename == 'DivePoint'" style="margin-top: -22px;margin-bottom: 0;position: relative;width: calc(100vw - 136px);" v-html="'<p class=\'mb-0 font-noto font-15 ellipsis\' style=\'max-width: calc(100vw - 214px);display: inline-block;\'>' + htmlText + '</p><span class=\'font-14 ms-2\' style=\'margin-bottom: 0;position: absolute;right: 0px;top: 0px;\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'color-gray font-13 ellipsis\' style=\'width: 100%;position: absolute;margin-top: -2px;\'>' + (data.description ? data.description : '')+'</span>'"></p>
                        <p v-else-if="data.__typename == 'DiveCenter'" style="margin-top: -22px;margin-bottom: 0;position: relative;width: calc(100vw - 136px);" v-html="'<p class=\'mb-0 font-noto font-15 ellipsis\' style=\'max-width: calc(100vw - 214px);display: inline-block;\'>' + htmlText + '</p><span class=\'font-14 ms-2\' style=\'margin-bottom: 0;position: absolute;right: 0px;top: 0px;\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'color-gray font-13 ellipsis\' style=\'width: 100%;position: absolute;margin-top: -2px;\'>' + (data.description ? data.description : '')+'</span>'"></p>
                        <p v-else-if="data.__typename == 'DiveShop'" style="margin-top: -22px;margin-bottom: 0;position: relative;width: calc(100vw - 136px);" v-html="'<p class=\'mb-0 font-noto font-15 ellipsis\' style=\'max-width: calc(100vw - 214px);display: inline-block;\'>' + htmlText + '</p><span class=\'font-14 ms-2\' style=\'margin-bottom: 0;position: absolute;right: 0px;top: 0px;\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'color-gray font-13 ellipsis\' style=\'width: 100%;position: absolute;margin-top: -2px;\'>' + (data.description ? data.description : '')+'</span>'"></p>
                        
                        </div>
                    </template>
                </vue-typeahead-bootstrap>
                -->
                
                
                
                <!--<vue-typeahead-bootstrap
                    id="search_typeahead"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="1"
                    :showAllResults="true"
                    :maxMatches="30"
                    placeholder="사이트, 포인트, 센터 (수영장)"
                    inputClass="special-input-class"
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
                        <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>수영장</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        <span v-else-if="data.type == 'shop'" class="ml-4" v-html="'<span class=\'badge border color-shop border-shop\'>샵</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        </div>
                    </template>
                </vue-typeahead-bootstrap>-->
            </div>
        </div>


        
        
        <div class="map-box hide">
                <div class="bx">
                    <div class="justify-content-center mb-0 text-start">
                        <a class="map_box_href" href="">
                            <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                            </div>
                            <div class="" style="padding-left: 110px;">
                                <span id="map_box_cate" class="map_box_cate"></span><span id="map_box_shop_name" class="font-18 font-600 mb-0 ellipsis" style="max-width: calc(100% - 60px);display: inline-block;"></span>
                                <p id="map_box_shop_desc" class="pb-0 mb-0 line-height-m ellipsis" style="margin-top: -6px;"></p>
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
                            </div>
                        </a>
                        <div class="box-bottom">
                            <div class="wedive-corner wedive-corner-bottom"></div>
                            <div class="box-bottom-area color-white row" style="box-shadow: inset 0px 0px 5px rgb(0 0 0 / 50%);z-index:999;">
                                <a href="" class="col-4 text-center box-bottom-item">컨시어지</a>
                                <a v-on:click="mapBoxClick('buddy')" class="col-4 text-center box-bottom-item">버디</a>
                                <!--<a href="" class="col-3 text-center box-bottom-item">강사</a>-->
                                <a href="" class="col-4 text-center box-bottom-item">포럼</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    

    <!-- Menu Fliter -->
    <div id="menu-filter" class="menu menu-box-bottom" style="height:100%;border-radius: 0px !important;">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 mb-0 text-center">필터 선택</h2>
            <a href="#" v-on:click="tour_flag=true;" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content m-0 text-start" style="min-height:calc(100vh - 125px);">
            <div class="card card-style ms-0 me-0 rounded-0 mb-0">
                <div class="content mt-1">
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
                        <label class="form-check-label shadow-xl rounded-xl" for="check_cate3">수영장</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fas fa-swimming-pool font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_cate4" v-model="check_cate4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_cate4">샵</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-store font-17 color-highlight"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 종류</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_type1" v-model="check_type1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_type1">스쿠바 다이빙</label>
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
                        <input class="form-check-input" type="checkbox" value="" id="check_star90" v-model="check_star90" v-on:click="check_star70=false;check_star80=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star90">4.5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star80" v-model="check_star80" v-on:click="check_star90=!check_star80;check_star70=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star80">4.0</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star70" v-model="check_star70" v-on:click="check_star90=!check_star70;check_star80=!check_star70;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star70">3.5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    

                    <div>
                        <label for="filter_type" class="color-highlight font-700">수중 환경</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish90" v-model="check_fish90" v-on:click="check_fish80=false;check_fish70=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish90">4.5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish80" v-model="check_fish80" v-on:click="check_fish90=!check_fish80;check_fish70=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish80">4.0</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish70" v-model="check_fish70" v-on:click="check_fish90=!check_fish70;check_fish80=!check_fish70;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish70">3.5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">시야</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight90" v-model="check_sight90" v-on:click="check_sight80=false;check_sight70=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight90">4.5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight80" v-model="check_sight80" v-on:click="check_sight90=!check_sight80;check_sight70=false;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight80">4.0</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight70" v-model="check_sight70" v-on:click="check_sight90=!check_sight70;check_sight80=!check_sight70;">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight70">3.5</label>
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
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env2">마크로</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-gray-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env3" v-model="check_env3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env3">대물</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-blue-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env4" v-model="check_env4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env4">이색 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fab fa-buffer font-17 color-gray-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env5" v-model="check_env5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env5">시력=시야</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-blue-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env6" v-model="check_env6">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env6">월드클래스</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-medal font-17 color-teal-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env7" v-model="check_env7">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env7">듀공,물개,거북이</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-red-dark"></i>
                    </div>


                    
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point1" v-model="check_point1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point1">리브어보드</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-anchor font-17 color-magenta-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point2" v-model="check_point2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point2">해저지형탐험</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-mountain font-17 color-green-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point3" v-model="check_point3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point3">프리다이버 집결지</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-map-marker font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_point4" v-model="check_point4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_point4">드리프트 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-water font-17 color-instagram"></i>
                    </div>
                    

                </div>
                
                   
            </div>
            <div style="position: absolute;width: 100%;bottom:16px;">
                <div id="filter_list" class="ms-3 me-3 mb-3"></div>
                <a v-on:click="submit_filter" href="#" class="close-menu btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3">적용</a>
            </div>
        </div>
    </div>

    <div id="search-suggestion" 
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
            <div class="row mb-0">
            <vue-typeahead-bootstrap
                id="suggestion_typeahead"
                class="wedive-search"
                v-model="query_place"
                :data="places"
                :serializer="item => item"
                :screen-reader-text-serializer="item => `${item}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event;enableNext2($event);"
                :minMatchingChars="1"
                placeholder="어디로 떠나볼까요?"
                inputClass="special-input-class"
                @input="lookupPlace"
                style="width: 80%;display:inline-block;"
                >
            </vue-typeahead-bootstrap>
            <a v-on:click="enableNext2(query_place)" class="btn rounded-xs bg-dark-dark col-3 opacity-60" style="width: 18%;padding: 11px 8px !important;border-radius: 8px !important;display:inline-block;margin-bottom:8px;line-height: 1.2;"><i class="fa fa-search font-14"></i></a>
            </div>
            <div class="content m-0" style="min-height: calc(100vh - 208px);padding-top:8px;">
                <div v-for="item in users">
                    <div v-on:click="selectSuggestion(item)" class="d-flex align-items-center" style="position:relative !important;">
                        <div :class="''+item.__typename + '-tag'" style="position:relative;">
                            <img
                            class="rounded-s me-3"
                            :src="(item.backgroundImages && item.backgroundImages.length>0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                            style="width: 40px; height: 40px;" />
                        </div>
                        <span v-if="item.__typename == 'DiveSite'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + item.name + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(item.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + (item.description ? item.description : '')+'</span>'"></span>
                        <span v-else-if="item.__typename == 'DivePoint'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + item.name + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(item.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + (item.description ? item.description : '')+'</span>'"></span>
                        <span v-else-if="item.__typename == 'DiveCenter'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + item.name + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(item.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + (item.description ? item.description : '')+'</span>'"></span>
                        <span v-else-if="item.__typename == 'DiveShop'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + item.name + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(item.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + (item.description ? item.description : '')+'</span>'"></span>
                    </div>
                    
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>
    </div>

    

    <a id="btn_filter" data-menu="menu-filter" v-on:click="tour_flag=false;" class="btn btn-m mb-3 rounded-xl font-900 shadow-s icon-filter" style="background-color: #181818;"></a>
    <a v-on:click="concierge" id="btn_new" class="btn btn-m mb-3 rounded-xl font-900 shadow-s icon-concierge" style="background-color: #181818;"></a>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';

var tour_list = [{"type": "class", "name": "header-icon-3", "position": "bottom", "title": "장소 리스트로 확인"}, {"type": "id", "name": "btn_filter", "position": "left", "title": "필터를 선택해보세요."}, {"type": "id", "name": "btn_new", "position": "left", "title": "컨시어지에게 장소 추천받기"}];
var isPermissionEnabled = null;

const axios = require("axios")

var map = null;
var markerList = [];
var selecteduser = null;

var siteList = new Array();
var pointList = new Array();
var centerList = new Array();
var shopList = new Array();
var searchParams = {};
var check_cate1 = true;
var check_cate2 = false;
var check_cate3 = true;
var check_cate4 = false;

var tour_flag = true;
var markerItem = null;

function hideKeyboard() {
    var element = $("#textarea-input");
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}

async function updateAll() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();

    //console.log("updateAll : ");
    //console.log(searchParams)
    var _searchParams = JSON.parse(JSON.stringify(searchParams));
    _searchParams.lat1 = sw.lat();
    _searchParams.lng1 = sw.lng();
    _searchParams.lat2 = ne.lat();
    _searchParams.lng2 = ne.lng();
    
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
                        ((check_cate4) ? `... on DiveShop {
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
                "limit": 10,
                "searchParams": _searchParams,
            }
        }
    });
    siteList = [];
    pointList = [];
    centerList = [];
    shopList = [];
    if (result.data.data.searchPlaces) {
        result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => siteList.push(item));
        result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => pointList.push(item));
        result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => centerList.push(item));
        result.data.data.searchPlaces.filter(place => place.__typename == 'DiveShop').forEach(item => shopList.push(item));
    }
    
    // 필요 없는 그린 마커를 모두 삭제한다.
    var zoomLevel = map.getZoom();
    for (var i = 0; i < markerList.length; i++ ) {
        if ((siteList && siteList.filter(x=>x._id == markerList[i]._id).length == 0 && pointList && pointList.filter(x=>x._id == markerList[i]._id).length == 0 && centerList && centerList.filter(x=>x._id == markerList[i]._id).length == 0) || (zoomLevel>12 && markerList[i].type == 'site')) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
        /*else if (zoomLevel < 9) {
            markerList[i].setLabel(" ");
            if (selecteduser != null && selecteduser._id == markerList[i]._id) {
                new google.maps.event.trigger( markerList[i], 'click' );
                selecteduser = null;
            }
        }*/ else {
            var label_color = (markerList[i].type=='site') ? '#5f6368' : ((markerList[i].type=='point') ? '#498c99' : ((markerList[i].type=='center') ? '#2a526f' : '#9a4685'))
            var label_text = markerList[i].title + ((markerList[i].type=='site')?'' : ((markerList[i].type=='point') ? '': ''));
            markerList[i].setLabel({ color: label_color, fontWeight: 'bold', fontSize: '14px', className: 'wedive-label', text: label_text });
            if (selecteduser != null && selecteduser._id == markerList[i]._id) {
                new google.maps.event.trigger( markerList[i], 'click' );
                selecteduser = null;
            }
        }
    }
    
    // 새롭게 마커를 그려준다.
    var allList_item = ["site", "point", "center", "shop"];
    var allList_cate = ["사이트", "포인트", "수영장", "샵"];
    for (var k=0; k<4; k++) {
        var allList = [];
        //if (k == 0 && check_cate1) {if (zoomLevel > 12)allList = []; else allList = siteList;}
        if (k == 0 && check_cate1) allList = siteList;
        else if (k == 1 && check_cate2) allList = pointList;
        else if (k == 2 && check_cate3) allList = centerList;
        else if (k == 3 && check_cate4) allList = shopList;
        for (var i=0; i<allList.length; i++) {
            if (markerList && markerList.filter(x=>x._id == allList[i]._id).length == 0) {
                const _markerItem = allList[i];
                const img_path = (allList[i].adminScore > 40) ? 'https://d34l91104zg4p3.cloudfront.net/assets/ico_pin'+k+'.png' : 'https://d34l91104zg4p3.cloudfront.net/assets/ico_pin_small'+k+'.png'
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
                const m_cate = allList_cate[k];
                const _k = k;

                const label_text = (zoomLevel < 9) ? ' ' : (title + ((k==0)?'':((k==1)?'':'')));
                const label_color = (k==0) ? '#5f6368' : ((k==1) ? '#498c99' : ((k==2) ? '#2a526f' : '#9a4685'));
                
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
                    markerItem = _markerItem;
                    try {
                        if (_k == 0) {
                            $(".box-bottom-area").css("background-color","#3f474c");
                            $("#map_box_cate").css("border", "1px solid #3f474c");
                            $("#map_box_cate").css("color", "#3f474c");
                            $(".wedive-corner-bottom").addClass("wedive-corner-bottom-site");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-point");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-center");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-shop");
                        }
                        else if (_k == 1) {
                            $(".box-bottom-area").css("background-color","#3cb5a0");
                            $("#map_box_cate").css("border", "1px solid #3cb5a0");
                            $("#map_box_cate").css("color", "#3cb5a0");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-site");
                            $(".wedive-corner-bottom").addClass("wedive-corner-bottom-point");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-center");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-shop");
                        }
                        else if (_k == 2) {
                            $(".box-bottom-area").css("background-color","#4687c1");
                            $("#map_box_cate").css("border", "1px solid #4687c1");
                            $("#map_box_cate").css("color", "#4687c1");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-site");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-point");
                            $(".wedive-corner-bottom").addClass("wedive-corner-bottom-center");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-shop");
                        }
                        else if (_k == 3) {
                            $(".box-bottom-area").css("background-color","#c761ad");
                            $("#map_box_cate").css("border", "1px solid #c761ad");
                            $("#map_box_cate").css("color", "#c761ad");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-site");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-point");
                            $(".wedive-corner-bottom").removeClass("wedive-corner-bottom-center");
                            $(".wedive-corner-bottom").addClass("wedive-corner-bottom-shop");
                        }
                    } catch (e) {
                        console.log("663");
                        console.log(e);
                    }
                    try {
                        Android.vibrate(50);
                        window.navigator.vibrate(20);
                    } catch (e) {

                    }
                    $(".map-box").removeClass("hide");
                    $("#btn_new").addClass("hide");
                    $("#btn_filter").addClass("hide");
                    for (var j=0; j<markerList.length; j++) {
                        var _icon = markerList[j].getIcon();
                        if (_icon.size.width != 38) {
                            markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                        }
                    }

                    $("#map_box_shop_name").text(title + (k==0?'':(k==1?'':'')));
                    $("#map_box_shop_desc").text(desc);
                    $("#map_box_shop_star").text(star);
                    $(".map_box_href").attr("href", "/" + m_type + "/" + uniqueName);
                    
                    $(".box-bottom").removeClass('site').removeClass('point').removeClass('center');
                    $(".box-bottom").addClass(m_type)

                    $(".map_box_cate").parent().addClass(m_type);
                    $(".map_box_cate").text(m_cate);
                    

                    if ($("#map_box_agency").hasClass("hide") == false) $("#map_box_agency").addClass("hide");
                    if ($("#map_box_price").hasClass("hide") == false) $("#map_box_price").addClass("hide");
                    
                    $("#map_box_shop_feature").text('');
                    $("#map_box_shop_img").attr("src", img);

                    if (institutionTypes && institutionTypes.length > 0) {
                        $("#map_box_agency").removeClass("hide");
                        $("#map_box_agency_img").attr("src", 'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+institutionTypes[0].toLowerCase()+'.svg');
                    }
                    if (price_index && price_index != '') {
                        $("#map_box_price").removeClass("hide");
                        $("#map_box_price_index").text(price_index);
                        
                    }
                    
                    marker_shop.setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin_big'+_k+'.png', null, null, null, new google.maps.Size(58,66)));
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

function myCallback()
{
    if (tour_flag && (isPermissionEnabled == null || isPermissionEnabled == true)) {
        var random_idx = Math.floor(Math.random() * (tour_list.length * 3));
        if (random_idx < tour_list.length && $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).hasClass('hide') == false) {
            $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).tooltip({
                delay: 7000,
                placement: tour_list[random_idx].position,
                title: tour_list[random_idx].title,
                html: true
            });
            $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).tooltip('show');
            setTimeout(function(selector) {
                $(selector).tooltip('hide');
            },7000, (((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name))
        }
    }
}


export default {
  name: 'HelloWorld',
  mounted() {
    var intervalID = setInterval(myCallback, 7000);

    // get Geo location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.my_latitude = position.coords.latitude;
            this.my_longitude = position.coords.longitude;
        });
    }

    try {
        this.isPermissionEnabled = Android.isPermissionEnabled();
        isPermissionEnabled = this.isPermissionEnabled;
        if (this.isPermissionEnabled == false) {
            $("#btn_filter").addClass("hide");
            $("#btn_new").addClass("hide");
        }
    } catch (e) {

    }
    //localStorage.perferedSite = '/site_home';




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
                stylers: [{ color: "#d59563"}, {lightness: 40},{weight: 0.5 } ],
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
                featureType: "poi.attraction",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.business",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.medical",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.government",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.place_of_worship",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.school",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.sports_complex",
                stylers: [{visibility: "off"}]
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
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{lightness: 40}, {weight: 0.5 } ],
            },
            {
                featureType: "poi.attraction",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.business",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.medical",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.government",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.place_of_worship",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.school",
                stylers: [{visibility: "off"}]
            },
            {
                featureType: "poi.sports_complex",
                stylers: [{visibility: "off"}]
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
            //if ($('.map-search').hasClass("hide") == false ) $('.map-search').addClass("hide");
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
    //$(".page-title-wrapper").css("background-color", "#eff5fb");
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

    $(".page-title").hide();
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      //$(".page-title").hide();
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

        $("#search_typeahead_font16 > .input-group > input").addClass("font-noto font-16 font-500 p-0");
        $("#search_typeahead_font16 > .input-group > input").css("margin", "2px 0px 0px 4px");
        $("#search_typeahead_font16 > .input-group > input").css("background", "transparent");
        $("#footer-bar").show();
    }, 50);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        isPermissionEnabled: null,
        query: '',
        query_place: '',
        selecteduser: null,
        btn_new_html: '',
        users: [],
        places: [],
        my_latitude: 37.56425754670452,
        my_longitude: 126.9741944890715,
        nickName: localStorage.nickName,
        idToken: localStorage.idToken,
        userThumbnail: localStorage.userThumbnail,
        gender: localStorage.gender,
        check_star70: false,
        check_star80: false,
        check_star90: false,
        check_fish70: false,
        check_fish80: false,
        check_fish90: false,
        check_sight70: false,
        check_sight80: false,
        check_sight90: false,
        check_cate1: true,
        check_cate2: false,
        check_cate3: true,
        check_cate4: false,
        check_type1: false,
        check_type2: false,
        check_env1: false,
        check_env2: false,
        check_env3: false,
        check_env4: false,
        check_env5: false,
        check_env6: false,
        check_env7: false,
        check_point1: false,
        check_point2: false,
        check_point3: false,
        check_point4: false,
        suggestions : (localStorage.suggestion ? JSON.parse(localStorage.suggestion) : []),
        tour_flag: true,
        notiData: (localStorage.notiData ? JSON.parse(localStorage.notiData) : []),
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
      check_cate4: function(newVal, oldVal) {
        check_cate4 = newVal;
      },
      
      tour_flag: function(newVal, oldVal) {
        tour_flag = newVal;
      },
  },
  methods: {
      openSuggestion() {
            var menuData = "search-suggestion";
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
            }
            setTimeout(function() {
                console.log("aa");
                $("#suggestion_typeahead > .input-group > input").focus();
                $("#suggestion_typeahead > .input-group > input").addClass("font-noto font-16");
            }, 300);
            
      },
      mapBoxClick(item) {
          this.$router.push({name: "BuddyCreateAllPage", target: markerItem})
      },
      showAppSettingActivity() {
          try {
              Android.showAppSettingActivity()
          } catch (e) {
              
          }
      },
      goNoti() {
        if(this.idToken != null && this.nickName != null && this.nickName != 'null')
            location.href = '/other/notification';
      },
      move(loc) {
          location.href = loc + location.search;
      },
      async lookupPlace() {
        //console.log("this.query_place = " + this.query_place);
        if (this.query_place == '') {
            this.places = [];
        } else {
            if (this.suggestions.length > 0) {
                this.places = this.suggestions.filter(x => (x && x.includes(this.query_place)));
            }
            //if (this.suggestions.length == 0 || this.places == 0) {
            else {
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
          console.log("item")
          console.log(item)
          history.back();
          location.href = (item.__typename == 'DiveSite' ? '/site/' : item.__typename == 'DivePoint' ? '/point/' : item.__typename == 'DiveCenter' ? '/center/' : '/shop/') + item.uniqueName;
          /*localStorage.suggestionFlag = '1';
          this.query = item;
          document.getElementById("search-suggestion").classList.remove('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
          tour_flag = true;
          window.history.back(); 
          setTimeout(function() {
            $("#search_typeahead > .input-group > input").focus();
          }, 200)*/
      },
      handleFire() {
          localStorage.suggestionFlag = '1';
          console.log("this.query_place");
          console.log(this.query_place)
          this.query = (JSON.parse(JSON.stringify(this.query_place))+"");
          document.getElementById("search-suggestion").classList.remove('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
          tour_flag = true;
          setTimeout(function() {
            $("#search_typeahead > .input-group > input").focus();
          }, 200)
      },
      submit_filter() {
        tour_flag = true;
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

        siteList = [];
        pointList = [];
        centerList = [];
        for (var i = (markerList.length-1); i >=0 ; i-- ) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
        
        updateAll();
      },
      async enableNext2(ev) {
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
                            ... on DiveShop {
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
                            address
                            latitude
                            longitude
                            countryCode
                        }
                    }
                `,
                variables: {
                    "limit": 10,
                    "searchParams": {
                        "query": ev
                    }
                }
            }
        });
          
          this.users = result.data.data.searchPlaces; 
          /*localStorage.suggestionFlag = '1';
          selecteduser = ev;
          hideKeyboard()
          if (map.getZoom() < 10)
            map.setZoom(10);
          setTimeout(function(lat, lng) {
              map.panTo({lat: lat, lng: lng});
              updateAll();
          },50, ev.latitude, ev.longitude)*/
          
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
                            ... on DiveShop {
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
                            address
                            latitude
                            longitude
                            countryCode
                        }
                    }
                `,
                variables: {
                    "limit": 10,
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
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveShop').forEach(item => {item.type='shop';result_list.push(item)});
        }
        //if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        //if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        //if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;
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
                if (room.type == 'direct' && room.chatUsers.filter(u=>u.uid == concierge_uid).length > 0) {
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

                this.$router.push({name: "ChatDummyPage", params: {is_concierge: true, roomName: "WeDive", chatType: "direct", chatUids: JSON.stringify([concierge_uid])}});
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
.map-box {position: absolute;right: 0;bottom: 75px;left: 0;margin: 5px 10px 4px;border-radius:16px;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;background:white;}
.map-box-gradient {
  background: radial-gradient(1.5em 6.28571em at 1.95em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(1.5em 6.28571em at -0.45em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 1.5em 5.5em, radial-gradient(2.3em 4.57143em at 2.99em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(2.3em 4.57143em at -0.69em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 2.3em 4em, radial-gradient(3.5em 6.28571em at 4.55em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(3.5em 6.28571em at -1.05em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 3.5em 5.5em, radial-gradient(#fff, #e2e7ec);
  background-color: #fff;
  background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em, 3.5em 11em, 100% 100%;
  background-repeat: repeat;
}

.display-block {display:inline-block;}
.map-search {position: absolute;right: 0;top: 63px;left: 0;margin: 5px 12px 4px;border-radius:16px;background-color: white;box-shadow: 0 2px 8px 0 rgb(0 0 0 / 35%) !important;}
.bx {padding: 15px 14px;min-height: 125px;}
.bx-search {padding: 8px 14px;min-height: 48px;}
.bx-filter {border: 1px solid rgba(0,0,0,.1);padding: 8px 4px;display:inline-block;}

.wedive-corner {position: absolute;width: 30px;height: 30px;overflow: hidden;z-index:99;}
.wedive-corner:after {content: '';position: absolute;height: 200%;width: 200%;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #eff5fb;}
.wedive-corner-bottom {left:-16px;bottom:0;width:16px;height:18px;}
.wedive-corner-bottom-site:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #31373b !important;}
.wedive-corner-bottom-point:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #308f7f !important;}
.wedive-corner-bottom-center:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #376a97 !important;}
.wedive-corner-bottom-shop:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #954982 !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background: url(https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.icon-filter {position: fixed;width: 58px;height: 58px;bottom: 140px;right:24px;background: url(https://d34l91104zg4p3.cloudfront.net/assets/filter2.png);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;background-position: bottom;}
.box-bottom {width:calc(100% - 120px);height:36px;position: absolute;right: 0;bottom: 0;display:flex;z-index: 99;}
.box-bottom-corner {display:inline-block;width:36px;height:36px;z-index:999;}
.box-bottom-corner:before {content: '';position: absolute;height: 80px;width: 80px;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #1d397c;}
.box-bottom-area {width:100%;border-radius: 24px 0 16px 0;justify-content: space-around;margin:0 !important;padding: 0 4px;}
.box-bottom-item {padding: 6px 0;}
.box-bottom-item:not(:last-child) {border-right: 1px solid rgba(255,255,255,.3);box-shadow: inset -2px 0px 0px 0px rgb(0 0 0 / 20%);}
.header-bottom-round {osition: absolute;top: 50px;left: 0px;right: 0px;height:30px;}
.bx-search input {border-width: 0 !important;}
.bx-search > div > div {display: contents;}
.main-header {background:#eff5fb;}
.site .box-bottom-area {background-color: #3f474c;}
.point .box-bottom-area {background-color: #3cb5a0;}
.center .box-bottom-area {background-color: #4687c1;}
.shop .box-bottom-area {background-color: #c761ad;}

.map_box_cate {padding: 2px 6px;margin-bottom:0px;margin-right:6px;border-radius:4px;vertical-align: top;}
.has-notification:before {content: '●';color: #ff5160;position:absolute;top:0;font-size:5px;margin-top: -9px;margin-left: 20px;}
.top-search::placeholder {font-size: 16px !important;font-family: 'Noto Sans Korean';opacity:50%;font-weight:500;}
</style>
