<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    

    <div class="page-content pb-0" style="margin-top: 50px;"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" :style="'width: '+progressBar+'%'" 
                    aria-valuenow="0" :aria-valuemin="progressBar" 
                    aria-valuemax="100">
            </div>
        </div>
        <swiper
            ref="contentSwiper"
            class="wedive-content-swiper"
            :options="swiperOptions"
            @slideChange="onSlideChange"
        >
        <swiper-slide
            :key="0"
            :virtualIndex="0">
                    <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">프로필 등록</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">간단한 프로필을 등록해주시면<br/>더 정확하게 버디와 관심장소를 추천해드려요.</p>
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/id-card-5727455-4800435.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="nickname" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="닉네임을 입력하세요" style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">닉네임</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="userage" type="number" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="나이를 선택하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label class="color-gray font-600 font-10" style="background: transparent;">나이</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form3" class="font-noto" required v-model="usersex" style="background: transparent;border-bottom-width: 0px;">
                                            <option value="" selected disabled>성별</option>
                                            <option value="m">남자</option>
                                            <option value="f">여자</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">성별</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-2 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">프로필 이미지</label>
                                    <div id="file-upload2-back" style="background:url(/static/images/assets/photo_icon.png);position: relative;background-size: contain !important;background-repeat: no-repeat !important;border-radius: 8px;">
                                        <input @focus="focusInput($event)" type="file" @change="imagePhotoChange" id="file-upload2" class="upload-file text-center" accept=".jpg, .png" style="height: 90px;">
                                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:76px;"></p>
                                    </div>
                                </div>
                                <div class="p-3 pb-2 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">선호사항</label>
                                    <div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest1=!interest1;" class="form-check-input" type="checkbox" id="check_general1">
                                        <label class="form-check-label rounded-xl border-08" for="check_general1">국내투어</label>
                                        <i class="fas fa-caravan color-white font-17"></i>
                                        <i class="fas fa-caravan font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest2=!interest2;" class="form-check-input" type="checkbox" value="" id="check_general2">
                                        <label class="form-check-label rounded-xl border-08" for="check_general2">해외투어</label>
                                        <i class="fas fa-globe-americas color-white font-17"></i>
                                        <i class="fas fa-globe-americas font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest3=!interest3;" class="form-check-input" type="checkbox" value="" id="check_general3">
                                        <label class="form-check-label rounded-xl border-08" for="check_general3">수중정화</label>
                                        <i class="fas fa-broom color-white font-17"></i>
                                        <i class="fas fa-broom font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest4=!interest4;" class="form-check-input" type="checkbox" value="" id="check_general4">
                                        <label class="form-check-label rounded-xl border-08" for="check_general4">뒷풀이</label>
                                        <i class="fas fa-beer color-white font-17"></i>
                                        <i class="fas fa-beer font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest5=!interest5;" class="form-check-input" type="checkbox" value="" id="check_general5">
                                        <label class="form-check-label rounded-xl border-08" for="check_general5">동호회</label>
                                        <i class="fas fa-users color-white font-17"></i>
                                        <i class="fas fa-users font-17 color-highlight"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <!--<a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 33.34;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>-->
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 33.34;go_next(0);" id="btn_next1" href="#" class="col-12 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="1"
            :virtualIndex="1">
                    <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">(선택) 스쿠바 라이센스</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">{{ nickname }}님<br/>스쿠바다이빙 해보셨나요?</p>
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/id-card-4928875-4107741.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form11" required class="font-noto" v-model="scuba_license" style="background: transparent;border-bottom-width: 0;">
                                            <option value="" selected disabled>스쿠바 라이센스</option>
                                            <option value="PADI">PADI</option>
                                            <option value="NAUI">NAUI</option>
                                            <option value="BSAC">BSAC</option>
                                            <option value="CMAS">CMAS</option>
                                            <option value="SSI">SSI</option>
                                            <option value="NDL">NDL</option>
                                            <option value="SDI/TDI">SDI/TDI</option>
                                            <option value="IANTD">IANTD</option>
                                            <option value="KUDA">KUDA</option>
                                            <option value="NASE">NASE</option>
                                            <option value="YMCA">YMCA</option>
                                            <option value="AIDA">AIDA</option>
                                            <option value="AA">AA</option>
                                            <option value="Molchanovs">Molchanovs</option>
                                            <option value="RAID">RAID</option>
                                            <option value="UTA">UTA</option>
                                            <option value="SNSI">SNSI</option>
                                            <option value="AFIA">AFIA</option>
                                            <option value="KF">KF</option>
                                            <option value="UTR">UTR</option>
                                            <option value="PSAI">PSAI</option>
                                            <option value="PSS">PSS</option>
                                            <option value="NASDS">NASDS</option>
                                            <option value="IDEA – WDA">IDEA – WDA</option>
                                            <option value="IDA">IDA</option>
                                            <option value="IDDA ">IDDA</option>
                                            <option value="IAC ">IAC</option>
                                            <option value="ACUC">ACUC</option>
                                            <option value="VIT">VIT</option>
                                            <option value="PDIC International">PDIC International</option>
                                            <option value="RSTC">RSTC</option>
                                            <option value="DDI">DDI</option>
                                            <option value="IAHD">IAHD</option>
                                            <option value="MDEA">MDEA</option>
                                            <option value="ANDI">ANDI</option>
                                            <option value="GUE">GUE</option>
                                            <option value="PSAI">PSAI</option>
                                            <option value="SEI">SEI</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">스쿠바 라이센스</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form22" required class="font-noto" v-model="scuba_level" style="background: transparent;border-bottom-width: 0;">
                                            <option value="" selected disabled>스쿠바 레벨</option>
                                            <option value="1">오픈워터</option>
                                            <option value="2">어드밴스드</option>
                                            <option value="3">레스큐</option>
                                            <option value="4">마스터</option>
                                            <option value="5">강사</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">스쿠바 레벨</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form23" required class="font-noto" v-model="scuba_log" style="background: transparent;border-bottom-width: 0;">
                                            <option value="" selected disabled>다이빙 로그</option>
                                            <option value="10">~10</option>
                                            <option value="30">~30</option>
                                            <option value="50">~50</option>
                                            <option value="100">~100</option>
                                            <option value="200">~200</option>
                                            <option value="300">~300</option>
                                            <option value="301">300~</option>
                                            <option value="없음">없음</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">다이빙 로그</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-2 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">선호사항</label>
                                    <div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest6=!interest6;" class="form-check-input" type="checkbox" value="" id="check_scuba1">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba1">대물포인트</label>
                                        <i class="fas fa-fish color-white font-17"></i>
                                        <i class="fas fa-fish font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest6=!interest7;" class="form-check-input" type="checkbox" value="" id="check_scuba2">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba2">이색포인트</label>
                                        <i class="fas fa-grin-stars color-white font-17"></i>
                                        <i class="fas fa-grin-stars font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest8=!interest8;" class="form-check-input" type="checkbox" value="" id="check_scuba3">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba3">수중촬영</label>
                                        <i class="fas fa-camera-retro color-white font-17"></i>
                                        <i class="fas fa-camera-retro font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest9=!interest9;" class="form-check-input" type="checkbox" value="" id="check_scuba4">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba4">리브어보드</label>
                                        <i class="fas fa-ship color-white font-17"></i>
                                        <i class="fas fa-ship font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest10=!interest10;" class="form-check-input" type="checkbox" value="" id="check_scuba5">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba5">체크다이빙</label>
                                        <i class="fas fa-check-square color-white font-17"></i>
                                        <i class="fas fa-check-square font-17 color-highlight"></i>
                                        </div>
                                        
                                        
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest11=!interest11;" class="form-check-input" type="checkbox" value="" id="check_scuba6">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba6">먹다이빙</label>
                                        <i class="fab fa-get-pocket color-white font-17"></i>
                                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest12=!interest12;" class="form-check-input" type="checkbox" value="" id="check_scuba7">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba7">테크니컬다이빙</label>
                                        <i class="fas fa-drafting-compass color-white font-17"></i>
                                        <i class="fas fa-drafting-compass font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest13=!interest13;" class="form-check-input" type="checkbox" value="" id="check_scuba8">
                                        <label class="form-check-label rounded-xl border-08" for="check_scuba8">마크로포인트</label>
                                        <i class="fas fa-fish color-white font-17"></i>
                                        <i class="fas fa-fish font-17 color-highlight"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 33.34;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 33.34;go_next(1);" id="btn_next2" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">{{ next2_word }}</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="2"
            :virtualIndex="2">
                    <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">(선택) 프리 라이센스</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">{{ nickname }}님<br/>프리다이빙 해보셨나요?</p>
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/certificate-4022890-3328672.png" height="100" style="position: absolute;top:0;right:0;border-radius:8px;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form21" required v-model="free_license" style="background: transparent;border-bottom-width: 0px;">
                                            <option value="" selected disabled>프리 라이센스</option>
                                            <option value="PADI">PADI</option>
                                            <option value="NAUI">NAUI</option>
                                            <option value="BSAC">BSAC</option>
                                            <option value="CMAS">CMAS</option>
                                            <option value="SSI">SSI</option>
                                            <option value="NDL">NDL</option>
                                            <option value="SDI/TDI">SDI/TDI</option>
                                            <option value="IANTD">IANTD</option>
                                            <option value="KUDA">KUDA</option>
                                            <option value="NASE">NASE</option>
                                            <option value="YMCA">YMCA</option>
                                            <option value="AIDA">AIDA</option>
                                            <option value="AA">AA</option>
                                            <option value="Molchanovs">Molchanovs</option>
                                            <option value="RAID">RAID</option>
                                            <option value="UTA">UTA</option>
                                            <option value="SNSI">SNSI</option>
                                            <option value="AFIA">AFIA</option>
                                            <option value="KF">KF</option>
                                            <option value="UTR">UTR</option>
                                            <option value="PSAI">PSAI</option>
                                            <option value="PSS">PSS</option>
                                            <option value="NASDS">NASDS</option>
                                            <option value="IDEA – WDA">IDEA – WDA</option>
                                            <option value="IDA">IDA</option>
                                            <option value="IDDA ">IDDA</option>
                                            <option value="IAC ">IAC</option>
                                            <option value="ACUC">ACUC</option>
                                            <option value="VIT">VIT</option>
                                            <option value="PDIC International">PDIC International</option>
                                            <option value="RSTC">RSTC</option>
                                            <option value="DDI">DDI</option>
                                            <option value="IAHD">IAHD</option>
                                            <option value="MDEA">MDEA</option>
                                            <option value="ANDI">ANDI</option>
                                            <option value="GUE">GUE</option>
                                            <option value="PSAI">PSAI</option>
                                            <option value="SEI">SEI</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">프리 라이센스</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <select id="form12" required v-model="free_level" style="background: transparent;border-bottom-width: 0px;">
                                            <option value="" selected disabled>프리 레벨</option>
                                            <option value="1">레벨1</option>
                                            <option value="2">레벨2</option>
                                            <option value="3">레벨3</option>
                                            <option value="4">레벨4</option>
                                            <option value="5">강사</option>
                                        </select>
                                        <label class="color-gray font-600 font-10" style="background: transparent;">프리 레벨</label>
                                    </div>
                                </div>
                                <div class="ps-3 pe-3 pb-1 rounded-s">
                                    <div class="mb-2 mt-3">
                                    
                                        <label class="wediev-label pb-1 color-gray font-600 font-10 ms-2" style="margin-top:-26px;background: transparent;border-bottom-width: 0px;padding-left: 19px;">Personal Best</label>
                                        <div>
                                        <div id="div_personal_best" style="display: inline-block;">
                                            <div v-if="pb_sta!=''" v-on:click="pb_sta=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">STA, {{ pb_sta }}분</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_dyn!=''" v-on:click="pb_dyn=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">DYN, {{ pb_dyn }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_dnf!=''" v-on:click="pb_dnf=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">DNF, {{ pb_dnf }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_cwt!=''" v-on:click="pb_cwt=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">CWT, {{ pb_cwt }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_vwt!=''" v-on:click="pb_vwt=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">VWT, {{ pb_vwt }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_fim!=''" v-on:click="pb_fim=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">FIM, {{ pb_fim }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_cnf!=''" v-on:click="pb_cnf=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">CNF, {{ pb_cnf }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                            <div v-if="pb_nlt!=''" v-on:click="pb_nlt=''" class="form-check interest-check">
                                                <label class="form-check-label rounded-xl border-08">NLT, {{ pb_nlt }}미터</label>
                                                <i class="fas fa-clipboard font-17 color-highlight"></i>
                                            </div>
                                        </div>
                                        </div>

                                        <a href="#" data-menu="menu-personal-best" class="btn btn-xs mb-0 rounded-xl text-uppercase font-900 shadow-s bg-dark-dark"><i class="fas fa-plus"></i></a>
                                    </div>
                                </div>
                                <div class="p-3 pb-2 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">선호사항</label>
                                    <div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest14=!interest14;" class="form-check-input" type="checkbox" value="" id="check_free1">
                                        <label class="form-check-label rounded-xl border-08" for="check_free1">트레이닝</label>
                                        <i class="fas fa-graduation-cap color-white font-17"></i>
                                        <i class="fas fa-graduation-cap font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest15=!interest15;" class="form-check-input" type="checkbox" value="" id="check_free2">
                                        <label class="form-check-label rounded-xl border-08" for="check_free2">수중화보</label>
                                        <i class="fas fa-camera-retro color-white font-17"></i>
                                        <i class="fas fa-camera-retro font-17 color-highlight"></i>
                                        </div>
                                        <div class="form-check interest-check">
                                        <input v-on:click="interest16=!interest16;" class="form-check-input" type="checkbox" value="" id="check_free3">
                                        <label class="form-check-label rounded-xl border-08" for="check_free3">해루질</label>
                                        <i class="fab fa-get-pocket color-white font-17"></i>
                                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();progressBar -= 33.34;" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();progressBar += 33.34;go_next(2);" id="btn_next3" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">완료</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="3"
            :virtualIndex="3">
                    <div id="slide4" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="text-center mt-2 mb-3">
                                <img src="https://d34l91104zg4p3.cloudfront.net/assets/confetti.gif" width="50%"/>
                                <p class="font-noto mb-1 mt-2 font-16">{{ nickname }}님, weDive에 오신것을 환영합니다.</p>
                                <p class="font-noto color-gray"><span class="span_timer">3</span>초 후 이전페이지로 이동할께요.</p>
                            </div>
                        </div>
                    </div>
        </swiper-slide>
        </swiper>

        
    </div>
    <!-- Page content ends here-->
    
    <!-- Menu : Personal Best -->
    <div id="menu-personal-best" 
         class="menu menu-box-modal rounded-m bg-theme" 
         data-menu-width="350"
         data-menu-height="410">
        <div class="menu-title p-2">
            <h1 class="font-600 font-18">Personal Best 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        
        <div class="content mt-0">
            <div class="row">
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_sta" class="color-highlight bg-e7e7e7">STA (숨참기)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_sta" placeholder="STA (숨참기)" v-model="pb_sta">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dyn" class="color-highlight bg-e7e7e7">DYN (핀잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dyn" placeholder="DYN (핀잠영)" v-model="pb_dyn">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dnf" class="color-highlight bg-e7e7e7">DNF (맨발 잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dnf" placeholder="DNF (맨발 잠영)" v-model="pb_dnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cwt" class="color-highlight bg-e7e7e7">CWT (고정 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cwt" placeholder="CWT (고정 웨이트)" v-model="pb_cwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_vwt" class="color-highlight bg-e7e7e7">VWT (가변 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_vwt" placeholder="VWT (가변 웨이트)" v-model="pb_vwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_fim" class="color-highlight bg-e7e7e7">FIM (프리 이머전)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_fim" placeholder="FIM (프리 이머전)" v-model="pb_fim">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cnf" class="color-highlight bg-e7e7e7">CNF (맨발 잠수)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cnf" placeholder="CNF (맨발 잠수)" v-model="pb_cnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6" style="padding-top:12px;">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_nlt" class="color-highlight bg-e7e7e7">NLT (무제한 잠수)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_nlt" placeholder="NLT (무제한 잠수)" v-model="pb_nlt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
            </div>
            
            
            <a href="#" v-on:click="addPersonalBest()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0">추가하기</a>
        </div>
    </div>
    
    <div id="snackbar-inputerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>모든 항목을 입력해주세요.</div>
    <div id="snackbar-nicknameerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>이미 사용중인 닉네임 입니다.</div>
    <div id="snackbar-nickname_kor" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>한글 닉네임은 8자 이내만 가능합니다.</div>
    <div id="snackbar-nickname_eng" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>영문 닉네임은 10자 이내만 가능합니다.</div>


  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import { GraphQLClient, request, gql } from "graphql-request";

const axios = require("axios")
export default {
  name: 'HelloWorld',
  mounted() {
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
    setTimeout(function() {
        $("#toggle-id-1").click();
        $("#toggle-id-2").click();
        $(".wedive-search2 > .input-group").prepend('<i class="fas fa-swimming-pool wedive-search2-icon color-gray" style="margin-left:6px;"></i>');

        $('#form_pb').on('change', function() {
            var val = $('#form_pb').val();
            if (val == 'STA') {
                $("#em_pb_record").text("(단위, 분)");
            } else {
                $("#em_pb_record").text("(단위, 미터)")
            }
        });
        $("#form1").focus();
    }, 1000);
    
    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".header-fixed").hide();
    }
    
    var body = document.body, html = document.documentElement;
    //var height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 56;
    var height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    document.getElementById('slide1').style.height = height + 'px';
    document.getElementById('slide2').style.height = height + 'px';
    document.getElementById('slide3').style.height = height + 'px';
    document.getElementById('slide4').style.height = height + 'px';
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created() {
    setTimeout(function() {
        init_template();
        var preloader = document.getElementById('preloader')
        if(preloader){preloader.classList.add('preloader-hide');}
    }, 500);
  },
  data () {
    return {
        nickname: '',
        userage: '',
        usersex: '',
        scuba_license: '',
        scuba_level: '',
        scuba_log: '',
        free_license: '',
        free_level: '',
        file_photo: null,
        pb_sta: '',
        pb_dyn: '',
        pb_dnf: '',
        pb_cwt: '',
        pb_vwt: '',
        pb_fim: '',
        pb_cnf: '',
        pb_nlt: '',
        interest1: false,
        interest2: false,
        interest3: false,
        interest4: false,
        interest5: false,
        interest6: false,
        interest7: false,
        interest8: false,
        interest9: false,
        interest10: false,
        interest11: false,
        interest12: false,
        interest13: false,
        interest14: false,
        interest15: false,
        interest16: false,
        next2_word: '넘어가기',
        swiperOptions: {
            allowTouchMove: false,
        },
        progressBar: 0,
    }
  }, 
  watch: {
      nickname: function(newVal, oldVal) {
          if (this.nickname === '' || this.userage === '' || this.usersex === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              if ( (/^[a-zA-Z]+$/.test(this.nickname) && this.nickname.length > 10) || (/^[a-zA-Z]+$/.test(this.nickname)==false && this.nickname.length > 8) ) {
                $("#btn_next1").attr("disabled", true);
              }
              else {
                $("#btn_next1").attr("disabled", false);
              }
          }
      },
      userage: function(newVal, oldVal) {
          if (this.nickname === '' || this.userage === '' || this.usersex === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              if ( (/^[a-zA-Z]+$/.test(this.nickname) && this.nickname.length > 10) || (/^[a-zA-Z]+$/.test(this.nickname)==false && this.nickname.length > 8) ) {
                $("#btn_next1").attr("disabled", true);
              }
              else {
                $("#btn_next1").attr("disabled", false);
              }
          }
      },
      usersex: function(newVal, oldVal) {
          if (this.nickname === '' || this.userage === '' || this.usersex === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              if ( (/^[a-zA-Z]+$/.test(this.nickname) && this.nickname.length > 10) || (/^[a-zA-Z]+$/.test(this.nickname)==false && this.nickname.length > 8) ) {
                $("#btn_next1").attr("disabled", true);
              }
              else {
                $("#btn_next1").attr("disabled", false);
              }
          }
      },
      imagePhotoChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload2-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload2-back").css("background-size", "contain");
        $("#file-upload2-back").css("background-repeat", "no-repeat");
      },
      scuba_license: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next2_word = '넘어가기';
          } else {
              this.next2_word = '다음';
          }
      },
      scuba_level: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next2_word = '넘어가기';
          } else {
              this.next2_word = '다음';
          }
      },
      scuba_log: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next2_word = '넘어가기';
          } else {
              this.next2_word = '다음';
          }
      },
  },
  methods: {
      async go_next(idx) {
          if (idx == 0) {
            if (/^[a-zA-Z]+$/.test(this.nickname) && this.nickname.length > 10) {
                var toastData = 'snackbar-nickname_eng';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
                this.$refs.contentSwiper.$swiper.slidePrev();
                $("#btn_next1").attr("disabled", true);
            } else if (/^[a-zA-Z]+$/.test(this.nickname)==false && this.nickname.length > 8) {
                var toastData = 'snackbar-nickname_kor';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
                this.$refs.contentSwiper.$swiper.slidePrev();
                $("#btn_next1").attr("disabled", true);
            } else {
                const nickName = this.nickname;
                var result = await axios({
                    url: 'https://api.wedives.com/graphql',
                    method: 'post',
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    },
                    data: {
                        query: `
                        query Query($nickName: String!) {
                            getUserByNickName(nickName: $nickName) {
                                email
                            }
                        }
                        `,
                        variables: {
                            nickName: nickName
                        }

                    }
                });
                

                if (result && result.data && result.data.data) {
                    if (result.data.data.getUserByNickName == null || result.data.data.getUserByNickName == 'null') {
                        $("#btn_next1").addClass("gonext");
                        $(".progress-bar").css("width", "50%");
                        setTimeout(function() {
                            $("#form2").focus();
                        },200);
                    } else {
                        var toastData = 'snackbar-nicknameerror';
                        var notificationToast = document.getElementById(toastData);
                        var notificationToast = new bootstrap.Toast(notificationToast);
                        notificationToast.show();
                        this.$refs.contentSwiper.$swiper.slidePrev();
                        $("#btn_next1").attr("disabled", true);
                    }
                }
            }
          } else if (idx == 2) {
            var freeBest = new Array();
            if (this.pb_sta != null && this.pb_sta != '') freeBest.push(["STA",this.pb_sta]);
            if (this.pb_dyn != null && this.pb_dyn != '') freeBest.push(["DYN", this.pb_dyn]);
            if (this.pb_dnf != null && this.pb_dnf != '') freeBest.push(["DNF", this.pb_dnf]);
            if (this.pb_cwt != null && this.pb_cwt != '') freeBest.push(["CWT", this.pb_cwt]);
            if (this.pb_vwt != null && this.pb_vwt != '') freeBest.push(["VWT", this.pb_vwt]);
            if (this.pb_fim != null && this.pb_fim != '') freeBest.push(["FIM", this.pb_fim]);
            if (this.pb_cnf != null && this.pb_cnf != '') freeBest.push(["CNF", this.pb_cnf]);
            if (this.pb_nlt != null && this.pb_nlt != '') freeBest.push(["NLT", this.pb_nlt]);

            var interest_id = ["61ac9d06eac3ebfb7ac9f952", "61ac9d0beac3ebfb7ac9f955", "61ac9d18eac3ebfb7ac9f958", "6174da70a60639819c3e6ad9", "61ac9d25eac3ebfb7ac9f95b", "61a2fefa098b3785ef439cb3", "61ac9de8eac3ebfb7ac9f95e", "61ac9deceac3ebfb7ac9f961", "6174da75a60639819c3e6ae5", "61ac9e21eac3ebfb7ac9f964", "6178f02df7c3a048b4706cc8", "6198ff5eae1cc12e02c3cca0", "6178f01cf7c3a048b4706cc6", "61ac9eaeeac3ebfb7ac9f968", "61ac9eb7eac3ebfb7ac9f96b", "61780278f7c3a048b4704a85"];
            var interest_list = new Array();
            for (var i=0; i<15; i++) {
                if (this['interest'+(i+1)] == true) {
                    interest_list.push(interest_id[i]);
                }
            }

            var result_img_user = null;
            if (this.file_photo != null) {
                var mutation = gql`
                    mutation UploadImageMutation($uploadImageFile: Upload!) {
                        uploadImage(file: $uploadImageFile) {
                            _id
                            name
                            mimeType
                            encoding
                            thumbnailUrl
                            createdAt
                            updatedAt
                        }
                    }
                `
                var client = new GraphQLClient('https://api.wedives.com/graphql',
                {
                    headers: {
                        countrycode: 'ko',
                        idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                    }
                })

                result_img_user = await client.request(mutation, {uploadImageFile: this.file_photo,});
                //console.log(result_img_user);


                var updateMutation = gql`
                    mutation Mutation($input: UpdateImageInput!) {
                        updateImage(input: $input) {
                            _id
                            name
                            description
                            reference
                            uploaderId
                            mimeType
                            encoding
                            fileSize
                            thumbnailUrl
                        }
                    }
                `;
                var result_upload = await client.request(updateMutation, {input: {"_id": result_img_user.uploadImage._id,"name": result_img_user.name,"description": "userImage","reference": null}});
                //console.log(result_upload);

                var queryImageUrl = gql`
                    query Query($id: ID!, $width: Int) {
                        getImageUrlById(_id: $id, width: $width)
                    }
                `;
                var result_url = await client.request(queryImageUrl, {"id": result_img_user.uploadImage._id,"width": 720});

                localStorage.userPhoto = result_url.getImageUrlById;
                localStorage.userThumbnail = result_img_user.uploadImage.thumbnailUrl
            }
            
            
            var result_find_user = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        query Query($uid: ID!) {
                        getUserByUid(uid: $uid) {
                            _id
                            nickName
                            birthAge
                            gender
                        }
                        }
                    `,
                    variables: {
                        "uid": localStorage.uid
                    }
                }
            });
            
            
            var birthAge = (new Date()).getFullYear() - parseInt(this.userage) + 1;
            var input_temp = {"uid": localStorage.uid, "authProvider": localStorage.providerId, "oauthToken": localStorage.idToken, "email": localStorage.userEmail, "nickName": this.nickname, "name": localStorage.userName, "birthAge": birthAge, "gender": this.usersex, "interests": interest_list};

            if (result_find_user.data.data.getUserByUid != null ) {
                input_temp._id = result_find_user.data.data.getUserByUid._id;
            }
            

            if (this.scuba_license && this.scuba_license != '') input_temp.scubaLicenseType = this.scuba_license;
            if (this.scuba_level && this.scuba_level != '') input_temp.scubaLicenseLevel = this.scuba_level;
            if (this.free_license && this.free_license != '') input_temp.freeLicenseType = this.free_license;
            if (this.free_level && this.free_level != '') input_temp.freeLicenseLevel = this.free_level;
            if (result_img_user) input_temp.profileImages = [result_img_user.uploadImage._id];
            if (this.scuba_log && this.scuba_log != '') input_temp.divingLog = parseInt(this.scuba_log);
            if (freeBest && freeBest.length > 0) input_temp.freeDivingBests = freeBest;
            const ipt = input_temp;
            
            var result = await axios({
                url: 'https://api.wedives.com/graphql',
                method: 'post',
                headers: {
                    countrycode: 'ko',
                    idtoken: (localStorage.idToken) ? localStorage.idToken : "",
                },
                data: {
                    query: `
                        mutation Mutation($input: UserInput) {
                            upsertUser(input: $input) {
                                _id
                                scubaLicenseType
                                scubaLicenseLevel
                                freeLicenseType
                                freeLicenseLevel
                                uid
                                authProvider
                                oauthToken
                                email
                                emailVerified
                                phoneNumber
                                phoneNumberVerified
                                profileImages {
                                    _id
                                }
                                nickName
                                name
                                birthAge
                                gender
                                residence
                                interests {
                                    _id
                                }
                                divingLog
                                freeDivingBests
                            }
                        }
                    `,
                    variables: {
                        "input": ipt
                    }
                }
            });
            localStorage.userId = result.data.data.upsertUser._id;
            localStorage.nickName = this.nickname;
            localStorage.userGender  = this.usersex;

            

            setTimeout(function() {
                $(".span_timer").text("2");
            },1000)
            setTimeout(function() {
                $(".span_timer").text("1");
            },2000)
            setTimeout(function() {
                
                //window.location.href=(localStorage.loginUrl == null || localStorage.loginUrl == '') ? '/' : localStorage.loginUrl;
            },2100)
          }
          console.log("go next : " + idx)
      },
      focusInput(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.classList.add("focusBorder");
      },
      historyBack() {
          try {
              Android.onHistoryBack();
          } catch (e) {

          }
      },
      imageUserChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload1-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload1-back").css("background-size", "cover");
        $("#file-upload1-img").hide();
      },
      imagePhotoChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload2-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload2-back").css("background-size", "contain");
        $("#file-upload2-back").css("background-repeat", "no-repeat");
      },
      onSlideChange() {
          //console.log("onSlideChange")
      },
      addPersonalBest: function() {
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
            // jjangs close menu
            if(window.location.href.split('/').pop() == 'modal'){
                window.history.back(); 
            }
      },
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-bottom {border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;}
.input-style.has-borders.input-style-always-active label {background-color: transparent !important;}
select:invalid {color: #6c757d;}
.wediev-label {font-size: 12px;transition: all 250ms ease;position:absolute;left:14px;z-index:99;margin-top: -16px;}
.wedive-deep:before {content: '▼ 첫 수심 18m';position: absolute;margin-top: -20px;margin-left: 16%;color:#b4bcc8;}
.input-big {font-size:22px !important;}
.input-big::placeholder {font-size:22px !important;}
.input-big2 {font-size:18px !important;}
.input-big2::placeholder {font-size:18px !important;}
.input-big3 {font-size:14px !important;}
.input-big3::placeholder {font-size:14px !important;}
.btn[disabled] {pointer-events: none !important;background-image: linear-gradient(to bottom, #ccc, #ccc) !important;}
.bg-e7e7e7 {background-color: transparent !important;}
</style>
