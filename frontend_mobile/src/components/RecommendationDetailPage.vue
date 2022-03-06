<template>
  <div class="text-center">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis" style="width: 250px;left: 36%;">{{ getPreviewsByRecommendationId.recommendationTitle }}</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <pull-to :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :is-bottom-bounce="false" :is-top-bounce="scrollTop == 0" style="margin-top: 50px;">
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
        
        <div class="card text-start p-3" v-if="getPreviewsByRecommendationId.previews" style="min-height: calc(100vh - 50px);padding-bottom: 0 !important;margin-bottom: 0;">
            <div v-for="(site,index) in getPreviewsByRecommendationId.previews.filter(x=>x.__typename == 'DiveSite')">
                <div class="map-box">
                    <a v-on:click="movePreview(site)">
                        <div class="bx">
                            <div class="justify-content-center mb-0 text-start">
                                <div class="thumb-img me-2">
                                    <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                                        <defs>
                                        <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                                        <clipPath id="clipSquircle">
                                            <use xlink:href="#shapeSquircle"/>
                                        </clipPath>
                                        </defs>
                                        <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" :xlink:href="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'"/>
                                    </svg>
                                </div>
                                <!--<div class="" style="float: left;position: relative;width: 95px; height:95px;">
                                    <img v-bind:src="(site.backgroundImages && site.backgroundImages.length > 0) ? site.backgroundImages[0].thumbnailUrl : '/static/empty.jpg'" class="rounded-s mx-auto" width="95" height="95" style="object-fit: cover;margin-top: 3px;">
                                </div>-->
                                <div class="" style="display:inline-block;vertical-align: top;width: calc(100vw - 138px);">
                                    <h4 class="font-15"> {{ site.name }} </h4>
                                    <p class="pb-0 mb-0 nearby_desc"> {{ site.description }} </p>
                                    
                                    <p class="pb-0 mb-0"><i class="fa fa-star font-13 color-yellow-dark scale-box"></i>
                                        <span> {{(site.adminScore/20).toFixed(1)}} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="divider mt-3 mb-3"></div>
            </div>
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
  async beforeRouteEnter(to, from, next) {
    if (to.params.id != null) {
        next(vm => {vm.setData(to.params.id)});
    } else {
        location.href = "/";
    }
  },
  methods: {
      setData(id) {
          console.log(id);
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
    $(".page-title").hide();
    $(".page-title-clear").hide();
    document.getElementById("page-back").classList.remove("hide");
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
      recommendation_id: this.$route.params.id,
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
      swiperOption: {
            spaceBetween: 10,
            slidesPerView: 'auto',
      },
    }
  },
  apollo: {
      getPreviewsByRecommendationId: {
          query:gql `
            query Query($_id: ID!) {
                getPreviewsByRecommendationId(_id: $_id) {
                  recommendationTitle
                  previews {
                    ... on Diving {
                        diveCenters {
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        divePoints {
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                        diveSites {
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                            thumbnailUrl
                        }
                        }
                    }
                    ... on DiveSite {
                        _id
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                        _id
                        thumbnailUrl
                        }
                    }
                    ... on DivePoint {
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                        _id
                        thumbnailUrl
                        }
                    }
                    ... on DiveCenter {
                        name
                        uniqueName
                        description
                        adminScore
                        backgroundImages {
                        _id
                        thumbnailUrl
                        }
                    }
                    ... on Instructor {
                        _id
                        gender
                        profileImages {
                        _id
                        thumbnailUrl
                        }
                        careers
                        introduction
                    }
                  }
              }
            }
          `,
          variables() {
              return {
                _id: this.recommendation_id,
            }
          },
          fetchPolicy: 'no-cache'
      },
  },
  
}


</script>


<style scoped>
.nearby_desc {font-family: 'Noto Sans Korean' !important;font-weight:200;overflow: hidden;text-overflow: ellipsis;word-wrap: break-word;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 1.4;}
.card-nearby {margin-left: 10px;background-size: cover !important;}
.thumb-img {
  position: relative;
  display: inline-block;
  width: 90px;
  height: 90px;
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
