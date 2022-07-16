<template>
  <div class="">
    <div data-menu-active="nav-site"></div>
    <div class="page-content text-start transform-none" style="padding-bottom: 0px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div data-menu="schedule-suggestion" class="row p-3 wedive-search" style="margin: 0;padding: 10px 6px !important;">
                <div class="col-6 input-group wedive-calendar-input" style="width: 50%;">
                    <input class="form-control" disabled="disabled" style="border-radius: 8px;padding-left: 36px;" v-model="schedule_from"/>
                    <i class="fas fa-calendar" style="margin-top: -3px;color: gray;"></i>
                </div>
                <div class="col-6 input-group wedive-calendar-input before-at" style="width: 50%;">
                    <input class="form-control" disabled="disabled" style="border-radius: 8px;padding-left: 36px;" v-model="schedule_to"/>
                    <i class="fas fa-calendar" style="margin-top: -3px;color: gray;"></i>
                </div>
            </div>
            <div class="p-3 pb-0">
                <vue-typeahead-bootstrap
                    id="input_query"
                    v-model="query"
                    class="wedive-search disable-search-result"
                    :data="users"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="1"
                    placeholder="어디로 다이빙 가세요?"
                    inputClass="special-input-class"
                    :disabledValues="[(selecteduser ? [selecteduser.name] : [])]"
                    @input="lookupLocation"
                    style="width: 80%;display:inline-block;"
                    >
                    <template slot="suggestion" slot-scope="{ data, htmlText }">
                        <div class="d-flex align-items-center" style="position:relative !important;">
                        <div :class="''+data.type + '-tag'" style="position:relative;">
                            <div class="user-img me-2">
                                <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                    <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                    <clipPath id="clipSquircle">
                                        <use xlink:href="#shapeSquircle"/>
                                    </clipPath>
                                    </defs>
                                    <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                </svg>
                            </div>
                            <!--<img
                            class="rounded-s me-3"
                            :src="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                            style="width: 40px; height: 40px;" />-->
                        </div>
                        <span v-if="data.type == 'site'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + ' 사이트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                        <span v-else-if="data.type == 'point'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + ' 포인트</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                        <span v-else-if="data.type == 'center'" class="ml-4" style="margin-top: -20px;" v-html="'<span class=\'font-noto font-16\'>' + htmlText + '</span><span class=\'font-13 ms-2\'>(<i class=\'fa fa-star color-gray-light icon-10 text-center me-1\'></i>'+(data.adminScore/20).toFixed(1)+')</span><br/><span class=\'ellipsis\' style=\'width: calc(100% - 50px);position: absolute;margin-top:-4px;\'>' + data.description+'</span>'"></span>
                        
                        </div>
                    </template>
                </vue-typeahead-bootstrap>
                <a v-on:click="triggerSearch()" class="btn btn-m btn-full rounded-xs text-uppercase font-900 shadow-s bg-dark-dark col-3" style="width: 18%;padding: 13px 8px !important;border-radius: 8px !important;display:inline-block;margin-bottom:1px;">검색</a>
                
            </div>
            
            
            <div class="content mt-0 mb-0" style="min-height: calc(100vh - 143px);padding-bottom:40px;">
                <div v-if="searchDivings && searchDivings.length == 0" class="text-center">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="60%" style="margin-top: 50px;"/>
                    <p class="font-noto color-gray">검색결과가 없어요.</p>
                </div>
                <div v-else v-for="item in searchDivings">
                    <div v-on:click="goDiving(item)" :class="'light-border-bottom mt-3' + (item.status == 'searchable' ? '' : ' opacity-50')">
                        <div class="d-flex mb-3 position-relative">
                            <div class="align-self-center">
                                <div class="user-img me-2">
                                    <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                        <defs>
                                        <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                        <clipPath id="clipSquircle">
                                            <use xlink:href="#shapeSquircle"/>
                                        </clipPath>
                                        </defs>
                                        <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(item.diveLocation && item.diveLocation.length > 0 && item.diveLocation[0].backgroundImages && item.diveLocation[0].backgroundImages.length > 0) ? item.diveLocation[0].backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                    </svg>
                                </div>
                                <!--<img :src="(item.diveLocation && item.diveLocation.length > 0 && item.diveLocation[0].backgroundImages && item.diveLocation[0].backgroundImages.length > 0) ? item.diveLocation[0].backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-sm me-3" width="68">-->
                            </div>
                            <div class="text-start align-self-center font-noto" style="vertical-align: top;">
                                <h2 class="font-16 line-height-s mb-0 font-500">{{ item.title }}</h2>
                                <p class="color-gray font-13 mb-0 ellipsis">{{ wediveDate(item.startedAt) }} ~ {{ wediveDate(item.finishedAt) }}</p>
                                <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ (item.diveLocation && item.diveLocation.length > 0) ? item.diveLocation[0].name : '' }} ({{ wediveDivingType(item.type) }})</p>
                            </div>
                            <span class="chip chip-s bg-gray-light text-center font-400 wedive-chip color-black">{{ (item.participants.filter(x=>x.status=='joined').length+1) }}명 참석</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    </div>
    
    

    <div id="schedule-suggestion" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a href="" class="header-title color font-noto font-16">일정 선택</a>
            </div>
        </div>
        
        <div class="card rounded-0 content" style="position: relative;height: calc(100vh - 80px)">
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
                :theme="theme">
            </v-date-picker>

            <div style="position: absolute;bottom: 0;width:100%;">
                <a id="btn_schedule" class="close-menu btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-1 me-1 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled">선택</a>
            </div>
        </div>
    </div>
    <div id="search-suggestion" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a href="" class="header-title color font-noto font-16">검색</a>
            </div>
        </div>
        
        <div class="card rounded-0 content">
            <vue-typeahead-bootstrap
                id="suggestion_typeahead"
                class="wedive-search disable-search-result"
                v-model="query_place"
                :data="places"
                :serializer="item => item"
                :screen-reader-text-serializer="item => `${item}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event;enableNext2($event);"
                :minMatchingChars="1"
                placeholder="어디로 다이빙가세요?"
                inputClass="special-input-class"
                @input="lookupPlace"
                @keyup.enter="handleFire"
                >
            </vue-typeahead-bootstrap>
            <div class="content mt-0 mb-0" style="min-height: calc(100vh - 208px);padding-top:8px;padding-bottom:40px;">
                <div v-for="item in places">
                    <div class="map-box">
                        <a v-on:click="selectSuggestion(item)">
                            <div class="bx">
                                <div class="justify-content-center mb-0 text-start" style="padding-top: 2px;">
                                    <i class="fas fa-search font-16 pe-2 color-gray"></i>
                                    <span class="pb-0 mb-0 line-height-m ellipsis"> {{ item }} </span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="snackbar-info" class="snackbar-toast color-white bg-yellow-dark" data-bs-delay="2000" data-bs-autohide="true" style="z-index: 999;"><i class="fa fa-times me-3"></i>필요 시 종료일을 선택하세요.</div>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
const axios = require("axios")
var searchParams = {};

function getWediveDate(date) {
    return ((date.getMonth()+1)<10 ? "0"+(date.getMonth()+1) : (date.getMonth()+1)) + "/" + (date.getDate() < 10 ? "0"+date.getDate() : date.getDate()) +"/" + date.getFullYear();
}

export default {
  name: 'HelloWorld',
  computed: {
    attributes() {
        // Insert today's attribute
        // Insert weekend attribute
    },
  },
  components: {
    VueTypeaheadBootstrap,
  },
  watch: {
      query: function(newVal, oldVal) {
        if(localStorage.suggestionFlag && localStorage.suggestionFlag == '1') {
            localStorage.suggestionFlag = '0';
            //this.lookupPlace();
            //this.lookupLocation();
            //setTimeout(function() {
                //$("#input_query > .input-group > input").focus();
            //},200);
        } else {
            this.query_place = JSON.parse(JSON.stringify(this.query)) + "";
            this.openSuggestion();
            setTimeout(function() {
                $("#suggestion_typeahead > .input-group > input").focus();
            }, 200)
        }
      },
  },
  
  methods: {
      goDiving(item) {
          location.href = '/diving/' + item._id;
      },
      wediveDate(_val) {
          var val = new Date(_val);
          var dayList = ["일", "월", "화", "수", "목", "금", "토"];
          return ((val.getMonth()+1) < 10 ? "0" + (val.getMonth()+1) : (val.getMonth()+1)) + "." + (val.getDate()<10 ? "0" + val.getDate():val.getDate()) + "(" + dayList[val.getDay()] + ")";
      },
      wediveDivingType(val) {
          return val.join().replace('freeDiving', '프리').replace('scubaDiving', '스쿠버');
      },
      async triggerSearch() {
          // progress bar
          var preloader = document.getElementById('preloader')
          if(preloader){
            preloader.classList.remove('preloader-hide');
            preloader.classList.add('opacity-50');
          }
          var _searchParams = {};
          if (this.schedule_from != '일정 없음') _searchParams.startedAt = new Date(this.schedule_from + " 00:00:00");
          else { _searchParams.startedAt = new Date() }
          if (this.schedule_to != '일정 없음') _searchParams.finishedAt = new Date(this.schedule_to + " 23:59:59");
          if (this.query) _searchParams.query = this.query;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
            query: `
                query SearchDivings($searchParams: SearchParams, $limit: Int) {
                    searchDivings(searchParams: $searchParams, limit: $limit) {
                        diveSites {
                            name
                            uniqueName
                            backgroundImages {
                                thumbnailUrl
                            }
                        }
                        divePoints {
                            name
                            uniqueName
                            backgroundImages {
                                thumbnailUrl
                            }
                        }
                        diveCenters {
                            name
                            uniqueName
                            backgroundImages {
                                thumbnailUrl
                            }
                        }
                        title
                        description
                        _id
                        status
                        type
                        startedAt
                        finishedAt
                        interests {
                            title
                            type
                        }
                        maxPeopleNumber
                        participants {
                            name
                            birth
                            gender
                            status
                        }
                    }
                }
                `,
                variables: {
                    "limit": 10,
                    "searchParams": _searchParams
                }
            }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchDivings) {
            this.searchDivings = [];
            result.data.data.searchDivings.forEach(x => {
                x.diveLocation = [];
                x.diveSites.forEach(y => {y.type = 'site';x.diveLocation.push(y)});
                x.divePoints.forEach(y => {y.type = 'point';x.diveLocation.push(y)});
                x.diveCenters.forEach(y => {y.type = 'center';x.diveLocation.push(y)});
                this.searchDivings.push(x);
            })
        }
        if(preloader){
            preloader.classList.remove('opacity-50');
            preloader.classList.add('preloader-hide');
        }
        console.log(this.searchDivings);
      },
      enableNext2(ev) {
          this.search_img = (ev.backgroundImages && ev.backgroundImages.length>0) ? ev.backgroundImages[0].thumbnailUrl : '/static/empty.jpg';
          this.search_type=ev.type;
          this.search_loc=ev.name;
          this.search_desc=ev.description;
          this.search_adminScore=ev.adminScore;
          this.selected_id = ev._id;

          
          $("#search_typeahead").addClass("hide");
          $("#search_result").removeClass("hide");
          if(this.check_diving_scuba == true || this.check_diving_free == true) {
              $("#btn_next2").attr("disabled", false);
          } else {
            //var toastData = 'snackbar-info';
            //var notificationToast = document.getElementById(toastData);
            //var notificationToast = new bootstrap.Toast(notificationToast);
            //notificationToast.show();
          }

      },
      async lookupPlace() {
        //console.log("this.query_place = " + this.query_place);
        if (this.query_place == '') {
            this.places = [];
        } else {
            if (this.suggestions.length > 0) {
                this.places = this.suggestions.filter(x => (x && x.includes(this.query_place)));
            }
            if (this.suggestions.length > 0 || this.places.length == 0) {
                var headers = (localStorage.idToken) ? {countrycode: 'ko', idtoken: localStorage.idToken} : {countrycode: 'ko'};
                var result = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: headers,
                    data: {
                    query: `
                        query Query($query: String!) {
                           findSearchSuggestions(query: $query)
                        }
                        `,
                        variables: {
                            "query": this.query_place
                        }
                    }
                });
                if (result.data.data.findSearchSuggestions) {
                    this.places = result.data.data.findSearchSuggestions;
                }
            }
        }
      },
      removeSuggestSelected() {
          //console.log("removeSuggestSelected")
      },
      selectSuggestion(item) {
          localStorage.suggestionFlag = '1';
          this.query = item;
          document.getElementById("search-suggestion").classList.remove('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
          if (location.pathname.substring(location.pathname.lastIndexOf('/')) == '/modal') {
              history.back();
          }
      },
      handleFire() {
          localStorage.suggestionFlag = '1';
          this.query = (JSON.parse(JSON.stringify(this.query_place))+"");
          document.getElementById("search-suggestion").classList.remove('menu-active');
          document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
          this.places = [];
      },
      onRangeClick(range) {
          if (range) {
            console.log(range.start.getTime());
            console.log(range.end.getTime());
            if (range.start.getTime() == range.end.getTime()) {
                var toastData = 'snackbar-info';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
            }
            try {
                this.selectedRange.start = new Date(range.start.getTime());
                this.selectedRange.end = new Date(range.end.getTime());
                this.schedule_from = getWediveDate(this.selectedRange.start);
                this.schedule_to = getWediveDate(this.selectedRange.end);
                $("#btn_schedule").attr("disabled", false);
            } catch(e) {console.log(e)}
          }
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
      openSuggestion() {
            var menuData = "search-suggestion";
            document.getElementById(menuData).classList.add('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
            // jjangs : open menu
            if(window.location.href.split('/').pop() != 'modal'){
                window.history.pushState({}, 'modal', window.location.pathname + '/modal');
            }
            
            var menu = document.getElementById(menuData);
            var menuEffect = menu.getAttribute('data-menu-effect');
            var menuLeft = menu.classList.contains('menu-box-left');
            var menuRight = menu.classList.contains('menu-box-right');
            var menuTop = menu.classList.contains('menu-box-top');
            var menuBottom = menu.classList.contains('menu-box-bottom');
            var menuWidth = menu.offsetWidth;
            var menuHeight = menu.offsetHeight;
            var menuTimeout = menu.getAttribute('data-menu-hide');
            if(menuTimeout){
                setTimeout(function(){
                    document.getElementById(menuData).classList.remove('menu-active');
                    document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
                },menuTimeout)
            }
            if(menuEffect === "menu-push"){
                var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth+"px)"}}
                if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth+"px)"}}
                if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight+"px)"}}
                if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight+"px)"}}
            }
            if(menuEffect === "menu-parallax"){
                var menuWidth = document.getElementById(menuData).getAttribute('data-menu-width');
                if(menuLeft){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX("+menuWidth/10+"px)"}}
                if(menuRight){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+menuWidth/10+"px)"}}
                if(menuBottom){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY(-"+menuHeight/5+"px)"}}
                if(menuTop){for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateY("+menuHeight/5+"px)"}}
            }
      },
      async lookupLocation() {
        // progress bar
        /*var preloader = document.getElementById('preloader')
        if(preloader){
            preloader.classList.remove('preloader-hide');
            preloader.classList.add('opacity-50');
        }
        this.users = [];
        var query = this.query;
        var _searchParams = JSON.parse(JSON.stringify(searchParams));
        if (_searchParams.adminScore) _searchParams.adminScore *= 20;
        if (_searchParams.waterEnvironmentScore) _searchParams.waterEnvironmentScore *= 20;
        if (_searchParams.eyeSightScore) _searchParams.eyeSightScore *= 20;
        _searchParams.query = query;
        
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
            query: `
                query SearchPlaces($searchParams: SearchParams, $limit: Int) {
                    searchPlaces(searchParams: $searchParams, limit: $limit) {
                        __typename
                        ... on DiveSite {
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
                            interests {
                                title
                                type
                            }
                        }
                        ... on DivePoint {
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
                            interests {
                                title
                                type
                            }
                        }
                        ... on DiveCenter {
                            _id
                            uniqueName
                            name
                            description
                            divingType
                            adminScore
                            latitude
                            longitude
                            institutionTypes
                            backgroundImages {
                                thumbnailUrl
                            }
                            interests {
                                title
                                type
                            }
                        }
                        address
                        latitude
                        longitude
                        countryCode
                    }
                }
                `,
                variables: {
                    "limit": 10,
                    "searchParams": _searchParams
                }
            }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchPlaces) {
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => {item.type='site';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => {item.type='point';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => {item.type='center';result_list.push(item)});
        }
        //if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        //if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        //if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.users = result_list;
        if(preloader){
            preloader.classList.remove('opacity-50');
            preloader.classList.add('preloader-hide');
        }*/
      },
  },
  mounted() {
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    setTimeout(function() {
        $("#input_query > .input-group > input").focus();
    },500);
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
        query_place: '',
        selecteduser: null,
        users: [],
        places: [],
        searchDivings: null,
        suggestSelectedList: [],
        suggestions : (localStorage.suggestion ? JSON.parse(localStorage.suggestion) : []),
        selectedDay: null,
        selectedRange: {},
        schedule_from: '일정 없음',
        schedule_to: '일정 없음',
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
  }
  
}
</script>


<style scoped>
#menu_condition:before {width: 12px;height: 13px;background-position: 0px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_condition.on:before {width: 12px;height: 13px;background-position: -10px 0px;content: '';margin-right: 5px;vertical-align: -1px;}
#menu_sort:before {width: 14px;height: 11px;background-position: -35px 0px;content: '';margin-right: 5px;}
#menu_sort.on:before {width: 14px;height: 11px;background-position: -49px 0px;content: '';margin-right: 5px;}
#menu_map:before {width: 10px;height: 15px;background-position: -225px 0px;content: '';margin-right: 5px;vertical-align: -2px;}
#menu_map.on:before {width: 14px;height: 11px;background-position: -235px 0px;content: '';margin-right: 5px;}
.center_list_tab {position: relative;display: block;padding-top: 2px;text-align: center;line-height: 38px;background-color: #f7f7f9;color: #333;font-size: 15px;width: 100%;border-left: 1px solid #eaeaec;}
.center_menu {justify-content: space-around;border-top: 1px solid #e1e4e7;border-bottom: 1px solid #e1e4e7;}
.wedive-action {position: fixed;background-color: #1d397c;height:36px;border-radius: 18px;left: 50%!important;bottom: 90px;-webkit-box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);box-shadow: 3px 2px 6px 0 rgb(0 0 0 / 20%);-webkit-transform: translateX(-50%);transform: translateX(-50%);}
.wedive-action:before {display: block;clear: both;content: "";position: absolute;top: 9px;left: 50%;width: 1px;height: 16px;background-color: #fff;}
.action-filter {display: block;float: left;width: 84px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-filter:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/icon_filter.png);text-indent: -9999px;vertical-align: middle;}
.action-map {position: relative;float: right;width: 74px;height: 35px;font-size: 14px;color: #d1d2d3;line-height: 35px;}
.action-map:before {clear: both;content: "";display: inline-block;margin-right: 6px;width: 14px;height: 14px;background-size: 14px 14px;background-repeat: no-repeat;background-image: url(https://d34l91104zg4p3.cloudfront.net/assets/icon_map.png);text-indent: -9999px;vertical-align: middle;}
#filter_list {white-space: nowrap;overflow-x: scroll;height: 32px;}
.transform-none {transform: inherit !important;};
.DiveSite-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #3f474c;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}
.DivePoint-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #3cb5a0;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}
.DiveCenter-tag:before {content: '';width: 0px;height: 0px;border-bottom: 16px solid #4687c1;border-left: 16px solid rgba(0,0,0,0);position: absolute;bottom: 0;right: 0px;}
.wedive-calendar-input  i {position: absolute;left: 0px;line-height: 52px;padding: 0px 15px 0px 30px;}
.before-at:before {content: '~';position:absolute;left:3px;top:3px;left: -2px;top: 10px;color: gray;}
.btn[disabled="disabled"] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.map_box_cate {padding: 2px 6px;margin-bottom:2px;margin-right:6px;border-radius:4px;}
.DiveSite .map_box_cate {border: 1px solid #3f474c;color:#3f474c}
.DivePoint .map_box_cate {border: 1px solid #3cb5a0;color:#3cb5a0}
.DiveCenter .map_box_cate {border: 1px solid #4687c1;color:#4687c1}


.wedive-chip {font-family: 'Noto Sans Korean';border-radius:6px !important;padding: 0 8px;margin:0 !important;position:absolute;right:0px;bottom:0px;}
.wedive-chip i {width: auto;line-height: inherit;margin-right: 2px;}
.light-border-bottom {border-bottom: 1px solid #dee2e6;}

.user-img {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 70px;
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