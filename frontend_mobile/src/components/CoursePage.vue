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
                        <i class="fas fa-box-open font-14 color-highlight me-1"></i>
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
                                    <h5 class="font-300 mb-3">
                                        센터 도착 후 슈트착용 후 항으로 이동
                                    </h5>
                                    <img data-src="/static/images/diving_exp1.jpg" alt="img" src="/static/images/diving_exp1.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>					

                            <div class="timeline-item">
                                <i class="fas fa-ship bg-yellow-dark shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300">
                                        항에서 배를 타고 섬으로 이동
                                    </h5>
                                    <img data-src="/static/images/diving_exp2.jpg" alt="img" src="/static/images/diving_exp2.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>		

                            <div class="timeline-item">
                                <i class="fas fa-graduation-cap bg-green-dark shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300">
                                        사전 교육 진행
                                    </h5>
                                    <img data-src="/static/images/diving_exp3.jpg" alt="img" src="/static/images/diving_exp3.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>		

                            <div class="timeline-item">
                                <i class="fas fa-swimmer bg-pinterest shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300">
                                        장비 착용 후 수면에서 스쿠버교육
                                    </h5>
                                    <img data-src="/static/images/diving_exp4.jpg" alt="img" src="/static/images/diving_exp4.jpg" class="preload-img rounded-s img-fluid">
                                </div>
                            </div>	

                            <div class="timeline-item">
                                <i class="fas fa-fish bg-twitter shadow-l timeline-icon"></i>
                                <div class="timeline-item-content rounded-sm">
                                    <h5 class="font-300">
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
            <div class="content">
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

                <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2">예약하기</a>
                

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
.span_feature {width:66px;}
.text-urgent {color:#de5246; background-color: #ffebe9;padding: 2px 8px;border-radius:2px;}

.square-img {width: 100%;height: 0px;padding: 50% 0;background-size: 100% 100%;background-clip: border-box;box-sizing:border-box;}
.txt_box {background: #f4f4f4; border-radius: .5rem;padding: 14px 20px;}



.timeline-item .timeline-icon {top: -10px !important;}
.timeline-item-content, .timeline-item-content-full {border: none !important;background-color: transparent!important;padding: 0 !important;}
</style>
