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
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;show_scuba_label();"
                    :minMatchingChars="2"
                    placeholder="짱스님, 어디로 다이빙 할까요?"
                    inputClass="special-input-class"
                    :disabledValues="(selecteduser ? [selecteduser.name_ko] : [])"
                    @input="lookupUser2"
                    >
                    <template slot="suggestion" slot-scope="{ data, htmlText }">
                        <div class="d-flex align-items-center">
                        <img
                            class="rounded-s me-2"
                            :src="data.img_url"
                            style="width: 40px; height: 40px;" />
                        
                        <span v-if="data.type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + htmlText"></span>
                        <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + htmlText"></span>
                        <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + htmlText"></span>
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
            <a href="/center/k26">
                <div class="bx">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                            <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                        </div>
                        
                        <div class="" style="padding-left: 110px;">
                            <h4 id="map_box_shop_name" class="mb-0"></h4>
                            <p id="map_box_shop_desc" class="pb-0 mb-0 line-height-m ellipsis"></p>
                            <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                &nbsp;<span id="map_box_shop_star"></span>
                                &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                <img id="map_box_shop_fed" src="/static/images/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                <span id="map_box_shop_price"></span>
                            </p>
                            <div class="box-bottom">
                                <div class="wedive-corner wedive-corner-bottom"></div>
                                <div class="bg-secondary box-bottom-area color-white row" style="box-shadow: rgb(0 0 0 / 20%) 3px 3px 10px inset;">
                                    <span class="col-4 text-center box-bottom-item">컨시어지</span><span class="col-4 text-center box-bottom-item">버디찾기</span><span class="col-4 text-center box-bottom-item">강사찾기</span>
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

export default {
  name: 'HelloWorld',
  mounted() {
    
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

        const map_style = (localStorage['wedive-Theme'] == 'light-mode') ? [] : night_style;

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 33.24134444312815, lng: 126.56484940647604},
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: false,
            styles: map_style
        });

        var center_list = [
            {title: "버블탱크 스쿠버다이빙", desc: "제주 남부에 위치한 PADI 5star 다이빙센터", star: 3.8, price_index: 2, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test1.jpg', position: {lat: 33.24134444312815, lng: 126.56484940647604}},
            {title: "다이브 투게더리조트", desc: "한줄설명1", star: 4.8, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test2.jpg', position: {lat: 33.241633952501715, lng: 126.56456092676112}},
            {title: "태평양 다이빙스쿨", desc: "블라블라", star: 3.1, price_index: 3, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test3.jpg', position: {lat: 33.24030993345755, lng: 126.56472966827262}},
            {title: "쿨다이브", desc: "뭐라적지", star: 2.8, price_index: 2, feature: "드리프트", img: '/static/images/shop1/diving/test4.jpg', position: {lat: 33.241266401158086, lng: 126.56278906254684}},
            {title: "스플래시 리조트", desc: "이곳에 설명이", star: 4.2, price_index: 4, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test5.jpg', position: {lat: 33.24245948959435, lng: 126.5633415608148}},
            {title: "제주 블루샤크다이빙", desc: "ㅁㄴㅇㄹㄴㄷㅁㅈㄷㄻㄴㄷㄹㄷㅁㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄹ", star: 3.9, price_index: 2, feature: "난파선", img: '/static/images/shop1/diving/test6.jpg', position: {lat: 33.24380026488202, lng: 126.56288927674295}},
            {title: "잠수타기 다이브클럽", desc: "ㅁㄷㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄹㄷㅁㄷㄴㄻㄷㄴㄻㄴㄻㄴㄷㄹㄷㅁㄴㄹ", star: 4.1, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test7.jpg', position: {lat: 33.24194725508795, lng: 126.5616725869943}},
            {title: "홀리데이 다이빙 코리아", desc: "히히", star: 4.2, price_index: 3, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test8.jpg', position: {lat: 33.24088391439924, lng: 126.5628795809329}},
            {title: "천지연40", desc: "헬로", star: 4.3, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test9.jpg', position: {lat: 33.242485636047576, lng: 126.5623109526933}},
            {title: "언더더씨 스쿠버다이빙", desc: "방가워", star: 4.7, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test10.jpg', position: {lat: 33.244246055136834, lng: 126.5671937429616}}
        ];


        for (var i=0; i<center_list.length; i++) {
            const img_path = '/static/images/assets/' + ( (center_list[i].hasOwnProperty("type") && center_list[i].type == 'selected') ? 'ico_pin_big1.png' : 'ico_pin2.png');
            const img_size = (center_list[i].hasOwnProperty("type") && center_list[i].type == 'selected') ? new google.maps.Size(58,66) : new google.maps.Size(38,43)
            const title = center_list[i].title;
            const desc = center_list[i].desc;
            const star = center_list[i].star;
            const price_index = center_list[i].price_index;
            const feature = center_list[i].feature;
            const img = center_list[i].img;

            const marker_shop = new google.maps.Marker({
                map: this.map,
                position: center_list[i].position,
                icon: new google.maps.MarkerImage(img_path, null, null, null, img_size),
            });
            marker_shop.addListener("click", () => {
                $(".map-box").removeClass("hide");
                $("#btn_new").addClass("hide");
                for (var j=0; j<this.marker_list.length; j++) {
                    var _icon = this.marker_list[j].getIcon();
                    if (_icon.size.width != 38) {
                        this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                    }
                }

                $("#map_box_shop_name").text(title);
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text(star);
                //map_box_shop_fed
                
                $("#map_box_shop_price").text("￦".repeat(price_index));
                $("#map_box_shop_feature").text(feature);
                $("#map_box_shop_img").attr("src", img);
                
                
                marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big1.png', null, null, null, new google.maps.Size(58,66)));
                if (this.map.getZoom() == 18) {
                    this.map.panTo(marker_shop.getPosition());
                } else {
                    this.map.setZoom(18);
                    this.map.setCenter(marker_shop.getPosition());
                }
            });
            this.marker_list.push(marker_shop);
        }

        this.map.addListener("click", (e) => {
            $(".map-box").addClass("hide");
            $("#btn_new").removeClass("hide");
            if ($('.map-search').hasClass("hide") == false ) $('.map-search').addClass("hide");
        });


        
        
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
        map: null,
        marker_list: [],
        btn_new_html: '',
        users: [],
    }
  }, methods: {
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
      lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-box {position: absolute;right: 0;bottom: 75px;left: 0;margin: 5px 10px 4px;border-radius:16px;background-color: white;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.map-filter {position: absolute;top: 120px;left: 10px;margin: 5px 5px 4px;}
.display-block {display:inline-block;}
.map-search {position: absolute;right: 0;top: 57px;left: 0;margin: 5px 12px 4px;border-radius:16px;background-color: white;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.bx {padding: 15px 14px;min-height: 125px;}
.bx-search {padding: 8px 14px;min-height: 48px;}
.bx-filter {border: 1px solid rgba(0,0,0,.1);padding: 8px 4px;display:inline-block;}

.wedive-corner {position: absolute;width: 30px;height: 30px;overflow: hidden;z-index:999;}
.wedive-corner:after {content: '';position: absolute;height: 200%;width: 200%;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #eef2f1;}
.wedive-corner-bottom {left:-16px;bottom:0;width:16px;height:16px;}
.wedive-corner-bottom:after {right: 0;bottom: 0;box-shadow: 10px 10px 5px 100px #20a399 !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background: url(https://www.svgrepo.com/show/56194/concierge.svg);background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.box-bottom {width:calc(100% - 120px);height:36px;position: absolute;right: 0;bottom: 0;display:flex;}
.box-bottom-corner {display:inline-block;width:36px;height:36px;z-index:999;}
.box-bottom-corner:before {content: '';position: absolute;height: 80px;width: 80px;border-radius: 100%;z-index: -1;box-shadow: 10px 10px 5px 100px #1d397c;}
.box-bottom-area {width:100%;border-radius: 24px 0 16px 0;justify-content: space-around;margin:0 !important;padding: 0 4px;}
.box-bottom-item {padding: 6px 0;}
.box-bottom-item:not(:last-child) {border-right: 1px solid rgba(255,255,255,.3);}
.header-bottom-round {osition: absolute;top: 50px;left: 0px;right: 0px;height:30px;}
.bx-search input {border-width: 0 !important;}
.bx-search > div > div {display: contents;}
.main-header {background:#eef2f1;}

</style>
