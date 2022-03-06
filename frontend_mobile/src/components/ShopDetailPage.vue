<template>
  <div class="mb-3 pb-5">
    <div data-menu-active="nav-shopping"></div>

    <div id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
        <div class="me-1 speach-icon">
            <div style="width: 45px;display: inline-block;position: relative;color: #ff5160;">
              <i class="far fa-heart font-16 mt-2 pt-1" style="display: block;"></i>
              <span class="mt-n1" style="display: block;">320</span>
            </div>
        </div>
        <div class="flex-fill speach-input p-2">
          <a href="#" data-menu="menu-purchase" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5 font-noto">구매하기</a>
        </div>
    </div>


    <div class="card card-style ms-0 me-0 rounded-0 mb-2" style="border-bottom: 1px solid #dee2e6 !important;box-shadow: none !important;">
      <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-top" data-card-height="250">
          <div class="splide__track">
              <div class="splide__list">
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_1.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_2.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_3.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_4.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_5.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_6.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_7.jpg)"></div></div>
                  <div class="splide__slide"><div data-card-height="250" class="card rounded-0 mb-0" style="background-image:url(/static/images/shopping/item1/shop_detail_8.jpg)"></div></div>
              </div>
          </div>
      </div>
      <div class="content">
          <div class="item_title">
              어? 이쁘다, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자
          </div>
          <div class="d-flex font-noto price-margin">
              <p class="price_percent">20%</p>
              <p class="price_dis">472,000원</p>
              <p class="price_ori">590,000원</p>
          </div>
          <div class="wedive-coupon">
            최대 100,000원 할인 쿠폰 받기
            <i class="fas fa-chevron-down float-right"></i>
          </div>

          <div class="divider mt-3 mb-3"></div>

          <div class="d-flex mb-2">
            <div class="flex-grow-1">
              <p class="mb-0 color-gray">배송정보</p>
              <p class="mb-0 font-600">마켓 자체 배송</p>
            </div>
            <div class="flex-grow-1">
              <p class="mb-0 color-gray">배송예상</p>
              <p class="mb-0 font-600">평균 3일 소요</p>
            </div>
          </div>

          <div class="wedive-package mt-2 mb-2">
            <img class="me-2" src="/static/images/shopping/package.png" width="40" /> 위다이브는 365일 <font class="font-500">전-상품 무료 배송 !</font>
          </div>
      </div>
    </div>

    
    <div class="card card-style ms-0 me-0 rounded-0 mb-2" style="border-bottom: 1px solid #dee2e6 !important;box-shadow: none !important;">
      <div class="content">
        <div class="text-center">
          <i class="ico ico-wedive-w -circle color-primary scale-box fa-4x"></i>
        </div>
        <h4 class="text-center pt-2 mb-0">wedive's comment</h4>
        <div class="justify-content-center mb-2 mt-3 text-start font-noto">
            <div class="color-gray-light-mid font-700 wedive-comment-number">01</div>
            <div class="mb-2 font-200 wedive-comment-desc">
              기존 풋포켓이 체형에 맞지 않아 불편하셨나요?<br/><font class="font-500">한국인의 발모양에 맞춰</font> 한국에서 제작한 핀 입니다.
            </div>
            <div class="color-gray-light-mid font-700 wedive-comment-number">02</div>
            <div class="mb-2 font-200 wedive-comment-desc">
              순수 카본으로 제작되어 적은 힘으로도 큰 추진력을 낼 수 있습니다.
            </div>
            <div class="color-gray-light-mid font-700 wedive-comment-number">03</div>
            <div class="mb-2 font-200 wedive-comment-desc">
              블레이드는 로고 부분을 최소화 하여 스티커로 커스덤이 가능하도록 디자인 하였습니다.
            </div>
        </div>
      </div>
    </div>


    <!--<div class="card card-style ms-0 me-0 rounded-0 mb-2" style="border-bottom: 1px solid #dee2e6 !important;box-shadow: none !important;">-->
      <div class="bg-white" id="tab-group-1">
        <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight" id="tab-group1-header" style="z-index:999">
            <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1" style="border-radius:0;padding:3px 0px;">상품정보</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2" style="border-radius:0;padding:3px 0px;">리뷰</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-3" style="border-radius:0;padding:3px 0px;">연관상품</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-4" style="border-radius:0;padding:3px 0px;">문의/안내</a>
        </div>
        <div class="clearfix mb-3"></div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white show" id="tab-1">
          <div class="item_desc height-1100">
            <img src="/static/images/shopping/item1/content.jpg" style="padding: 0;"/>
            <img src="/static/images/shopping/item1/shop_portrate_1.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_2.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_3.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_4.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_5.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_6.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_7.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_8.jpg" />
            <img src="/static/images/shopping/item1/shop_portrate_9.jpg" />
            
            <img src="/static/images/shopping/item1/shop_rect1.jpg" />
            <img src="/static/images/shopping/item1/shop_rect2.jpg" />

            <div class="product-info measurement-image">
              <picture>
                <img src="/static/images/shopping/fin.jpg" />
              </picture>
              <p title="좌우길이" class="measurement-spots__item" style="bottom: 16%; left: -11%;">190mm</p>
              <p title="높이" class="measurement-spots__item" style="bottom: 57%; right: -30%;">650mm</p>
            
            </div>
            <div class="product-info">
              <table class="table-wedive-product mt-3">
                <tr><th></th><th>3mm삭스</th><th>1mm삭스/맨발</th></tr>
                <tr><th>2호</th><td>220mm</td><td>230mm</td></tr>
                <tr><th>3호</th><td>230mm</td><td>240mm</td></tr>
                <tr><th>4호</th><td>240mm</td><td>250mm</td></tr>
                <tr><th>5호</th><td>250mm</td><td>260mm</td></tr>
                <tr><th>6호</th><td>260mm</td><td>270mm</td></tr>
                <tr><th>7호</th><td>270mm</td><td>280mm</td></tr>
                <tr><th>8호</th><td>280mm</td><td>290mm</td></tr>
              </table>
            </div>
          </div>
          <div id="view-more">
            <button v-on:click="viewMore()" type="button" id="btn-more">상세정보 더보기</button>
          </div>
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-2">
          <div>
            <div class="row pt-3 pb-3">
              <div class="text-center col-6">
                <p class="font-16 mb-3 font-noto">사용자 총 평점</p>
                <p class="mb-0 font-30 font-600 font-noto">4.7</p>
                <div class="wedive-star-back">
                  <div class="wedive-star-front" style="width:65.39999999999999%">
                    </div>
                </div>
              </div>
              <div class="text-center col-6">
                <p class="font-16 mb-3 font-noto">평점비율</p>
                  <div class="wedive-score-wrapper">
                    <ul class="wedive-score-ul">
                      <li class="wedive-score-li">
                        <div class="wedive-score-inner-div">
                          <span class="wedive-score-inner-div-span" style="height:84.61538461538461%">
                            <em class="wedive-score-inner-div-span-em" style="display: block;">11</em>
                          </span>
                        </div>
                        <span class="wedive-score-inner-span">5점</span>
                      </li>
                      <li class="wedive-score-li">
                        <div class="wedive-score-inner-div">
                          <span class="wedive-score-inner-div-span" style="height:7.6923076923076925%">
                            <em class="wedive-score-inner-div-span-em">1</em>
                          </span>
                        </div>
                        <span class="wedive-score-inner-span">4점</span>
                      </li>
                      <li class="wedive-score-li">
                        <div class="wedive-score-inner-div">
                          <span class="wedive-score-inner-div-span" style="height:7.6923076923076925%">
                            <em class="wedive-score-inner-div-span-em">1</em>
                          </span>
                        </div>
                        <span class="wedive-score-inner-span">3점</span>
                      </li>
                      <li class="wedive-score-li">
                        <div class="wedive-score-inner-div">
                          <span class="wedive-score-inner-div-span" style="display:none">
                            <em class="wedive-score-inner-div-span-em">0</em>
                          </span>
                        </div>
                        <span class="wedive-score-inner-span">2점</span>
                      </li>
                      <li class="wedive-score-li">
                        <div class="wedive-score-inner-div">
                          <span class="wedive-score-inner-div-span" style="display:none">
                            <em class="wedive-score-inner-div-span-em">0</em>
                          </span>
                        </div>
                        <span class="wedive-score-inner-span">1점</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>


            <div class="review-area">
              <div class="p-2 pt-3 border-top">
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
                        <img src="/static/images/assets/empty.png" data-src="https://search.pstatic.net/common/?autoRotate=true&amp;quality=95&amp;type=f87_87&amp;src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210827_62%2F16300643312513fe1S_JPEG%2Fupload_07fc7f5449b8fecbeca86e655f0afce3.jpg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                    </a>
                    샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 샀는데 만족해요~ 블라블라 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-3">
          <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-4">
          <div>
            <p class="color-gray-light-mid font-13 mb-3">
              <i class="fas fa-question-circle me-2"></i>상품 사이즈 및 옵션에 대해 궁금한점이 있으신가요?<br/>
              <i class="fas fa-question-circle me-2 color-white"></i>상품 배송일정에 대해 궁금한점이 있으신가요?
            </p>
            
            <p class="color-gray mb-2"><i class="fas fa-exclamation-circle me-2"></i>아래 상품코드를 알려주시면 더 빠른 안내를 받으실 수 있어요.</p>
            <div class="wedive-package mb-4 pt-2 pb-2 font-16" style="font-weight: 500;">
              상품코드 3391-12034-02
            </div>
            <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5">문의하기</a>
            <br/>
          </div>
        </div>
      </div>
    <!--</div>-->


    <!-- Menu purchase -->
    <div id="menu-purchase" class="menu menu-box-bottom rounded-half" data-menu-height="500">
        <div class="content mb-0 text-start" style="position: relative;">
          <div class="input-style no-borders has-icon validate-field mb-3 hide">
              <i class="fas fa-id-card-alt color-gray"></i>
              <input type="name" class="form-control validate-name" id="form0" placeholder="닉네임">
              <label for="form0" class="color-highlight">닉네임</label>
              <i class="fa fa-times disabled invalid color-red-dark"></i>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <em>(필수입력)</em>
          </div>
          
          <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
              <i class="fas fa-venus-mars color-gray"></i>
              <label for="form1" class="color-highlight">풋포켓 색상</label>
              <select id="form1" required @change="onOptionChange($event, 'color-footpocket')">
                  <option value="" selected disabled>풋포켓 색상</option>
                  <option value="화이트">화이트</option>
                  <option value="블랙">블랙</option>
              </select>
              <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <i class="fa fa-check disabled invalid color-red-dark"></i>
              <em></em>
          </div>

          <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
              <i class="fas fa-venus-mars color-gray"></i>
              <label for="form2" class="color-highlight">풋포켓 사이즈</label>
              <select id="form2" required @change="onOptionChange($event, 'size-footpocket')">
                  <option value="" selected disabled>풋포켓 사이즈</option>
                  <option value="2호">2호</option>
                  <option value="3호">3호</option>
                  <option value="4호">4호</option>
                  <option value="5호">5호</option>
                  <option value="6호">6호</option>
                  <option value="7호">7호</option>
                  <option value="8호">8호</option>
              </select>
              <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <i class="fa fa-check disabled invalid color-red-dark"></i>
              <em></em>
          </div>


          <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
              <i class="fas fa-venus-mars color-gray"></i>
              <label for="form3" class="color-highlight">블레이드 색상</label>
              <select id="form3" required @change="onOptionChange($event, 'color-blade')">
                  <option value="" selected disabled>블레이드 색상</option>
                  <option value="화이트">화이트</option>
                  <option value="골드">골드</option>
                  <option value="실버">실버</option>
                  <option value="핑크">핑크</option>
                  <option value="레드">레드</option>
              </select>
              <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <i class="fa fa-check disabled invalid color-red-dark"></i>
              <em></em>
          </div>

          <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
              <i class="fas fa-venus-mars color-gray"></i>
              <label for="form4" class="color-highlight">워터레일 색상</label>
              <select id="form4" required @change="onOptionChange($event, 'color-waterrail')">
                  <option value="" selected disabled>워터레일 색상</option>
                  <option value="P0000BIU000A">White</option>
                  <option value="P0000BIU000B">Black</option>
                  <option value="P0000BIU000C">Silver</option>
                  <option value="P0000BIU000D">Gold</option>
                  <option value="P0000BIU000E">Red</option>
                  <option value="P0000BIU000F">Pink</option>
                  <option value="P0000BIU000G">DoubleK Blue</option>
                  <option value="P0000BIU000H">Blue</option>
                  <option value="P0000BIU000I">Purple</option>
                  <option value="P0000BIU000J">Neon Orange</option>
                  <option value="P0000BIU000K">Neon Yellow</option>
                  <option value="P0000BIU000L">Neon Coral</option>
                  <option value="P0000BIU000M">Burgundy</option>
                  <option value="P0000BIU000N">Pea Green</option>
                  <option value="P0000BIU000O">Deep Green</option>
                  <option value="P0000BIU000P">Dark Gray</option>
                  <option value="P0000BIU000Q">Basil Mint</option>
                  <option value="P0000BIU000R">Clear</option>
              </select>
              <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
              <i class="fa fa-check disabled valid color-green-dark"></i>
              <i class="fa fa-check disabled invalid color-red-dark"></i>
              <em></em>
          </div>

        </div>
        <a href="#" class="btn btn-border btn-full mb-3 rounded-sm font-500 border-gray-dark color-gray bg-theme pt-2 pb-2 font-14 font-noto btn-close-option">옵션닫기</a>
    </div>





    <div id="menu-order" class="menu menu-box-bottom rounded-half" data-menu-height="500">
      <a href="#" data-menu="menu-purchase" class="btn btn-border btn-full mb-3 rounded-sm font-500 border-gray-dark color-gray bg-theme mt-3 me-3 ms-3 pt-2 pb-2 font-14 font-noto" style="margin-bottom:0;">옵션 선택하기</a>
      <div class="rounded-sm border-gray-dark m-3 p-2 ps-3 pe-3" style="border: 1px solid #AAB2BD;display: flow-root;">
        <span class="" v-for="(sel,index) in select_option">{{sel}}<span v-if="index != 'color-waterrail'"> / </span></span>

        <a href="#" class="item-order-close" v-on:click="deleteOrderItem()"><i class="wedive_icoset wedive_icoset_close_s"></i></a>
        <div class="">
          <div class="mx-auto mt-4 mb-2" style="float:left">
            <div class="stepper rounded-s float-start">
                <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                <input type="number" min="1" max="10" value="1">
                <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="font-500 font-noto font-15" style="float:right;margin-top:34px;">
            472,000원
          </div>
        </div>
      </div>

      <div class="menu-order-bottom">
        <div class="divider mb-3"></div>
        <div>
          <p class="mb-0 ms-3"><font class="font-600 font-noto me-1">1</font>개 선택</p>
          <p class="mb-0" style="float:right;margin-top:-26px;">총<span class="ms-2 me-3 font-600 font-18 font-noto color-highlight">472,000원</span></p>
        </div>
        <div class="divider mt-3 mb-3"></div>
        <div class="row m-0">
          <div class="col-6 pe-1"><a href="#" class="btn btn-border btn-full mb-3 rounded-sm font-500 border-highlight color-highlight bg-theme pt-2 pb-2 font-14 font-noto">장바구니</a></div>
          <div class="col-6 ps-1"><a href="#" class="btn btn-border btn-full mb-3 rounded-sm font-500 color-white gradient-highlight pt-2 pb-2 font-14 font-noto">구매하기</a></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
    
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    document.getElementById("footer-bar").classList.add("hide");
    $("body").css("background-color", "#f3f6f5");

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
      select_option: {'color-footpocket': '', 'size-footpocket': '', 'color-blade': '', 'color-waterrail': ''},
    }
  }, methods: {
    viewMore: function() {
      $(".item_desc").removeClass("height-1100");
      $("#view-more").addClass("hide");
    }, 
    onOptionChange: function(e, item) {
      this.select_option[item] = e.target.value;

      var flag_done = true;
      for (var key in this.select_option) {
        if (this.select_option[key] == '') {
          flag_done = false;
        }
      }
      if ( flag_done ) {
        // close all menu first
        try {
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          // jjangs close menu
          if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
          }
        } catch (e) {

        }
        // start order menu //
        var menuData = 'menu-order';
        document.getElementById(menuData).classList.add('menu-active');
        document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
        // jjangs : open menu
        if(window.location.href.split('/').pop() != 'modal'){
            window.history.pushState({}, 'modal', window.location.pathname + '/modal');
        }
      }
    },
    deleteOrderItem: function() {

    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item_title {letter-spacing: -.4px;line-height: 18px;font-size: 15px;}
.price-margin {margin-top: 16px;margin-bottom: 20px;}
.price_percent {color: #ff5160;font-weight: 500;font-size: 20px;margin-right: 1.8vw;margin-bottom:0;}
.price_dis {font-weight: 600;font-size: 20px;margin-right: 1.8vw;margin-bottom:0;}
.price_ori {font-weight: 500;font-size: 16px;text-decoration: line-through;color: #ddd;margin-bottom:0;}
.wedive-coupon {color: #2269e0;border-radius: 4px;width:100%;border: 1px solid #2269e0;padding: 6px 16px;font-family: 'Noto Sans Korean'}
.float-right {float: right;margin-top:5px;}
.wedive-package {background: #f4f4f4;padding: 2px 12px;border-radius: 4px;font-family: 'Noto Sans Korean';font-weight:200;}
.wedive-comment-number {float: left;position: relative;width: 20px;}
.wedive-comment-desc {padding-left: 30px;line-height: 22px;}
.item_desc{overflow: hidden;position: relative;}
.item_desc > img {width: 100%; padding: 12px; object-fit: contain;}
.product-info {margin: 12px;}
.product-info > picture > img {width:100%; object-fit: contain;border: 1px solid black;}
#view-more {position: relative;height: 25px;margin: -75px 0 50px;padding: 55px 12px 0;background-image: linear-gradient(0deg,#fff 29%,hsla(0,0%,100%,.43) 52%,hsla(0,0%,100%,.13) 79%,hsla(0,0%,100%,0));}
#btn-more {border-radius: 0;background-color: #fff;line-height: 48px;width: 100%;    position: relative;display: block;border: 1px solid black;font-size: 15px;font-weight: 700;line-height: 42px;text-align: center;background: #fff;}
.height-1100 {height:1100px;}
.measurement-image {width: calc(100% - 24px);padding-top: 100%;position: relative;}
.measurement-image img {position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
.measurement-spots__item {width: 100%;text-align: center;font-size: 12px;height: 12px;position: absolute;margin-bottom:0;}
.table-wedive-product {width:100%;text-align:center;border-top: 2px solid #1f1f1f;border-bottom: 2px solid #1f1f1f;}
.table-wedive-product th,.table-wedive-product td {border-top: 1px solid #eee;padding: 16px 0px;min-width:40px;}
.table-wedive-product th {background-color: #f5f5f5;}
.sticky {position: fixed;top: 0;width: 100%;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.btn-close-option {position: absolute;bottom: 0;width: calc(100% - 32px);left: 16px;margin: 0 auto;}
.menu-order-bottom {position: absolute;bottom: 0;width: calc(100% - 32px);left: 16px;margin: 0 auto;}
select:invalid {color: #6c757d;}
select {background: white; background-color: white;}
.validate-field label {font-size: 11px !important;top: -8px !important;}
.item-order-close {text-align: right;position: absolute;right: 30px;margin-top: 2px;}
</style>
