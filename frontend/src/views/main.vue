<template>
  <section id="main">
    <video-background src="diving.mp4" style="height: 100vh;" overlay="linear-gradient(45deg,#2a4ae430,#30303063)"></video-background>
    <span class="brand-logo">
        <b-img
            src="logo-light.svg"
            alt="logo"
            style="width: 160px;position: absolute;top: 10px;left: 10px;"
        />
    </span>
    <span class="font-noto font-title">세상에서 가장 빠른<br/>다이빙 버디찾기</span>
    <div class="button-title">
        <b-button
            style="background-color: #00000088 !important;border: none !important;font-size:20px;"
            >
            <b-img
                src="https://static.toss.im/png-icons/timeline/googleplay.png"
                width="40"
            />
            Google Play
        </b-button>
    </div>
    <b-row class="match-height">
      <b-col
        xl="6"
        md="6"
      >
        <h1 class="font-noto ml-5" style="color: #1d397c;padding-top: 150px;">홈 · 버디찾기</h1>
        <div class="font-noto ml-5 mt-2" style="font-size: 50px;font-weight:500;color:black;">
            나에게 꼭 맞는<br/>다이빙 버디를<br/>추천 해드릴께요.
        </div>
      </b-col>
      <b-col
        xl="6"
        md="6"
      >
        <b-img
            src="img1.png"
            class="img1"
        />
        <b-img
            src="iphone.png"
            class="iphone"
        />
      </b-col>
    </b-row>


    <b-row class="match-height">
      <b-col
        xl="6"
        md="6"
      >
        <b-img
            src="img2.png"
            class="img1"
        />
        <b-img
            src="iphone.png"
            class="iphone"
        />
      </b-col>
      <b-col
        xl="6"
        md="6"
      >
        <h1 class="font-noto ml-5" style="color: #1d397c;padding-top: 150px;">다이빙 장소 · 센터</h1>
        <div class="font-noto ml-5 mt-2" style="font-size: 50px;font-weight:500;color:black;">
            전세계<br/>다이빙 포인트를<br/>한눈에 살펴보세요.
        </div>
      </b-col>
    </b-row>


    <b-row class="match-height">
      <b-col
        xl="6"
        md="6"
      >
        <h1 class="font-noto ml-5" style="color: #1d397c;padding-top: 150px;">센터 · 수영장 예약</h1>
        <div class="font-noto ml-5 mt-2" style="font-size: 50px;font-weight:500;color:black;">
            전국 다이빙 센터<br/>예약을<br/>한곳에서 해보세요.
        </div>
      </b-col>
      <b-col
        xl="6"
        md="6"
      >
        <b-img
            src="img3.png"
            class="img1"
        />
        <b-img
            src="iphone.png"
            class="iphone"
        />
      </b-col>
    </b-row>

    <div class="font-noto ml-5" style="font-size: 60px;font-weight: 500;color:black;">
        위다이브로<br/>모든 다이빙 정보를
    </div>
    <div style="text-align: center;">
        <b-img
            src="beach.jpg"
            class="mt-5"
        />
    </div>
    <div style="text-align: center;padding:80px;">
        <span class="font-noto ml-5" style="font-size: 40px;font-weight: 500;color:black;">
            다이빙은, 위다이브
        </span>
    </div>
    
  </section>
</template>

<script>
import { BRow, BCol, BImg, BButton } from 'bootstrap-vue'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  components: {
    BRow,
    BCol,
    BImg,
    BButton,
    
    VideoBackground,
  },
  data() {
    return {
      
    }
  },
  created() {
    // data
    /*this.$http.get('/ecommerce/data')
      .then(response => {
        this.data = response.data

        // ? Your API will return name of logged in user or you might just directly get name of logged in user
        // ? This is just for demo purpose
        const userData = getUserData()
        this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
      })*/
  },
}
</script>

<style lang="scss">
.font-noto {font-family: 'Noto Sans Korean'}
.font-title {font-size: 80px;font-weight: 600;color: white;position: absolute;top: 26vh;text-align: center;width: 100%;}
.button-title {position:absolute;top:60vh;text-align: center;width: 100%;}
.img1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 55%;
    height: auto;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
}
.iphone {position: relative;
    width: 100%;
    height: 100%;}
</style>
