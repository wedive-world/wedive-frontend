<template>
  <div class="text-center">
    <div data-menu-active="nav-forum"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">{{ '커뮤니티 상세' }}</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a class="font-16 header-icon header-icon-3" data-menu="agenda-add"><i class="fas fa-edit"></i></a>
        <a data-menu="menu-main-right" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0" style="margin-top:50px;">
        <template class="text-center" slot="top-block" slot-scope="props">
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
        
        <div class="text-start card mb-0" style="min-height: calc(100vh - 50px);">
          <div v-for="agenda in getAgendasByTargetId">
            <div class="p-3">
              <div style="position:relative;" v-on:click="goUser(agenda.author)">
                  <div class="user-img-s me-2">
                      <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                          <defs>
                          <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                          <clipPath id="clipSquircle">
                              <use xlink:href="#shapeSquircle"/>
                          </clipPath>
                          </defs>
                          <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="agenda.author.profileImages && agenda.author.profileImages.length > 0 && agenda.author.profileImages[0].thumbnailUrl ? agenda.author.profileImages[0].thumbnailUrl : '/static/images/assets/user_empty.png'"/>
                      </svg>
                  </div>
                  <div class="inline-block font-noto v-align-top mt-1">
                      <h5 class="mb-0 font-500 font-15">{{ agenda.author.nickName }}</h5>
                      <p class="mb-0 mt-n1 font-13 color-gray">{{ getDiverLevel(agenda.author.freeLicenseLevel, agenda.author.scubaLicenseLevel) }}</p>
                  </div>
                  <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">10분 전</p>
              </div>
              <div class="">
                  <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> 잠실 수영장</p>
              </div>
              <div v-on:click="goDetail()">
                <h5 class="font-600 mt-3 mb-2 font-17">{{ agenda.title }}</h5>
                <p class="mb-0 font-noto opacity-90" style="line-height: 1.5;">
                  {{ agenda.content }}
                  <span class="color-gray ms-2">... 더 보기</span>
                </p>
              </div>
            </div>
            <div class="" v-if="agenda.images && agenda.images.length > 0">
              <div class="img_square" v-for="image in agenda.images">
                <div class="img_square_inner" :style="'background: url('+image.thumbnailUrl+');'"/>
              </div>
            </div>
            <div class="p-3">
              <div class="mt-1">
                  <span v-for="hashtag in agenda.hashTags" class="bg-gray-light color-gray rounded-sm me-1" style="padding: 6px 12px;">#{{ hashtag.name }}</span>
              </div>
              <div class="mt-4 mb-3">
                  <img src="/static/images/assets/ico_heart.png" width="22" class="me-1" style="margin-top:-1px;"/>
                  <span class="font-14 font-noto">{{ agenda.likes ? agenda.likes : 0 }}</span>
                  &nbsp;&nbsp;
                  <img src="/static/images/assets/ico_chat.png" width="22" class="me-1" style="margin-top:-1px;"/>
                  <span class="font-14 font-noto">{{ agenda.reviewCount ? agenda.reviewCount : 0 }}</span>
              </div>
            </div>
            <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
          </div>

        </div>

    </pull-to>

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
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
import VoerroTagsInput from '@voerro/vue-tagsinput';
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
      PullTo,
      "tags-input": VoerroTagsInput,
  },
  methods: {
      async createAgenda() {
            var preloader = document.getElementById('preloader')
            if(preloader){
                preloader.classList.remove('preloader-hide');
                preloader.classList.add('opacity-50');
            }
            var _id_list = new Array();
            for (var i=0; i<this.file_photo.length; i++) {
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

                var result_img = await client.request(mutation, {uploadImageFile:this.file_photo[i],});
                
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
                var result_upload = await client.request(updateMutation, {input: {"_id": result_img.uploadImage._id,"name": result_img.name,"description": "agendaImage","reference": null}});
                _id_list.push(result_img.uploadImage._id);
            }
  
            var _input = {types: [this.subjectType], targetId: this.communityId, title: this.agenda_title, content: this.agenda_contents, hashTags: this.selectedTags.map((x)=>{return {name: x.value}}), images: _id_list};
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
                await this.$apollo.queries.getAgendasByTargetId.refetch()
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
      goUser(author) {
        location.href='/user/' + author._id;
      },
      goDetail() {
        location.href='/forum/detail';
      },
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            await this.$apollo.queries.getAgendasByTargetId.refetch()
            loaded('done')
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
  },
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    document.getElementById("page-back").classList.remove("hide");

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
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
  },
  data () {
    return {
      communityId: this.$route.params.id,
      subjectType: 'default',
      textPlaceholder: '의견을 자유롭게 적어주세요.',
      getAllAgendaTypes: [],
      agenda_title: '',
      agenda_contents: '',
      isWritten: 0,
      selectedTags: [],
      selectedTags2: [],
      file_photo: [],
      skip: 0,
      limit: 20,
      scrollTop: 0,
      getAgendasByTargetId: [],
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
      getCommunityById : {
        query:gql`
          query Query($id: ID!) {
            getCommunityById(_id: $id) {
              title
              description
              owners {
                _id
                uid
                nickName
                profileImages {
                  thumbnailUrl
                }
                freeLicenseLevel
                scubaLicenseLevel
              }
              languageCode
            }
          }
        `,
          variables() {
              return {
                "id": this.communityId
              }
          },
      },
      getAgendasByTargetId: {
          query:gql `
            query Query($targetId: ID!, $agendaTypes: [ID], $skip: Int, $limit: Int) {
              getAgendasByTargetId(targetId: $targetId, agendaTypes: $agendaTypes, skip: $skip, limit: $limit) {
                types {
                  _id
                  name
                }
                author {
                  nickName
                  profileImages {
                    thumbnailUrl
                  }
                  _id
                  uid
                  freeLicenseLevel
                  scubaLicenseLevel
                }
                hashTags {
                  name
                }
                languageCode
                title
                content
                reviewCount
                createdAt
                images {
                  thumbnailUrl
                  _id
                }
                likes
                dislikes
                isUserDislike
                isUserLike
                views
              }
            }
          `,
          variables() {
              return {
                "targetId": this.communityId,
                "skip": this.skip,
                "limit": this.limit
              }
          },
          result() {
            var id_arr = new Array();
            var width_arr = new Array();
            this.getAgendasByTargetId.forEach(x => {
                x.images.forEach(y => {
                  id_arr.push(y._id);
                  width_arr.push(720);
                })
            });
            if (id_arr.length > 0) {
              axios({
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
                        ids: id_arr,
                        widths: width_arr
                    }

                }
              }).then(result_image => {
                  if (result_image.data.data.getImageUrlsByIds) {
                      var i=0;
                      this.getAgendasByTargetId.forEach(x => {
                          x.images.forEach(y => {
                            y.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                            i++;
                          })
                      });
                  }
              });
            }
          }
      },
      getAllAgendaTypes: {
          query:gql `
            query Query {
                getAllAgendaTypes {
                    _id
                    name
                }
            }
          `,
      }
      
  },
  
}


</script>


<style scoped>
.inline-block {display: inline-block !important;}
.v-align-top {vertical-align: top !important;}
.user-img-s {
  position: relative;
  display: inline-block;
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

.wedive-textarea {min-height: 150px;padding-left: 10px;padding-right: 10px;border: 1px solid #e9e9e9;}
.wedive-textarea2 {max-height: 45px;padding-left: 10px;padding-right: 10px;border: 1px solid #e9e9e9;}
.img_square{width: 100%;position: relative;}
.img_square:after {content: "";display: block;padding-bottom: 100%;}
.img_square_inner {position: absolute;width: 100%;height: 100%;background-size:cover !important;background-position: center !important;}
</style>
