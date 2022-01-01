<template>
  <div class="">
    <div data-menu-active="nav-book"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="" id="tab-group-1">
                <div class="splide topic-slider slider-no-arrows slider-no-dots mb-1 border-bottom">
                    <div class="splide__track tab-controls tabs-small">
                        <div class="splide__list" style="min-height:50px;">
                            <h5 class="splide__slide color-theme mt-3 text-center font-500" data-active data-bs-toggle="collapse" data-bs-target="#tab-log1"><img src="/static/images/assets/ico_wedive_d.png" style="width:20px;" class="me-1" />위다이브</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500" data-bs-toggle="collapse" data-bs-target="#tab-log2">스쿠버</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500" data-bs-toggle="collapse" data-bs-target="#tab-log3">프리</h5>
                        </div>
                    </div>
                </div>


                <div data-bs-parent="#tab-group-1" class="content collapse show" id="tab-log1" style="min-height: 100vh">
                    <div v-for="center in center_list" class="map-box" style="display: grid;">
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
                                            <span v-for="i in center.price_index" class="color-gray">₩</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>


                <div data-bs-parent="#tab-group-1" class="content collapse" id="tab-log2" style="min-height: 100vh">
                    asdfg
                </div>

                <div data-bs-parent="#tab-group-1" class="content collapse" id="tab-log3" style="min-height: 100vh">
                    aaaaaa
                </div>
                
                
                
            </div>
            
        </div>
    
    </div>
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  methods: {
      
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
    setTimeout(function() {
        $(".splide__list h5:not(.is-active)").addClass("collapsed")
    },500);
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
.transform-none {transform: inherit !important;};
.splide__slide h5 {text-align:center;padding: 8px 0;}
</style>
