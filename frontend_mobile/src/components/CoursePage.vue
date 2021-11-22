<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color">버블탱크 다이빙센터</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>
    <div class="card card-fixed mt-4" style="background-image:url(/static/images/diving_boat.jpg)" data-card-height="350">
        
    </div>
    <div class="card card-clear" data-card-height="250"></div>

    <div class="page-content pb-3"> 
        
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full rounded-l pb-1">
                     
            <div class="content mt-3">
                <div class="mt-2 mb-3">
                    <div class="align-self-center text-center">
                        <h1 class="font-20 mb-0 font-600">보트 체험 다이빙 (2회)</h1>
                        <div class="mt-n1">
                            <span class="chip chip-s bg-gray-light-mid text-center" style="padding-left: 16px;margin: 0px 4px 0px 0px;">오전 / 오후 택1</span>
                        <span class="font-19 color-highlight font-900">130,000원</span></div>
                        <p class="mt-3"><span class="text-urgent">※ 당일 비행기 탑승이 제한됩니다.</span></p>
                    </div>
                </div>


                <div class="list-custom-small">
                    <a data-bs-toggle="collapse" class="no-effect" href="#whatis">
                        <i class="fa fa-question-circle font-14 color-highlight me-1"></i>
                        <span class="font-14">체험 다이빙이란?</span>
                        <i class="fa fa-angle-down"></i>
                    </a>        
                </div>
                <div class="collapse" id="whatis">
                    <div class="list-group ps-3 txt_box">
                        &nbsp;라이센스가 없어도 수영을 못해도 남녀노소 누구나 스쿠버다이빙을 즐기실 수 있는 체험 프로그램입니다. 사전교육과 더불어 전문강사와 1:1로 진행하기 때문에 안전하게 다이빙을 체험할 수 있습니다.
                    </div>
                </div>
                
                
                
                <div class="divider mb-1 mt-2"></div>

                <div class="list-custom-small">
                    <a data-bs-toggle="collapse" class="no-effect" href="#includes">
                        <i class="fas fa-box-open font-14 color-highlight me-1"></i>
                        <span class="font-14">포함 사항</span>
                        <i class="fa fa-angle-down"></i>
                    </a>        
                </div>
                <div class="collapse show" id="includes">
                    <div class="list-group ps-3 txt_box">
                        <div class="row text-start mb-0">
                            <div class="ico_feature col-3">
                                <i class="ico_feature4 icon-course"></i>
                                <p class="span_feature text-center">장비 대여</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature10 icon-course"></i>
                                <p class="span_feature text-center">교육</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature16 icon-course"></i>
                                <p class="span_feature text-center">사진/영상</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature9 icon-course"></i>
                                <p class="span_feature text-center">간식</p>
                            </div>
                        </div>
                    </div>
                </div>






                <div class="divider mb-1 mt-2"></div>

                <div class="list-custom-small">
                    <a data-bs-toggle="collapse" class="no-effect" href="#course_info">
                        <i class="fas fa-atlas font-14 color-highlight me-1"></i>
                        <span class="font-14">코스 정보</span>
                        <i class="fa fa-angle-down"></i>
                    </a>        
                </div>
                <div class="collapse show" id="course_info">
                    <div class="list-group ps-3 txt_box mb-2">
                        총 소요시간은 3시간 입니다.
                    </div>
                    <div class="list-group txt_box p-0">
                        <div class="timeline-body">
                            <div class="timeline-deco"></div>
                            
                            <div class="drag-line"></div>

                            <div class="timeline-item mt-4">
                                <i class="fas fa-store bg-blue-dark shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300 mb-3 font-13">
                                        센터 도착 후 슈트착용 후 항으로 이동
                                    </h5>
                                    <img data-src="/static/images/diving_exp1.jpg" alt="img" src="/static/images/diving_exp1.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>					

                            <div class="timeline-item">
                                <i class="fas fa-ship bg-yellow-dark shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300 font-13">
                                        항에서 배를 타고 섬으로 이동
                                    </h5>
                                    <img data-src="/static/images/diving_exp2.jpg" alt="img" src="/static/images/diving_exp2.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>		

                            <div class="timeline-item">
                                <i class="fas fa-graduation-cap bg-green-dark shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300 font-13">
                                        사전 교육 진행
                                    </h5>
                                    <img data-src="/static/images/diving_exp3.jpg" alt="img" src="/static/images/diving_exp3.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>		

                            <div class="timeline-item">
                                <i class="fas fa-swimmer bg-pinterest shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300 font-13">
                                        장비 착용 후 수면에서 스쿠버교육
                                    </h5>
                                    <img data-src="/static/images/diving_exp4.jpg" alt="img" src="/static/images/diving_exp4.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>	

                            <div class="timeline-item">
                                <i class="fas fa-fish bg-twitter shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300 font-13">
                                        다이빙 체험
                                    </h5>
                                    <img data-src="/static/images/diving_exp5.jpg" alt="img" src="/static/images/diving_exp5.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>	
                        </div>
                    </div>
                </div>
                


                <div class="divider mb-1 mt-2"></div>


                <div class="list-custom-small">
                    <a data-bs-toggle="collapse" class="no-effect" href="#dive_point">
                        <i class="fas fa-map-marked-alt font-14 color-highlight me-1"></i>
                        <span class="font-14">다이브 포인트</span>
                        <i class="fa fa-angle-down"></i>
                    </a>        
                </div>
                <div class="collapse show" id="dive_point">
                    <div class="point_area mb-2">
                        <div class="ms-2 me-2 cursor-pointer position-relative" v-on:click="goPoint()">
                            <h5 class="font-700 font-13 color-secondary"><i class="fas fa-map-pin me-1"></i> 문섬 포인트</h5>
                            <span class="color-gray-light-mid font-13 mb-0 text-more">더 보기<i class="fas fa-chevron-right ms-2"></i></span>
                            <p class="opacity-40 mb-0 point-text">서귀포 하면 가장 먼저 떠오르는 다이빙 포인트! 물때에 따라 다른 방향으로 흘러가는 조류 다이빙, 다양한 연산호와 물고기들이 어우러진 곳이다. 서귀포항에서 배를 타고 5분 정도면 다다를 수 있을정도로 가까운 섬이며, 도지정 문화재 기념물로 보호되고 있다.</p>
                        </div>
                        <div class="splide double-slider slider-no-arrows slider-no-dots ps-2" id="point-slider-1">
                            <div class="splide__track">
                                <div class="splide__list">
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_01.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">문섬 바다 속 풍경</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_02.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">연산호 주변 범돔 무리</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_03.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">적벽 형태의 포인트</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_04.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">형형색색의 연산호</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_05.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">다양한 수중생물</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_munisland_06.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">문섬, 새끼섬</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="point_area mb-2">
                        <div class="ms-2 me-2 cursor-pointer position-relative" v-on:click="goPoint()">
                            <h5 class="font-700 font-13 color-secondary"><i class="fas fa-map-pin me-1"></i> 범섬 포인트</h5>
                            <span class="color-gray-light-mid font-13 mb-0 text-more">더 보기<i class="fas fa-chevron-right ms-2"></i></span>
                            <p class="opacity-40 mb-0 point-text">서귀포항에서 남서쪽으로 5㎞해상에 위치한 범섬은 멀리서 바라보면 큰 호랑이가 웅크리고 앉은 모습과 같아 붙여진 이름이다. 섬주변에는 기복이 심한 암초가 깔려 있어참돔, 돌돔, 감성돔, 벵어돔, 자바리 등을 많이 볼수 있으며, 6월부터 7월까지는 감성돔, 뱅어돔, 참돔이겨울철에는 자바리, 참돔, 돌돔 등을 다양한 어종을 만날 수 있다.</p>
                        </div>
                        <div class="splide double-slider slider-no-arrows slider-no-dots ps-2" id="point-slider-2">
                            <div class="splide__track">
                                <div class="splide__list">
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_bumisland_01.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">범섬 전경</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_bumisland_02.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">범섬 바다 속 풍경</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_bumisland_03.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">범섬 내부 산호</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_bumisland_04.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">범섬 포인트 물고기</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="point_area mb-2">
                        <div class="ms-2 me-2 cursor-pointer position-relative" v-on:click="goPoint()">
                            <h5 class="font-700 font-13 color-secondary"><i class="fas fa-map-pin me-1"></i> 서건도 포인트</h5>
                            <span class="color-gray-light-mid font-13 mb-0 text-more">더 보기<i class="fas fa-chevron-right ms-2"></i></span>
                            <p class="opacity-40 mb-0 point-text">조수간만의 차에 의해 한달에 10차례에 걸쳐 앞바다가 갈라지는 제주판 '모세의 기적', 서귀포시 서건도(일명 써근섬)로 알려진 유명한 섬이다. 바닷물이 갈라지면 서귀포 해안에서 걸어서 들어갈수 있는 섬으로도 유명, 해안에서 섬까지 걸어가는 동안 조개와 낙지 등을 잡는 재미로 체험관광객들의 발길이 잦다.</p>
                        </div>
                        <div class="splide double-slider slider-no-arrows slider-no-dots ps-2" id="point-slider-3">
                            <div class="splide__track">
                                <div class="splide__list">
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_seogunisland_01.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">서건도 전경</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_seogunisland_02.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">서건도 내부 연산호</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_seogunisland_03.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">서건도 내부 물고기</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_seogunisland_04.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">내부 바위군</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="splide__slide">
                                        <div class="card m-2 card-style">
                                            <img src="/static/images/point/ko/jeju_seogunisland_05.jpg" class="img-fluid">
                                            <div class="p-2 bg-theme rounded-sm">
                                                <h4 class="font-13 line-height-s font-400 mb-0">내부 기암괴석</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="list-custom-small">
                    <a data-bs-toggle="collapse" class="no-effect" href="#warn_notice">
                        <i class="fas fa-exclamation-triangle font-14 color-highlight me-1"></i>
                        <span class="font-14">유의사항</span>
                        <i class="fa fa-angle-down"></i>
                    </a>        
                </div>
                <div class="collapse show" id="warn_notice">
                    <div class="list-group ps-3 txt_box">
                        · 시작 전 12시간 이내의 음주를 자제해주세요.<br/>
                        · 심혈관 질환 및 건강 이상자는 안전상의 이유로 신청이 불가합니다.<br/>
                        · 코스 진행 완료 18시간 이후 비행기 탑승이 가능합니다.<br/>
                    </div>
                </div>
                
                <div class="divider mb-1 mt-2"></div>
                

                
            </div>
            <div class="content hide">
                <div class="gallery-view-controls">
                    <div class="divider mb-0"></div>
                    <a href="#" class="color-highlight gallery-view-1"><i class="fa fa-th"></i></a>
                    <a href="#" class="gallery-view-2"><i class="fa fa-th-large"></i></a>
                    <a href="#" class="gallery-view-3"><i class="fa fa-bars"></i></a>
                    <div class="clearfix"></div>
                </div>
                <div class="my-n1">
                    <div class="gallery-views gallery-view-1">
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test1.jpg" title="Vynil and Typerwritter">
                            <div style="background-image: url(/static/images/shop1/diving/test1.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test2.jpg" title="Fruit Cookie Pie">
                            <div style="background-image: url(/static/images/shop1/diving/test2.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>		
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test3.jpg" title="Plain Cookies and Flour">
                            <div style="background-image: url(/static/images/shop1/diving/test3.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>	
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test4.jpg" title="Pots and Stuff">
                            <div style="background-image: url(/static/images/shop1/diving/test4.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test5.jpg" title="Pots and Stuff">
                            <div style="background-image: url(/static/images/shop1/diving/test5.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test6.jpg" title="Delicious Strawberries">
                            <div style="background-image: url(/static/images/shop1/diving/test6.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test7.jpg" title="A Beautiful Camera">
                            <div style="background-image: url(/static/images/shop1/diving/test7.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption"></div>
                        </a>			
                    </div>
                </div>
            </div>

            <div class="content">

                <a href="#" data-menu="menu-reserve"class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2">예약하기</a>
                

            </div>
                
            
        </div>
    </div>
    <!-- Page content ends here-->
        
    
    <!-- Menu Reserve -->
    <div id="menu-reserve" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">예약</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mb-0 text-start">
            
            

            <a href="#" class="card card-style check-card mb-2">
                <div class="content">
                    <div class="d-flex mt-n2">
                        <div class="ms-1">
                            <div class="form-check icon-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="check1">
                                <i class="icon-check-1 fa fa-circle color-gray-dark font-20"></i>
                                <i class="icon-check-2 fa fa-check-circle font-20 color-highlight"></i>
                            </div>
                        </div>
                        <div class="ms-4">
                            <h4 class="font-13 mb-n1 font-400">숙박 연계 호텔 1인실 (1인 기준)</h4>
                        </div>
                        <div class="ms-auto">
                            <h3 class="font-15 mb-n1">￦25,000<!--<sup class="opacity-30">.99</sup>--></h3>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="card card-style check-card mb-2">
                <div class="content">
                    <div class="d-flex mt-n2">
                        <div class="ms-1">
                            <div class="form-check icon-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="check1">
                                <i class="icon-check-1 fa fa-circle color-gray-dark font-20"></i>
                                <i class="icon-check-2 fa fa-check-circle font-20 color-highlight"></i>
                            </div>
                        </div>
                        <div class="ms-4">
                            <h4 class="font-13 mb-n1 font-400">숙박 연계 호텔 다인실 (1인 기준)</h4>
                        </div>
                        <div class="ms-auto">
                            <h3 class="font-15 mb-n1">￦20,000</h3>
                        </div>
                    </div>
                </div>
            </a>
            
            <a href="#" class="card card-style check-card mb-2">
                <div class="content">
                    <div class="d-flex mt-n2">
                        <div class="ms-1">
                            <div class="form-check icon-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="check2">
                                <i class="icon-check-1 fa fa-circle color-gray-dark font-20"></i>
                                <i class="icon-check-2 fa fa-check-circle font-20 color-highlight"></i>
                            </div>
                        </div>
                        <div class="ms-4">
                            <h4 class="font-13 mb-n1 font-400">풀세트 (부력조절기, 호흡기, 스킨세트)</h4>
                        </div>
                        <div class="ms-auto">
                            <h3 class="font-15 mb-n1">￦30,000</h3>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="card card-style check-card mb-2">
                <div class="content">
                    <div class="d-flex mt-n2">
                        <div class="ms-1">
                            <div class="form-check icon-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="check2">
                                <i class="icon-check-1 fa fa-circle color-gray-dark font-20"></i>
                                <i class="icon-check-2 fa fa-check-circle font-20 color-highlight"></i>
                            </div>
                        </div>
                        <div class="ms-4">
                            <h4 class="font-13 mb-n1 font-400">스쿠버세트 (부력조절기, 호흡기)</h4>
                        </div>
                        <div class="ms-auto">
                            <h3 class="font-15 mb-n1">￦30,000</h3>
                        </div>
                    </div>
                </div>
            </a>
            <a href="#" class="card card-style check-card mb-2">
                <div class="content">
                    <div class="d-flex mt-n2">
                        <div class="ms-1">
                            <div class="form-check icon-check mt-2">
                                <input class="form-check-input" type="checkbox" value="" id="check2">
                                <i class="icon-check-1 fa fa-circle color-gray-dark font-20"></i>
                                <i class="icon-check-2 fa fa-check-circle font-20 color-highlight"></i>
                            </div>
                        </div>
                        <div class="ms-4">
                            <h4 class="font-13 mb-n1 font-400">스킨세트 (슈트, 마스크, 핀, 부츠, 후드)</h4>
                        </div>
                        <div class="ms-auto">
                            <h3 class="font-15 mb-n1">￦20,000</h3>
                        </div>
                    </div>
                </div>
            </a>
            

            <a href="#" v-on:click="reserve_next()" data-menu="menu-reserve" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2 btn-wedive-next" >다음</a>

            
        </div>
    </div>



    <!-- Menu Reserve2 -->
    <div id="menu-reserve2" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">예약</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="content mt-0 pb-3 text-start">
            <div class="row mb-0 me-1 ms-1 pe-2 ps-2 txt_box">
                <div class="col-8 text-start">
                    <h5 class="font-13 font-400">보트체험다이빙<br/>풀세트 (부력조절기, 호흡기, 스킨세트)</h5>

                    <div class="mx-auto">
                        <div class="stepper rounded-s float-start">
                            <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                            <input type="number" min="1" max="99" value="1">
                            <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <p class="col-4 mb-2 text-end font-900">￦160,000</p>
            </div>
            <a href="#" v-on:click="reserve_finish()" data-toast="snackbar-confirm" data-menu="menu-reserve"class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2" >예약하기</a>
            
        </div>
    </div>


    <div id="snackbar-confirm" class="snackbar-toast color-white bg-green-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-check me-3"></i>예약이 완료되었습니다.</div>


  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    $(".page-title").hide();
    $(".page-title-clear").hide();

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
    
  },
  data () {
    return {
        
    }
  }, methods: {
      reserve_next: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);

          setTimeout(function() {
            var menuData = 'menu-reserve2';
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          },200);
      },
      reserve_finish: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);
      },
      goPoint: function() {
          location.href = '/point';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -40px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -40px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -40px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -40px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -40px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -40px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -78px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -78px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -78px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -78px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -78px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -78px;}

.icon-course {overflow: hidden;display: block;margin-left: 11px;background-image: url(https://image-bucket.us-east-1.linodeobjects.com/image/wedive_course2.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}
.span_feature {width:66px;}
.text-urgent {color:#de5246; background-color: #ffebe9;padding: 2px 8px;border-radius:2px;}

.square-img {width: 100%;height: 0px;padding: 50% 0;background-size: 100% 100%;background-clip: border-box;box-sizing:border-box;}
.txt_box {background: #f4f4f4; border-radius: .5rem;padding: 14px 20px;}



.timeline-item .timeline-icon {top: -10px !important;}
.timeline-item-content, .timeline-item-content-full {border: none !important;background-color: transparent!important;padding: 0 !important;}
.icon-check i{top: -8px;}
.btn-wedive-next {width: 30%;float: right;margin-top: 10px;border-radius: 20px !important;margin-right: 10px;}
.point-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

</style>
