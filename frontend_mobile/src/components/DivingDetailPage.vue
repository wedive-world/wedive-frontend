<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-site" data-menu-load=""></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">{{ divingData.title }}{{ divingData.location }}</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" class="header-icon header-icon-4"><img src="/static/images/assets/ico_share.png" width="20"/></a>
    </div>
    
    <div :class="'page-content p-0' + (is_empty ? '' : ' hide')">
        <div class="card mb-0" style="height: calc(100vh - 60px);display: inline-block;text-align: center;width:100%;">
            <img src="/static/images/assets/empty_list2.jpg" width="60%" style="margin-top:25%;"/>
            <p class="font-noto color-gray">앗! 찾을 수 없는 버디찾기 입니다.<br/>
            <a href="/buddy_home" class="slider-next btn font-400 font-12 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 pe-4 ps-4 mt-2">다이빙 리스트로 돌아가기</a></p>
        </div>
    </div>
    <div :class="'page-content' + (!is_empty ? '' : ' hide')">
        <div v-if="locationData.backgroundImages == null || locationData.backgroundImages.length == 0" style="background:url(/static/empty.jpg);background-size: contain;height:250px;margin-top:50px;">
        </div>
        <div v-else :style="'background:url('+locationData.backgroundImages[0].url+');background-size: cover;height:250px;background-position: bottom !important;margin-top:50px;'">
        </div>
        <!--<div class="splide single-slider cover-slider slider-no-arrows" id="cover-slider-1" data-card-height="250">
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide" v-if="locationData.backgroundImages == null || locationData.backgroundImages.length == 0">
                        <div id="background_img_null" data-card-height="250" class="card rounded-0 mb-0" style="background: url(/static/empty.jpg);background-size: contain !important;">
                            
                        </div>
                    </div>
                    <div class="splide__slide" v-for="(image, index) in locationData.backgroundImages">
                        <div data-card-height="250" :class="'card rounded-0 mb-0 background_img_' + index" v-bind:style="'background: url('+image.url+');background-size: cover !important;'">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        

    
        <div class="card mb-0" style="margin-top:-60px; z-index:1">
            <div class="content mt-3 row pb-3 mb-0 border-bottom" v-on:click="goUserPage(divingData.hostUser)">
                <div class="col-6 p-0">
                    <img class="inline-block me-2 circular_image" :src="(divingData.hostUser && divingData.hostUser.profileImages && divingData.hostUser.profileImages.length>0 && divingData.hostUser.profileImages[0].thumbnailUrl) ? divingData.hostUser.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+((divingData.hostUser&&divingData.hostUser.gender)?divingData.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>
                    <div class="inline-block font-noto">
                        <h5 class="mb-0 font-500 font-17">{{ (divingData.hostUser && divingData.hostUser.nickName) ? divingData.hostUser.nickName : '' }}</h5>
                        <p class="mb-0 font-14 color-gray">{{ (divingData.hostUser && divingData.hostUser.levelShow) ? divingData.hostUser.levelShow : '' }}</p>
                    </div>
                </div>
                <div class="col-6 p-0 text-end">
                    <div>
                        <div class="inline-block text-start" style="width: 60px;">
                            <div class="font-10 color-gray mt-n1">매너수심</div>
                            <div class="font-noto font-600 mt-n2" style="color:#cd5b3c;">18m</div>
                        </div>
                        <img class="inline-block me-2" src="/static/images/assets/heart.png" width="30" style="vertical-align: top;"/>
                    </div>
                    <div>
                        <div class="progress rounded-l wedive-deep" style="height:4px;width:96px;float: right;margin-right:6px;">
                            <div class="progress-bar bg-heart ps-3 color-white" 
                                role="progressbar" style="width: 18%" 
                                aria-valuenow="10" aria-valuemin="0" 
                                aria-valuemax="100">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content mt-4 pb-3 border-bottom">
                <h2 class="font-18 font-700 mb-0">{{ divingData.title }}{{ divingData.locaiton }}</h2>
                <p class="color-gray-dark mb-0 font-12">{{ timeForToday(divingData.createdAt) }}</p>
                <p class="color-gray mt-4 mb-4 font-14" v-html="divingData.description"></p>
                
                <div class="evaluation">
                    <div class="row mb-0 line-height-l">
                        <div class="col-3 text-center color-gray">시작일시</div>
                        <div class="col-9">{{ weDiveDateFormat(new Date(divingData.startedAt), true) }}</div>
                        <div v-if="showFinishedAt == false" class="col-3 text-center color-gray">종료일시</div>
                        <div v-if="showFinishedAt == false" class="col-9">{{ weDiveDateFormat(new Date(divingData.finishedAt), false) }}</div>
                        <div class="col-3 text-center color-gray">선호사항</div>
                        <div class="col-9">{{ (divingData.interests) ? divingData.interests.map((x)=>{return x.title}).join().replace(/,/gi,', ') : '' }}</div>
                        <div class="col-3 text-center color-gray">모집인원</div>
                        <div class="col-9">{{ (divingData.maxPeopleNumber) ? (divingData.maxPeopleNumber-divingData.participants.length-1) : '' }}명</div>
                    </div>
                </div>
                <br/>
                <p class="color-gray-dark mt-3 mb-0 font-12">관심 2 · 조회 31</p>
            </div>
            
            <div v-if="divingData.participants" class="content mt-0 pb-3 border-bottom">
                <h2 class="font-15 font-700 mb-3">참여인원 ({{ (divingData.participants.filter(member=> member.status == 'joined')) ? (divingData.participants.filter(member=> member.status == 'joined').length+1) : '' }})</h2>
                
                <div class="row text-center mb-1">
                    <div class="col-3 owner" v-on:click="goUserPage(divingData.hostUser)" style="position: relative;">
                        <img class="inline-block circular_image" :src="(divingData.hostUser && divingData.hostUser.profileImages && divingData.hostUser.profileImages.length>0 && divingData.hostUser.profileImages[0].thumbnailUrl) ? divingData.hostUser.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+((divingData.hostUser&&divingData.hostUser.gender)?divingData.hostUser.gender:'m')+'.png'" width="50" style="vertical-align: top;"/>
                        <p class="color-gray-dark mb-0 font-14">{{ (divingData.hostUser!=null&&divingData.hostUser.nickName!=null) ? divingData.hostUser.nickName : '비공개' }}</p>
                    </div>
                    <div class="col-3" v-for="participant in divingData.participants.filter(member=> member.status == 'joined')" v-on:click="goUserPage(participant.user)">
                        <img class="inline-block" :src="(participant.profileImages && participant.profileImages.length>0 && participant.profileImages[0].thumbnailUrl) ? participant.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>
                        <p class="color-gray-dark mb-0 font-14">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : '비공개') }}</p>
                    </div>
                </div>
            </div>


            <div v-if="divingData.hostUser && divingData.hostUser._id == userId && divingData.participants && (divingData.participants.filter(member=> member.status == 'applied')) " class="content mt-0 pb-3 border-bottom">
                <h2 class="font-15 font-700 mb-3">신청인원 ({{ (divingData.participants.filter(member=> member.status == 'applied').length) }})</h2>
                
                <div class="row text-center mb-1">
                    <div class="col-3" v-for="participant in divingData.participants.filter(member=> member.status == 'applied')">
                        <div v-on:click="goUserPage(participant.user)">
                            <img class="inline-block circular_image" :src="(participant.user && participant.user.profileImages && participant.user.profileImages.length>0 && participant.user.profileImages[0].thumbnailUrl) ? participant.user.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty_'+(participant.gender ? participant.gender : 'm')+'.png'" width="50" style="vertical-align: top;"/>
                            <p class="color-gray-dark mb-0 font-14">{{ (participant.user!=null&&participant.user.nickName!=null) ? participant.user.nickName : ((participant.name!=null) ? participant.name : '비공개') }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content mt-0 pb-3 border-bottom">
                <h2 class="font-15 font-700 mb-2">다이빙 장소</h2>
                
                <div v-for="center in divingData.diveCenters" class="evaluation" style="min-height: 115px;" v-on:click="goDetail('center', center.uniqueName)">
                    <img :src="center.backgroundImages[0].thumbnailUrl" class="rounded-s mx-auto me-3" width="95" height="95" style="float: left;position: relative;"/>
                    <div style="padding-left:110px;">
                        <h2 class="font-16 mb-2 font-600">{{ center.name }}</h2>
                        <p class="color-gray mb-2 line-height-s ellipsis" style="display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;white-space: unset;">{{ center.description }}</p>
                        <p class="pb-0 mb-0 mt-n1"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                            <span> {{ (center.adminScore/20).toFixed(1) }} </span>
                            &nbsp;<font class="color-gray-light">|</font>&nbsp;
                            <span v-if="center.institutionTypes && center.institutionTypes.length > 0"><img v-if="insti in center.institutionTypes" class="ext-img" :src="'/static/images/agency/logo_'+insti.toLowerCase()+'.svg'" height="14" />&nbsp;&nbsp;<font class="color-gray-light">|</font>&nbsp;&nbsp;</span>
                            <span v-if="interest.type=='priceIndex'" v-for="interest in center.interests" style="letter-spacing: -2px;">{{interest.title.replace(/\$/gi, '￦')}}</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="content mt-0 pb-3 border-bottom">
                <h2 class="font-15 font-700 mb-1">이 게시글 신고하기</h2>
            </div>


        </div>
        
        <div v-if="divingData.hostUser && divingData.hostUser._id != userId" id="footer-bar-shop" class="d-flex" style="min-height: 52px !important;height: 52px !important;">
        <div class="me-1 speach-icon">
            <div style="width: 52px;height: 52px;display: inline-block;position: relative;border-right:1px solid rgba(0, 0, 0, 0.08);">
              <i class="far fa-heart font-20" style="display: block;margin-top:16px;"></i>
            </div>
        </div>
        <div class="flex-fill speach-input p-2">
          <a v-if="(divingData.participants.filter(member=> (member.status == 'applied' && member._id == userId))).length > 0" href="#" class="btn btn-full font-400 rounded-s shadow-l bg-gray-dark color-white bd-w-0mb-5 font-noto">참여신청</a>
          <a v-else href="#" data-menu="menu-join" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0mb-5 font-noto">참여신청</a>
        </div>
    </div>

    </div>


    <!-- End of Page Content--> 
    

    <!-- 신청하기 팝업 -->
    <div id="menu-join" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">신청 하시겠습니까?</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">개설자가 수락하는 경우, 알림으로 안내드릴께요.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">취소하기</a>
            </div>
            <div class="col-6 ps-1">
                <a v-on:click="joinDiving()" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">신청하기</a>
            </div>
        </div>
    </div>
    <!-- 신청완료 팝업 -->
    <div id="menu-join-requested" 
         class="menu menu-box-modal" 
         data-menu-height="190" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">신청 완료</h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3">
            <p class="mb-4 text-center font-noto">신청이 완료되었어요.</p>
        </div>
        
        <div class="row m-0">
            <div class="col-12 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-black">확인</a>
            </div>
        </div>
    </div>
    <!-- 평가하기 팝업 -->
    <div id="menu-rating" 
         class="menu menu-box-modal" 
         data-menu-height="590" 
         data-menu-width="370">
        <div class="menu-title">
            <h4 class="text-center mt-4 pt-1 mb-2 font-noto font-19">{{ divingData.location }}<br/><p style="margin: 0px !important;font-weight: 200 !important;font-size:13px;">{{ divingData.title }}</p></h4>
            <a href="#" class="close-menu hide"><i class="fa fa-times-circle"></i></a>
        </div>
        <div class="me-4 ms-4" style="border-bottom: 2px solid black;"></div>
        <div class="content mt-3 border-bottom">
            <p class="mb-0 text-center font-noto">즐거운 다이빙 되셨나요?</p>
            <div class="text-center mt-3">
                <star-rating @rating-selected="setRating" text-class="hide" :rating="3" v-bind:star-size="30" :padding="5" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" style="display: inline-block;"></star-rating>
            </div>
            <div class="text-center color-gray mt-1 mb-2" v-html="rateDescription"></div>
        </div>
        <div class="content mt-0">
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                호스트는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb1" id="thumb1_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb1_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb1" id="thumb1_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb1_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                함께한 참여자는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb2" id="thumb2_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb2_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb2" id="thumb2_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb2_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="border-bottom font-noto" style="margin-top:12px;padding-bottom:12px;">
                방문한 장소는 좋으셨나요?
                <div style="float:right;margin-top: -4px;">
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb3" id="thumb3_1">
                        <label class="form-check-label rounded-xl border-08" for="thumb3_1" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-up color-white font-18"></i>
                        <i class="far fa-thumbs-up font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check" style="padding-left: 23px;">
                        <input class="form-check-input" type="radio" value="" name="thumb3" id="thumb3_2">
                        <label class="form-check-label rounded-xl border-08" for="thumb3_2" style="padding:4px 9px 4px 18px">&nbsp;</label>
                        <i class="far fa-thumbs-down color-white font-18"></i>
                        <i class="far fa-thumbs-down font-16 color-highlight"></i>
                    </div>
                </div>
            </div>
            <div class="input-style validate-field mt-3">
                <textarea class="wedive-textarea" placeholder="의견을 자유롭게 적어주세요." v-model="review_detail"></textarea>
            </div>
        </div>

        <div class="row m-0">
            <div class="col-6 pe-1">
                <a href="#" class="close-menu btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-gray-dark">나중에 평가하기</a>
            </div>
            <div class="col-6 ps-1">
                <a href="#" class="btn btn-m btn-full rounded-0 text-uppercase font-900 shadow-s bg-black">평가완료</a>
            </div>
        </div>
    </div>
    
    <div id="snackbar-join-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>에러가 발생하여 신청이 불가합니다.</div>
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
const axios = require("axios")

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
                query GetDivingById($id: ID!) {
                    getDivingById(_id: $id) {
                        _id
                        title
                        description
                        status
                        hostUser {
                            _id
                            uid
                            nickName
                            scubaLicenseLevel
                            freeLicenseLevel
                            instructorTypes
                            profileImages {
                                thumbnailUrl
                            }
                            birthAge
                            gender
                        }
                        diveSites {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            interests {
                                title
                                type
                            }
                        }
                        divePoints {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            interests {
                                title
                                type
                            }
                        }
                        diveCenters {
                            _id
                            adminScore
                            backgroundImages {
                                _id
                                thumbnailUrl
                            }
                            name
                            uniqueName
                            description
                            latitude
                            longitude
                            institutionTypes
                            interests {
                                title
                                type
                            }
                        }
                        participants {
                            user {
                                _id
                                uid
                                nickName
                                profileImages {
                                    thumbnailUrl
                                }
                            }
                            status
                            name
                            birth
                            gender
                        }
                        interests {
                            title
                            type
                        }
                        maxPeopleNumber
                        startedAt
                        finishedAt
                        createdAt
                    }
                }
                `,
                variables: {
                    id: to.params.id
                }

            }
        });
        
        
        var ret = (result.data && result.data.data && result.data.data.getDivingById) ? result.data.data.getDivingById : null
        next(vm => {vm.setData(ret)});
    }
  },
  async mounted() {
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
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
        $("#footer-bar").hide();
    }

  },
  components: {
    StarRating
  },
  data () {
    return {
        map: null,
        divingData: {},
        locationData: {},
        rating: 3,
        rateDescription: '나쁘지 않아요.',
        review_detail: '',
        showFinishedAt: false,
        gender: localStorage.userGender,
        userThumbnail: localStorage.userThumbnail,
        is_empty: false,
        userId: localStorage.userId,
    }
  },
  methods: {
      async joinDiving() {
          console.log(this.divingData);
          console.log(this.divingData._id);
          const divingId = this.divingData._id;
          var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                mutation Mutation($divingId: ID!) {
                    joinDiving(divingId: $divingId) {
                        success
                        reason
                    }
                }
                `,
                variables: {
                    divingId: divingId
                }

            }
          });
        
          console.log(result);
          var ret = (result.data && result.data.data && result.data.data.joinDiving) ? result.data.data.joinDiving : null;
          console.log(ret);

          if (ret != null) {
              //Close Existing Opened Menus
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}


              var menuData = 'menu-join-requested';
              document.getElementById(menuData).classList.add('menu-active');
              document.getElementsByClassName('menu-hider')[0].classList.add('menu-active');
          } else {
              var toastData = 'snackbar-join-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();

              //Close Existing Opened Menus
              const activeMenu = document.querySelectorAll('.menu-active');
              for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          }
      },
      showReivewModal() {
          //Close Existing Opened Menus
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          
          //var menuData = 'menu-join';
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
          //this.rating = rating;
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
      setData(_divingData) {
          if (_divingData == null) {
            this.is_empty = true;
          } else {
            this.divingData = _divingData;
            //console.log(this.divingData)
            /// 다이버 레벨 보여주기
            this.divingData.hostUser.levelShow = '초보';
            var scuba_level = ["초보", "오픈워터", "어드벤스드", "레스큐", "마스터", "강사"];
            var free_level = ["초보", "레벨1", "레벨2", "레벨3", "레벨4", "강사"];
            var my_s_lvl = parseInt(this.divingData.hostUser.scubaLicenseLevel);
            var my_f_lvl = parseInt(this.divingData.hostUser.freeLicenseLevel)
            if (my_s_lvl > my_f_lvl) {
                this.divingData.hostUser.levelShow = (my_s_lvl>0) ? "스쿠버 " + scuba_level[my_s_lvl] : this.divingData.hostUser.levelShow;
            } else {
                this.divingData.hostUser.levelShow = (my_f_lvl>0) ? "프리 " + free_level[my_f_lvl] : this.divingData.hostUser.levelShow;
            }
            this.divingData.hostUser.levelShow += " 다이버";
            this.divingData.description = this.divingData.description.replace(/\n/gi, '<br/>');
            this.divingData.title = '';
            
            var startedAt = new Date(this.divingData.startedAt);
            var finishedAt = new Date(this.divingData.finishedAt);
            if (this.divingData.startedAt == this.divingData.finishedAt) {
                this.divingData.title = startedAt.getFullYear() + "년 " + (startedAt.getMonth()+1) + "월 " + startedAt.getDate() + "일 "
            } else {
                this.divingData.title = startedAt.getFullYear() + "년 " + (startedAt.getMonth()+1) + "/" + startedAt.getDate() + " ~ " + (finishedAt.getMonth()+1) + "/" + finishedAt.getDate() + " "
            }
            if (startedAt.getFullYear() == finishedAt.getFullYear() && startedAt.getMonth() == finishedAt.getMonth() && startedAt.getDate() == finishedAt.getDate()) {
                this.showFinishedAt = true;
            }

            this.divingData.location = '';
            if (this.divingData.diveSites && this.divingData.diveSites.length > 0) {
                this.locationData = this.divingData.diveSites[0];
                this.divingData.location = this.divingData.diveSites[0].name + " 사이트";
            } else if (this.divingData.divePoints && this.divingData.divePoints.length > 0) {
                this.locationData = this.divingData.divePoints[0];
                this.divingData.location = this.divingData.divePoints[0].name + " 포인트";
            } else if (this.divingData.diveCenters && this.divingData.diveCenters.length > 0) {
                this.locationData = this.divingData.diveCenters[0];
                this.divingData.location = this.divingData.diveCenters[0].name;
            }
            
            /*_nearData.forEach(d => {
                if (d._id != this.locationData._id) {
                    this.nearData.push(d);
                }
            });*/
          }
          setTimeout(function() {
            init_template();
            var preloader = document.getElementById('preloader')
            if(preloader){preloader.classList.add('preloader-hide');}
          }, 1000);
      },
      goUserPage(user) {
          if (user && user._id) {
              location.href = '/user/' + user._id;
          }
      },
      goDetail(type, uniqueName) {
          location.href = type + '/' + uniqueName;
      },
      call: function() {
          console.log("call");
      },
      goCourse: function() {
          location.href='/course';
      }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inline-block {display: inline-block;}
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important}
.evaluation {background-color: rgba(196,187,171,.2);justify-content: space-around;border-radius: 5px;padding:10px;}
.wedive-textarea {min-height: 150px;border: 2px solid #e9e9e9;background: #f5f5f5;padding-left: 10px;padding-right: 10px;}
.owner:after {content: '';
    position: absolute;
    bottom: 20px;
    left: 60%;
    width: 30px;
    height: 30px;
    background-image: url(/static/images/assets/crown_small.png);
    background-repeat: no-repeat;
    background-size: contain;}
</style>
