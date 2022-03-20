<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content pb-0">
        <div v-if="pointData.backgroundImages == null || pointData.backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain;height:250px;">
        </div>
        <div v-else style="min-height:250px;height:250px;max-height:250px;">
            <div class="splide single-slider cover-slider slider-no-arrows slider-no-dots" id="cover-slider-1" data-card-height="250">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-if="pointData.backgroundImages == null || pointData.backgroundImages.length == 0">
                            <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;background-position: center !important;">
                                
                            </div>
                        </div>
                        <div class="splide__slide" v-for="(image, index) in pointData.backgroundImages">
                            <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;background-position: center !important;height:250px;'">
                                <div class="wedive-source" style="bottom:50px;">{{ image.reference | makeReference }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cover-slider-temp" :style="'background:url('+pointData.backgroundImages[0].url+');background-size: cover;height:250px;background-position: center;position:absolute;width:100%;top:58px;'">
            </div>
        </div>
        

    
        <div class="card card-style" style="margin-top:-40px; z-index:1">
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-0 mt-1">{{ pointData.name }}</h2>
                <h2 class="wedive-score">{{ (pointData.adminScore/20).toFixed(1) }}</h2>
                <span class="wedive-score-desc">{{ recommend_word[parseInt(pointData.adminScore/20)] }}</span>
                <p class="color-gray m-0 ellipsis" style="max-width: calc(100vw - 130px);display: inline-block;"><i class="fas fa-map-marked-alt" ></i> {{ pointData.address }}</p>
                

                <div class="evaluation mt-3">
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div class="star-area text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">환경</span>
                                <div class="wedive-fish-back">
                                    <div class="wedive-fish-front" v-bind:style="'width:'+(pointData.waterEnvironmentScore > 3 ? pointData.waterEnvironmentScore-3 : 0)+'%'">
                                    </div>
                                    <span class="wedive-score-number">{{ (pointData.waterEnvironmentScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                            <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">조류</span>
                                <div class="wedive-wave-back">
                                    <div class="wedive-wave-front" v-bind:style="'width:'+(pointData.flowRateScore > 3 ? pointData.flowRateScore-3 : 0)+'%'">
                                    </div>
                                    <span class="wedive-score-number">{{ (pointData.flowRateScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                            <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">시야</span>
                                <div class="wedive-eye-back">
                                    <div class="wedive-eye-front" v-bind:style="'width:'+(pointData.eyeSightScore > 3 ? pointData.eyeSightScore-3 : 0)+'%'">
                                    </div>
                                    <span class="wedive-score-number">{{ (pointData.eyeSightScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div style="height: 30px;padding-top:2px;">{{ recommend_env_word[parseInt(pointData.adminScore/20)] }}</div>
                            <div class="mt-1" style="height: 30px;padding-top:2px;">{{ recommend_flow_word[parseInt(pointData.adminScore/20)] }}</div>
                            <div class="mt-1" style="height: 30px;padding-top:2px;">{{ pointData.minSight }}-{{ pointData.maxSight }}m</div>
                        </div>
                    </div>
                    <div class="divider mt-2 mb-2"></div>
                    <div class="d-flex">
                        <div class="flex-grow-1 text-start ms-3">
                            <span class="font-14 me-2 color-gray">깊이</span>
                            {{ pointData.minDepth }}-{{ pointData.maxDepth }}m
                        </div>
                        <div class="flex-grow-1">
                            
                            <span style="background-color: gray;color:white;padding: 4px 8px;border-radius:4px;">{{ pointData.depthShow }} 가능</span>
                        </div>
                    </div>
                </div>

                <p class="color-gray mt-3 mb-0 text-start me-2 ms-2">{{ pointData.description }}</p>
                
                <div class="divider mt-3 mb-3"></div>
                
                <div class="d-flex mb-0 text-center">
                    <div v-on:click="clickLike()" :class="'flex-grow-1 pd-0' + ((idToken == null || nickName == null) ? ' opacity-40' : '')" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" :src="'/static/images/assets/'+like_img+'.png'" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">{{ pointData.likes }}</span>
                    </div>
                    
                    <div v-on:click="clickSubscribe()" :class="'flex-grow-1 pd-0' + ((idToken == null || nickName == null) ? ' opacity-40' : '')">
                        <img class="ext-img" :src="'/static/images/assets/'+subscribe_img+'.png'" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto"></span>
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
                <div class="text-center txt_box2 mb-2 font-16">
                    <img class="me-2" src="/static/images/assets/wedives_choice.svg" height="34" /> wedive's choice 2021
                </div>
                <div v-if="pointData.interests && pointData.interests.filter(x=>x.type=='divingPointEnvironment'||x.type=='divingType').length>0" class="row text-start txt_box2 m-0">
                    <div v-for="interest in pointData.interests.filter(x=>x.type=='divingPointEnvironment')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(point_category.findIndex(x=>x==interest.title)+1)+' icon-point'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                    <div v-for="interest in pointData.interests.filter(x=>x.type=='divingType')" class="ico_feature col-3">
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
                                            <p class="text-start font-400" v-if="pointData.diveSite != null">
                                                {{pointData.diveSite.visitTimeDescription}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-temperature-high font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수온</h1>
                                            <p class="text-start font-400" v-if="pointData.diveSite != null">
                                                {{pointData.diveSite.waterTemperatureDescription}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-190 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-level-down-alt font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수심</h1>
                                            <p class="text-start font-400" v-if="pointData.diveSite != null">
                                                {{pointData.diveSite.deepDescription}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-water font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">조류</h1>
                                            <p class="text-start font-400" v-if="pointData.diveSite != null">
                                                {{pointData.diveSite.waterFlowDescription}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-eye font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">시야</h1>
                                            <p class="text-start font-400" v-if="pointData.diveSite != null">
                                                {{pointData.diveSite.eyeSightDescription}}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-highlighter font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">다이빙 하이라이트</h1>
                                            <p v-if="pointData.highlightDescription == '' && pointData.diveSite != null" class="text-start font-400">{{ pointData.diveSite.highlightDescription }}</p>
                                            <p class="text-start font-400">{{ pointData.highlightDescription }}</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>

        
        <div class="card card-style" v-if="pointData.youtubeVideoIds && pointData.youtubeVideoIds.length > 0">
            <div class="content mb-4 pb-2">
                <h4 class="text-start pt-2 mb-2">YouTube 소개</h4>
                <div v-for="(youtube,index) in pointData.youtubeVideoIds" :class="'responsive-iframe' + (index>0 ? ' mt-3' : '')" style="-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;">
                    <iframe v-bind:src="'https://www.youtube.com/embed/'+youtube" frameborder='0' allowfullscreen></iframe>
                </div>
            </div>
        </div>


        <div v-if="pointData.diveCenters && pointData.diveCenters.length>0" class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-0">인기 다이빙 센터</h4>
                <p class="mb-3 color-gray-light-mid">{{ pointData.name }} 포인트의 {{ pointData.diveCenters.length }}개의 센터 준비됨</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                
                <div v-for="(center,index) in pointData.diveCenters" v-if="index<3">
                    <div class="">
                        <a :href="'/center/'+center.uniqueName">
                            <div class="">
                                <div class="justify-content-center mb-0 text-start">
                                    <div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                        <img v-if="center.backgroundImages&&center.backgroundImages.length>0" v-bind:src="center.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                        <img v-else src="/static/empty.jpg" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;">
                                    </div>
                                    <div class="" style="padding-left: 110px;">
                                        <h4 class="font-16"> {{ center.name }} </h4>
                                        <p class="pb-0 mb-0 line-height-m ellipsis"> {{ center.description }} </p>
                                        <p class="pb-0 mb-0 mt-n1 ellipsis color-gray-light-mid">
                                            {{ (center.interests == null) ? "" : center.interests.filter(x=>x.type=='facility').map(x=>{return x.title}).join().replace(",",", ") }}&nbsp;
                                        </p>
                                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                            <span> {{ (center.adminScore/20).toFixed(1) }} </span>
                                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                                            <span v-if="center.institutionTypes && center.institutionTypes.length > 0"><img v-if="insti in center.institutionTypes" class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="14" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;</span>
                                            <span v-if="interest.type=='priceIndex'" v-for="interest in center.interests" class="color-gray">{{interest.title.replace(/\$/gi, '₩')}}</span>
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
            <div v-if="pointData.images == null || pointData.images.length == 0" class="content">
                <div class="text-center"><img src="/static/images/assets/empty_image.jpg" width="60%" style="margin-top:-40px;"/></div>
                <div class="font-noto text-center mb-3" style="color: #717a92;">등록된 사진이 아직 없어요.</div>
            </div>
            <div class="content">
                <div class="gallery-view-controls">
                    <div class="divider mb-0"></div>
                    <a href="#" class="gallery-view-1" style="width: 50%;"><i class="fa fa-th"></i></a>
                    <a href="#" class="color-highlight gallery-view-2" style="width: 50%;"><i class="fa fa-th-large"></i></a>
                    <div class="clearfix"></div>
                </div>
                <div class="content m-0">
                    <div class="gallery-views gallery-view-2">
                        <a v-for="image in pointData.images" data-gallery="gallery-1" :href="image.url" :title="image.reference" style="position: relative;" class="square-rect">
                            <img src="/static/images/assets/empty.png" :data-src="image.url" class="rounded-m preload-img shadow-l img-fluid" alt="img" style="padding: 0px;">
                            <div class="wedive-source mx-140">{{ image.reference | makeReference }}</div>
                            <div class="caption pt-0 mb-2 ms-3">
                                <p class="color-gray-light-mid font-600 mb-n1">{{ image.name }}</p>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>


        <div class="card card-style">
            <div class="content mt-10">
                <h4 class="text-start pt-2 mb-0">위치</h4>
            </div>
            <div id="map" style="height: 300px;"></div>
            <div class="map-box hide">
                <a id="map_box_shop_href" href="">
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

        
        <h4 v-if="nearData.length > 0" class="text-start mb-2" style="margin-left: 10px;margin-right: 10px;">근처 포인트</h4>
        <div v-if="nearData.length > 0" class="splide single-slider slider-no-arrows visible-slider slider-no-dots" id="single-slider-nearby">
            <div class="splide__track">
                <div class="splide__list">
                    <div v-for="near in nearData" class="splide__slide">
                        <div class="card card-style card-nearby" :style="'background: url('+((near.backgroundImages!=null&&near.backgroundImages[0]!=null) ? near.backgroundImages[0].url : '/static/empty.jpg')+')'" data-card-height="260">
                        
                            <div class="card-top px-3 py-3">
                                <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                            </div>
                            <div class="card-bottom px-3 py-3">
                                <h4 class="color-white font-18 font-600">{{ near.name }}</h4>
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
                <h4 class="text-start pt-2 mb-2">월별 수온</h4>
                <div>
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
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">1월</th>
                                <td class="font-12 color-gray">5.2ºC / 12.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>8.8ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">2월</th>
                                <td class="font-12 color-gray">3.4ºC / 9.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">3월</th>
                                <td class="font-12 color-gray">3.2ºC / 9.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>6.3ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">4월</th>
                                <td class="font-12 color-gray">7.0ºC / 13.3ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">5월</th>
                                <td class="font-12 color-gray">10.5ºC / 17.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.6ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">6월</th>
                                <td class="font-12 color-gray">15.1ºC / 23.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>19.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">7월</th>
                                <td class="font-12 color-gray">19.9ºC / 24.4ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_heavy_rain.svg" width="20" height="20"/>22.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">8월</th>
                                <td class="font-12 color-gray">21.3ºC / 26.0ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_showers.svg" width="20" height="20"/>23.7ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">9월</th>
                                <td class="font-12 color-gray">18.6ºC / 24.1ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_sunny.svg" width="20" height="20"/>21.4ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">10월</th>
                                <td class="font-12 color-gray">14.9ºC / 21.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>18.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_02.svg" width="32" height="32"/></td>
                            </tr>
                            <tr class="border-bottom">
                                <th class="font-12" scope="row">11월</th>
                                <td class="font-12 color-gray">10.8ºC / 17.6ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>14.2ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
                            </tr>
                            <tr>
                                <th class="font-12" scope="row">12월</th>
                                <td class="font-12 color-gray">6.4ºC / 13.8ºC</td>
                                <td class="font-12"><img class="me-2" src="/static/images/assets/weather_partly_cloudy.svg" width="20" height="20"/>10.1ºC</td>
                                <td class=""><img class="img_pop" src="/static/images/assets/icon_popularity_01.svg" width="32" height="32"/></td>
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
            <a :href="'/review/'+pointData._id" class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div v-if="pointData.reviews && pointData.reviews.length>0" class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="review in pointData.reviews" class="splide__slide pt-2">
                                <div class="min-h-230 p-2">
                                        <div class="d-flex">
                                            <div class="flex-grow-1">
                                                <div class="float-start">
                                                    <h1 class="fa-2x font-900 me-2 mb-0">{{review.rating}}.00</h1>
                                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-start hide">펀 다이빙</p>
                                                </div>
                                                <span>
                                                    <i v-for="index in review.rating" class="fa fa-star color-yellow-dark"></i>
                                                </span>
                                                
                                            </div>
                                            <div>
                                                <h6 class="text-end">{{ review.author.name }}</h6>
                                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">{{ review.createdAt ? timeForToday(review.createdAt) : '' }}</p>
                                            </div>
                                        </div>
                                        <p class="review-text mt-2 mb-1">
                                            <div v-if="review.images && review.images.length>0">
                                            <a v-for="(image,index) in review.images" v-if="index<3" :href="image.thumbnailUrl" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                                <img src="/static/images/assets/empty.png" :data-src="image.thumbnailUrl" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            </div>
                                            {{ review.content }}
                                        </p>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <a :href="'/review/'+getDivePointByUniqueName._id">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">{{ pointData.reviews.length }}개 다이빙 로그</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center">
                    <img src="/static/images/assets/empty_list.jpg" width="50%" />
                    <p class="color-gray">아직 작성된 다이빙 로그가 없어요.</p>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div v-on:click="login()" :data-menu="((idToken == null || nickName == null) ? '' : 'menu-review')" :class="((idToken == null || nickName == null) ? 'opacity-40' : '')">
                <div class="star-area mt-4 text-center" style="letter-spacing: -2px;">
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                </div>
                <div class="me-4 ms-4 mt-1" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                    <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다녀온 기록을 남겨보세요.</p>
                    <p class="mb-0 color-highlight">지금 로그북남기기 <i class="fas fa-chevron-right ms-1"></i></p>
                </div>
            </div>
        </div>


        
        <div data-menu-load="/static/menu-footer.html"></div>

    </div>


    <!-- End of Page Content--> 

    <!-- 리뷰 팝업 -->
    <div id="menu-review" 
         class="menu menu-box-modal" 
         data-menu-height="470" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ pointData.name }} 다이빙 로그</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <div class="text-center mt-3">
                <star-rating @rating-selected="setRating" text-class="hide" :rating="rating" v-bind:star-size="30" :padding="5" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="display: inline-block;"></star-rating>
            </div>
            <div class="text-center color-gray mt-1 mb-2" v-html="rateDescription"></div>
        </div>
        <div class="content mt-0">
            <div class="input-style validate-field mt-3">
                <textarea class="wedive-textarea" placeholder="다이빙은 어떠셨나요?" v-model="review_detail"></textarea>
            </div>
            <div id="div_upload_photo" class="row m-0 mb-3">
            </div>
            <div class="mb-3 text-center p-2" style="border: 1px solid #e9e9e9;">
                <input type="file" @change="addImage" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="/static/images/assets/icon_camera.png" height="18"/>첨부하기</div>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="review_send()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">로그등록</a>
            </div>
        </div>
    </div>
    
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
                query getAllDivePoints($uniqueName: String!) {
                    getDivePointByUniqueName(uniqueName: $uniqueName) {
                        _id
                        diveSiteId
                        diveCenters {
                            _id
                            name
                            uniqueName
                            description
                            interests {
                                title
                                type
                            }
                            institutionTypes
                            adminScore
                            backgroundImages {
                                _id
                                name
                                description
                                reference
                                thumbnailUrl
                            }
                            latitude
                            longitude
                        }
                        diveSite {
                            visitTimeDescription
                            waterTemperatureDescription
                            deepDescription
                            waterFlowDescription
                            eyeSightDescription
                            highlightDescription
                            month1 {
                                type
                                title
                            }
                            month2 {
                                type
                                title
                            }
                            month3 {
                                type
                                title
                            }
                            month4 {
                                type
                                title
                            }
                            month5 {
                                type
                                title
                            }
                            month6 {
                                type
                                title
                            }
                            month7 {
                                type
                                title
                            }
                            month8 {
                                type
                                title
                            }
                            month9 {
                                type
                                title
                            }
                            month10 {
                                type
                                title
                            }
                            month11 {
                                type
                                title
                            }
                            month12 {
                                type
                                title
                            }
                        }
                        adminScore
                        minDepth
                        maxDepth
                        minSight
                        maxSight
                        flowRateScore
                        waterEnvironmentScore
                        eyeSightScore
                        highlightDescription
                        createdAt
                        updatedAt
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
                        interests {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month1 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month2 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month3 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month4 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month5 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month6 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month7 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month8 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month9 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month10 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month11 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        month12 {
                        _id
                        title
                        type
                        iconType
                        iconName
                        }
                        name
                        uniqueName
                        description
                        youtubeVideoIds
                        referenceUrls
                        memo
                        address
                        latitude
                        longitude
                        countryCode
                        publishStatus
                        reviews {
                            _id
                            targetId
                            targetType
                            author {
                                name
                                email
                                _id
                            }
                            title
                            content
                            images {
                                _id
                                thumbnailUrl
                            }
                            rating
                            reviewCount
                            views
                            likes
                            createdAt
                        }
                        likes
                        views
                        reviewCount
                        searchTerms
                        aliases
                        isUserSubscribe
                        isUserLike
                    }
                }
            `,
            variables: {
                uniqueName: to.params.id
            }

        }
        });
        if (localStorage.idToken) {
            await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                    mutation Mutation($targetId: ID!, $targetType: UserReactionTargetType!) {
                        view(targetId: $targetId, targetType: $targetType)
                    }
                    `,
                    variables: {
                        "targetId": to.params.id,
                        "targetType": "divePoint"
                    }
                }
            });
        }
        if (result.data.error && result.data.error.length > 0) {
            location.reload();
        }
        
        if (result.data.data.getDivePointByUniqueName.backgroundImages.length > 0) {
            for (var i=0; i<result.data.data.getDivePointByUniqueName.backgroundImages.length; i++) {
                result.data.data.getDivePointByUniqueName.backgroundImages[i].url = '/static/empty.jpg';
            }
            var id_arr = [];
            var width_arr = [];
            for (var i=0; i<result.data.data.getDivePointByUniqueName.backgroundImages.length; i++) {
                id_arr.push(result.data.data.getDivePointByUniqueName.backgroundImages[i]._id);
                width_arr.push(720);
            }
            if (id_arr.length > 0) {
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
                    for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                        result.data.data.getDivePointByUniqueName.backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                        //$(".background_img_" + i).css("background", "url(" + result_image.data.data.getImageUrlsByIds[i] + ")");
                    }
                }
            }
        }
        

        if (result.data.data.getDivePointByUniqueName.images.length > 0) {
            for (var i=0; i<result.data.data.getDivePointByUniqueName.images.length; i++) {
                result.data.data.getDivePointByUniqueName.images[i].url = '/static/empty.jpg';
            }
            var id_arr = [];
            var width_arr = [];
            for (var i=0; i<result.data.data.getDivePointByUniqueName.images.length; i++) {
                id_arr.push(result.data.data.getDivePointByUniqueName.images[i]._id);
                width_arr.push(720);
            }
            if (id_arr.length > 0) {
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
                    for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                        result.data.data.getDivePointByUniqueName.images[i].url = result_image.data.data.getImageUrlsByIds[i];
                        
                    }
                }
            }
        }
        

        
        // 근처 포인트 조회
        var result_nearby = null;
        {
            result_nearby = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    query GetDivePointsNearBy($lat1: Float!, $lon1: Float!, $lat2: Float!, $lon2: Float!) {
                        getDivePointsNearBy(lat1: $lat1, lon1: $lon1, lat2: $lat2, lon2: $lon2) {
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
                    lat1: (result.data.data.getDivePointByUniqueName.latitude-0.02),
                    lon1: (result.data.data.getDivePointByUniqueName.longitude-0.02),
                    lat2: (result.data.data.getDivePointByUniqueName.latitude+0.02),
                    lon2: (result.data.data.getDivePointByUniqueName.longitude+0.02),
                }

            }
            });
        }
        // 근처포인트 backgroundImage
        if (result_nearby.data.data.getDivePointsNearBy.length > 0) {
            for (var j=0; j<result_nearby.data.data.getDivePointsNearBy.length; j++) {
                if (result_nearby.data.data.getDivePointsNearBy[j]._id != result.data.data.getDivePointByUniqueName._id) {
                    for (var i=0; i<result_nearby.data.data.getDivePointsNearBy[j].backgroundImages.length; i++) {
                        result_nearby.data.data.getDivePointsNearBy[j].backgroundImages[i].url = '/static/empty.jpg';
                    }
                    var id_arr = [];
                    var width_arr = [];
                    for (var i=0; i<result_nearby.data.data.getDivePointsNearBy[j].backgroundImages.length; i++) {
                        id_arr.push(result_nearby.data.data.getDivePointsNearBy[j].backgroundImages[i]._id);
                        width_arr.push(720);
                    }
                    if (id_arr.length > 0) {
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
                            for (var i=0; i<result_image.data.data.getImageUrlsByIds.length; i++) {
                                result_nearby.data.data.getDivePointsNearBy[j].backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                            }
                        }
                    }
                }
            }
        }





        /*var galleryFilterOptions = {gutterPixels: 3,};
        var filterizr = new Filterizr('.gallery-filter', galleryFilterOptions);

        var lightbox = GLightbox({
            closeOnOutsideClick: false,
            zoomable:false,
            descPosition:'bottom',
            selector: '[data-gallery-api]',
            openEffect: 'fade',
            closeEffect: 'fade',
            dragAutoSnap:true,
            preload:true,
        });*/
        next(vm => {vm.setData(result.data.data.getDivePointByUniqueName, result_nearby.data.data.getDivePointsNearBy)});
    } else {
        location.href = "/";
    }
  },
  async mounted() {
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
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
            center: {lat: this.pointData.latitude, lng: this.pointData.longitude},
            zoom: 8,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            styles: map_style
        });


        for (var i=0; i<this.pointData.diveCenters.length; i++) {
            const title = this.pointData.diveCenters[i].name;
            const uniqueName = this.pointData.diveCenters[i].uniqueName;
            const desc = this.pointData.diveCenters[i].description;
            const star = this.pointData.diveCenters[i].adminScore;
            const img = (this.pointData.diveCenters[i].backgroundImages && this.pointData.diveCenters[i].backgroundImages.length>0) ? this.pointData.diveCenters[i].backgroundImages[0].thumbnailUrl : "/static/empty.jpg";
           
            const marker_shop = new google.maps.Marker({
                map: this.map,
                position: {lat: this.pointData.diveCenters[i].latitude, lng: this.pointData.diveCenters[i].longitude},
                label: {text: title, color: 'white', className: 'marker-position'},
                icon: new google.maps.MarkerImage('/static/images/assets/ico_pin2_o.png',null, null, null, new google.maps.Size(38,43)),
            });

            marker_shop.addListener("click", () => {
                $(".map-box").removeClass("hide");
                for (var j=0; j<this.marker_list.length; j++) {
                    var _icon = this.marker_list[j].getIcon();
                    if (_icon.size.width != 38) {
                        this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin2_o.png', null, null, null, new google.maps.Size(38,43)));
                        try {
                            var _title = this.marker_list[j].getLabel().text;
                            this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position'});
                        } catch (e) {
                        }
                    }
                }

                $("#map_box_shop_name").text(title);
                $("#map_box_shop_desc").text(desc);
                $("#map_box_shop_star").text((star/20).toFixed(1));
                $("#map_box_shop_img").attr("src", img);
                $("#map_box_shop_href").attr("href", "/center/" + uniqueName);
                
                
                marker_shop.setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
                marker_shop.setLabel({text: title, color: 'white', className: 'marker-position mt-86'});
                if (this.map.getZoom() == 8) {
                    this.map.panTo(marker_shop.getPosition());
                } else {
                    this.map.setZoom(8);
                    this.map.setCenter(marker_shop.getPosition());
                }
            });
            this.marker_list.push(marker_shop);
        }
        this.map.addListener("click", (e) => {
            $(".map-box").addClass("hide");
            for (var j=0; j<this.marker_list.length; j++) {
                var _icon = this.marker_list[j].getIcon();
                if (_icon.size.width != 38) {
                    this.marker_list[j].setIcon(new google.maps.MarkerImage('/static/images/assets/ico_pin2_o.png', null, null, null, new google.maps.Size(38,43)));
                    var _title = this.marker_list[j].getLabel().text;
                    this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position'});
                }
            }
            this.map.setZoom(14);
        });

        

        var marker_point = new google.maps.Marker({
            map: this.map,
            position: {lat: this.pointData.latitude, lng: this.pointData.longitude},
            label: {text: this.pointData.name + ' 포인트', color: 'white', className: 'marker-position2'},
            icon: new google.maps.MarkerImage('/static/images/assets/ico_pin1.png',null, null, null, new google.maps.Size(38,43)),
        });
    };

    setTimeout(function() {
        $("#cover-slider-temp").animate({opacity: "0"}, 1200);
    },1000);
    setTimeout(function() {
        $("#cover-slider-temp").css("display", "none");
    },2500);

  },
  created() {
    
  },
  components: {
    StarRating
  },
  data () {
    return {
        map: null,
        pointData: {},
        nearData: [],
        marker_list: [],
        recommend_word: ["비추천", "낮음", "일반적", "좋음", "최고", "완벽함"],
        recommend_env_word: ["매우열악", "열악", "평범", "우수", "최고", "극락"],
        recommend_flow_word: ["매우느림", "느림", "일반적", "빠름", "매우빠름", "폭풍"],
        point_category: ["해저지형", "해저협곡", "큰 암반", "강한조류", "난파선", "가두리양식장", "마크로", "먹(Muck)", "인공어초", "블루홀", "리프다이빙", "빙하", "초대형난파선", "난파선성지", "수중조형물", "수중유적", "대물", "유네스코", "10대포인트"],
        type_category: ["월다이빙", "블랙워터다이빙", "드리프트다이빙", "아이스다이빙", "야간다이빙", "동굴다이빙", "해루질", "프리다이빙", "스노클링", "케이지다이빙", "렉다이빙", "테크니컬다이빙", "나이트록스다이빙"],
        rating: 5,
        rateDescription: '매우 만족해요!',
        review_detail: '',
        like_img: 'ico_heart',
        subscribe_img: 'ico_subscribe',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
    }
  }, methods: {
      setData(_pointData, _nearData) {
          this.pointData = _pointData;
          if (_pointData.isUserLike) this.like_img = 'ico_heart2';
          if (_pointData.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
          _nearData.forEach(d => {
              if (d._id != this.pointData._id) {
                  this.nearData.push(d);
              }
          });
          
          this.pointData.depthShow = "";
          if (this.pointData.minDepth && this.pointData.maxDepth) {
              if (this.pointData.minDepth <= 18) this.pointData.depthShow = "초급, 중급, 고급";
              else if (this.pointData.minDepth <= 40) this.pointData.depthShow = "중급, 고급";
              else this.pointData.depthShow = "고급";
          }

          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}

            var galleryColorClass = 'color-highlight'
            var galleryViews = document.querySelectorAll('.gallery-views');
            var galleryViewControls = document.querySelectorAll('.gallery-view-controls a');

            function removeSelected(el){
                galleryViewControls[0].classList.add(galleryColorClass);
                for (var i = 0; i < galleryViewControls.length; i++){galleryViewControls[i].classList.remove(galleryColorClass)}
                for (var i = 0; i < galleryViews.length; i++){galleryViews[i].removeAttribute("class"); galleryViews[i].setAttribute('class','gallery-views');}
            }   
            galleryViewControls.forEach(el => el.addEventListener('click', e => {
                removeSelected(el);
                var galleryActiveString = el.getAttribute('class');
                var galleryActiveValue = galleryActiveString.split("gallery-view-");
                galleryViews[0].classList.add('gallery-view-'+galleryActiveValue[1]);
                el.classList.add(galleryColorClass);
            }));
          }, 1000);
      },
      async clickLike() {
          if (localStorage.idToken && localStorage.nickName) {
            const targetId = this.pointData._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Like($targetId: ID!, $targetType: UserReactionTargetType!) {
                            like(targetId: $targetId, targetType: $targetType)
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "divePoint"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.like == true) {
                this.like_img = 'ico_heart2';
                this.pointData.likes = ((this.pointData.likes==null)?0:this.pointData.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.pointData.likes = this.pointData.likes-1;
            }
          } else {
              this.login();
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken && localStorage.nickName) {
            const targetId = this.pointData._id;
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Subscribe($targetId: ID!, $targetType: UserReactionTargetType!) {
                            subscribe(targetId: $targetId, targetType: $targetType)
                        }
                    `,
                    variables: {
                        "targetId": targetId,
                        "targetType": "divePoint"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.subscribe == true) {
                this.subscribe_img = 'ico_subscribe2';
            } else if (result && result.data && result.data.data && result.data.data.subscribe == false) {
                this.subscribe_img = 'ico_subscribe';
            }
          } else {
              this.login();
          }
      },
      async review_send() {
        var _id_list = new Array();
        for (var i=0; i<file_photo.length; i++) {
            var mutation = gql`
                mutation UploadImageMutation($uploadImageFile: Upload!) {
                    uploadImage(file: $uploadImageFile) {
                        _id
                        name
                        mimeType
                        encoding
                        thumbnailUrl
                        createdAt
                        updatedAt
                    }
                }
            `
            var client = new GraphQLClient('https://api.wedives.com/graphql',
            {
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                }
            })

            var result_img = await client.request(mutation, {uploadImageFile:file_photo[i],});
            
            var updateMutation = gql`
                mutation Mutation($input: UpdateImageInput!) {
                    updateImage(input: $input) {
                        _id
                        name
                        description
                        reference
                        uploaderId
                        mimeType
                        encoding
                        fileSize
                        thumbnailUrl
                    }
                }
            `;
            var result_upload = await client.request(updateMutation, {input: {"_id": result_img.uploadImage._id,"name": result_img.name,"description": "reviewImage","reference": null}});
            _id_list.push(result_img.uploadImage._id);
        }
        var _input = {images: _id_list, targetId: this.pointData._id, targetType: 'divePoint', content: this.review_detail, rating: this.rating};
        const ipt = _input;
        
        var result = await this.$apollo.mutate({
            // Query
            mutation: gql`
                mutation Mutation($input: ReviewInput) {
                    upsertReview(input: $input) {
                        _id
                        targetId
                        targetType
                        author {
                            nickName
                            email
                            _id
                            profileImages {
                                thumbnailUrl
                            }
                        }
                        title
                        content
                        images {
                            _id
                            thumbnailUrl
                        }
                        rating
                        reviewCount
                        views
                        isUserLike
                        isUserDislike
                        likes
                        dislikes
                        createdAt
                    }
                }
            `,
            // Parameters
            variables: {
                input: ipt
            },
        });
        

        this.getDivePointByUniqueName.reviews.push(result.data.upsertReview);

        // close dialog
        const activeMenu = document.querySelectorAll('.menu-active');
        for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
        // jjangs close menu
        if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
        }

        // toast
        var toastData = 'snackbar-review-success';
        var notificationToast = document.getElementById(toastData);
        var notificationToast = new bootstrap.Toast(notificationToast);
        notificationToast.show();
      },
      addImage({ target: { files = [] } }) {
        if (!files.length) {
          return;
        }
        file_photo.push(files[0]);
        $("#div_upload_photo").append('<div class="col-3 p-1 square " style="position: relative;"><div class="square_inner border-08" style="background:url('+URL.createObjectURL(files[0])+');background-size: cover;"><div class="square_inner_close" onclick="abc('+files[0].lastModified+',this);"></div></div></div>');
        if (file_photo.length%4 == 1) {
            var square_height = $("#div_upload_photo .square").height();
            $("#menu-review").css("height", 470 + (square_height*(parseInt(file_photo.length/4)+1)) + "px");
        }
      },
      setRating(rating) {
          this.rating = rating;
          switch ((rating+"")) {
              case '1':
                this.rateDescription = '매우 아쉬워요';
              break;
              case '2':
                this.rateDescription = '아쉬워요';
              break;
              case '3':
                this.rateDescription = '나쁘지 않아요.';
              break;
              case '4':
                this.rateDescription = '만족해요!';
              break;
              case '5':
                this.rateDescription = '매우 만족해요!';
              break;
              default:
              break;
          }  
      },
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null) {
          location.href='/user_create';
        }
      },
      timeForToday(value) {
        const today = new Date();
        const timeValue = new Date(value);

        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        if (betweenTime < 60) {
            return `${betweenTime}분전`;
        }

        const betweenTimeHour = Math.floor(betweenTime / 60);
        if (betweenTimeHour < 24) {
            return `${betweenTimeHour}시간전`;
        }

        const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
        if (betweenTimeDay < 365) {
            return `${betweenTimeDay}일전`;
        }

        return `${Math.floor(betweenTimeDay / 365)}년전`;
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.light-border-bottom {border-bottom: 1px solid #dee2e6;}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(/static/images/assets/question.png);text-indent: -9999px;}

.span_feature {width:66px;line-height:1.2;}
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

.icon-point {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/assets/wedive_point.png);background-repeat: no-repeat;-webkit-background-size: 270px 200px;background-size: 270px 200px;}
.icon-type {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/assets/wedive_type.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.min-h-230 {min-height: 230px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.txt_box2 {background: #f4f4f4; border-radius: .5rem;padding: 6px 0px 8px 0px;}
.wedive-score {position: absolute;right: 15px; top: 15px;background: #1d397c; border-radius: 10px 10px 10px 0px; padding: 4px 8px; color: white;}
.wedive-score-desc {position: absolute;right: 10px; top: 44px;color: #1d397c; width:56px;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.mx-80 {max-width: 80px;}
.mx-120 {max-width: 120px;}
.mx-140 {max-width: 140px;}
.img-fluid {width: 100%;object-fit: cover;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.card-nearby {margin-left: 10px;background-size: cover !important;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}
.th-02 > th {padding: 0.2rem 0.5rem;}
.img_pop {filter: contrast(90%) brightness(0.9);}
.wedive-textarea {min-height: 150px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
</style>
