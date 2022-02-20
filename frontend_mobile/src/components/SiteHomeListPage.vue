<template>
  <div class="">
    <div data-menu-active="nav-site"></div>

    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
    <template slot="top-block" slot-scope="props">
      <div :class="'top-load-wrapper opacity-50' + (props.state === 'loaded-done' ? ' fadeout' : '')">
        <i class="font-18 fas"
             :class="{
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
        <div v-on:click="goList()" class="card card-style hide" style="background: white;height:148px;">
            <div class="content mb-0 mt-3">
                <img class="float-right" src="/static/images/assets/save_earth.png" style="position: absolute;z-index: 11;right: 10px;top:40px;"/>
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">지구 구석구석 다이빙 사이트 검색</h4>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(100% - 30px);z-index: 9;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="37,216개의 장소가 준비되어있어요." data-search>
                </div>
                
            </div>
        </div>

        <div v-on:click="goSiteMap()" class="card card-style" style="box-shadow: none;background-image: linear-gradient(45deg, #35415f, #181818 70%);">
            <div class="content mb-0 mt-3" style="min-height: 80px;">
                <div class="row mb-0" style="position: relative;min-height: 80px;">
                    <div class="col-9">
                        <h4 class="text-start pt-2 mb-0 color-white">지도에서 한눈에</h4>
                        <p class="text-start mb-0 color-white opacity-70">전세계 곳곳을 한눈에 여행해요.</p>
                    </div>
                    <img class="col-3 ps-0" src="/static/images/assets/earth_low.gif" style="position:absolute;bottom:0;right:0;max-width:90px;width:90px;"/>
                </div>
            </div>
        </div>

        <h4 class="text-start mb-2" style="margin-left: 10px;margin-right: 10px;">최근 살펴본 사이트</h4>
        <div class="splide single-slider slider-no-arrows visible-slider slider-no-dots" id="single-slider-latest">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div class="card card-style card-nearby" style="background: url(http://www.outdoornews.co.kr/news/photo/201402/13021_40743_1032.jpg)" data-card-height="260">
                            <div class="card-top px-3 py-3">
                                <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                            </div>
                            <div class="card-bottom px-3 py-3">
                                <h4 class="color-white font-18 font-600">고성 사이트</h4>
                                <div class="divider bg-white opacity-20 mb-1"></div>
                                <div class="d-flex">
                                    <div class="align-self-center" style="max-width: 100%;">
                                        <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">대한민국 3대 포인트가 위치한 사이트로 강원도 지역에서 가장 유명한 사이트 입니다. 특히 수중 금강산이라고 불리는 낙산대기 포인트와 개복치를 볼 수 있는 마이산 포인트 등이 유명합니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-overlay bg-gradient opacity-30"></div>
                            <div class="card-overlay bg-gradient"></div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="card card-style card-nearby" style="background: url(https://i.ytimg.com/vi/xSJ4YSt3SRI/maxresdefault.jpg)" data-card-height="260">
                            <div class="card-top px-3 py-3">
                                <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-gray-light"></i></a>
                            </div>
                            <div class="card-bottom px-3 py-3">
                                <h4 class="color-white font-18 font-600">속초 사이트</h4>
                                <div class="divider bg-white opacity-20 mb-1"></div>
                                <div class="d-flex">
                                    <div class="align-self-center" style="max-width: 100%;">
                                        <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">일반적으로 모래바닥으로 구성된 동해안과는 다르게 속초의 바다는 암석형태가 많이 있습니다. 덕분에 이곳에서 다이빙을 한다면 다양한 볼거리를 마주할 수 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-overlay bg-gradient opacity-30"></div>
                            <div class="card-overlay bg-gradient"></div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div class="card card-style card-nearby" style="background: url(http://www.uwmagazine.co.kr/news/photo/202003/368_1869_1729.jpg)" data-card-height="260">
                            <div class="card-top px-3 py-3">
                                <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-gray-light"></i></a>
                            </div>
                            <div class="card-bottom px-3 py-3">
                                <h4 class="color-white font-18 font-600">강릉 사이트</h4>
                                <div class="divider bg-white opacity-20 mb-1"></div>
                                <div class="d-flex">
                                    <div class="align-self-center" style="max-width: 100%;">
                                        <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">대한민국 최대 규모의 난파선 다이빙 포인트인 스텔라 난파선 포인트가 위치한 사이트 입니다. 더불어 강원도 3대 미항으로 꼽히는 삼곡항이 있는 등 아름다운 다이빙 사이트 입니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-overlay bg-gradient opacity-30"></div>
                            <div class="card-overlay bg-gradient"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

        
        <div class="card card-style " style="background-image: url(/static/images/assets/autumn_back.jpg);background-size: cover;background-repeat: no-repeat;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">지금 떠나기 좋은 다이빙 포인트</h4>
                <p class="mb-1 color-gray-light">19개 포인트가 기다리고 있어요.</p>
                <p class="color-white mb-0 opacity-60 ls-n1">#가을&nbsp;&nbsp;#다이빙의 계절</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="mt-n2 float-left" src="/static/images/assets/smartwatch.png" style="margin-left:-20px;padding-top:20px;padding-bottom:16px;"/>
                <div class="card-overlay bg-gradient-reverse opacity-60" style="z-index: -1;"></div>
            </div>
        </div>


        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">{{ getUserRecommendationsByTargetType[1] ? getUserRecommendationsByTargetType[1].title : '' }}</h4>
                <p class="mb-3 color-gray-light-mid">52개의 사이트 인기 유지중</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(site,index) in site_list">
                    <div class="map-box">
                        <a href="/site/gosung">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="site.img" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15"> {{site.title}} </h4>
                                        <p class="pb-0 mb-0 line-height-m nearby_desc"> {{site.desc}} </p>
                                        
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{site.star}} </span>
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


        <div class="card card-style" style="background: url(/static/images/assets/camera1.gif);background-size:cover;height:270px;">
            <div class="content mb-0 mt-3 me-0">
                <h4 class="text-start pt-2 mb-0 font-600"><i class="fas fa-camera me-2"></i>사진 찍기 좋은 사이트</h4>
                <p class="mb-0 opacity-60 ls-n1">#인생샷&nbsp;&nbsp;#인스타를 평정하다</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
            </div>
        </div>

        <div class="card card-style" style="background: #badefc;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-1 font-600"><i class="fas fa-plane me-2"></i>전세계 10대 포인트</h4>
                <p class="mb-0">한눈에 살펴보는 10대 포인트</p>
                <a class="font-12 wedive-txt-all">모두보기</a>
                <img class="float-right mt-n3" src="/static/images/assets/earth.gif" style="margin-right: -20px;margin-bottom:-30px;margin-top:-60px !important;max-height:300px;"/>
            </div>
        </div>

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0">이색 다이빙 포인트</h4>
                <p class="mb-3 color-gray-light-mid">난파선 등 171개의 이색 포인트</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(site,index) in site_list">
                    <div class="map-box">
                        <a href="/site/gosung">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="site.img" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15"> {{site.title}} </h4>
                                        <p class="pb-0 mb-0 line-height-m nearby_desc"> {{site.desc}} </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{site.star}} </span>
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


        <div class="card card-style" style="background: #d7d7d7;">
            <div class="content mb-0 mt-3">
                <h4 class="color-black text-start pt-1 mb-0">실내 수영장 포인트</h4>
                <p class="color-black mb-0 opacity-60 ls-n1">#차근차근&nbsp;&nbsp;#날씨무관</p>
                <a class="color-black font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;filter:brightness(0)"></i></a>
                <img class="mt-n2 float-right" src="/static/images/assets/pool.gif" width="240"/>
            </div>
        </div>

        

        <div class="card card-style">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 color-primary"><img src="/static/images/assets/ico_wedive_d.png" width="30" />위다이브 추천</h4>
                <p class="mb-3 color-gray-light-mid">38개의 다이빙 센터</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(center,index) in center_list" v-if="index>2 && index<5">
                    <div class="map-box">
                        <a href="/site/gosung">
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
            </div>
        </div>

        

        
        

        <div class="card card-style" style="background: #2885df;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-1">환상의 시간, 리브어보드</h4>
                <p class="color-white mb-0 color-gray">287개 리브어보드 모아보기</p>
                <a class="color-white font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;"></i></a>
                <img class="float-right mt-n3 movebox" src="/static/images/assets/boat.png" style="padding-bottom:16px;"/>
                <img class="movebox2" src="/static/images/assets/cloud.png" width="100"/>
                <img class="movebox3" src="/static/images/assets/cloud.png" width="70"/>
            </div>
        </div>

        <div class="card card-style" style="height:240px;background:url(/static/images/assets/whale.gif);background-size:cover;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-0">혹동고래 보신분?</h4>
                <p class="mb-0 opacity-60 ls-n1">#자연의 신비&nbsp;&nbsp;#버킷리스트</p>
                <a class="font-12 opacity-60 wedive-txt-all">보러가기 <i class="wedive_icoset wedive_icoset_rightarrow" style="-webkit-background-size: 393px 16px;background-size: 393px 16px;width: 16px;height: 20px;background-position: -375px 0px;filter:invert(1)"></i></a>
                
            </div>
        </div>

        
        
        <div data-menu-load="/static/menu-footer.html"></div>
    </div>
    </pull-to>


    <!-- End of Page Content--> 
    <a v-on:click="concierge" id="btn_new" :class="'btn btn-m mb-3 rounded-xl font-900 shadow-s icon-concierge'" style="background-color: #181818;"></a>
    
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  mounted() {
    localStorage.perferedSite = '/site_list';
    
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
  destroyed () {
    
  },
  data () {
    return {
        getUserRecommendationsByTargetType: [],
        prev_driection: true,
        lastScrollPosition: 0,
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
        site_list: [
            {title: "고성 사이트", "desc": "대한민국 3대 포인트가 위치한 사이트로 강원도 지역에서 가장 유명한 사이트 입니다. 특히 수중 금강산이라고 불리는 낙산대기 포인트와 개복치를 볼 수 있는 마이산 포인트 등이 유명합니다.", "img": "http://www.outdoornews.co.kr/news/photo/201402/13021_40743_1032.jpg", star: 3.8},
            {title: "속초 사이트", desc: "일반적으로 모래바닥으로 구성된 동해안과는 다르게 속초의 바다는 암석형태가 많이 있습니다. 덕분에 이곳에서 다이빙을 한다면 다양한 볼거리를 마주할 수 있습니다.", img: "https://i.ytimg.com/vi/xSJ4YSt3SRI/maxresdefault.jpg", star: 3.9},
            {title: "강릉 사이트", desc: "대한민국 최대 규모의 난파선 다이빙 포인트인 스텔라 난파선 포인트가 위치한 사이트 입니다. 더불어 강원도 3대 미항으로 꼽히는 삼곡항이 있는 등 아름다운 다이빙 사이트 입니다.", img: "http://www.uwmagazine.co.kr/news/photo/202003/368_1869_1729.jpg", star: 3.9},
        ],
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
                title
                description
                previewCount
                cssStyle
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
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    thumbnailUrl
                    }
                }
                ... on DivePoint {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
                    thumbnailUrl
                    }
                }
                ... on DiveCenter {
                    name
                    uniqueName
                    description
                    adminScore
                    backgroundImages {
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
                targetType: "diveSite"
            }
        }
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
    goSiteMap: function() {
        location.href = '/site_home';
    },
    goList: function() {
        location.href='/center_list';
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
                if (room.type == 'direct' && room.chatUsers.filter(u=>u._id == concierge_uid).length > 0) {
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
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.card-nearby {margin-left: 10px;background-size: cover !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(/static/images/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}
</style>
