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
                    <swiper-slide v-for="(forum,index) in getForums.filter(x=>x.name!='트레이닝')" :key="forum._id"><div v-on:click="moveTo(index)">{{ forum.name }}</div></swiper-slide>
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
                <div class="input-style no-borders no-icon mb-4 wedive-input">
                    <select id="formType" v-model="subjectType" style="color:#757575;border: none;">
                        <option value="default" disabled selected>글 종류를 선택해주세요.</option>
                        <option v-for="agendaType in getAllAgendaTypes" :value="agendaType._id">{{ agendaType.name }}</option>
                    </select>
                    <span class="me-2"><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                    <em></em>
                </div>
                <div class="input-style validate-field mt-3">
                    <textarea rows="1" class="wedive-textarea2 wedive-input" placeholder="제목을 입력하세요." v-model="agenda_title"></textarea>
                    <textarea class="wedive-textarea wedive-input" :placeholder="textPlaceholder" v-model="agenda_contents"></textarea>
                </div>
                <tags-input 
                    element-id="tags"
                    v-model="selectedTags"
                    :typeahead-style="'dropdown'"
                    :placeholder="'(옵션) 태그를 입력하세요.'"
                    :existing-tags="tagSuggestion"
                    :typeahead="true">
                </tags-input>
                
                
                <vue-typeahead-bootstrap
                    id="search_typeahead"
                    class="wedive-search mt-2"
                    v-model="selectedTags2"
                    :data="locations"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selectedLocation = $event;"
                    :minMatchingChars="1"
                    :showAllResults="true"
                    :maxMatches="30"
                    placeholder="(옵션) 다이빙 장소를 입력하세요."
                    inputClass="special-input-class"
                    @input="lookupUser3"
                    >
                    <template slot="suggestion" slot-scope="{ data, htmlText }">
                        <div class="d-flex align-items-center">
                        <img
                            class="rounded-s me-2"
                            :src="(data.backgroundImages && data.backgroundImages.length>0) ? data.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"
                            style="width: 40px; height: 40px;" />
                        <span v-if="data.type == 'site'" class="ml-4" v-html="'<span class=\'badge border color-site border-site\'>사이트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'badge border color-point border-point\'>포인트</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'badge border color-center border-center\'>센터</span>&nbsp;<i class=\'fa fa-star color-yellow-dark icon-10 text-center me-2\'></i>'+(data.adminScore/20).toFixed(1)+'<br/><span class=\'font-noto font-16\'>' + htmlText + '</span>'"></span>
                        </div>
                    </template>
                </vue-typeahead-bootstrap>
                
                <div id="div_upload_photo" class="row m-0 mb-3 mt-3">
                </div>
                <div class="mb-3 text-center p-2 wedive-button">
                    <input type="file" @change="addImage" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                    <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_camera.png" height="18"/>첨부하기</div>
                </div>
            </div>
        </div>
    </div>

    <div id="community-add" 
         class="menu menu-box-modal rounded-0" 
         data-menu-width="cover"
         data-menu-height="cover"
         style="margin-bottom: 0;">
        
        <div class="card rounded-0 bg-2" data-card-height="50">
            <div class="card-top p-2">
                <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                <a v-on:click="createCommunity" href="#" :class="'float-end icon icon-s rounded-l bg-theme me-3 mt-2 font-noto font-16 ' + ((isCommunityWritten==0) ? 'color-gray' : 'color-theme')">확인</a>
                <a href="" class="header-title color font-noto font-16">동호회 생성</a>
            </div>
        </div>
        
        <div class="card rounded-0">
            <div class="content mt-0">
                <div class="input-style validate-field mt-3">
                    <textarea rows="1" class="wedive-textarea2 wedive-input" placeholder="동호회 이름을 입력하세요." v-model="community_title"></textarea>
                    <textarea class="wedive-textarea wedive-input" placeholder="동호회 설명을 입력하세요." v-model="community_contents"></textarea>
                </div>

                <div class="">
                    <div id="is_private"
                        class="d-flex no-effect"
                        data-trigger-switch="toggle-id-1" 
                        data-bs-toggle="collapse" 
                        href="#collapse1" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="collapse1">
                        <div class="pt-1">
                            <h4 class="pt-3 mb-2">비공개 동호회</h4>
                        </div>
                        <div class="ms-auto me-4 pe-2 mt-2">
                            <div class="custom-control ios-switch" style="margin-top:16px !important;">
                                <input type="checkbox" class="ios-input" id="toggle-id-1">
                                <label class="custom-control-label" for="toggle-id-1"></label>
                            </div>
                        </div>
                    </div>
                    <div class="collapse" id="collapse1">
                        <textarea rows="1" class="wedive-textarea2 wedive-input" placeholder="비밀번호를 입력하세요." v-model="community_password" style="width:100%;padding-top:10px;"></textarea>
                    </div>
                </div>
                
                <div id="div_upload_photo_community" class="row m-0 mb-3 mt-3">
                </div>
                <div :class="'mb-3 text-center p-2 wedive-button' + (file_photo_community.length > 0 ? ' btn_disabled' : '')">
                    <input v-if="file_photo_community.length > 0" type="file" @change="addImageCommunity" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;" disabled="disabled">
                    <input v-else type="file" @change="addImageCommunity" id="" accept=".jpg, .png" style="text-indent: -999px;outline: none;width: 100%;height: 45px;color: rgba(0, 0, 0, 0) !important;">
                    <div class="upload-file-text" style="color: black;margin-top:-44px !important;margin-bottom:12px;"><img class="me-1" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_camera.png" height="18"/>대표 이미지</div>
                </div>
            </div>
        </div>
    </div>
    
    <div id="snackbar-new-community-error" class="snackbar-toast color-white bg-red-dark" data-bs-delay="1500" data-bs-autohide="true" style="z-index:9999;"><i class="fa fa-times me-3"></i>비밀번호를 입력해주세요.</div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import gql from 'graphql-tag'
//import { GraphQLClient, request, gql } from "graphql-request";
import VoerroTagsInput from '@voerro/vue-tagsinput';
import '@voerro/vue-tagsinput/dist/style.css'

import ForumAgendaMyPage from './ForumAgendaMyPage.vue';
import ForumAgendaAllPage from './ForumAgendaAllPage.vue';
import ForumCommunityPage from './ForumCommunityPage.vue';

const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide,
    "tags-input": VoerroTagsInput,
    ForumAgendaMyPage,
    ForumAgendaAllPage,
    ForumCommunityPage,
  },
  watch: {
      subjectType: function(newVal, oldVal) {
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
      community_title: function(newVal, oldVal) {
          if (this.community_title != '' && this.community_contents != '') {
              this.isCommunityWritten = 1;
          } else {
              this.isCommunityWritten = 0;
          }
      },
      community_contents: function(newVal, oldVal) {
          if (this.community_title != '' && this.community_contents != '') {
              this.isCommunityWritten = 1;
          } else {
              this.isCommunityWritten = 0;
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
      },
      getAllAgendaTypes: {
          query:gql `
            query Query {
                getAllAgendaTypes {
                    _id
                    name
                }
            }
          `
      },
  },
  methods: {
      moveTo(idx) {
          this.contentSwiper.slideTo(idx);
          setTimeout(function() {
            var height = $(".wedive-content-swiper > .swiper-wrapper > .swiper-slide-active").height();
            if (height < ($(window).height() - 172)) {
                height = $(window).height() - 172;
            }
            $(".wedive-content-swiper").eq(0).css("max-height", height);
          },100);
      },
      tabSlideChange() {
          this.contentSwiper.slideTo(this.tabSwiper.activeIndex);
          setTimeout(function() {
            var height = $(".wedive-content-swiper > .swiper-wrapper > .swiper-slide-active").height();
            if (height < ($(window).height() - 172)) {
                height = $(window).height() - 172;
            }
            $(".wedive-content-swiper").eq(0).css("max-height", height);
          },100);
          
      },
      onSlideChange() {
          //console.log("1")
          this.tabSwiper.slideTo(this.contentSwiper.activeIndex);
          setTimeout(function() {
            var height = $(".wedive-content-swiper > .swiper-wrapper > .swiper-slide-active").height();
            if (height < ($(window).height() - 172)) {
                height = $(window).height() - 172;
            }
            //console.log("height=" + height + " / window_height=" + ($(window).height()-182))
            $(".wedive-content-swiper").eq(0).css("max-height", height);
          },100);
      },
      addImage({ target: { files = [] } }) {
        if (!files.length) {
          return;
        }
        this.file_photo.push(files[0]);
        $("#div_upload_photo").append('<div class="col-3 p-1 square " style="position: relative;"><div class="square_inner border-08" style="background:url('+URL.createObjectURL(files[0])+');background-size: cover;"><div class="square_inner_close" onclick="abc('+files[0].lastModified+',this);"></div></div></div>');
        if (this.file_photo.length%4 == 1) {
            var square_height = $("#div_upload_photo .square").height();
            $("#menu-review").css("height", 470 + (square_height*(parseInt(this.file_photo.length/4)+1)) + "px");
        }
      },
      addImageCommunity({ target: { files = [] } }) {
        if (!files.length || this.file_photo_community.length > 0) {
          return;
        }
        this.file_photo_community.push(files[0]);
        $("#div_upload_photo_community").append('<div class="col-3 p-1 square " style="position: relative;"><div class="square_inner border-08" style="background:url('+URL.createObjectURL(files[0])+');background-size: cover;"><div class="square_inner_close" onclick="abc('+files[0].lastModified+',this);"></div></div></div>');
        if (this.file_photo_community.length%4 == 1) {
            var square_height = $("#div_upload_photo_community .square").height();
            $("#menu-review").css("height", 470 + (square_height*(parseInt(this.file_photo_community.length/4)+1)) + "px");
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
            // jjangs close menu
            if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
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
            // jjangs close menu
            if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
            }
      },
      async createCommunity() {
          var is_private = $("#is_private").attr("aria-expanded");
          if (is_private && (this.community_password == null || this.community_password == '')) {
              var toastData = 'snackbar-new-community-error';
              var notificationToast = document.getElementById(toastData);
              var notificationToast = new bootstrap.Toast(notificationToast);
              notificationToast.show();
              
              return;
          }
          var preloader = document.getElementById('preloader')
          if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
          }
          var _id_list = new Array();
          for (var i=0; i<this.file_photo_community.length; i++) {
                var result_img = await this.$apollo.mutate({
                    // Query
                    mutation: gql`
                        mutation UploadImageMutation($file: Upload!) {
                            uploadImage(file: $file) {
                                _id
                                name
                                mimeType
                                encoding
                                thumbnailUrl
                                createdAt
                                updatedAt
                            }
                        }
                    `,
                    // Parameters
                    variables: {
                        file: this.file_photo_community[i]
                    },
                });
                var result_upload = await this.$apollo.mutate({
                    // Query
                    mutation: gql`
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
                    `,
                    // Parameters
                    variables: {
                        input: {
                            _id: result_img.uploadImage._id,
                            name: result_img.name,
                            description: "communityTitle",
                            reference: null
                        }
                    },
                });
                
                _id_list.push(result_img.uploadImage._id);
          }
          var _input = {title: this.community_title, description: this.community_contents, images: _id_list, visibility: "public"};
          if (is_private) {
              _input.visibility = "private";
              _input.password = this.community_password;
          }
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
                    mutation Mutation($input: CommunityInput) {
                        upsertCommunity(input: $input) {
                            _id
                        }
                    }
                `,
                variables: {
                    "input": ipt
                }
            }
          });
          console.log(result);
          //if (result.data.data.upsertCommunity._id == null) {
              //console.log(result);
          //}
          if(preloader){
                preloader.classList.remove('opacity-50');
                preloader.classList.add('preloader-hide');
          }
          const activeMenu = document.querySelectorAll('.menu-active');
          for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
          // jjangs close menu
          if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
          }
      },
      async createAgenda() {
            var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }
            var _id_list = new Array();
            for (var i=0; i<this.file_photo.length; i++) {
                var result_img = await this.$apollo.mutate({
                    // Query
                    mutation: gql`
                        mutation UploadImageMutation($file: Upload!) {
                            uploadImage(file: $file) {
                                _id
                                name
                                mimeType
                                encoding
                                thumbnailUrl
                                createdAt
                                updatedAt
                            }
                        }
                    `,
                    // Parameters
                    variables: {
                        file: this.this.file_photo[i]
                    },
                });
                var result_upload = await this.$apollo.mutate({
                    // Query
                    mutation: gql`
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
                    `,
                    // Parameters
                    variables: {
                        input: {
                            _id: result_img.uploadImage._id,
                            name: result_img.name,
                            description: "agendaImage",
                            reference: null
                        }
                    },
                });

                _id_list.push(result_img.uploadImage._id);
            }
  
            var _input = {types: [this.subjectType], targetId: "621db036efe4c50da6ea0825", title: this.agenda_title, content: this.agenda_contents, hashTags: this.selectedTags.map((x)=>{return {name: x.value}}), images: _id_list};
            if (this.selectedLocation.hasOwnProperty("_id")) {
                _input.agendaPlaces = [this.selectedLocation._id];
            }

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
                                agendaPlaces {
                                ... on DiveCenter {
                                    name
                                }
                                ... on DiveSite {
                                    name
                                }
                                ... on DivePoint {
                                    name
                                }
                                }
                                types {
                                    _id
                                    name
                                }
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
            // jjangs close menu
            if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
            }
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
      async lookupUser3() {
        this.locations = [];
        const query = this.selectedTags2;
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    query SearchPlaces($searchParams: SearchParams, $limit: Int) {
                        searchPlaces(searchParams: $searchParams, limit: $limit) {
                            __typename
                            ... on DiveCenter {
                                _id
                                uniqueName
                                name
                                description
                                divingType
                                adminScore
                                latitude
                                longitude
                                backgroundImages {
                                    thumbnailUrl
                                }
                            }
                            ... on DiveSite {
                                _id
                                uniqueName
                                name
                                description
                                adminScore
                                latitude
                                longitude
                                backgroundImages {
                                    thumbnailUrl
                                }
                            }
                            ... on DivePoint {
                                _id
                                uniqueName
                                name
                                description
                                adminScore
                                latitude
                                longitude
                                backgroundImages {
                                    thumbnailUrl
                                }
                            }
                            address
                            latitude
                            longitude
                            countryCode
                        }
                    }
                `,
                variables: {
                    "limit": 10,
                    "searchParams": {
                        "query": query
                    }
                }
            }
        });
        //result.data.data.searchDiveCentersByName.forEach(x=>result.data.data.searchDiveCentersByName)
        var result_list = new Array();
        if (result.data.data.searchPlaces) {
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveSite').forEach(item => {item.type='site';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DivePoint').forEach(item => {item.type='point';result_list.push(item)});
            result.data.data.searchPlaces.filter(place => place.__typename == 'DiveCenter').forEach(item => {item.type='center';result_list.push(item)});
        }
        //if (result.data.data.searchDiveSitesByName) result.data.data.searchDiveSitesByName.forEach(x=>{x.type='site';result_list.push(x)});
        //if (result.data.data.searchDivePointsByName) result.data.data.searchDivePointsByName.forEach(x=>{x.type='point';result_list.push(x)});
        //if (result.data.data.searchDiveCentersByName) result.data.data.searchDiveCentersByName.forEach(x=>{x.type='center';result_list.push(x)});
        this.locations = result_list;
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
  data () {
    return {
        tagSuggestion: JSON.parse(localStorage.suggestion).map(x=>{return({key: x, value: x})}),
        locations: [],
        getForums: [],
        getAllAgendaTypes: [],
        textPlaceholder: '의견을 자유롭게 적어주세요.',
        swiperOption: {
            slidesPerView: 3.7,
            spaceBetween: 5,
            pagination: false,
            //pagination: {
            //    el: '.swiper-pagination'
            //},
            slidesOffsetBefore: 16, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
            //slidesOffsetAfter: 130, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
            centeredSlides: true,
            
        },
        isWritten: 0,
        isCommunityWritten: 0,
        isForumWritten: 0,
        isAgendaTypeWritten: 0,
        scrollTop: 0,
        agenda_title: '',
        agenda_contents: '',
        community_title: '',
        community_contents: '',
        community_password: '',
        selectedTags: [],
        selectedTags2: '',
        selectedLocation: {},
        file_photo: [],
        file_photo_community: [],
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
.btn_disabled {cursor: not-allowed;background:#e1e2e3;}
.btn_disabled > div {color: #777 !important;}
.btn_disabled > img {filter: contrast(10%);}
</style>
