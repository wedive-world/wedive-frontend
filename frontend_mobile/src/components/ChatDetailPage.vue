<template>
  <div class="">
    <div data-menu-active="nav-chat"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color">{{ getJoinedRoomList.filter(x=>x._id==roomId).length > 0 ? getJoinedRoomList.filter(x=>x._id==roomId)[0].name : ''|| '' }}</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div id="footer-bar-speach" style="z-index: 9999;display: table;width: 100%;background: black;">
        <div :class="(is_emoji_clicked?'':'hide')" style="background:#00000066;height:100px;">
            <i v-on:click="is_emoji_clicked=false;emoji_url='';sendDisable=true;" class="wedive_icoset2x wedive_icoset2x_close" style="position:absolute;right:10px;top:10px;"/>
            <img :src="'/static/images/emoji/' + emoji_url" style="width:80px;margin-top:10px;"/>
        </div>
        <div class="d-flex" style="min-height: 52px;height: 52px;max-height:134px;">
            <div class="me-1 speach-icon">
                <div style="width: 45px;display: inline-block;position: relative;">
                    <!--<input type="file" id="file-upload" class="upload-file text-center" accept="image/*" style="width:32px;">-->
                    <!--<p class="upload-file-text bg-gray-dark" style="color: #abb7ba;position:absolute;width:32px;height:32px;margin-top:-2px;left:8px;border-radius:16px;"><i class="fas fa-image pt-2 font-16"></i></p>-->
                    <img src="/static/images/assets/chat_icon_plus.png" style="width:22px;margin-top:14px;margin-left:4px;"/>
                </div>
            </div>
            <div class="flex-fill speach-input">
                <textarea 
                    id="textarea-input"
                    @focus="resizeFocus"
                    @keyup="resize"
                    ref="textarea"
                    type="text"
                    rows="1"
                    class="form-control"
                    placeholder="메시지를 입력하세요."
                    v-model="sendText"
                    style="border-radius:16px;margin-top:6px;background: #303440;color:white;max-height:122px;" />
            </div>
            <div v-on:click="is_emoji = !is_emoji" style="width: 26px;display: inline-block;position: relative;">
                    <img src="/static/images/assets/chat_icon_emoji.png" style="width:24px;margin-top:13px;margin-left:8px;"/>
                </div>
            <div v-on:click="sendMessage()" class="ms-3 speach-icon" :style="(sendDisable?'background: #7C7C7C;width:50px;':'background: #1d397c;width:50px;')">
                <i class="fas fa-paper-plane color-white font-20" style="margin-top:16px;"></i>
            </div>
        </div>
        <div :class="'' + (is_emoji?'':' hide')" style="max-height:300px;background: #303440;overflow-y: auto;">
            <div class="d-flex" style="height:36px;border-bottom:1px solid #88888880;">
                <div style="border-right: 1px solid #88888880;width:60px;background:#ffffff30;"><img src="/static/images/emoji/basic/emoji.png" style="width:28px;margin-top:2px;"/></div>
                <div style="border-right: 1px solid #88888880;width:60px;"><img src="/static/images/emoji/wedive/emoji.png" style="width:28px;margin-top:2px;"/></div>
                <div style=""></div>
            </div>
            <div class="row pe-3 ps-3 m-0">
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/01.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/01.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/02.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/02.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/03.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/03.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/04.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/04.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/05.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/05.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/06.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/06.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/07.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/07.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/08.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/08.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/09.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/09.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/10.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/10.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/11.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/11.gif" width="100%" /></div>
                <div v-on:click="is_emoji_clicked=true;emoji_url='basic/12.gif';sendDisable=false;" class="col-3 p-3"><img src="/static/images/emoji/basic/12.gif" width="100%" /></div>
            </div>
        </div>
    </div>
    
    <div v-on:click="speechContentClick()" id="speech-content" class="card card-style ms-0 me-0 rounded-0" style="height: calc(100vh - 50px);overflow-y: auto;margin-top:50px;padding-bottom:50px;">
        <div class="content">
            <div v-for="chat in getMessagesByRoomId">
                <div v-if="chat && chat.author && chat.author._id == uid">
                    <div v-if="chat.text.includes('[[') && chat.text.includes(']]') && chat.text.includes('emoji|')" class="chat-left">
                        <div class="">
                            <img :src="'/static/images/emoji/' + (chat.text.replace('[[','').replace(']]','').split('|')[1])" style="max-width:100px;"/>
                        </div>
                        <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                    </div>
                    <div v-else-if="emoji_regex.test(chat.text) && chat.text.length == 2" class="chat-left">
                        <div style="font-size:80px;height:100px;padding-top:30px;display:block;">
                            {{ chat.text }}
                        </div>
                        <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                    </div>
                    <div v-else class="speech-left">
                        <div class="speech-bubble bg-highlight">
                            {{ chat.text }}
                        </div>
                        <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                    </div>
                    
                </div>
                <div v-else>
                    <div class="p-relative d-inline-block w-60 float-left">
                        <div class="user-img">
                            <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                <clipPath id="clipSquircle">
                                    <use xlink:href="#shapeSquircle"/>
                                </clipPath>
                                </defs>
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.author.avatarOrigin)?chat.author.avatarOrigin:'/static/images/assets/chat.gif'"/>
                            </svg>
                        </div>
                    </div>
                    <div v-if="chat.text.includes('[[') && chat.text.includes(']]') && chat.text.includes('emoji|')" class="chat-right">
                        <div class="">
                            <img :src="'/static/images/emoji/' + (chat.text.replace('[[','').replace(']]','').split('|')[1])" style="max-width:100px;"/>
                        </div>
                        <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                    </div>
                    <div v-else-if="emoji_regex.test(chat.text) && chat.text.length == 2" class="chat-right">
                        <div style="font-size:80px;height:100px;padding-top:30px;display:block;">
                            {{ chat.text }}
                        </div>
                        <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                    </div>
                    <div v-else>
                        <div class="speech-right">
                            <div class="font-12 ms-1">{{ chat.author.name }}</div>
                            <div class="speech-bubble color-black">
                                {{ chat.text }}
                            </div>
                            <span class="time">{{ timeForToday(chat.createdAt) }}</span>
                        </div>
                    </div>
                </div>
                
                <div class="clearfix"></div>
            </div>

            <div class="hide">
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/images/assets/chat.gif"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <div class="speech-right" style="max-width: 220px;">
                        <div class="font-12 ms-1">테스트</div>
                        <div class="speech-bubble color-black">
                            <div class="font-noto font-600 font-16 mb-3"># 잠실 수영장</div>
                            <div class="ellipsis" style="display: -webkit-box;-webkit-line-clamp: 5;-webkit-box-orient: vertical;white-space: unset;"><img src="https://dwj4aa6a673st.cloudfront.net/image/resized/61cc75254bbd6cd4fa6eee62.jpg" width="60" height="60" class="rounded-s me-3" style="float:left;position: relative;">잠실종합수영장 제2수영장에 위치한 다이빙 전용 수영장입니다. 서울 시내에 있어 접근이 용이합니다.</div>

                            <div class="mt-3 font-noto" style="display: block;background: white;border-radius:8px;padding:6px 12px;margin-bottom:4px;">자세히 보러가기<i class="wedive_icoset wedive_icoset_rightarrow" style="float:right;margin-top:4px;"></i></div>
                        </div>
                        <span class="time">오전 11:00</span>
                    </div>
                </div>
            </div>
            
        </div>

        
    </div>
    
    <div id="menu-upload" 
         class="menu menu-box-bottom rounded-half" 
         data-menu-height="275" 
         data-menu-effect="menu-over">
        <div class="list-group list-custom-small ps-2 me-4">
            <a href="#">
                <i class="font-14 fa fa-file color-gray2-dark"></i>
                <span class="font-13">File</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href="#">
                <i class="font-14 fa fa-image color-gray2-dark"></i>
                <span class="font-13">Photo</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href="#">
                <i class="font-14 fa fa-video color-gray2-dark"></i>
                <span class="font-13">Video</span>
                <i class="fa fa-angle-right"></i>
            </a>
            <a href="#">
                <i class="font-14 fa fa-user color-gray2-dark"></i>
                <span class="font-13">Camera</span>
                <i class="fa fa-angle-right"></i>
            </a>  
            <a href="#">
                <i class="font-14 fa fa-map-marker color-gray2-dark"></i>
                <span class="font-13">Location</span>
                <i class="fa fa-angle-right"></i>
            </a>  
        </div>
    </div>
  </div>
</template>
<script>
import gql from 'graphql-tag'
const axios = require("axios")









var today = new Date();

function hideKeyboard() {
    var element = $("#textarea-input");
    element.attr('readonly', 'readonly'); // Force keyboard to hide on input field.
    element.attr('disabled', 'true'); // Force keyboard to hide on textarea field.
    setTimeout(function() {
        element.blur();  //actually close the keyboard
        // Remove readonly attribute after keyboard is hidden.
        element.removeAttr('readonly');
        element.removeAttr('disabled');
    }, 100);
}

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        next(vm => {vm.setData(to.params.id)});
    }
  },
  watch: {
      sendText: function(newVal, oldVal) {
        if (newVal.replace(/ /gi, "") == "") {
            this.sendDisable = true;
        } else {
            this.sendDisable = false;
        }
      },
      getMessagesByRoomId: function(newVal, oldVal) {
          setTimeout(function() {
              console.log("1")
              $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
          },10)
      },
      is_emoji: function(newVal, oldVal) {
          if (newVal) {
              $('#speech-content').css("height", (this.speechContentHeight-300) + "px")
              setTimeout(function() {
                hideKeyboard();
                $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
              },100)
          } else {
              $('#speech-content').css("height", (this.speechContentHeight) + "px")
          }
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
    getMessagesByRoomId: {
        query: gql`query GetMessagesByRoomId($roomId: String!, $skip: Int, $limit: Int) {
            getMessagesByRoomId(roomId: $roomId, skip: $skip, limit: $limit) {
                _id
                text
                author {
                _id
                name
                avatarOrigin
                }
                attachments {
                attachmentText
                imageUrl
                audioUrl
                videoUrl
                }
                createdAt
            }
        }`,
        variables () {
            return {
                skip: 0,
                limit: 100,
                roomId: this.roomId
            }
        },
        result ({ data }) {
        },
        subscribeToMore: {
            document: gql`subscription Subscription($roomIds: [String]!) {
                subscribeRoomMessage(roomIds: $roomIds) {
                    _id
                    text
                    author {
                    _id
                    name
                    avatarOrigin
                    }
                    attachments {
                    attachmentText
                    imageUrl
                    audioUrl
                    videoUrl
                    }
                    createdAt
                }
            }`,
            variables () {
                return {
                    roomIds: [this.roomId]
                }
            },
            updateQuery: (previousResult, { subscriptionData }) => {
                if (previousResult.getMessagesByRoomId.find(chat => chat._id === subscriptionData.data.subscribeRoomMessage._id)) {
                    return previousResult
                }
                return {
                    getMessagesByRoomId: [
                        ...previousResult.getMessagesByRoomId,
                        subscriptionData.data.subscribeRoomMessage,
                    ],
                }
            },
        }
        
    },
  },
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    document.getElementById("page-back").classList.remove("hide");
    document.getElementById("footer-bar").classList.add("hide");

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
    this.speechContentHeight = $("#speech-content").height();
    setTimeout(function() {
        $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
        //var element = document.getElementById("speech-content");
        //element.scrollTop = element.scrollHeight;
    },200);
    
    //console.log(this.$apollo.queries.chats.observer.lastResult.data.getMessagesByRoomId);

    console.log(this.getJoinedRoomList);
  },
  components: {
    
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
    window.addEventListener('native.showkeyboard', this.keyboardShowHandler);
  },
  destroyed () {
    window.removeEventListener('native.showkeyboard', this.keyboardShowHandler);
  },
  data () {
    return {
        sendText: '',
        sendDisable: true,        
        getMessagesByRoomId: [],
        getJoinedRoomList: [],
        roomId: '',
        uid: localStorage.uid,
        is_emoji: false,
        is_emoji_clicked: false,
        emoji_url: '',
        emoji_regex: /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
        speechContentHeight: 0,
    }
  }, methods: {
    setData(roomId) {
        this.roomId = roomId;
    },
    timeForToday(value) {
        if (typeof(value) == 'object') {
            var _time = new Date(value.$date);
            console.log(_time);
            value = _time.toISOString();
        }
        const timeValue = new Date(value);
        const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
        if (betweenTime < 1) return '방금전';
        else if (betweenTime < 6) {
            return `${betweenTime}분전`;
        }
        else {
            var hour = timeValue.getHours();
            if (hour < 12) hour = "오전 " + hour
            else if(hour == 12) hour = "오후 " + hour;
            else hour = "오후 " + (hour-12);
            var minute = timeValue.getMinutes();
            return hour + ":" + ((minute<10) ? "0"+minute : minute);
        }
    },
    keyboardShowHandler(event) {
        $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
    },
    async sendMessage() {
        if (this.sendDisable == false) {
            if (this.is_emoji_clicked) {
                const message = "[[emoji|" + this.emoji_url + "]]";
                const roomId = this.roomId;
                var result = await axios({
                    url: 'https://chat.wedives.com/graphql',
                    method: 'post',
                    headers: {
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    },
                    data: {
                        query: `
                            mutation PostMessageToRoom($roomId: String!, $input: String!) {
                                postMessageToRoom(roomId: $roomId, input: $input) {
                                    _id
                                }
                            }
                        `,
                        variables: {
                            "roomId": roomId,
                            "input": message
                        }
                    }
                });
                this.is_emoji_clicked = false;
                this.sendText = '';
                var ret = (result.data && result.data.data && result.data.data.getJoinedRoomList) ? result.data.data.getJoinedRoomList : null
            }

            if (this.sendText != "") {
                const message = this.sendText;
                const roomId = this.roomId;
                var result = await axios({
                    url: 'https://chat.wedives.com/graphql',
                    method: 'post',
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    },
                    data: {
                        query: `
                            mutation PostMessageToRoom($roomId: String!, $input: String!) {
                                postMessageToRoom(roomId: $roomId, input: $input) {
                                    _id
                                }
                            }
                        `,
                        variables: {
                            "roomId": roomId,
                            "input": message
                        }
                    }
                });
                
                this.sendText = '';
                var ret = (result.data && result.data.data && result.data.data.getJoinedRoomList) ? result.data.data.getJoinedRoomList : null
            }
        }
    },
    resize() {
        const { textarea } = this.$refs;
        for (var i=0; i<10; i++)
            textarea.style.height = textarea.scrollHeight - 4 + 'px';
        var hei = parseInt(textarea.style.height.replace("px",""))+12;
        if (hei < 141)
            $("#footer-bar-speach").height(hei + "px")
    },
    resizeFocus() {
        const { textarea } = this.$refs;
        for (var i=0; i<10; i++)
            textarea.style.height = textarea.scrollHeight - 4 + 'px';
        $("#footer-bar-speach").height((parseInt(textarea.style.height.replace("px",""))+12) + "px")
        this.is_emoji = false;
    },
    speechContentClick() {
        if (this.is_emoji) this.is_emoji = false;
    }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wedive-img-user {object-fit: cover;}
.p-relative {position: relative;}
.d-inline-block {display: inline-block;}
.v-align-top {vertical-align: top !important;}
.w-60 {width: 60px;}
.float-left {float: left;}

.img-small {
  width: 40px !important;
  height: 40px !important;
}
.img-right-bottom {
  position: absolute !important;
  top: 20px;
  left: 20px;
}



.user-img {
  position: relative;
  width: 50px;
  height: 50px;
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

.latest {float: right;font-size: 11px;color: #b4bcc8;}

.speech-right:before {
font-family: "Font Awesome 5 Free";
content: "\f075";
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-weight: 900;
font-size: 40px;
position:absolute;
margin-left:-4px;
margin-top: 26px;
transform: rotate(70deg);
color: #e5eef5;
}
.speech-left:before {
font-family: "Font Awesome 5 Free";
content: "\f075";
-webkit-font-smoothing: antialiased;
display: inline-block;
font-style: normal;
font-variant: normal;
text-rendering: auto;
line-height: 1;
font-weight: 900;
font-size: 40px;
position:absolute;
right:16px;
margin-right:-4px;
margin-top: 0px;
transform: scaleX(-1) rotate(70deg);
color: #1d397c ;    
}
.bg-transparent:before{
    opacity: 0 !important;
}
.bg-transparent > .speech-bubble {
    background: transparent;
}
.img-fluid {min-width: 180px;max-height: 120px;object-fit: cover;}
.speech-right>.time, .chat-right>.time {margin-top: -32px;float: right;margin-right: -54px;font-size: 11px;color: #b4bcc8;}
.speech-left>.time, .chat-left>.time {margin-top: -32px;float: left;margin-left: -52px;font-size: 11px;color: #b4bcc8;}
.chat-left {max-width: 200px;
    float: right;
    border-bottom-right-radius: 0px !important;}
</style>
