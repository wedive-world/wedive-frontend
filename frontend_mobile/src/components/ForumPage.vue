<template>
  <div class="">
    <div data-menu-active="nav-forum"></div>

    <div class="page-content text-start transform-none" style="padding-bottom: 65px;">
        <div class="card card-style ms-0 me-0 rounded-0 mb-0">
            <div class="" id="tab-forum" style="background-color: #eff5fb;border-bottom:3px solid #d7dce0;">
                <swiper
                    ref="tabSwiper"
                    class="swiper wedive-swiper"
                    :options="swiperOption"
                    @slideChange="tabSlideChange"
                >
                    <swiper-slide><div v-on:click="moveTo(0)">My 포럼</div></swiper-slide>
                    <swiper-slide><div v-on:click="moveTo(1)">포럼</div></swiper-slide>
                    <swiper-slide><div v-on:click="moveTo(2)">동호회</div></swiper-slide>
                    <swiper-slide><div v-on:click="moveTo(3)">쇼핑</div></swiper-slide>
                    <swiper-slide><div v-on:click="moveTo(4)">트레이닝</div></swiper-slide>
                    <swiper-slide><div v-on:click="moveTo(5)">뉴스</div></swiper-slide>
                    
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div>
                <swiper
                    ref="contentSwiper"
                    class="wedive-content-swiper"
                    @slideChange="onSlideChange"
                >
                <swiper-slide
                    :key="0"
                    :virtualIndex="0">
                    <forum-agenda-my-page
                        ref="forumAgendaMyPage"
                    />
                </swiper-slide>
                <swiper-slide
                    :key="1"
                    :virtualIndex="1">
                    <forum-agenda-all-page
                        ref="forumAgendaAllPage"
                    />
                </swiper-slide>
                <swiper-slide
                    :key="2"
                    :virtualIndex="2">
                    <forum-community-page
                        ref="forumCommunityPage"
                    />
                </swiper-slide>
                </swiper>
                
                
                
            </div>
            
        </div>
    
    </div>


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

    <div id="agenda-type-add" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createAgendaType" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((isAgendaTypeWritten==0) ? 'color-gray' : 'color-theme')">확인</a>
                <a href="" class="header-title color font-noto font-16">신규 아젠다 타입 생성</a>
            </div>
        </div>
        
        <div class="card rounded-0">
            <div class="content mt-0">
                <div class="input-style no-borders no-icon mb-4" style="margin-right:10px;margin-left:10px;">
                    <input class="form-control" placeholder="타입 이름 (질문)" v-model="agenda_type_add">
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
                <a href="" class="header-title color font-noto font-16">글 작성</a>
            </div>
        </div>
        
        <div class="card rounded-0">
            <div class="content mt-0">
                <div class="input-style no-borders no-icon mb-4">
                    <select id="formType" v-model="subjectType" style="padding-left:10px;color:#757575;border: 1px solid #e9e9e9;">
                        <option value="default" disabled selected>글 종류를 선택해주세요.</option>
                        <option value="agenda">일반</option>
                        <option value="question">질문</option>
                    </select>
                    <span><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                    <em></em>
                </div>
                <div class="input-style validate-field mt-3">
                    <textarea rows="1" class="wedive-textarea2" placeholder="제목을 입력하세요." v-model="agenda_title"></textarea>
                    <textarea class="wedive-textarea" :placeholder="textPlaceholder" v-model="agenda_contents"></textarea>
                </div>
                <tags-input 
                element-id="tags"
                v-model="selectedTags"
                :typeahead-style="'dropdown'"
                :placeholder="'(옵션) 태그를 입력하세요.'"
                :existing-tags="[
                    { key: '마크로', value: '마크로' },
                    { key: '일상', value: '일상' },
                    { key: '맛집', value: '맛집' },
                ]"
                :typeahead="true">
                </tags-input>
                
                
                <tags-input 
                element-id="tags"
                v-model="selectedTags2"
                :typeahead-style="'dropdown'"
                :placeholder="'(옵션) 다이빙 장소를 입력하세요.'"
                :existing-tags="[
                    { key: 'K26', value: 'K26' },
                    { key: '잠실수영장', value: '잠실수영장' },
                    { key: '울산수영장', value: '울산수영장' },
                ]"
                :typeahead="true"
                class="mt-2">
                </tags-input>
                <div id="div_upload_photo" class="row m-0 mb-3 mt-3">
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
import VoerroTagsInput from '@voerro/vue-tagsinput';
import '@voerro/vue-tagsinput/dist/style.css'

import ForumAgendaMyPage from './ForumAgendaMyPage.vue';
import forumAgendaAllPage from './forumAgendaAllPage.vue';
import ForumCommunityPage from './ForumCommunityPage.vue';

const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
    "tags-input": VoerroTagsInput,
    ForumAgendaMyPage,
    forumAgendaAllPage,
    ForumCommunityPage,
  },
  watch: {
      subjectType: function(newVal, oldVal) {
          console.log(newVal);
          if (newVal == 'agenda') {
              this.textPlaceholder = '의견을 자유롭게 적어주세요.';
          } else if (newVal == 'question') {
              this.textPlaceholder = '질문을 자유롭게 적어주세요.';
          }
      },
      agenda_contents: function(newVal, oldVal) {
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
      agenda_type_add: function(newVal, oldVal) {
          if (this.agenda_type_add != '') {
              this.isAgendaTypeWritten = 1;
          } else {
              this.isAgendaTypeWritten = 0;
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
      moveTo(idx) {
          console.log(idx);
          this.contentSwiper.slideTo(idx);
          var height = $(".wedive-content-swiper .swiper-wrapper .swiper-slide-active").height();
          if (height < ($(window).height() - 172)) {
              height = $(window).height() - 172;
          }
          $(".wedive-content-swiper").eq(0).css("max-height", height);
      },
      tabSlideChange() {
          this.contentSwiper.slideTo(this.tabSwiper.activeIndex);
          var height = $(".wedive-content-swiper .swiper-wrapper .swiper-slide-active").height();
          if (height < ($(window).height() - 172)) {
              height = $(window).height() - 172;
          }
          $(".wedive-content-swiper").eq(0).css("max-height", height);
      },
      onSlideChange() {
          this.tabSwiper.slideTo(this.contentSwiper.activeIndex);
          var height = $(".wedive-content-swiper .swiper-wrapper .swiper-slide-active").height();
          if (height < ($(window).height() - 172)) {
              height = $(window).height() - 172;
          }
          $(".wedive-content-swiper").eq(0).css("max-height", height);
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
      async createAgendaType() {
          var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }

            var ipt = {name: this.agenda_type_add}
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation UpsertAgendaType($input: AgendaTypeInput) {
                            upsertAgendaType(input: $input) {
                                _id
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
            var _input = {type: this.subjectType, content: this.agenda_contents, images: _id_list};
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
    tabSwiper() {
        if (this.$refs.tabSwiper.hasOwnProperty("swiper")){
            return this.$refs.tabSwiper.swiper;
        } else {
            return this.$refs.tabSwiper.$swiper;
        }
    },
    contentSwiper() {
        if (this.$refs.tabSwiper.hasOwnProperty("swiper")){
            return this.$refs.contentSwiper.swiper;
        } else {
            return this.$refs.contentSwiper.$swiper;
        }
    }
  },
  apollo: {
      getForums: {
          query:gql `
            query Query {
                getForums {
                    _id
                    name
                    description
                }
            }
          `
      }
  },
  data () {
    return {
        textPlaceholder: '의견을 자유롭게 적어주세요.',
        swiperOption: {
            slidesPerView: 3.7,
            spaceBetween: 5,
            //pagination: {
            //    el: '.swiper-pagination'
            //},
            slidesOffsetBefore: 16, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
            //slidesOffsetAfter: 130, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
            centeredSlides: true,
            
        },
        isWritten: 0,
        isForumWritten: 0,
        isAgendaTypeWritten: 0,
        scrollTop: 0,
        agenda_title: '',
        agenda_contents: '',
        selectedTags: [
        ],
        selectedTags2: [
        ],
        file_photo: [],
        subjectType: 'default',
        forum_add_title: '',
        agenda_type_add: '',
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

.wedive-textarea {min-height: 150px;padding-left: 10px;padding-right: 10px;border: 1px solid #e9e9e9;}
.wedive-textarea2 {max-height: 45px;padding-left: 10px;padding-right: 10px;border: 1px solid #e9e9e9;}

.wedive-swiper {min-height: 46px;padding-top: 10px;}

.wedive-swiper > .swiper-wrapper > .swiper-slide {font-size:16px;color:#c1c2c3;font-family: 'Noto Sans Korean';font-weight:500;}
.wedive-swiper > .swiper-wrapper > .swiper-slide-active {font-size:20px;color:black;font-weight:600;}
</style>
