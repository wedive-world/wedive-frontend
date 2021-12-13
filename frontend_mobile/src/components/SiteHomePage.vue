<template>
  <div class="" style="height: 100%; !important">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>
    <div class="main-header header header-fixed header-logo-center">
        <a class="" href="/" style="margin-left: 16px;"><img class="logo-image" src="/static/images/assets/logo-dark.svg" height="46" /></a>
        
        <a href="/site_list" class="header-icon header-icon-3 font-18" style="color: #858585;margin-right: 13.3333333333px;"><i class="fas fa-list"></i></a>
        <a v-on:click="searchBox()" href="#" class="header-icon header-icon-4 font-18" style="color: #858585;margin-right: 13.3333333333px;"><i class="fas fa-search"></i></a>
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
                    @input="lookupUser2"
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


        <div class="map-filter">
            <div v-on:click="mapFilter('category')" class="bx-filter bg-white me-2">종류</div>
            <div id="map-item-category" class="display-block" style="display: none;">
                <div class="bx-filter bg-gray-light color-black">스쿠버</div>
                <div class="bx-filter bg-gray-light color-black">프리</div>
                <div class="bx-filter bg-gray-light color-black">리브어보드</div>
            </div>
        </div>
        <div class="map-filter" style="top: 170px;">
            <div v-on:click="mapFilter('level')" class="bx-filter bg-white me-2">레벨</div>
            <div id="map-item-level" class="display-block" style="display: none;">
                <div class="bx-filter bg-gray-light color-black">초급</div>
                <div class="bx-filter bg-gray-light color-black">중급</div>
                <div class="bx-filter bg-gray-light color-black">고급</div>
            </div>
        </div>
        <div class="map-filter" style="top: 220px;">
            <div v-on:click="mapFilter('fish')" class="bx-filter bg-white me-2">어종</div>
            <div id="map-item-fish" class="display-block" style="display: none;">
                <div class="bx-filter bg-gray-light color-black">거북</div>
                <div class="bx-filter bg-gray-light color-black">만타</div>
                <div class="bx-filter bg-gray-light color-black">상어</div>
                <div class="bx-filter bg-gray-light color-black">고래</div>
                <div class="bx-filter bg-gray-light color-black">잭피쉬</div>
            </div>
        </div>
        <div class="map-filter" style="top: 270px;">
            <div v-on:click="mapFilter('type')" class="bx-filter bg-white me-2">타입</div>
            <div id="map-item-type" class="display-block" style="display: none;">
                <div class="bx-filter bg-gray-light color-black">난파선</div>
                <div class="bx-filter bg-gray-light color-black">동굴</div>
                <div class="bx-filter bg-gray-light color-black">해루질</div>
                <div class="bx-filter bg-gray-light color-black">케이지</div>
                <div class="bx-filter bg-gray-light color-black">월</div>
                <div class="bx-filter bg-gray-light color-black">렉</div>
            </div>
        </div>
        <div class="map-filter" style="top: 320px;">
            <div v-on:click="mapFilter('exotic')" class="bx-filter bg-white me-2">이색</div>
            <div id="map-item-exotic" class="display-block" style="display: none;">
                <div class="bx-filter bg-gray-light color-black">세계10대</div>
                <div class="bx-filter bg-gray-light color-black">대물</div>
                <div class="bx-filter bg-gray-light color-black">수영장</div>
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
            <h2 class="pt-3 pb-3 text-center">필터를 선택하세요</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content m-0 text-start">
            <div class="card card-style ms-0 me-0 rounded-0 mb-0">
                <div class="content">
                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 종류</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_type1" checked>
                        <label class="form-check-label shadow-xl rounded-xl" for="check_type1">스쿠버 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-air-freshener font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_type2" checked>
                        <label class="form-check-label shadow-xl rounded-xl" for="check_type2">프리 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-swimmer font-17 color-secondary"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">센터 평점</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-17 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_star1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_star1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-star font-16 color-yellow-dark"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">수중 환경</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-orange-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_fish1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_fish1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-16 color-orange-light"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">시야</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight5">5</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight4">4</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight3">3</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight2">2</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-17 color-gray-light-mid2"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_sight1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_sight1">1</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-eye font-16 color-gray-light-mid2"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 환경</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env1">케이브 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-window-restore font-17 color-red-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env2">난파선 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-ship font-17 color-brown-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env3">마크로 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-gray-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env4">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env4">대물 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-blue-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env5">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env5">월다이빙 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fa fa-bars color-brown-dark font-17"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env6">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env6">딥다이빙 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-ruler-vertical font-17 color-blue-light"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env7">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env7">먹다이빙 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-wind font-17 color-instagram"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_env8">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_env8">드리프트 포인트</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-water font-14 color-dark-dark"></i>
                    </div>

                    <div>
                        <label for="filter_type" class="color-highlight font-700">다이빙 타이밍</label>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_time1">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_time1">야간 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-moon font-16 color-yellow-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_time2">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_time2">조류 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-water font-17 color-green-dark"></i>
                    </div>
                    <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_time3">
                        <label class="form-check-label shadow-xl rounded-xl" for="check_time3">아이스 다이빙</label>
                        <i class="fa fa-check-circle color-white font-18"></i>
                        <i class="fas fa-temperature-low font-17 color-blue-dark"></i>
                    </div>
                </div>
                
                
                <div class="content hide" id="tab-center-filter">
                    <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                        <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-general">기본</a>
                        <!--<a href="#" data-bs-toggle="collapse" data-bs-target="#tab-level">레벨</a>-->
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-env">환경</a>
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">시간</a>
                    </div>
                    <div class="clearfix mb-3"></div>
                    <div data-bs-parent="#tab-center-filter" class="collapse ps-2 pe-2 show" id="tab-general">
                        <div class="list-group list-custom-small list-icon-0 check-visited">
                            <div class="form-check icon-check">
                                <label for="filter_type" class="color-highlight">다이빙 종류</label>
                                <div class="form-check icon-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_scuba">
                                    <label class="form-check-label" for="check_scuba">스쿠버 다이빙</label>
                                    <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                                    <i class="icon-check-2 far fa-check-circle font-16 color-highlight"></i>
                                </div>
                                <div class="form-check icon-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_free">
                                    <label class="form-check-label" for="check_free">프리 다이빙</label>
                                    <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                                    <i class="icon-check-2 far fa-check-circle font-16 color-highlight"></i>
                                </div>
                            </div>
                            <div class="input-style has-borders no-icon mb-4">
                                <label for="filter_star" class="color-highlight">평점</label>
                                <select id="filter_star">
                                    <option value="0" selected>전체</option>
                                    <option value="5">아주 좋음</option>
                                    <option value="4">좋음</option>
                                    <option value="3">보통</option>
                                    <option value="2">나쁨</option>
                                    <option value="1">아주 나쁨</option>
                                </select>
                            </div>
                            <div class="input-style has-borders no-icon mb-4">
                                <label for="filter_fish" class="color-highlight">물고기</label>
                                <select id="filter_fish">
                                    <option value="0" selected>전체</option>
                                    <option value="5">아주 많음</option>
                                    <option value="4">많음</option>
                                    <option value="3">보통</option>
                                    <option value="2">적음</option>
                                    <option value="1">아주 적음</option>
                                </select>
                            </div>
                            <div class="input-style has-borders no-icon mb-4">
                                <label for="filter_sight" class="color-highlight">시야</label>
                                <select id="filter_sight">
                                    <option value="0" selected>전체</option>
                                    <option value="5">아주 좋음</option>
                                    <option value="4">좋음</option>
                                    <option value="3">보통</option>
                                    <option value="2">나쁨</option>
                                    <option value="1">아주 나쁨</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--<div data-bs-parent="#tab-center-filter" class="collapse ps-2 pe-2" id="tab-level">
                        <div class="list-group list-custom-small list-icon-0 wedive-filter-list">
                            <a href="" v-on:click="selectFilter($event, '교육자')"><i class="fas fa-user-tie font-14 rounded-sm bg-green-light"></i><span>교육자</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '초급자')"><i class="fas fa-user font-14 rounded-sm bg-blue-light"></i><span>초급자</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '중급자')"><i class="fas fa-user-shield font-14 rounded-sm bg-red-light"></i><span>중급자</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '고급자')"><i class="fas fa-user-clock font-14 rounded-sm bg-magenta-dark"></i><span>고급자</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '전문가')"><i class="fas fa-user-check font-14 rounded-sm bg-brown-dark"></i><span>전문가</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '특수기술')"><i class="fas fa-user-graduate rounded-sm bg-green-dark"></i><span>특수기술</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                        </div>
                    </div>-->
                    <div data-bs-parent="#tab-center-filter" class="collapse ps-2 pe-2" id="tab-env">
                        <div class="list-group list-custom-small list-icon-0">
                            <a href="" v-on:click="selectFilter($event, '케이브 포인트')"><i class="fas fa-window-restore rounded-sm bg-brown-dark"></i><span>케이브 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '난파선 포인트')"><i class="fas fa-ship rounded-sm bg-red-dark"></i><span>난파선 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '마크로 포인트')"><i class="fas fa-fish rounded-sm bg-yellow-dark"></i><span>마크로 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '대물 포인트')"><i class="fas fa-fish rounded-sm bg-blue-dark"></i><span>대물 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '월다이빙 포인트')"><i class="fa fa-bars rounded-sm bg-teal-dark"></i><span>월다이빙 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '딥다이빙 포인트')"><i class="fas fa-ruler-vertical rounded-sm bg-brown-dark"></i><span>딥다이빙 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '먹다이빙 포인트')"><i class="fas fa-wind rounded-sm bg-orange-dark"></i><span>먹다이빙 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '드리프트 포인트')"><i class="fas fa-water font-14 rounded-sm bg-green-light"></i><span>드리프트 포인트</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                        </div>
                    </div>
                    <div data-bs-parent="#tab-center-filter" class="collapse ps-2 pe-2" id="tab-time">
                        <div class="list-group list-custom-small list-icon-0">
                            <a href="" v-on:click="selectFilter($event, '야간 다이빙')"><i class="fas fa-moon font-14 rounded-sm bg-blue-light"></i><span>야간 다이빙</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '조류 다이빙')"><i class="fas fa-water font-14 rounded-sm bg-red-light"></i><span>조류 다이빙</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                            <a href="" v-on:click="selectFilter($event, '아이스 다이빙')"><i class="fas fa-temperature-low font-14 rounded-sm bg-magenta-dark"></i><span>아이스 다이빙</span><i class="far fa-check-circle color-highlight font-16"></i></a>
                        </div>
                    </div>
                </div>    
            </div>
            <div style="position: absolute;width: 100%;bottom:16px;">
                <div id="filter_list" class="ms-3 me-3 mb-3"></div>
                <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3">적용</a>
            </div>
        </div>
    </div>
    <a href="/buddy_create" id="btn_new" class="btn btn-m mb-3 rounded-xl font-900 shadow-s bg-dark-dark icon-concierge"></a>
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


async function updateAll() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    
    
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        data: {
            query: `
                query GetDiveAllNearby($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
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
                        institutionTypes
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
    siteList = [];
    if (result.data.data.getDiveSitesNearby)
        result.data.data.getDiveSitesNearby.forEach(item => siteList.push(item));
    pointList = [];
    if (result.data.data.getDivePointsNearBy)
        result.data.data.getDivePointsNearBy.forEach(item => pointList.push(item));
    centerList = [];
    if (result.data.data.getDiveCentersNearBy)
        result.data.data.getDiveCentersNearBy.forEach(item => centerList.push(item));
    // 필요 없는 그린 마커를 모두 삭제한다.
    var zoomLevel = map.getZoom();
    for (var i = 0; i < markerList.length; i++ ) {
        if ((siteList.filter(x=>x._id == markerList[i]._id).length == 0 && pointList.filter(x=>x._id == markerList[i]._id).length == 0 && centerList.filter(x=>x._id == markerList[i]._id).length == 0) || (zoomLevel>12 && markerList[i].type == 'site')) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
        else if (zoomLevel < 9) {
            markerList[i].setLabel(" ");
        } else {
            var label_color = (markerList[i].type=='site') ? '#5f6368' : ((markerList[i].type=='point') ? '#498c99' : '#2a526f')
            var label_text = markerList[i].title + ((markerList[i].type=='site')?' 사이트' : ((markerList[i].type=='point') ? ' 포인트': ''));
            markerList[i].setLabel({ color: label_color, fontWeight: 'bold', fontSize: '14px', className: 'wedive-label', text: label_text });
        }
    }
    
    // 새롭게 마커를 그려준다.
    var allList_item = ["site", "point", "center"];
    for (var k=0; k<3; k++) {
        var allList = null;
        if (k == 0) {if (zoomLevel > 12)allList = []; else allList = siteList;}
        else if (k == 1) allList = pointList;
        else if (k == 2) allList = centerList;
        for (var i=0; i<allList.length; i++) {
            if (markerList.filter(x=>x._id == allList[i]._id).length == 0) {
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
                var priceIdxs = (k==2) ? (allList[i].interests.filter(x=>x.type=='priceIndex')) : null;
                const price_index = (priceIdxs && priceIdxs.length>0) ? priceIdxs[0].title.replace(/\$/gi, '￦') : '';
                const m_type = allList_item[k];
                const _k = k;

                const label_text = (zoomLevel < 9) ? ' ' : (title + ((k==0)?' 사이트':((k==1)?' 포인트':'')));
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
                marker_shop.addListener("click", () => {
                    $(".map-box").removeClass("hide");
                    $("#btn_new").addClass("hide");
                    for (var j=0; j<markerList.length; j++) {
                        var _icon = markerList[j].getIcon();
                        if (_icon.size.width != 38) {
                            markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                        }
                    }

                    $("#map_box_shop_name").text(title + (k==0?' 사이트':(k==1?' 포인트':'')));
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
}

async function updateSite() {
    var bounds = map.getBounds();
    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    
    
    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
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
        if (siteList.filter(x=>x._id == markerList[i]._id).length == 0 && pointList.filter(x=>x._id == markerList[i]._id).length == 0 && centerList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        } else if (map.getZoom() < 9) {
            markerList[i].setLabel("");
        }
    }
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<siteList.length; i++) {
        if (markerList.filter(x=>x._id == siteList[i]._id).length == 0) {
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
            const label_text = (map.getZoom() < 9) ? '' : (title + ((k==0)?' 사이트':((k==1)?' 포인트':'')));
            

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
        if (pointList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
    }
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<pointList.length; i++) {
        if (markerList.filter(x=>x._id == pointList[i]._id).length == 0) {
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
                for (var j=0; j<markerList.length; j++) {
                    var _icon = markerList[j].getIcon();
                    if (_icon.size.width != 38) {
                        markerList[j].setIcon(new google.maps.MarkerImage(markerList[j].img_path, null, null, null, new google.maps.Size(38,43)));
                    }
                }

                $("#map_box_shop_name").text(title + " 포인트");
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
                        institutionTypes
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
        if (centerList.filter(x=>x._id == markerList[i]._id).length == 0) {
            markerList[i].setMap(null);
            markerList.splice(i, 1);
        }
    }
    
    
    // 새롭게 마커를 그려준다.
    for (var i=0; i<centerList.length; i++) {
        if (markerList.filter(x=>x._id == centerList[i]._id).length == 0) {
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
            var priceIdxs = centerList[i].interests.filter(x=>x.type=='priceIndex');
            const price_index = (priceIdxs && priceIdxs.length>0) ? priceIdxs[0].title.replace(/\$/gi, '￦') : '';

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




    document.getElementById("page-back").classList.remove("hide");
    //document.getElementById("footer-bar").classList.add("hide");
    document.getElementById("footer-bar").style.borderRadius = "30px 30px 0 0";

    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
    document.body.appendChild(script);
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
            $(".map-box").addClass("hide");
            $("#btn_new").removeClass("hide");
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
        },100)
        
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
    }
  }, 
  watch: {
      my_latitude: function(newVal, oldVal) {
        if (map && this.my_latitude) {
            map.setCenter({lat: this.my_latitude, lng: this.my_longitude});
        }
      }
  },
  methods: {
      enableNext2(ev) {
          selecteduser = ev;
          map.panTo({lat: ev.latitude, lng: ev.longitude});
          map.setZoom(10);
          updateAll();
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
      async lookupUser2() {
        this.users = [];
        const query = this.query;
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            data: {
                query: `
                    query Query($query: String!) {
                        searchDiveCentersByName(query: $query) {
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
                        searchDivePointsByName(query: $query) {
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
                        searchDiveSitesByName(query: $query) {
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
                    }
                `,
                variables: {
                    "query": query
                }
            }
        }, {
        headers: {
            countryCode: 'ko',
            android: (localStorage.android) ? localStorage.android : "",
        }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-box {position: absolute;right: 0;bottom: 75px;left: 0;margin: 5px 10px 4px;border-radius:16px;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;
background: radial-gradient(1.5em 6.28571em at 1.95em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(1.5em 6.28571em at -0.45em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 1.5em 5.5em, radial-gradient(2.3em 4.57143em at 2.99em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(2.3em 4.57143em at -0.69em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 55%, rgba(255, 255, 255, 0) 55%) 2.3em 4em, radial-gradient(3.5em 6.28571em at 4.55em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 0 0, radial-gradient(3.5em 6.28571em at -1.05em, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.25) 55%, rgba(255, 255, 255, 0) 55%) 3.5em 5.5em, radial-gradient(#fff, #e2e7ec);
  background-color: #fff;
  background-size: 1.5em 11em, 1.5em 11em, 2.3em 8em, 2.3em 8em, 3.5em 11em, 3.5em 11em, 100% 100%;
  background-repeat: repeat;}
.map-filter {position: absolute;top: 120px;left: 10px;margin: 5px 5px 4px;}
.display-block {display:inline-block;}
.map-search {position: absolute;right: 0;top: 57px;left: 0;margin: 5px 12px 4px;border-radius:16px;background-color: white;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.bx {padding: 15px 14px;min-height: 125px;}
.bx-search {padding: 8px 14px;min-height: 48px;}
.bx-filter {border: 1px solid rgba(0,0,0,.1);padding: 8px 4px;display:inline-block;}

.wedive-corner {position: absolute;width: 30px;height: 30px;overflow: hidden;z-index:999;}
.wedive-corner:after {content: '';position: absolute;height: 200%;width: 200%;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #eef2f1;}
.wedive-corner-bottom {left:-16px;bottom:0;width:16px;height:16px;}
.site .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #4b4e52 !important;}
.point .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #396e78 !important;}
.center .wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #214057 !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background: url(/static/images/assets/concierge.png);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
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
.site .box-bottom-area {background-color: #5f6368;}
.point .box-bottom-area {background-color: #498c99;}
.center .box-bottom-area {background-color: #2a526f;}
</style>
