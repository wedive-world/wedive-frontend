<template>
  <div class="">
    <div data-menu-active="nav-chat"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color">윤장송</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>

    <div id="footer-bar-speach" style="z-index: 9999;background: black;display: table;width: 100%;">
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
                    @focus="resize"
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
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/01.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/02.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/03.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/04.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/05.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/06.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/07.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/08.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/09.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/10.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/11.gif" width="100%" /></div>
                <div class="col-3 p-3"><img src="/static/images/emoji/basic/12.gif" width="100%" /></div>
            </div>
        </div>
    </div>
    
    <div id="speech-content" class="card card-style ms-0 me-0 rounded-0 mt-5 mb-5" style="height: calc(100vh - 101px);">
        <div class="content">
            <div v-for="chat in chatData">
                <div v-if="chat.author._id == uid" class="speech-left">
                    <div class="speech-bubble bg-highlight">
                        {{ chat.text }}
                    </div>
                    <span class="time">{{ chat.showAt }}</span>
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
                                <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.author.avatarOrigin)?chat.author.avatarOrigin:'/static/assets/images/chat.gif'"/>
                            </svg>
                        </div>
                    </div>
                    <div class="speech-right">
                        <div class="font-12 ms-1">{{ chat.author.name }}</div>
                        <div class="speech-bubble color-black">
                            {{ chat.text }}
                        </div>
                        <span class="time">{{ chat.showAt }}</span>
                    </div>
                </div>
                
                <div class="clearfix"></div>
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
const axios = require("axios")
var today = new Date();
function timeForToday(value) {
    const timeValue = new Date(value);
    const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (betweenTime < 1) return '방금전';
    else if (betweenTime < 6) {
        return `${betweenTime}분전`;
    }
    else {
        var hour = timeValue.getHours();
        if (hour < 12) hour = "오전 " + hour
        else hour = "오후 " + (hour-12);
        return hour + ":" + timeValue.getMinutes();
    }
}
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
        var result = await axios({
            url: 'https://chat.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                query GetMessagesByRoomIdSinceUpdated($roomId: String!, $updatedSince: Date) {
                    getMessagesByRoomIdSinceUpdated(roomId: $roomId, updatedSince: $updatedSince) {
                        _id
                        text
                        author {
                            _id
                            name
                            avatarOrigin
                        }
                        createdAt
                    }
                }
                `,
                variables: {
                    roomId: to.params.id
                }

            }
            });

        var ret = null;
        if (result && result.data && result.data.data && result.data.data.getMessagesByRoomIdSinceUpdated) {ret = result.data.data.getMessagesByRoomIdSinceUpdated;}
        
        next(vm => {vm.setData(ret, to.params.id)});
    }
  },
  watch: {
      sendText: function(newVal, oldVal) {
        if (newVal != "") {
            hideKeyboard();
        }
        if (newVal.replace(/ /gi, "") == "") {
            this.sendDisable = true;
        } else {
            this.sendDisable = false;
        }
      },
      is_emoji: function(newVal, oldVal) {
          if (newVal) {
              hideKeyboard();
          }
      }
  },
  mounted() {
    var element = document.getElementById("speech-content");
    element.scrollTop = element.scrollHeight;

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
  },
  components: {
    
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
        sendText: '',
        sendDisable: true,
        chatData: [],
        roomId: '',
        uid: localStorage.uid,
        is_emoji: false,
    }
  }, methods: {
    setData(chatData, roomId) {
        this.chatData = chatData;
        this.chatData.reverse();
        this.chatData.forEach(chat => chat.showAt = timeForToday(chat.createdAt))
        this.roomId = roomId;
    },
    async sendMessage() {
        if (this.sendDisable == false) {
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
            location.reload();
        }
    },
    resize() {
        const { textarea } = this.$refs;
        for (var i=0; i<10; i++)
            textarea.style.height = textarea.scrollHeight - 4 + 'px';
        $("#footer-bar-speach").height((parseInt(textarea.style.height.replace("px",""))+12) + "px")
        

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
color: #dee2e6;
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
.speech-right>.time {margin-top: -32px;float: right;margin-right: -54px;font-size: 11px;color: #b4bcc8;}
.speech-left>.time {margin-top: -32px;float: left;margin-left: -52px;font-size: 11px;color: #b4bcc8;}
</style>
