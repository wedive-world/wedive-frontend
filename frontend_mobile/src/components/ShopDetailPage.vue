<template>
  <div class="mb-3 pb-5">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-shopping" data-menu-load=""></div>    
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
            <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1" style="border-radius:0;">상품정보</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2" style="border-radius:0;">리뷰</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-3" style="border-radius:0;">연관상품</a>
            <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-4" style="border-radius:0;">문의/안내</a>
        </div>
        <div class="clearfix mb-3"></div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white show" id="tab-1">
          <div class="item_desc height-1100">
            <img src="/static/images/shopping/item1/content.jpg" />
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
            <div class="accordion mt-2" id="accordion-1">
                <div class="mb-0">
                    <button class="btn ps-0 pe-0 accordion-btn color-theme no-effect" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false">
                        <i class="fa fa-heart color-red-dark me-2"></i>
                        Accordion Title 1
                        <i class="fa fa-plus font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse1" class="collapse" data-parent="#accordion-1">
                        <div class="pt-1 pb-2">
                            This is the accordion content. You can add any content you want to it. Really, anything! Add images, text, lists, captions or any element you want.
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <button class="btn ps-0 pe-0 accordion-btn color-theme no-effect"  data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false">
                        <i class="fa fa-star color-yellow-dark me-2"></i>
                        Accordion Title 2
                        <i class="fa fa-chevron-down font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse2" class="collapse"  data-parent="#accordion-1">
                        <div class="pt-1 pb-2">
                            This is the accordion content. You can add any content you want to it. Really, anything! Add images, text, lists, captions or any element you want.
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <button class="btn ps-0 pe-0 accordion-btn color-theme no-effect" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false">
                        <i class="fa fa-cloud color-blue-dark me-2"></i>
                        Accordion Title 3
                        <i class="fa fa-arrow-down font-10 accordion-icon"></i>
                    </button>
                    <div id="collapse3" class="collapse"  data-parent="#accordion-1">
                        <div class="pt-1 pb-2">
                            This is the accordion content. You can add any content you want to it. Really, anything! Add images, text, lists, captions or any element you want.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-3">
            <img class="img-fluid rounded-sm mt-2" src="images/pictures/28.jpg" alt="img">
        </div>
        <div data-bs-parent="#tab-group-1" class="content collapse bg-white" id="tab-4">
            <p class="bottom-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
      </div>
    <!--</div>-->


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
    $(".header-auto-show").hide();
    $("body").css("background-color", "#f3f6f5");

    setTimeout(function() {
      window.onscroll = function() {myFunction()};
      var sticky = $("#tab-group1-header").offset().top;

      function myFunction() {
        console.log(window.pageYOffset + "/" + sticky)
        if (window.pageYOffset > sticky) {
          $("#tab-group1-header").addClass("sticky")
          
        } else {
          $("#tab-group1-header").removeClass("sticky")
        }
      }
    },500)
    

  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
        
    }
  }, methods: {
    viewMore: function() {
      $(".item_desc").removeClass("height-1100");
      $("#view-more").addClass("hide");
    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-noto {font-family: 'Noto Sans Korean'}
.item_title {letter-spacing: -.4px;line-height: 18px;font-size: 15px;}
.price-margin {margin-top: 16px;margin-bottom: 20px;}
.price_percent {color: #ff5160;font-weight: 500;font-size: 20px;margin-right: 1.8vw;margin-bottom:0;}
.price_dis {font-weight: 600;font-size: 20px;margin-right: 1.8vw;margin-bottom:0;}
.price_ori {font-weight: 500;font-size: 16px;text-decoration: line-through;color: #ddd;margin-bottom:0;}
.wedive-coupon {color: #2269e0;border-radius: 4px;width:100%;border: 1px solid #2269e0;padding: 6px 16px;font-family: 'Noto Sans Korean'}
.float-right {float: right;margin-top:5px;}
.wedive-package {background: #f4f4f4;padding: 2px 12px;border-radius: 4px;font-family: 'Noto Sans Korean';font-weight:200;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;display: grid;margin-left: calc(50% - 20px);font-style: normal;font-variant: normal;text-rendering: auto;line-height: 1;width:40px;height:40px;}
.ico-wedive-w:before {content: "";background-image: url('/static/images/ico_wedive_d.png');background-size:40px 40px;width:40px;height:40px;display:inline-block;}
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


.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
