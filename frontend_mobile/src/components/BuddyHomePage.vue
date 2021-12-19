<template>
  <div class="">
    <div data-menu-active="nav-buddy"></div>
    <div class="page-content pt-2">
        <div class="card card-style hide" style="background: white;height:148px;">
            <div class="content mb-0 mt-3">
                <img class="float-right" src="/static/images/assets/search.png" width="80" style="position: absolute;z-index: 11;right: 30px;top:10px;"/>
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">원하는 다이빙을 빠르게 검색</h4>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(100% - 30px);z-index: 99;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="328개의 다이빙이 기다리고 있습니다." data-search>
                </div>
                
            </div>
        </div>

        <div class="card card-style bg-dark-dark" style="box-shadow: none;">
            <div class="content mb-0 mt-3" style="min-height: 80px;">
                <div class="row mb-0" style="position: relative;min-height: 80px;">
                    <div class="col-9">
                        <h4 class="text-start pt-2 mb-0 color-white">위다이브 컨시어지</h4>
                        <p class="text-start mb-0 color-white opacity-70">전문 매니저가 버디를 매칭해드려요.</p>
                    </div>
                    <img class="col-3 ps-0" src="/static/images/assets/concierge.png" style="position:absolute;bottom:0;right:0;"/>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0"><a href="/">따끈따끈 신규 프리다이빙<i class="wedive-txt-all wedive_right"></i></a></h4>
                
                
                <div v-on:click="goDiving()" class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/kangwon_yangyang_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 하우스리프 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div v-on:click="goDiving()" class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/jeju_bumisland_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.22(수) ~ 09.25(토)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div v-on:click="goDiving()" class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/jeju_munisland_06.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.20(월) ~ 09.25(토)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style" style="background: #9bd1f4;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-2">얼마 남지 않은 다이빙 D-7<i class="wedive-txt-all wedive_right"></i></h4>
                <div class="text-center"><img class="mt-n1 p-4" src="/static/images/assets/hourglass.png"/></div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">신청 즉시 확정되는 1인 예약<i class="wedive-txt-all wedive_right"></i></h4>
                
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/kangwon_yangyang_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 철재삼동 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>5</span></span>
                    </div>
                </div>
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/jeju_bumisland_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.22(수) ~ 09.25(토)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>2</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>3</span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">수도권 지역 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/kangwon_yangyang_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 말미잘동산 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/jeju_bumisland_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.22(수) ~ 09.25(토)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style" style="background: #5f9b75;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-1 font-600 color-white"><i class="fas fa-map-marker-alt me-2"></i>내 주변 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <div style="text-align:center;"><img class="mt-n3" src="/static/images/assets/magnifying.png"/></div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">3박 이상 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/kangwon_yangyang_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 철재삼동 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/point/ko/jeju_bumisland_01.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.22(수) ~ 09.25(토)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
            </div>
        </div>

        

        <div class="card card-style" style="background: #3295aa;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-2 mb-0 font-600">제주 지역 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="color-white mb-0 opacity-60 ls-n1">#떠나요&nbsp;&nbsp;#제주도&nbsp;&nbsp;#낭만 바다</p>
                <img class="float-right" src="/static/images/assets/jeju.jpg" width="260" />
            </div>
        </div>

        <div class="card card-style" style="background: #e8b8db;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 font-600"><i class="fas fa-camera me-2"></i>수중 촬영 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#인스타 사진&nbsp;&nbsp;#인생 한컷</p>
                <div class="text-center"><img class="mt-0 mb-3" src="/static/images/assets/actioncam.png"/></div>
            </div>
        </div>

        <div class="card card-style" style="background: #dbaa47;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">뒷풀이 포함 이벤트<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="color-white mb-0 opacity-60 ls-n1">#맥주인생&nbsp;&nbsp;#좋은사람</p>
                <img class="mt-n2 mb-4 float-right" src="/static/images/assets/beer.png" />
            </div>
        </div>

        <div class="card card-style" style="background: #99dfe3;height:270px;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-0">해외투어<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#세계 10대 포인트&nbsp;&nbsp;#가자 성지로!</p>
                <div class="text-center"><img class="movebox" src="/static/images/assets/air-plane.png" width="200"/></div>
            </div>
        </div>

        <div class="card card-style" style="background: #e9ad9b;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-0">초보자 참여 가능<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#걱정마요&nbsp;&nbsp;#누구나 시작은&nbsp;&nbsp;#함께 해요</p>
                <div class="text-center"><img class="mt-4 mb-5" src="/static/images/assets/lifebuoy.png"/></div>
            </div>
        </div>
        

        
        <div data-menu-load="/static/menu-footer.html"></div>
        <a href="/buddy_create" id="btn_new" class="btn btn-m mb-3 rounded-xl font-900 shadow-s bg-dark-dark icon-concierge"></a>
    </div>
    

    
    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
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
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  data () {
    return {
        map: null,
        oldScroll: 0,
        prev_driection: true,
    }
  }, methods: {
      goDiving() {
          location.href='/diving/61bf1df29ca67571157a3f81';
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;top:20px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.ls-n1 {letter-spacing: -1px;}

@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}

.movebox {animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;}
.chip span {line-height: 24px !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(/static/images/assets/concierge.png);background-size:contain !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.position-relative {position: relative;}
</style>
