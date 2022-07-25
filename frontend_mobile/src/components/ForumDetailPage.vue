<template>
  <div class="text-center">
    <div data-menu-active="nav-buddy"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">{{ getAgendaById.title }}</a>
        <a v-on:click="historyBack" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>
    <pull-to :bottom-load-method="loadmore" @bottom-state-change="stateChange" :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :bottom-config="BOTTOM_DEFAULT_CONFIG" :is-top-bounce="scrollTop == 0" :is-bottom-bounce="scrollTop>scrollHeight" style="margin-bottom:50px;">
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
        
        <div id="agenda_content" class="card text-start mb-0">
          <div style="position:relative;">
          <div class="p-3">
            <div v-on:click="goUser(getAgendaById.author)" style="position:relative;">
                <div class="user-img-s me-2">
                    <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                        <defs>
                        <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                        <clipPath id="clipSquircle">
                            <use xlink:href="#shapeSquircle"/>
                        </clipPath>
                        </defs>
                        <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" 
                          :xlink:href="getAgendaById.author && getAgendaById.author.profileImages && getAgendaById.author.profileImages.length > 0 && getAgendaById.author.profileImages[0].thumbnailUrl ? getAgendaById.author.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                    </svg>
                </div>
                <div class="inline-block font-noto v-align-top mt-1">
                    <h5 class="mb-0 font-500 font-15">{{ getAgendaById.author ? getAgendaById.author.nickName : '' }}</h5>
                    <p class="mb-0 mt-n1 font-13 color-gray">{{ getAgendaById.author ? getDiverLevel(getAgendaById.author.freeLicenseLevel, getAgendaById.author.scubaLicenseLevel) : '초보 다이버' }}</p>
                </div>
                <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">{{ timeForToday(getAgendaById.createdAt) }}</p>
            </div>
            <div v-if="getAgendaById.agendaPlaces && getAgendaById.agendaPlaces.length > 0 && getAgendaById.agendaPlaces[0].name" class="">
                <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ getAgendaById.agendaPlaces[0].name }}</p>
            </div>
            <h5 class="font-600 mt-3 mb-2 font-17">{{ getAgendaById.title }}</h5>
            <p v-if="getAgendaById && getAgendaById.content" class="mb-0 font-noto opacity-90" style="line-height: 1.5;" v-html="getAgendaById.content.replace(/\n/gi, '<br/>')">
            </p>
          </div>
          <div class="" v-if="getAgendaById.images && getAgendaById.images.length > 0">
            <div class="img_square mb-4" v-for="image in getAgendaById.images">
              <div class="img_square_inner" :style="'background: url('+image.thumbnailUrl+');'"/>
            </div>
          </div>
          <div class="p-3">
              <div class="mt-1">
                  <span v-for="tag in getAgendaById.hashTags" class="bg-gray-light color-gray rounded-sm me-1" style="padding: 6px 12px;">#{{ tag.name }}</span>
              </div>
              <div class="mt-4 mb-3">
                  <vue-star :id="'like_' + getAgendaById._id" :class="(getAgendaById.isUserLike ? 'heart-active-force' : 'heart-disabled-force')" animate="animated rubberBand" color="#FF5160">
                    <i v-on:click="likeAnimation(getAgendaById, true)" slot="icon" class="fa fa-heart font-20"></i>
                  </vue-star>
                    <span class="font-14 font-noto ms-4">{{ getAgendaById.likes || 0 }}</span>
                  &nbsp;&nbsp;
                  <i class="fas fa-comment me-1 font-20" style="color:#bbb;"></i>
                    <span class="font-14 font-noto">{{ getAgendaById.reviewCount || 0 }}</span>
              </div>
          </div>
          <a data-menu="menu-report" v-on:click="reportTargetId=getAgendaById._id"><span class="font-10 mb-0 mt-n2 opacity-40 p-2" style="position:absolute;right:6px;bottom:26px;"><img src="/static/images/assets/icon_alarm.png" width="16" style="margin-bottom: 5px;margin-right:3px;"/>신고하기</span></a>
          </div>
          <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840;"></div>
          <div v-if="getReviewsByTargetId && getReviewsByTargetId.length > 0" v-for="(review,index) in getReviewsByTargetId.filter(x=>x.isBlocked == false)" :class="'p-3' + ((index < getReviewsByTargetId.length-1) ? ' border-bottom' : '')" style="position: relative;">
            <p class="color-highlight font-15 mb-0 font-noto">{{ review.author.nickName }}</p>
            <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 16px;top: 16px;">{{ timeForToday(review.createdAt) }}</p>
            <div v-if="review.content && review.content.includes('[[emoji|') && review.content.includes(']]')">
                <div class="">
                  <img v-if="(review.content.substring(review.content.indexOf('[[emoji|')+8,review.content.indexOf(']]'))).includes('basic')" :src="'https://d34l91104zg4p3.cloudfront.net/emoji/' + (review.content.substring(review.content.indexOf('[[emoji|')+8,review.content.indexOf(']]')))" style="max-width:100px;"/>
                  <img v-else :src="'https://d34l91104zg4p3.cloudfront.net/emoji/' + (review.content.substring(review.content.indexOf('[[emoji|')+8,review.content.indexOf(']]')))" style="max-width:120px;"/>
                </div>
            </div>
            <p class="mb-3 font-noto">{{ review.content.includes('[[emoji|') ? review.content.replace(review.content.substring(review.content.indexOf('[[emoji|'),review.content.indexOf(']]')+2), '') : review.content }}</p>

            <span style="position: relative;z-index:1000;">
              <vue-star :id="'like_' + review._id" class="preventClickVueStar" animate="animated tada" :class="(review.isUserLike ? 'like-active-force' : 'like-disabled-force')" color="#1D397C" style="left:0;top:0;margin-top:-5px;">
                <i slot="icon" class="fas fa-thumbs-up"></i>
              </vue-star>
              <span v-on:click="reviewLike(review)" class="ps-3" :style="'color: ' + (review.isUserLike ? '#1D397C;' : '#bbb;')">좋아요 {{ review.likes }}</span>
            </span>
            <span class="ms-2" style="position: relative;">
              <vue-star :id="'dislike_' + review._id" class="preventClickVueStar" animate="animated tada" :class="(review.isUserDislike ? 'like-active-force' : 'like-disabled-force')" color="#1D397C" style="left:0;top:0;margin-top:-5px;">
                <i slot="icon" class="fas fa-thumbs-down"></i>
              </vue-star>
              <span v-on:click="reviewDislike(review)" class="ms-3" :style="'color: ' + (review.isUserDislike ? '#1D397C;' : '#bbb;')">싫어요 {{ review.dislikes }}</span>
            </span>
            <a data-menu="menu-report" v-on:click="reportTargetId=review._id"><span class="font-10 mb-0 mt-n2 opacity-40 p-2" style="position:absolute;right:6px;bottom:8px;"><img src="/static/images/assets/icon_alarm.png" width="16" style="margin-bottom: 5px;margin-right:3px;"/>신고하기</span></a>
          </div>
          
          
        </div>

    </pull-to>


    <div id="footer-bar-speach" style="z-index: 9999;display: table;width: 100%;border-top-width: 0px !important;background: transparent;">
        <div :class="(is_emoji_clicked?'':'hide')" style="background:#00000066;height:100px;">
            <i v-on:click="is_emoji_clicked=false;emoji_url='';sendDisable=true;" class="wedive_icoset2x wedive_icoset2x_close" style="position:absolute;right:10px;top:10px;"/>
            <img :src="'https://d34l91104zg4p3.cloudfront.net/emoji/' + emoji_url" style="width:80px;margin-top:10px;"/>
        </div>
        <div :class="(is_image_attached?'':'hide')" style="background:#00000066;height:100px;text-align:left;padding:0 16px;">
            <i v-on:click="is_image_attached=false;sendDisable=true;file_photo=[];file_photo_url=[];" class="wedive_icoset2x wedive_icoset2x_close" style="position:absolute;right:10px;top:10px;"/>
            <div v-for="(photo, index) in file_photo_url" v-on:click="removeImage(index)" class="wedive-image-attach" :style="'background:url(' + photo + ');'"><span class="wedive-image-index font-noto font-600 font-12">{{ (index+1) }}</span></div>
        </div>
        <div style="min-height: 52px;height: 52px;max-height:134px;background: black;">
            <div class="d-flex" style="background:black;min-height: 52px;">
            <div class="me-1 speach-icon hide">
                <div style="width: 45px;display: inline-block;position: relative;">
                    <input type="file" id="file-upload" class="upload-file text-center" accept=".jpg, .png" style="width:32px;">
                    <p class="upload-file-text" style="color: #abb7ba;position:absolute;width:32px;height:32px;margin-top:-2px;left:8px;footer-bar-speachradius:16px;"><i class="fas fa-image pt-1 font-20"></i></p>
                </div>
            </div>
            <div class="flex-fill speach-input ps-3">
                <textarea 
                    id="textarea-input"
                    @focus="resizeFocus"
                    @keyup="resize"
                    ref="textarea"
                    type="text"
                    rows="1"
                    class="form-control"
                    placeholder="댓글을 입력하세요."
                    v-model="sendText"
                    style="border-radius:16px;margin-top:6px;background: #303440;color:white;max-height:122px;" />
            </div>
            <div v-on:click="is_emoji = !is_emoji;is_attach=false;" style="width: 26px;display: inline-block;position: relative;">
                    <img src="https://d34l91104zg4p3.cloudfront.net/assets/chat_icon_emoji.png" style="width:24px;margin-top:13px;margin-left:8px;"/>
                </div>
            <div v-on:click="sendMessage()" class="ms-3 speach-icon" :style="(sendDisable?'background: #7C7C7C;width:50px;':'background: #1d397c;width:50px;')">
                <i class="fas fa-paper-plane color-white font-20" style="margin-top:16px;"></i>
            </div>
            </div>
        </div>
        <div :class="'' + (is_attach?'':' hide')" style="min-height:150px;max-height:150px;background: #303440;overflow-y: auto;">
            <div class="row mb-0 p-3">
                <div class="col-3 text-center hide" style="position:relative;"><div style="width:52px;height:52px;background:green;border-radius:26px;display: inline-block;"><i class="fas fa-image color-white font-28" style="margin-top: 13px;"></i></div><p class="mb-0 color-white">사진</p><input type="file" @change="imageUserChange" id="file-upload" class="upload-file text-center opacity-0" accept=".jpg, .png" style="height: 76px;position: absolute;left:0;top:0;"></div>
                <div class="col-3 text-center" data-menu="location-add"><div style="width:52px;height:52px;background:orange;border-radius:26px;display: inline-block;"><i class="fas fa-map-marker-alt color-white font-28" style="margin-top: 13px;"></i></div><p class="mb-0 color-white">장소</p></div>
                <div class="col-3 text-center"><div style="width:52px;height:52px;background:deeppink;border-radius:26px;display: inline-block;"><i class="fas fa-user-friends color-white font-26" style="margin-top: 13px;"></i></div><p class="mb-0 color-white">버디</p></div>
            </div>
        </div>
        <div :class="'' + (is_emoji?'':' hide')" style="max-height:300px;background: #303440;overflow-y: auto;">
            <div class="" id="tab-group-1">
                <div class="tab-controls tabs-small" data-highlight="bg-highlight" style="height:36px;border-bottom:1px solid #88888840;display: -webkit-box;">
                    <a href="#" data-active data-bs-toggle="collapse" data-bs-target="#tab-1ab" style="padding: 0px 24px;display:table-cell;"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/emoji.png" style="width:28px;margin-top:1px;"/></a>
                    <a href="#" data-bs-toggle="collapse" data-bs-target="#tab-2ab" style="padding: 0px 24px;display:table-cell;"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/emoji.png" style="width:28px;margin-top:1px;"/></a>
                </div>

                <div data-bs-parent="#tab-group-1" class="collapse show row p-3 m-0" id="tab-1ab" style="max-height:264px;min-height:264px;overflow-y: auto;background: #303440;position:relative;">
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/01.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/01.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/02.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/02.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/03.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/03.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/04.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/04.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/05.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/05.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='wedive/06.gif';sendDisable=false;" class="col-3 ps-2 pe-2"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/wedive/06.gif" width="100%" /></div>
                </div>
                <div data-bs-parent="#tab-group-1" class="collapse row pe-3 ps-3 m-0" id="tab-2ab" style="max-height:264px;min-height:264px;overflow-y: auto;background: #303440;position:relative;;">
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/01.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/01.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/02.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/02.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/03.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/03.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/04.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/04.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/05.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/05.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/06.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/06.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/07.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/07.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/08.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/08.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/09.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/09.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/10.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/10.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/11.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/11.gif" width="100%" /></div>
                    <div v-on:click="is_emoji_clicked=true;emoji_url='basic/12.gif';sendDisable=false;" class="col-3 p-3"><img src="https://d34l91104zg4p3.cloudfront.net/emoji/basic/12.gif" width="100%" /></div>
                </div>
                <div data-bs-parent="#tab-group-1" class="collapse row pe-3 ps-3 m-0" id="tab-3ab" style="max-height:264px;min-height:264px;overflow-y: auto;background: #303440;position:relative;">
                    
                </div>
            </div>
        </div>
    </div>

    <!-- 신고하기 -->
    <div id="menu-report" 
          class="menu menu-box-modal rounded-0 text-start"
          data-menu-width="cover"
          data-menu-height="cover"
          style="margin-bottom: 0;z-index: 10002;">
          
          <div class="card rounded-0 bg-2" data-card-height="50" style="margin-bottom: 24px;">
              <div class="card-top p-2">
                  <a href="#" class="close-menu icon icon-s rounded-l bg-theme color-theme "><i class="fa fa-arrow-left"></i></a>
                  <a href="" class="header-title color font-noto font-16">신고사유를 선택하세요.</a>
              </div>
          </div>
          
          <div class="card rounded-0 content">
              <div v-for="report in $root.$children[0].report_items" class="form-check icon-check mb-3">
                  <input class="form-check-input" type="radio" :value="report[0]" :id="'radio_report'+report[0]" name="radioReport" v-on:click="clickReportRadio('radio_report' + report[0])">
                  <label class="form-check-label font-noto font-18 font-500 opacity-30" :for="'radio_report'+report[0]">{{ report[1] }}</label>
                  <i class="icon-check-1 far fa-circle color-gray-dark font-16"></i>
                  <i class="icon-check-2 far fa-check-circle font-16 color-highlight" style="font-size: 20px !important;"></i>
              </div>
          </div>
          <div style="position: absolute;bottom: 0;width:100%;">
              <a v-on:click="makeReport()" id="btn_report" disabled="disabled" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;">신고하기</a>
          </div>
    </div>

    <div id="snackbar-review-success" class="snackbar-toast color-white bg-green-dark" data-bs-delay="1500" data-bs-autohide="true"><i class="fa fa-times me-3"></i>리뷰 등록이 완료되었습니다.</div>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
import VueStar from 'vue-star'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
    PullTo,
    VueStar,
  },
  watch: {
      sendText: function(newVal, oldVal) {
        if (newVal.replace(/ /gi, "") == "") {
            this.sendDisable = true;
        } else {
            this.sendDisable = false;
        }
      },
      is_emoji: function(newVal, oldVal) {
          if (newVal) {
              $('#speech-content').css("height", (this.speechContentHeight-200) + "px")
              setTimeout(function() {
                hideKeyboard();
                $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
              },100)
          } else {
              $('#speech-content').css("height", (this.speechContentHeight+100) + "px")
          }
      },
      is_attach: function(newVal, oldVal) {
          if (newVal) {
              $('#speech-content').css("height", (this.speechContentHeight-50) + "px")
              setTimeout(function() {
                hideKeyboard();
                $('#speech-content').scrollTop($('#speech-content')[0].scrollHeight);
              },100)
          } else {
              $('#speech-content').css("height", (this.speechContentHeight+100) + "px")
          }
      },
  },
  methods: {
      clickReportRadio(id) {
        $("#btn_report").attr("disabled", false);
        for (var i=0; i<this.$root.$children[0].report_items.length; i++) {
            if ($("#radio_report" + i).parent().children()[1].classList.contains('opacity-30') == false)
                $("#radio_report" + i).parent().children()[1].classList.add('opacity-30');
        }
        $('#' + id).parent().children()[1].classList.remove('opacity-30');
      },
      makeReport() {
        const sel_reason = $(':radio[name="radioReport"]:checked').val();
        

        this.$apollo.mutate({
            // Query
            mutation: gql`mutation Mutation($targetId: ID!, $reason: String!) {
                report(targetId: $targetId, reason: $reason) {
                    success
                }
            }`,
            // Parameters
            variables: {
                targetId: this.reportTargetId,
                reason: sel_reason
            },
        }).then((data) => {
            // Result
            console.log(data)
            document.getElementById("menu-report").classList.remove('menu-active');
            document.getElementsByClassName('menu-hider')[0].classList.remove('menu-active');
            location.reload();
            //}
        }).catch((error) => {
            // Error)
            console.error(error)
            // We restore the initial user input
        })
      },
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      async sendMessage() {
        if (this.sendDisable == false) {
            // 01. 이모지
            if (this.is_emoji_clicked) {
                this.sendText = "[[emoji|" + this.emoji_url + "]]" + this.sendText;
                
                this.is_emoji_clicked = false;
                this.is_emoji = !this.is_emoji;
            }
            // 02. 이미지
            var _id_list = new Array();
            if (this.is_image_attached) {
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
            }
            
            // 03. 텍스트
            var _input = {images: _id_list, targetId: this.agendaId, targetType: 'agenda', content: this.sendText};
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
                        mutation Mutation($input: ReviewInput) {
                            upsertReview(input: $input) {
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
                              isUserLike
                              isUserDislike
                              likes
                              dislikes
                            }
                        }
                    `,
                    variables: {
                      input: ipt
                    }
                }
            });

            this.getReviewsByTargetId.unshift(result.data.data.upsertReview);
            this.sendText = '';

            

            // toast
            var toastData = 'snackbar-review-success';
            var notificationToast = document.getElementById(toastData);
            var notificationToast = new bootstrap.Toast(notificationToast);
            notificationToast.show();
        }
      },
      resize() {
          const { textarea } = this.$refs;
          for (var i=0; i<10; i++)
              textarea.style.height = textarea.scrollHeight - 4 + 'px';
          var hei = parseInt(textarea.style.height.replace("px",""))+12;
          if (hei < 141) {
              $("#footer-bar-speach").height(hei + "px")
              $("#footer-bar-speach .d-flex").height(hei + "px")
          }
      },
      resizeFocus() {
        const { textarea } = this.$refs;
        for (var i=0; i<10; i++)
            textarea.style.height = textarea.scrollHeight - 4 + 'px';
        var hei = (parseInt(textarea.style.height.replace("px",""))+12);
        if (hei < 141) {
            $("#footer-bar-speach").height(hei + "px")
            $("#footer-bar-speach .d-flex").height(hei + "px")
        }
        this.is_emoji = false;
        this.is_attach = false;
      },
      speechContentClick() {
          this.is_emoji = false;
          this.is_attach = false;
      },
      async reviewLike(review) {
        if (review.isUserLike && review.isBottomLikeClicked == null) {
          $("#like_"+review._id + "  .VueStar__ground .VueStar__icon").click();
          review.isBottomLikeClicked = !review.isBottomLikeClicked;
          console.log("click")
        }
        if (review.isBottomLikeClicked == null) {
          if (review.isUserLike)
            review.isBottomLikeClicked = true;
          else
            review.isBottomLikeClicked = false;
        }
        $("#like_"+review._id + "  .VueStar__ground .VueStar__icon").click();
        console.log("click")
        if (review.isUserLike == null) {
          review.isUserLike = false;
        }
        if (review.isUserLike) {
          review.likes--;
        } else {
          review.likes++;
        }
        review.isUserLike = !review.isUserLike;
        review.isBottomLikeClicked = !review.isBottomLikeClicked;
        
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Like($targetId: ID!, $targetType: UserReactionTargetType!) {
                        like(targetId: $targetId, targetType: $targetType)
                    }
                `,
                variables: {
                  targetId: review._id,
                  targetType: "review"
                }
            }
        });
      },
      async reviewDislike(review) {
        if (review.isUserDislike && review.isBottomDislikeClicked == null) {
          $("#dislike_"+review._id + "  .VueStar__ground .VueStar__icon").click();
          review.isBottomDislikeClicked = !review.isBottomDislikeClicked;
        }
        if (review.isBottomLikeClicked == null) {
          if (review.isUserLike)
            review.isBottomLikeClicked = true;
          else
            review.isBottomLikeClicked = false;
        }
        $("#dislike_"+review._id + "  .VueStar__ground .VueStar__icon").click();
        if (review.isUserDislike == null) {
          review.isUserDislike = false;
        }
        if (review.isUserDislike) {
          review.dislikes--;
        } else {
          review.dislikes++;
        }
        review.isUserDislike = !review.isUserDislike;
        review.isBottomDislikeClicked = !review.isBottomDislikeClicked;
        
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Dislike($targetId: ID!, $targetType: UserReactionTargetType!) {
                        dislike(targetId: $targetId, targetType: $targetType)
                    }
                `,
                variables: {
                  targetId: review._id,
                  targetType: "review"
                }
            }
        });
      },
      async likeAnimation(item, isBottom) {
        if (item.likes == null) item.likes = 0;

        if (item.isUserLike == true) {
          item.isUserLike = false;
          item.likes--;
          if (isBottom && item.isBottomClicked == false) { // enabled되었는데, 아래를 클릭하면 지워져야함
            $("#like_"+item._id + "  .VueStar__ground .VueStar__icon").click();
            item.isBottomClicked = !item.isBottomClicked;
          } else if (isBottom == false && item.isBottomClicked == true) {
            $("#like_"+item._id + "  .VueStar__ground .VueStar__icon").click();
            item.isBottomClicked = !item.isBottomClicked;
          }
          
        } else {
          item.isUserLike = true;
          item.likes++;
          if (isBottom == false) {
            $("#"+item._id + "  .VueStar__ground .VueStar__icon").click();
            setTimeout(function() {
              $("#"+item._id + "  .VueStar__ground .VueStar__icon").click();
            },1000) 
          }
        }

        if (isBottom) {
          item.isBottomClicked = !item.isBottomClicked;
        }
        
        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            headers: {
                countrycode: 'ko',
                idtoken: (localStorage.idToken) ? localStorage.idToken : "",
            },
            data: {
                query: `
                    mutation Like($targetId: ID!, $targetType: UserReactionTargetType!) {
                        like(targetId: $targetId, targetType: $targetType)
                    }
                `,
                variables: {
                  targetId: item._id,
                  targetType: "agenda"
                }
            }
        });
      },
      goUser(user) {
        location.href='/user/' + user._id;
      },
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
            setTimeout(function() {
                loaded('done')
            },1000);
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
      async loadmore(loaded) {
        this.skip += this.limit;
        const ipt = {skip: this.skip, limit: this.limit, targetId: this.agendaId};
        const prev_result = JSON.parse(JSON.stringify(this.getReviewsByTargetId));
        try {
          await this.$apollo.queries.getReviewsByTargetId.fetchMore({
            // New variables
            variables: {
              skip: this.skip,
              limit: this.limit,
              targetId: this.agendaId
            },
            // Transform the previous result with new data
            updateQuery: (previousResult, { fetchMoreResult }) => {
                //console.log(previousResult.getReviewsByTargetId)
                //console.log(fetchMoreResult.getReviewsByTargetId)
                return {
                    getReviewsByTargetId: [
                      ...fetchMoreResult.getReviewsByTargetId,
                      ...previousResult.getReviewsByTargetId,
                    ],
                }
            },
          });
        } catch (e) {

        }
        
        prev_result.reverse().forEach(x=>{
          this.getReviewsByTargetId.unshift(x);
        })
        loaded('done');
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
      imageUserChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.is_image_attached = true;
        this.file_photo.push(files[0]);
        this.file_photo_url.push(URL.createObjectURL(files[0]));

        this.sendDisable=false;

        //$("#file-upload1-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        //$("#file-upload1-back").css("background-size", "cover");
        //$("#file-upload1-img").hide();
      },
      removeImage(idx) {
          this.file_photo.splice(idx, 1);
          this.file_photo_url.splice(idx, 1);
          if (this.file_photo.length == 0) {
              this.is_image_attached = false;
              this.file_photo = [];
              this.file_photo_url = [];
          }
      },
  },
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
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
  data () {
    return {
      agendaId: this.$route.params.id,
      getAgendaById: {},
      getReviewsByTargetId: [],
      like_img: 'ico_heart',
      skip: 0,
      limit: 5,
      scrollTop: 0,
      scrollHeight: 0,
      getAgendasByTargetId: [],
      sendText: '',
      sendDisable: true,
      is_emoji: false,
      is_emoji_clicked: false,
      is_image_attached: false,
      file_photo: [],
      file_photo_url: [],
      is_attach: false,
      emoji_url: '',
      emoji_regex: /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
      speechContentHeight: 0,
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
      BOTTOM_DEFAULT_CONFIG: {
        pullText: '추가 로딩',
        triggerText: '업데이트',
        loadingText: '로딩중...',
        doneText: '로딩 완료',
        failText: '실패',
        loadedStayTime: 400,
        stayDistance: 50,
        triggerDistance: 70
      },
      reportTargetId: null,
    }
  },
  apollo: {
      getAgendaById: {
          query:gql `
            query Query($id: ID!) {
              getAgendaById(_id: $id) {
                _id
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
              id: this.agendaId
            }
          },
          result() {
            this.getAgendaById.isBottomClicked = false;

            if (this.getAgendaById.isUserLike) this.like_img = 'ico_heart2';
            var id_arr = new Array();
            var width_arr = new Array();
            
            this.getAgendaById.images.forEach(y => {
              id_arr.push(y._id);
              width_arr.push(720);
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
                      this.getAgendaById.images.forEach(y => {
                        y.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                        i++;
                      });
                  }
                  this.scrollHeight = $("#agenda_content").prop('scrollHeight') - ($(window).height());
                  //console.log(this.scrollHeight)
              });
            }
          }
      },
      getReviewsByTargetId: {
        query:gql `
          query GetReviewsByTargetId($targetId: ID!, $skip: Int, $limit: Int) {
            getReviewsByTargetId(targetId: $targetId, skip: $skip, limit: $limit) {
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
              isUserLike
              isUserDislike
              likes
              dislikes
              isBlocked
            }
          }
        `,
        variables() {
          return {
            skip: this.skip,
            limit: this.limit,
            targetId: this.agendaId
          }
        }
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
.img_square{width: 100%;position: relative;}
.img_square:after {content: "";display: block;padding-bottom: 100%;}
.img_square_inner {position: absolute;width: 100%;height: 100%;background-size:cover !important;background-position: center !important;}

.wedive-image-attach {width:80px;height:80px;margin-top:10px;margin-right:10px;display:inline-block;background-size:cover !important;border: 3px solid #fedb0f;position:relative;}
.wedive-image-index {position:absolute;right:4px;top:4px;color:black;background:#fedb0f;width:22px;height:22px;border-radius:11px;text-align:center;}
.wedive-img-rect {position:relative;width: 50px; height: 50px;background-size:cover !important;background-position: center !important;}

</style>
