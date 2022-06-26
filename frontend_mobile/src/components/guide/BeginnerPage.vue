<template>
  <div class="bg-white">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis" style="width: 250px;left: 36%;">초보자 가이드</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div class="page-content" style="margin-top: 50px;">
        <div class="card text-start p-3" style="min-height: calc(100vh - 50px);padding-bottom: 0 !important;margin-bottom: 0;">
            <a class="mb-0" href="/guide/beginner1">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://external-preview.redd.it/ex_AfgS1u-juMfL1i35-vWMMEjEOF8iaQo9D1y8BReE.jpg?auto=webp&s=b23001750323ffeaa0f8d3816a792e1e6f93c59a"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">다이빙 매력포인트</h4>
                            <p class="pb-0 mb-0 nearby_desc">다이빙을 배우면 무엇이 좋나요?</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner2">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://i.pinimg.com/1200x/13/b7/e4/13b7e410bd6d2a08c25453e0d59a087d.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">알아보기</h4>
                            <p class="pb-0 mb-0 nearby_desc">프리다이빙 vs 스쿠바다이빙</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner3">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://i0.wp.com/dpmdiving.com/wp-content/uploads/2021/10/diving-course-thailand.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">스쿠바다이빙 강습</h4>
                            <p class="pb-0 mb-0 nearby_desc">스쿠바 강습비, 소요기간 및 장소</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner4">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjlfMTEy/MDAxNTU5MTM0NTk0MjIx.Sz7BIHai-pLTu3M5poif-BjXZsvYCtyOZCAPxNoRXu8g.F4-fYjEx0b5gOyxuEtdJjz7WDMS1wytiAfOrACbEaAIg.JPEG.es_1230/1542350244625.jpg?type=w2"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">프리다이빙 강습</h4>
                            <p class="pb-0 mb-0 nearby_desc">프리 강습비, 소요기간 및 장소</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner5">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">다이빙 레벨</h4>
                            <p class="pb-0 mb-0 nearby_desc">레벨 몇까지 취득해야 할까요?</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner6">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">자격증 단체</h4>
                            <p class="pb-0 mb-0 nearby_desc">다이빙 단체 선택 가이드</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner7">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">건강정보</h4>
                            <p class="pb-0 mb-0 nearby_desc">위험하지 않나요?</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner8">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">다이빙 강사</h4>
                            <p class="pb-0 mb-0 nearby_desc">좋은 강사를 만나는 법</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner9">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">다이빙 장비</h4>
                            <p class="pb-0 mb-0 nearby_desc">장비 구매 가이드</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
            <a class="mb-0" href="/guide/beginner10">
                <div class="map-box">
                    <div class="justify-content-center mb-0 text-start">
                        <div class="thumb-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="https://media.cntraveler.com/photos/60ca5d0efa2963639daee207/3:4/w_2558,h_3411,c_limit/Best%20Diving%20Sites-2021_Great%20Barrier%20Reef,%20Queensland,%20Australia_GettyImages-82133426.jpg"/>
                            </svg>
                        </div>
                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 118px);">
                            <h4 class="font-15 mb-0 mt-2">FAQ</h4>
                            <p class="pb-0 mb-0 nearby_desc">자주 묻는 질문 답변</p>
                        </div>
                    </div>
                </div>
                <div class="divider mt-2 mb-2"></div>
            </a>
        </div>
        

        
        <div class="p-4 mb-0 text-center">
            <h6 class="color-gray-light-mid font-200 mb-0 pt-4" style="border-top: 1px solid #b4bcc8;">ⓒ WEDIVE CORP.</h6>
        </div>
        
    </div>
    


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    
    $(".page-title").hide();
    $(".page-title-clear").hide();

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
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
    
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {background-color: white !important;}
h1, h2, h3, h4, h5, h6, a {font-family: 'Noto Sans Korean' !important;margin-bottom: 20px;}
p{font-family: 'Noto Sans Korean';font-size: 17px;line-height: 26px;color: #1c2023;font-weight: 400;}


.thumb-img {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
  overflow: hidden;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3csvg width='88px' height='88px' viewBox='0 0 88 88' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M44%2c0.5 C59.8650505%2c0.5 70.7664452%2c3.40244096 77.6820021%2c10.3179979 C84.597559%2c17.2335548 87.5%2c28.1349495 87.5%2c44 C87.5%2c59.8650505 84.597559%2c70.7664452 77.6820021%2c77.6820021 C70.7664452%2c84.597559 59.8650505%2c87.5 44%2c87.5 C28.1349495%2c87.5 17.2335548%2c84.597559 10.3179979%2c77.6820021 C3.40244096%2c70.7664452 0.5%2c59.8650505 0.5%2c44 C0.5%2c28.1349495 3.40244096%2c17.2335548 10.3179979%2c10.3179979 C17.2335548%2c3.40244096 28.1349495%2c0.5 44%2c0.5 Z' fill='none' stroke='rgba(0,0,0,0.3)'%3e%3c/path%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: contain;
  }

  .svg-profile {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .default-txt {
    font-size: 2em;
    fill: #fff;
  }

  .default-bg {
    width: 100%;
    height: 100%;
    @each $num, $color in $userImgBgs {
      &[data-color="#{$num}"] {
        fill: $color;
      }
    }
  }
}
</style>
