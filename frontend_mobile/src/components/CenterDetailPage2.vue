<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>    
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
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-0 mt-1">버블탱크 스쿠버다이빙</h2>
                <p class="color-gray m-0">제주 남부에 위치한 PADI 5star 다이빙센터</p>
                <div class="wedive-star-back">
                  <div class="wedive-star-front" style="width:76%">
                  </div>
                  <span class="wedive-star-number">3.8</span>
                </div>
                
                <div class="evaluation d-flex">
                    <span class="view font-12"">경치 4.1</span>
                    <span class="training font-12"">교육 3.9</span>
                    <span class="equiptment font-12">시설 3.4</span>
                    <span class="service font-12">서비스 4.2</span>
                    <!--<span class="info" style="margin-bottom:3px;margin-top:3px;"><i class="icon_question font-12">별점 안내</i></span>-->
                </div>
                <div style="margin-top:8px;"><span>최근리뷰 32</span>&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;<img class="ext-img" src="/static/images/agency/logo_padi.svg" width="48" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;<span>￦￦</span>
                <!--<span class="badge font-10 bg-fade-gray-dark">PADI 공식</span>-->
                </div>

                <div class="divider mt-3 mb-3"></div>
                <div class="d-flex mt-3 mb-0 text-center">
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                    <button href="#" v-on:click="call()">
                        <img class="ext-img" src="/static/images/ico_call.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">전화</span>
                    </button>
                    </div>
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" src="/static/images/ico_heart.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">찜 25</span>
                    </div>
                    
                    <div class="flex-grow-1 pd-0" data-menu="menu-share">
                        <img class="ext-img" src="/static/images/ico_share.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">공유</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="card card-style p-2">
            <div class="content mb-2">
                <div class="text-center">
                    <i class="ico ico-wedive-w color-primary scale-box fa-4x"></i>
                </div>
                <h4 class="text-center pt-2 mb-0">wedive's comment</h4>
                <div class="justify-content-center mb-2 mt-3 text-start font-noto">
                    <div class="color-gray-light-mid font-700 wedive-comment-number">01</div>
                    <div class="mb-2 font-200 wedive-comment-desc">
                        대한민국에서 가장 수중환경이 뛰어난 제주 남부 다이빙 사이트 근처에 있습니다.
                    </div>
                    <div class="color-gray-light-mid font-700 wedive-comment-number">02</div>
                    <div class="mb-2 font-200 wedive-comment-desc">
                        세계에서 가장 큰 다이빙 단체인 PADI 5 Star 다이브 센터 입니다.
                    </div>
                    <div class="color-gray-light-mid font-700 wedive-comment-number">03</div>
                    <div class="mb-2 font-200 wedive-comment-desc">
                        교육, 장비대여, 숙박까지 모두 진행하며, 가격대비 장비의 수준과 직원들의 친절함으로 사용자 평가가 좋습니다.
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
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
                    </div>
                    <div class="d-flex mb-3 cursor-pointer" v-on:click="goCourse()">
                        <div class="align-self-center">
                            <img src="/static/images/diving_boat.jpg" class="rounded-sm me-3" width="70">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">보트 체험 다이빙</h2>
                            <p class="color-highlight font-11">렌탈/보트/사진</p>
                        </div>
                        <div class="ms-auto ps-3 align-self-center text-end">
                            <h2 class="font-15 mb-n1">￦130,000</h2>
                            <p class="color-highlight font-10">오전 반일</p>
                        </div>
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
                                <i class="ico_feature1 icon-service"></i>
                                <p class="span_feature text-center">외국어가능</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature2 icon-service"></i>
                                <p class="span_feature text-center">샤워가능</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature3 icon-service"></i>
                                <p class="span_feature text-center">룸서비스</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature4 icon-service"></i>
                                <p class="span_feature text-center">늦은 퇴실</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature5 icon-service"></i>
                                <p class="span_feature text-center">컨시어지</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature6 icon-service"></i>
                                <p class="span_feature text-center">주차</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature7 icon-service"></i>
                                <p class="span_feature text-center">주방</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature8 icon-service"></i>
                                <p class="span_feature text-center">남녀화장실</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature9 icon-service"></i>
                                <p class="span_feature text-center">24시업무</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature10 icon-service"></i>
                                <p class="span_feature text-center">비지니스</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature11 icon-service"></i>
                                <p class="span_feature text-center">장애인편의</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature12 icon-service"></i>
                                <p class="span_feature text-center">세탁서비스</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature13 icon-service"></i>
                                <p class="span_feature text-center">금연실</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature14 icon-service"></i>
                                <p class="span_feature text-center">아이돌봄</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature15 icon-service"></i>
                                <p class="span_feature text-center">반려동물</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature16 icon-service"></i>
                                <p class="span_feature text-center">WIFI</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature17 icon-service"></i>
                                <p class="span_feature text-center">공항셔틀</p>
                            </div>
                            <div class="ico_feature col-3">
                                <i class="ico_feature18 icon-service"></i>
                                <p class="span_feature text-center">피트니스</p>
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
                    <div class="row mb-0 mt-3">
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
                            <p class="span_feature text-center">스킨스쿠버</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt2 icon-equiptment"></i>
                            <p class="span_feature text-center">스킨 세트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt3 icon-equiptment"></i>
                            <p class="span_feature text-center">마스크</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt4 icon-equiptment"></i>
                            <p class="span_feature text-center">스노클</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt5 icon-equiptment"></i>
                            <p class="span_feature text-center">잠수복</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt6 icon-equiptment"></i>
                            <p class="span_feature text-center">오리발(핀)</p>
                        </div>

                        <div class="ico_equipt col-3">
                            <i class="ico_equipt7 icon-equiptment"></i>
                            <p class="span_feature text-center">부츠</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt8 icon-equiptment"></i>
                            <p class="span_feature text-center">웨이트&#38;벨트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt9 icon-equiptment"></i>
                            <p class="span_feature text-center">스쿠버 세트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt10 icon-equiptment"></i>
                            <p class="span_feature text-center">부력조절기</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt11 icon-equiptment"></i>
                            <p class="span_feature text-center">레귤레이터</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt12 icon-equiptment"></i>
                            <p class="span_feature text-center">보조호흡기</p>
                        </div>

                        <div class="ico_equipt col-3">
                            <i class="ico_equipt13 icon-equiptment"></i>
                            <p class="span_feature text-center">SMB</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt14 icon-equiptment"></i>
                            <p class="span_feature text-center">공기통</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt15 icon-equiptment"></i>
                            <p class="span_feature text-center">나이트록스</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt16 icon-equiptment"></i>
                            <p class="span_feature text-center">라이트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt17 icon-equiptment"></i>
                            <p class="span_feature text-center">다이브컴퓨터</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt18 icon-equiptment"></i>
                            <p class="span_feature text-center">카메라</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt19 icon-equiptment"></i>
                            <p class="span_feature text-center">DPV</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt20 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 핀</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt21 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 마스크</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt22 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 잠수복</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt23 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 벨트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt24 icon-equiptment"></i>
                            <p class="span_feature text-center">랜야드</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt25 icon-equiptment"></i>
                            <p class="span_feature text-center">부이</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt26 icon-equiptment"></i>
                            <p class="span_feature text-center">로프</p>
                        </div>


                        <div class="ico_equipt col-3">
                            <i class="ico_equipt27 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 벨트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt28 icon-equiptment"></i>
                            <p class="span_feature text-center">랜야드</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt29 icon-equiptment"></i>
                            <p class="span_feature text-center">부이</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt30 icon-equiptment"></i>
                            <p class="span_feature text-center">로프</p>
                        </div>

                        <div class="ico_equipt col-3">
                            <i class="ico_equipt31 icon-equiptment"></i>
                            <p class="span_feature text-center">프리 벨트</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt32 icon-equiptment"></i>
                            <p class="span_feature text-center">랜야드</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt33 icon-equiptment"></i>
                            <p class="span_feature text-center">부이</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt34 icon-equiptment"></i>
                            <p class="span_feature text-center">로프1</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt35 icon-equiptment"></i>
                            <p class="span_feature text-center">부이</p>
                        </div>
                        <div class="ico_equipt col-3">
                            <i class="ico_equipt36 icon-equiptment"></i>
                            <p class="span_feature text-center">로프</p>
                        </div>
                        
                    </div>
                </div>
            </div>    
        </div>

        <div class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">다이빙 가능 포인트</h4>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                <div v-for="(point,index) in point_list" v-if="index<2">
                    <div class="">
                        <div class="">
                            <div class="justify-content-center mb-0 text-start">
                                <a href="/point">
                                    <div style="position: relative;">
                                        <h4 class="font-15 font-600 color-highlight"> {{point.title}} </h4>
                                        <span class="color-gray-light-mid font-12 mb-0 text-more me-1">상세보기<i class="fas fa-chevron-right ms-2"></i></span>
                                    </div>
                                </a>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                    <span> {{point.star}} </span>
                                </p>

                                <div class="row text-center row-cols-3 mb-1" style="padding-left:10px;padding-right:10px;">
                                    <a class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.img1" title="">
                                        <img src="/static/images/empty.png" v-bind:data-src="point.img1" class="preload-img img-fluid rounded-s" alt="Point image">
                                    </a>
                                    <a class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.img2" title="">
                                        <img src="/static/images/empty.png" v-bind:data-src="point.img2" class="preload-img img-fluid rounded-s" alt="Point image">
                                    </a>
                                    <a class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.img3" title="">
                                        <img src="/static/images/empty.png" v-bind:data-src="point.img3" class="preload-img img-fluid rounded-s" alt="Point image">
                                    </a>
                                </div>
                                <p class="pb-0 mb-0 line-height-m point_desc"> {{point.desc}} </p>
                                <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                    {{point.feature}}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content mb-0">
                <h4 class="text-start pt-2 mb-2">주소</h4>
                <p class="text-start mb-3 mb-0">
                    <a href="#" data-menu="menu-copy"><i class="far fa-copy me-2"></i> 제주 서귀포시 부두로 41 버블탱크</a><br/>
                    <a href="#" class="color-highlight" data-menu="menu-direction"><i class="fas fa-route me-2"></i> 공항-샵 이동방법 안내</a>
                </p>
            </div>
            <div id="map" style="height: 300px;"></div>
            <div class="map-box hide">
                <a href="/center">
                    <div class="bx">
                        <div class="justify-content-center mb-0 text-start">
                            <div class="" style="width: 95px; height:95px;">
                                <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                            </div>
                            
                            <div class="" style="">
                                <h4 class="font-14 ellipsis mb-0" id="map_box_shop_name"></h4>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark"></i>
                                    &nbsp;<span id="map_box_shop_star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
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

        <div class="card card-style">
            <div class="content mb-2" id="tab-group-index">
                <h4 class="text-start pt-2 mb-2">스쿠버 지수</h4>
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-realtime">실시간 지수</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-monthly">월별 수온</a>
                </div>
                <div class="clearfix mb-4"></div>
                <div data-bs-parent="#tab-group-index" class="collapse show" id="tab-realtime">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
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
                        <img class="me-1 mb-3" height="20" src="/static/images/logo-kaoh.svg" />
                    </div>
                </div>
                <div data-bs-parent="#tab-group-index" class="collapse" id="tab-monthly">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">월</th>
                                <th scope="col" class="color-white font-12">최저/최고 수온</th>
                                <th scope="col" class="color-white font-12">평균</th>
                                <th scope="col" class="color-white font-12">인기도</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">1월</th>
                                <td class="font-12 color-gray">5.2ºC / 12.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>8.8ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">2월</th>
                                <td class="font-12 color-gray">3.4ºC / 9.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>6.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">3월</th>
                                <td class="font-12 color-gray">3.2ºC / 9.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>6.3ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">4월</th>
                                <td class="font-12 color-gray">7.0ºC / 13.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>10.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">5월</th>
                                <td class="font-12 color-gray">10.5ºC / 17.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>14.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">6월</th>
                                <td class="font-12 color-gray">15.1ºC / 23.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>19.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">7월</th>
                                <td class="font-12 color-gray">19.9ºC / 24.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_heavy_rain.svg" width="20" height="20"/>22.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">8월</th>
                                <td class="font-12 color-gray">21.3ºC / 26.0ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_showers.svg" width="20" height="20"/>23.7ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">9월</th>
                                <td class="font-12 color-gray">18.6ºC / 24.1ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_sunny.svg" width="20" height="20"/>21.4ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">10월</th>
                                <td class="font-12 color-gray">14.9ºC / 21.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>18.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">11월</th>
                                <td class="font-12 color-gray">10.8ºC / 17.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>14.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">12월</th>
                                <td class="font-12 color-gray">6.4ºC / 13.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/weather_partly_cloudy.svg" width="20" height="20"/>10.1ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="/static/images/logo-kma.svg" />
                    </div>
                </div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">리뷰</h4>
            <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide pt-2">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">5.00</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">보트 체험 다이빙</p>
                                                </div>
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
                                        <p class="review-text mt-2 mb-1">
                                            <a href="https://myplace-phinf.pstatic.net/20210827_62/16300643312513fe1S_JPEG/upload_07fc7f5449b8fecbeca86e655f0afce3.jpg" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/empty.png" data-src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f87_87&amp;src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210827_62%2F16300643312513fe1S_JPEG%2Fupload_07fc7f5449b8fecbeca86e655f0afce3.jpg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            제주도에서 스쿠버 다이빙 할 때 항상 방문하는 버블탱크 입니다.<br/>
                                            예약할 때 문의 드리면 친절하게 답변해 주십니다.<br/>
                                            다이빙 할 때도 신경 많이 써 주시고<br/>
                                            불편한 점 말씀 드리면 신속하게 해결해 주세요<br/>
                                            렌탈 장비 관리 철저하게 하셔서<br/>
                                            믿고 이용할 수 있어요!!
                                        </p>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.98</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">어드벤스드 코스</p>
                                                </div>
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
                                        <p class="review-text mt-2 mb-1">
                                            태풍이 올라와서 취소되진 않을까 걱정을 많이 했는데 잘챙겨주셔서 오픈워터 딸수 있었습니다ㅎㅎ<br/>
                                            맑은날이 아니라 아쉬웠지만 어드밴스드 딸때는 날씨요정이 함께 해주기를 기대합니다...ㅎㅎ<br/>
                                            잡아주신 숙소도 버블탱크 바로 앞에 있어서 넘 좋았어요.<br/>
                                            깔끔하고 호텔사장님도 엄청 친절하셨어요ㅋ<br/>
                                            그리고 버블탱크 샤워실에 스킨로션에 샴푸,린스,바디워시,클렌징폼, 머리끈까지 구비되어 있었습니다.<br/>
                                            세심함에 치였슴당💕
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.5</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end">섬 다이빙</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="text-end">조윤구</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.20</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <a href="https://myplace-phinf.pstatic.net/20210824_287/1629760530492Jfami_JPEG/upload_b0549f411c1a65e230ea73a17359faae.jpeg" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/empty.png" data-src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f87_87&amp;src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210824_287%2F1629760530492Jfami_JPEG%2Fupload_b0549f411c1a65e230ea73a17359faae.jpeg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            강의듣는 내내 사진,동영상 많이찍어주셔서  좋았어요 !!  시설도깔끔하고  강사분들도 재밌고 친절해서 좋았습니다~  앞으로 제주도오면 많이 애용할듯! 자주자주 방문하겠습니다. 다음에 또 가면 잘알려주세요~
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">17개 리뷰</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div class="star-area mt-4 text-center">
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
            </div>
            <div class="text-center color-gray mt-2 mb-3">이 다이빙 센터는 어떠셨나요?</div>
            <div class="me-4 ms-4" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다른 다이버들에게 도움이 되어보세요.</p>
                <p class="mb-0 color-highlight">지금 리뷰남기기 <i class="fas fa-chevron-right ms-1"></i></p>
            </div>
        </div>




        <!--<div class="card card-style">
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
        -->
        

        
        <div data-menu-load="/static/menu-footer.html"></div>

    </div>


    <!-- End of Page Content--> 
    <!-- All Menus, Action Sheets, Modals, Notifications, Toasts, Snackbars get Placed outside the <div class="page-content"> -->

    <!-- Menu Share -->
    <div id="menu-share" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">공유</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
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
    <div id="menu-direction" class="menu menu-box-bottom rounded-half">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">오시는 길</h2>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
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
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
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

        {
            var position = {lat: 33.22900114645303, lng: 126.56260977136935};
            const title = '문섬 포인트';
            const star = '4.3';
            const img = '/static/images/point/ko/jeju_munisland_06.jpg';
            

            var marker_point = new google.maps.Marker({
                map: this.map,
                position: position,
                label: {text: title, color: 'white', className: 'marker-position2'},
                icon: new google.maps.MarkerImage('/static/images/ico_pin2.png',null, null, null, new google.maps.Size(38,43)),
            });
            marker_point.addListener("click", () => {
                $(".map-box").removeClass("hide");
                for (var j=0; j<this.marker_list.length; j++) {
                    var _icon = this.marker_list[j].getIcon();
                    if (_icon.size.width != 38) {
                        this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                        try {
                            this.marker_list[j].setLabel({text: title, color: 'white', className: 'marker-position2'});
                        } catch (e) {
                        }
                    }
                }

                $("#map_box_shop_name").text(title);
                $("#map_box_shop_star").text(star);
                $("#map_box_shop_img").attr("src", img);
                
                
                marker_point.setIcon(new google.maps.MarkerImage('/static/images/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
                marker_point.setLabel({text: title, color: 'white', className: 'marker-position2 mt-86'});
                this.map.panTo(marker_point.getPosition());
                //if (this.map.getZoom() == 17) {
                //} else {
                //    this.map.setZoom(17);
                //    this.map.setCenter(marker_point.getPosition());
                //}
            });
            this.marker_list.push(marker_point);
        }
        this.map.addListener("click", (e) => {
            $(".map-box").addClass("hide");
            for (var j=0; j<this.marker_list.length; j++) {
                var _icon = this.marker_list[j].getIcon();
                if (_icon.size.width != 38) {
                    this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/ico_pin2.png', null, null, null, new google.maps.Size(38,43)));
                    var _title = this.marker_list[j].getLabel().text;
                    this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position2'});
                }
            }
        });
    };

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
        map: null,
        marker_list: [],

        point_list : [
            {title: "말미잘동산", type: 'df', desc: "동해의 명물 섬유세닐말미잘이 유난히 많은 포인트로, 모래 지형 위에 커다란 암반과 크고 작은 바위들이 형성되어 있는 포인트 입니다. 섬유세닐말미잘은 낮은 수온에서 펴기 때문에 6월 이전에 방문한다면 이 포인트의 아름다움을 제대로 느낄 수 있습니다.", star: 4.6, img1: 'https://divingholic.com/wp-content/uploads/2019/02/maxresdefault-1.jpg', img2: 'https://diverz.net/data/diving/point/202102/1614156788_8f436f8c0dc8a574611b_thumb_760_504.jpg', img3: 'https://divingholic.com/wp-content/uploads/2019/02/2%EC%9B%94%EC%9D%B8%EA%B5%AC%ED%95%B4%EB%B3%80%EB%94%A5.jpg', position: {lat: 37.9668859063654, lng: 128.79946317636166}},
            {title: "철재삼동", type: 'df', desc: "여름철 동해의 상징은 볼락이라고 할 수 있습니다. 그중에서도 수많은 볼락이 태풍처럼 있다고 해서 볼락태풍이라는 별명을 가진 포인트가 철재삼동 포인트 입니다. 초여름에서 초가을까지 3달정도되는 기간에 20m전후 수심, 11~15도의 수온 삼박자가 맞아떨어지면 거대한 볼락 떼를 만날 수 있습니다.", star: 4.3, img1: '/static/images/point/ko/yangyang_chuljesamdong_01.jpg', img2: '/static/images/point/ko/yangyang_chuljesamdong_02.jpg', img3: '/static/images/point/ko/yangyang_chuljesamdong_03.jpg', position: {lat: 37.947207012548716, lng: 128.81497292286326}},
            {title: "하우스리프", type: 'sf', desc: "동해바다는 모래바닥에 재미없는 곳이라고 생각하시나요? 하우스리프 포인트는 1~2명의 다이버가 통과할 수 있는 박원 삼각 뿔 어초와 식빵 어초, W 어초, M어초, 평상어초가 있으며, 자연암반과 어우러져 물고기도 많고 다양한 종류의 어초와 고착생물을 보는 재미가 쏠쏠한 포인트 입니다.", star: 4.2, img1: '/static/images/point/ko/yangyang_houseleaf_01.jpg', img2: '/static/images/point/ko/yangyang_houseleaf_02.jpg', img3: '/static/images/point/ko/yangyang_houseleaf_03.jpg', position: {lat: 37.94825610969583, lng: 128.7946310508101}},
            {title: "오대산", type: 'sf', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.942265902352936, lng: 128.81437210807638}},
            {title: "용궁1", type: 'df', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.966694517671925, lng: 128.80091977131866}},
            {title: "용궁2", type: 'df', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.98870094701705, lng: 128.80553232201584}},
            {title: "대목1", type: 'sf', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.99262313926249, lng: 128.77955637861592}},
            {title: "정글1", type: 'df', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.965163390164456, lng: 128.8213121007167}},
            {title: "정글2", type: 'df', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 37.97587456645468, lng: 128.80344144106112}},
            {title: "웰빙", type: 'sf', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 38.00150165886583, lng: 128.7445432664312}},
            {title: "리멤버", type: 'sf', desc: "", star: 4.3, img1: '', img2: '', img3: '', position: {lat: 38.0118827612431, lng: 128.74771900182654}},
        ],
    }
  }, methods: {
      call: function() {
          console.log("call");
      },
      goCourse: function() {
          location.href='/course';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(/static/images/question.png);text-indent: -9999px;}

.span_feature {width:66px;}
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

.icon-service {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/wedive_service2.png);background-repeat: no-repeat;-webkit-background-size: 270px 200px;background-size: 270px 200px;}

.ico_equipt {}
.ico_equipt1 {width: 60px;height: 63px;background-position: 0px 3px;}
.ico_equipt2 {width: 60px;height: 63px;background-position: -56px 3px;}
.ico_equipt3 {width: 60px;height: 63px;background-position: -112px 3px;}
.ico_equipt4 {width: 60px;height: 63px;background-position: -168px 3px;}
.ico_equipt5 {width: 60px;height: 63px;background-position: -224px 3px;}
.ico_equipt6 {width: 60px;height: 63px;background-position: -280px 3px;}
.ico_equipt7 {width: 60px;height: 63px;background-position: 0px -54px;}
.ico_equipt8 {width: 60px;height: 63px;background-position: -56px -54px;}
.ico_equipt9 {width: 60px;height: 63px;background-position: -112px -54px;}
.ico_equipt10 {width: 60px;height: 63px;background-position: -168px -54px;}
.ico_equipt11 {width: 60px;height: 63px;background-position: -222px -56px;}
.ico_equipt12 {width: 60px;height: 63px;background-position: -280px -54px;}
.ico_equipt13 {width: 60px;height: 63px;background-position: 0px -110px;}
.ico_equipt14 {width: 60px;height: 63px;background-position: -56px -110px;}
.ico_equipt15 {width: 60px;height: 63px;background-position: -112px -110px;}
.ico_equipt16 {width: 60px;height: 63px;background-position: -168px -110px;}
.ico_equipt17 {width: 60px;height: 63px;background-position: -224px -110px;}
.ico_equipt18 {width: 60px;height: 63px;background-position: -280px -110px;}
.ico_equipt19 {width: 60px;height: 63px;background-position: 0px -168px;}
.ico_equipt20 {width: 60px;height: 63px;background-position: -56px -170px;}
.ico_equipt21 {width: 60px;height: 63px;background-position: -112px -168px;}
.ico_equipt22 {width: 60px;height: 63px;background-position: -168px -168px;}
.ico_equipt23 {width: 60px;height: 63px;background-position: -224px -168px;}
.ico_equipt24 {width: 60px;height: 63px;background-position: -280px -168px;}
.ico_equipt25 {width: 60px;height: 63px;background-position: 0px -224px;}
.ico_equipt26 {width: 60px;height: 63px;background-position: -56px -224px;}
.ico_equipt27 {width: 60px;height: 63px;background-position: -112px -224px;}
.ico_equipt28 {width: 60px;height: 63px;background-position: -168px -224px;}
.ico_equipt29 {width: 60px;height: 63px;background-position: -224px -224px;}
.ico_equipt30 {width: 60px;height: 63px;background-position: -280px -224px;}
.ico_equipt31 {width: 60px;height: 63px;background-position: 0px -280px;}
.ico_equipt32 {width: 60px;height: 63px;background-position: -58px -280px;}
.ico_equipt33 {width: 60px;height: 63px;background-position: -112px -280px;}
.ico_equipt34 {width: 60px;height: 63px;background-position: -168px -280px;}
.ico_equipt35 {width: 60px;height: 63px;background-position: -224px -280px;}
.ico_equipt36 {width: 60px;height: 63px;background-position: -280px -280px;}
.icon-equiptment {overflow: hidden;display: block;margin-left: 3px;background-image: url(/static/images/assets/wedive_equiptment2.png);background-repeat: no-repeat;-webkit-background-size: 335px 350px;background-size: 335px 350px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('/static/images/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:inline-block;}
.min-h-230 {min-height: 210px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.font-noto {font-family: 'Noto Sans Korean'}
.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}
.point_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.wedive-comment-number {float: left;position: relative;width: 20px;}
.wedive-comment-desc {padding-left: 30px;}
</style>
