<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">리뷰 전체보기</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div data-menu-active="nav-other"></div>
    <div class="page-content pb-0" style="margin-top: 50px;">
        
        <div class="card mb-0" style="min-height: calc(100vh - 50px);">
            <div class="content mb-0 mt-3">
                <div v-if="reviewData && reviewData.length > 0" v-for="(review,index) in reviewData.filter(x=>x.isBlocked == false)" style="position: relative;">
                    <div class="min-h-230 p-2">
                        <div class="d-flex">
                            <div class="flex-grow-1">
                                <div class="float-start">
                                    <h1 class="fa-2x font-900 me-2 mb-0">{{review.rating}}.00</h1>
                                    <p class="font-10 mb-0 mt-n2 opacity-40 text-end hide">보트 체험 다이빙</p>
                                </div>
                                <span>
                                    <i v-for="index in review.rating" class="fa fa-star color-yellow-dark"></i>
                                </span>
                                
                            </div>
                            <div>
                                <h6 class="text-end">{{ review.author.name }}</h6>
                                <p class="font-10 mb-0 mt-n2 opacity-40 text-end">{{ review.createdAt ? timeForToday(review.createdAt) : '' }}</p>
                            </div>
                        </div>
                        <p class="review-text mt-2 mb-1">
                            <div v-if="review.images && review.images.length>0">
                            <a v-for="(image,index) in review.images" v-if="index<3" :href="image.thumbnailUrl" data-gallery="gallery-99" class="filtr-item" title="" data-category="99">
                                <img src="https://d34l91104zg4p3.cloudfront.net/assets/empty.png" :data-src="image.thumbnailUrl" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                            </a>
                            </div>
                            {{ review.content }}
                        </p>
                        <a data-menu="menu-report" v-on:click="selectedReview = review;"><span class="font-10 mb-0 mt-n2 opacity-40 p-2" style="position:absolute;right:0;bottom:10px;"><img src="/static/images/assets/icon_alarm.png" width="16" style="margin-bottom: 5px;margin-right:3px;"/>신고하기</span></a>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
                
            </div>
        </div>

    </div>
    


    <!-- End of Page Content--> 
    <!-- 신고하기 -->
    <div id="menu-report" 
          class="menu menu-box-modal rounded-0" 
          data-menu-width="cover"
          data-menu-height="cover"
          style="margin-bottom: 0;">
          
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
    
  </div>
</template>
<script>
import gql from 'graphql-tag'
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
                query GetReviewsByTargetId($targetId: ID!, $skip: Int, $limit: Int) {
                    getReviewsByTargetId(targetId: $targetId, skip: $skip, limit: $limit) {
                        _id
                        isBlocked
                        targetId
                        targetType
                        author {
                            name
                            email
                            _id
                            profileImages {
                                thumbnailUrl
                            }
                        }
                        title
                        content
                        images {
                            _id
                            thumbnailUrl
                        }
                        rating
                        reviewCount
                        views
                        likes
                        createdAt
                    }
                }
                `,
                variables: {
                    targetId: to.params.id
                }
            }
        });
        var reviewData = null;
        if ((result.data && result.data.data && result.data.data.getReviewsByTargetId)) {
            reviewData = result.data.data.getReviewsByTargetId;
        }
        next(vm => {vm.setData(reviewData)});
    }
  },
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
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
  },
  destroyed () {
    
  },
  data () {
    return {
        reviewData: [],
        selectedReview: null,
    }
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
        console.log(sel_index);
        
        console.log(sel_reason);

        this.$apollo.mutate({
            // Query
            mutation: gql`mutation Mutation($targetId: ID!, $reason: String!) {
                report(targetId: $targetId, reason: $reason) {
                    success
                }
            }`,
            // Parameters
            variables: {
                targetId: this.selectedReview._id,
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
    setData(reviewData) {
        this.reviewData = reviewData;
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
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.min-h-230 {min-height: 210px;}
.review_img {float: left;width: 88px; height:88px;margin-right:10px;margin-bottom:2px;border-radius:10px;object-fit: cover !important;}
.wedive-txt-all {position: absolute;top: 20px;right: 16px;}
</style>
