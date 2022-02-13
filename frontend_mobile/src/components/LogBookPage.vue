<template>
  <div class="">
    <div data-menu-active="nav-book"></div>

    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
    <template slot="top-block" slot-scope="props">
      <div :class="'top-load-wrapper opacity-50' + (props.state === 'loaded-done' ? ' fadeout' : '')">
        <i class="font-18 fas"
             :class="{
                'fa-arrow-down': props.state === 'pull',
                'fa-arrow-down': props.state === 'trigger',
                'fa-spinner': props.state === 'loading',
                'fa-check': props.state === 'loaded-done'
             }"
             aria-hidden="true">
        </i>
        {{ props.stateText }}
      </div>
    </template>
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="" id="tab-group-1">
                <div class="splide topic-slider slider-no-arrows slider-no-dots mb-1 border-bottom">
                    <div class="splide__track tab-controls tabs-small">
                        <div class="splide__list" style="min-height:50px;">
                            <h5 class="splide__slide color-theme mt-3 text-center font-500 font-14 font-noto" data-active data-bs-toggle="collapse" data-bs-target="#tab-log1"><img src="/static/images/assets/ico_wedive_d.png" style="width:20px;" class="me-1" />위다이브</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500 font-14 font-noto" data-bs-toggle="collapse" data-bs-target="#tab-log2">스쿠바</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500 font-14 font-noto" data-bs-toggle="collapse" data-bs-target="#tab-log3">프리</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500 font-14 font-noto" data-bs-toggle="collapse" data-bs-target="#tab-log4">윤장송 동호회</h5>
                            <h5 class="splide__slide color-theme mt-3 text-center font-500 font-14 font-noto" data-bs-toggle="collapse" data-bs-target="#tab-log4">짱짱맨 동호회</h5>
                        </div>
                    </div>
                </div>


                <div data-bs-parent="#tab-group-1" class="collapse show" id="tab-log1" style="min-height: 100vh">
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">10분 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 잠실 수영장</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">1</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">1</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>

                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">1일 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~<br/>
                        </div>
                    </div>
                    <div class="row">
                        <img class="col-12" src="https://fg.startupbridgeva.com/f/m3h/TOb/0kN/9OiKsk0MTnPMjkpw6CwyrDA0jAjOTUxKTc7NVsvqyAdAA.jpg" style="width:100%;"/>
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">6</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">20</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
                    
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">1일 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i>제주 사이트</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~<br/>
                        </div>
                    </div>
                    <div class="square_image inline-block">
                        <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2020/06/09/15916682888292.png" style="object-fit: cover;"/>
                    </div>
                    <div class="square_image inline-block" style="float: right;">
                        <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2020/06/09/15916682352190.png" style="object-fit: cover;"/>
                        <!--<img class="col-4 p-0" src="https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2020/06/09/15916681023733.png"/>-->
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">6</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">20</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
                    
                    
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
    </pull-to>
    
  </div>
</template>
<script>
import PullTo from 'vue-pull-to'

export default {
  name: 'HelloWorld',
  components: {
    PullTo,
  },
  methods: {
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            setTimeout(function() {
                loaded('done')
            },1000);
        } else {
            console.log("1")
            loaded('done')
            return false;
        }
      },
      stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
            this.iconLink = '#fa-arrow-down';
        } else if (state === 'loading') {
            this.iconLink = '#fa-spinner';
        } else if (state === 'loaded-done') {
            this.iconLink = '#fa-check';
        }
      },
      handleScroll (event) {
        this.scrollTop = $(document).scrollTop();
      },
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
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        scrollTop: 0,
        TOP_DEFAULT_CONFIG: {
            pullText: '당겨서 새로고침', // The text is displayed when you pull down
            triggerText: '업데이트', // The text that appears when the trigger distance is pulled down
            loadingText: '로딩중...', // The text in the load
            doneText: '새로고침 완료', // Load the finished text
            failText: '실패', // Load failed text
            loadedStayTime: 400, // Time to stay after loading ms
            stayDistance: 50, // Trigger the distance after the refresh
            triggerDistance: 70 // Pull down the trigger to trigger the distance
        },
        center_list : [
            {title: "버블탱크 스쿠바다이빙", desc: "제주 남부에 위치한 PADI 5star 다이빙센터", star: 3.8, price_index: 2, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test1.jpg', position: {lat: 33.24134444312815, lng: 126.56484940647604}},
            {title: "다이브 투게더리조트", desc: "한줄설명1", star: 4.8, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test2.jpg', position: {lat: 33.241633952501715, lng: 126.56456092676112}},
            {title: "태평양 다이빙스쿨", desc: "블라블라", star: 3.1, price_index: 3, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test3.jpg', position: {lat: 33.24030993345755, lng: 126.56472966827262}},
            {title: "쿨다이브", desc: "뭐라적지", star: 2.8, price_index: 2, feature: "드리프트", img: '/static/images/shop1/diving/test4.jpg', position: {lat: 33.241266401158086, lng: 126.56278906254684}},
            {title: "스플래시 리조트", desc: "이곳에 설명이", star: 4.2, price_index: 4, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test5.jpg', position: {lat: 33.24245948959435, lng: 126.5633415608148}},
            {title: "제주 블루샤크다이빙", desc: "ㅁㄴㅇㄹㄴㄷㅁㅈㄷㄻㄴㄷㄹㄷㅁㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄹ", star: 3.9, price_index: 2, feature: "난파선", img: '/static/images/shop1/diving/test6.jpg', position: {lat: 33.24380026488202, lng: 126.56288927674295}},
            {title: "잠수타기 다이브클럽", desc: "ㅁㄷㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄹㄷㅁㄷㄴㄻㄷㄴㄻㄴㄻㄴㄷㄹㄷㅁㄴㄹ", star: 4.1, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test7.jpg', position: {lat: 33.24194725508795, lng: 126.5616725869943}},
            {title: "홀리데이 다이빙 코리아", desc: "히히", star: 4.2, price_index: 3, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test8.jpg', position: {lat: 33.24088391439924, lng: 126.5628795809329}},
            {title: "천지연40", desc: "헬로", star: 4.3, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test9.jpg', position: {lat: 33.242485636047576, lng: 126.5623109526933}},
            {title: "언더더씨 스쿠바다이빙", desc: "방가워", star: 4.7, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test10.jpg', position: {lat: 33.244246055136834, lng: 126.5671937429616}}
        ],

    }
  }

  
}


</script>


<style scoped>
.inline-block {display: inline-block !important;}
.transform-none {transform: inherit !important;};
.splide__slide h5 {text-align:center;padding: 8px 0;}
.splide__list > .is-visible:not(.collapsed) {border-bottom: 3px solid #1d397c !important;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}
</style>
