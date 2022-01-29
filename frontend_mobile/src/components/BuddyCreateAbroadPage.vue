<template>
  <div class="">
  <div data-menu-active="nav-buddy"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">해외 버디 모집</a>
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
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2">여행 일정</h4>
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2 font-300 color-secondary" style="position: absolute;right: 0px;top: 4px;">{{ day_show }}</h4>
                                    </div>
                                    
                                </div>
                                <div class="collapse show" id="collapse1">
                                    <v-date-picker
                                        is-expanded
                                        is-inline
                                        v-model="selectedDay"
                                        mode="range"
                                        @drag="onRangeClick($event)"
                                        @dayclick="onDayClick($event)"
                                        :min-date="new Date()"
                                        :attributes="attributes"
                                        :select-attribute="selectAttribute"
                                        :theme="theme"></v-date-picker>
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
                                        <h4 class="pt-3 mb-2 content mt-0 mb-2">출발시간</h4>
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
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving_scuba">
                                    <label class="form-check-label rounded-xl border-08" for="check_diving_scuba" style="border-radius: 17px 0 0 17px !important;">스쿠바 다이빙</label>
                                    <i class="fas fa-ship color-white font-18"></i>
                                    <i class="fas fa-ship font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check" style="margin-left: -28px;">
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving_free">
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
                                :serializer="item => item.name_ko"
                                :screen-reader-text-serializer="item => `${item.name_ko}`"
                                highlightClass="special-highlight-class"
                                @hit="selecteduser = $event;enableNext2($event);"
                                :minMatchingChars="2"
                                placeholder="국가명, 지역명, 포인트명, 센터명"
                                inputClass="special-input-class"
                                :disabledValues="(selecteduser ? [selecteduser.name_ko] : [])"
                                @input="lookupUser2"
                                >
                                <template slot="suggestion" slot-scope="{ data, htmlText }">
                                    <div class="d-flex align-items-center">
                                    <img
                                        class="rounded-s me-2"
                                        :src="data.img_url"
                                        style="width: 40px; height: 40px;" />
                                    
                                    
                                    
                                    <span v-if="data.type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + htmlText"></span>
                                    <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + htmlText"></span>
                                    <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + htmlText"></span>
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
                                
                                <span v-if="search_type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + search_loc"></span>
                                <span v-else-if="search_type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + search_loc"></span>
                                <span v-else-if="search_type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + search_loc"></span>
                                </div>
                            </div>
                        </div>

                        <div class="content mt-1">
                            <label class="color-highlight font-12 me-3 ms-3">이곳은 어떠세요?</label>

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
                                
                                <span v-if="'center' == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>제주도'"></span>
                                <span v-else-if="'center' == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + search_loc"></span>
                                <span v-else-if="'center' == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>서면 DIT'"></span>
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
                                
                                <span v-if="'center' == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>제주도'"></span>
                                <span v-else-if="'center' == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + search_loc"></span>
                                <span v-else-if="'center' == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>송도풀장'"></span>
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
                                
                                <span v-if="'center' == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>제주도'"></span>
                                <span v-else-if="'center' == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + search_loc"></span>
                                <span v-else-if="'center' == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>K26'"></span>
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
                            <div class="input-style no-borders has-icon validate-field mb-3 mt-4 me-3 ms-3">
                                <i class="fas fa-pen-alt color-gray"></i>
                                <textarea id="form7" placeholder="이곳에 모집상세를 작성해보세요." v-model="buddy_detail"></textarea>
                                <label for="form7" class="color-highlight">상세정보</label>
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
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/ico_unknown.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-highlight font-12 col-4">모집 인원</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="3">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mt-1 row ms-3 mb-2">
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/ico_man.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-secondary font-12">참여 남성</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="0">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mt-1 row ms-3">
                                <div class="col-3" style="display: inline-block;"><img class="mt-2" src="/static/images/assets/ico_woman.png" width="40px" /></div>
                                <div class="mx-auto col-9" style="display: inline-block;">
                                    <div class="color-secondary font-12">참여 여성</div>
                                    <div class="stepper rounded-s float-start">
                                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                                    <input type="number" min="1" max="99" value="0">
                                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>

                            <div class="mb-0 mt-3 me-3 ms-3">
                                <label class="color-highlight font-12">선호사항</label>
                                <div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender1">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender1">무관</label>
                                    <i class="fas fa-user color-white font-18"></i>
                                    <i class="fas fa-user font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender2">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender2">남자</label>
                                    <i class="fas fa-male color-white font-18"></i>
                                    <i class="fas fa-male font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender3">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender3">여자</label>
                                    <i class="fas fa-female color-white font-18"></i>
                                    <i class="fas fa-female font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_gender4">
                                    <label class="form-check-label rounded-xl border-08" for="check_gender4">커플</label>
                                    <i class="fas fa-user-friends color-white font-18"></i>
                                    <i class="fas fa-user-friends font-16 color-highlight"></i>
                                </div>
                                </div>

                                <div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_amity1">
                                    <label class="form-check-label rounded-xl border-08" for="check_amity1">뒷풀이</label>
                                    <i class="fas fa-beer color-white font-18"></i>
                                    <i class="fas fa-beer font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_env4">
                                    <label class="form-check-label rounded-xl border-08" for="check_env4">센터확정</label>
                                    <i class="fas fa-store color-white font-18"></i>
                                    <i class="fas fa-store font-17 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving2">
                                    <label class="form-check-label rounded-xl border-08" for="check_diving2">초보환영</label>
                                    <i class="fas fa-baby color-white font-18"></i>
                                    <i class="fas fa-baby font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check">
                                    <input class="form-check-input" type="checkbox" value="" id="check_diving3">
                                    <label class="form-check-label rounded-xl border-08" for="check_diving3">상급레벨</label>
                                    <i class="fas fa-user-graduate color-white font-18"></i>
                                    <i class="fas fa-user-graduate font-16 color-highlight"></i>
                                </div>
                                <div class="form-check interest-check hide">
                                    <input class="form-check-input" type="checkbox" value="" id="check_amity2">
                                    <label class="form-check-label rounded-xl border-08" for="check_amity2">식사 함께</label>
                                    <i class="fas fa-utensils color-white font-18"></i>
                                    <i class="fas fa-utensils font-17 color-highlight"></i>
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
                            <div class="text-center mt-2 mb-3">
                                <img src="/static/images/assets/search.gif"/>
                                <p class="font-noto mb-1 mt-2 font-16">세상에서 가장 빠르게 다이빙 버디를 찾아드려요.</p>
                                <p class="font-noto color-gray"><span class="span_timer">3</span>초 후 리스트로 이동할께요.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    </div>
    <!-- Page content ends here-->
        
    

    <div id="snackbar-info" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>종료일을 추가로 선택하세요.</div>
    <div id="snackbar-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>선택할 수 없는 날짜 입니다.</div>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
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
        query: '',
        selecteduser: null,
        users: [],
        selectedDay: null,
        selectedRange: {},
        rangeToggle: 0,
        collapse1_showed: true,
        day_show: "",
        hour_show: "",
        hour_array: ["7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],
        buddy_detail: "",
        search_type: "",
        search_img: "",
        search_loc: "",
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
      next4() {
          setTimeout(function() {
              $(".span_timer").text("2");
          },1000)
          setTimeout(function() {
              $(".span_timer").text("1");
          },2000)
          setTimeout(function() {
              $(".span_timer").text("0");
              window.location.href="/buddy_home";
          },3000)
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
          this.search_img = ev.img_url;
          this.search_type=ev.type;
          this.search_loc=ev.name_ko;
          $("#search_typeahead").addClass("hide");
          $("#search_result").removeClass("hide");
          $("#btn_next2").attr("disabled", false);
      },
      onRangeClick(range) {
          try {
              this.selectedRange.start = new Date(range.start.getTime());
              this.selectedRange.end = new Date(range.end.getTime());
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
                if (this.rangeToggle == 0) {
                        this.rangeToggle = 1;
                        var toastData = 'snackbar-info';
                        var notificationToast = document.getElementById(toastData);
                        var notificationToast = new bootstrap.Toast(notificationToast);
                        notificationToast.show();
                } else if (this.rangeToggle == 1) {
                    this.rangeToggle = 0;
                    
                    this.day_show = (this.selectedRange.start.getMonth()+1) + "." + this.selectedRange.start.getDate() + " (" + weekday_ko[this.selectedRange.start.getDay()] + ") ~ " + (this.selectedRange.end.getMonth()+1) + "." + this.selectedRange.end.getDate() + " (" + weekday_ko[this.selectedRange.end.getDay()] + ")";
                    $("#collapse1_area").click();
                    $("#collapse2_area").click();
                    
                    if (this.day_show != "" && this.hour_show != "") {
                        $("#btn_next1").attr("disabled", false);
                    }
                }
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
      lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠바다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-style i:last-child {position: absolute;top: 37%;right: 20px;}
.form-check-label {min-width: 60px;text-align:center;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
.interest-check input:checked ~ label {background-color: #2c9ac3;}
</style>
