<template>
  <div class="text-center">
    <div data-menu-active="nav-buddy"></div>
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">블라블라 뭐시기 타이틀</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>
    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0">
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
        
        <div class="card text-start">
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
              <h5 class="font-600 mt-3 mb-2 font-17">블라블라 뭐시기 타이틀</h5>
              <p class="mb-0 font-noto opacity-90" style="line-height: 1.5;">
                오랫만에 다이빙을 왔는데 정말정말 재미있네요.<br/>
                코시국에 이만한 힐링이 없어요.<br/>
                다들 새해 복 많이 받으세요~<br/>
                더 보기를 하면 이렇게 자세한 내용을 볼 수 있어요~<br/>
                더 보기를 하면 이렇게 자세한 내용을 볼 수 있어요~<br/>
                더 보기를 하면 이렇게 자세한 내용을 볼 수 있어요~<br/>
                더 보기를 하면 이렇게 자세한 내용을 볼 수 있어요~<br/>
                더 보기를 하면 이렇게 자세한 내용을 볼 수 있어요~
              </p>
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

          
        </div>

    </pull-to>
  </div>
</template>
<script>
import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
      PullTo,
  },
  methods: {
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
          variables: {
              "targetId": null,
              "agendaTypes": null,
              "skip": this.skip,
              "limit": this.limit
          }
      },
  },
  
}


</script>


<style scoped>
.inline-block {display: inline-block !important;}
</style>
