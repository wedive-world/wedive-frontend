<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content">
        
        <div class="content">
        <h4 class="text-start pt-2 mb-0 font-18 font-900">짱스님,<br/>다이빙을 계획중이신가요?</h4>
        </div>

        <div v-on:click="goList()" class="card card-style" style="background: white;height:158px;">
            <div class="content mb-0 mt-3">
                <img class="float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/exam-sheet.png" style="position: absolute;z-index: 11;right: 30px;top:10px;"/>
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">엄선한 다이빙 센터를 검색</h4>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(100% - 30px);z-index: 9;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="37,216개의 센터가 준비되어있어요." data-search>
                </div>
                
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">내 근처의 다이빙 센터</h4>
                <p class="mb-3 color-gray-light-mid">52개의 센터 준비됨</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                
                
                <div v-for="(center,index) in center_list" v-if="index<3">
                    <div class="map-box">
                        <a href="/center/k26">
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
                                            <img src="https://d34l91104zg4p3.cloudfront.net/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">₩</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
                
            </div>
        </div>

        <div class="card card-style" style="background: #2885df;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-1">자체 보트를 운영중인 센터</h4>
                <p class="color-white mb-0 color-gray">1,387개 센터</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="float-right mt-n3 movebox" src="https://d34l91104zg4p3.cloudfront.net/assets/boat.png" width="200"/>
                <img class="movebox2" src="https://d34l91104zg4p3.cloudfront.net/assets/cloud.png" width="100"/>
                <img class="movebox3" src="https://d34l91104zg4p3.cloudfront.net/assets/cloud.png" width="70"/>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">수도권 실내 수영장</h4>
                <p class="mb-3 color-gray-light-mid">171개의 다이빙 센터</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(center,index) in center_list" v-if="index>6 && index<11">
                    <div class="map-box">
                        <a href="/center/k26">
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
                                            <img src="https://d34l91104zg4p3.cloudfront.net/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">₩</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">장비 품질이 좋은</h4>
                <p class="mb-3 color-gray-light-mid">106개의 다이빙 센터</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                
                <div v-for="(center,index) in center_list" v-if="index>3 && index<7">
                    <div class="map-box">
                        <a href="/center/k26">
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
                                            <img src="https://d34l91104zg4p3.cloudfront.net/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">₩</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
                
            </div>
        </div>

        

        <div class="card card-style" style="background: #f1c5ab;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-1 font-600"><i class="fas fa-plane me-2"></i>전세계 10대 포인트 센터</h4>
                <p class="mb-0">3,219개의 다이빙 센터</p>
                <a class="font-12 wedive-txt-all">모두보기</a>
                <img class="float-right mt-n3" src="https://d34l91104zg4p3.cloudfront.net/assets/earth.gif" width="300" style="margin-right: -20px;margin-bottom:-30px;margin-top:-10px;"/>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 color-primary"><img src="https://d34l91104zg4p3.cloudfront.net/assets/ico_wedive_d.png" width="30" />위다이브 추천</h4>
                <p class="mb-3 color-gray-light-mid">38개의 다이빙 센터</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(center,index) in center_list" v-if="index>2 && index<5">
                    <div class="map-box">
                        <a href="/center/k26">
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
                                            <img src="https://d34l91104zg4p3.cloudfront.net/agency/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">₩</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>

        

        <div class="card card-style" style="background: #5ec9bb;">
            <div class="content mb-0 mt-3">
                <div class="text-center">
                    <img class="mt-n1" src="https://d34l91104zg4p3.cloudfront.net/assets/id-card.png" />
                    <h4 class="pt-3 mb-0 font-600"><img src="https://d34l91104zg4p3.cloudfront.net/agency/logo_padi.svg" height="18" class="ext-img mt-n1"> 인증 센터</h4>
                    <p class="color-white mb-1 mt-n1">601개의 다이빙 센터</p>
                    <p class="color-white mb-3 opacity-60 ls-n1">#세계최대&nbsp;&nbsp;#공식인증</p>
                </div>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
            </div>
        </div>

        <div class="card card-style" style="background: #f086a2;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 font-600"><i class="fas fa-camera me-2"></i>촬영 인기 다이빙 센터</h4>
                <p class="mb-1">37개의 다이빙 센터</p>
                <p class="mb-0 opacity-60 ls-n1">#인생샷&nbsp;&nbsp;#좀 찍는듯</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class=" mt-n4 float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/camera.png" width="220" style="margin-right: -20px;"/>
            </div>
        </div>

        <div class="card card-style" style="background: #f2b345;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">교육열이 뛰어난 센터</h4>
                <p class="mb-1 color-gray-light">268개의 다이빙 센터</p>
                <p class="color-white mb-0 opacity-60 ls-n1">#친절설명&nbsp;&nbsp;#차근차근</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class=" mt-n4 mb-2 float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/blackboard.png" />
            </div>
        </div>

        <div class="card card-style" style="background: #28344e;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">하드 트레이닝 센터</h4>
                <p class="color-white mb-1">463개의 다이빙 센터</p>
                <p class="color-white mb-0 opacity-60 ls-n1">#김종국 저리가라&nbsp;&nbsp;#3대 300해도 힘듦</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="mt-n5 mb-n2 me-n3 float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/stopwatch.png" />
            </div>
        </div>

        <div class="card card-style" style="background: #a98152;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">여유로운 다이빙 센터</h4>
                <p class="color-white mb-1">천천히 쉬엄쉬엄 배워보는</p>
                <p class="color-white mb-0 opacity-60 ls-n1">#안빈낙도&nbsp;&nbsp;#인조이라이프</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="mt-n5 float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/male-holding-coffee.png"/>
            </div>
        </div>
        

        
        <div data-menu-load="/static/menu-footer.html"></div>
    </div>
    


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    
    this.btn_new_html = $("#btn_new").html();

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
  destroyed () {
    
  },
  data () {
    return {
        center_list : [
            {title: "버블탱크 스쿠바다이빙", desc: "제주 남부에 위치한 PADI 5star 다이빙센터", star: 3.8, price_index: 2, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '', position: {lat: 33.24134444312815, lng: 126.56484940647604}},
        ],
    }
  }, methods: {
    goList: function() {
        location.href='/center_list'
    }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-chip {padding-left: 16px;margin: 0px 4px 0px 0px;margin-bottom: 4px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 3px;}
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.ls-n1 {letter-spacing: -1px;}

@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
-webkit-@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}
-webkit-@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}

.movebox {animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;}
.movebox2 {position:absolute;white-space: nowrap;left:-100px;padding-top:5px;opacity:.5;animation: motion-endtoend 20s linear infinite;-webkit-animation: motion-endtoend 20s linear infinite;}
.movebox3 {position:absolute;white-space: nowrap;left:-100px;padding-top:50px;opacity:.5;animation: motion-endtoend 30s linear infinite;-webkit-animation: motion-endtoend 30s linear infinite;}
</style>
