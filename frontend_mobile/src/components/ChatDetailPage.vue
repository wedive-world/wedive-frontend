<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-chat" data-menu-load=""></div>    
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color">윤장송</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-dark"><i class="fas fa-sun"></i></a>
        <a href="#" data-toggle-theme class="header-icon header-icon-3 show-on-theme-light"><i class="fas fa-moon"></i></a>
    </div>

    <div id="footer-bar-speach" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
        <div class="me-1 speach-icon">
            
            
            <div style="width: 45px;display: inline-block;position: relative;">
                <input type="file" id="file-upload" class="upload-file text-center" accept="image/*" style="width:32px;">
                <p class="upload-file-text bg-gray-dark" style="color: #abb7ba;position:absolute;width:32px;height:32px;margin-top:-2px;left:8px;border-radius:16px;"><i class="fas fa-image pt-2 font-16"></i></p>
            </div>
        </div>
        <div class="flex-fill speach-input">
            <input type="text" class="form-control" placeholder="메시지를 입력하세요.">
        </div>
        <div class="ms-3 speach-icon" style="background: #1d397c;width:50px;">
            <i class="fas fa-paper-plane color-white font-20" style="margin-top:16px;"></i>
        </div>
    </div>
    
    <div class="card card-style ms-0 me-0 rounded-0 mt-5 mb-5">
        <div class="content">
            <div>
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
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
                </div>
                <div class="speech-right">
                    <div>윤민혁</div>
                    <div class="speech-bubble color-black">
                        이 프로젝트는 언제 끝나나요?
                    </div>
                    <span class="time">오후 5:27</span>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble bg-highlight">
                    그러게
                </div>
                <span class="time">오후 5:28</span>
            </div>
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble bg-highlight">
                    언제 끝나려나
                </div>
                <span class="time">오후 5:29</span>
            </div>
            <div class="clearfix"></div>
            <div>
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
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
                <div class="speech-right">
                    <div>송현일</div>
                    <div class="speech-bubble color-black">
                        괜찮아~ 그냥 하면 다 할 수 있어
                    </div>
                    <span class="time">오후 11:51</span>
                </div>
            </div>
            <div class="clearfix"></div>
            <p class="text-center mb-0 font-11">2021년 9월 22일 (수)</p>
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble bg-highlight">
                    그럼 너가 열심히 쫌 해봐봐
                </div>
                <span class="time">오전 12:01</span>
            </div>
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble speach-image bg-highlight">
                    <img class="img-fluid preload-img" src="/static/images/empty.png" data-src="/static/images/diving_advanced.jpg" alt="img">
                </div>
                <span class="time">오전 12:05</span>
            </div>




            
            <div class="clearfix"></div>
            <div>
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
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
                </div>
                <div class="speech-right">
                    <div>윤민혁</div>
                    <div class="speech-bubble color-black">
                        현일이형 같이 노력해봐요~
                    </div>
                    <span class="time">오전 12:19</span>
                </div>
            </div>
            <div class="clearfix"></div>
            <div>
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
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
                </div>
                <div class="speech-right">
                    <div>윤민혁</div>
                    <div class="speech-bubble color-black">
                        그건그렇고 채팅에 영상도 지원될까요?
                    </div>
                    <span class="time">오전 12:21</span>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="speech-left" style="width:260px;max-width:260px;">
                <div class="speech-bubble speach-image bg-highlight">
                    <iframe src='https://www.youtube.com/embed/grtqJsO_hb0' frameborder='0' allowfullscreen width="280" height="146"></iframe>
                </div>
            </div>

            
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble bg-highlight">
                    당연히 다 해놨지
                </div>
                <span class="time">오전 12:21</span>
            </div>
            <div class="clearfix"></div>
            <p class="text-center mb-0 font-11">2021년 9월 24일 (금)</p>
            <div>
                <div class="p-relative d-inline-block w-60 float-left">
                    <div class="user-img">
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
                </div>
                <div class="speech-right">
                    <div>윤민혁</div>
                    <div class="speech-bubble color-black">
                        와 그럼 이제 현일이형이 좀 달려주면 되겠네요~ 현일이형 화이팅 입니다.
                    </div>
                </div>
                <span class="time">오전 12:25</span>
            </div>
            <div class="clearfix"></div>
            <div class="speech-left">
                <div class="speech-bubble bg-highlight">
                    현일아 보고 있는거니?
                </div>
                <span class="time">오후 7:38</span>
            </div>			
            <div class="clearfix"></div>
            
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
export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    document.getElementById("page-back").classList.remove("hide");
    document.getElementById("footer-bar").classList.add("hide");
  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
        
    }
  }, methods: {
    
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
.img-fluid {min-width: 180px;max-height: 120px;object-fit: cover;}
.speech-right>.time {margin-top: -32px;float: right;margin-right: -54px;font-size: 11px;color: #b4bcc8;}
.speech-left>.time {margin-top: -32px;float: left;margin-left: -58px;font-size: 11px;color: #b4bcc8;}
</style>
