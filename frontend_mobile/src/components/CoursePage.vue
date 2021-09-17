<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-center" data-menu-load=""></div>    
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
        <div class="card card-full rounded-l pb-4">
                     
            <div class="content mt-3">
                <div class="mt-2 mb-3">
                    <div class="align-self-center text-center">
                        <h1 class="font-20 mb-0 font-600">보트 체험 다이빙</h1>
                        <div class="mt-n1">
                            <span class="chip chip-s bg-gray-light-mid text-center" style="padding-left: 16px;margin: 0px 4px 0px 0px;">오전 반일</span>
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
                
                
                
                <div class="divider"></div>
                <div class="ms-2 me-2">
                    <h6>
                        <i class="fas fa-box-open font-14 color-highlight me-1"></i>
                        <span class="font-14">포함 사항</span>
                    </h6>
                    <div class="row text-start">
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
                
            <div class="divider"></div>


            <div class="content" id="tab-group-2">
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-info">코스 정보</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">상세 일정</a>
                </div>
                
                <div data-bs-parent="#tab-group-2" class="collapse text-start px-2 show" id="tab-info">
                    
                    <div class="vcard-field line-height-l pb-3 mt-3">
                        <strong>소요 시간</strong>
                        <span>약 3시간</span>
                        <i class="fas fa-credit-card color-blue2-dark mt-n2"></i>
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
            </div>





            <div class="divider"></div>
            <div class="">
                <div class="content"> 
                    <h4 class="text-start pt-2 mb-3">사진</h4>
                </div>

                <div class="gallery-view-controls">
                    <div class="divider mb-0"></div>
                    <a href="#" class="gallery-view-1"><i class="fa fa-th"></i></a>
                    <a href="#" class="color-highlight gallery-view-2"><i class="fa fa-th-large"></i></a>
                    <a href="#" class="gallery-view-3"><i class="fa fa-bars"></i></a>
                    <div class="clearfix"></div>
                </div>
                <div class="content my-n1">
                    <div class="gallery-views gallery-view-2">
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test1.jpg" title="Vynil and Typerwritter">
                            <div style="background-image: url(/static/images/shop1/diving/test1.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test2.jpg" title="Fruit Cookie Pie">
                            <div style="background-image: url(/static/images/shop1/diving/test2.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>		
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test3.jpg" title="Plain Cookies and Flour">
                            <div style="background-image: url(/static/images/shop1/diving/test3.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>	
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test4.jpg" title="Pots and Stuff">
                            <div style="background-image: url(/static/images/shop1/diving/test4.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test5.jpg" title="Pots and Stuff">
                            <div style="background-image: url(/static/images/shop1/diving/test5.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test6.jpg" title="Delicious Strawberries">
                            <div style="background-image: url(/static/images/shop1/diving/test6.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>
                        <a data-gallery="gallery-1" href="/static/images/shop1/diving/test7.jpg" title="A Beautiful Camera">
                            <div style="background-image: url(/static/images/shop1/diving/test7.jpg);" class="rounded-m preload-img shadow-l img-fluid square-img" ></div>
                            <div class="caption">
                            </div>
                        </a>			
                    </div>
                </div>
            </div>
            
            
            <div class="divider"></div>
            
            <div>
                포인트 선택 옵션 리스트
            </div>

            <div class="divider"></div>
            <div>
                탭1: 
                소요시간 / 물속 체험시간
                과정 : 시간표

                탭2:
                포인트 상세 동적으로 해야하나
            </div>

            <div class="divider"></div>
            <div>
                옵션 : 숙박 /무제한 / 렌탈비 / 동방파제 사전예약 필수 정보 등
            </div>

            <div class="divider"></div>
            <div class="content">
                <div class="divider"></div>
                <div class="ms-2 me-2">
                    <h6 class="font-15 font-400 mb-2 color-gray"><i class="fas fa-exclamation-triangle color-yellow-dark icon-20"></i>유의 사항</h6>
                    <p>
                    · 시작 전 12시간 이내의 음주를 자제해주세요.<br/>
                    · 심혈관 질환 및 건강 이상자는 안전사으이 이유로 신청이 불가합니다.<br/>
                    · 코스 진행 후 18시간 이후 비행기 탑승이 가능합니다..<br/>
                    </p>
                </div>
            </div>


            <div class="content">
                <a href="#" data-menu="order-1">
                    <div class="d-flex mb-4">
                        <div class="align-self-center">
                            <img src="/static/images/pictures/6.jpg" class="rounded-m me-3" width="90">
                        </div>
                        <div class="align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">Bacon and Ham Double Cheeseburger</h2>
                            <p class="mb-0 font-11 mt-2">
                                <i class="fa fa-heart color-red-dark pe-1"></i>3 Extras
                                <i class="fa fa-truck color-green-dark pe-1 ps-2"></i>25 Minutes
                            </p>
                            <span class="d-block pt-1 font-11">Edit Order Details</span>
                        </div>
                        <div class="ms-auto ps-3 align-self-center">
                            <h2 class="font-18">$25.30</h2>
                        </div>
                    </div>
                </a>
                <a href="#" data-menu="order-2">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <img src="/static/images/pictures/6.jpg" class="rounded-m me-3" width="90">
                        </div>
                        <div class="align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">Classic Crust House Special Pizza</h2>
                            <p class="mb-0 font-11 mt-2">
                                <i class="fa fa-bullseye color-brown-dark pe-1"></i>Large
                                <i class="fa fa-truck color-green-dark pe-1 ps-2"></i>45 Minutes
                            </p>
                            <span class="d-block pt-1 font-11">Edit Order Details</span>
                        </div>
                        <div class="ms-auto ps-3 align-self-center">
                            <h2 class="font-18">$15.32</h2>
                        </div>
                    </div>
                </a>
                <a href="#" data-menu="order-3">
                    <div class="d-flex mb-3">
                        <div class="align-self-center">
                            <span class="badge bg-green-dark position-absolute bottom-0 font-12 rounded-0 py-1">5 pcs</span>
                            <img src="/static/images/pictures/6.jpg" class="rounded-m me-3" width="90">
                        </div>
                        <div class="align-self-center">
                            <h2 class="font-15 line-height-s mt-1 mb-n1">Fresh Starwberries</h2>
                            <p class="mb-0 font-11 mt-2">
                                <i class="fa fa-plus-circle color-green-dark pe-1"></i>3 Pieces
                                <i class="fa fa-truck color-green-dark pe-1 ps-2"></i>10 Minutes
                            </p>
                            <span class="d-block pt-1 font-11">Edit Order Details</span>
                        </div>
                        <div class="ms-auto ps-3 align-self-center">
                            <h2 class="font-18">$11.50</h2>
                        </div>
                    </div>
                </a>
            </div>
            
        
            <a href="#" class="btn btn-full me-3 ms-3 btn-l font-13 font-600 rounded-s shadow-l mb-4 gradient-highlight">Place Order</a>

            <div class="divider divider-margins"></div>
            
            <div class="content mt-0">
                <p class="mb-n1 color-highlight font-600 mb-n1">Great choice to </p>
                <h2>Add to your Order</h2>
                <p>Products you may also like based on what you're currently looking at.</p>
            </div>
            <div class="splide double-slider slider-no-dots" id="double-slider-1">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide">
                            <div data-card-height="200" class="card mx-3 rounded-m shadow-l" style="background-image:url('/static/images/pictures/6.jpg')">
                                <div class="card-bottom text-center">
                                    <h2 class="color-white font-700 font-20 mb-3">Sauces</h2>
                                    <a href="#" class="btn btn-xs btn-full font-13 font-600 gradient-highlight rounded-s me-2 ms-2 mb-2">View</a>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </div>
                        <div class="splide__slide">
                            <div data-card-height="200" class="card mx-3 rounded-m shadow-l" style="background-image:url('/static/images/pictures/6.jpg')">
                                <div class="card-bottom text-center">
                                    <h2 class="color-white font-700 font-18 mb-3">Dessert</h2>
                                    <a href="#" class="btn btn-xs btn-full font-13 font-600 gradient-highlight rounded-s me-2 ms-2 mb-2">View</a>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </div>
                        <div class="splide__slide">
                            <div data-card-height="200" class="card mx-3 rounded-m shadow-l" style="background-image:url('/static/images/pictures/6.jpg')">
                                <div class="card-bottom text-center">
                                    <h2 class="color-white font-700 font-18 mb-3">Beverages</h2>
                                    <a href="#" class="btn btn-xs btn-full font-13 font-600 gradient-highlight rounded-s me-2 ms-2 mb-2">View</a>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- Page content ends here-->
        
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
  },
  created() {
    
  },
  data () {
    return {
        
    }
  }, methods: {
      
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

.icon-course {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/wedive_course2.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}
.span_feature {width:66px;color: #727272;}
.text-urgent {color:#de5246; background-color: #ffebe9;padding: 2px 8px;border-radius:2px;}

.square-img {width: 100%;height: 0px;padding: 50% 0;background-size: 100% 100%;background-clip: border-box;box-sizing:border-box;}
.txt_box {background: #f4f4f4; border-radius: .5rem;padding: 14px 20px !important;}
</style>
