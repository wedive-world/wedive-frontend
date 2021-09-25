<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-shopping" data-menu-load=""></div>    
    <div class="card card-style ms-0 me-0 rounded-0">
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
                역시! 국내 최정상, 더블케이 프리다이빙 블랙팁 컬러 블레이드 + 코르자 WH
            </div>
            <div class="d-flex font-noto price-margin">
                <p class="price_percent">20%</p>
                <p class="price_dis">472,000원</p>
                <p class="price_ori">590,000원</p>
            </div>
            <div>
            </div>
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
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
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
</style>
