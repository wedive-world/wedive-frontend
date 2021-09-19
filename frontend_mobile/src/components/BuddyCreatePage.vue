<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-buddy" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">다이브 이벤트 만들기</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-3"> 
        
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-3 mb-2">일정 정보</h4>
            <!--<a id="delete_schedule" class="color-highlight font-12 hide" style="margin-top: -30px;padding-bottom: 10px;float:right;">일정 삭제</a>-->
            <div class="text-center p-3 bg-fade-gray-light rounded-s mb-3" id="div_empty">
              <img class="mt-2" src="/static/images/empty_ill.png" style="width: 60%;"/>
              <p class="color-gray-light-mid">아직 일정이 없습니다.</p>
            </div>
            
            <div class="p-3 rounded-s mb-4 mt-3 row hide" id="div_schedule1" style="border: 1px solid rgba(0, 0, 0, 0.08) !important;">
              <a href="#" class="schedule-close" v-on:click="closeSchedule(1)"><i class="wedive_icoset wedive_icoset_close"></i></a>
              <label class="wedive-label color-secondary">일정 1</label>
              <div class="input-style has-borders no-icon mt-2 col-6 pe-3 after-tilde">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일">
                <label for="form_start" class="color-highlight">시작일</label>
              </div>
              <div class="input-style has-borders no-icon mt-2 col-6 ps-3">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일">
                <label for="form_end" class="color-highlight">종료일</label>
              </div>
              

              <div class="mt-3">
                <vue-typeahead-bootstrap
                    class="form-control wedive-search"
                    style="border-radius: 10px !important;border-color: rgba(0, 0, 0, 0.08) !important;"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event"
                    :minMatchingChars="2"
                    placeholder="지역명, 다이빙 포인트, 센터명"
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
              </div>
            </div>
            <div class="p-3 rounded-s mb-4 row hide" id="div_schedule2" style="border: 1px solid rgba(0, 0, 0, 0.08) !important;">
              <a href="#" class="schedule-close" v-on:click="closeSchedule(1)"><i class="wedive_icoset wedive_icoset_close"></i></a>
              <label class="wedive-label color-secondary">일정 2</label>
              <div class="input-style has-borders no-icon mt-2 col-6 pe-3 after-tilde">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일">
                <label for="form_start" class="color-highlight">시작일</label>
              </div>
              <div class="input-style has-borders no-icon mt-2 col-6 ps-3">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일">
                <label for="form_end" class="color-highlight">종료일</label>
              </div>

              <div class="mt-3">
                <vue-typeahead-bootstrap
                    class="form-control wedive-search"
                    style="border-radius: 10px !important;border-color: rgba(0, 0, 0, 0.08) !important;"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event"
                    :minMatchingChars="2"
                    placeholder="지역명, 다이빙 포인트, 센터명"
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
              </div>
            </div>
            <div class="p-3 rounded-s mb-4 row hide" id="div_schedule3" style="border: 1px solid rgba(0, 0, 0, 0.08) !important;">
              <a href="#" class="schedule-close" v-on:click="closeSchedule(1)"><i class="wedive_icoset wedive_icoset_close"></i></a>
              <label class="wedive-label color-secondary">일정 3</label>
              <div class="input-style has-borders no-icon mt-2 col-6 pe-3 after-tilde">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일">
                <label for="form_start" class="color-highlight">시작일</label>
              </div>
              <div class="input-style has-borders no-icon mt-2 col-6 ps-3">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일">
                <label for="form_end" class="color-highlight">종료일</label>
              </div>

              <div class="mt-3">
                <vue-typeahead-bootstrap
                    class="form-control wedive-search"
                    style="border-radius: 10px !important;border-color: rgba(0, 0, 0, 0.08) !important;"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event"
                    :minMatchingChars="2"
                    placeholder="지역명, 다이빙 포인트, 센터명"
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
              </div>
            </div>
            <div class="p-3 rounded-s mb-4 row hide" id="div_schedule4" style="border: 1px solid rgba(0, 0, 0, 0.08) !important;">
              <a href="#" class="schedule-close" v-on:click="closeSchedule(1)"><i class="wedive_icoset wedive_icoset_close"></i></a>
              <label class="wedive-label color-secondary">일정 4</label>
              <div class="input-style has-borders no-icon mt-2 col-6 pe-3 after-tilde">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일">
                <label for="form_start" class="color-highlight">시작일</label>
              </div>
              <div class="input-style has-borders no-icon mt-2 col-6 ps-3">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일">
                <label for="form_end" class="color-highlight">종료일</label>
              </div>

              <div class="mt-3">
                <vue-typeahead-bootstrap
                    class="form-control wedive-search"
                    style="border-radius: 10px !important;border-color: rgba(0, 0, 0, 0.08) !important;"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event"
                    :minMatchingChars="2"
                    placeholder="지역명, 다이빙 포인트, 센터명"
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
              </div>
            </div>
            <div class="p-3 rounded-s row hide" id="div_schedule5" style="border: 1px solid rgba(0, 0, 0, 0.08) !important;">
              <a href="#" class="schedule-close" v-on:click="closeSchedule(1)"><i class="wedive_icoset wedive_icoset_close"></i></a>
              <label class="wedive-label color-secondary">일정 5</label>
              <div class="input-style has-borders no-icon mt-2 col-6 pe-3 after-tilde">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="시작일">
                <label for="form_start" class="color-highlight">시작일</label>
              </div>
              <div class="input-style has-borders no-icon mt-2 col-6 ps-3">
                <input type="date" value="" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="종료일">
                <label for="form_end" class="color-highlight">종료일</label>
              </div>

              <div class="mt-3">
                <vue-typeahead-bootstrap
                    class="form-control wedive-search"
                    style="border-radius: 10px !important;border-color: rgba(0, 0, 0, 0.08) !important;"
                    v-model="query"
                    :data="users"
                    :serializer="item => item.name_ko"
                    :screen-reader-text-serializer="item => `${item.name_ko}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event"
                    :minMatchingChars="2"
                    placeholder="지역명, 다이빙 포인트, 센터명"
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
              </div>
            </div>
            <div class="">
              <a href="#" v-on:click="addSchedule()" class="btn btn-full mb-1 pt-3 pb-3 font-14 font-500 color-highlight"><i class="fas fa-plus"></i> 일정 추가하기</a>
            </div>




            <h4 class="pt-2 mb-2">참여 정보</h4>
            <!--<div class="mb-0 mt-3">
              <div class="input-style has-borders no-icon validate-field mb-0">
                <input type="number" class="form-control validate-text" id="form_price" placeholder="모집인원을 입력하세요.">
                <label for="form_price" class="color-highlight">모집인원</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(필요 시 입력))</em>
              </div>
            </div>-->

            <div class="row mb-2">
              <div class="col-6">
                <div>모집 인원</div>
                <div class="mx-auto">
                  <div class="stepper rounded-s float-start">
                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                    <input type="number" min="1" max="99" value="1">
                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
              <div class="col-6">
                <div>현재 인원</div>
                <div class="mx-auto">
                  <div class="stepper rounded-s float-start">
                    <a href="#" class="stepper-sub"><i class="fa fa-minus color-theme opacity-40"></i></a>
                    <input type="number" min="1" max="99" value="0">
                    <a href="#" class="stepper-add"><i class="fa fa-plus color-theme opacity-40"></i></a>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>

            <div class="mb-0 mt-3">
              <div class="input-style has-borders no-icon validate-field mb-0">
                <input type="number" class="form-control validate-text" id="form_price" placeholder="(옵션) 참가비를 입력하세요.">
                <label for="form_price" class="color-highlight">참가비</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(필요 시 입력))</em>
              </div>
            </div>

            <div class="mb-0 mt-3">
              <div class="input-style has-borders no-icon validate-field mb-0">
                <input type="name" class="form-control validate-name" id="form_departure" placeholder="(옵션) 출발지를 입력하세요.">
                <label for="form_departure" class="color-highlight">출발지</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em>(필요 시 입력))</em>
              </div>
            </div>


            <div class="mb-0 mt-3">
              <div class="input-style has-borders no-icon mb-0">
                <textarea id="form7" placeholder="이곳에 메모를 작성해보세요."></textarea>
                <label for="form7" class="color-highlight">메모</label>
              </div>
            </div>

          </div>
        </div>




        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-2 mb-2">선호 사항</h4>
            <a class="color-highlight font-12 hide" style="margin-top: -30px;padding-bottom: 10px;float:right;">초기화</a>
            <div class="mb-0 mt-3">
              <div>성별</div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_gender" id="check_gender1">
                  <label class="form-check-label rounded-xl border-08" for="check_gender1">무관</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-user font-16 color-gray-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_gender" id="check_gender2">
                  <label class="form-check-label rounded-xl border-08" for="check_gender2">남자</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-male font-17 color-highlight"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_gender" id="check_gender3">
                  <label class="form-check-label rounded-xl border-08" for="check_gender3">여자</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-female font-17 color-orange-light"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_gender" id="check_gender4">
                  <label class="form-check-label rounded-xl border-08" for="check_gender4">커플</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-user-friends font-17 color-red-light"></i>
                </div>
              </div>
            </div>

            <div class="mb-0 mt-3">
            <div>나이</div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_age" id="check_age1">
                  <label class="form-check-label rounded-xl border-08" for="check_age1">무관</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-user font-16 color-gray-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_age" id="check_age2">
                  <label class="form-check-label rounded-xl border-08" for="check_age2">20대</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-child font-17 color-secondary"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_age" id="check_age3">
                  <label class="form-check-label rounded-xl border-08" for="check_age3">30대</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-hand-rock font-17 color-grass-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" value="" name="check_age" id="check_age4">
                  <label class="form-check-label rounded-xl border-08" for="check_age4">40대 이상</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-hat-cowboy-side font-17 color-brown-light"></i>
                </div>
              </div>
            </div>


            <div class="mb-0 mt-3">
              <div>다이빙</div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_diving1">
                  <label class="form-check-label rounded-xl border-08" for="check_diving1">본인케어</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-portrait font-16 color-brown-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_diving2">
                  <label class="form-check-label rounded-xl border-08" for="check_diving2">상급레벨</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-user-graduate font-16 color-secondary"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_diving3">
                  <label class="form-check-label rounded-xl border-08" for="check_diving3">사진촬영</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-camera-retro font-17 color-gray"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_diving4">
                  <label class="form-check-label rounded-xl border-08" for="check_diving4">강사포함</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-chalkboard-teacher font-17 color-gray-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_diving9">
                  <label class="form-check-label rounded-xl border-08" for="check_diving9">강사보험</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-file-contract font-17 color-yellow-light"></i>
                </div>
              </div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" name="check_training" value="" id="check_diving5">
                  <label class="form-check-label rounded-xl border-08" for="check_diving5">트레이닝</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-graduation-cap font-16 color-pink-light"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" name="check_training" value="" id="check_diving6">
                  <label class="form-check-label rounded-xl border-08" for="check_diving6">하드트레이닝</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-graduation-cap font-17 color-highlight"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" name="check_training" value="" id="check_diving7">
                  <label class="form-check-label rounded-xl border-08" for="check_diving7">펀다이빙</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-coffee font-17 color-green-light"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="radio" name="check_training" value="" id="check_diving8">
                  <label class="form-check-label rounded-xl border-08" for="check_diving8">CO<sub>2</sub>트레이닝</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-lungs font-17 color-instagram"></i>
                </div>
              </div>
            </div>

            <div class="mb-0 mt-3">
              <div>친목</div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_amity1">
                  <label class="form-check-label rounded-xl border-08" for="check_amity1">뒷풀이</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-beer font-16 color-mint-light"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_amity2">
                  <label class="form-check-label rounded-xl border-08" for="check_amity2">식사 함께</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-utensils font-17 color-pink-dark"></i>
                </div>
              </div>
            </div>

            <div class="mb-0 mt-3">
              <div>환경</div>
              <div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_env1">
                  <label class="form-check-label rounded-xl border-08" for="check_env1">개별숙박</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-bed font-16 color-brown-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_env2">
                  <label class="form-check-label rounded-xl border-08" for="check_env2">카풀가능</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-car font-17 color-magenta-dark"></i>
                </div>
                <div class="form-check interest-check">
                  <input class="form-check-input" type="checkbox" value="" id="check_env3">
                  <label class="form-check-label rounded-xl border-08" for="check_env3">센터확정</label>
                  <i class="fa fa-check-circle color-white font-18"></i>
                  <i class="fas fa-store font-17 color-blue-light"></i>
                </div>
              </div>
            </div>

            
            
            
          </div>

          <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-5">생성하기</a>
            
        </div>
    </div>
    <!-- Page content ends here-->
        
    
    <!-- Menu Schedule -->
    <div id="menu-schedule" 
         class="menu menu-box-modal rounded-m" 
         data-menu-height="350" 
         data-menu-width="350">
        <div class="menu-title">
            <h1 class="font-14">일정 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        <div class="divider divider-margins mt-3 mb-0"></div>
        <div class="content">
            <div class="row mb-1">
                <div class="input-style has-borders no-icon col-6">
                    <input type="date" value="2021-09-20" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_start" placeholder="Phone">
                    <label for="form_start" class="color-highlight">시작일</label>
                    <i class="fa fa-check disabled valid me-4 pe-3 font-12 color-green-dark"></i>
                    <i class="fa fa-check disabled invalid me-4 pe-3 font-12 color-red-dark"></i>
                </div>
                <div class="input-style has-borders no-icon col-6">
                    <input type="date" value="2021-09-20" max="2030-01-01" min="2021-09-01" class="form-control validate-text mb-0" id="form_end" placeholder="Phone">
                    <label for="form_end" class="color-highlight">종료일</label>
                    <i class="fa fa-check disabled valid me-4 pe-3 font-12 color-green-dark"></i>
                    <i class="fa fa-check disabled invalid me-4 pe-3 font-12 color-red-dark"></i>
                </div>
            </div>

            
            <vue-typeahead-bootstrap
                class="wedive-search search-dark shadow-xl border-0 bg-theme rounded-sm bottom-0 mb-4"
                v-model="query"
                :data="users"
                :serializer="item => item.name_ko"
                :screen-reader-text-serializer="item => `${item.name_ko}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event"
                :minMatchingChars="2"
                placeholder="Search Github Users"
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
            
            
        </div>
        <div class="divider divider-margins mt-1 mb-1"></div>
        <div class="content">
          <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-2">입력</a>
        </div>
    </div>


    <div id="snackbar-maxerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>최대 5개 까지의 일정만 추가할 수 있습니다.</div>


  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
var schedule_status = [0, 0, 0, 0, 0];

export default {
  name: 'HelloWorld',
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
  },
  components: {
    VueTypeaheadBootstrap
  },
  created() {
    
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
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
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
      closeSchedule: function(el_idx) {
        $("#div_schedule" + el_idx).addClass("hide");
        schedule_status[(el_idx-1)] = 0;
        if (schedule_status.includes(1) == false) {
          $("#div_empty").fadeIn(100);;
        }
      },
      addSchedule: function() {
        if (schedule_status.includes(1) == false) {
          $("#div_empty").fadeOut(100);;
          //$("#delete_schedule").removeClass("hide");
        }
        if (schedule_status.includes(0) == false) {
          var toastData = 'snackbar-maxerror';
          var notificationToast = document.getElementById(toastData);
          var notificationToast = new bootstrap.Toast(notificationToast);
          notificationToast.show();
        } else{
          for (var i=1; i<(schedule_status.length+1); i++) {
            if (schedule_status[i-1] == 0) {
              $("#div_schedule" + i).removeClass("hide");
              schedule_status[i-1] = 1;
              break;
            }
          }
          
        }
      },
      reserve_next: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);

          setTimeout(function() {
            var menuData = 'menu-reserve2';
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          },200);
      },
      reserve_finish: function() {
          setTimeout(function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          },100);
      },
      goPoint: function() {
          location.href = '/point';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ico_feature {}
.ico_feature1 {width: 44px;height: 40px;background-position: 0px 0px;}
.ico_feature2 {width: 44px;height: 40px;background-position: -45px 0px;}
.ico_feature3 {width: 44px;height: 40px;background-position: -90px 0px;}
.ico_feature4 {width: 44px;height: 40px;background-position: -135px 0px;}
.ico_feature5 {width: 44px;height: 40px;background-position: -180px 0px;}
.ico_feature6 {width: 44px;height: 40px;background-position: -225px 0px;}
.ico_feature7 {width: 44px;height: 40px;background-position: 0px -40px;}
.ico_feature8 {width: 44px;height: 40px;background-position: -45px -40px;}
.ico_feature9 {width: 44px;height: 40px;background-position: -90px -40px;}
.ico_feature10 {width: 44px;height: 40px;background-position: -135px -40px;}
.ico_feature11 {width: 44px;height: 40px;background-position: -180px -40px;}
.ico_feature12 {width: 44px;height: 40px;background-position: -225px -40px;}
.ico_feature13 {width: 44px;height: 40px;background-position: 0px -78px;}
.ico_feature14 {width: 44px;height: 40px;background-position: -45px -78px;}
.ico_feature15 {width: 44px;height: 40px;background-position: -90px -78px;}
.ico_feature16 {width: 44px;height: 40px;background-position: -135px -78px;}
.ico_feature17 {width: 44px;height: 40px;background-position: -180px -78px;}
.ico_feature18 {width: 44px;height: 40px;background-position: -225px -78px;}

.icon-course {overflow: hidden;display: block;margin-left: 11px;background-image: url(/static/images/wedive_course2.png);background-repeat: no-repeat;-webkit-background-size: 270px 118px;background-size: 270px 118px;}
.span_feature {width:66px;}
.text-urgent {color:#de5246; background-color: #ffebe9;padding: 2px 8px;border-radius:2px;}

.square-img {width: 100%;height: 0px;padding: 50% 0;background-size: 100% 100%;background-clip: border-box;box-sizing:border-box;}
.txt_box {background: #f4f4f4; border-radius: .5rem;padding: 14px 20px;}



.timeline-item .timeline-icon {top: -10px !important;}
.timeline-item-content, .timeline-item-content-full {border: none !important;background-color: transparent!important;padding: 0 !important;}
.icon-check i{top: -8px;}
.btn-wedive-next {width: 30%;float: right;margin-top: 10px;border-radius: 20px !important;margin-right: 10px;}
.point-text {overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

.border-bottom {border-bottom: 1px solid #d1d2d3 !important;}
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
.pl-10px {padding-left: 10px !important;}
.wedive-label {left: 34px !important;transform: translateX(-14px) !important;position: absolute;padding: 0px 8px !important;height: 23px;margin-top: -27px;font-size: 12px;transition: all 250ms ease;background-color: #FFF;width: auto;}
.after-tilde:after {content: '~';position: absolute;right: -5px;top: 12px;color: gray;margin-top: -4px;}
.schedule-close {text-align: right;position: absolute;right: 6px;}
</style>
