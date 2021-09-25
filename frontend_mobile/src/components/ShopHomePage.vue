<template>
  <div class="mb-3 pb-5">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-shopping" data-menu-load=""></div>    

    <div class="splide topic-slider slider-no-arrows slider-no-dots pb-2" id="topic-slider-1">
        <div class="splide__track">
            <div class="splide__list">
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme">슈트</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">핀</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">마스크&스노클</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">장갑&삭스&후드</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">부이시스템</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">웨이트시스템</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">이퀄라이징</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">가방</a></h1>
                </div>
                <div class="splide__slide">
                    <h1 class="font-16 d-block"><a href="#" class="color-theme opacity-50">악세서리</a></h1>
                </div>
            </div>
        </div>
    </div>




    <div class="divider divider-margins"></div>
        
        <div class="content mb-0">
            <div class="row mb-0">
                <div class="col-6">
                    <div class="card mx-0 card-style">
                        <div class="card" data-card-height="200">
                            <img src="/static/images/diving_beach.jpg" />
                        </div>
                        <div class="content mt-n2">
                            <p class="font-11 color-highlight font-600 mb-n2">Your Awesome</p>
                            <h1 class="font-16">Project Three</h1>
                            <p>
                                Donec lacinia efficitur venenatis. 
                            </p>
                            <div class="text-center">
                                <a href="#" class="icon icon-xs bg-theme color-theme shadow-xl rounded-xl me-2" data-menu="menu-share"><i class="fa fa-share-alt color-red-dark"></i></a>
                                <a href="#" class="icon icon-xs bg-theme color-theme shadow-xl rounded-xl ms-2"><i class="fa fa-arrow-right color-highlight"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="card mx-0 card-style">
                        <div class="card" data-card-height="200">
                            <img src="/static/images/diving_beach.jpg" />
                        </div>
                        <div class="content mt-n2">
                            <p class="font-11 color-highlight font-600 mb-n2">Your Awesome</p>
                            <h1 class="font-16">Project Four</h1>
                            <p>
                                Donec lacinia efficitur venenatis.
                            </p>
                            <div class="text-center">
                                <a href="#" class="icon icon-xs bg-theme color-theme shadow-xl rounded-xl me-2" data-menu="menu-share"><i class="fa fa-share-alt color-red-dark"></i></a>
                                <a href="#" class="icon icon-xs bg-theme color-theme shadow-xl rounded-xl ms-2"><i class="fa fa-arrow-right color-highlight"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="divider divider-margins"></div>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    
    
  },
  components: {
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
      
    }
  }, methods: {
    
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font-noto {font-family: 'Noto Sans Korean'}

</style>
