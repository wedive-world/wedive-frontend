<template>
  <div class="">
    <div id="menu-main" class="menu menu-box-left rounded-0" data-menu-width="280" data-menu-active="nav-home" data-menu-load=""></div>
    <a href="#" data-menu="menu-main" class="header-icon header-icon-1"><i class="fas fa-bars" style="height: 50px;width: 45px;text-align: center;line-height: 49px;font-size: 12px;color: #fff;border: none;position: absolute;z-index:99"></i></a>

    <div class="sch_logo_container">
    <div class="sch_background">
      <div class="sb_img_wrap">
      <img class="sb_img" src="/static/images/assets/mobile_back.png" />
      </div>
      
    </div>
    <vue-typeahead-bootstrap
                            class="wedive-search-main pe-4 ps-4 mt-n4"
                            v-model="query"
                            :data="users"
                            :serializer="item => item.name_ko"
                            :screen-reader-text-serializer="item => `${item.name_ko}`"
                            highlightClass="special-highlight-class"
                            @hit="selecteduser = $event;show_scuba_label();"
                            :minMatchingChars="2"
                            placeholder="짱스님, 어디로 다이빙 할까요?"
                            inputClass="special-input-class"
                            :disabledValues="(selecteduser ? [selecteduser.name_ko] : [])"
                            @input="lookupUser2"
                            >
                            <template slot="suggestion" slot-scope="{ data, htmlText }">
                                <div class="d-flex align-items-center">
                                <img
                                    class="rounded-s me-2"
                                    :src="data.img_url"
                                    style="width: 40px; height: 40px;" />
                                
                                <span v-if="data.type == 'region'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-marked-alt\'></i> 장소</span><br/>' + htmlText"></span>
                                <span v-else-if="data.type == 'point'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-map-pin\'></i> 다이빙 포인트</span><br/>' + htmlText"></span>
                                <span v-else-if="data.type == 'center'" class="ml-4" v-html="'<span class=\'txt_search_sub\'><i class=\'fas fa-store\'></i> 다이빙 센터</span><br/>' + htmlText"></span>
                                </div>
                            </template>
                        </vue-typeahead-bootstrap>
    </div>
    <img v-on:click="goHome()" class="logo-image" style="position:absolute;top:0;top:30px;left: 50%;transform: translate(-50%, -50%);" src="/static/images/assets/logo-light.svg" height="50"/>
    <div class="page-content">
        
        <div class="content">
        <h4 class="text-start pt-2 mb-0 font-18 font-900">짱스님,<br/>위다이브에 오신것을 환영합니다.</h4>
        </div>

        <div class="card card-style" style="background: white;height:134px;">
            <div class="content mb-0 mt-1">
                <h4 class="text-start mb-1 font-15" style="padding-top:36px;">어디로 가고싶으신가요?</h4>
                <img class="float-right" src="/static/images/assets/listening-music.png" width="90" style="position: absolute;z-index: 11;right: 0px;bottom:0px;"/>

                <div class="search-box search-dark border-08 bg-theme rounded-sm" style="position: absolute;width: calc(70%);z-index: 9;">
                    <i class="fa fa-search" style="padding: 0px 15px 0px 15px;"></i>
                    <input type="text" class="border-0" placeholder="전세계 129,389개의 다이빙 스팟" data-search>
                </div>
                
            </div>
        </div>

        
        <div v-on:click="goStatic()" class="card card-style" style="background: #ffae58;">
            <div class="content mb-0 mt-3 text-center">
                <img src="/static/images/assets/cap.png" width="140" style="margin-top:6px;margin-bottom:10px;"/>
                <h4 class="color-white pt-1 mb-1">다이빙이 처음이신가요?</h4>
                <p class="color-white mb-3 opacity-50">걱정마세요. 초보자용 가이드를 알려드릴께요.</p>
            </div>
        </div>


        <div v-on:click="goStatic()" class="card card-style" style="background: #f1c95f;">
            <div class="content mb-0 mt-3 text-center">
                <img src="/static/images/assets/wedive_choice.png" width="200"/>
                <h4 class="pt-1 mb-0">가을, 떠나기 좋은 다이빙 포인트</h4>
                <p class="mb-3 opacity-50">위다이브 선정 가을 여행지 TOP 10을 만나보세요.</p>
                <img src="/static/images/assets/people.png" width="260"/>
            </div>
        </div>

        
        

        
        <div data-menu-load="/static/menu-footer.html"></div>
    </div>
    


    <!-- End of Page Content--> 
    
    
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';

export default {
  name: 'HelloWorld',
  mounted() {
    
    $(".page-title").hide();
    $(".page-title-clear").hide();

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }
  },
  components: {
    VueTypeaheadBootstrap
  },
  created() {
    
  },
  destroyed () {
    
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
    lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
    goStatic: function() {
        location.href='/static'
    }
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sch_logo_container {
    position: relative;
    z-index: 0;
    min-height: 212px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.sch_background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
    display: block;
    position: relative;
    height: 146px;
}
.sb_img_wrap {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
        bottom: 0;
}
@media (max-width: 319px)
.sb_img {
    width: 378px;
}
@media (max-width: 374px)
.sb_img {
    width: 530px;
}
.sb_img {
    width: 568px;
    height: auto;
}

</style>
