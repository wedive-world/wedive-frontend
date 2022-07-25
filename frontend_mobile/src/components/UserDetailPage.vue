<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">사용자 프로필</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="font-16 header-icon header-icon-4"><img src="https://d34l91104zg4p3.cloudfront.net/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_list2.jpg" width="80%" style="margin-top:100px;"/>
            <p class="font-noto">앗! 찾을 수 없는 사용자 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>

    <div :class="'page-content pb-0' + (is_empty ? ' hide' : ' ')">
        <div class="card mb-0 border-bottom" style="margin-top:50px; z-index:1">
            <div class="content mt-3 pb-2 mb-0" style="position: relative;">
                <div class="gallery gallery-filter inline-block" style="width:66px !important;padding:0 !important;">
                    <a :href="(getUserById.profileImages && getUserById.profileImages.length>0) ? getUserById.profileImages[0].thumbnailUrl : ('https://d34l91104zg4p3.cloudfront.net/assets/user_empty_'+((getUserById.gender)?getUserById.gender:'m')+'.png')" data-gallery="gallery-image" class="center_image filtr-item" :title="getUserById.nickName" data-category="user" style="width:60px;height:60px;">
                        <div class="user-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(getUserById.profileImages && getUserById.profileImages.length>0) ? getUserById.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </a>
                </div>
                
                <div class="font-noto" style="position: absolute;top:10px;left:74px;">
                    <h5 class="mb-0 font-500">{{ getUserById.nickName }}</h5>
                    <p class="mb-0 font-12 color-gray">{{ getUserById.levelShow }}</p>
                </div>
            </div>
            <div v-if="getUserById._id != user_id" class="row m-0 mt-1 ps-2 pe-2">
                <div v-on:click="clickChat()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/ico_chat.png" height="20"/></span>
                </div>
                <div v-on:click="clickLike()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+like_img+'.png'" height="20"/>{{ getUserById.likes }}</span>
                </div>
                <div v-on:click="clickSubscribe()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img :src="'https://d34l91104zg4p3.cloudfront.net/assets/'+subscribe_img+'.png'" height="20"/></span>
                </div>
            </div>
            <div class="content pb-3">
                <h2 class="font-15 font-700 mb-1">매너수심</h2>
                <div class="text-end">
                    <div class="inline-block text-start">
                        <div class="font-noto font-600 font-16 me-1" style="color:#cd5b3c;">18m</div>
                    </div>
                    <img class="inline-block me-2" src="https://d34l91104zg4p3.cloudfront.net/assets/heart.png" width="26" style="vertical-align: top;"/>
                </div>
                <div class="progress rounded-l wedive-deep" style="height:8px">
                    <div class="progress-bar bg-heart text-start ps-3 color-white" 
                         role="progressbar" style="width: 18%" 
                         aria-valuenow="10" aria-valuemin="0" 
                         aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>



        <div v-if="getUserById.scubaLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">스쿠바다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/award1.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">SCUBA DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ getUserById.scubaLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ getUserById.scubaLicenseType }}</p>
                    </div>
                    <img :src="(getUserById.scubaLicenseType)?'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+getUserById.scubaLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div v-if="getUserById.freeLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">프리다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/award2.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">FREE DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ getUserById.freeLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ getUserById.freeLicenseType }}</p>
                    </div>
                    <img :src="(getUserById.freeLicenseType)?'https://d34l91104zg4p3.cloudfront.net/agency/logo_'+getUserById.freeLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">호스트 참여횟수 {{ getUserById.divingHostCount }}회</h2>
            </div>
        </div>
        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">게스트 참여횟수 {{ getUserById.divingParticipantCount }}회</h2>
            </div>
        </div>
        <a data-menu="menu-report">
            <div class="card mb-0 border-bottom" style="z-index:1;">
                <div class="content pb-0">
                    <h2 class="font-15 font-700 mb-0">이 사용자 신고하기</h2>
                </div>
            </div>
        </a>
        <div id="map"></div>
        
    </div>

    <!-- DM 팝업 -->
    <div id="menu-dm" 
         class="menu menu-box-modal" 
         data-menu-height="300" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">메시지 전송</h4>
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



    </div>
    <!-- End of Page Content--> 
    
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
import gql from 'graphql-tag'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  async mounted() {
    let script = document.createElement('script')
    script.onload = () => {
        this.drawMap();
        const zoom = d3.zoom()
                        .scaleExtent([0.1, 10]) //zoom limit
                        .on('zoom', () => {
                            this.g.style('stroke-width', `${1.5 / d3.event.transform.k}px`)
                            this.g.attr('transform', d3.event.transform) // updated for d3 v4
                        })

                    this.svg.call(zoom)
                        .call(zoom.transform, d3.zoomIdentity.translate(0, 0).scale(0.46)) //initial size
                        .append('svg:g')
                        .attr('transform', 'translate(100,50) scale(.5,.5)');
    }
    script.setAttribute('src', 'https://d3js.org/d3.v4.min.js')
    document.head.appendChild(script);

    $(".page-title").hide();
    $(".page-title-clear").hide();
    $(".header-auto-show").hide();
    try{
        document.getElementById("footer-bar").classList.add("hide");
    } catch (e) {

    }
    $("body").css("background-color", "white");
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 1000);
    

  },
  components: {
    StarRating
  },
  apollo: {
    getUserById: {
        query:gql `
            query Query($id: ID!) {
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
        variables() {
            return {
                id: this.param_id
            }
        },
        async result() {
            if (this.getUserById) {
                var _id = (this.getUserById.profileImages && this.getUserById.profileImages.length > 0) ? this.getUserById.profileImages[0]._id : '';
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
                            ids: [_id],
                            widths: [720]
                        }

                    }
                    });
                    if (result_image.data.data.getImageUrlsByIds) {
                        this.getUserById.profileImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[0]
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
                            "targetId": this.param_id,
                            "targetType": "user"
                        }
                    }
                });
            }

            /////////////////////////////////////////////////////////
            // 다이버 레벨 보여주기
            if (this.getUserById.isUserLike) this.like_img = 'ico_heart2';
            if (this.getUserById.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
            this.getUserById.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
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

            // divingHistoryLocations 중복제거
            var temp_arr = new Array();
            this.getUserById.divingHistoryLocations.forEach(x => {if (x.length > 1) temp_arr.push(x[0] + "/" + x[1])});
            var set = new Set(temp_arr);
            var uniqueArr = [...set];
            var temp_arr2 = new Array(); 
            
            
            uniqueArr.forEach(x => {var tmp = x.split("/");var lat = (-934.98706532366 + (53.49 * parseFloat(tmp[0])))/56.143819846822;var lng = (6903.1396614152 - (106.225 * parseFloat(tmp[1])))/97.194178186786;temp_arr2.push({ 'country': '', 'lon': lng.toFixed(5), 'lat': lat.toFixed(5) })});
            this.getUserById.divingHistoryLocations = temp_arr2;
        }
    }
  },
  data () {
    return {
        param_id: this.$route.params.id,
        map: null,
        getUserById: {},
        locationData: {},
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        is_empty: false,
        dm_text: '',
        like_img: 'ico_heart',
        subscribe_img: 'ico_subscribe',
        user_id: localStorage.userId,

        background: 'https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg',
        width: 960,
        height: 300,
        start_x: null,
        start_y: null,
        projection: null,
        scale: 200,
        svg: null,
        path: null,
        g: null,
        drag_handler: null,
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
                targetId: this.getUserById._id,
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
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      async viewUserImage(profileImages) {
          if ($("#userProfileImage").hasClass("large-image") == false) {
            var _id = (profileImages && profileImages.length > 0) ? profileImages[0]._id : '';
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
                        ids: [_id],
                        widths: [720]
                    }

                }
                });
                if (result_image.data.data.getImageUrlsByIds) {
                    $("#userProfileImage").attr("src", result_image.data.data.getImageUrlsByIds[0]);
                    $("#userProfileImage").addClass("large-image");
                }
          }
      },
      async drawMap() {
        const divWidth = document.getElementById("map").clientWidth;

        this.projection = d3.geoMercator()
            .center([0, 5])
            .scale(this.scale)
            .rotate([-180, 0])
        this.svg = d3.select('#map').append('svg:svg')
            .attr('width', divWidth)
            .attr('height', this.height)
        this.path = d3.geoPath()
            .projection(this.projection),
        this.g = this.svg.append('g')

        this.g.append('image')
            .attr('xlink:href', this.background)
            .append('path')
            .attr('d', this.path)
        this.request()

      },
      request() {
            /*console.log(this.getUserById.divingHistoryLocations);
            const app = this,
                circles = this.g.selectAll('circle')
                    .data(this.getUserById.divingHistoryLocations)
                    .enter()
                    .append('a')
                    .attr('xlink:href', d => `https://www.google.com/search?q=${d.country}`)
                    .append('circle')
                    .attr('cx', d => this.projection([d.lon, d.lat])[0])
                    .attr('cy', d => this.projection([d.lon, d.lat])[1])
                    .attr('r', 5)
                    .style('fill', 'red')

            this.drag_handler = d3.drag()
                .on('start', this.drag_start)
                .on('drag', (d, i, a) => this.drag_drag(d, i, a))

            this.drag_handler(circles)*/
        },
        drag_start() {
            this.start_x = +d3.event.x
            this.start_y = +d3.event.y
        },
        drag_drag(d, i, a) {
            console.log(
                'lon x lat', this.projection.invert([d3.event.x, d3.event.y])
            )
            d3.select(a[i])
                .attr('cx', d.x = d3.event.x).attr('cy', d.y = d3.event.y)
        },
      async sendDirectMessage() {
        if (localStorage.idToken) {
            const message = this.dm_text;
            const userId = this.getUserById.uid;
            var result = await axios({
                url: 'https://chat.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                    mutation Mutation($userId: String!, $input: String!) {
                        postMessageToUser(userId: $userId, input: $input) {
                            _id
                            text
                        }
                    }
                    `,
                    variables: {
                        "userId": userId,
                        "input": message
                    }

                }
            });
            
            this.sendText = '';
            var ret = (result.data && result.data.data && result.data.data.getJoinedRoomList) ? result.data.data.getJoinedRoomList : null
        }
      },
      showReivewModal() {
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
      async clickChat() {
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
                    `,
                    variables: {
                    }

                }
            });

            var roomList = result.data.data.getJoinedRoomList;
            const userId = this.getUserById.uid;
            roomList.forEach(room => {
                if (room.type=='direct') {
                    var chatroom = room.chatUsers.filter(user => user.uid == userId);
                    if (chatroom.length > 0) {
                        console.log(room)
                        location.href = '/chat/' + room._id;
                    }
                }
            });



            // 없는경우,
            console.log("aa");
                
            /*var result = await axios({
                url: 'https://chat.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                    mutation Mutation($name: String!, $description: String!) {
                        createRoom(name: $name, description: $description) {
                            _id
                        }
                    }
                    `,
                    variables: {
                        "name": userId,
                        "description": ''
                    }

                }
            });*/
          }
      },
      async clickLike() {
          if (localStorage.idToken) {
            const targetId = this.getUserById._id;
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
                        "targetType": "user"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.like == true) {
                this.like_img = 'ico_heart2';
                this.getUserById.likes = ((this.getUserById.likes==null)?0:this.getUserById.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.getUserById.likes = this.getUserById.likes - 1;
            }
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken) {
            const targetId = this.getUserById._id;
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
                        "targetType": "user"
                    }
                }
            });
            if (result && result.data && result.data.data && result.data.data.subscribe == true) {
                this.subscribe_img = 'ico_subscribe2';
            } else if (result && result.data && result.data.data && result.data.data.subscribe == false) {
                this.subscribe_img = 'ico_subscribe';
            }
          }
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline-block {display: inline-block !important;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 130px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;width:100%;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
.state {fill: #ccc;stroke: #fff;}
.state:hover {fill: steelblue;}

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
.gallery-filter > a {padding: 0 !important;}
</style>
