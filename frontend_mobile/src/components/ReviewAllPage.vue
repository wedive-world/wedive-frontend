<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">리뷰 전체보기</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
    </div>
    <div data-menu-active="nav-other"></div>
    <div class="page-content pb-0" style="margin-top: 50px;">
        
        <div class="card mb-0" style="min-height: calc(100vh - 50px);">
            <div class="content mb-0 mt-3">
                <div v-for="(review,index) in reviewData">
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
                                <img src="/static/images/assets/empty.png" :data-src="image.thumbnailUrl" class="preload-img rounded-s shadow-m review_img" alt="방문자리뷰">
                            </a>
                            </div>
                            {{ review.content }}
                        </p>
                    </div>
                    <div class="divider mt-3 mb-3"></div>
                </div>
                
            </div>
        </div>

    </div>
    


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
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
    console.log("a")
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
    }
  }, methods: {
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
