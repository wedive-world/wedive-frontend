<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-center" data-menu-load=""></div>    
    <div class="page-content">
        <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-1" data-card-height="250">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/bubble1.jpg)">
                            
                        </div>         
                    </div>
                    <div class="splide__slide">
                        <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/bubble2.jpg)">
                            
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/bubble3.jpg)">
                            
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        

    
        
        
        <div class="card card-style" style="margin-top:-60px; z-index:1">
            <div class="text-center" style="padding:30px 10px;">
                <h2 class="font-20 font-700 mb-0">버블탱크 스쿠버다이빙</h2>
                <p style="margin:0;">제주 남부에 위치한 PADI 5star 다이빙센터</p>
                <div class="star-area" style="margin-top: 16px;">
                    <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                    <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                    <i class="fa fa-star font-20 color-yellow-dark scale-box"></i>
                    <i class="fa fa-star-half-alt font-20 color-yellow-dark scale-box"></i>
                    <i class="far fa-star font-20 color-yellow-dark scale-box"></i>
                    <span class="font-20" style="margin-left: 10px;color:black;vertical-align:bottom;">3.8</span>
                </div>
                <div class="evaluation d-flex">
                    <span class="view font-12"">경치 4.1</span>
                    <span class="training font-12"">교육 3.9</span>
                    <span class="equiptment font-12">시설 3.4</span>
                    <span class="service font-12">서비스 4.2</span>
                    <!--<span class="info" style="margin-bottom:3px;margin-top:3px;"><i class="icon_question font-12">별점 안내</i></span>-->
                </div>
                <div style="margin-top:8px;"><span>최근리뷰 32</span>&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;<img class="ext-img" src="/static/images/logo_padi.svg" width="48" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;<span>￦￦</span>
                <!--<span class="badge font-10 bg-fade-gray-dark">PADI 공식</span>-->
                </div>
                <div style="margin-top:26px;" class="row mb-0 text-center">
                    
                    <div class="col-4 pd-0" style="border-right: 1px solid lightgray;">
                    <button href="#" v-on:click="call()">
                        <img class="ext-img" src="/static/images/ico_call.png" width="26" />
                        <span class="font-14 bold">전화</span>
                    </button>
                    </div>
                    <div class="col-4 pd-0" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" src="/static/images/ico_heart.png" width="26" />
                        <span class="font-14 bold">찜 25</span>
                    </div>
                    
                    <div class="col-4 pd-0" data-menu="menu-share">
                        <img class="ext-img" src="/static/images/ico_share.png" width="26" />
                        <span class="font-14 bold">공유</span>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
        <div class="card card-style">
            <div class="content mb-0 mt-3" id="tab-group-1">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1ab">스쿠버 교육</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2ab">펀 다이빙</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-3ab">체험 다이빙</a>
                </div>

                <div class="clearfix mb-4"></div>
                <div data-bs-parent="#tab-group-1" class="collapse show" id="tab-1ab">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_openwater.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">오픈워터 코스</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦550,000</h2>
                            <p class="color-highlight font-10">3일 전일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">어드벤스드 코스</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦500,000</h2>
                            <p class="color-highlight font-10">2일 전일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_advanced.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">오픈워터+어드벤스드</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦950,000</h2>
                            <p class="color-highlight font-10">5일 전일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_specialtea.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">스페셜티 코스</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦300,000</h2>
                            <p class="color-highlight font-10">2일 전일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_rescue.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">레스큐+응급처치</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦650,000</h2>
                            <p class="color-highlight font-10">3일 전일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_master.jpg" class="rounded-sm me-3" width="40">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">다이브마스터</h2>
                            <p class="color-highlight font-11">자격증/렌탈/숙박/중식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦1,350,000</h2>
                            <p class="color-highlight font-10">5일 전일</p>
                        </div>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-1" class="collapse" id="tab-2ab">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_island.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">섬 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦50,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦70,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">비치 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦40,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_yacht.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">요트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦80,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_night.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">나이트 다이빙</h2>
                            <p class="color-highlight font-11">가이드/탱크/간식</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦60,000</h2>
                            <p class="color-highlight font-10">1세션</p>
                        </div>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-1" class="collapse" id="tab-3ab">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">비치 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/입장/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦100,000</h2>
                            <p class="color-highlight font-10">반일 오전</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/보트/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦130,000</h2>
                            <p class="color-highlight font-10">반일 오전</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content"> 
                <h4 class="text-start pt-2 mb-3">사진</h4>
                
                <ul class="gallery-filter-controls">
                    <li class="color-highlight gallery-filter-all" data-filter="all">전체보기</li>
                    <li data-filter="1">다이빙</li>
                    <li data-filter="2">교육</li>
                    <li data-filter="3">센터</li>
                </ul>
            </div>
            <div class="content mb-3 mt-n3">
                <div class="gallery gallery-filter">
                    <a href="/static/images/shop1/diving/test1.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test1.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/diving/test2.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test2.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/diving/test3.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test3.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/diving/test4.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test4.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/diving/test5.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test5.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/diving/test6.jpg" data-gallery="gallery-1" class="filtr-item" title="" data-category="1">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/diving/test6.jpg" class="preload-img rounded-s shadow-m">
                    </a>							
                    <a href="/static/images/shop1/edu/test1.jpg" data-gallery="gallery-2" class="filtr-item" title="" data-category="2">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/edu/test1.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/shop/test3.jpg" data-gallery="gallery-3" class="filtr-item" title="" data-category="3">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/shop/test3.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/shop/test12.jpg" data-gallery="gallery-3" class="filtr-item" title="" data-category="3">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/shop/test12.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/shop/test15.jpg" data-gallery="gallery-3" class="filtr-item" title="" data-category="3">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/shop/test15.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/shop/test21.jpg" data-gallery="gallery-3" class="filtr-item" title="" data-category="3">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/shop/test21.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                    <a href="/static/images/shop1/shop/test22.jpg" data-gallery="gallery-3" class="filtr-item" title="" data-category="3">
                        <img src="/static/images/empty.png" data-src="/static/images/shop1/shop/test22.jpg" class="preload-img rounded-s shadow-m">
                    </a>
                </div>
            </div>
        </div>


        <div class="card card-style p-2">
            <div class="content mb-2">
                <div class="text-center">
                    <i class="ico ico-wedive-w -circle color-primary scale-box fa-4x"></i>
                </div>
                <h4 class="text-center pt-2 mb-0">wedive's comment</h4>
                <div class="justify-content-center mb-2 mt-3 text-start">
                    <div class="color-gray-light-mid" style="float: left;position: relative;width: 20px;">01</div>
                    <div class="mb-2" style="padding-left: 30px;">
                        대한민국에서 가장 수중환경이 뛰어난 제주 남부 다이빙 사이트 근처에 있습니다.
                    </div>
                    <div class="color-gray-light-mid" style="float: left;position: relative;width: 20px;">02</div>
                    <div class="mb-2" style="padding-left: 30px;">
                        세계에서 가장 큰 다이빙 단체인 PADI 5 Star 다이브 센터 입니다.
                    </div>
                    <div class="color-gray-light-mid" style="float: left;position: relative;width: 20px;">03</div>
                    <div class="mb-2" style="padding-left: 30px;">
                        교육, 장비대여, 숙박까지 모두 진행하며, 가격대비 장비의 수준과 직원들의 친절함으로 사용자 평가가 좋습니다.
                    </div>
                </div>
                
            </div>
        </div>

        
        <div class="card card-style bg-theme pb-0">
            <div class="content" id="tab-group-2">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-info">기타 정보</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">영업 시간</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-eqpt">대여 장비</a>
                </div>
                
                <div data-bs-parent="#tab-group-2" class="collapse text-start px-2 show" id="tab-info">
                    <div class=" line-height-l pb-3 mt-2 light-border-bottom">
                        <strong class="small-title">시설 정보</strong>
                        <div class="row text-start">
                            <div class="ico_feature col-3">
                                <i class="ico_feature6 icon-service"></i>
                                <p class="span_feature text-center">주차</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature16 icon-service"></i>
                                <p class="span_feature text-center">WIFI</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature15 icon-service"></i>
                                <p class="span_feature text-center">반려동물</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature8 icon-service"></i>
                                <p class="span_feature text-center">남녀화장실</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="vcard-field line-height-l pb-3 mt-3">
                        <strong>결제 방법</strong>
                        <ul class="wedive-ul ps-0">
                            <li class="col-md-6">현금</li>
                            <li class="col-md-6">VISA</li>
                            <li class="col-md-6">MasterCard</li>
                            <li class="col-md-6">UnionPay</li>
                            <li class="col-md-6">JCB</li>
                            <li class="col-md-6">American Express</li>
                            <li class="col-md-6">Discover card</li>
                            <li class="col-md-6">PAYCO</li>
                            <li class="col-md-6">Kakao Pay</li>
                            <li class="col-md-6">Naver Pay</li>
                        </ul>
                        <i class="fas fa-credit-card color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-3 mt-3">
                        <strong>사이트 까지 거리</strong>
                        20km 이상 소요
                        <i class="fa fa-map-marker color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-3 mt-3">
                        <strong>직원수</strong>
                        <div class="row mb-0">
                            <div class="col-6 text-start font-13">다이브 마스터</div>
                            <p class="col-6 mb-0 text-end">2</p>
                            <div class="col-6 text-start font-13">오픈워터 강사</div>
                            <p class="col-6 mb-0 text-end">6</p>
                        </div>
                        <i class="fas fa-user-tie color-blue2-dark mt-n2"></i>
                    </div>

                    <div class="vcard-field line-height-l pb-0 mt-3 bd-b-w-0">
                        <strong>지원 언어</strong>
                        <ul class="wedive-ul ps-0">
                            <li class="col-md-6">한국어</li>
                        </ul>
                        <i class="fas fa-language color-blue2-dark mt-n2"></i>
                    </div>

                    
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-time">
                    <div class="row mb-0 mt-2">
                        <h5 class="col-6 text-start font-13 font-400">일요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">월요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">화요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">수요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">목요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">금요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                        <h5 class="col-6 text-start font-13 font-400">토요일</h5>
                        <p class="col-6 mb-2 text-end">08:00 - 21:00</p>
                    </div>
                </div>
                <div data-bs-parent="#tab-group-2" class="collapse px-2" id="tab-eqpt">
                    <div class="mt-3 text-start row">
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt1 icon-equiptment"></i>
                            <p class="span_feature text-center">마스크</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt2 icon-equiptment"></i>
                            <p class="span_feature text-center">레귤레이터</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt3 icon-equiptment"></i>
                            <p class="span_feature text-center">모르겠음</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt4 icon-equiptment"></i>
                            <p class="span_feature text-center">다이버 워치</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt5 icon-equiptment"></i>
                            <p class="span_feature text-center">나침반</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt6 icon-equiptment"></i>
                            <p class="span_feature text-center">수중 스쿠터</p>
                        </div>

                        <div class="ico_equipt col-3">
                            <i class="ico_equipt7 icon-equiptment"></i>
                            <p class="span_feature text-center">산소탱크</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt8 icon-equiptment"></i>
                            <p class="span_feature text-center">핀</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt9 icon-equiptment"></i>
                            <p class="span_feature text-center">구명조끼</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt10 icon-equiptment"></i>
                            <p class="span_feature text-center">나이프</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt11 icon-equiptment"></i>
                            <p class="span_feature text-center">스노쿨링</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt12 icon-equiptment"></i>
                            <p class="span_feature text-center">부츠</p>
                        </div>

                        <div class="ico_equipt col-3">
                            <i class="ico_equipt13 icon-equiptment"></i>
                            <p class="span_feature text-center">잠수복 상의</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt14 icon-equiptment"></i>
                            <p class="span_feature text-center">잠수복 하의</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt15 icon-equiptment"></i>
                            <p class="span_feature text-center">라이트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt16 icon-equiptment"></i>
                            <p class="span_feature text-center">모름</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt17 icon-equiptment"></i>
                            <p class="span_feature text-center">카메라</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt19 icon-equiptment"></i>
                            <p class="span_feature text-center">수심계</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt20 icon-equiptment"></i>
                            <p class="span_feature text-center">게이지</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt21 icon-equiptment"></i>
                            <p class="span_feature text-center">잠수복</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt22 icon-equiptment"></i>
                            <p class="span_feature text-center">모름</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt23 icon-equiptment"></i>
                            <p class="span_feature text-center">유아장비</p>
                        </div>
                        
                    </div>
                </div>
            </div>    
        </div>


        <div class="card card-style">
            <div class="content mb-0 mt-10">
                <h4 class="text-start pt-2 mb-0">주소</h4>
                <p class="text-start mb-3 mb-0">
                    <a href="#" data-menu="menu-copy"><i class="far fa-copy color-blue2-dark"></i> 제주 서귀포시 부두로 41 버블탱크</a><br/>
                    <a href="#" data-menu="menu-direction"><i class="fas fa-route color-blue2-dark"></i> 공항-샵 이동방법 안내</a>
                </p>
            </div>
            <div id="map" style="height: 300px;"></div>
        </div>

        <div class="card card-style">
            <div class="content mb-2">
                <h4 class="text-start pt-2 mb-0">스쿠버 지수</h4>
                <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                    <thead>
                        <tr class="bg-blue-dark">
                            <th scope="col" class="color-white font-12">날짜</th>
                            <th scope="col" class="color-white font-12">파고</th>
                            <th scope="col" class="color-white font-12">유속</th>
                            <th scope="col" class="color-white font-12">수온</th>
                            <th scope="col" class="color-white font-12">스쿠버</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="font-12" scope="row">09/11</th>
                            <td class="font-12">0.1~0.3</td>
                            <td class="font-12">0.4~1.0</td>
                            <td class="font-12">22~23</td>
                            <td class="color-blue-dark font-12">보통</td>
                        </tr>
                        <tr>
                            <th class="font-12" scope="row">09/12</th>
                            <td class="font-12">0.2~0.3</td>
                            <td class="font-12">0.4~0.8</td>
                            <td class="font-12">23~24</td>
                            <td class="color-green-dark font-12">좋음</td>
                        </tr>
                        <tr>
                            <th class="font-12" scope="row">09/13</th>
                            <td class="color-red-dark font-12">0.7~0.9</td>
                            <td class="color-red-dark font-12">0.6~1.2</td>
                            <td class="font-12">24</td>
                            <td class="color-red-dark font-12">나쁨</td>
                        </tr>
                    </tbody>
                </table>
                <div class="text-end">
                    <img class="me-1 mb-1" height="20" src="/static/images/kaoh_logo.svg" />
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content text-start mb-0">
                <h4 class="pt-2 mb-0">리뷰</h4>
                <span class="text-show-all">전체 보기 <i class="fas fa-chevron-right"></i></span>
            </div>
                
            <div class="content text-start">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h1 class="float-start fa-2x font-900 me-3">5.00</h1>
                        <span>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                        </span>
                    </div>
                    <div>
                        <h6 class="text-end">김성진</h6>
                        <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.30</p>
                    </div>
                </div>
                <p class="review-text mt-3">
                    제주도에서 스쿠버 다이빙 할 때 항상 방문하는 버블탱크 입니다.<br/>
                    예약할 때 문의 드리면 친절하게 답변해 주십니다.<br/>
                    다이빙 할 때도 신경 많이 써 주시고<br/>
                    불편한 점 말씀 드리면 신속하게 해결해 주세요<br/>
                    렌탈 장비 관리 철저하게 하셔서<br/>
                    믿고 이용할 수 있어요!!
                </p>
            </div>
                
            <div class="divider divider-margins mb-3"></div>
                
            <div class="content text-start">
                <div class="d-flex">
                    <div class="flex-grow-1">
                        <h1 class="float-start fa-2x font-900 me-3">4.98</h1>
                        <span>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                            <i class="fa fa-star color-yellow-dark"></i>
                        </span>
                    </div>
                    <div>
                        <h6 class="text-end">조관우</h6>
                        <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.27</p>
                    </div>
                </div>
                <p class="review-text mt-3">
                    태풍이 올라와서 취소되진 않을까 걱정을 많이 했는데 잘챙겨주셔서 오픈워터 딸수 있었습니다ㅎㅎ<br/>
                    맑은날이 아니라 아쉬웠지만 어드밴스드 딸때는 날씨요정이 함께 해주기를 기대합니다...ㅎㅎ<br/>
                    잡아주신 숙소도 버블탱크 바로 앞에 있어서 넘 좋았어요.<br/>
                    깔끔하고 호텔사장님도 엄청 친절하셨어요ㅋ<br/>
                    그리고 버블탱크 샤워실에 스킨로션에 샴푸,린스,바디워시,클렌징폼, 머리끈까지 구비되어 있었습니다.<br/>
                    세심함에 치였슴당💕
                </p>
            </div>

            <div class="content text-start">
                <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0"><i class="fas fa-pencil-alt"></i>&nbsp;&nbsp;리뷰 쓰기</a>
            </div>
        </div>

        

        
        <div data-menu-load="/static/menu-footer.html"></div>

    </div>


    <!-- End of Page Content--> 
    <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

    <!-- Menu Share -->
    <div id="menu-share" class="menu menu-box-bottom rounded-m">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">공유</h2>
            <a href="#" class="close-menu"><i class="fa fa-times"></i></a>
        </div>
        <div class="content mb-0 text-start">
            <div class="divider mb-0"></div>
            <div class="list-group list-custom-small list-icon-0">
                <a href="auto_generated" class="shareToFacebook external-link">
                    <i class="font-18 fab fa-facebook-square color-facebook"></i>
                    <span class="font-13">Facebook</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToTwitter external-link">
                    <i class="font-18 fab fa-twitter-square color-twitter"></i>
                    <span class="font-13">Twitter</span>
                    <i class="fa fa-angle-right"></i>
                </a>
                <a href="auto_generated" class="shareToLinkedIn external-link">
                    <i class="font-18 fab fa-linkedin color-linkedin"></i>
                    <span class="font-13">LinkedIn</span>
                    <i class="fa fa-angle-right"></i>
                </a>        
                <a href="auto_generated" class="shareToWhatsApp external-link">
                    <i class="font-18 fab fa-whatsapp-square color-whatsapp"></i>
                    <span class="font-13">WhatsApp</span>
                    <i class="fa fa-angle-right"></i>
                </a>   
                <a href="auto_generated" class="shareToMail external-link border-0">
                    <i class="font-18 fa fa-envelope-square color-mail"></i>
                    <span class="font-13">Email</span>
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    </div>

    <!-- Added to Bookmarks Menu-->
    <div id="menu-copy" class="menu menu-box-modal rounded-m" data-menu-hide="800" data-menu-width="250" data-menu-height="170">
        <h1 class="text-center mt-3 pt-2">
            <i class="fa fa-check-circle color-green-dark fa-3x"></i>
        </h1>
        <h3 class="text-center pt-2">Copied to clipboard</h3>
    </div> 
        
    <!-- Direction Share -->
    <div id="menu-direction" class="menu menu-box-bottom rounded-m">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">오시는 길</h2>
            <a href="#" class="close-menu"><i class="fa fa-times"></i></a>
        </div>
        <div class="content mb-0 text-start">
            <p class="color-highlight font-600 mb-1">1 ~ 2인 이동 방법</p>
            <p class="mb-0 px-2">
            <i class="fas fa-shuttle-van mr-2"></i> 공항리무진 (600번) 이용<br/>
            <i class="fas fa-won-sign mr-2"></i> 5,500원<br/>
            <i class="fas fa-car mr-2"></i> 제주공항 5번 게이트 <i class="fas fa-arrow-right"></i> 서귀포항구 하차<br/>
            <i class="far fa-clock mr-2"></i> 1시간 30분 소요<br/>
            <i class="fas fa-walking mr-2"></i> 버블탱크까지 도보 3분
            </p>

            <div class="divider mt-2 mb-2"></div>

            <p class="color-highlight font-600 mb-1">3 ~ 4인 이동 방법</p>
            <p class="mb-0 px-2">
            <i class="fas fa-shuttle-van mr-2"></i> 서귀포 콜택시 이용<br/>
            <i class="fas fa-won-sign mr-2"></i> 25,000원<br/>
            <i class="fas fa-car mr-2"></i> 제주공항 <i class="fas fa-arrow-right"></i> 버블탱크 하차<br/>
            <i class="far fa-clock mr-2"></i> 1시간 소요<br/>
            </p>
        </div>
    </div>

    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
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
            zoom: 13,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            styles: map_style
        });
        var marker_shop = new google.maps.Marker({
            map: this.map,
            position: {lat: 33.24134444312815, lng: 126.56484940647604},
            label: {text: '버블탱크 스쿠버다이빙', color: 'white', className: 'marker-position'},
            icon: new google.maps.MarkerImage('/static/images/ico_pin1.png',null, null, null, new google.maps.Size(38,43)),
        });
        var marker_point = new google.maps.Marker({
            map: this.map,
            position: {lat: 33.22900114645303, lng: 126.56260977136935},
            label: {text: '포인트1', color: 'white', className: 'marker-position2'},
            icon: new google.maps.MarkerImage('/static/images/ico_pin2.png',null, null, null, new google.maps.Size(38,43)),
        });
        
        
    };
  },
  created() {
    
  },
  data () {
    return {
        map: null,
    }
  }, methods: {
      call: function() {
          console.log("call");
      }
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {margin: 6px 6px 0px 6px; background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(/static/images/question.png);text-indent: -9999px;}

.span_feature {width:66px;color: #727272;}
.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -36px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -38px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -36px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -36px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -36px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -36px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -72px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -72px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -72px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -72px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -72px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -72px;}

.icon-service {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/wedive_service.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}

.ico_equipt {}
.ico_equipt1 {width: 60px;height: 63px;background-position: 0px 0px;}
.ico_equipt2 {width: 60px;height: 63px;background-position: -56px 0px;}
.ico_equipt3 {width: 60px;height: 63px;background-position: -112px 0px;}
.ico_equipt4 {width: 60px;height: 63px;background-position: -168px 0px;}
.ico_equipt5 {width: 60px;height: 63px;background-position: -224px 0px;}
.ico_equipt6 {width: 60px;height: 63px;background-position: -280px 0px;}
.ico_equipt7 {width: 60px;height: 63px;background-position: 0px -60px;}
.ico_equipt8 {width: 60px;height: 63px;background-position: -56px -60px;}
.ico_equipt9 {width: 60px;height: 63px;background-position: -112px -60px;}
.ico_equipt10 {width: 60px;height: 63px;background-position: -168px -60px;}
.ico_equipt11 {width: 60px;height: 63px;background-position: -222px -60px;}
.ico_equipt12 {width: 60px;height: 63px;background-position: -280px -60px;}

.ico_equipt13 {width: 60px;height: 63px;background-position: 0px -118px;}
.ico_equipt14 {width: 60px;height: 63px;background-position: -56px -118px;}
.ico_equipt15 {width: 60px;height: 63px;background-position: -112px -118px;}
.ico_equipt16 {width: 60px;height: 63px;background-position: -168px -118px;}
.ico_equipt17 {width: 60px;height: 63px;background-position: -224px -118px;}
.ico_equipt18 {width: 60px;height: 63px;background-position: -280px -118px;}
.ico_equipt19 {width: 60px;height: 63px;background-position: 0px -176px;}
.ico_equipt20 {width: 60px;height: 63px;background-position: -56px -176px;}
.ico_equipt21 {width: 60px;height: 63px;background-position: -112px -176px;}
.ico_equipt22 {width: 60px;height: 63px;background-position: -168px -176px;}
.ico_equipt23 {width: 60px;height: 63px;background-position: -224px -176px;}
.ico_equipt24 {width: 60px;height: 63px;background-position: -280px -176px;}
.icon-equiptment {overflow: hidden;display: block;margin-left: 3px;background-image: url(/static/images/wedive_equiptment.png);background-repeat: no-repeat;-webkit-background-size: 335px 240px;background-size: 335px 240px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;
    display: grid;
    margin-left: calc(50% - 20px);
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    background-color: #1d397c;
    padding:8px;
    border-radius:20px;
    width:40px;
    height:40px;}
.ico-wedive-w:before {content: "";
        background-image: url('/static/images/ico_wedive_w.png');
        background-size:32px 32px;
        width:32px;
        height:32px;
        display:inline-block;
        background-position-x: -3px;
}

</style>
