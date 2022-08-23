<template>
  <div class="">
    <div data-menu-active="nav-chat"></div>
    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
    <template slot="top-block" slot-scope="props">
      <div :class="'top-load-wrapper opacity-50' + (props.state === 'loaded-done' ? ' fadeout' : '')">
        <i class="font-18 fas"
             :class="{
                'fa-arrow-down': props.state === 'pull',
                'fa-arrow-down': props.state === 'trigger',
                'fa-spinner': props.state === 'loading',
                'fa-check': props.state === 'loaded-done'
             }"
             aria-hidden="true">
        </i>
        {{ props.stateText }}
      </div>
    </template>
    <div>
        <!--<div v-if="idToken == null || nickName == null || nickName == 'null'" class="card card-style ms-0 me-0 rounded-0 text-center mb-0" style="height: calc(100vh - 58px);display:block;">
            <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_message.jpg" width="60%" style="margin-top: 25%;" />
            <p class="color-gray mt-2">{{ login_word }}이 필요합니다.</p>

            <a v-on:click="login()" class="btn btn-m mb-3 rounded-xl text-uppercase font-500 shadow-s bg-secondary font-noto"><i class="fas fa-user-lock me-1"></i> {{ login_word }}</a>
        </div>-->
        <div v-if="getJoinedRoomList.length == 0" class="card card-style ms-0 me-0 rounded-0 text-center mb-0" style="height: calc(100vh - 58px);display:block;">
            <ContentLoader :width="windowWidth" height="700" id="div_content_loader" primaryColor="#f2f3f6" secondaryColor="#f4f7ff">
                <rect x="20" y="20" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="30" rx="15" ry="15" :width="windowWidth-100" height="30" />
                <rect x="20" y="90" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="100" rx="15" ry="15" :width="windowWidth-100" height="30" />
                <rect x="20" y="160" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="170" rx="15" ry="15" :width="windowWidth-100" height="30" />
                <rect x="20" y="230" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="240" rx="15" ry="15" :width="windowWidth-100" height="30" />
                <rect x="20" y="300" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="310" rx="15" ry="15" :width="windowWidth-100" height="30" />
                <rect x="20" y="370" rx="10" ry="10" width="50" height="50" />
                <rect x="80" y="380" rx="15" ry="15" :width="windowWidth-100" height="30" />
            </ContentLoader>
            <div id="div_empty_notice" style="display: none;">
                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty_message.jpg" width="60%" style="margin-top: 25%;" />
                <p class="color-gray mb-2">진행중인 대화가 없습니다.</p>
            </div>
        </div>
        <div v-else class="card card-style ms-0 me-0 rounded-0 mb-0" style="min-height:calc(100vh - 101px)">
            <div class="content mt-0 mb-0" style="padding-bottom:80px;">
                <a v-for="chat in getJoinedRoomList" v-on:click="removeUnread(chat)" :href="'/chat/'+chat._id" class="d-block border-bottom pt-2" style="position:relative;">
                    <div v-if="chat.chatUsers && chat.chatUsers.length == 0 && chat.owner" class="p-relative d-inline-block w-60 mb-2">
                        <div class="user-img">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.owner.avatarOrigin)?chat.owner.avatarOrigin:'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </div>
                    <div v-else-if="chat.usersCount == 1" class="p-relative d-inline-block w-60 mb-2">
                        <div v-for="user in chat.chatUsers" class="user-img">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </div>
                    <div v-else-if="chat.usersCount == 2" class="p-relative d-inline-block w-60 mb-2">
                        <div v-for="user in chat.chatUsers.filter(user=>user.uid != uid)" class="user-img">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </div>
                    <div v-else-if="chat.usersCount == 3" class="p-relative d-inline-block w-60 mb-2">
                        <div v-for="(user,index) in chat.chatUsers.filter(user=>user.uid != uid)" :class="'user-img img-sm' + (index==1 ? ' img-sm-rb' : '')">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </div>
                    <div v-else-if="chat.usersCount > 3" class="p-relative d-inline-block w-60 mb-2">
                        <div v-for="(user,index) in chat.chatUsers.filter(user=>user.uid != uid)" :class="'user-img img-xs' + (index == 1 ? ' img-xs-rt' : index == 2 ? ' img-xs-lb' : index == 3 ? ' img-xs-rb' : '')">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.avatarOrigin)?user.avatarOrigin:'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                    </div>
                    <div class="ms-2 d-inline-block v-align-top">
                        <div>
                            <span v-if="chat.type=='channel'" style="color:#77777780;position:fixed;"><img src="https://d34l91104zg4p3.cloudfront.net/assets/ico_users.png" style="height: 15px;width: 15px;margin-bottom: 4px;margin-right:3px;"/>{{ chat.chatUsers.length }}</span>
                            <h5 v-if="chat.type=='channel'" class="font-15 font-600 mb-0 ellipsis" v-html="(chat.title == null || chat.title == '') ? '&nbsp' : chat.title" style="margin-left:34px;max-width: calc(100vw - 190px);"></h5>
                            <h5 v-else-if="chat.chatUsers && chat.chatUsers.length == 0 && chat.owner" class="font-15 font-600 mb-0" v-html="chat.owner.name"></h5>
                            <h5 v-else class="font-15 font-600 mb-0 ellipsis" v-html="chat.chatUsers.filter(user=>user.uid != uid).map(user => {return user.name}).join()" style="max-width: calc(100vw - 190px);"></h5>
                        </div>
                        <div v-if="chat.divingInfo" class="mt-n1">
                            <p class="color-highlight font-13 mb-0 ellipsis"><i class="wedive_icoset wedive_icoset_marker"></i> {{ chat.divingInfo.name }} ({{ (chat.divingInfo.daysLeft > 0 ? 'D-'+chat.divingInfo.daysLeft : '완료') }})</p>
                        </div>
                        <p :class="'line-height-s opacity-60 font-13 ellipsis' + (chat.divingInfo ? '' : '2 mt-2')" style="max-width: calc(100vw - 172px);">
                            {{ (chat.lastChatMessage && chat.lastChatMessage.text)?(chat.lastChatMessage.text.includes('[[')&&chat.lastChatMessage.text.includes(']]')?((chat.lastChatMessage.text.includes('emoji|'))?'이모티콘':((chat.lastChatMessage.text.includes('center|')||chat.lastChatMessage.text.includes('point|')||chat.lastChatMessage.text.includes('site|'))?chat.lastChatMessage.text.split('|')[2]:'')):chat.lastChatMessage.text): ''}}
                        </p>
                    </div>
                    <div class="latest">{{ chat.lastChatMessage ? timeForToday(chat.lastChatMessage.createdAt) :  timeForToday(chat.createdAt)}}</div>
                    <div v-if="chat.unread > 0" class="unread">{{ (chat.unread>999) ? 999 : chat.unread }}</div>
                </a>
                
                
            </div>
        </div>
    </div>
    </pull-to>


    <div id="chat-add" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a v-on:click="chatSelectedList = [];selecteduser=null;query='';" href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createChat()" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((chatSelectedList.length==0) ? 'color-gray' : 'color-theme')"><span v-if="chatSelectedList.length> 0" class="color-highlight font-600 me-2">{{chatSelectedList.length}}</span>확인</a>
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
                        <div class="user-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(data.profileImages && data.profileImages.length>0) ? data.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                        <!--<img
                        class="rounded-s me-3"
                        :src="(data.profileImages && data.profileImages.length>0) ? data.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"
                        style="width: 50px; height: 50px;object-fit:cover;" />-->
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
                        <div class="user-img me-2">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(user.profileImages && user.profileImages.length>0) ? user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                            </svg>
                        </div>
                        <!--<div class="">
                            <img
                            class="rounded-s me-3"
                            :src="(user.profileImages && user.profileImages.length>0) ? user.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"
                            style="width: 50px; height: 50px;object-fit:cover;" />
                        </div>-->
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
import PullTo from 'vue-pull-to'
import { ContentLoader } from 'vue-content-loader'

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
    init_template();
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}

    if (localStorage.idToken == null || localStorage.nickName == null || localStorage.nickName == 'null') {
        setTimeout(function() {
            $("#div_content_loader").hide();
            $("#div_empty_notice").show();
        },100);
    }
  },
  components: {
      VueTypeaheadBootstrap,
      PullTo,
      ContentLoader,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        windowWidth: window.innerWidth,
        getJoinedRoomList: [],
        idToken: localStorage.idToken,
        nickName: localStorage.nickName,
        login_word : (localStorage.idToken == null) ? '로그인' : '프로필 등록',
        uid: localStorage.uid,
        query: '',
        selecteduser: null,
        users: [],
        chatSelectedList: [],
        scrollTop: 0,
        TOP_DEFAULT_CONFIG: {
            pullText: '당겨서 새로고침', // The text is displayed when you pull down
            triggerText: '업데이트', // The text that appears when the trigger distance is pulled down
            loadingText: '로딩중...', // The text in the load
            doneText: '새로고침 완료', // Load the finished text
            failText: '실패', // Load failed text
            loadedStayTime: 400, // Time to stay after loading ms
            stayDistance: 50, // Trigger the distance after the refresh
            triggerDistance: 70 // Pull down the trigger to trigger the distance
        },
    }
  }, 
  apollo: {
      getJoinedRoomList: {
          query:gql `
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
                    divingInfo {
                    title
                    name
                    daysLeft
                    }
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
          skip() {
              //return (localStorage.idToken == null || localStorage.nickName == null || localStorage.nickName == 'null');
              return (localStorage.idToken == null);
          },
          result ({ data, loading, networkStatus }) {
            setTimeout(function() {
                $("#div_content_loader").hide();
                $("#div_empty_notice").show();
            },100);
            data.getJoinedRoomList.sort(function(a, b) {
                var a_create_at = (a.lastChatMessage && a.lastChatMessage.createdAt) ? a.lastChatMessage.createdAt : a.createdAt;
                var b_create_at = (b.lastChatMessage && b.lastChatMessage.createdAt) ? b.lastChatMessage.createdAt : b.createdAt;
                return (a_create_at>b_create_at ? -1 : 1);
            });
          },          
      }
  },
  methods: {
    removeUnread(chat) {
        chat.unread = 0;
    },
    timeForToday(value) {
        const timeValue = new Date(value);
        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        else if (betweenTime < 6) {
            return `${betweenTime}분전`;
        }
        else if (today.getMonth() == timeValue.getMonth() && today.getDate() == timeValue.getDate()) {
            var hour = timeValue.getHours();
            if (hour < 13) hour = "오전 " + hour
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
    enableNext2(ev) {
        
        if (this.chatSelectedList.filter(li => li.uid == ev.uid).length == 0)
            this.chatSelectedList.push(ev);
        setTimeout(function() {
            $("#search_typeahead > .input-group > input").val('')
        }, 300);
        this.query = '';
    },
    removeChatSelected(user) {
        for (var i=0; i<this.chatSelectedList.length; i++) {
            var x = this.chatSelectedList[i];
            if (x.uid == user.uid) {
                this.chatSelectedList.splice(i, 1);
                break;
            }
        }
    },
    login() {
        localStorage.loginUrl = window.location.pathname;
        if (localStorage.hasOwnProperty("idToken") == false || localStorage.idToken == null) {
          this.$root.$children[0].$refs.loginBottomSheet.open();
        } else if (localStorage.hasOwnProperty("nickName") == false || localStorage.nickName == null || localStorage.nickName == 'null') {
          location.href='/user/create';
        }
    },
    createChat() {
        if (this.chatSelectedList.length == 0) {
            return;
        }
        else if (this.chatSelectedList.length == 1) {
            // 개설된 채팅이 있는지 확인한다.
            var go_flag = false;
            this.getJoinedRoomList.forEach(room => {
                if (room.type == 'direct' && room.chatUsers.filter(u=>u.uid == this.chatSelectedList[0].uid).length > 0) {
                    go_flag = true;
                    location.href = '/chat/' + room._id;
                }
            })
            if (go_flag == false) {
                // 없는경우, 더미로 하나 만든다.
                //localStorage.chatType = 'direct';
                //var chatUids = new Array();
                //chatUids.push(this.chatSelectedList[0].uid);
                //localStorage.chatUids = JSON.stringify(chatUids);
                //localStorage.chatName = this.chatSelectedList[0].nickName;
                //location.href = '/chat/create'
                history.back();
                console.log({is_concierge: false, roomName: this.chatSelectedList[0].nickName, chatType: "direct", chatUids: JSON.stringify([this.chatSelectedList[0].uid])});
                this.$router.push({name: "ChatDummyPage", params: {is_concierge: false, roomName: this.chatSelectedList[0].nickName, chatType: "direct", chatUids: JSON.stringify([this.chatSelectedList[0].uid])}});
            }
        } else {
            history.back();
            console.log({is_concierge: false, roomName: this.chatSelectedList.map(x => x.nickName).join(), chatType: "channel", chatUids: JSON.stringify(this.chatSelectedList.map(x => x.uid))})
            this.$router.push({name: "ChatDummyPage", params: {is_concierge: false, roomName: this.chatSelectedList.map(x => x.nickName).join(), chatType: "channel", chatUids: JSON.stringify(this.chatSelectedList.map(x => x.uid))}});
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
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            await this.$apollo.queries.getJoinedRoomList.refetch()
            loaded('done')
        } else {
            loaded('done')
            return false;
        }
      },
      stateChange(state) {
        if (state === 'pull' || state === 'trigger') {
            this.iconLink = '#fa-arrow-down';
        } else if (state === 'loading') {
            this.iconLink = '#fa-spinner';
        } else if (state === 'loaded-done') {
            this.iconLink = '#fa-check';
        }
      },
      handleScroll (event) {
        this.scrollTop = $(document).scrollTop();
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

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}
</style>
