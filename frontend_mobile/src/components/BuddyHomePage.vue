<template>
  <div class="">
    <div data-menu-active="nav-buddy"></div>

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
    <div class="page-content pt-2">
        <div class="splide wedive-slider slider-no-arrows slider-no-dots" id="main-slider">
            <div class="splide__track">
                <div class="splide__list">
                    <div v-on:click="concierge" class="splide__slide">
                        <div class="card card-style" style="box-shadow: none;background-image: linear-gradient(45deg, #35415f, #181818 70%);">
                            <div class="content mb-0 mt-3" style="min-height: 80px;">
                                <div class="row mb-0" style="position: relative;min-height: 80px;">
                                    <div class="col-9">
                                        <h4 class="text-start pt-2 mb-0 color-white">위다이브 컨시어지 <i class="fas fa-concierge-bell ms-1"></i></h4>
                                        <p class="text-start mb-0 color-white opacity-70">전문 매니저가 버디를 매칭해드려요.</p>
                                    </div>
                                    <img class="ps-0" src="/static/images/assets/concierge.gif" style="position:absolute;bottom:0;right:0;max-width:96px;width:96px;margin-bottom:-8px;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="nickName==null && idToken == null" v-on:click="login" class="splide__slide">
                        <div class="card card-style" style="box-shadow: none;background: #494949;">
                            <div class="mb-0" style="min-height: 96px;background:url(/static/images/assets/onoff1.gif);background-size: 154px 96px;background-repeat:no-repeat;background-position-x:right;">
                                <div class="mb-0" style="position: relative;">
                                    <div style="margin-top:16px;margin-left:15px;">
                                        <h4 class="text-start pt-2 mb-0 color-white">로그인</h4>
                                        <p class="text-start mb-0 color-white opacity-70">특별한 다이빙 서비스를 누려보세요.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>

        
        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0"><a href="/">따끈따끈 신규 프리다이빙<i class="wedive-txt-all wedive_right"></i></a></h4>
                
                
                <div v-on:click="goDiving()" class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center font-noto">
                            <h2 class="font-16 line-height-s mt-2 mb-0 font-500">여자끼리 떠나는 제주여행</h2>
                            <p class="color-gray font-13 mb-0 ellipsis">09.25(토) ~ 09.26(일)</p>
                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> 하우스리프 포인트 (프리)</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">2/6</span>
                    </div>
                </div>
                <div v-on:click="goDiving()" class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center font-noto">
                            <h2 class="font-16 line-height-s mt-2 mb-0 font-500">가요가요 우리모두 가요</h2>
                            <p class="color-gray font-13 mb-0 ellipsis">09.22(수) ~ 09.25(토)</p>
                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트 (스쿠바, 프리)</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">2/6</span>
                    </div>
                </div>
                <div v-on:click="goDiving()" class="mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center font-noto">
                            <h2 class="font-16 line-height-s mt-2 mb-0 font-500">제주도 가실분 급구</h2>
                            <p class="color-gray font-13 mb-0 ellipsis">09.20(월) ~ 09.25(토)</p>
                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬포인트 (스쿠바)</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">2/6</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-style" style="background: #56abf7;">
            <div class="content mb-0 mt-3 me-0">
                <h4 class="text-start pt-1 mb-2" style="background: #56abf7;position: relative;">얼마 남지 않은 다이빙 D-7</h4><i class="wedive-txt-all wedive_right"></i>
                <div class="text-end"><img class="" src="/static/images/assets/calendar.gif" style="max-height: 200px;"/></div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">신청 즉시 확정되는 1인 예약<i class="wedive-txt-all wedive_right"></i></h4>
                
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 철재삼동 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>5</span></span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
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
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 말미잘동산 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
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

        <div class="card card-style" style="background: #dbdbdb;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-1 font-600 color-black"><i class="fas fa-map-marker-alt me-2"></i>내 주변 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <div style="text-align:center;"><img class="" src="/static/images/assets/nearby.gif" style="max-height:200px;"/></div>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">3박 이상 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                
                <div class="light-border-bottom mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
                        </div>
                        <div class="text-start align-self-center">
                            <h2 class="font-17 line-height-s mt-2 mb-1">09.25(토) ~ 09.26(일)</h2>
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 철재삼동 포인트</p>
                        </div>
                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip"><span class="color-highlight"><i class="far fa-user"></i>1</span> <span class="color-shopping ms-1"><i class="far fa-user"></i>1</span></span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="d-flex mb-3 position-relative">
                        <div class="align-self-center">
                            <img src="/static/images/diving_beach1.jpg" class="rounded-sm me-3" width="68">
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
                <img class="float-right" src="/static/images/assets/jeju.jpg" style="max-height:180px;"  />
            </div>
        </div>

        <div class="card card-style" style="background: #83adec;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 font-600"><i class="fas fa-camera me-2"></i>수중 촬영 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#인스타 사진&nbsp;&nbsp;#인생 한컷</p>
                <div class="text-center"><img class="mt-n1" src="/static/images/assets/camera.gif" style="max-height:200px;"/></div>
            </div>
        </div>

        <div class="card card-style" style="background: #dbaa47;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">뒷풀이 포함 이벤트<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="color-white mb-0 opacity-60 ls-n1">#맥주인생&nbsp;&nbsp;#좋은사람</p>
                <img style="position:absolute;bottom:0;left:20%;height:90%;" src="/static/images/assets/fireworks.gif"/>
                <img style="position:absolute;bottom:0;left:0;height:70%;" src="/static/images/assets/fireworks2.gif"/>
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
    </div>
    
    </pull-to>
    <a v-on:click="concierge" id="btn_new" :class="'btn btn-m mb-3 rounded-xl font-900 shadow-s icon-concierge'" style="background-color: #181818;"></a>
    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
const axios = require("axios");


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
    $("#btn_new").hide();

  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
    window.addEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        getUserRecommendationsByTargetType: [],
        prev_driection: true,
        lastScrollPosition: 0,
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
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
    }
  },
  apollo: {
    getUserRecommendationsByTargetType: {
        query: gql`query Query($targetType: RecommendationTargetType) {
            getUserRecommendationsByTargetType(targetType: $targetType) {
                _id
                title
                description
                previewCount
                cssStyle
                className
                type
                targetType
                previews {
                ... on Diving {
                    diveCenters {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                    divePoints {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                    diveSites {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                        thumbnailUrl
                    }
                    }
                }
                ... on DiveSite {
                    _id
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on DivePoint {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on DiveCenter {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    _id
                    thumbnailUrl
                    }
                }
                ... on Instructor {
                    _id
                    gender
                    profileImages {
                    _id
                    thumbnailUrl
                    }
                    careers
                    introduction
                }
                }
            }
        }`,
        variables () {
            return {
                targetType: "diving"
            }
        },
        async result () {
            var id_arr = new Array();
            var width_arr = new Array();
            this.getUserRecommendationsByTargetType.filter(x=>x.previewCount > 3).forEach(x => {
                x.previews.forEach(y => {
                    if (y.backgroundImages.length > 0) {
                        id_arr.push(y.backgroundImages[0]._id);
                        width_arr.push(720);
                    }
                });
            });
            var result_image = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        query Query($ids: [ID], $widths: [Int]) {
                            getImageUrlsByIds(_ids: $ids, widths: $widths)
                        }
                    `,
                    variables: {
                        ids: id_arr,
                        widths: width_arr
                    }

                }
            });
            if (result_image.data.data.getImageUrlsByIds) {
                var cnt = 0;
                this.getUserRecommendationsByTargetType.filter(x=>x.previewCount > 3).forEach(x => {
                    x.previews.forEach(y => {
                        if (y.backgroundImages.length > 0) {
                            y.backgroundImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[cnt];
                            cnt++;
                        }
                    });
                });
                //console.log(result_image.data.data.getImageUrlsByIds);
            }
            var splide = document.getElementsByClassName('splide');
            if(splide.length){
                var singleSlider = document.querySelectorAll('.single-slider-site');
                if(singleSlider.length) {
                    singleSlider.forEach(function(e){
                        //setTimeout(function(e) {
                            var single = new Splide( '#'+e.id, {
                                type:'loop',
                                autoplay:true,
                                interval:4000,
                                perPage: 1,
                            }).mount();
                            var sliderNext = document.querySelectorAll('.slider-next');
                            var sliderPrev = document.querySelectorAll('.slider-prev');
                            sliderNext.forEach(el => el.addEventListener('click', el => {single.go('>');}));
                            sliderPrev.forEach(el => el.addEventListener('click', el => {single.go('<');}));
                        //},100, e);
                        
                    });
                }
                //Card Extender
                const cards = document.getElementsByClassName('card');
                function card_extender(){
                    var headerHeight, footerHeight, headerOnPage;
                    var headerOnPage = document.querySelectorAll('.header:not(.header-transparent)')[0];
                    var footerOnPage = document.querySelectorAll('#footer-bar')[0];

                    headerOnPage ? headerHeight = document.querySelectorAll('.header')[0].offsetHeight : headerHeight = 0
                    footerOnPage ? footerHeight = document.querySelectorAll('#footer-bar')[0].offsetHeight : footerHeight = 0

                    for (let i = 0; i < cards.length; i++) {
                        if(cards[i].getAttribute('data-card-height') === "cover"){
                            if (window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.outerHeight;}
                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.innerHeight;}
                            var coverHeight = windowHeight - headerHeight - footerHeight + 'px';
                        }
                        if(cards[i].getAttribute('data-card-height') === "cover-card"){
                            var windowHeight = window.outerHeight;
                            var coverHeight = windowHeight - 275 + 'px';
                            cards[i].style.height =  coverHeight
                        }
                        if(cards[i].getAttribute('data-card-height') === "cover-full"){
                            if (window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.outerHeight;}
                            if (!window.matchMedia('(display-mode: fullscreen)').matches) {var windowHeight = window.innerHeight;}
                            var coverHeight = windowHeight + 'px';
                            cards[i].style.height =  coverHeight
                        }
                        if(cards[i].hasAttribute('data-card-height')){
                            var getHeight = cards[i].getAttribute('data-card-height');
                            cards[i].style.height= getHeight +'px';
                            if(getHeight === "cover"){
                                var totalHeight = getHeight
                                cards[i].style.height =  coverHeight
                            }
                        }
                    }
                }

                if(cards.length){
                    card_extender();
                    window.addEventListener("resize", card_extender);
                }
            }
        },
        fetchPolicy: 'no-cache'
    },
  },
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
      goDiving() {
          location.href='/diving/61bf1df29ca67571157a3f81';
      },
      handleScroll (event) {
        this.scrollTop = $(document).scrollTop();
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition < 0) { 
            return
        } 
        if ((currentScrollPosition < this.lastScrollPosition) == false && this.prev_driection == true) {
            $("#btn_new").show(500);
        } else if ((currentScrollPosition < this.lastScrollPosition) == true && this.prev_driection == false) {
            $("#btn_new").hide(300);
        }
        this.prev_driection = currentScrollPosition < this.lastScrollPosition;
        this.lastScrollPosition = currentScrollPosition;
      },
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null) {
          location.href='/user_create';
        }
      },
      async concierge() {
        if (localStorage.idToken) {
            var result = await axios({
                url: 'https://chat.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        query {
                            getJoinedRoomList {
                                lastChatMessage {
                                text
                                author {
                                    _id
                                    uid
                                    name
                                    avatarOrigin
                                }
                                createdAt
                                }
                                _id
                                title
                                type
                                lastMessageAt
                                numOfmessages
                                unread
                                createdAt
                                chatUsers {
                                _id
                                name
                                uid
                                avatarOrigin
                                }
                                usersCount
                                owner {
                                _id
                                uid
                                name
                                avatarOrigin
                                }
                            }
                        }
                    `
                }
            });
            
            var concierge_uid = "RuOiMt9YUTbRUJQTrXv4cWMEimr2";
            // 개설된 채팅이 있는지 확인한다.
            var go_flag = false;
            result.data.data.getJoinedRoomList.forEach(room => {
                if (room.type == 'direct' && room.chatUsers.filter(u=>u.uid == concierge_uid).length > 0) {
                    go_flag = true;
                    location.href = '/chat/' + room._id;
                }
            })
            if (go_flag == false) {
                // 없는경우, 더미로 하나 만든다.
                localStorage.chatType = 'direct';
                var chatUids = new Array();
                chatUids.push(concierge_uid);
                localStorage.chatUids = JSON.stringify(chatUids);
                localStorage.chatName = "WeDive";
                location.href = '/chat/create'
            }
        } else { // 로그인
            this.login();
        }
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;bottom:0px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.ls-n1 {letter-spacing: -1px;}

@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: -20px;}20% {margin-top: 0px;}40% {margin-top: -20px;}60% {margin-top: 0px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}

.movebox {animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;}
.chip span {line-height: 24px !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(/static/images/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.position-relative {position: relative;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}
</style>
