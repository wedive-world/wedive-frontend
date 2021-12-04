<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>    
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="wedive-action text-center" style="z-index: 99;">
            <button data-menu="menu-filter" class="action-filter"><span>필터</span></button>
            <a href="/center_map" class="action-map"><span>지도</span></a>
        </div>
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="p-3">
                <div class="search-box search-dark shadow-xl border-0 bg-theme rounded-sm bottom-0">
                    <i class="fa fa-search"></i>
                    <input type="text" class="border-0" placeholder="어디가 가고싶으신가요?" data-search>
                </div>

                <div class="search-results disabled-search-list">
                    <div>
                        <a href="#" data-filter-item data-filter-name="all run sport event marathon fastest">
                            <div class="d-flex mt-4">
                                <div class="align-self-center">
                                    <h2 class="font-15 line-height-s mt-1">Marathon Fastest <br> Runner Event </h2>
                                    <p class="mb-1 font-11 mt-1 line-height-s">
                                        12k+  Attending
                                    </p>
                                </div>
                                <div class="ms-auto ps-3 align-self-center text-center">
                                    <span class="btn btn-xxs gradient-blue text-uppercase font-600 rounded-xs">Details</span>
                                    <span class="color-highlight font-10 d-block">15 min away</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" data-filter-item data-filter-name="all neon night party music festival">
                            <div class="d-flex mt-4">
                                <div class="align-self-center">
                                    <h2 class="font-15 line-height-s mt-1">Neon Nights <br> Music Festival </h2>
                                    <p class="mb-1 font-11 mt-1 line-height-s">
                                        3.5k+ Attending
                                    </p>
                                </div>
                                <div class="ms-auto ps-3 align-self-center text-center">
                                    <span class="btn btn-xxs gradient-blue text-uppercase font-600 rounded-xs">Details</span>
                                    <span class="color-highlight font-10 d-block">2 hrs away</span>
                                </div>
                            </div>
                        </a>
                        <a href="#" data-filter-item data-filter-name="all sing party karaoke night event">
                            <div class="d-flex mt-4">
                                <div class="align-self-center">
                                    <h2 class="font-15 line-height-s mt-1">Sing For Us <br> Karaoke Nights </h2>
                                    <p class="mb-1 font-11 mt-1 line-height-s">
                                    3.5k+ Attending
                                    </p>
                                </div>
                                <div class="ms-auto ps-3 align-self-center text-center">
                                    <span class="btn btn-xxs gradient-blue text-uppercase font-600 rounded-xs">Details</span>
                                    <span class="color-highlight font-10 d-block">3 hrs away</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
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


  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  methods: {
      click_condition: function() {
        console.log("click_condition");
        return true;
      },
      click_sort: function() {
        console.log("click_sort");
        return true;
      },
      selectFilter: function(event, elm) {
        event.target.classList.add("active");
        
        $("#filter_list").append('<button class="filter-item">'+ elm +'<i class="wd-close"></i></button>');
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
        center_list : [
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
        ],

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
</style>
