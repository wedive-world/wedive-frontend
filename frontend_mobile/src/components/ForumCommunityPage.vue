<template>
  <div class="text-center">
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
        
        <div class="text-start pt-3 pb-3">
            <div class="pe-3 ps-3" style="position: relative;">
                <vue-typeahead-bootstrap
                    id="input_query"
                    v-model="query"
                    class="wedive-search disable-search-result"
                    :data="communities"
                    :serializer="item => item.name"
                    :screen-reader-text-serializer="item => `${item.name}`"
                    highlightClass="special-highlight-class"
                    @hit="selecteduser = $event;enableNext2($event);"
                    :minMatchingChars="2"
                    placeholder="커뮤니티 검색"
                    inputClass="special-input-class"
                    :disabledValues="[(selecteduser ? [selecteduser.name] : [])]"
                    @input="lookupUser3"
                    style="width: 100%;padding-right: 80px;"
                    >
                    
                </vue-typeahead-bootstrap>
                <a href="#" class="btn btn-m rounded-s text-uppercase font-900 shadow-s bg-teal-light" style="width:64px;position:absolute; right:16px;top: 0;"><i class="fas fa-plus"></i></a>
            </div>
            <div v-for="item in communities">
            </div>
            
            <div style="position:relative;">
                <div class="pe-3 ps-3 pt-2 pb-2 border-bottom">
                    <div class="user-img me-2">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <!--<image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.owner.avatarOrigin)?chat.owner.avatarOrigin:'/static/images/assets/user_empty.png'"/>-->
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/empty.jpg"/>
                        </svg>
                    </div>
                    <div class="inline-block font-noto v-align-top">
                        <h5 class="mb-0 font-500 font-16">마크로 구경 동호회<span class="wedive-bullet">MY</span></h5>
                        <p class="mb-0 mt-1 font-13 color-gray ellipsis2" style="max-width: calc(100vw - 122px);line-height: 1.2;">전세계 마크로 여행지를 함께 둘러보는 다이버들의 모임입니다. 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라</p>
                    </div>
                </div>
                <div class="pe-3 ps-3 pt-2 pb-2 border-bottom">
                    <div class="user-img me-2">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <!--<image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.owner.avatarOrigin)?chat.owner.avatarOrigin:'/static/images/assets/user_empty.png'"/>-->
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/empty.jpg"/>
                        </svg>
                    </div>
                    <div class="inline-block font-noto v-align-top">
                        <h5 class="mb-0 font-500 font-16">마크로 구경 동호회<span class="wedive-bullet"><i class="fas fa-user-friends fa-fw"></i> 20</span></h5>
                        <p class="mb-0 mt-1 font-13 color-gray ellipsis2" style="max-width: calc(100vw - 122px);line-height: 1.2;">전세계 마크로 여행지를 함께 둘러보는 다이버들의 모임입니다. 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라</p>
                    </div>
                </div>
                <div class="pe-3 ps-3 pt-2 pb-2 border-bottom">
                    <div class="user-img me-2">
                        <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                            <defs>
                            <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                            <clipPath id="clipSquircle">
                                <use xlink:href="#shapeSquircle"/>
                            </clipPath>
                            </defs>
                            <!--<image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(chat.owner.avatarOrigin)?chat.owner.avatarOrigin:'/static/images/assets/user_empty.png'"/>-->
                            <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" xlink:href="/static/empty.jpg"/>
                        </svg>
                    </div>
                    <div class="inline-block font-noto v-align-top">
                        <h5 class="mb-0 font-500 font-16">마크로 구경 동호회<span class="wedive-bullet"><i class="fas fa-user-friends fa-fw"></i> 20</span></h5>
                        <p class="mb-0 mt-1 font-13 color-gray ellipsis2" style="max-width: calc(100vw - 122px);line-height: 1.2;">전세계 마크로 여행지를 함께 둘러보는 다이버들의 모임입니다. 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라 블라블라</p>
                    </div>
                </div>
            </div>
        </div>

    </pull-to>
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
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
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  data () {
    return {
        query: '',
        communities: [],
        getUserSubsciption: [],
        scrollTop: 0,
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
      getUserSubsciption: {
          query:gql `
            query Query {
                getUserSubsciption {
                    communities {
                        _id
                        title
                        description
                        images {
                            thumbnailUrl
                        }
                        subscriptionCount
                        createdAt
                    }
                }
            }
          `
      },
  },
  
}


</script>


<style scoped>
.inline-block {display: inline-block !important;}
.v-align-top {vertical-align: top !important;}
.wedive-bullet {margin-left:12px; background: #d1d2d3; font-size:12px;border-radius:6px;padding: 2px 6px;color: #666;}
.user-img {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
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
</style>
