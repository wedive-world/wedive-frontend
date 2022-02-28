<template>
  <div class="">
    <div data-menu-active="nav-forum"></div>

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
    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="" id="tab-group-1">
                
                
                <swiper
                    class="swiper"
                    :options="swiperOption"
                >
                    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
                    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
                    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
                    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
                    ><swiper-slide>Slide 9</swiper-slide>

                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                


                <!--<swiper
                    ref="mySwiper"
                    :slides-per-view="3"
                    :space-between="50"
                    @slideChange="onSlideChange"
                >
                <swiper-slide
                    :key="0"
                    :virtualIndex="0">
                <div>
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">10분 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 잠실 수영장</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~
                        </div>
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">1</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">1</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>

                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">1일 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 문섬 포인트</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~<br/>
                        </div>
                    </div>
                    <div class="row">
                        <img class="col-12" src="https://fg.startupbridgeva.com/f/m3h/TOb/0kN/9OiKsk0MTnPMjkpw6CwyrDA0jAjOTUxKTc7NVsvqyAdAA.jpg" style="width:100%;"/>
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">6</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">20</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
                    
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">1일 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i>제주 사이트</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~<br/>
                        </div>
                    </div>
                    <div class="square_image inline-block">
                        <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2020/06/09/15916682888292.png" style="object-fit: cover;"/>
                    </div>
                    <div class="square_image inline-block" style="float: right;">
                        <img src="https://d2mgzmtdeipcjp.cloudfront.net/files/good_contents/2020/06/09/15916682352190.png" style="object-fit: cover;"/>
                    </div>
                    <div class="p-3">
                        <div class="mt-1">
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#힐링</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#새해</span>
                            <span class="bg-gray-light color-gray rounded-sm me-2" style="padding: 6px 12px;">#다이빙</span>
                        </div>
                        <div class="mt-4 mb-3">
                            <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">6</span>
                            &nbsp;&nbsp;
                            <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/><span class="font-14 font-noto">20</span>
                        </div>
                    </div>
                    <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
                    
                    
                </div>
                </swiper-slide>
                <swiper-slide
                    :key="1"
                    :virtualIndex="1">
                <div>
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">10분 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 잠실 수영장</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~
                        </div>
                    </div>
                </div>
                </swiper-slide>
                <swiper-slide
                    :key="2"
                    :virtualIndex="2">
                <div>
                    <div class="p-3">
                        <div style="position:relative;">
                            <img class="inline-block me-2 circular_image" src="/static/images/assets/user_empty_m.png" style="vertical-align: top;width:40px;height:40px;"/>
                            <div class="inline-block font-noto">
                                <h5 class="mb-0 font-500 font-15">짱스</h5>
                                <p class="mb-0 mt-n1 font-13 color-gray">초보 다이버</p>
                            </div>
                            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">10분 전</p>
                        </div>
                        <div class="mt-1">
                            <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 잠실 수영장</p>
                        </div>
                        <div class="mt-3">
                            오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>코시국에 이만한 힐링이 없어요.<br/>다들 새해 복 많이 받으세요~
                        </div>
                    </div>
                </div>
                </swiper-slide>
                </swiper>
                -->
                
                
            </div>
            
        </div>
    
    </div>
    </pull-to>


    <div id="forum-add" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createForum" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((isForumWritten==0) ? 'color-gray' : 'color-theme')">확인</a>
                <a href="" class="header-title color font-noto font-16">신규 포럼 생성</a>
            </div>
        </div>
        
        <div class="card rounded-0">
            <div class="content mt-0">
                <div class="input-style no-borders no-icon mb-4" style="margin-right:10px;margin-left:10px;">
                    <input class="form-control" placeholder="새로운 포럼 제목 (동호회 제목)" v-model="forum_add_title">
                </div>
                <div class="input-style validate-field mt-3">
                    <textarea class="wedive-textarea" placeholder="어떤 포럼인지 설명을 적어주세요." v-model="forum_add_description"></textarea>
                </div>
            </div>
        </div>    
    </div>

    <div id="agenda-add" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createAgenda" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((isWritten==0) ? 'color-gray' : 'color-theme')">확인</a>
                <a href="" class="header-title color font-noto font-16">로그 작성</a>
            </div>
        </div>
        
        <div class="card rounded-0">
            <div class="content mt-0">
                <div class="input-style no-borders no-icon mb-4" style="margin-right:10px;margin-left:10px;">
                    <select id="formType" v-model="subjectType">
                        <option value="default" disabled selected>주제를 선택해주세요</option>
                        <option value="agenda">로그북</option>
                        <option value="question">질문</option>
                    </select>
                    <span><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                    <em></em>
                </div>
                <div class="input-style validate-field mt-3">
                    <textarea class="wedive-textarea" placeholder="의견을 자유롭게 적어주세요." v-model="review_detail"></textarea>
                </div>
                <div id="div_upload_photo" class="row m-0 mb-3">
                </div>
                <div class="mb-3 text-center p-2" style="border: 1px solid #e9e9e9;">
                    <input type="file" @change="addImage" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                    <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="/static/images/assets/icon_camera.png" height="18"/>첨부하기</div>
                </div>
            </div>
        </div>
        
    </div>
    
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
    PullTo,
    Swiper,
    SwiperSlide,
  },
  watch: {
      review_detail: function(newVal, oldVal) {
          if (newVal != '') {
              this.isWritten = 1;
          } else {
              this.isWritten = 0;
          }
      },
      forum_add_title: function(newVal, oldVal) {
          if (this.forum_add_title != '' && this.forum_add_description != '') {
              this.isForumWritten = 1;
          } else {
              this.isForumWritten = 0;
          }
      },
      forum_add_description: function(newVal, oldVal) {
          if (this.forum_add_title != '' && this.forum_add_description != '') {
              this.isForumWritten = 1;
          } else {
              this.isForumWritten = 0;
          }
      },
  },
  methods: {
      onSlideChange() {
          //$(".splide__list").removeAttr("data-active");
          //$("#splide__list" + this.swiper.activeIndex).addAttr("data-active");
          console.log("a")
      },
      addImage({ target: { files = [] } }) {
        if (!files.length) {
          return;
        }
        file_photo.push(files[0]);
        $("#div_upload_photo").append('<div class="col-3 p-1 square " style="position: relative;"><div class="square_inner border-08" style="background:url('+URL.createObjectURL(files[0])+');background-size: cover;"><div class="square_inner_close" onclick="abc('+files[0].lastModified+',this);"></div></div></div>');
        if (file_photo.length%4 == 1) {
            var square_height = $("#div_upload_photo .square").height();
            $("#menu-review").css("height", 470 + (square_height*(parseInt(file_photo.length/4)+1)) + "px");
        }
      },
      async createForum() {
            var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }

            var ipt = {name: this.forum_add_title, description: this.forum_add_description}
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Mutation($input: ForumInput) {
                            upsertForum(input: $input) {
                                _id
                                name
                                description
                            }
                        }
                    `,
                    variables: {
                        "input": ipt
                    }
                }
            });
            try {
                Android.vibrate();
                window.navigator.vibrate(20);
            } catch (e) {
                
            }
            if(preloader){
                preloader.classList.remove('opacity-50');
                preloader.classList.add('preloader-hide');
            }
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
      },
      async createAgenda() {
            var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }
            var _id_list = new Array();
            for (var i=0; i<file_photo.length; i++) {
                var mutation = gql`
                    mutation UploadImageMutation($uploadImageFile: Upload!) {
                        uploadImage(file: $uploadImageFile) {
                            _id
                            name
                            mimeType
                            encoding
                            thumbnailUrl
                            createdAt
                            updatedAt
                        }
                    }
                `
                var client = new GraphQLClient('https://api.wedives.com/graphql',
                {
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    }
                })

                var result_img = await client.request(mutation, {uploadImageFile:file_photo[i],});
                
                var updateMutation = gql`
                    mutation Mutation($input: UpdateImageInput!) {
                        updateImage(input: $input) {
                            _id
                            name
                            description
                            reference
                            uploaderId
                            mimeType
                            encoding
                            fileSize
                            thumbnailUrl
                        }
                    }
                `;
                var result_upload = await client.request(updateMutation, {input: {"_id": result_img.uploadImage._id,"name": result_img.name,"description": "reviewImage","reference": null}});
                _id_list.push(result_img.uploadImage._id);
            }
            var _input = {type: this.subjectType, content: this.review_detail, images: _id_list};
            const ipt = _input;

          var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Mutation($input: AgendaInput) {
                            upsertAgenda(input: $input) {
                                _id
                                type
                                author {
                                uid
                                _id
                                nickName
                                birthAge
                                gender
                                profileImages {
                                    thumbnailUrl
                                }
                                }
                                languageCode
                                title
                                content
                                createdAt
                                updatedAt
                                images {
                                _id
                                thumbnailUrl
                                }
                                reviews {
                                _id
                                content
                                createdAt
                                author {
                                    _id
                                    uid
                                    nickName
                                    gender
                                    profileImages {
                                    thumbnailUrl
                                    }
                                }
                                }
                            }
                        }
                    `,
                    variables: {
                        "input": ipt
                    }
                }
            });
            try {
                Android.vibrate();
                window.navigator.vibrate(20);
            } catch (e) {
                
            }
            if(preloader){
                preloader.classList.remove('opacity-50');
                preloader.classList.add('preloader-hide');
            }
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
      },
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            setTimeout(function() {
                loaded('done')
            },1000);
        } else {
            console.log("1")
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
  },
  mounted() {
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
    setTimeout(function() {
        $(".splide__list h5:not(.is-active)").addClass("collapsed")
    },500);
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    swiper() {
        return this.$refs.mySwiper.swiper;
    }
  },
  data () {
    return {
        swiperOption: {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination'
            },
            //slidesOffsetBefore: 130, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
            //slidesOffsetAfter: 130, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
            centeredSlides: true,
            
        },
        isWritten: 0,
        isForumWritten: 0,
        scrollTop: 0,
        review_detail: '',
        file_photo: [],
        subjectType: 'default',
        forum_add_title: '',
        forum_add_description: '',
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
        center_list : [
            {title: "버블탱크 스쿠바다이빙", desc: "제주 남부에 위치한 PADI 5star 다이빙센터", star: 3.8, price_index: 2, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test1.jpg', position: {lat: 33.24134444312815, lng: 126.56484940647604}},
            {title: "다이브 투게더리조트", desc: "한줄설명1", star: 4.8, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test2.jpg', position: {lat: 33.241633952501715, lng: 126.56456092676112}},
            {title: "태평양 다이빙스쿨", desc: "블라블라", star: 3.1, price_index: 3, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test3.jpg', position: {lat: 33.24030993345755, lng: 126.56472966827262}},
            {title: "쿨다이브", desc: "뭐라적지", star: 2.8, price_index: 2, feature: "드리프트", img: '/static/images/shop1/diving/test4.jpg', position: {lat: 33.241266401158086, lng: 126.56278906254684}},
            {title: "스플래시 리조트", desc: "이곳에 설명이", star: 4.2, price_index: 4, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test5.jpg', position: {lat: 33.24245948959435, lng: 126.5633415608148}},
            {title: "제주 블루샤크다이빙", desc: "ㅁㄴㅇㄹㄴㄷㅁㅈㄷㄻㄴㄷㄹㄷㅁㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄹ", star: 3.9, price_index: 2, feature: "난파선", img: '/static/images/shop1/diving/test6.jpg', position: {lat: 33.24380026488202, lng: 126.56288927674295}},
            {title: "잠수타기 다이브클럽", desc: "ㅁㄷㄴㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄷㄻㄴㄹㄷㅁㄷㄴㄻㄷㄴㄻㄴㄻㄴㄷㄹㄷㅁㄴㄹ", star: 4.1, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test7.jpg', position: {lat: 33.24194725508795, lng: 126.5616725869943}},
            {title: "홀리데이 다이빙 코리아", desc: "히히", star: 4.2, price_index: 3, feature: "덕다이빙, 케이브, 난파선, 드리프트", img: '/static/images/shop1/diving/test8.jpg', position: {lat: 33.24088391439924, lng: 126.5628795809329}},
            {title: "천지연40", desc: "헬로", star: 4.3, price_index: 2, feature: "난파선, 드리프트", img: '/static/images/shop1/diving/test9.jpg', position: {lat: 33.242485636047576, lng: 126.5623109526933}},
            {title: "언더더씨 스쿠바다이빙", desc: "방가워", star: 4.7, price_index: 2, feature: "덕다이빙, 케이브", img: '/static/images/shop1/diving/test10.jpg', position: {lat: 33.244246055136834, lng: 126.5671937429616}}
        ],

    }
  }

  
}


</script>


<style scoped>
.inline-block {display: inline-block !important;}
.transform-none {transform: inherit !important;};
.splide__slide h5 {text-align:center;padding: 8px 0;}
.splide__list > .is-visible:not(.collapsed) {border-bottom: 3px solid #1d397c !important;}

.top-load-wrapper {line-height: 10px;text-align: center;}
.fa-arrow-down {transition: .2s;transform: rotate(180deg);}
.fa-spinner {transform: rotate(0deg);animation-name: loading;animation-duration: 3s;animation-iteration-count: infinite;animation-direction: alternate;}
.fadeout {animation-name: fadeout50;animation-duration: 1s;animation-iteration-count:1;}
@keyframes loading{from {transform: rotate(0deg);}to {transform: rotate(360deg);}}
@keyframes fadeout50 {from {opacity: 0.5;}to {opacity: 0;}}

.wedive-textarea {min-height: 150px;padding-left: 10px;padding-right: 10px;}

</style>
