<template>
  <div class="" style="abackground: linear-gradient(180deg, rgba(239,245,251,1) 0%, rgba(0,190,195,1) 100%);">
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
    <ContentLoader :width="windowWidth" height="700" id="div_content_loader" primaryColor="#e3e7ef" secondaryColor="#f4f7ff">
        <rect x="10" y="0" rx="20" ry="20" :width="windowWidth-20" height="120" />
        <rect x="10" y="130" rx="20" ry="20" :width="windowWidth-20" height="170" />
        <rect x="10" y="310" rx="20" ry="20" :width="windowWidth-20" height="50" />
        <rect x="10" y="370" rx="20" ry="20" :width="windowWidth-20" height="50" />
        <rect x="10" y="430" rx="20" ry="20" :width="windowWidth-20" height="50" />
        
    </ContentLoader>
    
    <!--<div class="hide" id="tab-forum">
        <swiper
            ref="tabSwiper"
            class="swiper wedive-swiper"
            :options="swiperOption"
            @slideChange="tabSlideChange"
        >
            <swiper-slide key="aaa">
                <div v-on:click="moveTo(0)">다이빙 프로필</div>
                <div v-on:click="moveTo(1)">나의 다이빙</div>
            </swiper-slide>
        </swiper>
    </div>-->
    <div class="upper_side" style="background: #eff5fb;">
        <h3 ref="h3_title1" class="h3_active ms-4 me-2 font-noto" v-on:click="moveTo(0)" style="display: inline-block;">다이빙 프로필</h3>
        <h3 ref="h3_title2" class="h3_deactive font-noto" v-on:click="moveTo(1)" style="display: inline-block;">나의 다이빙</h3>
        <div>
            <swiper
                ref="contentSwiper"
                class="wedive-content-swiper"
                @slideChange="onSlideChange"
            >
            <swiper-slide
                :key="0"
                :virtualIndex="0"
                style="padding-left:20px;">
                <div style="padding-top: 10px;">
                    <div class="gallery gallery-filter inline-block" style="width:66px !important;padding:0 !important;min-height: 90px;">
                        <a :href="(getUserById && getUserById.profileImages && getUserById.profileImages.length>0) ? getUserById.profileImages[0].thumbnailUrl : ('https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png')" data-gallery="gallery-image" class="center_image filtr-item" :title="(getUserById?getUserById.nickName:'')" data-category="user" style="width:60px;height:60px;">
                            <div class="user-img me-2">
                                <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                    <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                    <clipPath id="clipSquircle">
                                        <use xlink:href="#shapeSquircle"/>
                                    </clipPath>
                                    </defs>
                                    <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(getUserById && getUserById.profileImages && getUserById.profileImages.length>0) ? getUserById.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div class="font-noto" style="position: absolute;top:8px;left:98px;">
                        
                        <h5 class="mb-0 font-500 ellipsis">{{ getUserById ? '다이버 ' + getUserById.nickName + '님' : '' }}</h5>
                        <span v-if="getUserById && getUserById.scubaLevelShow != ''">
                            <img src="https://d34l91104zg4p3.cloudfront.net/assets/award1.png" height="30" class="inline-block" style="vertical-align: top;margin-left:-4px;">
                            <span class="chip chip-s text-center font-400 wedive-chip color-white" style="position: initial;background-color: #268cd3;margin-top: 4px !important;margin-left: -4px !important;margin-right:8px !important;">스쿠바 {{ getUserById ? getUserById.scubaLevelShow : '' }}</span>
                        </span>
                        <span v-if="getUserById && getUserById.freeLevelShow != ''">
                            <img src="https://d34l91104zg4p3.cloudfront.net/assets/award2.png" height="30" class="inline-block" style="vertical-align: top;margin-left:-4px;">
                            <span class="chip chip-s text-center font-400 wedive-chip color-white" style="position: initial;background-color: #be4544;margin-top: 4px !important;margin-left: -4px !important;">프리 {{ getUserById ? getUserById.freeLevelShow : '' }}</span>
                        </span>
                        <br/>
                        <span class="color-gray">다이빙 호스트 {{ getUserById.divingHostCount }}회&nbsp;&nbsp;|&nbsp;&nbsp;다이빙 참여 {{ getUserById.divingParticipantCount }}회</span>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide
                :key="1"
                :virtualIndex="1">
                <div class="text-center">
                    <img src="/static/images/assets/empty_list2_2.jpg" height="74" style="margin-top:4px;"/>
                    <p class="mb-0 opacity-30 font-noto font-14 mt-n2">예정된 다이빙이 없습니다.</p>
                </div>
            </swiper-slide>
            </swiper>
        </div>
    </div>

    <div class="waveaa">
    </div>
    
    <div class="pe-4 ps-4" style="margin-top:-100px;">
        <div class="row">
            <div class="card card-style col-6 shadow-xl square m-0" style="width: calc(50% - 6px);background-image: url(/static/images/assets/toss-hand.png);background-size: 70% 70%;background-repeat: no-repeat;background-position: right bottom;">
                <div class="mb-0 mt-3" style="position:absolute;height:50%;">
                    <h4 class="font-noto text-start pt-1 mb-0">버디찾기</h4>
                    <p class="text-start mb-0 opacity-70">새로운 다이빙 생성</p>
                </div>
            </div>
            <div class="card card-style col-6 shadow-xl square m-0" style="width: calc(50% - 6px);margin-left: 12px !important;background-image: url(/static/images/assets/search2.png);background-size: 70% 70%;background-repeat: no-repeat;background-position: right bottom;">
                <div class="mb-0 mt-3" style="position:absolute;height:50%;">
                    <h4 class="font-noto text-start pt-1 mb-0">검색</h4>
                    <p class="text-start mb-0 opacity-70">다이빙, 장소 검색</p>
                </div>
            </div>
        </div>
    </div>

    <div v-if="getNearByDivings != null" style="margin-top: -16px;">
        <div>
            <h4 class="text-start mb-2 mt-2 font-noto" style="margin-left: 14px;margin-right: 14px;position:relative;font-weight:600;">내 근처 다이빙 이벤트</h4>
        </div>
        <div class="splide single-slider-site slider-no-arrows visible-slider slider-no-dots" id="single-slider-nearby-diving" style="height:176px;">
            <div class="splide__track">
                <div class="splide__list">
                    <div v-for="(item, index) in getNearByDivings" class="splide__slide">
                        <a v-on:click="movePreview(item)">
                            <div class="card card-style card-nearby" :style="'background: url('+((item.backgroundImages && item.backgroundImages.length > 0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="160">
                                <div class="card-bottom px-3 py-3">
                                    <h4 class="color-white font-18 font-600">{{ item.name }} ({{item.startedAt.substring(5, 10).replace(/-/gi, '/')}})</h4>
                                    <div class="divider bg-white opacity-20 mb-1"></div>
                                    <div class="d-flex">
                                        <div class="align-self-center" style="max-width: 100%;">
                                            <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;" v-html="item.description"></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-overlay bg-gradient opacity-30"></div>
                                <div class="card-overlay bg-gradient"></div>
                            </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="splide single-slider-noauto slider-no-arrows visible-slider slider-no-dots" id="single-slider-guide" style="height:136px;">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <a href="/guide/beginner">
                            <div class="card card-style card-nearby" style="background-color: #fff;" data-card-height="120">
                                <div class="card-center px-3 py-3">
                                    <h4 class="font-18 font-600">다이빙이 처음이세요?</h4>
                                    <p class="mb-0 line-height-s opacity-70">위다이브에서 준비한<br/>다이브 입문학 개론</p>
                                    <img src="/static/images/assets/business-startup.png" style="width: 80px;position: absolute;right:10px;bottom:0px;"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="splide__slide">
                        <a href="/guide/beginner">
                            <div class="card card-style card-nearby" style="background-color: #fff;" data-card-height="120">
                                <div class="card-center px-3 py-3">
                                    <h4 class="font-18 font-600">프리다이빙 즐기기</h4>
                                    <p class="mb-0 line-height-s opacity-70">프리다이빙<br/>심화과정</p>
                                    <img src="/static/images/assets/free-diver.png" style="width: 60px;position: absolute;right:10px;bottom:-6px;"/>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="splide__slide">
                        <a href="/guide/beginner">
                            <div class="card card-style card-nearby" style="background-color: #fff;" data-card-height="120">
                                <div class="card-center px-3 py-3">
                                    <h4 class="font-18 font-600">스쿠바다이빙 즐기기</h4>
                                    <p class="mb-0 line-height-s opacity-70">스쿠바다이빙<br/>심화과정</p>
                                    <img src="/static/images/assets/scuba-diver.png" style="width: 90px;position: absolute;right:2px;bottom: -14px;"/>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="page-content pt-2">
        <!--
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
                                    <img class="ps-0" src="https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif" style="position:absolute;bottom:0;right:0;max-width:96px;width:96px;margin-bottom:-8px;"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="nickName==null && idToken == null" v-on:click="login" class="splide__slide">
                        <div class="card card-style" style="box-shadow: none;background: #494949;">
                            <div class="mb-0" style="min-height: 96px;background:url(https://d34l91104zg4p3.cloudfront.net/assets/onoff1.gif);background-size: 154px 96px;background-repeat:no-repeat;background-position-x:right;">
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
        -->

        
        <div v-for="(recommendation,rec_idx) in recommendation1" v-if="recommendation.previews.length > 0">
            <div v-if="recommendation.previewCount == 0" v-on:click="moveRecommend(recommendation._id, 'recommendation')" class="card card-style" :style="recommendation.cssStyle.includes('|') ? recommendation.cssStyle.split('|')[0] : recommendation.cssStyle">
                <div :class="'content mb-0 mt-3 me-0' + (recommendation.className ? ' ' + recommendation.className : '')">
                    <h4 class="text-start mb-0 font-600" v-html="recommendation.title"></h4><i class="wedive-txt-all wedive_right"></i>
                    <p class="mb-0 opacity-60 ls-n1">{{ recommendation.description ? recommendation.description : '' }}</p>
                    
                    <img v-if="recommendation.cssStyle.includes('|')" :class="recommendation.cssStyle.split('|')[2]" :src="'https://d34l91104zg4p3.cloudfront.net/assets/' + recommendation.cssStyle.split('|')[1]" style="padding-bottom:16px;max-height:200px;"/>
                </div>
            </div>

            <div v-else-if="recommendation.previewCount == 2 || recommendation.previewCount == 3" class="card card-style">
                <div class="content mb-0 mt-3">
                    <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                        <h4 class="text-start mb-0">{{ recommendation.title }}<i class="wedive-txt-all wedive_right"></i></h4>
                        <p class="mb-3 color-gray-light-mid">{{ recommendation.description ? recommendation.description : '' }}</p>
                    </div>
                    
                    <div v-for="(preview,index) in recommendation.previews">
                        <div class="map-box" style="position: relative;height: 85px;">
                            <a v-on:click="movePreview(preview)">
                                <div class="bx">
                                    <div class="justify-content-center mb-0 text-start">
                                        <div class="thumb-img me-2">
                                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                <clipPath id="clipSquircle">
                                                    <use xlink:href="#shapeSquircle"/>
                                                </clipPath>
                                                </defs>
                                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="preview.backgroundImage"/>
                                            </svg>
                                        </div>
                                        <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                            <img v-bind:src="(preview.backgroundImages && preview.backgroundImages.length > 0) ? preview.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                        </div>-->
                                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 138px);">
                                            <h4 class="font-15 mt-1 ellipsis"> {{ preview.title }} </h4>
                                            <p class="pb-0 mb-0 nearby_desc"> {{ getWediveStartEnd(preview.startedAt, preview.finishedAt) }} </p>
                                            
                                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ preview.location }} ({{ preview.type.join().replace('scubaDiving', '스쿠바').replace('freeDiving', '프리') }})</p>
                                        </div>
                                        <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">{{ preview.participants.filter(x=>x.status=='joined').length+1 }}명 참석</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div v-if="index < recommendation.previews.length-1" class="divider mt-3 mb-3"></div>
                        <div v-else class="mb-3"></div>
                    </div>
                    
                </div>
            </div>
            <div v-else>
                <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                    <h4 :class="'text-start mb-0' + (rec_idx==0 ? '' : ' mt-4')" style="margin-left: 14px;margin-right: 14px;position:relative;margin-top:16px;">{{ recommendation.title }}<i class="wedive-txt-all wedive_right" style="top:3px !important;"></i></h4>
                    <p v-if="recommendation.description" class="mb-2 color-gray-light-mid" style="margin-left: 14px;margin-right: 14px;margin-top:-2px;">{{ recommendation.description }}</p>
                </div>
                <div class="splide single-slider-site slider-no-arrows visible-slider slider-no-dots" :id="'single-slider-'+recommendation._id" style="height:276px;">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="(preview, index) in recommendation.previews" class="splide__slide">
                                <a v-on:click="movePreview(preview)">
                                    <div class="card card-style card-nearby" :style="'background: url('+((preview.backgroundImages && preview.backgroundImages.length > 0) ? preview.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="260">
                                        <div class="card-top px-3 py-3">
                                            <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                                        </div>
                                        <div class="card-bottom px-3 py-3">
                                            <h4 class="color-white font-18 font-600">{{ preview.title }}</h4>
                                            <div class="divider bg-white opacity-20 mb-1"></div>
                                            <div class="d-flex">
                                                <div class="align-self-center" style="max-width: 100%;">
                                                    <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">{{ preview.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-overlay bg-gradient opacity-30"></div>
                                        <div class="card-overlay bg-gradient"></div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>







        <div v-if="getNearByDiveCenters != null" style="margin-top: 16px;">
            <div>
                <h4 class="text-start mb-2 mt-2 font-noto" style="margin-left: 14px;margin-right: 14px;position:relative;font-weight:600;">내 근처 다이빙 수영장</h4>
            </div>
            <div class="splide single-slider-site slider-no-arrows visible-slider slider-no-dots" id="single-slider-nearby-pool" style="height:176px;">
                <div class="splide__track">
                    <div class="splide__list">
                        <div v-for="(item, index) in getNearByDiveCenters" class="splide__slide">
                            <a v-on:click="movePreview(item)">
                                <div class="card card-style card-nearby" :style="'background: url('+((item.backgroundImages && item.backgroundImages.length > 0) ? item.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="160">
                                    <div class="card-bottom px-3 py-3">
                                        <h4 class="color-white font-18 font-600">{{ item.name }}</h4>
                                        <div class="divider bg-white opacity-20 mb-1"></div>
                                        <div class="d-flex">
                                            <div class="align-self-center" style="max-width: 100%;">
                                                <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">{{ item.description }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-overlay bg-gradient opacity-30"></div>
                                    <div class="card-overlay bg-gradient"></div>
                                </div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div v-for="(recommendation,rec_idx) in recommendation2">
            <div v-if="recommendation.previewCount == 0" v-on:click="moveRecommend(recommendation._id, 'recommendation')" class="card card-style" :style="recommendation.cssStyle.includes('|') ? recommendation.cssStyle.split('|')[0] : recommendation.cssStyle">
                <div :class="'content mb-0 mt-3 me-0' + (recommendation.className ? ' ' + recommendation.className : '')">
                    <h4 class="text-start mb-0 font-600" v-html="recommendation.title"></h4><i class="wedive-txt-all wedive_right"></i>
                    <p class="mb-0 opacity-60 ls-n1">{{ recommendation.description ? recommendation.description : '' }}</p>
                    
                    <img v-if="recommendation.cssStyle.includes('|')" :class="recommendation.cssStyle.split('|')[2]" :src="'https://d34l91104zg4p3.cloudfront.net/assets/' + recommendation.cssStyle.split('|')[1]" style="padding-bottom:16px;max-height:200px;"/>
                </div>
            </div>

            <div v-else-if="recommendation.previewCount == 2 || recommendation.previewCount == 3" class="card card-style">
                <div class="content mb-0 mt-3">
                    <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                        <h4 class="text-start mb-0">{{ recommendation.title }}<i class="wedive-txt-all wedive_right"></i></h4>
                        <p class="mb-3">{{ recommendation.description ? recommendation.description : '' }}</p>
                    </div>
                    
                    <div v-for="(site,index) in recommendation.previews.filter(x=>x.__typename == 'DiveSite')">
                        <div class="map-box">
                            <a v-on:click="movePreview(site)">
                                <div class="bx">
                                    <div class="justify-content-center mb-0 text-start">
                                        <div class="thumb-img me-2">
                                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                                <defs>
                                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                                <clipPath id="clipSquircle">
                                                    <use xlink:href="#shapeSquircle"/>
                                                </clipPath>
                                                </defs>
                                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                            </svg>
                                        </div>
                                        <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                            <img v-bind:src="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                        </div>-->
                                        <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 156px);">
                                            <h4 class="font-15"> {{ site.name }} </h4>
                                            <p class="pb-0 mb-0 nearby_desc"> {{ site.description }} </p>
                                            
                                            <p class="pb-0 mb-0"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                                <span> {{(site.adminScore/20).toFixed(1)}} </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div v-if="index < recommendation.previews.length-1" class="divider mt-3 mb-3"></div>
                        <div v-else class="mb-3"></div>
                    </div>
                    
                </div>
            </div>
            <div v-else>
                <div v-on:click="moveRecommend(recommendation._id, 'recommendation')">
                    <h4 :class="'text-start mb-0' + (rec_idx==0 ? '' : ' mt-4')" style="margin-left: 14px;margin-right: 14px;position:relative;">{{ recommendation.title }}<i class="wedive-txt-all wedive_right" style="top:3px !important;"></i></h4>
                    <p v-if="recommendation.description" class="mb-2" style="margin-left: 14px;margin-right: 14px;margin-top:-2px;">{{ recommendation.description }}</p>
                </div>
                <div class="splide single-slider-site slider-no-arrows visible-slider slider-no-dots" :id="'single-slider-'+recommendation._id" style="height:276px;">
                    <div class="splide__track">
                        <div class="splide__list">
                            <div v-for="(site, index) in recommendation.previews.filter(x=>x.__typename == 'DiveSite')" class="splide__slide">
                                <a v-on:click="movePreview(site)">
                                    <div class="card card-style card-nearby" :style="'background: url('+((site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg')+')'" data-card-height="260">
                                        <div class="card-top px-3 py-3">
                                            <a href="#" data-menu="menu-heart" class="bg-white rounded-sm icon icon-xs float-end"><i class="fa fa-heart color-red-dark"></i></a>
                                        </div>
                                        <div class="card-bottom px-3 py-3">
                                            <h4 class="color-white font-18 font-600">{{ site.name }}</h4>
                                            <div class="divider bg-white opacity-20 mb-1"></div>
                                            <div class="d-flex">
                                                <div class="align-self-center" style="max-width: 100%;">
                                                    <p class="font-11 opacity-70 font-600 color-white nearby_desc mb-0" style="max-width: 100%;">{{ site.description }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-overlay bg-gradient opacity-30"></div>
                                        <div class="card-overlay bg-gradient"></div>
                                    </div>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="card card-style">
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
                <div class="text-end"><img class="" src="https://d34l91104zg4p3.cloudfront.net/assets/calendar.gif" style="max-height: 200px;"/></div>
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
                <div style="text-align:center;"><img class="" src="https://d34l91104zg4p3.cloudfront.net/assets/nearby.gif" style="max-height:200px;"/></div>
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
                <img class="float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/jeju.jpg" style="max-height:180px;"  />
            </div>
        </div>

        <div class="card card-style" style="background: #83adec;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-2 mb-0 font-600"><i class="fas fa-camera me-2"></i>수중 촬영 다이빙<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#인스타 사진&nbsp;&nbsp;#인생 한컷</p>
                <div class="text-center"><img class="mt-n1" src="https://d34l91104zg4p3.cloudfront.net/assets/camera.gif" style="max-height:200px;"/></div>
            </div>
        </div>

        <div class="card card-style" style="background: #dbaa47;">
            <div class="content mb-0 mt-3">
                <h4 class="color-white text-start pt-1 mb-0">뒷풀이 포함 이벤트<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="color-white mb-0 opacity-60 ls-n1">#맥주인생&nbsp;&nbsp;#좋은사람</p>
                <img style="position:absolute;bottom:0;left:20%;height:90%;" src="https://d34l91104zg4p3.cloudfront.net/assets/fireworks.gif"/>
                <img style="position:absolute;bottom:0;left:0;height:70%;" src="https://d34l91104zg4p3.cloudfront.net/assets/fireworks2.gif"/>
                <img class="mt-n2 mb-4 float-right" src="https://d34l91104zg4p3.cloudfront.net/assets/beer.png" />
            </div>
        </div>

        <div class="card card-style" style="background: #99dfe3;height:270px;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-0">해외투어<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#세계 10대 포인트&nbsp;&nbsp;#가자 성지로!</p>
                <div class="text-center"><img class="movebox" src="https://d34l91104zg4p3.cloudfront.net/assets/air-plane.png" width="200"/></div>
            </div>
        </div>

        <div class="card card-style" style="background: #e9ad9b;">
            <div class="content mb-0 mt-3">
                <h4 class="text-start pt-1 mb-0">초보자 참여 가능<i class="wedive-txt-all wedive_right"></i></h4>
                <p class="mb-0 opacity-60 ls-n1">#걱정마요&nbsp;&nbsp;#누구나 시작은&nbsp;&nbsp;#함께 해요</p>
                <div class="text-center"><img class="mt-4 mb-5" src="https://d34l91104zg4p3.cloudfront.net/assets/lifebuoy.png"/></div>
            </div>
        </div>
        -->
        

        
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
import { ContentLoader } from 'vue-content-loader'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
const axios = require("axios");


export default {
  name: 'HelloWorld',
  mounted() {
    init_template();
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    // get Geo location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            this.my_latitude = position.coords.latitude;
            this.my_longitude = position.coords.longitude;
        });
    }
    
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
    window.addEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        my_latitude: 37.56425754670452,
        my_longitude: 126.9741944890715,
        windowWidth: window.innerWidth,
        getNearByDivings: [],
        getNearByDiveCenters: [],
        recommendation1: [],
        recommendation2: [],
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
        swiperOption: {
            slidesPerView: 3.7,
            spaceBetween: 5,
            pagination: false,
            //pagination: {
            //    el: '.swiper-pagination'
            //},
            slidesOffsetBefore: 16, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
            //slidesOffsetAfter: 130, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
            centeredSlides: true,
            
        },
    }
  },
  apollo: {
    getNearByDiveCenters: {
        query: gql`
            query GetNearByDiveCenters($lat: Float!, $lng: Float!) {
                getNearByDiveCenters(lat: $lat, lng: $lng) {
                    _id
                    uniqueName
                    name
                    description
                    adminScore
                    latitude
                    longitude
                    backgroundImages {
                        thumbnailUrl
                    }
                    address
                    latitude
                    longitude
                    countryCode
                }
            }
        `,
        variables () {
            return {
                "lat": this.my_latitude,
                "lng": this.my_longitude
            }
        },
        async result () {
        }
    },
    getNearByDivings: {
        query: gql`
            query GetNearByDivings($lat: Float!, $lng: Float!) {
                getNearByDivings(lat: $lat, lng: $lng) {
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
        variables () {
            return {
                "lat": this.my_latitude,
                "lng": this.my_longitude
            }
        },
        async result () {
            this.getNearByDivings.forEach(x => {
                var itm = (x.diveCenters.length > 0 ? x.diveCenters[0] : (x.divePoints.length > 0 ? x.divePoints[0] : (x.diveShops.length > 0 ? x.diveShops[0] : (x.diveSites.length > 0 ? x.diveSites[0] : []))));
                if (itm && itm.backgroundImages && itm.backgroundImages.length>0) {
                    x.backgroundImages = [{thumbnailUrl: itm.backgroundImages[0].thumbnailUrl}];
                }
                if (itm && itm.name) {
                    x.name = itm.name;
                }
                if (itm && itm.adminScore) {
                    x.adminScore = itm.adminScore;
                }
                if (x.description.includes("https://cafe.naver.com")) {
                    var url = x.description.substring(x.description.indexOf("https://cafe.naver.com"), x.description.length);
                    if (url.indexOf("\n") > 0 || url.indexOf(" ") > 0) {
                        if (url.indexOf("\n") > 0 && url.indexOf(" ") > 0) {
                            if (url.indexOf("\n") > url.indexOf(" ")) {
                                url = url.substring(0, url.indexOf(" "));
                            } else {
                                url = url.substring(0, url.indexOf("\n"));
                            }
                        } else if (url.indexOf("\n") > 0) {
                            url = url.substring(0, url.indexOf("\n"));
                        } else if (url.indexOf(" ") > 0) {
                            url = url.substring(0, url.indexOf(" "));
                        }
                    }
                    x.description = x.description.replace(url, '');
                    x.naver_cafe_url = url;
                }
                if (x.description.includes("\n") == false) {
                    x.description = x.description + "\n&nbsp;";
                }
                x.description = x.description.replace(/\n/gi, '<br/>');
                if (x.description.lastIndexOf("<br/>") == x.description.length -5) {
                    x.description = x.description + "&nbsp;";
                }
                if (x.description == '<br/>&nbsp;') {
                    x.description = '내용 없음' + x.description;
                }
            });
        }
    },
    getUserById: {
        query: gql`
        query GetUserById($id: ID!) {
            getUserById(_id: $id) {
                _id
                uid
                divingHistoryLocations
                authProvider
                oauthToken
                fcmToken
                email
                emailVerified
                phoneNumber
                profileImages {
                _id
                thumbnailUrl
                }
                nickName
                name
                birthAge
                gender
                residence
                interests {
                title
                type
                }
                divingLog
                freeDivingBests
                freeLicenseLevel
                freeLicenseType
                scubaLicenseLevel
                scubaLicenseType
                divingHostCount
                divingParticipantCount
                createdAt
                isUserLike
                isUserDislike
                isUserSubscribe
                views
                likes
                dislikes
            }
        }
        `,
        variables () {
            return {
                id: localStorage.userId
            }
        },
        async result () {
            this.getUserById.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
            var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
            var s_lvl = parseInt(this.getUserById.scubaLicenseLevel);
            var f_lvl = parseInt(this.getUserById.freeLicenseLevel);
            this.getUserById.scubaLevelShow = (s_lvl>0) ? scuba_level[s_lvl] : "";
            this.getUserById.freeLevelShow = (f_lvl>0) ? free_level[f_lvl] : "";
            if (s_lvl > f_lvl) {
                this.getUserById.levelShow = (s_lvl>0) ? "스쿠바 " + scuba_level[s_lvl] : this.getUserById.levelShow;
            } else {
                this.getUserById.levelShow = (f_lvl>0) ? "프리 " + free_level[f_lvl] : this.getUserById.levelShow;
            }
            this.getUserById.levelShow += " 다이버";
            if(s_lvl>5) this.getUserById.levelShow = scuba_level[s_lvl];

            if (this.getUserById.profileImages.length > 0) {
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
                            ids: [this.getUserById.profileImages[0]._id],
                            widths: [720]
                        }

                    }
                });
                if (result_image.data.data.getImageUrlsByIds) {
                    this.getUserById.profileImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[0]
                }
            }
        }
    },
    recommendation1: {
        query: gql`
        query Query($targetType: RecommendationTargetType) {
            recommendation1: getUserRecommendationsByTargetType(targetType: $targetType) {
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
                        _id
                        title
                        description
                        status
                        type
                        maxPeopleNumber
                        participants {
                            status
                        }
                        startedAt
                        finishedAt
                        chatRoomId
                        createdAt
                        views
                        likes
                        dislikes
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
                }
            },
        }`,
        variables () {
            return {
                targetType: "diving",
            }
        },
        async result () {
            var id_arr = new Array();
            var width_arr = new Array();
            this.recommendation1.filter(x=>x.previewCount > 3).forEach(x => {
                x.previews.forEach(y => {
                    if (y.backgroundImages && y.backgroundImages.length > 0) {
                        id_arr.push(y.backgroundImages[0]._id);
                        width_arr.push(720);
                    }
                });
            });
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
                    var cnt = 0;
                    this.recommendation1.filter(x=>x.previewCount > 3).forEach(x => {
                        x.previews.forEach(y => {
                            if (y.backgroundImages.length > 0) {
                                y.backgroundImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[cnt];
                                cnt++;
                            }
                        });
                    });
                    //console.log(result_image.data.data.getImageUrlsByIds);
                }
            }
            
            

            this.recommendation1.forEach(recommendation => {
                recommendation.previews.forEach(x => {
                    if (x.divePoints && x.diveCenters) {
                        x.location = x.diveSites.length > 0 ? x.diveSites[0].name : x.divePoints.length > 0 ? x.divePoints[0].name : x.diveCenters.length > 0 ? x.diveCenters[0].name : '';
                        x.backgroundImage = x.diveSites.length > 0 ? x.diveSites[0].backgroundImages[parseInt(Math.random()*x.diveSites[0].backgroundImages.length)].thumbnailUrl : x.divePoints.length > 0 ? x.divePoints[0].backgroundImages[parseInt(Math.random()*x.divePoints[0].backgroundImages.length)].thumbnailUrl : x.diveCenters.length > 0 ? x.diveCenters[0].backgroundImages[parseInt(Math.random()*x.diveCenters[0].backgroundImages.length)].thumbnailUrl : '/static/empty.jpg';
                    }
                });
            });
        },
        fetchPolicy: 'no-cache'
    },
    recommendation2: {
        query: gql`
        query Query($targetType: RecommendationTargetType) {
            recommendation2: getUserRecommendationsByTargetType(targetType: $targetType) {
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
                targetType: "diveSite",
            }
        },
        async result () {
            setTimeout(function() {
                $("#div_content_loader").hide();
                $("body").css("background", "linear-gradient(180deg, #eff5fb 200px, #c6dbf3 201px, #668fbd 100%)");
                $(".page-title-clear").css("background", "#eff5fb");
            },300);
            
            var id_arr = new Array();
            var width_arr = new Array();
            this.recommendation2.filter(x=>x.previewCount > 3).forEach(x => {
                x.previews.forEach(y => {
                    if (y.backgroundImages.length > 0) {
                        id_arr.push(y.backgroundImages[0]._id);
                        width_arr.push(720);
                    }
                });
            });
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
                    var cnt = 0;
                    this.recommendation2.filter(x=>x.previewCount > 3).forEach(x => {
                        x.previews.forEach(y => {
                            if (y.backgroundImages && y.backgroundImages.length > 0) {
                                y.backgroundImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[cnt];
                                cnt++;
                            }
                        });
                    });
                    //console.log(result_image.data.data.getImageUrlsByIds);
                }
            }
            
            var splide = document.getElementsByClassName('splide');
            if(splide.length > 0){
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
    ContentLoader,
    Swiper,
    SwiperSlide,
  },
  computed: {
    tabSwiper() {
        if (this.$refs.tabSwiper.hasOwnProperty("swiper")){
            return this.$refs.tabSwiper.swiper;
        } else {
            return this.$refs.tabSwiper.$swiper;
        }
    },
    contentSwiper() {
        if (this.$refs.contentSwiper.hasOwnProperty("swiper")){
            return this.$refs.contentSwiper.swiper;
        } else {
            return this.$refs.contentSwiper.$swiper;
        }
    }
  },
  methods: {
      moveTo(idx) {
          this.contentSwiper.slideTo(idx);
      },
      tabSlideChange() {
          //this.contentSwiper.slideTo(this.tabSwiper.activeIndex);
      },
      onSlideChange() {
          console.log(this.contentSwiper.activeIndex);
          if (this.contentSwiper.activeIndex == 1) {
              this.$refs.h3_title1.classList.remove("h3_active")
              this.$refs.h3_title1.classList.add("h3_deactive")
              this.$refs.h3_title2.classList.remove("h3_deactive")
              this.$refs.h3_title2.classList.add("h3_active")
          } else if (this.contentSwiper.activeIndex == 0) {
              this.$refs.h3_title2.classList.remove("h3_active")
              this.$refs.h3_title2.classList.add("h3_deactive")
              this.$refs.h3_title1.classList.remove("h3_deactive")
              this.$refs.h3_title1.classList.add("h3_active")
          }
          
          //this.tabSwiper.slideTo(this.contentSwiper.activeIndex);
      },
      async moveRecommend(id, targetType) {
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
                    "targetId": id,
                    "targetType": targetType
                }
            }
        });
        location.href = '/recommend/' + id;
      },
      async movePreview(item) {
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
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            await this.$apollo.queries.getUserRecommendationsByTargetType.refetch();
            loaded('done')
        } else {
            console.log("1")
            loaded('done')
            return false;
        }
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

@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
-webkit-@keyframes motion-updown {0% {margin-top: 0px;}20% {margin-top: 10px;}40% {margin-top: 0px;}60% {margin-top: 10px;}80% {margin-top: 0px;}100% {margin-top: 0px;}}
@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
-webkit-@keyframes motion-leftright {0% {margin-right: 0px;}20% {margin-right: 25px;}40% {margin-right: 0px;}60% {margin-right: 25px;}80% {margin-right: 0px;}100% {margin-right: 0px;}}
@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}
-webkit-@keyframes motion-endtoend {0% {left: -100px; opacity: .5;}50% {left: 40%; opacity: .5;}100% {left: 100%; opacity: 0;}}
@keyframes rotate_wave_wave {
  0% {transform: translate(-50%, 0) rotateZ(0deg);}
  50% {transform: translate(-50%, -2%) rotateZ(180deg);}
  100% {transform: translate(-50%, 0%) rotateZ(360deg);}
}

.moveboxupdown {animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-updown 3s linear 0s infinite alternate; margin-top: 0;}
.movebox {animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;-webkit-animation: motion-leftright 3s linear 0s infinite alternate; margin-top: 0;}
.movebox2 {position:absolute;white-space: nowrap;left:-100px;padding-top:5px;opacity:.5;animation: motion-endtoend 20s linear infinite;-webkit-animation: motion-endtoend 20s linear infinite;}
.movebox3 {position:absolute;white-space: nowrap;left:-100px;padding-top:50px;opacity:.5;animation: motion-endtoend 30s linear infinite;-webkit-animation: motion-endtoend 30s linear infinite;}
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.card-nearby {margin-left: 10px;margin-right: 2px;background-size: cover !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}

.chip span {line-height: 24px !important;}
.icon-concierge {position: fixed;width: 58px;height: 58px;bottom: 70px;right:24px;background-size:cover;background: url(https://d34l91104zg4p3.cloudfront.net/assets/concierge.gif);background-size:cover !important;background-position-y: 8px;background-repeat: no-repeat;box-shadow: 0 4px 24px 0 rgb(0 0 0 / 45%) !important;}
.position-relative {position: relative;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}

.card-white > h4 {color: white}
.card-white > p {color: white !important;}
.card-white .wedive-txt-all {color: white;filter: brightness(100) !important;}
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
.user-img {
  position: relative;
  width: 64px;
  height: 64px;
  overflow: hidden;
  user-select: none;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3csvg width='88px' height='88px' viewBox='0 0 88 88' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cpath d='M44%2c0.5 C59.8650505%2c0.5 70.7664452%2c3.40244096 77.6820021%2c10.3179979 C84.597559%2c17.2335548 87.5%2c28.1349495 87.5%2c44 C87.5%2c59.8650505 84.597559%2c70.7664452 77.6820021%2c77.6820021 C70.7664452%2c84.597559 59.8650505%2c87.5 44%2c87.5 C28.1349495%2c87.5 17.2335548%2c84.597559 10.3179979%2c77.6820021 C3.40244096%2c70.7664452 0.5%2c59.8650505 0.5%2c44 C0.5%2c28.1349495 3.40244096%2c17.2335548 10.3179979%2c10.3179979 C17.2335548%2c3.40244096 28.1349495%2c0.5 44%2c0.5 Z' fill='none' stroke='rgba(0,0,0,0.08)'%3e%3c/path%3e%3c/svg%3e");
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

.h3_active {color: black; font-size: 18px;background-image: linear-gradient(90deg, #25beb2, #25beb2);background-position: bottom;background-size: 100% 30%;background-repeat: no-repeat;padding-left:4px;padding-right:4px;font-weight: 600;}
.h3_deactive {color: #b5b7b9; font-size: 16px;padding-left:4px;padding-right:4px;font-weight: 400;}

.square:after {
  content: "";
  display: block;
  padding-bottom: 24px;
}






.waveaa {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 140px;
  background-color: #c6dbf3;
  overflow: hidden;
}
.waveaa:after {
content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #eff5fb;
    animation-name: rotate_wave_wave;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
	bottom: 80px;
    opacity: .5;
    border-radius: 47%;
    animation-duration: 10s;
}
.waveaa:before {
    content: "";
    position: absolute;
    left: 50%;
    min-width: 300vw;
    min-height: 300vw;
    background-color: #eff5fb;
    animation-name: rotate_wave_wave;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
	bottom: 90px;
    border-radius: 45%;
    animation-duration: 10s;
}

</style>
