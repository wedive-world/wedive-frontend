<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">버디 찾기</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="font-16 header-icon header-icon-4"><img src="https://d34l91104zg4p3.cloudfront.net/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="60%" style="margin-top:25%;"/>
            <p class="font-noto color-gray">앗! 찾을 수 없는 버디찾기 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>
    <div :class="'page-content' + (!is_empty ? '' : ' hide')" style="margin-top:50px;">

        <div v-if="locationData[0] == null || locationData[0].backgroundImages == null || locationData[0].backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain !important;height:250px;background-position: center;">
        </div>
        <div v-else style="min-height:250px;height:250px;max-height:250px;">
            <div class="splide single-slider cover-slider slider-no-arrows slider-no-dots" id="cover-slider-1" data-card-height="250" style="position:relative;">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-for="(image, index) in locationData[0].backgroundImages">
                            <div data-card-height="250" :class="'card rounded-0 mb-0 background-center background_img_' + index" v-bind:style="'background: url('+image.thumbnailUrl+');background-size: cover !important;'">
                                <div class="wedive-source">{{ image.reference | makeReference }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cover-slider-temp" class="background-center" :style="'background:url('+locationData[0].backgroundImages[0].thumbnailUrl+');position:absolute;width:100%;top:0px;height:250px;'">
            </div>
        </div>

    
        <div class="card mb-0" style="z-index:1;">
            <div class="content mt-3 row pb-3 mb-0 border-bottom" v-on:click="goUserPage(getDivingById.hostUser)">
                <div class="p-0" style="width: calc(100% - 104px);flex: 0 0 auto;">
                    <div class="user-img me-2">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(getDivingById.hostUser && getDivingById.hostUser.profileImages && getDivingById.hostUser.profileImages.length>0 && getDivingById.hostUser.profileImages[0].thumbnailUrl) ? getDivingById.hostUser.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                        </svg>
                    </div>
                    <!--<img class="inline-block me-2 circular_image" :src="(getDivingById.hostUser && getDivingById.hostUser.profileImages && getDivingById.hostUser.profileImages.length>0 && getDivingById.hostUser.profileImages[0].thumbnailUrl) ? getDivingById.hostUser.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+((getDivingById.hostUser&&getDivingById.hostUser.gender)?getDivingById.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>-->
                    <div class="inline-block font-noto" style="vertical-align: top;max-width: calc(100vw - 200px);">
                        <h5 class="mb-0 font-500 font-15 ellipsis">{{ (getDivingById.hostUser && getDivingById.hostUser.nickName) ? getDivingById.hostUser.nickName : '' }}</h5>
                        <p class="mb-0 font-13 color-gray ellipsis">{{ getDivingById.hostUser ? getDiverLevel(getDivingById.hostUser.freeLicenseLevel, getDivingById.hostUser.scubaLicenseLevel) : '' }}</p>
                    </div>
                </div>
                <div class="p-0 text-end" style="width: 104px;flex: 0 0 auto;">
                    <div>
                        <div class="inline-block text-start" style="width: 60px;">
                            <div class="font-10 color-gray mt-n1" id="maner_deep">매너수심</div>
                            <div class="font-noto font-600 mt-n2" style="color:#cd5b3c;">18m</div>
                        </div>
                        <img class="inline-block me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/heart.png" width="30" style="vertical-align: top;"/>
                    </div>
                    <div>
                        <div class="progress rounded-l wedive-deep" style="height:4px;width:96px;float: right;margin-right:6px;">
                            <div class="progress-bar bg-heart ps-3 color-white" 
                                role="progressbar" style="width: 18%" 
                                aria-valuenow="10" aria-valuemin="0" 
                                aria-valuemax="100">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="getDivingById.status == 'divingComplete'" class="content mt-4 pt-2 pb-2 font-noto font-14 text-center" style="color:#cd5b3c;border: 2px solid #cd5b3c;">
                종료된 다이빙 이벤트 입니다.
            </div>
            <div class="content mt-4 pb-3 border-bottom" style="position:relative;">
                <h2 class="font-18 font-700 mb-0">{{ getDivingById.title }}</h2>
                <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ getDivingById.location }}</p>
                <p class="color-gray-dark mb-0 font-12">{{ timeForToday(getDivingById.createdAt) }} 모집시작</p>
                <p class="color-gray mt-4 mb-4 font-14" v-html="getDivingById.description ? getDivingById.description.replace(/\n\n/gi,'\n').replace(/\n/gi,'<br/>') : ''"></p>
                
                <div class="evaluation">
                    <div class="row mb-0 line-height-l">
                        <div class="col-3 text-center color-gray">시작일시</div>
                        <div class="col-9">{{ weDiveDateFormat(new Date(getDivingById.startedAt), true) }}</div>
                        <div v-if="showFinishedAt == false" class="col-3 text-center color-gray">종료일시</div>
                        <div v-if="showFinishedAt == false" class="col-9">{{ weDiveDateFormat(new Date(getDivingById.finishedAt), false) }}</div>
                        <div class="col-3 text-center color-gray">선호사항</div>
                        <div class="col-9">{{ (getDivingById.interests && getDivingById.interests.length > 0) ? getDivingById.interests.map((x)=>{return x.title}).join().replace(/,/gi,', ') : '없음' }}</div>
                        <div class="col-3 text-center color-gray">모집인원</div>
                        <div class="col-9">{{ getDivingById.maxPeopleNumber ? getDivingById.maxPeopleNumber == 99 ? '제한 없음' : (getDivingById.maxPeopleNumber-getDivingById.participants.length-1) + '명' : '' }}</div>
                    </div>
                </div>
                <br/>
                <p class="color-gray-dark mb-0 font-12">관심 {{ getDivingById.likes || 0 }} · 조회 {{ getDivingById.views || 0 }}</p>
            </div>
            
            <div v-if="getDivingById.participants" class="content mt-0 pb-3">
                <h2 class="font-18 font-700 mb-2">참여인원 ({{ (getDivingById.participants.filter(member=> member.status == 'joined')) ? (getDivingById.participants.filter(member=> member.status == 'joined').length+1) : '' }})</h2>
                <span v-if="getDivingById.chatRoomId != null" v-on:click="goChatRoom(getDivingById.chatRoomId)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip" style="position: unset;width: 100%;">단체 채팅방 이동</span>
                <div class="">
                    <div class="owner border-bottom pt-2 pb-2 position-relative" style="position: relative;">
                        <div v-on:click="goUserPage(getDivingById.hostUser)">
                            
                            <div class="user-img me-2">
                                <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                    <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                    <clipPath id="clipSquircle">
                                        <use xlink:href="#shapeSquircle"/>
                                    </clipPath>
                                    </defs>
                                    <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(getDivingById.hostUser && getDivingById.hostUser.profileImages && getDivingById.hostUser.profileImages.length>0 && getDivingById.hostUser.profileImages[0].thumbnailUrl) ? getDivingById.hostUser.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                                </svg>
                            </div>
                            
                            <!--<img class="inline-block circular_image" :src="(getDivingById.hostUser && getDivingById.hostUser.profileImages && getDivingById.hostUser.profileImages.length>0 && getDivingById.hostUser.profileImages[0].thumbnailUrl) ? getDivingById.hostUser.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+((getDivingById.hostUser&&getDivingById.hostUser.gender)?getDivingById.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>-->
                            <div class="inline-block font-noto ms-2" style="vertical-align: top;">
                                <h5 class="mb-0 font-500 font-15">{{ (getDivingById.hostUser!=null&&getDivingById.hostUser.nickName!=null) ? getDivingById.hostUser.nickName : ((getDivingById.hostUser.name!=null) ? getDivingById.hostUser.name : '비공개') }}</h5>
                                <p class="mb-0 font-14 color-gray">{{ getDivingById.hostUser ? getDiverLevel(getDivingById.hostUser.freeLicenseLevel, getDivingById.hostUser.scubaLicenseLevel) : '' }}</p>
                            </div>
                        </div>
                        <span id="owner_chat" v-if="getDivingById.hostUser!=null && getDivingById.hostUser.uid != uid" v-on:click="chatUser(getDivingById.hostUser)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip">채팅</span>
                    </div>
                    <div class="border-bottom pt-2 pb-2 position-relative" v-for="participant in getDivingById.participants.filter(member=> member.status == 'joined')">
                        <div v-on:click="goUserPage(participant.user)">
                            
                            <div class="user-img me-2">
                                <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                    <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                    <clipPath id="clipSquircle">
                                        <use xlink:href="#shapeSquircle"/>
                                    </clipPath>
                                    </defs>
                                    <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                                </svg>
                            </div>

                            <!--<img class="inline-block circular_image" :src="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>-->
                            <div class="inline-block font-noto ms-2" style="vertical-align: top;">
                                <h5 class="mb-0 font-500 font-15">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : participant.gender!=null ? '비공개 (' + (participant.gender == 'm' ? '남' : '여') + ')' : '비공개') }}</h5>
                                <p v-if ="participant && participant.user == null" class="mb-0 font-14 color-gray ellipsis opacity-50" style="max-width: calc(100vw - 170px);">라이센스 정보 없음</p>
                                <p v-else class="mb-0 font-14 color-gray ellipsis" style="max-width: calc(100vw - 170px);">{{ participant ? getDiverLevel(participant.freeLicenseLevel, participant.scubaLicenseLevel) : '' }}</p>
                            </div>
                        </div>
                        <span v-if="participant.user!=null" v-on:click="chatUser(participant.user)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip">채팅</span>
                    </div>
                </div>
            </div>


            <div v-if="getDivingById.hostUser && getDivingById.hostUser._id == userId && getDivingById.participants && (getDivingById.participants.filter(member=> member.status == 'applied')) " class="content mt-0 pb-3">
                <h2 class="font-18 font-700 mb-3">신청인원 ({{ (getDivingById.participants.filter(member=> member.status == 'applied').length) }})</h2>
                
                <div v-if="getDivingById.participants.filter(member=> member.status == 'applied').length > 0" class="mb-1">
                    <div class="p-0" v-for="participant in getDivingById.participants.filter(member=> member.status == 'applied')">
                        <div class="border-bottom pt-2 pb-2 position-relative">
                            <div v-on:click="goUserPage(participant.user)">

                                <div class="user-img me-2">
                                    <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                        <defs>
                                        <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                        <clipPath id="clipSquircle">
                                            <use xlink:href="#shapeSquircle"/>
                                        </clipPath>
                                        </defs>
                                        <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                                    </svg>
                                </div>
                                
                                <!--<img class="inline-block circular_image" :src="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>-->
                                <div class="inline-block font-noto ms-2" style="vertical-align: top;">
                                    <h5 class="mb-0 font-500 font-15">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : participant.gender!=null ? '비공개 (' + (participant.gender == 'm' ? '남' : '여') + ')' : '비공개') }}</h5>
                                    <p class="mb-0 font-13 color-gray ellipsis" style="max-width: calc(100vw - 220px);">{{ participant ? getDiverLevel(participant.freeLicenseLevel, participant.scubaLicenseLevel) : '' }}</p>
                                </div>
                            </div>
                            <span v-if="participant.user!=null" v-on:click="chatUser(participant.user)" data-menu="menu-dm" class="chip chip-s bg-gray-light text-center font-400 wedive-chip">채팅</span>
                            <span data-menu="menu-approval" v-on:click="setUser(participant)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip2">승인</span>
                            <!--<p class="color-gray-dark mb-0 font-14">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : '비공개') }}</p>-->
                        </div>
                        <!--<a data-menu="menu-approval" v-on:click="setUser(participant)" class="btn btn-sm rounded-1 text-uppercase font-900 shadow-s bg-black" style="padding: 4px 6px !important;">승인</a>-->
                    </div>
                </div>
                <div v-else class="text-center">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_mailbox.jpg" width="60%" />
                    <p class="color-gray mb-4">신청인원이 아직 없어요.</p>
                </div>
            </div>

            <div class="content mt-0 pb-3 border-bottom">
                <h2 class="font-18 font-700 mb-2">다이빙 장소</h2>
                
                <div v-for="location in locationData" class="evaluation" style="min-height: 115px;" v-on:click="goDetail(location.type, location.uniqueName)">
                    
                    <div class="thumb-img me-2">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(location.backgroundImages && location.backgroundImages.length > 0) ? location.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                        </svg>
                    </div>
                    <div style="display:inline-block;vertical-align: top;width: calc(100vw - 156px);">
                        <h2 class="font-16 mb-1 font-600">{{ location.name }}</h2>
                        <p class="color-gray mb-1 line-height-s ellipsis" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space: unset;">{{ location.description }}</p>
                        <p class="pb-0 mb-0"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                            <span> {{ (location.adminScore/20).toFixed(1) }} </span>
                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                            <span v-if="location.institutionTypes && location.institutionTypes.length > 0"><span v-for="(insti,index) in location.institutionTypes" v-if="index < 4"><img class="ext-img" :src="'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+insti.toLowerCase()+'.svg'" height="17" style="padding-bottom: 1px;" /><span v-if="index != (location.institutionTypes.length-1)">&nbsp;&nbsp;</span></span>&nbsp;<font class="color-gray-light">|</font>&nbsp;</span>
                            <span v-if="interest.type=='priceIndex'" v-for="interest in location.interests" class="color-gray">{{interest.title.replace(/\$/gi, '₩')}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div :class="'content mt-0 pb-3 border-bottom' + ((getDivingById.status=='publicEnded' || getDivingById.status=='divingComplete' || getDivingById.hostUser && getDivingById.hostUser._id == userId)? ' opacity-40' : '')" >
                <a data-menu="menu-report"><h2 class="font-15 font-700 mb-1">이 게시글 신고하기</h2></a>
            </div>


        </div>
        
        <div v-if="getDivingById.hostUser && getDivingById.hostUser._id != userId" id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div v-on:click="clickLike()" :class="'me-1 speach-icon' + ((idToken == null || nickName == null || getDivingById.status == 'publicEnded'|| getDivingById.status=='divingComplete') ? ' opacity-40' : '')">
                <div style="width: 52px;height: 52px;display: inline-block;position: relative;border-right:1px solid rgba(0, 0, 0, 0.08);">
                    <img class="'inline-block me-2" :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+like_img+'.png'" width="30" style="display: block;margin-top:10px;margin-left:10px;"/>
                </div>
            </div>
            <div class="flex-fill speach-input p-2">
            <a v-if="getDivingById.status == 'publicEnded'|| getDivingById.status=='divingComplete'" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">모집종료된 이벤트</a>
            <a v-else-if="idToken == null || nickName == null || nickName == 'null'" v-on:click="login()" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여신청</a>
            <a v-else-if="(getDivingById.participants.filter(member=> (member.user && member.user._id == userId && member.status == 'applied'))).length > 0" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여 승인 대기중</a>
            <a v-else-if="(getDivingById.participants.filter(member=> (member.user && member.user._id == userId && member.status == 'joined'))).length > 0" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여 완료</a>
            <a v-else-if="getDivingById.naver_cafe_url != null" :href="getDivingById.naver_cafe_url" target="_blank" class="btn btn-full font-400 rounded-s shadow-l color-white bd-w-0mb-5 font-noto" style="background-color: #21a238;">참여신청</a>
            <a v-else href="#" data-menu="menu-join" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5 font-noto">참여신청</a>
            </div>
        </div>
        <div v-else-if="getDivingById.hostUser && getDivingById.hostUser._id == userId" id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div class="me-1 speach-icon opacity-40">
                <div style="width: 52px;height: 52px;display: inline-block;position: relative;border-right:1px solid rgba(0, 0, 0, 0.08);">
                    <img class="'inline-block me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/ico_heart.png" width="30" style="display: block;margin-top:10px;margin-left:10px;"/>
                </div>
            </div>
            <div class="flex-fill speach-input p-2">
            <a v-if="getDivingById.status == 'publicEnded'|| getDivingById.status=='divingComplete'" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">모집종료</a>
            <div v-else class="row" style="padding-right: 16px;">
                <a v-on:click="modifyDiving()" class="btn btn-full col-6 font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto me-2" style="width: calc(50% - 4px);"><i class="fas fa-pen fa-fw"></i> 수정</a>
                <a data-menu="menu-finish" class="btn btn-full col-6 font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 font-noto" style="width: calc(50% - 4px);"><i class="fas fa-flag fa-fw"></i> 모집종료</a>
            </div>
            
            </div>
        </div>

    </div>


    <!-- End of Page Content--> 
    
    <!-- 신청하기 팝업 -->
    <div id="menu-approval" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ requester.name }}님을 승인 하시겠습니까?</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">승인 시, 자동으로 채팅방에 초대됩니다.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a v-on:click="approve()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">승인</a>
            </div>
            <!--<div class="col-4 pe-1 ps-1">
                <a v-on:click="reject()" href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-dark">거절</a>
            </div>-->
            <div class="col-6 ps-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">닫기</a>
            </div>
        </div>
    </div>
    <!-- 모집종료 팝업 -->
    <div id="menu-finish" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">모집을 종료 하시겠습니까?</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">현재 참여자 만으로 다이빙을 진행합니다.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="completeDiving()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">모집종료</a>
            </div>
        </div>
    </div>
    <!-- 신청하기 팝업 -->
    <div id="menu-join" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">신청 하시겠습니까?</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">개설자가 수락하는 경우, 알림으로 안내드릴께요.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="joinDiving()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">신청하기</a>
            </div>
        </div>
    </div>
    <!-- 신청완료 팝업 -->
    <div id="menu-join-requested" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">신청 완료</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">신청이 완료되었어요.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-12 pe-3 ps-3">
                <a class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">확인</a>
            </div>
        </div>
    </div>
    <!-- 신청완료 팝업 -->
    <div id="menu-complete" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">완료</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p v-if="request_result=='모집종료'" class="mb-4 text-center font-noto">버디 모집이 종료되었습니다.</p>
            <p v-else class="mb-4 text-center font-noto">{{ requester.name }}님을 {{ request_result }}하였습니다.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-12 pe-3 ps-3">
                <a class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">확인</a>
            </div>
        </div>
    </div>
    <!-- 평가하기 팝업 -->
    <div id="menu-rating" 
         class="menu menu-box-modal" 
         data-menu-height="590" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ getDivingById.location }}<br/><p style="margin: 0px !important;font-weight: 200 !important;font-size:13px;">{{ getDivingById.title }}</p></h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3 border-bottom">
            <p class="mb-0 text-center font-noto">즐거운 다이빙 되셨나요?</p>
            <div class="text-center mt-3">
                <star-rating @rating-selected="setRating" text-class="hide" :rating="3" v-bind:star-size="30" :padding="5" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="display: inline-block;"></star-rating>
            </div>
            <div class="text-center color-gray mt-1 mb-2" v-html="rateDescription"></div>
        </div>
        <div class="content mt-0">
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                호스트는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb1" id="thumb1_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb1_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb1" id="thumb1_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb1_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                함께한 참여자는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb2" id="thumb2_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb2_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb2" id="thumb2_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb2_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                방문한 장소는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb3" id="thumb3_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb3_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb3" id="thumb3_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb3_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="input-style validate-field mt-3">
                <textarea class="wedive-textarea" placeholder="의견을 자유롭게 적어주세요." v-model="review_detail"></textarea>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">나중에 평가하기</a>
            </div>
            <div class="col-6 ps-1">
                <a href="#" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">평가완료</a>
            </div>
        </div>
    </div>

    <!-- DM 팝업 -->
    <div id="menu-dm" 
         class="menu menu-box-modal" 
         data-menu-height="300" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">메시지 전송 ({{ message_receiver_nickname }}님)</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <textarea class="wedive-textarea" placeholder="메시지를 입력하세요." v-model="dm_text"></textarea>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="sendDirectMessage()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">메시지 전송</a>
            </div>
        </div>
    </div>

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
              <div v-for="(report,index) in $root.$children[0].report_items" class="form-check icon-check mb-3">
                  <input class="form-check-input" type="radio" :value="index" :id="'radio_report'+index" name="radioReport" v-on:click="clickReportRadio('radio_report' + index)">
                  <label class="form-check-label font-noto font-18 font-500 opacity-30" :for="'radio_report'+index">{{ report }}</label>
                  <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                  <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
              </div>
          </div>
          <div style="position: absolute;bottom: 0;width:100%;">
              <a v-on:click="makeReport()" id="btn_report" disabled="disabled" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;">신고하기</a>
          </div>
    </div>

    
    <div id="snackbar-join-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>에러가 발생하여 신청이 불가합니다.</div>
    <div id="snackbar-request-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>에러가 발생하여 {{ request_result }}이 되지 않았습니다.</div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
import gql from 'graphql-tag'
const axios = require("axios");

var tour_list = [{"type": "id", "name": "owner_chat", "position": "left", "title": "궁금한점을 물어보세요."}, {"type": "id", "name": "maner_deep", "position": "top", "title": "개설자의 매너로, 18m에서 시작해요."}];

function myCallback()
{
    var random_idx = Math.floor(Math.random() * (tour_list.length * 3));
    if (random_idx < tour_list.length && $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).hasClass('hide') == false) {
        $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).tooltip({
            delay: 7000,
            placement: tour_list[random_idx].position,
            title: tour_list[random_idx].title,
            html: true
        });
        $(((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name).tooltip('show');
        setTimeout(function(selector) {
            $(selector).tooltip('hide');
        },7000, (((tour_list[random_idx].type == 'class') ? '.' : '#') + tour_list[random_idx].name))
    }
}

export default {
  name: 'HelloWorld',
  async mounted() {
    var intervalID = setInterval(myCallback, 7000);

    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    $("body").css("background-color", "white");
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    $("#footer-bar").hide();
  },
  created() {
      setTimeout(function() {
        
    }, 500);
  },
  components: {
    StarRating
  },
  apollo: {
      getDivingById: {
          query:gql `
            query GetDivingById($id: ID!) {
                getDivingById(_id: $id) {
                    _id
                    title
                    description
                    status
                    type
                    chatRoomId
                    hostUser {
                        _id
                        uid
                        nickName
                        scubaLicenseLevel
                        freeLicenseLevel
                        profileImages {
                            thumbnailUrl
                        }
                        birthAge
                        gender
                    }
                    diveSites {
                        _id
                        adminScore
                        backgroundImages {
                            _id
                            reference
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        latitude
                        longitude
                        interests {
                            title
                            type
                        }
                    }
                    divePoints {
                        _id
                        adminScore
                        backgroundImages {
                            _id
                            reference
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        latitude
                        longitude
                        interests {
                            title
                            type
                        }
                    }
                    diveCenters {
                        _id
                        adminScore
                        backgroundImages {
                            _id
                            reference
                            thumbnailUrl
                        }
                        name
                        uniqueName
                        description
                        latitude
                        longitude
                        institutionTypes
                        interests {
                            title
                            type
                        }
                    }
                    participants {
                        user {
                            _id
                            uid
                            nickName
                            profileImages {
                                thumbnailUrl
                            }
                            scubaLicenseLevel
                            freeLicenseLevel
                        }
                        status
                        name
                        birth
                        gender
                    }
                    interests {
                        title
                        type
                        _id
                    }
                    maxPeopleNumber
                    likes
                    views
                    startedAt
                    finishedAt
                    createdAt
                    isUserSubscribe
                    isUserLike
                }
            }
          `,
          variables() {
              return {
                  id: this.uniqueName
              }
          },
          result() {
            setTimeout(function() {
                init_template();
                var preloader = document.getElementById('preloader')
                if(preloader){preloader.classList.add('preloader-hide');}
            },500);

            // 임시 //
            if (this.getDivingById.description.includes("https://cafe.naver.com")) {
                var url = this.getDivingById.description.substring(this.getDivingById.description.indexOf("https://cafe.naver.com"), this.getDivingById.description.length);
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
                this.getDivingById.description = this.getDivingById.description.replace(url, '');
                this.getDivingById.naver_cafe_url = url;
            }
            //console.log(this.getDivingById.description);
            


            
            this.getDivingById.location = '';
            if (this.getDivingById.diveSites && this.getDivingById.diveSites.length > 0) {
                this.getDivingById.diveSites.forEach(x => {
                    if (this.locationData.forEach(y => y._id == x._id) == null) {
                        x.type = 'site';
                        this.locationData.push(x);
                        this.getDivingById.location += (this.getDivingById.location != '' ? ', ' : '') + x.name + "";
                    }
                });
                
                
            }
            if (this.getDivingById.divePoints && this.getDivingById.divePoints.length > 0) {
                this.getDivingById.divePoints.forEach(x => {
                    if (this.locationData.forEach(y => y._id == x._id) == null) {
                        x.type = 'point';
                        this.locationData.push(x);
                        this.getDivingById.location += (this.getDivingById.location != '' ? ', ' : '') + x.name + "";
                    }
                });
                //this.getDivingById.location = this.getDivingById.divePoints[0].name + "";
            } 
            if (this.getDivingById.diveCenters && this.getDivingById.diveCenters.length > 0) {
                this.getDivingById.diveCenters.forEach(x => {
                    if (this.locationData.forEach(y => y._id == x._id) == null) {
                        x.type = 'center';
                        this.locationData.push(x);
                        this.getDivingById.location += (this.getDivingById.location != '' ? ', ' : '') + x.name + "";
                    }
                });
                //this.getDivingById.location = this.getDivingById.diveCenters[0].name;
            }
            if (this.getDivingById.diveShops && this.getDivingById.diveShops.length > 0) {
                this.getDivingById.diveShops.forEach(x => {
                    if (this.locationData.forEach(y => y._id == x._id) == null) {
                        x.type = 'shop';
                        this.locationData.push(x);
                        this.getDivingById.location += (this.getDivingById.location != '' ? ', ' : '') + x.name + "";
                    }
                });
                //this.getDivingById.location = this.getDivingById.diveCenters[0].name;
            }
            

            {
                var id_arr = new Array();
                var width_arr = new Array();
                this.locationData[0].backgroundImages.forEach(x => {
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
                            this.locationData[0].backgroundImages.forEach(x => {
                                x.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                                i++;
                            });
                        }
                        setTimeout(function() {
                            $("#cover-slider-temp").animate({opacity: "0"}, 1200);
                            $('[data-toggle="tooltip"]').tooltip();
                        },500);
                        setTimeout(function() {
                            $("#cover-slider-temp").css("display", "none");
                        },2000);
                    });
                }
            }
          }
      }
  },
  data () {
    return {
        uniqueName: this.$route.params.id,
        map: null,
        getDivingById: {},
        locationData: [],
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        review_detail: '',
        showFinishedAt: false,
        gender: localStorage.userGender,
        userThumbnail: localStorage.userThumbnail,
        is_empty: false,
        userId: localStorage.userId,
        like_img: 'ico_heart',
        subscribe_img: 'icon_subscribe',
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        requester: '',
        request_result: '',
        dm_text: '',
        message_receiver_nickname: '',
        uid: localStorage.uid,
    }
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
        var sel_index = $(':radio[name="radioReport"]:checked').val();
        const sel_reason = this.$root.$children[0].report_items[sel_index];

        this.$apollo.mutate({
            // Query
            mutation: gql`mutation Mutation($targetId: ID!, $reason: String!) {
                report(targetId: $targetId, reason: $reason) {
                    success
                }
            }`,
            // Parameters
            variables: {
                targetId: this.getDivingById._id,
                reason: sel_reason
            },
        }).then((data) => {
            // Result
            console.log(data)
            document.getElementById("menu-report").classList.remove('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
            //}
        }).catch((error) => {
            // Error)
            console.error(error)
            // We restore the initial user input
        })
      },
      modifyDiving() {
          this.$router.push({name: "BuddyCreateAllPage", params: this.getDivingById});
      },
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      goChatRoom(chatRoomId) {
          location.href = '/chat/' + chatRoomId;
      },
      reload() {
          //location.reload();
      },
      setUser(participant) {
          //console.log(participant);
          this.requester = participant;
      },
      getDiverLevel(freeLicenseLevel, scubaLicenseLevel) {
        var levelShow = '초보';
        var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
        var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];

        var my_s_lvl = parseInt((scubaLicenseLevel)?scubaLicenseLevel:"0");
        var my_f_lvl = parseInt((freeLicenseLevel)?freeLicenseLevel:"0")
        if (my_s_lvl > my_f_lvl) {
            levelShow = (my_s_lvl>0) ? "스쿠바 " + scuba_level[my_s_lvl] : levelShow;
        } else {
            levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] : levelShow;
        }
        levelShow += " 다이버";
        if(my_s_lvl>5) levelShow = scuba_level[my_s_lvl];
        
        return levelShow;
      },
      async completeDiving() {
          const _id = this.getDivingById._id;
          const host_user = this.getDivingById.hostUser._id;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Mutation($input: DivingInput) {
                        upsertDiving(input: $input) {
                            _id
                        }
                    }
                `,
                variables: {
                    "input": {
                        "status": "publicEnded",
                        "_id": _id,
                        "hostUser": host_user
                    }
                }
            }
          });
          this.request_result = "모집종료";
          if (result.data && result.data.data && result.data.data.upsertDiving) {
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
              // jjangs close menu
              if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
              }

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                // jjangs : open menu
                if(window.location.href.split('/').pop() != 'modal'){
                    window.history.pushState({}, 'modal', window.location.pathname + '/modal');
                }
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async approve() {
          const diving_id = this.getDivingById._id;
          const user_id = this.requester.user._id;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Mutation($divingId: ID!, $userId: ID!) {
                        acceptParticipant(divingId: $divingId, userId: $userId) {
                            success
                        }
                    }
                `,
                variables: {
                    "userId": user_id,
                    "divingId": diving_id
                }
            }
          });
          
          this.request_result = "승인";
          if (result.data && result.data.data && result.data.data.acceptParticipant) {
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
              // jjangs close menu
              if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
              }

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                // jjangs : open menu
                if(window.location.href.split('/').pop() != 'modal'){
                    window.history.pushState({}, 'modal', window.location.pathname + '/modal');
                }
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async reject() {
          this.getDivingById.participants.forEach(participant => {
              if (participant.user._id == this.requester.user._id) {
                participant.status = 'banned';
              }
          });
          var _partis = JSON.parse(JSON.stringify(this.getDivingById.participants));
          _partis.forEach(_parti => {
              if (_parti.user != null && _parti.user._id) {
                  delete _parti.levelShow;
                  var _id = _parti.user._id;
                  _parti.user = _id;
              }
          });
          const partis = _partis;
          
          const _id = this.getDivingById._id;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Mutation($input: DivingInput) {
                        upsertDiving(input: $input) {
                            _id
                        }
                    }
                `,
                variables: {
                    "input": {
                        "participants": partis,
                        "_id": _id
                    }
                }
            }
          });
          
          this.request_result = "거절";
          if (result.data && result.data.data && result.data.data.upsertDiving) {
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
              // jjangs close menu
              if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
              }

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                // jjangs : open menu
                if(window.location.href.split('/').pop() != 'modal'){
                    window.history.pushState({}, 'modal', window.location.pathname + '/modal');
                }
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async joinDiving() {
          const divingId = this.getDivingById._id;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                mutation Mutation($divingId: ID!) {
                    joinDiving(divingId: $divingId) {
                        success
                        reason
                    }
                }
                `,
                variables: {
                    divingId: divingId
                }

            }
          });
        
          var ret = (result.data && result.data.data && result.data.data.joinDiving) ? result.data.data.joinDiving : null;
          
          if (ret != null) {
              //Close Existing Opened Menus
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
              // jjangs close menu
              if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
              }

              setTimeout(function() {
                var menuData = 'menu-join-requested';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
                // jjangs : open menu
                if(window.location.href.split('/').pop() != 'modal'){
                    window.history.pushState({}, 'modal', window.location.pathname + '/modal');
                }
              },500);
              
          } else {
              var toastData = 'snackbar-join-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();

              //Close Existing Opened Menus
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
              // jjangs close menu
              if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
              }
          }
      },
      showReivewModal() {
          //Close Existing Opened Menus
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          // jjangs close menu
          if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
          }
          
          //var menuData = 'menu-join';
          var menuData = 'menu-rating';
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          // jjangs : open menu
          if(window.location.href.split('/').pop() != 'modal'){
            window.history.pushState({}, 'modal', window.location.pathname + '/modal');
          }
      },
      weDiveDateFormat(date, showTime) {
          var _date = null
          if (typeof(date) != 'object') {
              _date = new Date(date);
          } else {
              _date = date;
          }

          if (showTime) {
              return _date.getFullYear() + "년 " + (_date.getMonth()+1) + "월 " + _date.getDate() + "일 " + _date.getHours() + "시 " + _date.getMinutes() + "분";
          } else {
              return _date.getFullYear() + "년 " + (_date.getMonth()+1) + "월 " + _date.getDate() + "일";
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
      setRating(rating) {
          //this.rating = rating;
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
      goUserPage(user) {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null') {
              if (user && user._id) {
                  location.href = '/user/' + user._id;
              }
          } else if (user != null) {
              this.login();
          }
      },
      goDetail(type, uniqueName) {
          location.href = '/'+type + '/' + uniqueName;
      },
      async clickLike() {
          if (localStorage.idToken && localStorage.nickName != null && localStorage.nickName != 'null' && this.getDivingById.status != 'publicEnded') {
            const targetId = this.getDivingById._id;
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
                        "targetType": "diving"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.like == true) {
                this.like_img = 'ico_heart2';
                this.getDivingById.likes = ((this.getDivingById.likes==null)?0:this.getDivingById.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.getDivingById.likes = this.getDivingById.likes-1;
            }
          } else {
              this.login();
          }
      },
      login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          this.$root.$children[0].$refs.nicknameBottomSheet.open();
        }
      },
      async chatUser(user) {
          //this.message_receiver_nickname = user.nickName
          //data-menu="menu-dm" 
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
            
            // 개설된 채팅이 있는지 확인한다.
            var go_flag = false;
            result.data.data.getJoinedRoomList.forEach(room => {
                if (room.type == 'direct' && room.chatUsers.filter(u=>u._id == user.uid).length > 0) {
                    go_flag = true;
                    location.href = '/chat/' + room._id;
                }
            })
            if (go_flag == false) {
                // 없는경우, 더미로 하나 만든다.
                //localStorage.chatType = 'direct';
                //var chatUids = new Array();
                //chatUids.push(user.uid);
                //localStorage.chatUids = JSON.stringify(chatUids);
                //localStorage.chatName = user.nickName;
                //location.href = '/chat/create'

                this.$router.push({name: "ChatDummyPage", params: {is_concierge: false, roomName: user.nickName, chatType: "direct", chatUids: JSON.stringify([user.uid])}});
            }
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline-block {display: inline-block !important;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 150px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;width:100%;}
.owner:after {content: '';position: absolute;bottom: 6px;left: 34px;width: 22px;height: 22px;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/crown_s.png);background-repeat: no-repeat;background-size: contain;}
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 2px 12px;margin:0 !important;position:absolute;right:10px;bottom:20px;color:black !important;}
.wedive-chip2 {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 2px 12px;margin:0 !important;position:absolute;right:64px;bottom:20px;color:black !important;}
.position-relative {position: relative;}
.background-center {background-position: center !important;background-size: cover !important;}
.thumb-img {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
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
  display: inline-block;
  width: 45px;
  height: 45px;
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
</style>
