<template>
  <div class="text-center">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">리뷰 전체보기</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <pull-to :bottom-load-method="loadmore" @bottom-state-change="stateChange" :top-load-method="refresh" @top-state-change="stateChange" :top-config="TOP_DEFAULT_CONFIG" :bottom-config="BOTTOM_DEFAULT_CONFIG" :is-top-bounce="scrollTop == 0" :is-bottom-bounce="scrollTop>scrollHeight" style="margin-top: 50px;">
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
        
        <div id="review-content" class="card mb-0 text-start" style="min-height: calc(100vh - 50px);">
          <div class="divider mb-0"></div>
          <div v-for="review in getReviewsByTargetId">
            <div class="p-3">
              <div v-on:click="goUser(review.author)" style="position:relative;">
                  <div class="user-img-s me-2">
                    <svg class="svg-profile" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet">
                        <defs>
                        <path id="shapeSquircle" d="M44,0 C76.0948147,0 88,11.9051853 88,44 C88,76.0948147 76.0948147,88 44,88 C11.9051853,88 0,76.0948147 0,44 C0,11.9051853 11.9051853,0 44,0 Z"></path>
                        <clipPath id="clipSquircle">
                            <use xlink:href="#shapeSquircle"/>
                        </clipPath>
                        </defs>
                        <image class="user-photo" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#clipSquircle)" 
                          :xlink:href="review.author && review.author.profileImages && review.author.profileImages.length > 0 && review.author.profileImages[0].thumbnailUrl ? review.author.profileImages[0].thumbnailUrl : 'https://d34l91104zg4p3.cloudfront.net/assets/user_empty.png'"/>
                    </svg>
                  </div>
                  <div class="inline-block font-noto v-align-top mt-1">
                      <h5 class="mb-0 font-500 font-15">{{ review.author.nickName }}</h5>
                      <p class="mb-0 mt-n1 font-13 color-gray">{{ getDiverLevel(review.author.freeLicenseLevel, review.author.scubaLicenseLevel) }}</p>
                  </div>
                  <p class="color-gray-dark mb-0 font-12" style="position: absolute;right: 0px;top: 0;">{{ timeForToday(review.createdAt) }}</p>
              </div>
              <div v-if="review.agendaPlaces && review.agendaPlaces.length > 0 && review.agendaPlaces[0].name" class="">
                  <p class="color-highlight font-13 mb-0 ellipsis font-noto"><i class="wedive_icoset wedive_icoset_marker"></i> {{ review.agendaPlaces[0].name }}</p>
              </div>
              <div v-on:click="goDetail(review)">
                <h5 class="font-600 mt-3 mb-2 font-17"><span v-if="review.types && review.types.length > 0 && review.types[0].name == '질문'" class="color-highlight" style="background: #e1e2e3;border-radius:8px;padding:0px 5px 3px 5px;">Q.</span> {{ review.title }}</h5>
                <p class="mb-0 font-noto opacity-90 ellipsis5" style="line-height: 1.5;" v-html="review.content.replace(/\n/gi, '<br/>')">
                </p>
                <p class="color-gray mt-2 mb-0">... 더 보기</p>
              </div>
            </div>
            <div
              v-if="review.images && review.images.length == 1"
              class="img_square">
              <div class="img_square_inner" :style="'background: url('+review.images[0].thumbnailUrl+');'"/>
              <vue-star :id="review._id" class="img-center-icon" animate="animated wobble" color="#FF5160">
                <i slot="icon" class="fa fa-heart" style="font-size:80px;"></i>
              </vue-star>
              <div class="img_square_inner" style="z-index: 900;" v-on:click="likeAnimation(review, false)"/>
            </div>
            <div v-if="review.images && review.images.length > 1" style="position: relative;">
              <swiper
                  class="swiper wedive-swiper"
                  :options="swiperImgOption"
                >
                  <swiper-slide v-for="(image,img_idx) in review.images" :key="image._id">
                    <div class="img_square">
                      <div class="img_square_inner" :style="'background: url('+image.thumbnailUrl+');'"/>
                      <vue-star v-if="img_idx==0" :id="review._id" class="img-center-icon" animate="animated wobble" color="#FF5160">
                        <i slot="icon" class="fa fa-heart" style="font-size:80px;"></i>
                      </vue-star>
                      <div v-if="img_idx==0" class="img_square_inner" style="z-index: 900;" v-on:click="likeAnimation(review, false)"/>
                    </div>
                  </swiper-slide>
              </swiper>
              
              <div class="swiper-pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </div>
            <div class="p-3">
              <div class="mt-1">
                  <span v-for="tag in review.hashTags" class="bg-gray-light color-gray rounded-sm me-1" style="padding: 6px 12px;">#{{ tag.name }}</span>
              </div>
              <div class="mt-4 mb-3">
                  <vue-star :id="'like_' + review._id" :class="(review.isUserLike ? 'heart-active-force' : 'heart-disabled-force')" animate="animated rubberBand" color="#FF5160">
                    <i v-on:click="likeAnimation(review, true)" slot="icon" class="fa fa-heart font-20"></i>
                  </vue-star>
                    <span class="font-14 font-noto ms-4">{{ review.likes || 0 }}</span>
                  <span v-on:click="goDetail(review)">
                  <i class="fas fa-comment me-1 ms-2 font-20" style="color:#bbb;"></i>
                    <span class="font-14 font-noto">{{ review.reviewCount || 0 }}</span>
                  </span>
              </div>
            </div>
            <div class="divider mb-0" style="height:12px;border-top: 1px solid #88888840"></div>
          </div>


          
        </div>

    </pull-to>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import gql from 'graphql-tag'
import PullTo from 'vue-pull-to'
import VueStar from 'vue-star'
const axios = require("axios")

export default {
  name: 'HelloWorld',
  components: {
      Swiper,
      SwiperSlide,
      PullTo,
      VueStar,
  },
  methods: {
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
                    "targetId": item._id,
                    "targetType": "review"
                }
            }
        });
      },
      goUser(user) {
        location.href='/user/' + user._id;
      },
      goDetail(review) {
        location.href='/review/' + review._id;
      },
      async refresh(loaded) {
        if ($(document).scrollTop() == 0) {
          await this.$apollo.queries.getReviewsByTargetId.refetch()
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
              targetId: this.targetId
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
      targetId: this.$route.params.id,
      skip: 0,
      limit: 10,
      scrollTop: 0,
      scrollHeight: 0,
      getReviewsByTargetId: [],
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
      swiperOption: {
        pagination: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
      },
      swiperImgOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      }
    }
  },
  apollo: {
      getReviewsByTargetId: {
          query:gql `
            query GetReviewsByTargetId($targetId: ID!, $skip: Int, $limit: Int) {
                getReviewsByTargetId(targetId: $targetId, skip: $skip, limit: $limit) {
                    _id
                    title
                    content
                    targetType
                    author {
                    nickName
                    freeLicenseLevel
                    scubaLicenseLevel
                    profileImages {
                        thumbnailUrl
                    }
                    }
                    rating
                    createdAt
                    likes
                    dislikes
                    isUserDislike
                    isUserLike
                    images {
                    _id
                    thumbnailUrl
                    }
                }
            }
          `,
          variables() {
            return {
              "targetId": this.targetId,
              "skip": this.skip,
              "limit": this.limit
            }
          },
          result() {
            var id_arr = new Array();
            var width_arr = new Array();
            this.getReviewsByTargetId.forEach(x => {
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
                    this.getReviewsByTargetId.forEach(x => {
                        x.images.forEach(y => {
                          y.thumbnailUrl = result_image.data.data.getImageUrlsByIds[i];
                          i++;
                        })
                    });
                  }
                  this.scrollHeight = $("#review-content").prop('scrollHeight') - ($(window).height());
              });
            }
          }
      },
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

.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s opacity;
    transform: translate3d(0,0,0);
    z-index: 10;
    bottom: 10px;
    left: 0;
    width: 100%;
}

</style>
