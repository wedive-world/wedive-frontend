<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-home" data-menu-load=""></div>
    <div class="page-content">
        
        <div class="content">
        <h4 class="text-start pt-2 mb-0 font-18 font-900">짱스님,<br/>위다이브에 오신것을 환영합니다.</h4>
        </div>

        <div class="card card-style" style="background: white;height:134px;">
            <div class="content mb-0 mt-1">
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">어디로 가고싶으신가요?</h4>
                <img class="float-right" src="/static/images/3d/male-listening-music-wedive.png" width="160" style="position: absolute;z-index: 11;right: -28px; bottom:0px;"/>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(70%);z-index: 9;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="전세계 129,389개의 다이빙 스팟" data-search>
                </div>
                
            </div>
        </div>

        
        <div v-on:click="goStatic()" class="card card-style" style="background: #ffae58;">
            <div class="content mb-0 mt-3 text-center">
                <img class="movebox" src="/static/images/3d/academic-cap.png" width="200" style="margin-top:-26px;margin-bottom:-20px;"/>
                <h4 class="color-white pt-1 mb-1">다이빙이 처음이신가요?</h4>
                <p class="color-white mb-3 opacity-50">걱정마세요. 초보자용 가이드를 알려드릴께요.</p>
            </div>
        </div>

        
        

        
        <div data-menu-load="/static/menu-footer.html"></div>
    </div>
    


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
    
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
        
    }
  }, methods: {
    goStatic: function() {
        location.href='/static'
    }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
