<template>
  <div class="mb-5">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-shopping" data-menu-load=""></div>    
    

    <div class="card card-style bg-transparent shadow-0 mb-2 rounded-sm">
        <div class="mt-n3 mb-2">
            <div class="search-box search-dark shadow-sm border-0 mt-4 bg-theme rounded-sm bottom-0">
                <i class="fa fa-search ms-1"></i>
                <input type="text" class="border-0" placeholder="상품을 검색해보세요 'pizza'처럼요" data-search>
            </div>   
            <div class="search-results disabled-search-list">
                <div>
                    <a href="#" data-filter-item data-filter-name="all food burger cheese ham bacon">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/1s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">Cheesy Hamburger <br> with Bacon and Ham</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 20 Minutes
                                </p>
                            </div>
                            <div class="ms-auto ps-3 align-self-center text-center">
                                <h2 class="font-18 mb-n2">$14.75</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>          
                    <a href="#" data-filter-item data-filter-name="all food fries chicken breast fried">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/8s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">Chicken Crispy <br> Strips with Fries</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 25 Minutes
                                </p>
                            </div>
                            <div class="ms-auto ps-3 align-self-center text-center">
                                <h2 class="font-18 mb-n2">$23.44</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>
                    <a href="#" data-filter-item data-filter-name="all food pizza special house">
                        <div class="d-flex mt-4">
                            <div class="align-self-center">
                                <img src="images/food/small/2s.jpg" class="rounded-m me-3" width="80">
                            </div>
                            <div class="align-self-center">
                                <h2 class="font-15 line-height-s mt-1 mb-n1">House Special <br> Classic Crust Pizza</h2>
                                <p class="mb-0 font-11 mt-2 line-height-s">
                                    <i class="fa fa-truck color-brown-dark pe-2"></i>Ready in 43 Minutes
                                </p>
                            </div>
                            <div class="ms-auto align-self-center text-center">
                                <h2 class="font-18 mb-n2">$17.25</h2>
                                <span class="color-highlight font-9">per serving</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="search-no-results disabled mt-4">
            <div class="card card-style">
                <div class="content">
                    <h1>No Results</h1>
                    <p>
                        Your search brought up no results. Try using a different keyword. Or try typying all 
                        to see all items in the demo. These can be linked to anything you want.
                    </p>
                </div>
            </div>
        </div>
    </div>


    <div class="bg-white" id="tab-group-1">
        <div id="tab-group1-header" style="z-index:999">
        <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
            <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1" style="border-radius:0;padding:3px 0px;">투데이</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2" style="border-radius:0;padding:3px 0px;">프리다이빙</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-3" style="border-radius:0;padding:3px 0px;">스쿠버다이빙</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-4" style="border-radius:0;padding:3px 0px;">핫딜</a>
        </div>
        <div class="splide topic-slider slider-no-arrows slider-no-dots " id="topic-slider-1">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme">슈트</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">핀</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">마스크/스노클</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">장갑/삭스/후드</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">부이시스템</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">웨이트시스템</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">이퀄라이징</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">가방</a></h1>
                    </div>
                    <div class="splide__slide hei-30">
                        <h1 class="font-13 d-block menu-slide"><a href="#" class="color-theme opacity-50">악세서리</a></h1>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="clearfix mb-3"></div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white show" id="tab-1">
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-2">
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-3">
        </div>
    </div>







    <div class="card card-style" style="background: #5ec9bb;">
        <div class="mb-0 mt-0 mb-1 ms-2">
            <div class="d-flex">
                <img class="me-2" src="https://cdn3d.iconscout.com/3d/premium/thumb/gift-box-3825105-3202861.png" width="110" />
                <div class="flex-grow-1">
                    <h4 class="pt-3 mb-0 font-600 color-white">날이좋아서</h4>
                    <p class="color-white mb-1 mt-n1">위다이브가 특별쿠폰을 준비했어요.</p>
                    <div class="me-3">
                    <div class="wedive-coupon bg-white">
                        선착순 쿠폰 받기
                        <i class="fas fa-chevron-right float-right"></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>






    <div class="content mb-0">
        <h4 class="text-start pt-2 mb-2">회원님을 위한 추천상품</h4>
        <div class="row mb-0">
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_detail_8.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect1.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect2.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect3.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
        </div>
        
    </div>
    
    <div class="divider divider-margins mb-3"></div>

    <div class="content mt-0 mb-0">
        <div class="d-flex">
            <div class="align-self-center">
                <h4 class="text-start pt-2 mb-2">HOT <img src="https://cdn3d.iconscout.com/3d/premium/thumb/confetti-4024963-3337583.png" width="24"/> 할인폭이 큰 상품 모음</h4>
            </div>
            <div class="ms-auto align-self-center">
                <a href="#" class="float-end font-12 font-400 color-highlight">모두보기</a>
            </div>
        </div>
    </div>
    
    <div class="splide double-slider visible-slider slider-no-arrows slider-no-dots mb-4 ps-2" id="double-slider-1">
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <div class="card m-2 card-style rounded-sm no-shadow">
                        <div class="square-rect">
                            <img src="/static/images/shopping/item1/shop_detail_2.jpg" class="img-fluid">
                        </div>
                    </div>
                    <div class="p-2 pt-0 bg-theme rounded-sm">
                        <h2 class="font-15 font-noto font-800 letter-short"><font class="font-14 font-600 color-shopping me-1">20%</font>472,000</h2>
                        <h5 class="font-13 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                        <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                    </div>
                </div>
                <div class="splide__slide">
                    <div class="card m-2 card-style rounded-sm no-shadow">
                        <div class="square-rect">
                            <img src="/static/images/shopping/item1/shop_detail_3.jpg" class="img-fluid">
                        </div>
                    </div>
                    <div class="p-2 pt-0 bg-theme rounded-sm">
                        <h2 class="font-15 font-noto font-800 letter-short"><font class="font-14 font-600 color-shopping me-1">20%</font>472,000</h2>
                        <h5 class="font-13 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                        <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                    </div>
                </div>
                <div class="splide__slide">
                    <div class="card m-2 card-style rounded-sm no-shadow">
                        <div class="square-rect">
                            <img src="/static/images/shopping/item1/shop_detail_4.jpg" class="img-fluid">
                        </div>
                    </div>
                    <div class="p-2 pt-0 bg-theme rounded-sm">
                        <h2 class="font-15 font-noto font-800 letter-short"><font class="font-14 font-600 color-shopping me-1">20%</font>472,000</h2>
                        <h5 class="font-13 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                        <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="divider divider-margins mb-3"></div>



    <div class="content mb-0">
        <h4 class="text-start pt-2 mb-2">오늘의 추천상품</h4>
        <div class="row mb-0">
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_detail_8.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect1.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect2.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
            <div class="col-6 pe-2 mb-5" v-on:click="goShopDetail()">
                <div class="card card-style mx-0 mb-0 rounded-sm no-shadow">
                    <div class="square-rect">
                        <img src="/static/images/shopping/item1/shop_rect3.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="px-2">
                    <p class="color-highlight font-600 mb-n1 font-12">프리다이빙 핀</p>
                    <h2 class="font-17 font-noto font-800 letter-short"><font class="font-16 font-600 color-shopping me-1">20%</font>472,000</h2>
                    <h5 class="font-14 mb-0 ellipsis">어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자</h5>
                    <p class="font-11 line-height-s mb-0 color-gray">한국인 발모양에 딱맞는 핀</p>
                </div>
            </div>
        </div>
        
    </div>
    


    


    
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
    
    $("body").css("background-color", "#fff");
    $(".logo-image").eq(1).attr("src","/static/images/logo-shop2.svg")

    setTimeout(function() {
      window.onscroll = function() {myFunction()};
      var sticky = $("#tab-group1-header").offset().top;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          $("#tab-group1-header").addClass("sticky")
          
        } else {
          $("#tab-group1-header").removeClass("sticky")
        }
      }
    },500);
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
  },
  components: {
    
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  destroyed () {
    
  },
  data () {
    return {
      
    }
  }, methods: {
    goShopDetail: function() {
        location.href = '/shop';
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-noto {font-family: 'Noto Sans Korean'}
.px-n2 {margin-right: -0.5rem !important;margin-left: -0.5rem !important;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;object-fit: cover;}
.no-shadow {box-shadow: none !important;}
.letter-short {letter-spacing: -1.2px;}
.sticky {position: fixed;top: 0;width: 100%;}
.menu-slide {text-align: center; padding:0; margin:0;}
.hei-30 {height: 30px;background-color: white;border-bottom:1px solid rgba(0, 0, 0, 0.05);}
.wedive-coupon {color: #2269e0;border-radius: 4px;width:100%;border: 1px solid #2269e0;padding: 6px 16px;font-family: 'Noto Sans Korean'}
.float-right {float: right;margin-top:5px;}

</style>
