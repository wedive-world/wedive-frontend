<template>
  <div class="">
    <div data-menu-active="nav-chat"></div>
    <div v-if="idToken == null || nickName == null" class="card card-style ms-0 me-0 rounded-0 text-center mb-0" style="height: calc(100vh - 58px);display:block;">
        <img src="/static/images/assets/empty_message.jpg" width="60%" style="margin-top: 25%;" />
        <p class="color-gray mb-2">{{ login_word }}이 필요합니다.</p>

        <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
    </div>
    <div v-else-if="getJoinedRoomList.length == 0" class="card card-style ms-0 me-0 rounded-0 text-center mb-0" style="height: calc(100vh - 58px);display:block;">
        <img src="/static/images/assets/empty_message.jpg" width="60%" style="margin-top: 25%;" />
        <p class="color-gray mb-2">진행중인 대화가 없습니다.</p>
    </div>
    <div v-else class="card card-style ms-0 me-0 rounded-0 mb-0" style="min-height:calc(100vh - 101px)">
        <div class="content mt-0 mb-0">
            <a v-for="chat in getJoinedRoomList" :href="'/chat/'+chat._id" class="d-block border-bottom pt-2" style="position:relative;">
                <div v-if="chat.usersCount == 1" class="p-relative d-inline-block w-60 mb-2">
                    <div v-for="user in chat.chatUsers" class="user-img">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'/static/images/assets/chat.gif'"/>
                        </svg>
                    </div>
                </div>
                <div v-else-if="chat.usersCount == 2" class="p-relative d-inline-block w-60 mb-2">
                    <div v-for="user in chat.chatUsers.filter(user=>user._id != uid)" class="user-img">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'/static/images/assets/chat.gif'"/>
                        </svg>
                    </div>
                </div>
                <div v-else-if="chat.usersCount == 3" class="p-relative d-inline-block w-60 mb-2">
                    <div class="user-img img-sm">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/user/jang.jpg"/>
                        </svg>
                    </div>
                    <div class="user-img img-sm img-sm-rb">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/user/song.jpg"/>
                        </svg>
                    </div>
                </div>
                <div v-else-if="chat.usersCount > 3" class="p-relative d-inline-block w-60 mb-2">
                    <div class="user-img img-xs">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/user/jang.jpg"/>
                        </svg>
                    </div>
                    <div class="user-img img-xs img-xs-rt">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/user/yoon.jpg"/>
                        </svg>
                    </div>
                    <div class="user-img img-xs img-xs-lb">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/user/song.jpg"/>
                        </svg>
                    </div>
                    <div class="user-img img-xs img-xs-rb">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/assets/ico_wedive_d.png"/>
                        </svg>
                    </div>
                </div>
                <div class="ms-2 d-inline-block v-align-top">
                    <h5 class="font-15 font-600 mb-0" v-html="chat.chatUsers.filter(user=>user._id != uid).map(user => {return user.name}).join()"></h5>
                    <p class="line-height-s opacity-60 font-13 ellipsis2" style="max-width: calc(100vw - 172px);">{{ (chat.lastChatMessage && chat.lastChatMessage.text)?(chat.lastChatMessage.text.includes('[[')&&chat.lastChatMessage.text.includes(']]')&&chat.lastChatMessage.text.includes('emoji|')?'이모티콘':chat.lastChatMessage.text): ''}}</p>
                </div>
                <div class="latest">{{ chat.lastChatMessage ? timeForToday(chat.lastChatMessage.createdAt) :  timeForToday(chat.createdAt)}}</div>
                <div v-if="chat.unread > 0" class="unread">{{ (chat.unread>999) ? 999 : chat.unread }}</div>
            </a>
            
            
        </div>
    </div>



    <div id="chat-add" 
         class="menu menu-box-bottom menu-box-bottom-full rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createChat" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((chatSelectedList.length==0) ? 'color-gray' : 'color-theme')"><span v-if="chatSelectedList.length> 0" class="color-highlight font-600 me-2">{{chatSelectedList.length}}</span>확인</a>
                <a href="" class="header-title color font-noto font-16">대화상대 초대</a>
            </div>
        </div>
        
        <div class="card rounded-0 content">
            <vue-typeahead-bootstrap
                id="search_typeahead"
                class="wedive-search"
                v-model="query"
                :data="users"
                :serializer="item => item.nickName"
                :screen-reader-text-serializer="item => `${item.nickName}`"
                highlightClass="special-highlight-class"
                @hit="selecteduser = $event;enableNext2($event);"
                :minMatchingChars="1"
                placeholder="사용자 닉네임"
                inputClass="special-input-class"
                @input="lookupUser"
                >
                <template slot="suggestion" slot-scope="{ data, htmlText }">
                    <div class="d-flex align-items-center" style="position:relative !important;">
                    <div class="">
                        <img
                        class="rounded-s me-3"
                        :src="(data.profileImages && data.profileImages.length>0) ? data.profileImages[0].thumbnailUrl : '/static/images/assets/chat.gif'"
                        style="width: 50px; height: 50px;object-fit:cover;" />
                    </div>
                    <span class="ml-4" style="">
                        <p class="font-noto font-16 mb-0">{{ data.nickName }}</p>
                        <p class="font-13 mb-0 color-gray">{{ getDiverLevel(data.freeLicenseLevel, data.scubaLicenseLevel) }}</p>
                    </span>
                    
                    </div>
                </template>
            </vue-typeahead-bootstrap>
            <div class="m-2">
                <div v-for="user in chatSelectedList" class=" border-bottom pt-2 pb-2">
                    <div class="d-flex align-items-center" style="position:relative !important;">
                        <div class="">
                            <img
                            class="rounded-s me-3"
                            :src="(user.profileImages && user.profileImages.length>0) ? user.profileImages[0].thumbnailUrl : '/static/images/assets/chat.gif'"
                            style="width: 50px; height: 50px;object-fit:cover;" />
                        </div>
                        <span class="ml-4" style="">
                            <p class="font-noto font-16 mb-0">{{ user.nickName }}</p>
                            <p class="font-13 mb-0 color-gray">{{ getDiverLevel(user.freeLicenseLevel, user.scubaLicenseLevel) }}</p>
                        </span>
                        <i v-on:click="removeChatSelected(user)" class="wedive_icoset wedive_icoset_close" style="position: absolute;right:0px;margin:8px;"></i>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  </div>
</template>
<script>
const axios = require("axios")
import gql from 'graphql-tag'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged  } from "firebase/auth";
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

var today = new Date();

export default {
  name: 'HelloWorld',
  async mounted() {
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
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
  destroyed () {
    
  },
  data () {
    return {
        getJoinedRoomList: [],
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        uid: localStorage.uid,
        query: '',
        selecteduser: null,
        users: [],
        chatSelectedList: [],
    }
  }, 
  apollo: {
      getJoinedRoomList: gql `
        query {
            getJoinedRoomList {
                _id
                type
                name
                lastMessageAt
                numOfmessages
                unread
                createdAt
                chatUsers {
                _id
                name
                avatarOrigin
                }
                usersCount
                owner {
                name
                avatarOrigin
                }
                lastChatMessage {
                text
                author {
                    name
                }
                createdAt
                }
            }
        }
        `,
  },
  methods: {
    timeForToday(value) {
        const timeValue = new Date(value);
        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        else if (betweenTime < 6) {
            return `${betweenTime}분전`;
        }
        else if (today.getMonth() == timeValue.getMonth() && today.getDate() == timeValue.getDate()) {
            var hour = timeValue.getHours();
            if (hour < 12) hour = "오전 " + hour
            else hour = "오후 " + (hour-12);
            return hour + ":" + timeValue.getMinutes();
        }
        else {
            return (timeValue.getMonth()+1) + "월 " + timeValue.getDate() + "일";
        }
        
        return `${Math.floor(betweenTimeDay / 365)}년전`;
    },
    getDiverLevel(freeLicenseLevel, scubaLicenseLevel) {
        var levelShow = '초보';
        var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사"];
        var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];

        var my_s_lvl = parseInt((scubaLicenseLevel)?scubaLicenseLevel:"0");
        var my_f_lvl = parseInt((freeLicenseLevel)?freeLicenseLevel:"0")
        if (my_s_lvl > my_f_lvl) {
            levelShow = (my_s_lvl>0) ? "스쿠버 " + scuba_level[my_s_lvl] : levelShow;
        } else {
            levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] : levelShow;
        }
        levelShow += " 다이버";
        
        return levelShow;
    },
    enableNext2(ev) {
        this.chatSelectedList.push(ev);
    },
    removeChatSelected(user) {
        for (var i=0; i<this.chatSelectedList.length; i++) {
            var x = this.chatSelectedList[i];
            if (x._id == user._id) {
                this.chatSelectedList.splice(i, 1);
                break;
            }
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
    createChat() {
        if (this.chatSelectedList.length == 0) {
            return;
        }
        else if (this.chatSelectedList.length == 1) {
            // 개설된 채팅이 있는지 확인한다.
            this.getJoinedRoomList.forEach(room => {
                if (room.type == 'direct' && room.chatUsers.filter(u=>u._id == this.chatSelectedList[0].uid).length > 0) {
                    location.href = '/chat/' + room._id;
                }
            })
            // 없는경우, 더미로 하나 만든다.
        }
    },
    async lookupUser() {
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
                    query FindUserByNickName($nickName: String!) {
                        findUserByNickName(nickName: $nickName) {
                            uid
                            profileImages {
                            thumbnailUrl
                            }
                            email
                            scubaLicenseLevel
                            freeLicenseLevel
                            nickName
                        }
                    }
                `,
                variables: {
                    "nickName": query
                }
            }
        });
        // 자기 자신은 검색이 안되게 한다.
        var _users = result.data.data.findUserByNickName;
        for (var i=0; i<_users.length; i++) {
            if (_users[i].uid == localStorage.uid) {
                _users.splice(i, 1);
                break;
            }
        }
        this.users = _users;
      },
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-img-user {object-fit: cover;}
.p-relative {position: relative;}
.d-inline-block {display: inline-block;}
.v-align-top {vertical-align: top !important;}
.w-60 {width: 60px;height:60px;}

.img-sm {width: 40px !important;height: 40px !important;}
.img-xs {width: 29px !important;height: 29px !important;}
.img-sm-rb {position: absolute !important;top: 20px;left: 20px;}
.img-xs-rb {position: absolute !important;top: 31px;left: 31px;}
.img-xs-rt {position: absolute !important;top: 31px;left: 0px;}
.img-xs-lb {position: absolute !important;top: 0px;left: 31px;}

.user-img {
  position: relative;
  width: 60px;
  height: 60px;
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

.latest {font-size: 11px;color: #b4bcc8;position: absolute;right: 0;top: 8px;}
.d-block {display:block;}
.ellipsis2 {overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.unread {font-size: 11px;color: #b4bcc8;position: absolute;right: 0;top: 30px;background:#ff5160;color:white;padding:0px 9px;border-radius:22px;font-weight:bold;}
</style>
