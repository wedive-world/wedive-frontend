<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <ContentLoader :width="windowWidth" :height="windowHeight-58" id="div_content_loader" primaryColor="#e3e7ef" secondaryColor="#f4f7ff">
        <rect x="0" y="0" rx="0" ry="0" :width="windowWidth" height="250" />
        <rect x="40" y="270" rx="10" ry="10" :width="windowWidth-80" height="20" />
        <rect :x="windowWidth/2-50" y="315" rx="10" ry="10" width="100" height="20" />
        <rect x="20" y="340" rx="10" ry="10" :width="windowWidth-40" height="40" />
        <rect x="20" y="390" rx="10" ry="10" :width="windowWidth-40" height="60" />
        <rect x="40" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect :x="(windowWidth-110)/3+50" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect :x="(windowWidth-110)/3*2+60" y="460" rx="10" ry="10" :width="(windowWidth-110)/3" height="40" />
        <rect x="10" y="510" rx="20" ry="20" :width="windowWidth-20" height="190" />
    </ContentLoader>
    <div class="page-content pb-0">
        <div v-if="getDivePointByUniqueName.backgroundImages == null || getDivePointByUniqueName.backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain;height:250px;">
        </div>
        <div v-else style="min-height:250px;height:250px;max-height:250px;">
            <div class="splide single-slider cover-slider slider-no-arrows slider-no-dots" id="cover-slider-1" data-card-height="250" style="position:relative;">
                <div class="splide__track">
                    <div class="splide__list" style="width: 100%;">
                        <div v-if="getDivePointByUniqueName.backgroundImages == null || getDivePointByUniqueName.backgroundImages.length == 0" class="splide__slide" style="width: 100%;">
                            <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-position: center !important;background-size: contain !important;">                                
                            </div>
                        </div>
                        <div v-else class="splide__slide" v-for="(image, index) in getDivePointByUniqueName.backgroundImages" style="width: 100%;">
                            <div data-card-height="250" :class="'card rounded-0 mb-0 background-center background_img_' + index" v-bind:style="'background: url('+image.thumbnailUrl+');background-size: cover !important;width:100%;'">
                                <div class="wedive-source" style="bottom:50px;">{{ image.reference | makeReference }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cover-slider-temp" class="background-center" :style="'background:url('+firstThumbnailImage+');height:250px;position:absolute;width:100%;top:58px;'">
            </div>
        </div>
        
            
        

    
        
        
        <div class="card card-style" style="margin-top:-40px; z-index:1">
            <div class="content text-center mt-4">
                <h2 class="font-20 font-700 mb-0 mt-1">{{ getDivePointByUniqueName.name }}</h2>
                <h2 class="wedive-score">{{ (getDivePointByUniqueName.adminScore/20).toFixed(1) }}</h2>
                <span class="wedive-score-desc">{{ recommend_word[parseInt(getDivePointByUniqueName.adminScore/20)] }}</span>
                <p v-if="getDivePointByUniqueName.address != '' && getDivePointByUniqueName.address != ' '" class="color-gray m-0 ellipsis" style="max-width: calc(100vw - 130px);display: inline-block;"><i class="fas fa-map-marked-alt" ></i> {{ getDivePointByUniqueName.address }}</p>
                
                
                <div class="evaluation mt-3">
                    <div class="d-flex">
                        <div class="flex-grow-1">
                            <div class="star-area text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">환경</span>
                                <div class="wedive-fish-back">
                                    <div class="wedive-fish-front" :style="'width:'+(getDivePointByUniqueName.waterEnvironmentScore>3 ? getDivePointByUniqueName.waterEnvironmentScore-3:0)+'%;'">
                                    </div>
                                    <span class="wedive-score-number">{{ (getDivePointByUniqueName.waterEnvironmentScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                            <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">조류</span>
                                <div class="wedive-wave-back">
                                    <div class="wedive-wave-front" :style="'width:'+(getDivePointByUniqueName.flowRateScore>3 ? getDivePointByUniqueName.flowRateScore-3: 0)+'%;'">
                                    </div>
                                    <span class="wedive-score-number">{{ (getDivePointByUniqueName.flowRateScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                            <div class="star-area mt-1 text-start ms-3" style="height: 30px;">
                                <span class="font-14 me-2 color-gray" style="float: left;padding-top:2px;">시야</span>
                                <div class="wedive-eye-back">
                                    <div class="wedive-eye-front" :style="'width:'+(getDivePointByUniqueName.eyeSightScore > 3 ? getDivePointByUniqueName.eyeSightScore-3 : 0)+'%;'">
                                    </div>
                                    <span class="wedive-score-number">{{ (getDivePointByUniqueName.eyeSightScore/20).toFixed(1) }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div style="height: 30px;padding-top:2px;">{{ recommend_env_word[parseInt(getDivePointByUniqueName.adminScore/20)] }}</div>
                            <div class="mt-1" style="height: 30px;padding-top:2px;">{{ recommend_flow_word[parseInt(getDivePointByUniqueName.adminScore/20)] }}</div>
                            <div class="mt-1" style="height: 30px;padding-top:2px;">{{ getDivePointByUniqueName.minSight }}-{{ getDivePointByUniqueName.maxSight }}m</div>
                        </div>
                    </div>
                    <div v-if="getDivePointByUniqueName.depthShow != ''" class="divider mt-2 mb-2"></div>
                    <div v-if="getDivePointByUniqueName.depthShow != ''" class="d-flex">
                        <div class="flex-grow-1 text-start ms-3">
                            <span class="font-14 me-2 color-gray">깊이</span>
                            {{ getDivePointByUniqueName.minDepth }}-{{ getDivePointByUniqueName.maxDepth }}m
                        </div>
                        <div class="flex-grow-1">
                            
                            <span style="background-color: gray;color:white;padding: 4px 8px;border-radius:4px;">{{ getDivePointByUniqueName.depthShow }} 가능</span>
                        </div>
                    </div>
                </div>
                

                <div v-if="getDivePointByUniqueName.waterTemperature" class="evaluation d-flex mt-2">
                    <img :src="'https://d34l91104zg4p3.cloudfront.net/assets/weather/'+(weatherIcon[getDivePointByUniqueName.waterTemperature.weatherDescription])+'.png'" width="50"/>
                    <div>
                        <p class="mb-0"><span class="color-gray">기온</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDivePointByUniqueName.waterTemperature && getDivePointByUniqueName.waterTemperature.temperatureC ? getDivePointByUniqueName.waterTemperature.temperatureC + '°C' : '' }}</span></p>
                        <p class="mb-0"><span class="color-gray">수온</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDivePointByUniqueName.waterTemperature && getDivePointByUniqueName.waterTemperature.currentSeaTemperature ? getDivePointByUniqueName.waterTemperature.currentSeaTemperature.split("/")[0].replace(/ /gi,'') : '' }}</span></p>

                        <!--<i class="fas fa-tint"></i>-->
                    </div>
                    <div>
                        <p class="mb-0"><span class="color-gray">습도</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDivePointByUniqueName.waterTemperature && getDivePointByUniqueName.waterTemperature.humidity ? getDivePointByUniqueName.waterTemperature.humidity : '' }}</span></p>
                        <p class="mb-0"><span class="color-gray">바람</span> <span style="display:inline-block;min-width:46px;text-align:right;">{{ getDivePointByUniqueName.waterTemperature && getDivePointByUniqueName.waterTemperature.windSpeed ? getDivePointByUniqueName.waterTemperature.windSpeed : '' }}</span></p>
                    </div>
                </div>
                
                <p class="color-gray mt-3 mb-0 text-start me-2 ms-2">{{ getDivePointByUniqueName.description }}</p>
                
                <div class="divider mt-3 mb-3"></div>
                
                <div class="d-flex mb-0 text-center">
                    <div v-on:click="clickLike()" :class="'flex-grow-1 pd-0' + ((idToken == null || nickName == null || nickName == 'null') ? ' opacity-40' : '')" style="border-right: 1px solid lightgray;">
                        <img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+like_img+'.png'" width="24" style="margin-top:-4px;"/>
                        <span class="font-16 font-500 font-noto">{{ getDivePointByUniqueName.likes }}</span>
                    </div>
                    
                    <div v-on:click="clickSubscribe()" :class="'flex-grow-1 pd-0' + ((idToken == null || nickName == null || nickName == 'null') ? ' opacity-40' : '')" >
                        <img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+subscribe_img+'.png'" width="24" style="margin-top:-4px;"/>
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
                <div v-if="getDivePointByUniqueName.interests && getDivePointByUniqueName.interests.filter(x=>x.type=='divingPointEnvironment'||x.type=='divingType'||x.type=='award').length>0" class="row text-start txt_box2 m-0">
                    <div v-for="interest in getDivePointByUniqueName.interests.filter(x=>x.type=='award')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(award_category.findIndex(x=>x==interest.title)+1)+' icon-award'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                    <div v-for="interest in getDivePointByUniqueName.interests.filter(x=>x.type=='divingPointEnvironment')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(point_category.findIndex(x=>x==interest.title)+1)+' icon-point'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                    <div v-for="interest in getDivePointByUniqueName.interests.filter(x=>x.type=='divingType')" class="ico_feature col-3">
                        <i :class="'ico_feature'+(type_category.findIndex(x=>x==interest.title)+1)+' icon-type'"></i>
                        <p class="span_feature text-center">{{ interest.title }}</p>
                    </div>
                </div>
                <div class="justify-content-center mb-2 mt-2 text-start me-n2 ms-n2">
                    <div class="splide single-slider slider-no-arrows slider-has-dots pb-4 mb-0" id="single-slider-info">
                        <div class="splide__track">
                            <div class="splide__list pt-n3">
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.visitTimeDescription != ''" class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-calendar-alt font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">방문시기</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.diveSite.visitTimeDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.waterTemperatureDescription != ''" class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-temperature-high font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수온</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.waterTemperatureDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.deepDescription != ''" class="splide__slide">
                                    <div class="min-h-190 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-level-down-alt font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">수심</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.diveSite.deepeDscription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.waterFlowDescription != ''" class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-water font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">조류</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.diveSite.waterFlowDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.eyeSightDescription != ''" class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-eye font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">시야</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.diveSite.eyeSightDescription }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="getDivePointByUniqueName.diveSite && getDivePointByUniqueName.diveSite.highlightDescription != ''" class="splide__slide">
                                    <div class="min-h-160 p-2">
                                        <div class="mt-2">
                                            <h1 class="text-center mb-0"><i class="fas fa-highlighter font-30 color-highlight"></i></h1>
                                            <h1 class="text-center color-highlight font-16 mb-0">다이빙 하이라이트</h1>
                                            <p class="text-start font-400">
                                                {{ getDivePointByUniqueName.diveSite.highlightDescription }}
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

        <div v-if="getDivePointByUniqueName.divePoints && getDivePointByUniqueName.divePoints.length> 0" class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">{{ getDivePointByUniqueName.name }} 인기 포인트</h4>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>
                <div v-for="(point,index) in getDivePointByUniqueName.divePoints" v-if="index<3">
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

                                <div v-if="point.images" class="row text-center row-cols-3 mb-1" style="padding-left:10px;padding-right:10px;">
                                    <a v-for="(image, index) in point.images" v-if="point.images&&point.images.length>0&&index<3" class="col square-rect" v-bind:data-gallery="'gallery-'+index" v-bind:href="image.thumbnailUrl" title="">
                                        <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty.png" v-bind:data-src="image.thumbnailUrl" class="preload-img img-fluid rounded-s" alt="Point image">
                                        <div class="wedive-source mx-80">{{ image.reference | makeReference }}</div>
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

        <div v-if="getDivePointByUniqueName.highlights && getDivePointByUniqueName.highlights.length>0" class="card card-style">
            <div class="content">
                <h4 class="text-start pt-2 mb-2">하이라이트</h4>
                <div v-for="(highlight, highIdx) in getDivePointByUniqueName.highlights">
                    <div v-if="(highIdx%3)==0" :class="highIdx==0 ? '' : 'mt-4'">
                        <span style="padding: 1px 8px;border: 2px solid black;border-radius:5px;">{{ highIdx + 1 }}</span><span class="font-noto font-14 ms-1">{{ highlight.description }}</span>
                        <div v-if="highlight.images && highlight.images.length>2" class="row m-0 mb-2"> 
                            <div class="col-6 ps-0 pe-1">
                                <div class="card rounded-sm mb-2">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[0].thumbnailUrl" :title="highlight.images[0].reference">
                                        <img :src="highlight.images[0].thumbnailUrl" :data-src="highlight.images[0].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[0].name" style="height: 80px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[0].reference | makeReference }}</div>
                                    </a>
                                </div>
                                <div v-if="highlight.images.length>1" class="card rounded-sm mb-0">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[1].thumbnailUrl" :title="highlight.images[1].reference">
                                        <img :src="highlight.images[1].thumbnailUrl" :data-src="highlight.images[1].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[1].name" style="height: 80px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[1].reference | makeReference }}</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 ps-1 pe-0">
                                <div v-if="highlight.images.length>2" class="card rounded-sm mb-0">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[2].thumbnailUrl" :title="highlight.images[2].reference">
                                        <img :src="highlight.images[2].thumbnailUrl" :data-src="highlight.images[2].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[2].name" style="height: 170px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[2].reference | makeReference }}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row m-0 mb-2"> 
                            <a v-for="image in highlight.images" class="col square-rect" data-gallery="'gallery-highlight" :href="image.thumbnailUrl" :title="image.reference" style="max-height:calc(50vw - 23px);min-height:calc(50vw - 23px);">
                                <img :src="image.thumbnailUrl" :data-src="image.thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="image.name">
                                <div class="wedive-source mx-80">{{ image.reference | makeReference }}</div>
                            </a>
                        </div>
                    </div>
                    
                    
                    <div v-else-if="(highIdx%3)==1" class="mt-4">
                        <span style="padding: 1px 8px;border: 2px solid black;border-radius:5px;">{{ highIdx + 1 }}</span><span class="font-noto font-14 ms-1">{{ highlight.description }}</span>
                    
                        <div v-if="highlight.images && highlight.images.length>0" class="row m-0 text-center mb-1" style="margin-left: -4px !important; margin-rigth: -4px !important;">
                            <a v-for="image in highlight.images" class="col square-rect" data-gallery="'gallery-highlight" :href="image.thumbnailUrl" :title="image.reference" style="max-height:calc(50vw - 23px);">
                                <img :src="image.thumbnailUrl" :data-src="image.thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="image.name">
                                <div class="wedive-source mx-80">{{ image.reference | makeReference }}</div>
                            </a>
                        </div>
                    </div>

                    <div v-else class="mt-4">
                        <span style="padding: 1px 8px;border: 2px solid black;border-radius:5px;">{{ highIdx + 1 }}</span><span class="font-noto font-14 ms-1">{{ highlight.description }}</span>
                        <div v-if="highlight.images && highlight.images.length>2" class="row m-0 mb-2"> 
                            <div class="col-6 ps-0 pe-1">
                                <div class="card rounded-sm mb-0">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[0].thumbnailUrl" :title="highlight.images[0].reference">
                                        <img :src="highlight.images[0].thumbnailUrl" :data-src="highlight.images[0].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[0].name" style="height: 170px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[0].reference | makeReference }}</div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 ps-1 pe-0">
                                <div v-if="highlight.images.length>1" class="card rounded-sm mb-2">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[1].thumbnailUrl" :title="highlight.images[1].reference">
                                        <img :src="highlight.images[1].thumbnailUrl" :data-src="highlight.images[1].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[1].name" style="height: 80px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[1].reference | makeReference }}</div>
                                    </a>
                                </div>
                                <div v-if="highlight.images.length>2" class="card rounded-sm mb-0">
                                    <a class="" data-gallery="'gallery-highlight" :href="highlight.images[2].thumbnailUrl" :title="highlight.images[2].reference">
                                        <img :src="highlight.images[2].thumbnailUrl" :data-src="highlight.images[2].thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="highlight.images[2].name" style="height: 80px;">
                                        <div class="wedive-source mx-80">{{ highlight.images[2].reference | makeReference }}</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div v-else class="row m-0 mb-2"> 
                            <a v-for="image in highlight.images" class="col square-rect" data-gallery="'gallery-highlight" :href="image.thumbnailUrl" :title="image.reference" style="max-height:calc(50vw - 23px);min-height:calc(50vw - 23px);">
                                <img :src="image.thumbnailUrl" :data-src="image.thumbnailUrl" class="preload-img img-fluid rounded-s" :alt="image.name">
                                <div class="wedive-source mx-80">{{ image.reference | makeReference }}</div>
                            </a>
                        </div>
                    </div>
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


        <div v-if="getDivePointByUniqueName.diveCenters && getDivePointByUniqueName.diveCenters.length>0" class="card card-style">
            <div class="content mt-3">
                <h4 class="text-start pt-2 mb-0">인기 다이빙 센터</h4>
                <p class="mb-3 color-gray-light-mid">{{ getDivePointByUniqueName.name }} 사이트의 {{ getDivePointByUniqueName.diveCenters.length }}개의 센터 준비됨</p>
                <a class="color-highlight font-12 wedive-txt-all">모두보기</a>

                <div v-for="(center,index) in getDivePointByUniqueName.diveCenters" v-if="index<3">
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
                                            <span v-if="center.institutionTypes && center.institutionTypes.length > 0"><img v-if="insti in center.institutionTypes" class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+insti.toLowerCase()+'.svg'" height="14" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;</span>
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

        <div class="card card-style" v-if="getDivePointByUniqueName.youtubeVideoIds && getDivePointByUniqueName.youtubeVideoIds.length > 0">
            <div class="content mb-4 pb-2">
                <h4 class="text-start pt-2 mb-2">YouTube 소개</h4>
                <div v-for="(youtube,index) in getDivePointByUniqueName.youtubeVideoIds" :class="'responsive-iframe' + (index>0 ? ' mt-3':'')" style="-border-radius: 16px;-moz-border-radius: 16px;border-radius: 16px;">
                    <iframe v-bind:src="'https://www.youtube.com/embed/'+youtube" frameborder='0' allowfullscreen></iframe>
                </div>
            </div>
        </div>
        

        <div class="card card-style">
            <div v-if="getDivePointByUniqueName.images == null || getDivePointByUniqueName.images.length == 0" class="content">
                <div class="text-center"><img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_image.jpg" width="60%" style="margin-top:-40px;"/></div>
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
                        <a v-for="image in getDivePointByUniqueName.images" data-gallery="gallery-1" :href="image.url" :title="image.reference" style="position: relative;" class="square-rect">
                            <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty.png" :data-src="image.url" class="rounded-m preload-img shadow-l img-fluid" alt="img" style="padding: 0px;">
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

        <div v-if="getDivePointsNearBy && getDivePointsNearBy.length > 0">
            <h4 class="text-start mb-2 mt-4" style="margin-left: 10px;margin-right: 10px;">근처 포인트</h4>
            <div class="splide single-slider slider-no-arrows visible-slider slider-no-dots" id="single-slider-nearby">
                <div class="splide__track">
                    <div class="splide__list">
                        <div v-for="near in getDivePointsNearBy" class="splide__slide">
                            <div class="card card-style card-nearby" :style="'background: url('+((near.backgroundImages!=null&&near.backgroundImages[0]!=null) ? near.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="160">
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
        </div>
        
        <div v-if="getDivingsByPlaceId && getDivingsByPlaceId.length > 0">
            <div class="card card-style">
                <div class="content mb-0 mt-4">
                    <div>
                        <h4 class="text-start mb-3">이곳의 다이빙 버디찾기</h4>
                    </div>
                    
                    <div v-for="(diving,index) in getDivingsByPlaceId" v-if="index < 3">
                        <div :class="diving.dateStartedAt < now ? 'opacity-50' : ''" style="position: relative;height: 85px;">
                            <a v-on:click="moveDiving(diving)">
                                <div class="">
                                    <div class="justify-content-center mb-0 text-start">
                                        <div class="thumb-img me-2">
                                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                <clipPath id="clipSquircle">
                                                    <use xlink:href="#shapeSquircle"/>
                                                </clipPath>
                                                </defs>
                                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="diving.backgroundImages && diving.backgroundImages.length > 0 ? diving.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                            </svg>
                                        </div>
                                        <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                            <img v-bind:src="(diving.backgroundImages && diving.backgroundImages.length > 0) ? diving.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                        </div>-->
                                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 138px);">
                                            <h4 class="font-15 mt-1 ellipsis"> {{ diving.title }} </h4>
                                            <p class="pb-0 mb-0 nearby_desc"> {{ getWediveStartEnd(diving.startedAt, diving.finishedAt) }} </p>
                                            
                                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ diving.name }} ({{ diving.type.join().replace('scubaDiving', '스쿠바').replace('freeDiving', '프리') }})</p>
                                        </div>
                                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">{{ diving.participants.filter(x=>x.status=='joined').length+1 }}명 참석</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div v-if="index < getDivingsByPlaceId.length-1" class="divider mt-3 mb-3"></div>
                        <div v-else class="mb-3"></div>
                    </div>

                    <div class="collapse" id="collapse-diving">
                        <div v-for="(diving,index) in getDivingsByPlaceId" v-if="index >= 3">
                            <div :class="diving.dateStartedAt < now ? 'opacity-50' : ''" style="position: relative;height: 85px;">
                                <a v-on:click="moveDiving(diving)">
                                    <div class="">
                                        <div class="justify-content-center mb-0 text-start">
                                            <div class="thumb-img me-2">
                                                <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                    <defs>
                                                    <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                    <clipPath id="clipSquircle">
                                                        <use xlink:href="#shapeSquircle"/>
                                                    </clipPath>
                                                    </defs>
                                                    <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="diving.backgroundImages && diving.backgroundImages.length > 0 ? diving.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                                </svg>
                                            </div>
                                            <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                                <img v-bind:src="(diving.backgroundImages && diving.backgroundImages.length > 0) ? diving.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                            </div>-->
                                            <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 138px);">
                                                <h4 class="font-15 mt-1 ellipsis"> {{ diving.title }} </h4>
                                                <p class="pb-0 mb-0 nearby_desc"> {{ getWediveStartEnd(diving.startedAt, diving.finishedAt) }} </p>
                                                
                                                <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ diving.name }} ({{ diving.type.join().replace('scubaDiving', '스쿠바').replace('freeDiving', '프리') }})</p>
                                            </div>
                                            <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">{{ diving.participants.filter(x=>x.status=='joined').length+1 }}명 참석</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div v-if="index < getDivingsByPlaceId.length-1" class="divider mt-3 mb-3"></div>
                            <div v-else class="mb-3"></div>
                        </div>
                    </div>  
                    <div v-if="getDivingsByPlaceId && getDivingsByPlaceId.length > 3" class="list-group list-custom-small list-icon-0" style="background: rgba(196, 187, 171, 0.2);margin-left: -15px;margin-right: -15px;">
                        <a data-bs-toggle="collapse" class="no-effect" href="#collapse-diving" v-on:click="collapse_text = (collapse_text == '더 보기' ? '줄이기' : '더 보기')">
                            <p class="font-14 mb-0 text-center">{{ collapse_text }}</p>
                        </a>        
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
                        <tbody v-if="getDivePointByUniqueName.waterTemperature && getDivePointByUniqueName.waterTemperature.temperatureDetail && getDivePointByUniqueName.waterTemperature.temperatureDetail.MinC">
                            <tr class="border-bottom" v-for="(minC, index) in getDivePointByUniqueName.waterTemperature.temperatureDetail.MinC">
                                <th class="font-12" scope="row">{{ index+1 }}월</th>
                                <td class="font-12 color-gray">{{ minC }}ºC / {{ getDivePointByUniqueName.waterTemperature.temperatureDetail.MaxC[index] }}ºC</td>
                                <td class="font-12"><img class="me-2" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+(getDivePointByUniqueName.diveSite['month'+(index+1)].filter(x=>x.type=='climate').length > 0 ? enumClimate[getDivePointByUniqueName.diveSite['month'+(index+1)].filter(x=>x.type=='climate')[0].title] : 'empty')+'.svg'" width="20" height="20"/>{{ ((getDivePointByUniqueName.waterTemperature.temperatureDetail.MaxC[index]+minC)/2).toFixed(1) }}ºC</td>
                                <td class=""><img class="img_pop" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+(getDivePointByUniqueName.diveSite['month'+(index+1)].filter(x=>x.type=='popularity').length > 0 ? enumPopularity[getDivePointByUniqueName.diveSite['month'+(index+1)].filter(x=>x.type=='popularity')[0].title] : 'empty')+'.svg'" width="32" height="32"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end">
                        <img class="me-1 mb-3" height="20" src="https://d34l91104zg4p3.cloudfront.net/assets/logo-kma.svg" />
                    </div>
                </div>
            </div>
        </div>
        
        
        <div class="card card-style">
            <div class="content">
            <h4 class="text-start">다이빙 로그</h4>
            <a :href="'/review2/'+getDivePointByUniqueName._id" class="color-highlight font-12 wedive-txt-all">모두보기</a>
            <div class="divider mt-3 mb-2"></div>
                <div v-if="getDivePointByUniqueName.reviews && getDivePointByUniqueName.reviews.length>0" class="splide single-slider slider-no-arrows slider-has-dots pb-2 mb-0 me-n2 ms-n2" id="single-slider-review">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="review in getDivePointByUniqueName.reviews" class="splide__slide pt-2">
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
                                                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty.png" :data-src="image.thumbnailUrl" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                                            </a>
                                            </div>
                                            {{ review.content }}
                                        </p>
                                        <a data-menu="menu-report" v-on:click="selectedReview = review;"><span class="font-10 mb-0 mt-n2 opacity-40 p-2" style="position:absolute;right:0;bottom:10px;"><img src="/static/images/assets/icon_alarm.png" width="16" style="margin-bottom: 5px;margin-right:3px;"/>신고하기</span></a>
                                </div>     
                            </div>
                            <div class="splide__slide">
                                <a :href="'/review2/'+getDivePointByUniqueName._id">
                                <div class="min-h-230 p-2">
                                        <h1 class="text-center"><i class="fas fa-pen-square fa-2x color-highlight mt-4"></i></h1>
                                        <h1 class="text-center pt-3 font-20 mb-n1">{{ getDivePointByUniqueName.reviews.length }}개 다이빙 로그</h1>
                                        <p class="text-center color-highlight font-600">더보기 <i class="fas fa-chevron-right"></i></p>
                                </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list.jpg" width="50%" />
                    <p class="color-gray">아직 작성된 다이빙 로그가 없어요.</p>
                </div>
            </div>
            <div class="divider mt-2 mb-2 ms-3 me-3"></div>
            <div v-on:click="login()" :data-menu="((idToken == null || nickName == null || nickName == 'null') ? '' : 'menu-review')" :class="((idToken == null || nickName == null || nickName == 'null') ? 'opacity-40' : '')">
                <div class="star-area mt-4 text-center" style="letter-spacing: -2px;">
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                    <i class="fa fa-star font-20 color-gray-light"></i>
                </div>
                <div class="mt-1 me-4 ms-4" style="margin-bottom: 34px;background: rgba(58, 58, 58, 0.03);padding: 10px 20px;border-radius: 4px;">
                    <p class="mb-0" style="color: rgba(58, 58, 58, 0.6)">다녀온 기록을 남겨보세요.</p>
                    <p class="mb-0 color-highlight">지금 로그북남기기 <i class="fas fa-chevron-right ms-1"></i></p>
                </div>
            </div>
        </div>



        
        <div data-menu-load="/static/menu-footer.html" style="margin-bottom: 76px;"></div>
        <div id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div class="flex-fill speach-input p-2">
                <a v-on:click="findBuddyClick()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto font-500"><i class="fas fa-user-friends me-2"></i>버디모집</a>
            </div>
        </div>

    </div>


    <!-- End of Page Content--> 
    <!-- 신고하기 -->
    <div id="menu-report" 
          class="menu menu-box-modal rounded-0" 
          data-menu-width="cover"
          data-menu-height="cover"
          style="margin-bottom: 0;">
          
          <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
              <div class="card-top p-2">
                  <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                  <a href="" class="header-title color font-noto font-16">신고사유를 선택하세요.</a>
              </div>
          </div>
          
          <div class="card rounded-0 content">
              <div v-for="report in $root.$children[0].report_items" class="form-check icon-check mb-3">
                  <input class="form-check-input" type="radio" :value="report[0]" :id="'radio_report'+report[0]" name="radioReport" v-on:click="clickReportRadio('radio_report' + report[0])">
                  <label class="form-check-label font-noto font-18 font-500 opacity-30" :for="'radio_report'+report[0]">{{ report[1] }}</label>
                  <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                  <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
              </div>
          </div>
          <div style="position: absolute;bottom: 0;width:100%;">
              <a v-on:click="makeReport()" id="btn_report" disabled="disabled" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;">신고하기</a>
          </div>
    </div>

    <!-- 리뷰 팝업 -->
    <div id="menu-review" 
         class="menu menu-box-modal" 
         data-menu-height="470" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ getDivePointByUniqueName.name }} 다이빙 로그</h4>
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
            <div class="mb-3 text-center p-2 wedive-button">
                <input type="file" @change="addImage" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_camera.png" height="18"/>첨부하기</div>
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
import gql from 'graphql-tag'
import { ContentLoader } from 'vue-content-loader'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}

    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
  },
  created() {
  },
  components: {
    StarRating,
    ContentLoader,
  },
  data () {
    return {
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        uniqueName: this.$route.params.id,
        map: null,
        getDivePointByUniqueName: {},
        getDivingsByPlaceId: [],
        getDivePointsNearBy: [],
        collapse_text: '더 보기',
        now: new Date(),
        firstThumbnailImage: '',
        marker_list: [],
        marker_img_list: [],
        recommend_word: ["비추천", "낮음", "일반적", "좋음", "최고", "완벽함"],
        award_category: ["10대포인트", "난파선성지", "대물천국", "베스트동굴다이빙", "베스트드리프트다이빙", "베스트렉다이빙", "베스트마크로", "베스트볼거리", "베스트비치다이빙", "베스트월다이빙", "시력=시야", "유네스코", "인생샷포인트", "프리다이버집결지", "해양박물관", "인도네시아10대"],
        point_category: ["해저지형", "해저협곡", "큰 암반", "강한조류", "난파선", "가두리양식장", "마크로", "먹(Muck)", "인공어초", "블루홀", "리프다이빙", "빙하", "초대형난파선", "난파선성지", "수중조형물", "수중유적", "대물", "유네스코", "국내우수", "배리어리프", "블루케이브"],
        type_category: ["월다이빙", "블랙워터다이빙", "드리프트다이빙", "아이스다이빙", "야간다이빙", "동굴다이빙", "해루질", "프리다이빙", "스노클링", "케이지다이빙", "렉다이빙", "테크니컬다이빙", "나이트록스다이빙", "먹다이빙", "블루워터다이빙", "비치다이빙", "스쿠버다이빙", "이색다이빙"],
        recommend_env_word: ["매우열악", "열악", "평범", "우수", "최고", "극락"],
        recommend_flow_word: ["매우느림", "느림", "일반적", "빠름", "매우빠름", "폭풍"],
        rating: 5,
        rateDescription: '매우 만족해요!',
        review_detail: '',
        like_img: 'ico_heart',
        subscribe_img: 'ico_subscribe',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        enumPopularity: {"nothing":"icon_popularity_01", "unrecommended": "icon_popularity_01", "soso": "icon_popularity_02", "popular": "icon_popularity_03"},
        enumClimate: {"nothing": "weather_sunny", "sunny": "weather_sunny", "cloudy": "weather_partly_cloudy", "rain": "weather_showers", "heavyRain": "weather_heavy_rain"},
        weatherIcon: {"clear sky":"sunny_light","few clouds":"mostly_sunny","broken clouds":"partly_cloudy","scattered clouds":"mostly_cloudy_day","overcast clouds":"cloudy","light rain":"scattered_showers_day","light intensity shower rain":"scattered_showers_day","shower rain":"showers_rain","moderate rain":"heavy_rain","light snow":"flurries","light shower snow":"wintry_mix_rain_snow","snow":"snow_showers_snow","mist":"mist","fog":"fog","haze":"haze_fog_dust_smoke","smoke":"haze_fog_dust_smoke","thunderstorm":"strong_tstorms"},
        selectedReview: null,
    }
  },
  apollo: {
      getDivePointsNearBy: {
          query:gql `
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
          skip() {
              return (this.getDivePointByUniqueName == null || this.getDivePointByUniqueName.latitude == null ? true : false);
          },
          variables() {
              return {
                lat1: (this.getDivePointByUniqueName.latitude-0.02),
                lon1: (this.getDivePointByUniqueName.longitude-0.02),
                lat2: (this.getDivePointByUniqueName.latitude+0.02),
                lon2: (this.getDivePointByUniqueName.longitude+0.02),
              }
          },
          result() {
          }
      },
      getDivePointByUniqueName: {
          query:gql `
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
                    waterTemperature {
                        name
                        currentSeaTemperature
                        weatherText
                        temperatureC
                        temperatureF
                        weatherDescription
                        humidity
                        windSpeed
                        temperatureDetail {
                            MinC
                            MaxC
                            MinF
                            MaxF
                        }
                        weekTideForecast {
                            daysOfWeek
                            tideForecasts
                        }
                        latitude
                        longitude
                    }
                }
            }
          `,
          skip() {
              return (this.getDivePointByUniqueName && this.getDivePointByUniqueName._id ? true : false)
          },
          variables() {
              return {
                uniqueName: this.uniqueName
              }
          },
          result() {
            this.$apollo.queries.getDivePointsNearBy.refetch();
            if (this.getDivePointByUniqueName.isUserLike) this.like_img = 'ico_heart2';
            if (this.getDivePointByUniqueName.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
            {
                this.getDivePointByUniqueName.depthShow = "";
                if (this.getDivePointByUniqueName.minDepth && this.getDivePointByUniqueName.maxDepth) {
                    if (this.getDivePointByUniqueName.minDepth <= 18) this.getDivePointByUniqueName.depthShow = "초급, 중급, 고급";
                    else if (this.getDivePointByUniqueName.minDepth <= 40) this.getDivePointByUniqueName.depthShow = "중급, 고급";
                    else this.getDivePointByUniqueName.depthShow = "고급";
                }
            }
            {
                this.firstThumbnailImage = (this.getDivePointByUniqueName.backgroundImages && this.getDivePointByUniqueName.backgroundImages.length > 0 && this.getDivePointByUniqueName.backgroundImages[0].thumbnailUrl) ? this.getDivePointByUniqueName.backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
                var id_arr = new Array();
                var width_arr = new Array();
                this.getDivePointByUniqueName.backgroundImages.forEach(x => {
                    id_arr.push(x._id);
                    width_arr.push(720);
                });
                if (id_arr.length > 0) {
                    axios({
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
                    }).then(result_image => {
                        if (result_image.data.data.getImageUrlsByIds) {
                            var i=0;
                            this.getDivePointByUniqueName.backgroundImages.forEach(x => {
                                x.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                                i++;
                            });
                            setTimeout(function() {
                                $("#cover-slider-temp").animate({opacity: "0"}, 1200);
                                $('[data-toggle="tooltip"]').tooltip();
                            },500);
                            setTimeout(function() {
                                $("#cover-slider-temp").css("display", "none");
                            },2000);
                        }
                    });
                }
            }
            if (this.getDivePointByUniqueName.highlights && this.getDivePointByUniqueName.highlights.length > 0) {
                var id_arr = new Array();
                var width_arr = new Array();
                this.getDivePointByUniqueName.highlights.forEach(x => {
                    x.images.forEach(y => {
                        id_arr.push(y._id);
                        width_arr.push(720);
                    })
                });
                if (id_arr.length > 0) {
                    axios({
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
                    }).then(result_image => {
                        if (result_image.data.data.getImageUrlsByIds) {
                            var i=0;
                            this.getDivePointByUniqueName.highlights.forEach(x => {
                                x.images.forEach(y => {
                                    y.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                                    i++;
                                });
                            });
                        }
                    });
                }
            }
            ///////////////////////////////////////////////
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
                    center: {lat: this.getDivePointByUniqueName.latitude, lng: this.getDivePointByUniqueName.longitude},
                    zoom: 14,
                    mapTypeControl: false,
                    streetViewControl: false,
                    zoomControl: false,
                    styles: map_style
                });

                for (var i=0; i<this.getDivePointByUniqueName.diveCenters.length; i++) {
                    const title = this.getDivePointByUniqueName.diveCenters[i].name;
                    const uniqueName = this.getDivePointByUniqueName.diveCenters[i].uniqueName;
                    const desc = this.getDivePointByUniqueName.diveCenters[i].description;
                    const star = this.getDivePointByUniqueName.diveCenters[i].adminScore;
                    const img = (this.getDivePointByUniqueName.diveCenters[i].backgroundImages && this.getDivePointByUniqueName.diveCenters[i].backgroundImages.length>0) ? this.getDivePointByUniqueName.diveCenters[i].backgroundImages[0].thumbnailUrl : "/static/empty.jpg";
                
                    const marker_shop = new google.maps.Marker({
                        map: this.map,
                        position: {lat: this.getDivePointByUniqueName.diveCenters[i].latitude, lng: this.getDivePointByUniqueName.diveCenters[i].longitude},
                        label: {text: title, color: 'white', className: 'marker-position'},
                        icon: new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2_o.png',null, null, null, new google.maps.Size(38,43)),
                    });

                    marker_shop.addListener("click", () => {
                        $(".map-box").removeClass("hide");
                        for (var j=0; j<this.marker_list.length; j++) {
                            var _icon = this.marker_list[j].getIcon();
                            if (_icon.size.width != 38) {
                                this.marker_list[j].setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2_o.png', null, null, null, new google.maps.Size(38,43)));
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
                        
                        
                        marker_shop.setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin_big2.png', null, null, null, new google.maps.Size(58,66)));
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
                            this.marker_list[j].setIcon(new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin2_o.png', null, null, null, new google.maps.Size(38,43)));
                            var _title = this.marker_list[j].getLabel().text;
                            this.marker_list[j].setLabel({text: _title, color: 'white', className: 'marker-position'});
                        }
                    }
                    this.map.setZoom(14);
                });

                var marker_point = new google.maps.Marker({
                    map: this.map,
                    position: {lat: this.getDivePointByUniqueName.latitude, lng: this.getDivePointByUniqueName.longitude},
                    label: {text: this.getDivePointByUniqueName.name + ' 포인트', color: 'white', className: 'marker-position2'},
                    icon: new google.maps.MarkerImage('https://d34l91104zg4p3.cloudfront.net/assets/ico_pin1.png',null, null, null, new google.maps.Size(38,43)),
                });

                
            };
            setTimeout(function() {
                init_template();
            },100);
            setTimeout(function() {
                $("#div_content_loader").hide();
            },200);



            this.$apollo.query({
                // Query
                query: gql`
                query Query($placeId: String!) {
                    getDivingsByPlaceId(placeId: $placeId) {
                        diveShops {
                        _id
                        name
                        uniqueName
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        diveCenters {
                        _id
                        name
                        uniqueName
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        divePoints {
                        _id
                        name
                        uniqueName
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        diveSites {
                        _id
                        name
                        uniqueName
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        _id
                        title
                        description
                        status
                        type
                        hostUser {
                        uid
                        _id
                        nickName
                        gender
                        birthAge
                        }
                        participants {
                        status
                        birth
                        user {
                            _id
                            uid
                            nickName
                            birthAge
                            gender
                        }
                        name
                        gender
                        }
                        chatRoomId
                        startedAt
                        finishedAt
                        interests {
                        _id
                        title
                        }
                    }
                }
                `,
                // Parameters
                variables: {
                    placeId: this.getDivePointByUniqueName._id
                },
            }).then((data) => {
                // Result
                this.getDivingsByPlaceId = data.data.getDivingsByPlaceId;
                this.getDivingsByPlaceId.forEach(x=> {
                    var itm = (x.diveCenters.length > 0 ? x.diveCenters[0] : (x.divePoints.length > 0 ? x.divePoints[0] : (x.diveShops.length > 0 ? x.diveShops[0] : (x.diveSites.length > 0 ? x.diveSites[0] : []))));
                    if (itm && itm.backgroundImages && itm.backgroundImages.length > 0) {
                        x.backgroundImages = [{thumbnailUrl: itm.backgroundImages[0].thumbnailUrl}];
                    }
                    if (itm && itm.name) {
                        x.name = itm.name;
                    }
                    if (itm && itm.adminScore) {
                        x.adminScore = itm.adminScore;
                    }
                    x.dateStartedAt = new Date(x.startedAt);
                });
                console.log(this.getDivingsByPlaceId);
                //}
            }).catch((error) => {
                // Error)
                console.error(error)
                // We restore the initial user input
            });
          },
          
      },
  },
  methods: {
      clickReportRadio(id) {
        $("#btn_report").attr("disabled", false);
        for (var i=0; i<this.$root.$children[0].report_items.length; i++) {
            if ($("#radio_report" + i).parent().children()[1].classList.contains('opacity-30') == false)
                $("#radio_report" + i).parent().children()[1].classList.add('opacity-30');
        }
        $('#' + id).parent().children()[1].classList.remove('opacity-30');
      },
      makeReport() {
        const sel_reason = $(':radio[name="radioReport"]:checked').val();
        

        this.$apollo.mutate({
            // Query
            mutation: gql`mutation Mutation($targetId: ID!, $reason: String!) {
                report(targetId: $targetId, reason: $reason) {
                    success
                }
            }`,
            // Parameters
            variables: {
                targetId: this.selectedReview._id,
                reason: sel_reason
            },
        }).then((data) => {
            // Result
            console.log(data)
            document.getElementById("menu-report").classList.remove('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
            location.reload();
            //}
        }).catch((error) => {
            // Error)
            console.error(error)
            // We restore the initial user input
        })
      },
      findBuddyClick() {
          this.$router.push({name: "BuddyCreateAllPage", target: this.getDivePointByUniqueName})
      },
      async moveDiving(item) {
        var dic_type1 = {"DiveSite": "diveSite", "DivePoint": "divePoint", "DiveCenter": "diveCenter", "Diving": "diving", "User": "user", "Review": "review", "Forum": "forum", "Recommendation": "recommendation"};
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
                    "targetId": item._id,
                    "targetType": dic_type1[item.__typename]
                }
            }
        });
        var dic_type2 = {"DiveSite": "site", "DivePoint": "point", "DiveCenter": "center", "Diving": "diving", "User": "user", "Review": "review", "Forum": "forum", "Recommendation": "recommendation"};
        if (item.__typename == 'DiveSite' || item.__typename == 'DivePoint' || item.__typename == 'DiveCenter')
            location.href = '/' + dic_type2[item.__typename] + '/' + item.uniqueName;
        else 
            location.href = '/' + dic_type2[item.__typename] + '/' + item._id;
      },
      getWediveStartEnd(_startedAt, _finishedAt) {
          var startedAt = new Date(_startedAt);
          var finishedAt = new Date(_finishedAt);
          var getDay = ["일", "월", "화", "수", "목", "금", "토"];
          if (startedAt.getMonth() == finishedAt.getMonth() && startedAt.getDate() == finishedAt.getDate())
            return (startedAt.getMonth()+1) + "." + startedAt.getDate() + "(" + getDay[startedAt.getDay()] + ")";
          else
            return (startedAt.getMonth()+1) + "." + startedAt.getDate() + "(" + getDay[startedAt.getDay()] + ") ~ " + (finishedAt.getMonth()+1) + "." + finishedAt.getDate() + "(" + getDay[finishedAt.getDay()] + ")";
      },
      async clickLike() {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null') {
            const targetId = this.getDivePointByUniqueName._id;
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
                this.getDivePointByUniqueName.likes = ((this.getDivePointByUniqueName.likes==null)?0:this.getDivePointByUniqueName.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.getDivePointByUniqueName.likes = this.getDivePointByUniqueName.likes-1;
            }
          } else {
              this.login();
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null') {
            const targetId = this.getDivePointByUniqueName._id;
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
        var _input = {images: _id_list, targetId: this.getDivePointByUniqueName._id, targetType: 'divePoint', content: this.review_detail, rating: this.rating};
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
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          location.href='/user/create';
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
.evaluation {background-color: rgba(196,187,171,.15);justify-content: space-around;border-radius: 5px;padding: 8px 8px 8px 0;}
.evaluation>span.info {padding-left: 11px;border-left: 1px solid #c4bbab;}
.evaluation>span .icon_question {display: inline-block;position: relative;top: 1px;display: block;width: 18px;height: 18px;background-size: 18px 18px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/question.png);text-indent: -9999px;}

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

.icon-point {overflow: hidden;display: block;margin-left: 11px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/wedive_point.png);background-repeat: no-repeat;-webkit-background-size: 270px 200px;background-size: 270px 200px;}
.icon-type {overflow: hidden;display: block;margin-left: 11px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/wedive_type.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}
.icon-award {overflow: hidden;display: block;margin-left: 11px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/wedive_award.png);background-repeat: no-repeat;-webkit-background-size: 270px 200px;background-size: 270px 200px;}

.wedive-ul {width: 100%;list-style:none;display: inline-block;margin-bottom: 0;padding-left: 5px !important;padding-right: 5px !important;}
.wedive-ul > li {float: left;width: 50%;}
.small-title {color: #ababab;font-weight: 400;font-size: 10px;}
.review-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.text-show-all{position: absolute;top: 26px;right: 20px;color: #727272 !important;font-size:13px;}
.min-h-230 {min-height: 230px;}
.txt_box2 {background: #f4f4f4; border-radius: .5rem;padding: 6px 0px 8px 0px;}

.wedive-score {position: absolute;right: 15px; top: 15px;background: #1d397c; border-radius: 10px 10px 10px 0px; padding: 4px 8px; color: white;}
.wedive-score-desc {position: absolute;right: 10px; top: 44px;color: #1d397c; width:56px;}
.wedive-title {font-family: 'Noto Sans Korean' !important;font-weight:700;margin-bottom:0px;}
.wedive-desc {font-family: 'Noto Sans Korean' !important;font-weight:200;margin-bottom:16px;line-height: 1.6}
.min-h-160 {min-height: 160px;}
.point_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.square-rect {position: relative;padding:0;}
.square-rect:after {content: "";display: block;padding-bottom: 100%;}
.square-rect > img {position: absolute;width: 100%;height: 100%;left: 0;padding:4px;object-fit: cover;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wd-220 {width:220px !important;}
.card-nearby {margin-left: 10px;background-size: cover !important;}
.img-fluid {width: 100%;object-fit: cover;}

.map-box {position: absolute;right: 6px;bottom: 21px;margin: 5px 5px 4px;width: 115px;}
.bx {background-color: rgba(255,255,255);padding: 10px;min-height: 105px;border: 1px solid rgba(0,0,0,.1);border-radius: 10px;}
.wedive-textarea {min-height: 150px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
.mx-80 {max-width: 80%;}
.mx-120 {max-width: 120px;}
.mx-140 {max-width: 140px;}
.background-center {background-position: center !important;background-size: cover !important;}


.thumb-img {
  position: relative;
  display: inline-block;
  width: 75px;
  height: 75px;
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
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;bottom:0px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
</style>
