<template>
  <section id="main">
    <b-modal
      id="modal-collect"
      cancel-variant="outline-secondary"
      ok-title="확인"
      cancel-title="닫기"
      :ok-disabled="(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phone_number) == false || agree_selected == false)"
      @ok="sendPhoneNumber()"
      centered
      title="곧 출시될 예정입니다. 출시를 안내해드릴께요."
    >
      <b-form>
        <b-form-group>
          <label for="phone">전화번호:</label>
          <b-form-input
            v-model="phone_number"
            id="phone"
            type="number"
            placeholder="010-1234-1234"
          />
        </b-form-group>
        <b-form-group>
          <b-form-checkbox
            v-model="agree_selected"
            value="A"
            class="custom-control-primary mt-2"
          >
            개인정보 수집 및 이용 동의
          </b-form-checkbox>
          <div style="position: relative;border: 1px solid #e6e6e6;background:#fafafa;padding: 10px 16px 13px 13px;border-radius: 0.357rem;">
            1. 목적 : 이용자의 애플 앱스토어 등록 알림<br/>
            2. 항목 : 휴대폰번호<br/>
            <big>3. 보유기간 : 앱스토어 알림 시까지 보유</big>
          </div>
          <span style="opacity: 70%;">※ 위 개인정보 수집에 대한 동의를 거부할 권리가 있으며, 동의 거부 시에는 알림이 제한될 수 있습니다.</span>
        </b-form-group>
      </b-form>
    </b-modal>

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
            class="button-playstore mt-2"
            style="background-color: #00000088 !important;border: none !important;font-size:20px;"
            v-b-modal.modal-collect
            >
            <b-img
                src="https://static.toss.im/png-icons/timeline/applekorea.png"
                width="40"
            />
            App Store
        </b-button>
        <b-button
            class="button-playstore ml-2 mt-2"
            style="background-color: #00000088 !important;border: none !important;font-size:20px;"
            href="https://play.google.com/store/apps/details?id=com.wedive.android.app.wedive"
            target="_blank"
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
        <h1 class="font-noto main-subtitle">홈 · 버디찾기</h1>
        <div class="font-noto mt-2 main-description">
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


    <b-row v-if="windowWidth > 760" class="match-height">
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
        <h1 class="font-noto main-subtitle">다이빙 장소 · 센터</h1>
        <div class="font-noto mt-2 main-description">
            전세계<br/>다이빙 포인트를<br/>한눈에 살펴보세요.
        </div>
      </b-col>
    </b-row>
    <b-row v-else class="match-height">
      <b-col
        xl="6"
        md="6"
      >
        <h1 class="font-noto main-subtitle">다이빙 장소 · 센터</h1>
        <div class="font-noto mt-2 main-description">
            전세계<br/>다이빙 포인트를<br/>한눈에 살펴보세요.
        </div>
      </b-col>
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
    </b-row>


    <b-row class="match-height">
      <b-col
        xl="6"
        md="6"
      >
        <h1 class="font-noto main-subtitle">센터 · 수영장 예약</h1>
        <div class="font-noto mt-2 main-description">
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

    <div class="font-noto main-description" style="font-weight: 500;color:black;">
        위다이브로<br/>모든 다이빙 정보를
    </div>
    <div style="text-align: center;">
        <b-img
            src="beach.jpg"
            class="mt-5"
            :style="(windowWidth > 640) ? '' : 'width: 100%;'"
        />
    </div>
    <div class="main-padding" style="text-align: center;">
        <span class="font-noto main-font-size" style="font-weight: 500;color:black;">
            다이빙은, 위다이브
        </span>
    </div>
    
  </section>
</template>

<script>
import { BRow, BCol, BImg, BButton, BForm, BFormGroup, BFormInput, BFormCheckbox } from 'bootstrap-vue'
import VideoBackground from 'vue-responsive-video-background-player'
import axios from 'axios';

export default {
  components: {
    BRow,
    BCol,
    BImg,
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    
    VideoBackground,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      phone_number: '',
      agree_selected: false,
    }
  },
  mounted() {
   this.$nextTick(() => {
     window.addEventListener('resize', this.onResize);
   });
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
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
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    sendPhoneNumber() {
      axios.post( "https://marketing.wedives.com/phone", {phoneNumber: this.phone_number}, function(res) {console.log(res)}, 'text');
      this.$bvToast.toast('등록이 되면 문자로 알려드릴께요.', {
        title: `Variant ${'success'}`,
        variant: 'success',
        solid: false,
      });
    }
  }
}
</script>

<style lang="scss">

.font-title {font-weight: 600;color: white;position: absolute;top: 26vh;text-align: center;width: 100%;}
.button-title {position:absolute;text-align: center;width: 100%;}
.main-description {font-weight:500;color:black;}
.main-subtitle {color: #1d397c;}
@media (min-width: 800px) {
  .font-title {font-size: 80px;}
  .button-title {top:60vh;}
  .main-description {font-size: 47px;margin-left:56px;}
  .main-subtitle {margin-left:56px;padding-top: 150px;}
  .main-left{margin-left:56px;}
  .main-font-size {font-size: 50px;}
  .main-padding {padding:80px;}
}
@media (max-width: 800px) {
  .font-title {font-size: 70px;}
  .button-title {top:63vh;}
  .main-description {font-size: 44px;margin-left:50px;}
  .main-subtitle {margin-left:50px;padding-top: 150px;}
  .main-left{margin-left:50px;}
  .main-font-size {font-size: 46px;}
  .main-padding {padding:70px;}
}
@media (max-width: 700px) {
  .font-title {font-size: 60px;}
  .button-title {top:66vh;}
  .main-description {font-size: 41px;margin-left:46px;}
  .main-subtitle {margin-left:46px;padding-top: 30px;}
  .main-left{margin-left:46px;}
  .main-font-size {font-size: 40px;}
  .main-padding {padding:56px;}
}
@media (max-width: 600px) {
  .font-title {font-size: 50px;}
  .button-title {top:69vh;}
  .main-description {font-size: 36px;margin-left:36px;}
  .main-subtitle {margin-left:36px;padding-top: 30px;}
  .main-left{margin-left:36px;}
  .main-font-size {font-size: 36px;}
  .main-padding {padding:42px;}
}
@media (max-width: 500px) {
  .font-title {font-size: 40px;}
  .button-title {top:72vh;}
  .main-description {font-size: 30px;margin-left:24px;}
  .main-subtitle {margin-left:24px;padding-top: 30px;}
  .main-left{margin-left:24px;}
  .main-font-size {font-size: 32px;}
  .main-padding {padding:20px;}
}

.font-noto {font-family: 'Noto Sans Korean'}
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
