<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">{{ divingData.title }}</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="header-icon header-icon-4"><img src="/static/images/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="/static/images/assets/empty_list2.jpg" width="60%" style="margin-top:25%;"/>
            <p class="font-noto color-gray">앗! 찾을 수 없는 버디찾기 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>
    <div :class="'page-content' + (!is_empty ? '' : ' hide')" style="margin-top:50px;">

        <div v-if="locationData[0] == null || locationData[0].backgroundImages == null || locationData[0].backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain;height:250px;">
        </div>
        <div v-else style="min-height:250px;height:250px;max-height:250px;">
            <div class="splide single-slider cover-slider slider-no-arrows slider-no-dots" id="cover-slider-1" data-card-height="250" style="position:relative;">
                <div class="splide__track">
                    <div class="splide__list">
                        <div class="splide__slide" v-if="locationData[0].backgroundImages == null || locationData[0].backgroundImages.length == 0">
                            <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;">
                                
                            </div>
                        </div>
                        <div class="splide__slide" v-for="(image, index) in locationData[0].backgroundImages">
                            <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;'">
                                <div class="wedive-source">{{ image.reference | makeReference }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="cover-slider-temp" :style="'background:url('+locationData[0].backgroundImages[0].url+');background-size: cover;height:250px;background-position: center;position:absolute;width:100%;top:0px;'">
            </div>
        </div>


        <!--<div v-if="locationData[0] && locationData[0].backgroundImages == null || locationData[0] && locationData[0].backgroundImages.length > 0" :style="'background:url('+locationData[0].backgroundImages[0].thumbnailUrl+');background-size: cover;height:250px;margin-top:50px;'">
        </div>
        <div v-else-if="locationData[0]" style="background:url(/static/empty.jpg);background-size: cover;height:250px;background-position: bottom !important;margin-top:50px;">
        </div>-->
        
        
        
        
        
        
        <!--<div class="splide single-slider cover-slider slider-no-arrows" id="cover-slider-1" data-card-height="250">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide" v-if="locationData.backgroundImages == null || locationData.backgroundImages.length == 0">
                        <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;">
                            
                        </div>
                    </div>
                    <div class="splide__slide" v-for="(image, index) in locationData.backgroundImages">
                        <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;'">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        

    
        <div class="card mb-0" style="z-index:1;">
            <div class="content mt-3 row pb-3 mb-0 border-bottom" v-on:click="goUserPage(divingData.hostUser)">
                <div class="col-6 p-0">
                    <img class="inline-block me-2 circular_image" :src="(divingData.hostUser && divingData.hostUser.profileImages && divingData.hostUser.profileImages.length>0 && divingData.hostUser.profileImages[0].thumbnailUrl) ? divingData.hostUser.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+((divingData.hostUser&&divingData.hostUser.gender)?divingData.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>
                    <div class="inline-block font-noto">
                        <h5 class="mb-0 font-500 font-15">{{ (divingData.hostUser && divingData.hostUser.nickName) ? divingData.hostUser.nickName : '' }}</h5>
                        <p class="mb-0 font-13 color-gray">{{ (divingData.hostUser && divingData.hostUser.levelShow) ? divingData.hostUser.levelShow : '' }}</p>
                    </div>
                </div>
                <div class="col-6 p-0 text-end">
                    <div>
                        <div class="inline-block text-start" style="width: 60px;">
                            <div class="font-10 color-gray mt-n1" id="maner_deep">매너수심</div>
                            <div class="font-noto font-600 mt-n2" style="color:#cd5b3c;">18m</div>
                        </div>
                        <img class="inline-block me-2" src="/static/images/assets/heart.png" width="30" style="vertical-align: top;"/>
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
            <div v-if="divingData.status == 'divingComplete'" class="content mt-4 pt-2 pb-2 font-noto font-14 text-center" style="color:#cd5b3c;border: 2px solid #cd5b3c;">
                종료된 다이빙 이벤트 입니다.
            </div>
            <div class="content mt-4 pb-3 border-bottom" style="position:relative;">
                <h2 class="font-18 font-700 mb-0">{{ divingData.title }}</h2>
                <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ divingData.location }}</p>
                <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">{{ timeForToday(divingData.createdAt) }} 모집시작</p>
                <p class="color-gray mt-4 mb-4 font-14" v-html="divingData.description"></p>
                
                <div class="evaluation">
                    <div class="row mb-0 line-height-l">
                        <div class="col-3 text-center color-gray">시작일시</div>
                        <div class="col-9">{{ weDiveDateFormat(new Date(divingData.startedAt), true) }}</div>
                        <div v-if="showFinishedAt == false" class="col-3 text-center color-gray">종료일시</div>
                        <div v-if="showFinishedAt == false" class="col-9">{{ weDiveDateFormat(new Date(divingData.finishedAt), false) }}</div>
                        <div class="col-3 text-center color-gray">선호사항</div>
                        <div class="col-9">{{ (divingData.interests && divingData.interests.length > 0) ? divingData.interests.map((x)=>{return x.title}).join().replace(/,/gi,', ') : '없음' }}</div>
                        <div class="col-3 text-center color-gray">모집인원</div>
                        <div class="col-9">{{ (divingData.maxPeopleNumber) ? (divingData.maxPeopleNumber-divingData.participants.length-1) : '' }}명</div>
                    </div>
                </div>
                <br/>
                <p class="color-gray-dark mb-0 font-12">관심 {{ divingData.likes || 0 }} · 조회 {{ divingData.views || 0 }}</p>
            </div>
            
            <div v-if="divingData.participants" class="content mt-0 pb-3">
                <h2 class="font-18 font-700 mb-2">참여인원 ({{ (divingData.participants.filter(member=> member.status == 'joined')) ? (divingData.participants.filter(member=> member.status == 'joined').length+1) : '' }})</h2>
                <span v-if="divingData.chatRoomId != null" v-on:click="goChatRoom(divingData.chatRoomId)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip" style="position: unset;width: 100%;">단체 채팅방 이동</span>
                <div class="">
                    <div class="owner border-bottom pt-2 pb-2 position-relative" style="position: relative;">
                        <div v-on:click="goUserPage(divingData.hostUser)">
                            <img class="inline-block circular_image" :src="(divingData.hostUser && divingData.hostUser.profileImages && divingData.hostUser.profileImages.length>0 && divingData.hostUser.profileImages[0].thumbnailUrl) ? divingData.hostUser.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+((divingData.hostUser&&divingData.hostUser.gender)?divingData.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>
                            <div class="inline-block font-noto ms-3">
                                <h5 class="mb-0 font-500 font-15">{{ (divingData.hostUser!=null&&divingData.hostUser.nickName!=null) ? divingData.hostUser.nickName : ((divingData.hostUser.name!=null) ? divingData.hostUser.name : '비공개') }}</h5>
                                <p class="mb-0 font-14 color-gray">{{ (divingData.hostUser && divingData.hostUser.levelShow) ? divingData.hostUser.levelShow : '' }}</p>
                            </div>
                        </div>
                        <span id="owner_chat" v-if="divingData.hostUser!=null && divingData.hostUser.uid != uid" v-on:click="chatUser(divingData.hostUser)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip">채팅</span>
                    </div>
                    <div class="border-bottom pt-2 pb-2 position-relative" v-for="participant in divingData.participants.filter(member=> member.status == 'joined')">
                        <div v-on:click="goUserPage(participant.user)">
                            <img class="inline-block circular_image" :src="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>
                            <div class="inline-block font-noto ms-3">
                                <h5 class="mb-0 font-500 font-15">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : '비공개') }}</h5>
                                <p class="mb-0 font-14 color-gray">{{ (participant.levelShow) ? participant.levelShow : '' }}</p>
                            </div>
                        </div>
                        <span v-if="participant.user!=null" v-on:click="chatUser(participant.user)" class="chip chip-s bg-gray-light text-center font-400 wedive-chip">채팅</span>
                    </div>
                </div>
            </div>


            <div v-if="divingData.hostUser && divingData.hostUser._id == userId && divingData.participants && (divingData.participants.filter(member=> member.status == 'applied')) " class="content mt-0 pb-3">
                <h2 class="font-18 font-700 mb-3">신청인원 ({{ (divingData.participants.filter(member=> member.status == 'applied').length) }})</h2>
                
                <div v-if="divingData.participants.filter(member=> member.status == 'applied').length > 0" class="mb-1">
                    <div class="p-0" v-for="participant in divingData.participants.filter(member=> member.status == 'applied')">
                        <div class="border-bottom pt-2 pb-2 position-relative">
                            <div v-on:click="goUserPage(participant.user)">
                                <img class="inline-block circular_image" :src="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>
                                <div class="inline-block font-noto ms-3">
                                    <h5 class="mb-0 font-500 font-15">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : '비공개') }}</h5>
                                    <p class="mb-0 font-13 color-gray">{{ (participant.levelShow) ? participant.levelShow : '' }}</p>
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
                    <img src="/static/images/assets/empty_mailbox.jpg" width="60%" />
                    <p class="color-gray mb-4">신청인원이 아직 없어요.</p>
                </div>
            </div>

            <div class="content mt-0 pb-3 border-bottom">
                <h2 class="font-18 font-700 mb-2">다이빙 장소</h2>
                
                <div v-for="location in locationData" class="evaluation" style="min-height: 115px;" v-on:click="goDetail(location.type, location.uniqueName)">
                    <img :src="location.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto me-3" width="95" height="95" style="float: left;position: relative;"/>
                    <div style="padding-left:110px;">
                        <h2 class="font-16 mb-2 font-600">{{ location.name }}</h2>
                        <p class="color-gray mb-2 line-height-s ellipsis" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space: unset;">{{ location.description }}</p>
                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                            <span> {{ (location.adminScore/20).toFixed(1) }} </span>
                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                            <span v-if="location.institutionTypes && location.institutionTypes.length > 0"><span v-for="(insti,index) in location.institutionTypes" v-if="index < 4"><img class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="17" style="padding-bottom: 1px;" /><span v-if="index != (location.institutionTypes.length-1)">&nbsp;&nbsp;</span></span>&nbsp;<font class="color-gray-light">|</font>&nbsp;</span>
                            <span v-if="interest.type=='priceIndex'" v-for="interest in location.interests" class="color-gray">{{interest.title.replace(/\$/gi, '₩')}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div :class="'content mt-0 pb-3 border-bottom' + ((divingData.status=='publicEnded' || divingData.status=='divingComplete' || divingData.hostUser && divingData.hostUser._id == userId)? ' opacity-40' : '')" >
                <h2 class="font-15 font-700 mb-1">이 게시글 신고하기</h2>
            </div>


        </div>
        
        <div v-if="divingData.hostUser && divingData.hostUser._id != userId" id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div v-on:click="clickLike()" :class="'me-1 speach-icon' + ((idToken == null || nickName == null || divingData.status == 'publicEnded'|| divingData.status=='divingComplete') ? ' opacity-40' : '')">
                <div style="width: 52px;height: 52px;display: inline-block;position: relative;border-right:1px solid rgba(0, 0, 0, 0.08);">
                    <img class="'inline-block me-2" :src="'/static/images/assets/'+like_img+'.png'" width="30" style="display: block;margin-top:10px;margin-left:10px;"/>
                </div>
            </div>
            <div class="flex-fill speach-input p-2">
            <a v-if="divingData.status == 'publicEnded'|| divingData.status=='divingComplete'" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">모집종료된 이벤트</a>
            <a v-else-if="idToken == null || nickName == null" v-on:click="login()" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여신청</a>
            <a v-else-if="(divingData.participants.filter(member=> (member.user && member.user._id == userId && member.status == 'applied'))).length > 0" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여 승인 대기중</a>
            <a v-else-if="(divingData.participants.filter(member=> (member.user && member.user._id == userId && member.status == 'joined'))).length > 0" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여 완료</a>
            <a v-else href="#" data-menu="menu-join" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5 font-noto">참여신청</a>
            </div>
        </div>
        <div v-else-if="divingData.hostUser && divingData.hostUser._id == userId" id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
            <div class="me-1 speach-icon opacity-40">
                <div style="width: 52px;height: 52px;display: inline-block;position: relative;border-right:1px solid rgba(0, 0, 0, 0.08);">
                    <img class="'inline-block me-2" src="/static/images/assets/ico_heart.png" width="30" style="display: block;margin-top:10px;margin-left:10px;"/>
                </div>
            </div>
            <div class="flex-fill speach-input p-2">
            <a v-if="divingData.status == 'publicEnded'|| divingData.status=='divingComplete'" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">모집종료</a>
            <a v-else data-menu="menu-finish" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5 font-noto">모집종료</a>
            
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
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ divingData.location }}<br/><p style="margin: 0px !important;font-weight: 200 !important;font-size:13px;">{{ divingData.title }}</p></h4>
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
    
    <div id="snackbar-join-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>에러가 발생하여 신청이 불가합니다.</div>
    <div id="snackbar-request-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>에러가 발생하여 {{ request_result }}이 되지 않았습니다.</div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
const axios = require("axios")

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
                variables: {
                    id: to.params.id
                }

            }
        });

        if ((result.data && result.data.data && result.data.data.getDivingById)) {
            var diveLocations = null;
            if (result.data.data.getDivingById.diveSites != null && result.data.data.getDivingById.diveSites.length > 0) {
                diveLocations = result.data.data.getDivingById.diveSites[0];
            }
            else if (diveLocations == null && result.data.data.getDivingById.divePoints != null && result.data.data.getDivingById.divePoints.length > 0) {
                diveLocations = result.data.data.getDivingById.divePoints[0];
            }
            else if (diveLocations == null && result.data.data.getDivingById.diveCenters != null && result.data.data.getDivingById.diveCenters.length > 0) {
                diveLocations = result.data.data.getDivingById.diveCenters[0];
            }
            if (diveLocations != null) {
                var id_arr = [];
                var width_arr = [];
                for (var i=0; i<diveLocations.backgroundImages.length; i++) {
                    id_arr.push(diveLocations.backgroundImages[i]._id);
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
                            diveLocations.backgroundImages[i].url = result_image.data.data.getImageUrlsByIds[i];
                        }
                    }
                }
            }
        }

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
                        "targetType": "diving"
                    }
                }
            });
        }
        
        
        var ret = (result.data && result.data.data && result.data.data.getDivingById) ? result.data.data.getDivingById : null
        next(vm => {vm.setData(ret)});
    } else {
        location.href = "/";
    }
  },
  async mounted() {
    var intervalID = setInterval(myCallback, 7000);

    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    document.getElementById("footer-bar").classList.add("hide");
    $("body").css("background-color", "white");
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    $("#footer-bar").hide();
    

    setTimeout(function() {
        $("#cover-slider-temp").animate({opacity: "0"}, 1200);
    },1000);
    setTimeout(function() {
        $("#cover-slider-temp").css("display", "none");
    },2500);
  },
  components: {
    StarRating
  },
  data () {
    return {
        map: null,
        divingData: {},
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
      async completeDiving() {
          const _id = this.divingData._id;
          const host_user = this.divingData.hostUser._id;
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

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async approve() {
          this.divingData.participants.forEach(participant => {
              if (participant.user._id == this.requester.user._id) {
                participant.status = 'joined';
              }
          });
          var _partis = JSON.parse(JSON.stringify(this.divingData.participants));
          _partis.forEach(_parti => {
              if (_parti.user != null && _parti.user._id) {
                  delete _parti.levelShow;
                  var _id = _parti.user._id;
                  _parti.user = _id;
              }
          });
          const partis = _partis;
          
          const _id = this.divingData._id;
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
          
          this.request_result = "승인";
          if (result.data && result.data.data && result.data.data.upsertDiving) {
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async reject() {
          this.divingData.participants.forEach(participant => {
              if (participant.user._id == this.requester.user._id) {
                participant.status = 'banned';
              }
          });
          var _partis = JSON.parse(JSON.stringify(this.divingData.participants));
          _partis.forEach(_parti => {
              if (_parti.user != null && _parti.user._id) {
                  delete _parti.levelShow;
                  var _id = _parti.user._id;
                  _parti.user = _id;
              }
          });
          const partis = _partis;
          
          const _id = this.divingData._id;
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

              setTimeout(function() {
                var menuData = 'menu-complete';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
              },500);
          } else {
              var toastData = 'snackbar-request-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
          }
      },
      async joinDiving() {
          const divingId = this.divingData._id;
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

              setTimeout(function() {
                var menuData = 'menu-join-requested';
                document.getElementById(menuData).classList.add('menu-active');
                document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
              },500);
              
          } else {
              var toastData = 'snackbar-join-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();

              //Close Existing Opened Menus
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          }
      },
      showReivewModal() {
          //Close Existing Opened Menus
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          
          //var menuData = 'menu-join';
          var menuData = 'menu-rating';
          document.getElementById(menuData).classList.add('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
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
      setData(_divingData) {
          if (_divingData == null) {
            this.is_empty = true;
          } else {
            this.divingData = _divingData;
            if (_divingData.isUserLike) this.like_img = 'ico_heart2';
            if (_divingData.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
            if ((new Date(this.divingData.startedAt)) < (new Date())) this.divingData.status = 'divingComplete';
            //console.log(this.divingData)
            /// 다이버 레벨 보여주기
            this.divingData.hostUser.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
            var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
            {
                var my_s_lvl = parseInt((this.divingData.hostUser.scubaLicenseLevel)?this.divingData.hostUser.scubaLicenseLevel:"0");
                var my_f_lvl = parseInt((this.divingData.hostUser.freeLicenseLevel)?this.divingData.hostUser.freeLicenseLevel:"0")
                if (my_s_lvl > my_f_lvl) {
                    this.divingData.hostUser.levelShow = (my_s_lvl>0) ? "스쿠바 " + scuba_level[my_s_lvl] : this.divingData.hostUser.levelShow;
                } else {
                    this.divingData.hostUser.levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] : this.divingData.hostUser.levelShow;
                }
                this.divingData.hostUser.levelShow += " 다이버";
                if(my_s_lvl>5) this.divingData.hostUser.levelShow = scuba_level[my_s_lvl];
            }
            {
                this.divingData.participants.forEach(participant => {
                    participant.levelShow = '비공개';
                    if (participant.user != null) {
                        if (participant.user.scubaLicenseLevel == null && participant.user.freeLicenseLevel == null) {
                            participant.levelShow = '초보 다이버';
                        } else {
                            var my_s_lvl = parseInt((participant.user.scubaLicenseLevel)?participant.user.scubaLicenseLevel:"0");
                            var my_f_lvl = parseInt((participant.user.freeLicenseLevel)?participant.user.freeLicenseLevel:"0")
                            if (my_s_lvl > my_f_lvl) {
                                participant.levelShow = (my_s_lvl>0) ? "스쿠바 " + scuba_level[my_s_lvl] + " 다이버": participant.levelShow;
                            } else {
                                participant.levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] + " 다이버": participant.levelShow;
                            }
                        }
                        
                    }
                    
                });
            }
            
            
            
            this.divingData.description = this.divingData.description.replace(/\n/gi, '<br/>');
            //this.divingData.title = '';
            
            var startedAt = new Date(this.divingData.startedAt);
            var finishedAt = new Date(this.divingData.finishedAt);
            //if (this.divingData.startedAt == this.divingData.finishedAt) {
                //this.divingData.title = (startedAt.getMonth()+1) + "월 " + startedAt.getDate() + "일 "
            //} else {
                //this.divingData.title = (startedAt.getMonth()+1) + "/" + startedAt.getDate() + " ~ " + (finishedAt.getMonth()+1) + "/" + finishedAt.getDate() + " "
            //}
            //var cnt = 0;
            //if (this.divingData.type) {
                //this.divingData.type.forEach(_type => {
                    //if (cnt > 0) this.divingData.title += ", ";
                    //this.divingData.title += (_type == 'scubaDiving') ? '스쿠바' : '프리';
                    //cnt++;
                //});
            //}
            //this.divingData.title += ' 다이빙';
            
            if (startedAt.getFullYear() == finishedAt.getFullYear() && startedAt.getMonth() == finishedAt.getMonth() && startedAt.getDate() == finishedAt.getDate()) {
                this.showFinishedAt = true;
            }

            this.divingData.location = '';
            if (this.divingData.diveSites && this.divingData.diveSites.length > 0) {
                this.divingData.diveSites.forEach(x => {
                    x.type = 'site';
                    this.locationData.push(x);
                });
                this.divingData.location = this.divingData.diveSites[0].name + " 사이트";
            }
            if (this.divingData.divePoints && this.divingData.divePoints.length > 0) {
                this.divingData.divePoints.forEach(x => {
                    x.type = 'point';
                    this.locationData.push(x);
                });
                this.divingData.location = this.divingData.divePoints[0].name + " 포인트";
            } 
            if (this.divingData.diveCenters && this.divingData.diveCenters.length > 0) {
                this.divingData.diveCenters.forEach(x => {
                    x.type = 'center';
                    this.locationData.push(x);
                });
                this.divingData.location = this.divingData.diveCenters[0].name;
            }
            
            
            /*_nearData.forEach(d => {
                if (d._id != this.locationData._id) {
                    this.nearData.push(d);
                }
            });*/
          }
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);
      },
      goUserPage(user) {
          if (localStorage.idToken && localStorage.nickName) {
              if (user && user._id) {
                  location.href = '/user/' + user._id;
              }
          } else if (user != null) {
              this.login();
          }
      },
      goDetail(type, uniqueName) {
          location.href = type + '/' + uniqueName;
      },
      async clickLike() {
          if (localStorage.idToken && localStorage.nickName && this.divingData.status != 'publicEnded') {
            const targetId = this.divingData._id;
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
                this.divingData.likes = ((this.divingData.likes==null)?0:this.divingData.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.divingData.likes = this.divingData.likes-1;
            }
          } else {
              this.login();
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
                localStorage.chatType = 'direct';
                var chatUids = new Array();
                chatUids.push(user.uid);
                localStorage.chatUids = JSON.stringify(chatUids);
                localStorage.chatName = user.nickName;
                location.href = '/chat/create'
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
.owner:after {content: '';position: absolute;bottom: 6px;left: 34px;width: 22px;height: 22px;background-image: url(/static/images/assets/crown_s.png);background-repeat: no-repeat;background-size: contain;}
.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 2px 12px;margin:0 !important;position:absolute;right:10px;bottom:20px;color:black !important;}
.wedive-chip2 {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 2px 12px;margin:0 !important;position:absolute;right:70px;bottom:20px;color:black !important;}
.position-relative {position: relative;}
</style>
