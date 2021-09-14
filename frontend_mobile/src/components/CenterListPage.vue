<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-center" data-menu-load=""></div>    
    <div class="page-content text-start" style="padding-bottom: 65px;">
        
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            
            <div class="content">
                <div v-for="center in center_list">
                    <div class="map-box">
                        <a href="/center">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-bind:src="center.img" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4> {{center.title}} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{center.desc}} </p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                            {{center.feature}}
                                        </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{center.star}} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <img src="/static/images/logo_padi.svg" height="14" class="ext-img mt-n1" style="filter: grayscale(100%) contrast(0.5);">
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-for="i in center.price_index">￦</span>
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
    
        <div class="wedive-action text-center">
            <button data-menu="menu-filter" class="action-filter"><span>필터</span></button>
            <a href="/center_map" class="action-map"><span>지도</span></a>
        </div>
        
    </div>
    
    <!-- Menu Share -->
    <div id="menu-filter" class="menu menu-box-bottom" style="height:100%;">
        <div class="menu-title mt-n1">
            <h2 class="pt-3 pb-3 text-center">필터를 선택하세요</h2>
            <a href="#" class="close-menu"><i class="fa fa-times"></i></a>
        </div>
        <div class="content m-0 text-start">
            <div class="card card-style ms-0 me-0 rounded-0 mb-0">
                <div class="content" id="tab-group-2">
                    <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-blue-dark">
                        <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-level">레벨</a>
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-env">환경</a>
                        <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-time">시간</a>
                    </div>
                    <div class="clearfix mb-3"></div>
                    <div data-bs-parent="#tab-group-2" class="collapse ps-2 pe-2 show" id="tab-level">
                        <div class="list-group list-custom-small list-icon-0 check-visited">
                            <a href="" v-on:click="selectFilter($event, '교육자')"><i class="fa fa-utensils font-14 rounded-sm bg-green-light"></i><span>교육자</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '초급자')"><i class="fa fa-square font-14 rounded-sm bg-blue-light"></i><span>초급자</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '중급자')"><i class="fa fa-minus font-14 rounded-sm bg-red-light"></i><span>중급자</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '고급자')"><i class="fa fa-list font-14 rounded-sm bg-magenta-dark"></i><span>고급자</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '전문가')"><i class="fa fa-th-large font-14 rounded-sm bg-brown-dark"></i><span>전문가</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '특수기술')"><i class="fa fa-shopping-bag rounded-sm bg-green-dark"></i><span>특수기술</span><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div data-bs-parent="#tab-group-2" class="collapse ps-2 pe-2" id="tab-env">
                        <div class="list-group list-custom-small list-icon-0 check-visited">
                            <a href="" v-on:click="selectFilter($event, '케이브 포인트')"><i class="fa fa-shopping-cart rounded-sm bg-brown-dark"></i><span>케이브 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '난파선 포인트')"><i class="fa fa-heart rounded-sm bg-red-dark"></i><span>난파선 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '마크로 포인트')"><i class="fa fa-star rounded-sm bg-yellow-dark"></i><span>마크로 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '대물 포인트')"><i class="fa fa-list rounded-sm bg-blue-dark"></i><span>대물 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '월다이빙 포인트')"><i class="fa fa-bars rounded-sm bg-teal-dark"></i><span>월다이빙 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '딥다이빙 포인트')"><i class="fa fa-utensils rounded-sm bg-brown-dark"></i><span>딥다이빙 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '먹다이빙 포인트')"><i class="fa fa-heart rounded-sm bg-orange-dark"></i><span>먹다이빙 포인트</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '드리프트 포인트')"><i class="fa fa-utensils font-14 rounded-sm bg-green-light"></i><span>드리프트 포인트</span><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div data-bs-parent="#tab-group-2" class="collapse ps-2 pe-2" id="tab-time">
                        <div class="list-group list-custom-small list-icon-0 check-visited">
                            <a href="" v-on:click="selectFilter($event, '야간 다이빙')"><i class="fa fa-square font-14 rounded-sm bg-blue-light"></i><span>야간 다이빙</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '조류 다이빙')"><i class="fa fa-minus font-14 rounded-sm bg-red-light"></i><span>조류 다이빙</span><i class="fa fa-angle-right"></i></a>
                            <a href="" v-on:click="selectFilter($event, '아이스 다이빙')"><i class="fa fa-list font-14 rounded-sm bg-magenta-dark"></i><span>아이스 다이빙</span><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>    
            </div>
            <div style="position: absolute;width: 100%;bottom:16px;">
                <div id="filter_list" class="ms-3 me-3 mb-3"></div>
                <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3">적용</a>
            </div>
        </div>
    </div>


  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  methods: {
      click_condition: function() {
        console.log("click_condition");
        return true;
      },
      click_sort: function() {
        console.log("click_sort");
        return true;
      },
      selectFilter: function(event, elm) {
        event.target.classList.add("active");
        
        $("#filter_list").append('<button class="filter-item">'+ elm +'<i class="wd-close"></i></button>');
      }
  },
  mounted() {
  },
  created() {
    
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

#menu_condition:before {width: 12px;height: 13px;background-position: 0px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_condition.on:before {width: 12px;height: 13px;background-position: -10px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_sort:before {width: 14px;height: 11px;background-position: -35px 0px;content: '';margin-right: 5px;}
#menu_sort.on:before {width: 14px;height: 11px;background-position: -49px 0px;content: '';margin-right: 5px;}
#menu_map:before {width: 10px;height: 15px;background-position: -225px 0px;content: '';margin-right: 5px;vertical-align: -2px;}
#menu_map.on:before {width: 14px;height: 11px;background-position: -235px 0px;content: '';margin-right: 5px;}
.center_list_tab {position: relative;display: block;padding-top: 2px;text-align: center;line-height: 38px;background-color: #f7f7f9;color: #333;font-size: 15px;width: 100%;border-left: 1px solid #eaeaec;}
.center_menu {justify-content: space-around;border-top: 1px solid #e1e4e7;border-bottom: 1px solid #e1e4e7;}


.wedive-action {position: fixed;background-color: #1d397c;height:36px;border-radius: 18px;left: 50%!important;bottom: 90px;-webkit-box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);-webkit-transform: translateX(-50%);transform: translateX(-50%);}
.wedive-action:before {display: block;clear: both;content: "";position: absolute;top: 9px;left: 50%;width: 1px;height: 16px;background-color: #fff;}
.action-filter {display: block;float: left;width: 84px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-filter:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/icon_filter.png);text-indent: -9999px;vertical-align: middle;}
.action-map {position: relative;float: right;width: 74px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-map:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(/static/images/icon_map.png);text-indent: -9999px;vertical-align: middle;}
#filter_list {white-space: nowrap;overflow-x: scroll;height: 32px;}
</style>
