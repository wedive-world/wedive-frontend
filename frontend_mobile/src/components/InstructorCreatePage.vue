<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">강사 등록</a>
        <a v-on:click="historyBack()" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    

    <div class="page-content pb-0" style="margin-top: 50px;"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" style="width: 25%" 
                    aria-valuenow="0" aria-valuemin="25" 
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
                        <div class="content mt-0">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강습생 연락</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">강습생이 연락할 수 있도록<br/>연락처 정보를 기입해주세요.</p>
                                <img src="/static/images/assets/gif_hello.gif" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>
                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_name" @focus="focusInput($event)" class="form-control font-noto font-18 font-500" placeholder="이름을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label for="form1ac" class="color-gray font-600 font-10" style="background: transparent;">이름</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_phone" @focus="focusInput($event)" type="tel" class="form-control font-noto font-18 font-500" placeholder="핸드폰 번호를 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label for="form1ac" class="color-gray font-600 font-10" style="background: transparent;">전화번호</label>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 rounded-s">
                                    <div class="input-style input-style-always-active no-borders no-icon">
                                        <input v-model="ins_email" @focus="focusInput($event)" type="email" class="form-control font-noto font-18 font-500" placeholder="이메일을 입력하세요." style="background: transparent;border-bottom-width: 0;">
                                        <label for="form1ac" class="color-gray font-600 font-10" style="background: transparent;">이메일</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();" id="btn_next1" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="1"
            :virtualIndex="1">
                    <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="me-3 ms-3 mt-4 font-noto" style="position: relative;">
                                <span class="font-18 font-500">강사 라이센스</span>
                                <p class="font-12 color-gray" style="line-height: 1.5;">강사님의 라이센스 정보를 입력해주세요.<br/>&nbsp;</p>
                                <img src="/static/images/assets/license.png" height="100" style="position: absolute;top:0;right:0;"/>
                            </div>

                            <div class="me-2 ms-2 mt-5 rounded-s" style="background:#efefef;">
                                <div style="margin-left: -9px !important;">
                                    <div class="custom-control ios-switch ios-switch-icon wedive-switch">
                                        <input v-on:click="toggleLicense()" type="checkbox" class="ios-input" id="toggle-license">
                                        <label class="custom-control-label" for="toggle-license"></label>
                                        <span :class="'ps-3 font-16' + (licenseFlag ? ' opacity-30' : '')" style="padding-top:12px;">스쿠바 라이센스</span>
                                        <span :class="'font-16' + (licenseFlag ? '' : ' opacity-30')" style="padding-top:12px;">프리 라이센스</span>
                                    </div>
                                </div>
                                <div class="p-3 pb-1" style="margin-top: -7px;">
                                    <div class="input-style input-style-always-active no-borders has-icon">
                                        <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                        <label for="select_license" class="color-gray font-600 font-10" style="background: transparent;">라이센스</label>
                                        <select id="select_license" @focus="focusInput($event)" required class="font-noto" v-model="scuba_license" style="background: transparent;border-bottom-width: 0;">
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
                                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                        <em></em>
                                    </div>
                                </div>
                                <div class="p-3 pb-1 pt-1">
                                    <label class="color-gray font-600 font-10 mt-n2" style="background: transparent;">라이센스 이미지</label>
                                    <div id="file-upload1-back" style="width: 150px;height:150px;display: inline-block;background: #c7c7c7;position: relative;border-radius:75px;background-size:cover;">
                                        <input @focus="focusInput($event)" type="file" @change="imageUserChange" id="file-upload1" class="upload-file text-center" accept=".jpg, .png" style="height: 150px;">
                                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:76px;">
                                            <img id="file-upload1-img" src="https://d34l91104zg4p3.cloudfront.net/assets/icon_image2.png" width="80"></img>
                                        </p></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();" id="btn_next2" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled">다음</a>
                        </div>
                    </div>
        </swiper-slide>
        <swiper-slide
            :key="2"
            :virtualIndex="2">
                <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;"><font class="color-primary font-14">{{nickname}}</font>님, <font class="color-shopping font-14">스쿠바 다이빙</font> 해보셨나요?<br/>정보가 없으면 다음을 클릭해주세요.</div>
                            </div>

                            <div class="mt-3">
                                <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
                                    <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                    <label for="form11" class="color-highlight bg-e7e7e7">스쿠바 라이센스</label>
                                    <select id="form11" required class="font-noto" v-model="scuba_license">
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
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-layer-group color-gray" style="margin-left:6px;"></i>
                                    <label for="form22" class="color-highlight bg-e7e7e7">스쿠바 레벨</label>
                                    <select id="form22" required class="font-noto" v-model="scuba_level">
                                        <option value="" selected disabled>스쿠바 레벨</option>
                                        <option value="1">오픈워터</option>
                                        <option value="2">어드밴스드</option>
                                        <option value="3">레스큐</option>
                                        <option value="4">마스터</option>
                                        <option value="5">강사</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-clipboard-check color-gray" style="margin-left:6px;"></i>
                                    <label for="form23" class="color-highlight bg-e7e7e7">다이빙 로그</label>
                                    <select id="form23" required class="font-noto" v-model="scuba_log">
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
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="mb-0 mt-5 pt-2">
                                    <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">선호사항</label>
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
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a v-on:click="$refs.contentSwiper.$swiper.slidePrev();" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a v-on:click="$refs.contentSwiper.$swiper.slideNext();" id="btn_next3" href="#" class="col-6 btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3 gonext" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;">{{ next3_word }}</a>
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
         data-menu-height="380">
        <div class="menu-title p-2">
            <h1 class="font-600 font-18">Personal Best 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        
        <div class="content">
            <div class="row">
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_sta" class="color-highlight bg-e7e7e7">STA (숨참기)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_sta" placeholder="STA (숨참기)" v-model="pb_sta">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dyn" class="color-highlight bg-e7e7e7">DYN (핀잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dyn" placeholder="DYN (핀잠영)" v-model="pb_dyn">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_dnf" class="color-highlight bg-e7e7e7">DNF (맨발 잠영)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_dnf" placeholder="DNF (맨발 잠영)" v-model="pb_dnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cwt" class="color-highlight bg-e7e7e7">CWT (고정 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cwt" placeholder="CWT (고정 웨이트)" v-model="pb_cwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_vwt" class="color-highlight bg-e7e7e7">VWT (가변 웨이트)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_vwt" placeholder="VWT (가변 웨이트)" v-model="pb_vwt">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_fim" class="color-highlight bg-e7e7e7">FIM (프리 이머전)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_fim" placeholder="FIM (프리 이머전)" v-model="pb_fim">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="text-start input-style has-icon no-borders mb-1">
                        <i class="fa fa-record-vinyl color-gray font-14"></i>
                        <label for="form_pb_cnf" class="color-highlight bg-e7e7e7">CNF (맨발 잠수)</label>
                        <input type="number" class="form-control font-noto" id="form_pb_cnf" placeholder="CNF (맨발 잠수)" v-model="pb_cnf">
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                    </div>
                </div>
                <div class="col-6">
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
        ins_name: (localStorage.userName ? localStorage.userName : ''),
        ins_phone: '',
        ins_email: (localStorage.userEmail ? localStorage.userEmail : ''),
        licenseFlag: false,

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
        next3_word: '넘어가기',
        swiperOptions: {
            //loop: true,
            //loopedSlides: 5, // looped slides should be the same
            //spaceBetween: 30,
            //centeredSlides: true,
            //slidesOffsetBefore: '100px',
            //slidesOffsetAfter: '100px',
            //slidesPerView: 'auto',
            //touchRatio: 0.2,
            allowTouchMove: false,
            //slideToClickedSlide: true,
            //navigation: {
            //    nextEl: '.swiper-button-next',
            //    prevEl: '.swiper-button-prev'
            //}
        }

    }
  }, 
  watch: {
      ins_name: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },
      ins_phone: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },
      ins_email: function(newVal, oldVal) {
          if (this.ins_name != '' && this.ins_phone != '' && this.ins_email != '') {
              $("#btn_next1").attr("disabled", false);
          } else {
              $("#btn_next1").attr("disabled", true);
          }
      },


      nickname: function(newVal, oldVal) {
          if (newVal === '') {
              $("#btn_next1").attr("disabled", true);
          } else {
              $("#btn_next1").attr("disabled", false);
          }
      },
      userage: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      usersex: function(newVal, oldVal) {
          if (this.userage === '' || this.usersex === '') {
              $("#btn_next2").attr("disabled", true);
          } else {
              $("#btn_next2").attr("disabled", false);
          }
      },
      scuba_license: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next3_word = '넘어가기';
          } else {
              this.next3_word = '다음';
          }
      },
      scuba_level: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next3_word = '넘어가기';
          } else {
              this.next3_word = '다음';
          }
      },
      scuba_log: function(newVal, oldVal) {
          if (this.scuba_license === '' && this.scuba_level === '' && this.scuba_log === '') {
              this.next3_word = '넘어가기';
          } else {
              this.next3_word = '다음';
          }
      },
  },
  methods: {
      toggleLicense() {
          this.licenseFlag = !this.licenseFlag;
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          event.currentTarget.parentNode.classList.add("toggleBorder");
      },
      focusInput(event) {
          $(".focusBorder").each(function(index, item){item.classList.remove("focusBorder");});
          $(".toggleBorder").each(function(index, item){item.classList.remove("toggleBorder");});
          event.currentTarget.parentNode.parentNode.classList.add("focusBorder");
      },
      onSlideChange() {
          console.log("onSlideChange")
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
      async next1() {
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
            if (result.data.data.getUserByNickName == null) {
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
            }
        }
      },
      prev2() {
          $("#btn_next1").removeClass("gonext");
      },
      next2() {
          $(".progress-bar").css("width", "75%");
      },
      next3() {
          $(".progress-bar").css("width", "100%");
      },
      async next4() {
        //console.log(this.file_photo);

        
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
            
            window.location.href=(localStorage.loginUrl == null || localStorage.loginUrl == '') ? '/' : localStorage.loginUrl;
        },2100)
      },
      
      addPersonalBest: function() {
            $("#div_personal_best").html('');
            
            if (this.pb_sta != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dyn != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dnf != "") {
                var record_type = "DNF"
                var record_val = this.pb_dnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cwt != "") {
                var record_type = "CWT"
                var record_val = this.pb_cwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_vwt != "") {
                var record_type = "VWT"
                var record_val = this.pb_vwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_fim != "") {
                var record_type = "FIM"
                var record_val = this.pb_fim;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cnf != "") {
                var record_type = "CNF"
                var record_val = this.pb_cnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_nlt != "") {
                var record_type = "NLT"
                var record_val = this.pb_nlt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }

            
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
select {background: white; background-color: white;}
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
.focusBorder {border: 2px solid #2c9ac3;background: #fff;border-radius: 8px !important;}
.form-control::placeholder {font-family: 'Noto Sans Korean' !important;font-size: 18px !important;font-weight: 500 !important;opacity: 30%;}

.wedive-switch label::before {height: 62px !important;width: calc(100vw - 46px) !important;border-radius: 8px !important;border-width: 0 !important;}
.toggleBorder label::before {border: 2px solid #2c9ac3 !important;border-radius: 8px !important;}
.wedive-switch label::after {height: 62px !important;width: calc(50vw - 23px) !important;margin-top:-62px !important;border-radius: 8px !important;margin-left:-1px !important;}
.ios-input:checked ~ .custom-control-label::after {-webkit-transform: translateX(calc(50vw - 23px)) !important;}
.ios-switch-icon span {font-family: 'Noto Sans Korean' !important;font-weight: 500 !important;color: black !important;}
.ios-input:checked ~ .custom-control-label::before {background-color: #efefef !important;}
.ios-switch-icon label::before {background-color: #efefef !important;}
.ios-switch-icon span:last-child {margin-left: 50%;}
</style>
