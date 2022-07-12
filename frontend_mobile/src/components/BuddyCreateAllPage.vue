<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">버디 찾기</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    

    <div class="page-content pb-0" style="margin-top: 50px;"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" :style="'width: '+progressBar+'%'" 
                    aria-valuenow="0" :aria-valuemin="progressBar" 
                    aria-valuemax="100">
            </div>
        </div>
        <swiper
            ref="contentSwiper"
            class="wedive-content-swiper"
            :options="swiperOptions"
            @slideChange="onSlideChange"
        >
        <swiper-slide
            :key="0"
            :virtualIndex="0">
                    <div id="slide0" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="text-center">
                            <img class="mt-5" src="/static/images/assets/calendar.png" width="50%"/>
                            <h4 class="pt-n4 pb-3 mt-5">1박 이상 일정인가요?</h4>

                            <div style="">
                                <div class="custom-control ios-switch ios-switch-icon wedive-switch toggleBorder" style="margin: 0 !important;padding: 0 !important;">
                                    <input v-on:click="toggleSchedule()" type="checkbox" class="ios-input" id="toggle-license">
                                    <label class="custom-control-label" for="toggle-license"></label>
                                    <span :class="'ps-3 font-16' + (scheduleFlag ? ' opacity-30' : '')" style="padding-top:12px;padding-left:56px !important;">당일 일정</span>
                                    <span :class="'font-16' + (scheduleFlag ? '' : ' opacity-30')" style="padding-top:12px;padding-left:40px;">1박 이상</span>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 25;go_next(0);" id="btn_next0" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="1"
            :virtualIndex="1">
                    <div id="slide0" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div style="position: relative;">
                            <div class="d-flex no-effect" 
                                data-bs-toggle="collapse" 
                                role="button" 
                                aria-expanded="false"
                                >
                                <div class="">
                                    <h4 class="pt-3 mb-2 content mt-0 mb-2">모집일정</h4>
                                    <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{ day_show }}</h4>
                                </div>
                                
                            </div>
                            <div class="collapse show">
                                <v-date-picker
                                    is-expanded
                                    is-inline
                                    v-model="selectedDay"
                                    :mode="scheduleFlag ? 'range' : 'date'"
                                    @drag="onRangeClick($event)"
                                    @dayclick="onDayClick($event)"
                                    :min-date="new Date()"
                                    :attributes="attributes"
                                    :select-attribute="selectAttribute"
                                    :theme="theme"></v-date-picker>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 25;disable_button('btn_next1')" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 25;go_next(1);" id="btn_next1" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="2"
            :virtualIndex="2">
                    <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-0">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">다이빙 종류 및 장소</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">어떤 다이빙을 하실 예정인가요?<br/>어디로 갈까요?</p>
                                <img src="/static/images/assets/gif_hello.gif" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div style="margin-left: -9px !important;">
                                    <div class="" style="margin-left: 10px;padding: 0px 0px 5px 10px;" id="div_diving_type">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">다이빙 타입</label>
                                        <div class="form-check icon-check">
                                            <input class="form-check-input" type="checkbox" value="" id="radio_scuba" @focus="focusInput($event)" v-on:click="clickRadio('label_scuba')">
                                            <label class="form-check-label font-noto font-18 font-500 opacity-30" for="radio_scuba" id="label_scuba">스쿠바</label>
                                            <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                                            <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
                                        </div>
                                        <div class="form-check icon-check">
                                            <input class="form-check-input" type="checkbox" value="" id="radio_free" @focus="focusInput($event)" v-on:click="clickRadio('label_free')">
                                            <label class="form-check-label font-noto font-18 font-500 opacity-30" for="radio_free" id="label_free">프리</label>
                                            <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                                            <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 pt-2 rounded-s">
                                    <!--<div class="input-style input-style-always-active no-borders no-icon">-->
                                    <div class="no-borders no-icon pb-3">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">다이빙 장소</label>

                                        <vue-typeahead-bootstrap
                                            id="search_typeahead_big"
                                            class="form-control"
                                            v-model="query"
                                            :data="users"
                                            :serializer="item => item.name"
                                            :screen-reader-text-serializer="item => `${item.name}`"
                                            highlightClass="special-highlight-class"
                                            @hit="selecteduser = $event;enableNext2($event);"
                                            :minMatchingChars="1"
                                            placeholder="다이빙 장소를 검색하세요"
                                            inputClass="special-input-class"
                                            :disabledValues="(selecteduser ? [selecteduser.name] : [])"
                                            @input="lookupLocationSearch"
                                            style="background: transparent;border-width: 0;padding:0;margin-botttom:8px;"
                                            >
                                            <template slot="suggestion" slot-scope="{ data, htmlText }">
                                                <div class="d-flex align-items-center" style="position:relative !important;">
                                                <div :class="''+data.type + '-tag'" style="position:relative;">
                                                    <img
                                                    class="rounded-s me-3"
                                                    :src="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                                                    style="width: 40px; height: 40px;" />
                                                </div>
                                                <span v-if="data.type == 'site'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + ' 사이트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                                                <span v-else-if="data.type == 'point'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + ' 포인트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                                                <span v-else-if="data.type == 'center'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                                                
                                                </div>
                                            </template>
                                        </vue-typeahead-bootstrap>
                                        <div 
                                            id="search_result" 
                                            class="hide bg-secondary2" 
                                            v-on:click="search_result_click()"
                                            style="padding:16px;border:1px solid #ced4da;border-radius:16px;">
                                            <div class="d-flex align-items-center" style="position:relative !important;">
                                            <div :class="''+search_type + '-tag'" style="position:relative;">
                                            <img
                                                class="rounded-s me-3"
                                                :src="search_img"
                                                style="width: 40px; height: 40px;" />
                                            </div>
                                            <span v-if="search_type == 'site'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + search_loc + ' 사이트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(search_adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + search_desc+'</span>'"></span>
                                            <span v-else-if="search_type == 'point'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + search_loc + ' 포인트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(search_adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + search_desc+'</span>'"></span>
                                            <span v-else-if="search_type == 'center'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + search_loc + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(search_adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + search_desc+'</span>'"></span>
                                            
                                            </div>
                                        </div>



                                        <!--<input id="ins_name" v-model="ins_name" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="다이빙 장소를 검색하세요." style="background: transparent;border-bottom-width: 0;">-->
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 25;disable_button('btn_next2')" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 25;go_next(2);" id="btn_next2" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="3"
            :virtualIndex="3">
                    <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">버디찾기 모집내용</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">제목과 상세 내용을 적어주세요.<br/>&nbsp;</p>
                                <img src="/static/images/assets/pen-and-paper.png" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>

                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s" id="div_diving_description">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input id="ins_name" v-model="diving_title" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="제주 3박4일 스쿠바버디 구해요" style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">버디찾기 제목</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <textarea id="form7" class="wedive-textarea wedive-input font-noto font-18 font-500" @focus="focusInput($event)" placeholder="이곳에 상세내용을 작성해보세요." v-model="diving_detail"></textarea>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">버디찾기 상세내용</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 25;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 25;go_next(3);" id="btn_next3" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="4"
            :virtualIndex="4">
                <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">선택 사항</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">모집인원, 참여중인 인원, 선호사항을<br/>입력하시면 더 빠르게 찾아드려요.</p>
                                <img src="/static/images/assets/like-notification.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-2 pt-1" id="div_diving_option">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">모집인원</label>
                                    <div class="form-check icon-check">
                                        <input class="form-check-input" type="checkbox" value="" id="radio_unlimited" @focus="focusInput($event)" v-on:click="clickRadio('label_unlimited')" checked="checked">
                                        <label class="form-check-label font-noto font-18 font-500" for="radio_unlimited" id="label_unlimited">제한 없음</label>
                                        <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                                        <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
                                    </div>
                                    <div class="stepper rounded-s opacity-30" id="stepper-recruit">
                                        <a href="#" @focus="focusInput($event)" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                        <input type="number" min="0" max="99" value="0" id="num_recruit">
                                        <a href="#" @focus="focusInput($event)" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="row">
                                        <div class="col-6">
                                        <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">참여중인 남자</label>
                                        <div class="stepper rounded-s">
                                            <a href="#" @focus="focusInput2($event)" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                            <input type="number" min="0" max="99" value="0" id="num_man">
                                            <a href="#" @focus="focusInput2($event)" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                        </div>
                                        <div class="clearfix"></div>
                                        </div>
                                        <div class="col-6">
                                        <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">참여중인 여자</label>
                                        <div class="stepper rounded-s">
                                            <a href="#" @focus="focusInput2($event)" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                            <input type="number" min="0" max="99" value="0" id="num_woman">
                                            <a href="#" @focus="focusInput2($event)" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                        </div>
                                        <div class="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">선호사항</label>
                                    <div class="">
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_gender1" v-model="check_gender1">
                                            <label class="form-check-label rounded-xl border-08" for="check_gender1">무관</label>
                                            <i class="fas fa-user color-white font-18"></i>
                                            <i class="fas fa-user font-16 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_gender2" v-model="check_gender2">
                                            <label class="form-check-label rounded-xl border-08" for="check_gender2">남자</label>
                                            <i class="fas fa-male color-white font-18"></i>
                                            <i class="fas fa-male font-16 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_gender3" v-model="check_gender3">
                                            <label class="form-check-label rounded-xl border-08" for="check_gender3">여자</label>
                                            <i class="fas fa-female color-white font-18"></i>
                                            <i class="fas fa-female font-16 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_gender4" v-model="check_gender4">
                                            <label class="form-check-label rounded-xl border-08" for="check_gender4">커플</label>
                                            <i class="fas fa-user-friends color-white font-18"></i>
                                            <i class="fas fa-user-friends font-16 color-highlight"></i>
                                        </div>
                                        </div>

                                        <div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_amity1" v-model="check_amity1">
                                            <label class="form-check-label rounded-xl border-08" for="check_amity1">뒷풀이</label>
                                            <i class="fas fa-beer color-white font-18"></i>
                                            <i class="fas fa-beer font-16 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_amity2" v-model="check_amity2">
                                            <label class="form-check-label rounded-xl border-08" for="check_amity2">초보환영</label>
                                            <i class="fas fa-baby color-white font-18"></i>
                                            <i class="fas fa-baby font-16 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                            <input class="form-check-input" @focus="focusInput3($event)" type="checkbox" value="" id="check_amity3" v-model="check_amity3">
                                            <label class="form-check-label rounded-xl border-08" for="check_amity3">상급레벨</label>
                                            <i class="fas fa-user-graduate color-white font-18"></i>
                                            <i class="fas fa-user-graduate font-16 color-highlight"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 25;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 25;completed();" id="btn_next4" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">완료</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="5"
            :virtualIndex="5">
                <div id="slide7" class="card card-full pb-0 mb-0 border-bottom" style="min-height: calc( 100vh - 56px );">
                        <div class="content mt-1 text-center mt-5">
                            <img class="mt-5" src="/static/images/assets/completed.gif" width="35%" />
                            <p class="font-noto font-18 mb-1 mt-3">버디 찾기 등록이 완료되었습니다..</p>
                            <p class="font-noto font-14 mb-0 color-gray">확인을 누르시면 버디찾기 화면으로 이동합니다.</p>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="finished();" id="btn_next5" href="#" class="col-12 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">확인</a>
                        </div>
                </div>
        </swiper-slide>
        </swiper>






        
    </div>
    <!-- Page content ends here-->
    
    
    <div id="snackbar-inputerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>모든 항목을 입력해주세요.</div>
    <div id="snackbar-locationerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>최대 10개의 장소를 등록할 수 있어요.</div>
    <div id="snackbar-info" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>종료일을 추가로 선택하세요.</div>
    <div id="snackbar-info2" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>다이빙 타입을 선택하세요.</div>
    <div id="snackbar-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>선택할 수 없는 날짜 입니다.</div>

  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import gql from 'graphql-tag'
//import { GraphQLClient, request, gql } from "graphql-request";
import draggable from 'vuedraggable'


var weekday_ko = ["일", "월", "화", "수", "목", "금", "토"];
const axios = require("axios")
export default {
  name: 'HelloWorld',
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
    setTimeout(function() {
        $("#toggle-id-1").click();
        $("#toggle-id-2").click();
        $(".wedive-search2 > .input-group").prepend('<i class="fas fa-swimming-pool wedive-search2-icon color-gray" style="margin-left:6px;"></i>');

        $('#form_pb').on('change', function() {
            var val = $('#form_pb').val();
            if (val == 'STA') {
                $("#em_pb_record").text("(단위, 분)");
            } else {
                $("#em_pb_record").text("(단위, 미터)")
            }
        });
        $("#form1").focus();
    }, 1000);
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".header-fixed").hide();
    }
    
  },
  components: {
    Swiper,
    SwiperSlide,
    draggable,
  },
  created() {
    const insname = this.ins_name;
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
        $("#search_typeahead_big > .input-group > input").css("border-width", "0px");
        $("#search_typeahead_big > .input-group > input").css("background", "transparent");
        $("#search_typeahead_big > .input-group > input").addClass("font-noto font-18 font-500 p-0");
        $("#search_typeahead_big > .input-group > input").focus(function() {
            $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
            $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
            event.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.add("focusBorder");
        });
    }, 500);
  },
  data () {
    return {
        check_agree: false,
        scheduleFlag: false,
        locations: [],
        query: '',
        search_type: "",
        selecteduser: null,
        users: [],
        search_img: "",
        diving_type: null,
        diving_title: '',
        diving_detail: '',
        label_scuba: false,
        label_free: false,
        label_unlimited: true,
        check_gender1: false,
        check_gender2: false,
        check_gender3: false,
        check_gender4: false,
        check_amity1: false,
        check_amity2: false,
        check_amity3: false,
        rangeToggle: 0,
        now: new Date(),
        selectedDay: null,
        selectedDate: null,
        selectedRange: {},
        
        swiperOptions: {
            allowTouchMove: false,
        },
        suggestions : (localStorage.suggestion ? JSON.parse(localStorage.suggestion) : []),
        progressBar: 0,
        
        day_show: "",
        theme: {
            container: {
            light: 'light-container-class',  // Classes to apply for light mode
            dark: 'dark-container-class',  // Classes to apply for dark mode
            }
        },
        selectAttribute: {
            highlight: {
                backgroundColor: '#08A14A', // green
                borderColor: '#067B39',
                borderWidth: '2px',
                borderStyle: 'solid'
            },
            contentStyle: {
                color: 'white'
            },
            // Don't need the date here
        },
    }
  },
  computed: {
    attributes() {
        // Insert today's attribute
        // Insert weekend attribute
    },
  },
  watch: {
      diving_title: function(newVal, oldVal) {
          if (newVal != '' && this.diving_detail != '') {
              $("#btn_next3").attr("disabled", false);
          } else {
              $("#btn_next3").attr("disabled", true);
          }
      },
      diving_detail: function(newVal, oldVal) {
          if (newVal != '' && this.diving_title != '') {
              $("#btn_next3").attr("disabled", false);
          } else {
              $("#btn_next3").attr("disabled", true);
          }
      },
  },
  methods: {
      search_result_click() {
          $("#search_typeahead_big").removeClass("hide");
          $("#search_result").addClass("hide");
          this.query = '';
          $("#search_typeahead_big input").focus();

          $("#search_recommend_1").removeClass("bg-secondary2");
          $("#search_recommend_2").removeClass("bg-secondary2");
          $("#search_recommend_3").removeClass("bg-secondary2");

          $("#btn_next2").attr("disabled", true);
      },
      enableNext2(ev) {
          console.log(ev);
          this.search_img = (ev.backgroundImages && ev.backgroundImages.length>0) ? ev.backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
          this.search_type=ev.type;
          this.search_loc=ev.name;
          this.search_desc=ev.description;
          this.search_adminScore=ev.adminScore;
          this.selected_id = ev._id;

          
          $("#search_typeahead_big").addClass("hide");
          $("#search_result").removeClass("hide");
          if(this.label_scuba != false || this.label_free != false) {
              $("#btn_next2").attr("disabled", false);
          }
      },
      clickRadio(id) {
          if (id == 'label_scuba') {
              if (this.label_scuba) {
                  if ($('#label_scuba').hasClass('opacity-30') == false) $('#label_scuba').addClass('opacity-30');
              } else {
                  $('#label_scuba').removeClass('opacity-30');
              }
              this.label_scuba = !this.label_scuba;
          } else if (id == 'label_free') {
              if (this.label_free) {
                  if ($('#label_free').hasClass('opacity-30') == false) $('#label_free').addClass('opacity-30');
              } else {
                  $('#label_free').removeClass('opacity-30');
              }
              this.label_free = !this.label_free;
          } else if (id == 'label_unlimited') {
              if (this.label_unlimited) {
                  if ($('#label_unlimited').hasClass('opacity-30') == false) $('#label_unlimited').addClass('opacity-30');
                  $("#stepper-recruit").removeClass('opacity-30');
              } else {
                  $('#label_unlimited').removeClass('opacity-30');
                  if ($('#stepper-recruit').hasClass('opacity-30') == false) $('#stepper-recruit').addClass('opacity-30');
              }
              this.label_unlimited = !this.label_unlimited;
          }
          if (this.selecteduser != null) {
              $("#btn_next2").attr("disabled", false);
          }
      },
      disable_button(id) {
          $('#' + id).attr('disabled', true);
      },
      async completed() {
          
      },
      finished() {
          //location.href='/instructor/' + this.ins_id;
      },
      go_next(id) {
          if (id == 1) {
            $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
            document.getElementById('div_diving_type').classList.add("toggleBorder");
          } else if (id == 2) {
              $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
              document.getElementById('div_diving_description').classList.add("focusBorder");
          } else if (id == 3) {
              $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
              document.getElementById('div_diving_option').classList.add("focusBorder");
          }
      },
      async lookupLocationSearch() {
        // progress bar
        var preloader = document.getElementById('preloader')
        if(preloader){
            preloader.classList.remove('preloader-hide');
            preloader.classList.add('opacity-50');
        }
        this.users = [];
        const query = this.query;
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    query Query($query: String!) {
                        searchDiveCentersByName(query: $query) {
                            _id
                            uniqueName
                            name
                            description
                            divingType
                            adminScore
                            backgroundImages {
                                thumbnailUrl
                            }
                        }
                    }
                `,
                variables: {
                    "query": query
                }
            }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;
        if(preloader){
            preloader.classList.remove('opacity-50');
            preloader.classList.add('preloader-hide');
        }
      },
      toggleSchedule() {
          this.scheduleFlag = !this.scheduleFlag;
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          event.currentTarget.parentNode.classList.add("toggleBorder");
      },
      focusInput(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.classList.add("focusBorder");
      },
      focusInput2(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.add("focusBorder");
      },
      focusInput3(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.parentNode.classList.add("focusBorder");
      },
      onSlideChange() {
          //console.log("onSlideChange")
      },
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      onRangeClick(range) {
          try {
              this.selectedRange.start = new Date(range.start.getTime());
              this.selectedRange.end = new Date(range.end.getTime());
              this.now = new Date();
          } catch(e) {}
      },
      onDayClick(day) {
          var yesterday = new Date();
          yesterday.setDate(yesterday.getDate()-1);
          if (new Date(day.id) < yesterday) {
            var toastData = 'snackbar-error';
            var notificationToast = document.getElementById(toastData);
            var notificationToast = new bootstrap.Toast(notificationToast);
            notificationToast.show();
            if (this.rangeToggle == 0) this.rangeToggle = 1;
            else this.rangeToggle = 0;
          } else {
              if (this.scheduleFlag) {
                if (this.rangeToggle == 0) {
                        this.rangeToggle = 1;
                        var toastData = 'snackbar-info';
                        var notificationToast = document.getElementById(toastData);
                        var notificationToast = new bootstrap.Toast(notificationToast);
                        notificationToast.show();
                } else if (this.rangeToggle == 1) {
                    this.rangeToggle = 0;
                    
                    this.day_show = (this.selectedRange.start.getMonth()+1) + "." + this.selectedRange.start.getDate() + " (" + weekday_ko[this.selectedRange.start.getDay()] + ") ~ " + (this.selectedRange.end.getMonth()+1) + "." + this.selectedRange.end.getDate() + " (" + weekday_ko[this.selectedRange.end.getDay()] + ")";
                    $("#btn_next1").attr("disabled", false);
                }
              } else {
                    this.selectedDate = day;
                    this.day_show = day.month + "." + day.day + " (" + weekday_ko[day.weekdayPosition] + ")";
                    $("#btn_next1").attr("disabled", false);
              }
                
          }
          
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.input-style.has-borders.input-style-always-active label {background-color: transparent !important;}
select:invalid {color: #6c757d;}
select {background: white; background-color: white;}
.wediev-label {font-size: 12px;transition: all 250ms ease;position:absolute;left:14px;z-index:99;margin-top: -16px;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
.input-big {font-size:22px !important;}
.input-big::placeholder {font-size:22px !important;}
.input-big2 {font-size:18px !important;}
.input-big2::placeholder {font-size:18px !important;}
.input-big3 {font-size:14px !important;}
.input-big3::placeholder {font-size:14px !important;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
.focusBorder {border: 2px solid #2c9ac3;background: #fff;border-radius: 8px !important;}
.form-control::placeholder {font-family: 'Noto Sans Korean' !important;font-size: 18px !important;font-weight: 500 !important;opacity: 30%;}

.wedive-switch label::before {height: 62px !important;width: calc(100vw - 46px) !important;border-radius: 8px !important;border-width: 0 !important;}
.toggleBorder label::before {border: 2px solid #2c9ac3 !important;border-radius: 8px !important;}
.wedive-switch label::after {height: 62px !important;width: calc(50vw - 23px) !important;margin-top:-62px !important;border-radius: 8px !important;margin-left:-1px !important;}
.ios-input:checked ~ .custom-control-label::after {-webkit-transform: translateX(calc(50vw - 23px)) !important;}
.ios-switch-icon span {font-family: 'Noto Sans Korean' !important;font-weight: 500 !important;color: black !important;}
.ios-input:checked ~ .custom-control-label::before {background-color: #efefef !important;}
.ios-switch-icon label::before {background-color: #efefef !important;}
.ios-switch-icon span:last-child {margin-left: 50%;}

.map_box_cate {padding: 2px 6px;margin-bottom:2px;margin-right:6px;border-radius:4px;}
.DiveSite .map_box_cate {border: 1px solid #3f474c;color:#3f474c}
.DivePoint .map_box_cate {border: 1px solid #3cb5a0;color:#3cb5a0}
.DiveCenter .map_box_cate {border: 1px solid #4687c1;color:#4687c1}
.wedive-textarea {min-height: 200px;background: transparent !important;line-height: 26px !important;}
.wedive-textarea::placeholder{font-size:18px !important;color: #d9dbdd;}
</style>
