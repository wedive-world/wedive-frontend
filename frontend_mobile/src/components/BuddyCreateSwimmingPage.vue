<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-buddy" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">수영장 버디 모집</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>
    
    <div class="page-content pb-0 mb-0"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" style="width: 25%" 
                    aria-valuenow="10" aria-valuemin="0" 
                    aria-valuemax="100">
            </div>
        </div>
        <div class="splide single-slider slider-no-arrows" id="single-slider-1" data-splide='{"autoplay":false, "drag": false, "lazyLoad": "nearby", "preloadPages": 6, "pagination": false}'>
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div style="position: relative;">
                                <div class="d-flex no-effect" 
                                    data-bs-toggle="collapse" 
                                    href="#collapse1"
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="collapse1"
                                    id="collapse1_area"
                                    v-on:click="collapse1()"
                                    >
                                    <div class="">
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2">모집일자</h4>
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{ day_show }}</h4>
                                    </div>
                                    
                                </div>
                                <div class="collapse show" id="collapse1">
                                    <v-calendar
                                        is-expanded
                                        v-model="selectedDate"
                                        @dayclick="onDayClick"
                                        :min-date="new Date()"
                                        :attributes="attributes"
                                        :select-attribute="selectAttribute"
                                        :theme="theme"></v-calendar>
                                </div>
                            </div>




                            <div style="position: relative;">
                                <div class="d-flex no-effect" 
                                    data-bs-toggle="collapse" 
                                    href="#collapse2"
                                    role="button" 
                                    aria-expanded="false" 
                                    aria-controls="collapse2"
                                    id="collapse2_area"
                                    v-on:click="collapse2()"
                                    >
                                    <div class="">
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2">시간</h4>
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{hour_show}}</h4>
                                    </div>
                                    
                                </div>
                                <div class="collapse" id="collapse2">
                                    <div class="p-2 row">
                                        <div class="form-check interest-check col-3" v-for="(hour,index) in hour_array" style="width: 25%;margin-left:0px;margin-right:0px;padding-left:calc(var(--bs-gutter-x) * .5);">
                                            <input class="form-check-input" type="radio" name="check_hour" value="" :id="'check_hour'+index">
                                            <label class="form-check-label rounded-xl" :for="'check_hour'+index" style="padding-left:12px;" v-on:click="setHour(index)">{{hour}}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a id="btn_next1" href="#" class="slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled" v-on:click="next1()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <h4 class="pt-3 mb-2 content mt-0 mb-2">어떤 다이빙을 원하시나요?</h4>
                            <div class="ms-3 me-3 mb-2">
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving_scuba" v-model="check_diving_scuba">
                                    <label class="form-check-label rounded-xl border-08" for="check_diving_scuba" style="border-radius: 17px 0 0 17px !important;">스쿠버 다이빙</label>
                                    <i class="fas fa-ship color-white font-18"></i>
                                    <i class="fas fa-ship font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check" style="margin-left: -28px;">
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving_free" v-model="check_diving_free">
                                    <label class="form-check-label rounded-xl border-08" for="check_diving_free" style="border-radius: 0 17px 17px 0 !important;">프리 다이빙</label>
                                    <i class="fas fa-swimmer color-white font-18"></i>
                                    <i class="fas fa-swimmer font-16 color-highlight"></i>
                                </div>
                            </div>
                            
                            <h4 class="pt-3 mb-2 content mt-0 mb-2">어디로 갈까요?</h4>
                            <vue-typeahead-bootstrap
                                id="search_typeahead"
                                class="wedive-search content mb-0  me-3 ms-3 mt-2"
                                style="padding-left: 12px; padding-right: 12px;"
                                v-model="query"
                                :data="users"
                                :serializer="item => item.name"
                                :screen-reader-text-serializer="item => `${item.name}`"
                                highlightClass="special-highlight-class"
                                @hit="selecteduser = $event;enableNext2($event);"
                                :minMatchingChars="2"
                                placeholder="지역명, 수영장"
                                inputClass="special-input-class"
                                :disabledValues="(selecteduser ? [selecteduser.name] : [])"
                                @input="lookupUser2"
                                >
                                <template slot="suggestion" slot-scope="{ data, htmlText }">
                                    <div class="d-flex align-items-center">
                                    <img
                                        class="rounded-s me-2"
                                        :src="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                                        style="width: 40px; height: 40px;" />
                                    <span v-if="data.type == 'site'" class="ml-4" v-html="'<span class=\'badge border color-site border-site\'>사이트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                                    <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'badge border color-point border-point\'>포인트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                                    <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>센터</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                                    </div>
                                </template>
                            </vue-typeahead-bootstrap>
                            <div 
                                id="search_result" 
                                class="hide bg-secondary2" 
                                v-on:click="search_result_click()"
                                style="margin-left: 16px;margin-right: 16px;padding:7px 11px 7px;border:1px solid #ced4da;border-radius:16px;">
                                <div class="d-flex align-items-center">
                                <img
                                    class="rounded-s me-2"
                                    :src="search_img"
                                    style="width: 40px; height: 40px;" />
                                
                                <span v-if="search_type == 'region'" class="ml-4" v-html="'<span class=\'badge border color-site border-site\'>사이트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(search_adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + search_loc + '</span>'"></span>
                                <span v-else-if="search_type == 'point'" class="ml-4" v-html="'<span class=\'badge border color-point border-point\'>포인트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(search_adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + search_loc + '</span>'"></span>
                                <span v-else-if="search_type == 'center'" class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>센터</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(search_adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + search_loc + '</span>'"></span>
                                
                                </div>
                            </div>
                        </div>

                        <div class="content mt-1">
                            <label class="font-12 me-3 ms-3" style="color: #b4bcc8"><i class="wedive_icoset wedive_icoset_info me-1"/>추천 장소</label>
                            
                            <div
                                id="search_recommend_1"
                                class="mb-1 search_recommend"
                                v-on:click="search_recommend_click('center', '서면 DIT', '/static/bubble1.jpg', 'search_recommend_1')"
                                style="margin-left: 16px;margin-right: 16px;padding:7px 11px 7px;border:1px solid #ced4da;border-radius:16px;">
                                <div class="d-flex align-items-center">
                                <img
                                    class="rounded-s me-2"
                                    src="/static/bubble1.jpg"
                                    style="width: 40px; height: 40px;" />
                                
                                <span class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>센터</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>3.6<br/><span class=\'font-noto font-16\'>서면 DIT</span>'"></span>
                                </div>
                            </div>
                            <div
                                id="search_recommend_2"
                                class="mb-1 search_recommend"
                                v-on:click="search_recommend_click('center', '송도풀장', '/static/bubble1.jpg', 'search_recommend_2')"
                                style="margin-left: 16px;margin-right: 16px;padding:7px 11px 7px;border:1px solid #ced4da;border-radius:16px;">
                                <div class="d-flex align-items-center">
                                <img
                                    class="rounded-s me-2"
                                    src="/static/bubble1.jpg"
                                    style="width: 40px; height: 40px;" />
                                
                                <span class="ml-4" v-html="'<span class=\'badge border color-point border-point\'>포인트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-point me-2\'></i>3.6<br/><span class=\'font-noto font-16\'>문섬 포인트</span>'"></span>
                                </div>
                            </div>
                            <div
                                id="search_recommend_3"
                                class="mb-1 search_recommend"
                                v-on:click="search_recommend_click('center', 'K26', '/static/bubble1.jpg', 'search_recommend_3')"
                                style="margin-left: 16px;margin-right: 16px;padding:7px 11px 7px;border:1px solid #ced4da;border-radius:16px;">
                                <div class="d-flex align-items-center">
                                <img
                                    class="rounded-s me-2"
                                    src="/static/bubble1.jpg"
                                    style="width: 40px; height: 40px;" />
                                
                                <span class="ml-4" v-html="'<span class=\'badge border color-site border-site\'>사이트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-site me-2\'></i>3.6<br/><span class=\'font-noto font-16\'>제주도 사이트</span>'"></span>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next2" href="#" class="slider-next col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled" v-on:click="next2()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <h4 class="pt-3 mb-2 content mt-0 mb-2">모집 내용을 입력해주세요.</h4>
                            <div class="input-style validate-field mb-3 mt-4 me-3 ms-3">
                                <textarea id="form7" class="wedive-textarea" placeholder="이곳에 모집상세를 작성해보세요." v-model="buddy_detail"></textarea>
                            </div>
                            
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next3" href="#" class="slider-next col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled" v-on:click="next3()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide4" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <h4 class="pt-3 mb-2 content mt-0 mb-2">선택사항</h4>
                            <div class="mt-3 row ms-3 mb-2">
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/user_empty_u.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-highlight font-12 col-4">모집 인원</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="3" id="num_recruit">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mt-1 row ms-3 mb-2">
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/user_empty_m.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-secondary font-12">참여 남성</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="0" id="num_man">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mt-1 row ms-3">
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/user_empty_f.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-secondary font-12">참여 여성</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="0" id="num_woman">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mb-0 mt-3 me-3 ms-3">
                                <label class="color-highlight font-12">선호사항</label>
                                <div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender1" v-model="check_gender1">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender1">무관</label>
                                    <i class="fas fa-user color-white font-18"></i>
                                    <i class="fas fa-user font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender2" v-model="check_gender2">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender2">남자</label>
                                    <i class="fas fa-male color-white font-18"></i>
                                    <i class="fas fa-male font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender3" v-model="check_gender3">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender3">여자</label>
                                    <i class="fas fa-female color-white font-18"></i>
                                    <i class="fas fa-female font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender4" v-model="check_gender4">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender4">커플</label>
                                    <i class="fas fa-user-friends color-white font-18"></i>
                                    <i class="fas fa-user-friends font-16 color-highlight"></i>
                                </div>
                                </div>

                                <div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_amity1" v-model="check_amity1">
                                    <label class="form-check-label rounded-xl border-08" for="check_amity1">뒷풀이</label>
                                    <i class="fas fa-beer color-white font-18"></i>
                                    <i class="fas fa-beer font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_amity2" v-model="check_amity2">
                                    <label class="form-check-label rounded-xl border-08" for="check_amity2">초보환영</label>
                                    <i class="fas fa-baby color-white font-18"></i>
                                    <i class="fas fa-baby font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_amity3" v-model="check_amity3">
                                    <label class="form-check-label rounded-xl border-08" for="check_amity3">상급레벨</label>
                                    <i class="fas fa-user-graduate color-white font-18"></i>
                                    <i class="fas fa-user-graduate font-16 color-highlight"></i>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next4" href="#" class="slider-next col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next4()">완료</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide5" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-4 mb-3">
                                <img src="/static/images/assets/search.gif" width="40%" class="m-5"/>
                                <p class="font-noto mb-1 mt-2 font-16">세상에서 가장 빠르게 다이빙 버디를 찾아드려요.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
    <!-- Page content ends here-->
        
    


    <div id="snackbar-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>선택할 수 없는 날짜 입니다.</div>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
const axios = require("axios")

var weekday_ko = ["", "일", "월", "화", "수", "목", "금", "토"];

export default {
  name: 'HelloWorld',
  mounted() {
    document.getElementById("footer-bar").classList.add("hide");
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
    $("#check_nodate").change(function(){
      $(this).toggleClass("checked");
      if ($(this).is(":checked")) {
        $("#form_start").attr("disabled", true);
      } else {
        $("#form_start").attr("disabled", false);
      }
    });
    
    var body = document.body, html = document.documentElement;
    var height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 56;
    document.getElementById('slide1').style.height = height + 'px';
    document.getElementById('slide2').style.height = height + 'px';
    document.getElementById('slide3').style.height = height + 'px';
    document.getElementById('slide4').style.height = height + 'px';
    document.getElementById('slide5').style.height = height + 'px';
  },
  components: {
    VueTypeaheadBootstrap,
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  data () {
    return {
        check_diving_scuba: false,
        check_diving_free: false,
        
        check_gender1: false,
        check_gender2: false,
        check_gender3: false,
        check_gender4: false,

        check_amity1: false,
        check_amity2: false,
        check_amity3: false,

        query: '',
        selecteduser: null,
        users: [],
        selectedDate: null,
        collapse1_showed: true,
        day_show: "",
        hour_show: "",
        buddy_detail: "",
        search_type: "",
        search_img: "",
        search_loc: "",
        search_adminScore: "",
        selected_id: "",
        hour_array: ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
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
      buddy_detail: function(newVal, oldVal) {
        if (newVal != "") {
            $("#btn_next3").attr("disabled", false);
        }
      },
  },
  methods: {
      next1() {
          $(".progress-bar").css("width", "50%");
      },
      next2() {
          $(".progress-bar").css("width", "75%");
          setTimeout(function() {
              $("#form7").focus();
          },200);
      },
      next3() {
          $(".progress-bar").css("width", "100%");
      },
      async next4() {
        const s_date = this.selectedDate.year + "-" + (this.selectedDate.month<10?"0"+this.selectedDate.month:this.selectedDate.month) + "-" + (this.selectedDate.day<10?"0"+this.selectedDate.day:this.selectedDate.day) + " " + this.hour_show + ":00";
        const buddy_detail = this.buddy_detail;
        var participants = new Array();
        for (var i=0; i<parseInt($("#num_man").val()); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "m"});
        }
        for (var i=0; i<parseInt($("#num_woman").val()); i++) {
            participants.push({"user": null, "status": "joined", "name": null, "birth": null, "gender": "f"});
        }
        const parti = participants;


        const center_id = this.selected_id;


        var interests = new Array();
        if (this.check_diving_scuba) interests.push("61b45a9f13f324035a6c86b3");
        if (this.check_diving_free) interests.push("6178027df7c3a048b4704a87");
        if (this.check_gender1) interests.push("6174da5da60639819c3e6ac7");
        if (this.check_gender2) interests.push("6174da5ea60639819c3e6ac9");
        if (this.check_gender3) interests.push("6174da5fa60639819c3e6acb");
        if (this.check_gender4) interests.push("6174da60a60639819c3e6acd");
        if (this.check_amity1) interests.push("6174da70a60639819c3e6ad9");
        if (this.check_amity2) interests.push("61b45bb413f324035a6c86bc");
        if (this.check_amity3) interests.push("61b45bb913f324035a6c86bf");
        const inter = interests

        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
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
                        "title": null,
                        "description": buddy_detail,
                        "status": "searchable",
                        "hostUser": localStorage.userId,
                        "participants": parti,
                        "interests": inter,
                        "diveSites": null,
                        "divePoints": null,
                        "diveCenters": center_id,
                        "startedAt": s_date,
                        "finishedAt": s_date,
                    }
                }
            }
        }, {
        headers: {
            countryCode: 'ko',
            android: (localStorage.android) ? localStorage.android : "",
        }
        });
        const diving_id = result.data.data.upsertDiving;
        setTimeout(function() {
            window.location.href="/diving/" + diving_id;
        }, 500);
        
        
        //parseInt($("#num_recruit").val())
        //console.log(this.query);
        
        
        /*setTimeout(function() {
            $(".span_timer").text("2");
        },1000)
        setTimeout(function() {
            $(".span_timer").text("1");
        },2000)
        setTimeout(function() {
            //$(".span_timer").text("0");
            window.location.href="/buddy_home";
        },2100)*/
      },
      collapse1() {
        $("#collapse2_area").click();
      },
      collapse2() {
        $("#collapse1_area").click();
      },
      setHour(index) {
        this.hour_show = this.hour_array[index];
        //$("#collapse2_area").click();
        if (this.day_show != "" && this.hour_show != "") {
            $("#btn_next1").attr("disabled", false);
        }
      },
      search_recommend_click(type, name, img, target) {
          this.search_img = img;
          this.search_type=type;
          this.search_loc=name;
          $("#search_typeahead").addClass("hide");
          $("#search_result").removeClass("hide");
          $("#btn_next2").attr("disabled", false);
          $(".search_recommend").removeClass("bg-secondary2");
          $("#"+target).addClass("bg-secondary2");
      },
      search_result_click() {
          $("#search_typeahead").removeClass("hide");
          $("#search_result").addClass("hide");
          this.query = '';
          $("#search_typeahead input").focus();

          $("#search_recommend_1").removeClass("bg-secondary2");
          $("#search_recommend_2").removeClass("bg-secondary2");
          $("#search_recommend_3").removeClass("bg-secondary2");
      },
      enableNext2(ev) {
          console.log(ev);
          this.search_img = (ev.backgroundImages && ev.backgroundImages.length>0) ? ev.backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
          this.search_type=ev.type;
          this.search_loc=ev.name;
          this.search_adminScore=ev.adminScore;
          this.selected_id = ev._id;

          
          $("#search_typeahead").addClass("hide");
          $("#search_result").removeClass("hide");
          $("#btn_next2").attr("disabled", false);
      },
      onDayClick(day) {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);
        if (new Date(day.id) < yesterday) {
            var toastData = 'snackbar-error';
            var notificationToast = document.getElementById(toastData);
            var notificationToast = new bootstrap.Toast(notificationToast);
            notificationToast.show();
        } else {
            this.selectedDate = day;
            this.day_show = day.month + "." + day.day + " (" + weekday_ko[day.weekdayPosition] + ")";
            $("#collapse1_area").click();
            $("#collapse2_area").click();
        }
        
        if (this.day_show != "" && this.hour_show != "") {
            $("#btn_next1").attr("disabled", false);
        }
      },
      lookupUser: debounce(function(){
        // in practice this action should be debounced
        fetch(`https://api.github.com/search/users?q=${this.query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.users = data.items;
          })
      }, 500),
      async lookupUser2() {
        this.users = [];
        const query = this.query;
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
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
                        searchDivePointsByName(query: $query) {
                            _id
                            uniqueName
                            name
                            description
                            adminScore
                            backgroundImages {
                                thumbnailUrl
                            }
                        }
                        searchDiveSitesByName(query: $query) {
                            _id
                            uniqueName
                            name
                            description
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
        }, {
        headers: {
            countryCode: 'ko',
            android: (localStorage.android) ? localStorage.android : "",
        }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;
      },
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-style i:last-child {position: absolute;top: 37%;right: 20px;}
.form-check-label {min-width: 60px;text-align:center;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
.interest-check input:checked ~ label {background-color: #2c9ac3;}
.wedive-textarea {min-height: 160px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
</style>
