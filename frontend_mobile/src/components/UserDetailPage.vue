<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">사용자 프로필</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="header-icon header-icon-4"><img src="/static/images/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="/static/images/assets/empty_list2.jpg" width="80%" style="margin-top:100px;"/>
            <p class="font-noto">앗! 찾을 수 없는 사용자 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>

    <div :class="'page-content pb-0' + (is_empty ? ' hide' : ' ')">
        <div class="card mb-0 border-bottom" style="margin-top:50px; z-index:1">
            <div class="content mt-3 pb-2 mb-0">
                <div class="gallery gallery-filter inline-block" style="width:66px;height:45px;">
                    <a :href="(userData.profileImages && userData.profileImages.length>0) ? userData.profileImages[0].thumbnailUrl : ('/static/images/assets/user_empty_'+((userData.gender)?userData.gender:'m')+'.png')" data-gallery="gallery-image" class="center_image filtr-item" :title="userData.nickName" data-category="user" style="width:60px;height:60px;">
                        <img class="circular_image" :src="(userData.profileImages && userData.profileImages.length>0) ? userData.profileImages[0].thumbnailUrl : ('/static/images/assets/user_empty_'+((userData.gender)?userData.gender:'m')+'.png')" width="50" style="vertical-align: top;"/>
                    </a>
                </div>
                
                <div class="inline-block font-noto">
                    <h5 class="mb-0 font-500">{{ userData.nickName }}</h5>
                    <p class="mb-0 font-12 color-gray">{{ userData.levelShow }}</p>
                </div>
            </div>
            <div v-if="userData._id != user_id" class="row m-0 mt-1 ps-2 pe-2">
                <div v-on:click="clickChat()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img src="/static/images/assets/ico_chat.png" height="20"/></span>
                </div>
                <div v-on:click="clickLike()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img :src="'/static/images/assets/'+like_img+'.png'" height="20"/>{{ userData.likes }}</span>
                </div>
                <div v-on:click="clickSubscribe()" class="col-4 p-1">
                    <span class="btn btn-border btn-m btn-full text-uppercase font-900 border-gray-dark color-black bg-theme" style="padding: 8px 0 !important;"><img :src="'/static/images/assets/'+subscribe_img+'.png'" height="20"/></span>
                </div>
            </div>
            <div class="content pb-3">
                <h2 class="font-15 font-700 mb-1">매너수심</h2>
                <div class="text-end">
                    <div class="inline-block text-start">
                        <div class="font-noto font-600 font-16 me-1" style="color:#cd5b3c;">18m</div>
                    </div>
                    <img class="inline-block me-2" src="/static/images/assets/heart.png" width="26" style="vertical-align: top;"/>
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



        <div v-if="userData.scubaLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">스쿠바다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="/static/images/assets/award1.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">SCUBA DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ userData.scubaLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ userData.scubaLicenseType }}</p>
                    </div>
                    <img :src="(userData.scubaLicenseType)?'/static/images/agency/logo_'+userData.scubaLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div v-if="userData.freeLicenseType" class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-1">프리다이빙</h2>
                <div class="evaluation p-3" style="position: relative;">
                    <img class="inline-block ms-1 me-1" src="/static/images/assets/award2.png" height="80" style="vertical-align: top;"/>
                    <div class="inline-block">
                        <p class="mb-0 font-noto font-13 color-gray mb-1">FREE DIVING LICENSE</p>
                        <p class="mb-0 font-noto font-20 font-500">{{ userData.freeLevelShow }} 자격증</p>
                        <p class="mb-0 font-noto font-12 font-400" style="color: #c1c2c3">BY {{ userData.freeLicenseType }}</p>
                    </div>
                    <img :src="(userData.freeLicenseType)?'/static/images/agency/logo_'+userData.freeLicenseType.toLowerCase()+'.svg':''" height="20" style="position: absolute;right: 10px; bottom:10px;"/>
                </div>
            </div>
        </div>

        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">호스트 참여횟수 {{ userData.divingHostCount }}회</h2>
            </div>
        </div>
        <div class="card mb-0 border-bottom" style="z-index:1;">
            <div class="content pb-0">
                <h2 class="font-15 font-700 mb-0">게스트 참여횟수 {{ userData.divingParticipantCount }}회</h2>
            </div>
        </div>
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




    </div>
    <!-- End of Page Content--> 
    
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
const axios = require("axios")
const cities = [{ 'code': 'OTT', 'city': 'OTTAWA', 'country': 'CANADA', 'lat': '23.10', 'lon': '120.34' }, { 'code': 'BSB', 'city': 'BRASILIA', 'country': 'BRAZIL', 'lat': '-32.85', 'lon': '133.30' }, { 'code': 'DEL', 'city': 'DELHI', 'country': 'INDIA', 'lat': '4.71', 'lon': '-127.57' }, { 'code': 'CMX', 'city': 'CIDADE DO MÉXICO', 'country': 'MÉXICO', 'lat': '0.42', 'lon': '93.19' }, { 'code': 'SID', 'city': 'SIDNEY', 'country': 'AUSTRALIA', 'lat': '-48.38', 'lon': '-71.71' }, { 'code': 'TOK', 'city': 'TOQUIO', 'country': 'JAPÃO', 'lat': '17.34', 'lon': '-81.73' }, { 'code': 'CCA', 'city': 'CIDADE DO CABO', 'country': 'AFRICA DO SUL', 'lat': '-43.20', 'lon': '-171.97' }, { 'code': 'CMP', 'city': 'CAMPO GRANDE', 'country': 'BRASIL', 'lat': '-36.15', 'lon': '130.72' }, { 'code': 'PAR', 'city': 'PARIS', 'country': 'FRANÇA', 'lat': '22.19', 'lon': '174.27' }, { 'code': 'NOY', 'city': 'NOVA YORK', 'country': 'USA', 'lat': '11.23', 'lon': '112.96' }]

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
                variables: {
                    id: to.params.id
                }

            }
        });
        if (result && result.data && result.data.data && result.data.data.getUserById) {
            var _id = (result.data.data.getUserById.profileImages && result.data.data.getUserById.profileImages.length > 0) ? result.data.data.getUserById.profileImages[0]._id : '';
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
                    result.data.data.getUserById.profileImages[0].thumbnailUrl = result_image.data.data.getImageUrlsByIds[0]
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
                        "targetType": "user"
                    }
                }
            });
        }

        var ret = null;
        if (result && result.data && result.data.data && result.data.data.getUserById) {ret = result.data.data.getUserById;}
        
        next(vm => {vm.setData(ret)});
    } else {
        location.href = "/";
    }
  },
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
    document.getElementById("footer-bar").classList.add("hide");
    $("body").css("background-color", "white");
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
        $(".page-title").hide();
        $(".page-title-clear").hide();
        $(".header-fixed").hide();
    }
    $("#footer-bar").hide();
    setTimeout(function() {
        $(".gallery-filter").css("width", "66px");
        $(".gallery-filter").css("height", "45px");
        $(".gallery-filter").css("display", "inline-block");
    },1500);
    

  },
  components: {
    StarRating
  },
  data () {
    return {
        map: null,
        userData: {},
        locationData: {},
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        review_detail: '',
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
            const app = this,
                circles = this.g.selectAll('circle')
                    .data(cities)
                    .enter()
                    .append('a')
                    .attr('xlink:href', d => `https://www.google.com/search?q=${d.city}`)
                    .append('circle')
                    .attr('cx', d => this.projection([d.lon, d.lat])[0])
                    .attr('cy', d => this.projection([d.lon, d.lat])[1])
                    .attr('r', 5)
                    .style('fill', 'red')

            this.drag_handler = d3.drag()
                .on('start', this.drag_start)
                .on('drag', (d, i, a) => this.drag_drag(d, i, a))

            this.drag_handler(circles)
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
            const userId = this.userData.uid;
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
      setData(_userData) {
          if (_userData == null) {
              this.is_empty = true;
          } else {
            this.userData = _userData;
            // 다이버 레벨 보여주기
            if (_userData.isUserLike) this.like_img = 'ico_heart2';
            if (_userData.isUserSubscribe) this.subscribe_img = 'ico_subscribe2';
            this.userData.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사", "위다이브 컨시어지"];
            var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
            var s_lvl = parseInt(this.userData.scubaLicenseLevel);
            var f_lvl = parseInt(this.userData.freeLicenseLevel);
            this.userData.scubaLevelShow = (s_lvl>0) ? scuba_level[s_lvl] : "";
            this.userData.freeLevelShow = (f_lvl>0) ? free_level[f_lvl] : "";
            if (s_lvl > f_lvl) {
                this.userData.levelShow = (s_lvl>0) ? "스쿠바 " + scuba_level[s_lvl] : this.userData.levelShow;
            } else {
                this.userData.levelShow = (f_lvl>0) ? "프리 " + free_level[f_lvl] : this.userData.levelShow;
            }
            this.userData.levelShow += " 다이버";
            if(s_lvl>5) this.userData.levelShow = scuba_level[s_lvl];
            
            
          }
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);
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
                            _id
                            type
                            chatUsers {
                                _id
                                uid
                                name
                            }
                        }
                    }
                    `,
                    variables: {
                    }

                }
            });

            var roomList = result.data.data.getJoinedRoomList;
            const userId = this.userData.uid;
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
            const targetId = this.userData._id;
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
                this.userData.likes = ((this.userData.likes==null)?0:this.userData.likes)+1;
            } else if (result && result.data && result.data.data && result.data.data.like == false) {
                this.like_img = 'ico_heart';
                this.userData.likes = this.userData.likes - 1;
            }
          }
      },
      async clickSubscribe() {
          if (localStorage.idToken) {
            const targetId = this.userData._id;
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
.inline-block {display: inline-block;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 130px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;width:100%;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}

.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: steelblue;
}
</style>
