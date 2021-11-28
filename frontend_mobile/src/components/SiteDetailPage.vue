<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>    
    <div class="page-content">
        <div class="splide single-slider cover-slider slider-no-arrows slider-has-dots" id="cover-slider-1" data-card-height="250">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide" v-if="siteData.backgroundImages == null || siteData.backgroundImages.length == 0">
                        <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;">
                            
                        </div>
                    </div>
                    <div class="splide__slide" v-for="(image, index) in siteData.backgroundImages">
                        <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;'">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    
        
        
        <div class="card card-style" style="margin-top:-60px; z-index:1">
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-0 mt-1">{{ siteData.name }} 사이트</h2>
                <h2 class="wedive-score">{{ (siteData.adminScore/20).toFixed(1) }}</h2>
                <span class="wedive-score-desc">{{ recommend_word[parseInt(siteData.adminScore/20)] }}</span>
                <p class="color-gray m-0"><i class="fas fa-map-marked-alt" ></i> 대한민국, 강원도</p>
                
                <div class="evaluation d-flex mt-3">
                    <div class="flex-grow-1">
                        <div class="star-area text-start ms-3" style="height: 30px;">
                            <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">환경</span>
                            <div class="wedive-fish-back">
                                <div class="wedive-fish-front" :style="'width:'+siteData.waterEnvironmentScore+'%;'">
                                </div>
                                <span class="wedive-score-number">{{ (siteData.waterEnvironmentScore/20).toFixed(1) }}</span>
                            </div>
                        </div>
                        <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                            <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">유속</span>
                            <div class="wedive-wave-back">
                                <div class="wedive-wave-front" :style="'width:'+siteData.flowRateScore+'%;'">
                                </div>
                                <span class="wedive-score-number">{{ (siteData.flowRateScore/20).toFixed(1) }}</span>
                            </div>
                        </div>
                        <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                            <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">시야</span>
                            <div class="wedive-eye-back">
                                <div class="wedive-eye-front" :style="'width:'+siteData.eyeSightScore+'%;'">
                                </div>
                                <span class="wedive-score-number">{{ (siteData.eyeSightScore/20).toFixed(1) }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-grow-1">
                        <div style="height: 30px;padding-top:2px;">{{ recommend_env_word[parseInt(siteData.adminScore/20)] }}</div>
                        <div class="mt-1" style="height: 30px;padding-top:2px;">{{ recommend_flow_word[parseInt(siteData.adminScore/20)] }}</div>
                        <div class="mt-1" style="height: 30px;padding-top:2px;">{{ siteData.minSight }}-{{ siteData.maxSight }}m</div>
                    </div>
                </div>
                
                <p class="color-gray mt-3 mb-0 text-start me-2 ms-2">{{ siteData.description }}</p>
                
                <div class="divider mt-3 mb-3"></div>
                
                <div class="d-flex mb-0 text-center">
                    <div class="flex-grow-1 pd-0" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" src="/static/images/assets/ico_heart.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">찜 0</span>
                    </div>
                    
                    <div class="flex-grow-1 pd-0" data-menu="menu-share">
                        <img class="ext-img" src="/static/images/assets/ico_share.png" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">공유</span>
                    </div>
                </div>

            </div>
        </div>
        


        <div class="card card-style">
            <div class="content">
                <div class="text-center">
                    <i class="ico ico-wedive-w -circle color-primary scale-box fa-4x"></i>
                </div>
                <h4 class="text-center pt-2 mb-2">where is here?</h4>
                <div v-if="siteData.interests && siteData.interests.filter(x=>x.type=='divingPointEnvironment'||x.type=='divingType').length>0" class="row text-start txt_box2 m-0">
                    <div v-for="interest in siteData.interests.filter(x=>x.type=='divingPointEnvironment')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(point_category.findIndex(x=>x==interest.title)+1)+' icon-point'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                    <div v-for="interest in siteData.interests.filter(x=>x.type=='divingType')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(type_category.findIndex(x=>x==interest.title)+1)+' icon-type'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                </div>
                <div class="justify-content-center mb-2 mt-2 text-start me-n2 ms-n2">
                    <div class="splide single-slider slider-no-arrows slider-has-dots pb-4 mb-0" id="single-slider-info">
                        <div class="splide__track">
                            <div class="splide__list pt-n3">
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-calendar-alt font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">방문시기</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.visitTimeDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-temperature-high font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수온</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.waterTemperatureDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-190 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-level-down-alt font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수심</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.deepDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-water font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">조류</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.waterFlowDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-eye font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">시야</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.eyeSightDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-highlighter font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">다이빙 하이라이트</h1>
                                            <p class="text-start font-400">
                                                {{ siteData.highlightDescription }}
                                            </p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        <div class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">{{ siteData.name }} 인기 포인트</h4>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                <div v-for="(point,index) in siteData.divePoints" v-if="index<3">
                    <div class="">
                        <div class="">
                            <div class="justify-content-center mb-0 text-start">
                                <a :href="'/point/' + point.uniqueName">
                                    <div style="position: relative;">
                                        <h4 class="font-15 font-600 color-highlight"> {{ point.name }} </h4>
                                        <span class="color-gray-light-mid font-12 mb-0 text-more me-1">상세보기<i class="fas fa-chevron-right ms-2"></i></span>
                                    </div>
                                </a>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                    <span> {{ (point.adminScore/20).toFixed(1) }} </span>
                                </p>

                                <div v-if="point.highlights" class="row text-center row-cols-3 mb-1" style="padding-left:10px;padding-right:10px;">
                                    <a v-if="point.highlights.length>0&&point.highlights[0].images&&point.highlights[0].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[0].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[0].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[0].images[0].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.highlights.length>1&&point.highlights[1].images&&point.highlights[1].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[1].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[1].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[1].images[0].reference | makeReference }}</div>
                                    </a>
                                    <a v-if="point.highlights.length>2&&point.highlights[2].images&&point.highlights[2].images.length>0" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="point.highlights[2].images[0].url" title="">
                                        <img src="/static/images/assets/empty.png" v-bind:data-src="point.highlights[2].images[0].url" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-140">{{ point.highlights[2].images[0].reference | makeReference }}</div>
                                    </a>
                                </div>
                                
                                <p class="pb-0 mb-0 line-height-m point_desc"> {{point.highlightDescription}} </p>
                            </div>
                        </div>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>

        

        <!--<h4 class="text-start mb-2 font-14 ms-3 me-3">양양 여행을 즐기는 방법</h4>
        <div class="splide double-slider slider-no-arrows slider-no-dots visible-slider" id="double-slider-1">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <a href="#">
                            <div data-card-height="170" class="card ms-3 rounded-m shadow-l bg-1">
                                <div class="card-bottom">
                                    <h4 class="color-white font-15 mb-3 ms-3">인스타 갬성 뿜뿜<br/>사진이 잘나오는 포인트</h4>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>     
                    </div>
                    <div class="splide__slide">
                        <a href="#">
                            <div data-card-height="170" class="card ms-3 rounded-m shadow-l bg-3">
                                <div class="card-bottom">
                                    <h4 class="color-white font-15 mb-3 ms-3">General <br> Updates</h4>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>     
                    </div>
                    <div class="splide__slide">
                        <a href="#">
                            <div data-card-height="170" class="card ms-3 rounded-m shadow-l bg-6">
                                <div class="card-bottom">
                                    <h4 class="color-white font-15 mb-3 ms-3">PWA <br> Releases</h4>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>     
                    </div>
                    <div class="splide__slide">
                        <a href="#">
                            <div data-card-height="170" class="card ms-3 rounded-m shadow-l bg-16">
                                <div class="card-bottom">
                                    <h4 class="color-white font-15 mb-3 ms-3">Bootstrap <br>Compatiblity</h4>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>     
                    </div>
                    <div class="splide__slide">
                        <a href="#">
                            <div data-card-height="170" class="card ms-3 rounded-m shadow-l bg-17">
                                <div class="card-bottom">
                                    <h4 class="color-white font-15 mb-3 ms-3">Random <br> Tasklist</h4>
                                </div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>     
                    </div>
                </div>
            </div>
        </div>-->


        <div v-if="siteData.diveCenters && siteData.diveCenters.length>0" class="card card-style">
            <div class="content mt-3">
                <h4 class="text-start pt-2 mb-0">인기 다이빙 센터</h4>
                <p class="mb-3 color-gray-light-mid">{{ siteData.name }} 사이트의 {{ siteData.diveCenters.length }}개의 센터 준비됨</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>

                <div v-for="(center,index) in siteData.diveCenters" v-if="index<3">
                    <div class="">
                        <a href="/center">
                            <div class="">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-if="center.backgroundImages&&center.backgroundImages.length>0" v-bind:src="center.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                        <img v-else src="/static/empty.jpg" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-15"> {{ center.name }} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{ center.description }} </p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                            {{ (center.interests == null) ? "" : center.interests.filter(x=>x.type=='facility').map(x=>{return x.title}).join().replace(",",", ") }}&nbsp;
                                        </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{ (center.adminScore/20).toFixed(1) }} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-if="center.institutionTypes && center.institutionTypes.length > 0"><img v-if="insti in center.institutionTypes" class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="14" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;</span>
                                            <span v-if="interest.type=='priceIndex'" v-for="interest in center.interests" style="letter-spacing: -2px;">{{interest.title.replace(/\$/gi, '￦')}}</span>
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

        <div class="card card-style" v-if="siteData.youtubeVideoIds && siteData.youtubeVideoIds.length > 0">
            <div class="content mb-4 pb-2">
                <h4 class="text-start pt-2 mb-2">YouTube 소개</h4>
                <div v-for="youtube in siteData.youtubeVideoIds" class="responsive-iframe" style="-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;">
                    <iframe v-bind:src="'https://www.youtube.com/embed/'+youtube" frameborder='0' allowfullscreen></iframe>
                </div>
            </div>
        </div>
        


        
        <div class="card card-style">
            <div class="content mt-10">
                <h4 class="text-start pt-2 mb-0">인기 포인트</h4>
                <span class="wedive-txt-all color-gray mt-2"><img src="/static/images/assets/ico_pin2.png" width="19"/> 얕은수심&nbsp;&nbsp;<img src="/static/images/assets/ico_pin3.png" width="19"/> 깊은수심</span>
            </div>
            <div id="map" style="height: 300px;"></div>
            <div class="map-box hide">
                <a href="" id="map_box_shop_href">
                    <div class="bx">
                        <div class="justify-content-center mb-0 text-start">
                            <div class="" style="width: 95px; height:95px;">
                                <img id="map_box_shop_img" src="" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                            </div>
                            
                            <div class="" style="">
                                <h4 class="font-14 ellipsis mb-0" id="map_box_shop_name"></h4>
                                <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark"></i>
                                    &nbsp;<span id="map_box_shop_star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <h4 class="text-start mb-2" style="margin-left: 10px;margin-right: 10px;">근처 사이트</h4>
        <div class="splide single-slider slider-no-arrows visible-slider slider-no-dots" id="single-slider-nearby">
            <div class="splide__track">
                <div class="splide__list">
                    <div v-for="near in nearData" class="splide__slide">
                        <div class="card card-style card-nearby" :style="'background: url('+((near.backgroundImages!=null&&near.backgroundImages[0]!=null) ? near.backgroundImages[0].url : '/static/empty.jpg')+')'" data-card-height="260">
                        
                            <div class="card-top px-3 py-3">
                                <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                            </div>
                            <div class="card-bottom px-3 py-3">
                                <h4 class="color-white font-18 font-600">{{ near.name }} 사이트</h4>
                                <div class="divider bg-white opacity-20 mb-1"></div>
                                <div class="d-flex">
                                    <div class="align-self-center" style="max-width: 100%;">
                                        <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">{{ near.description }}</p>
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
        

        <div class="card card-style">
            <div class="content mb-2" id="tab-group-index">
                <h4 class="text-start pt-2 mb-2">스쿠버 지수</h4>
                <div class="tab-controls tabs-small tabs-rounded" data-highlight="bg-highlight">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-realtime">실시간 지수</a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-monthly">월별 수온</a>
                </div>
                <div class="clearfix mb-4"></div>
                <div data-bs-parent="#tab-group-index" class="collapse show" id="tab-realtime">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">날짜</th>
                                <th scope="col" class="color-white font-12">파고</th>
                                <th scope="col" class="color-white font-12">유속</th>
                                <th scope="col" class="color-white font-12">수온</th>
                                <th scope="col" class="color-white font-12">스쿠버</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="font-12" scope="row">09/11</th>
                                <td class="font-12">0.1~0.3</td>
                                <td class="font-12">0.4~1.0</td>
                                <td class="font-12">22~23</td>
                                <td class="color-blue-dark font-12">보통</td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">09/12</th>
                                <td class="font-12">0.2~0.3</td>
                                <td class="font-12">0.4~0.8</td>
                                <td class="font-12">23~24</td>
                                <td class="color-green-dark font-12">좋음</td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">09/13</th>
                                <td class="color-red-dark font-12">0.7~0.9</td>
                                <td class="color-red-dark font-12">0.6~1.2</td>
                                <td class="font-12">24</td>
                                <td class="color-red-dark font-12">나쁨</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="/static/images/assets/logo-kaoh.svg" />
                    </div>
                </div>
                <div data-bs-parent="#tab-group-index" class="collapse" id="tab-monthly">
                    <table class="table table-borderless text-center rounded-sm shadow-l mt-3" style="overflow: hidden;">
                        <thead>
                            <tr class="bg-secondary th-02">
                                <th scope="col" class="color-white font-12">월</th>
                                <th scope="col" class="color-white font-12">최저/최고 수온</th>
                                <th scope="col" class="color-white font-12">평균</th>
                                <th scope="col" class="color-white font-12">인기도</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-bottom" v-for="index in 12">
                                <th class="font-12" scope="row">{{ index }}월</th>
                                <td class="font-12 color-gray">1.1ºC / 2.2ºC</td>
                                <td v-for="month in siteData['month' + index]" v-if="month.type=='climate'" class="font-12">
                                    <img v-if="month.title=='sunny'" class="me-2" src="/static/images/assets/weather_sunny.svg" width="20" height="20"/>
                                    <img v-else-if="month.title=='cloudy'" class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>
                                    <img v-else-if="month.title=='rain'" class="me-2" src="/static/images/assets/weather_showers.svg" width="20" height="20"/>
                                    <img v-else-if="month.title=='heavyRain'" class="me-2" src="/static/images/assets/weather_heavy_rain.svg" width="20" height="20"/>
                                    2.1ºC
                                </td>
                                <td v-for="month in siteData['month' + index]" v-if="month.type=='popularity'">
                                    <img v-if="month.title=='unrecommended'" class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/>
                                    <img v-if="month.title=='soso'" class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/>
                                    <img v-if="month.title=='popular'" class="img_pop" src="/static/images/assets/icon_popularity_03.svg" width="32" height="32"/>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="/static/images/assets/logo-kma.svg" />
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">다이빙 로그</h4>
            <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div class="splide__slide pt-2">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">5.00</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-start">펀 다이빙</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                                
                                            </div>
                                            <div>
                                                <h6 class="text-end">김성진</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.30</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <a href="https://t1.daumcdn.net/cfile/tistory/224C493F542D088905" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/assets/empty.png" data-src="https://t1.daumcdn.net/cfile/tistory/224C493F542D088905" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            나이트다이빙을 해보면 본인이 체질인지 여부를 바로 알 수 있다. 입수 후 어두운 바다가 눈앞에 펼쳐지지만 이내 모든게 밝아진다. 나이트다이빙 특유의 분위기가 가득하다. 마치 낯선 행성을 탐험하는 기분이랄까, 이국적으로 몽환적인 분위기에 한껏 취하게 된다. 함께 간 모든 사람들이 너무나도 좋아해서 힘들게 기획한만큼 보람있는 다이빙 이었다.
                                        </p>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.98</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-start">트레이닝</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="text-end">조관우</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.27</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            남애 스쿠버 리조트의 젊은 스태프들은 항상 기운이 넘치고 시원시원하고 친절하다. 고객들이 원하는 바를 하나하나 세심히 맞춰주기 위해 노력하는 스태프들 덕에 편안히 다이빙을 즐길 수 있다. 작은 동물에도 애정을 쏟고 살뜰히 보살피는 마음씀씀이가 리조트 곳곳에 베어 리조트를 찾는 다이버들의 마음도 편안하게 해준다. 편안한 마음으로 신나게 기운차게 다이빙을 다이빙을 즐길 수 있는 곳, 남애 스쿠버 리조트이다.
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">4.5</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-start">펀 다이빙</p>
                                                </div>
                                                <span>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                    <i class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <h6 class="text-end">조윤구</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">2021.08.20</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <a href="http://www.uwmagazine.co.kr/news/photo/202008/895_2811_2553.jpg" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/assets/empty.png" data-src="http://www.uwmagazine.co.kr/news/photo/202008/895_2811_2553.jpg" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            파고는 0.5미터 이상이였습니다. 해안 근처는 잔잔해 보였는데 5분정도 배타고 나가니 파고도 높아지고 조류도 제법 강했습니다.  무엇보다 시야가 너무 별로였습니다. 부유물들이 겨울바다 답지않게 너무 심했습니다. 영상을 보시면 아시겠지만 부유물덕에 입수해서 내려가는 속도가 느껴질만큼 많았습니다.
                                        </p>
                                </div>   
                            </div>
                            <div class="splide__slide">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">5개 다이빙 로그</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div class="star-area mt-4 text-center">
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
                <i class="fa fa-star font-20 color-gray-light"></i>
            </div>
            <div class="text-center color-gray mt-2 mb-3">이곳을 방문해보셨나요?</div>
            <div class="me-4 ms-4" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다녀온 기록을 남겨보세요.</p>
                <p class="mb-0 color-highlight">지금 로그북남기기 <i class="fas fa-chevron-right ms-1"></i></p>
            </div>
        </div>



        
        <div data-menu-load="/static/menu-footer.html"></div>

    </div>


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        data: {
            query: `
            query getDiveSiteByUniqueName($uniqueName: String!) {
            getDiveSiteByUniqueName(uniqueName: $uniqueName) {
                diveCenters {
                    _id
                    name
                    uniqueName
                    adminScore
                    images {
                        _id
                        name
                        description
                        reference
                        thumbnailUrl
                    }
                }
                divePoints {
                    _id
                    name
                    uniqueName
                    latitude
                    longitude
                    minDepth
                    adminScore
                    highlightDescription
                    highlights {
                        images {
                            _id
                            name
                            description
                            reference
                            thumbnailUrl
                        }    
                    }
                    images {
                        _id
                        name
                        description
                        reference
                        thumbnailUrl
                    }
                    backgroundImages {
                        _id
                        name
                        description
                        reference
                        thumbnailUrl
                    }
                }
                _id
                address
                latitude
                longitude
                countryCode
                name
                uniqueName
                description
                images {
                _id
                name
                reference
                description
                uploaderId
                mimeType
                encoding
                fileSize
                createdAt
                updatedAt
                }
                backgroundImages {
                _id
                name
                description
                reference
                uploaderId
                mimeType
                encoding
                fileSize
                createdAt
                updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                publishStatus
                month1 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month2 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month3 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month4 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month5 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month6 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month7 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month8 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month9 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month10 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month11 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                month12 {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                    createdAt
                    updatedAt
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                interests {
                _id
                title
                type
                iconType
                iconName
                iconColor
                iconUrl
                name
                uniqueName
                description
                images {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                }
                backgroundImages {
                    _id
                    name
                    description
                    reference
                    uploaderId
                    mimeType
                    encoding
                    fileSize
                }
                youtubeVideoIds
                referenceUrls
                memo
                }
                eyeSightScore
                waterTemperatureScore
                adminScore
                flowRateScore
                waterEnvironmentScore
                minSight
                maxSight
                visitTimeDescription
                waterTemperatureDescription
                deepDescription
                waterFlowDescription
                eyeSightDescription
                highlightDescription
                createdAt
                updatedAt
            }
            }
            `,
            variables: {
                uniqueName: to.params.id
            }

        }
        }, {
        headers: {
            countryCode: 'ko',
            android: (localStorage.android) ? localStorage.android : "",
        }
        });

        console.log(result.data.data.getDiveSiteByUniqueName);
        if (result.data.data.getDiveSiteByUniqueName.backgroundImages.length > 0) {
            for (var i=0; i<result.data.data.getDiveSiteByUniqueName.backgroundImages.length; i++) {
                result.data.data.getDiveSiteByUniqueName.backgroundImages[i].url = '/static/empty.jpg';
            }
            var id_arr = [];
            var width_arr = [];
            for (var i=0; i<result.data.data.getDiveSiteByUniqueName.backgroundImages.length; i++) {
                id_arr.push(result.data.data.getDiveSiteByUniqueName.backgroundImages[i]._id);
                width_arr.push(720);
            }
            var result_image = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
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
            }, {
            headers: {
            countryCode: 'ko',
            }
            });
            if (result_image.data.data.getImageUrlsByIds) {
                for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                    result.data.data.getDiveSiteByUniqueName.backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                    //$(".background_img_" + i).css("background", "url(" + result_image.data.data.getImageUrlsByIds[i] + ")");
                }
            }
        }


        // points 내 하이라이트 이미지 리스트
        if (result.data.data.getDiveSiteByUniqueName.divePoints.length > 0) {
            for (var j=0; j<result.data.data.getDiveSiteByUniqueName.divePoints.length; j++) {
                for (var i=0; i<result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights.length; i++) {
                    if (result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images.length>0) {
                        result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images[0].url = '/static/empty.jpg';
                    }
                }
                var id_arr = [];
                var width_arr = [];
                for (var i=0; i<result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights.length; i++) {
                    if (result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images.length > 0) {
                        id_arr.push(result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images[0]._id);
                        width_arr.push(720);
                    }
                }
                if (id_arr.length > 0) {
                    var result_image = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
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
                    }, {
                    headers: {
                    countryCode: 'ko',
                    }
                    });

                    var cnt = 0;
                    for (var i=0; i<result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights.length; i++) {
                        if (result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images && result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images.length > 0) {
                            result.data.data.getDiveSiteByUniqueName.divePoints[j].highlights[i].images[0].url = result_image.data.data.getImageUrlsByIds[cnt++];
                        }
                    }
                }
            }
        }
        // 근처 사이트 조회
        var result_nearby = null;
        {
            result_nearby = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            data: {
                query: `
                    query GetDiveSitesNearBy($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
                        getDiveSitesNearby(lat1: $lat1, lon1: $lon1, lat2: $lat2, lon2: $lon2) {
                            _id
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                        }
                    }
                `,
                variables: {
                    lat1: (result.data.data.getDiveSiteByUniqueName.latitude-0.4),
                    lon1: (result.data.data.getDiveSiteByUniqueName.longitude-0.4),
                    lat2: (result.data.data.getDiveSiteByUniqueName.latitude+0.4),
                    lon2: (result.data.data.getDiveSiteByUniqueName.longitude+0.4),
                }

            }
            }, {
            headers: {
            countryCode: 'ko',
            }
            });
        }
        // 근처 사이트 backgroundImage
        if (result_nearby.data.data.getDiveSitesNearby.length > 0) {
            for (var j=0; j<result_nearby.data.data.getDiveSitesNearby.length; j++) {
                if (result_nearby.data.data.getDiveSitesNearby[j]._id != result.data.data.getDiveSiteByUniqueName._id) {
                    for (var i=0; i<result_nearby.data.data.getDiveSitesNearby[j].backgroundImages.length; i++) {
                        result_nearby.data.data.getDiveSitesNearby[j].backgroundImages[i].url = '/static/empty.jpg';
                    }
                    var id_arr = [];
                    var width_arr = [];
                    for (var i=0; i<result_nearby.data.data.getDiveSitesNearby[j].backgroundImages.length; i++) {
                        id_arr.push(result_nearby.data.data.getDiveSitesNearby[j].backgroundImages[i]._id);
                        width_arr.push(720);
                    }
                    if (id_arr.length > 0) {
                        var result_image = await axios({
                        url: 'https://api.wedives.com/graphql',
                        method: 'post',
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
                        }, {
                        headers: {
                        countryCode: 'ko',
                        }
                        });
                        if (result_image.data.data.getImageUrlsByIds) {
                            for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                                result_nearby.data.data.getDiveSitesNearby[j].backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                            }
                        }
                    }
                }
            }
        }
        
        next(vm => {vm.setData(result.data.data.getDiveSiteByUniqueName, result_nearby.data.data.getDiveSitesNearby)});
    }
  },
  async mounted() {
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
        $("#footer-bar").hide();
    }

    
    let script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCWu8Fw-h-f1t8Sp3I7R3l_Ukr24HunXQM';
    document.body.appendChild(script);
    script.onload = () => {
        const night_style = [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
            ];

        const map_style = (localStorage['wedive-Theme'] == 'light-mode') ? [] : night_style;

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.siteData.latitude, lng: this.siteData.longitude},
            zoom: 12,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            styles: map_style
        });

        for (var i=0; i<this.siteData.divePoints.length; i++) {
            var minDepth = this.siteData.divePoints[i].minDepth;
            var _position = {lat: this.siteData.divePoints[i].latitude, lng: this.siteData.divePoints[i].longitude};
            var _img = (minDepth < 18) ? '/static/images/assets/ico_pin2_o8.png' : '/static/images/assets/ico_pin3_o8.png';
            const _marker_class = (minDepth < 18) ? 'marker-position2' : 'marker-position3';

            const title = this.siteData.divePoints[i].name;
            const uniqueName = this.siteData.divePoints[i].uniqueName;
            const desc = this.siteData.divePoints[i].description;
            const star = (this.siteData.divePoints[i].adminScore/20).toFixed(1);
            console.log(this.siteData.divePoints[i]);
            const img = (this.siteData.divePoints[i].backgroundImages&&this.siteData.divePoints[i].backgroundImages.length>0) ? this.siteData.divePoints[i].backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
            const _sml_img = _img;
            const _big_img = (minDepth < 18) ? '/static/images/assets/ico_pin_big2.png' : '/static/images/assets/ico_pin_big3.png';

            const marker_point = new google.maps.Marker({
                map: this.map,
                position: _position,
                label: {text: title, color: 'white', className: _marker_class},
                icon: new google.maps.MarkerImage(_img, null, null, null, new google.maps.Size(38,43)),
            });

            marker_point.addListener("click", () => {
                $(".map-box").removeClass("hide");
                for (var j=0; j<this.marker_list.length; j++) {
                    var _icon = this.marker_list[j].getIcon();
                    if (_icon.size.width != 38) {
                        this.marker_list[j].setIcon(new google.maps.MarkerImage(this.marker_img_list[j].ori, null, null, null, new google.maps.Size(38,43)));
                        try {
                            var _title = this.marker_list[j].getLabel().text;
                            this.marker_list[j].setLabel({text: _title, color: 'white', className: _marker_class});
                        } catch (e) {
                        }
                    }
                }
                
                $("#map_box_shop_href").attr("href", "/point/" + uniqueName);
                $("#map_box_shop_name").text(title);
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text(star);
                $("#map_box_shop_img").attr("src", img);
                
                
                marker_point.setIcon(new google.maps.MarkerImage(_big_img, null, null, null, new google.maps.Size(58,66)));
                marker_point.setLabel({text: title, color: 'white', className: _marker_class + ' mt-86'});
                if (this.map.getZoom() == 14) {
                    this.map.panTo(marker_point.getPosition());
                } else {
                    this.map.setZoom(14);
                    this.map.setCenter(marker_point.getPosition());
                }
            });
            this.marker_list.push(marker_point);
            this.marker_img_list.push({ori: _sml_img, big: _big_img});
        }

        this.map.addListener("click", (e) => {
            $(".map-box").addClass("hide");
            for (var j=0; j<this.marker_list.length; j++) {
                var _icon = this.marker_list[j].getIcon();
                if (_icon.size.width != 38) {
                    this.marker_list[j].setIcon(new google.maps.MarkerImage(this.marker_img_list[j].ori, null, null, null, new google.maps.Size(38,43)));
                    var _label = this.marker_list[j].getLabel();
                    var _title = _label.text;
                    var _className = _label.className.replace('mt-86', '');
                    this.marker_list[j].setLabel({text: _title, color: 'white', className: _className});
                }
            }
            this.map.setZoom(12);
        });
        
    };
  },
  created() {
    
  },
  data () {
    return {
        map: null,
        siteData: {},
        nearData: [],
        marker_list: [],
        marker_img_list: [],
        recommend_word: ["비추천", "낮음", "일반적", "좋음", "최고", "완벽함"],
        point_category: ["해저지형", "해저협곡", "큰 암반", "강한조류", "난파선", "가두리양식장", "마크로", "먹(Muck)", "인공어초", "블루홀", "리프다이빙", "빙하", "초대형난파선", "난파선성지", "수중조형물", "수중유적", "대물"],
        type_category: ["월다이빙", "블랙워터다이빙", "드리프트다이빙", "아이스다이빙", "야간다이빙", "동굴다이빙", "해루질", "프리다이빙", "스노클링", "케이지다이빙", "렉다이빙", "테크니컬다이빙", "나이트록스다이빙"],
        recommend_env_word: ["매우열악", "열악", "평범", "우수", "최고", "극락"],
        recommend_flow_word: ["매우느림", "느림", "일반적", "빠름", "매우빠름", "폭풍"],
    }
  },
  methods: {
      setData(_siteData, _nearData) {
          this.siteData = _siteData;
          _nearData.forEach(d => {
              if (d._id != this.siteData._id) {
                  this.nearData.push(d);
              }
          });
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);
      },
      call: function() {
          console.log("call");
      },
      goCourse: function() {
          location.href='/course';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(/static/images/assets/question.png);text-indent: -9999px;}

.span_feature {width:66px;}
.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -38px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -38px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -38px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -38px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -38px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -38px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -72px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -72px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -72px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -72px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -72px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -72px;}
.ico_feature19 {width: 44px;height: 40px;background-position: 0px -108px;}
.ico_feature20 {width: 44px;height: 40px;background-position: -45px -108px;}
.ico_feature21 {width: 44px;height: 40px;background-position: -90px -108px;}
.ico_feature22 {width: 44px;height: 40px;background-position: -135px -108px;}
.ico_feature23 {width: 44px;height: 40px;background-position: -180px -108px;}
.ico_feature24 {width: 44px;height: 40px;background-position: -225px -108px;}
.ico_feature25 {width: 44px;height: 40px;background-position: 0px -144px;}
.ico_feature26 {width: 44px;height: 40px;background-position: -45px -144px;}
.ico_feature27 {width: 44px;height: 40px;background-position: -90px -144px;}
.ico_feature28 {width: 44px;height: 40px;background-position: -135px -144px;}
.ico_feature29 {width: 44px;height: 40px;background-position: -180px -144px;}
.ico_feature30 {width: 44px;height: 40px;background-position: -225px -144px;}

.icon-point {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/assets/wedive_point.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}
.icon-type {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/assets/wedive_type.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.ico-wedive-w {-webkit-font-smoothing: antialiased;
    display: grid;
    margin-left: calc(50% - 20px);
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
    
    width:40px;
    height:40px;}
.ico-wedive-w:before {content: "";
        background-image: url('/static/images/assets/ico_wedive_d.png');
        background-size:40px 40px;
        width:40px;
        height:40px;
        display:inline-block;
}
.min-h-230 {min-height: 230px;}
.txt_box2 {background: #f4f4f4; border-radius: .5rem;padding: 6px 0px 8px 0px;}

.wedive-score {position: absolute;right: 15px; top: 15px;background: #1d397c; border-radius: 10px 10px 10px 0px; padding: 4px 8px; color: white;}
.wedive-score-desc {position: absolute;right: 10px; top: 44px;color: #1d397c; width:56px;}
.wedive-title {font-family: 'Noto Sans Korean' !important;font-weight:700;margin-bottom:0px;}
.wedive-desc {font-family: 'Noto Sans Korean' !important;font-weight:200;margin-bottom:16px;line-height: 1.6}
.min-h-160 {min-height: 160px;}
.font-noto {font-family: 'Noto Sans Korean'}
.point_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wd-220 {width:220px !important;}
.card-nearby {margin-left: 10px;background-size: cover !important;}

.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}

</style>
