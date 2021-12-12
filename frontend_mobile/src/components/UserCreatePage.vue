<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-0"> 
        <div class="progress" style="height:6px;">
            <div class="progress-bar border-0 bg-highlight text-start ps-2" 
                    role="progressbar" style="width: 25%" 
                    aria-valuenow="0" aria-valuemin="25" 
                    aria-valuemax="100">
            </div>
        </div>
        <div class="splide single-slider slider-no-arrows" id="single-slider-1" data-splide='{"autoplay":false, "drag": false, "lazyLoad": "nearby", "preloadPages": 6, "pagination": false}'>
            <div class="splide__track">
                <div class="splide__list">
                    <div class="splide__slide">
                        <div id="slide1" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-0">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;">간단한 프로필을 등록해주시면,<br/>더 정확하게 버디와 관심장소를 추천해드려요.</div>
                            </div>
                            <div class="text-center mt-5 mb-3">
                                <div id="file-upload1-back" style="width: 150px;height:150px;display: inline-block;background: #e7e7e7;position: relative;border-radius:75px;background-size:cover;">
                                    <input type="file" @change="imageUserChange" id="file-upload1" class="upload-file text-center" accept="image/*" style="height: 150px;">
                                    <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:76px;">
                                        <img id="file-upload1-img" src="/static/images/assets/icon_image.png" width="70"></img>
                                    </p></input>
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="input-style no-borders mb-3" style="max-width: 200px;display: inline-block;">
                                    <input type="text" class="form-control font-noto input-big" id="form1" placeholder="닉네임" style="text-align: center;" v-model="nickname">
                                </div>

                                <div>
                                    <p class="font-noto mb-1 mt-2">다른사람이 부를 수 있는 <font class="color-primary">닉네임</font>을 입력해주세요.</p>
                                </div>
                            </div>

                        </div>
                        <div style="position: absolute;bottom: 0;width:100%;">
                            <a id="btn_next1" href="#" class="slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-3" style="height: 46px;padding-top: 10px;" disabled="disabled" v-on:click="next1()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide2" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;"><font class="color-primary font-14">{{nickname}}</font>님 반가워요.<br/>비슷한 나이의 친구들을 찾아드릴께요.</div>
                            </div>

                            <div>
                            <div class="mt-2">
                                <div class="input-style no-borders has-icon validate-field mb-3" style="width: 48%;display:inline-block;">
                                    <i class="fa fa-id-badge color-gray" style="margin-left:5px;"></i>
                                    <input type="number" class="form-control font-noto" id="form2" placeholder="나이" v-model="userage">
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                </div>

                                <div class="input-style no-borders has-icon validate-field  mb-2" style="width: 48%;display:inline-block;">
                                    <i class="fas fa-venus-mars color-gray" style="margin-left:3px;"></i>
                                    <select id="form3" class="font-noto" required v-model="usersex">
                                        <option value="" selected disabled>성별</option>
                                        <option value="남자">남자</option>
                                        <option value="여자">여자</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                            </div>
                            </div>

                            <div class="mb-0 mt-4 pt-2">
                                <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">선호사항 (선택)</label>
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

                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next2" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" disabled="disabled" v-on:click="next2()">다음</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide3" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;"><font class="color-primary font-14">{{nickname}}</font>님, <font class="color-shopping font-14">스쿠버 다이빙</font> 해보셨나요?<br/>정보가 없으면 다음을 클릭해주세요.</div>
                            </div>

                            <div class="mt-3">
                                <div class="input-style no-borders has-icon validate-field mb-3 mt-2">
                                    <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                    <label for="form11" class="color-highlight bg-e7e7e7">라이센스</label>
                                    <select id="form11" required class="font-noto" v-model="scuba_license">
                                        <option value="" selected disabled>라이센스</option>
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
                                    <label for="form22" class="color-highlight bg-e7e7e7">레벨</label>
                                    <select id="form22" required class="font-noto" v-model="scuba_level">
                                        <option value="" selected disabled>레벨</option>
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
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next3" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next3()">{{ next3_word }}</a>
                        </div>
                        </div>
                    </div>
                    <div class="splide__slide">
                        <div id="slide4" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;"><font class="color-primary font-14">{{nickname}}</font>님, <font class="color-shopping font-14">프리 다이빙</font> 해보셨나요?<br/>정보가 없으면 다음을 클릭해주세요.</div>
                            </div>

                            <div class="mt-3">
                                <div class="input-style no-borders has-icon validate-field mb-3">
                                    <i class="fas fa-address-card color-gray" style="margin-left:6px;"></i>
                                    <label for="form21" class="color-highlight bg-e7e7e7">라이센스</label>
                                    <select id="form21" required v-model="free_license">
                                        <option value="" selected disabled>라이센스</option>
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
                                    <label for="form12" class="color-highlight bg-e7e7e7">레벨</label>
                                    <select id="form12" required v-model="free_level">
                                        <option value="" selected disabled>레벨</option>
                                        <option value="1">레벨1</option>
                                        <option value="2">레벨2</option>
                                        <option value="3">레벨3</option>
                                        <option value="4">레벨4</option>
                                        <option value="5">강사</option>
                                    </select>
                                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                                    <i class="fa fa-check disabled valid color-green-dark"></i>
                                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                                    <em></em>
                                </div>

                                <div class="mb-2 mt-5">
                                    <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">Personal Best</label>
                                    
                                    <div id="div_personal_best" style="display: inline-block;">
                                    </div>

                                    <a href="#" data-menu="menu-personal-best" class="btn btn-xs mb-0 rounded-xl text-uppercase font-900 shadow-s bg-dark-dark"><i class="fas fa-plus"></i></a>
                                </div>

                                <div class="mb-0" style="margin-top:40px;">
                                    <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-24px;">선호사항</label>
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
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next4" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next4()">{{ next4_word }}</a>
                        </div>
                        </div>
                    </div>

                    <div class="splide__slide">
                        <div id="slide5" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1">
                            <div class="font-noto font-400 mt-3 mb-2 d-flex" style="background: #e7e7e7;color:#5f6368;padding: 10px 16px;">
                                <div style="background-color:#fff;display: inline-block;align-self: flex-start;border-radius: 4px;height: 32px;flex-shrink: 0;margin: 7px 16px 0 0;width: 32px;padding: 7px;"><svg style="vertical-align: baseline;fill: currentColor;"width="18" height="18" viewBox="0 0 24 24" focusable="false" class="HLbGM NMm5M"><path d="M11 7h2v2h-2zm0 4h2v6h-2z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg></div>
                                <div style="display: inline-block;"><font class="color-shopping">강사</font> 이신가요?<br/>무료로 강습생을 연결해드려요.</div>
                            </div>

                            <div class="input-style no-borders has-icon validate-field mb-3 mt-3">
                                <i class="fas fa-phone-alt color-gray"></i>
                                <input type="tel" class="form-control validate-text" id="form31" placeholder="전화번호" v-model="instructor_phone">
                                <label for="form31" class="color-highlight">전화번호</label>
                                <i class="fa fa-times disabled invalid color-red-dark"></i>
                                <i class="fa fa-check disabled valid color-green-dark"></i>
                                <em>(필수입력)</em>
                            </div>
                            
                            
                            <div id="file-upload2-back" style="border: 1px solid #abb7ba;width: 150px;height:150px;display: inline-block;background: white;position: relative;">
                                <input type="file" @change="imageInstructorChange" id="file-upload2" class="upload-file text-center" accept="image/*" style="height: 150px;">
                                    <p id="file-upload2-text" class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:80px;"><i class="fas fa-plus"></i><br/>자격증 업로드</p>
                                </input>
                            </div>
                        </div>
                        <div class="row me-0 ms-0 mb-0" style="position: absolute;bottom: 0;width:100%;padding-left:20px;padding-right:20px;">
                            <a href="#" class="col-6 slider-prev btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-left:-4px;margin-right:4px;">이전</a>
                            <a id="btn_next4" href="#" class="col-6 slider-next btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 mb-3" style="height: 46px;padding-top: 10px;margin-right:-4px;margin-left:4px;" v-on:click="next5()">완료</a>
                        </div>
                        </div>
                    </div>

                    <div class="splide__slide">
                        <div id="slide6" class="card card-full pb-0 mb-0 border-bottom" style="height: calc( 100vh - 56px );">
                        <div class="content mt-1" style="padding-top: 80px;">
                            <div class="text-center mt-2 mb-3">
                                <img src="/static/images/assets/confetti.gif" width="50%"/>
                                <p class="font-noto mb-1 mt-2 font-16">{{ nickname }}님, weDive에 오신것을 환영합니다.</p>
                                <p class="font-noto color-gray"><span class="span_timer">3</span>초 후 메인페이지로 이동할께요.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>




        
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


  </div>
</template>
<script>
import { GraphQLClient, request, gql } from "graphql-request";

const axios = require("axios")
var file_certificate = null;



export default {
  name: 'HelloWorld',
  mounted() {
    document.getElementById("footer-bar").classList.add("hide");
    
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
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
    if (this.$route.query.footer && this.$route.query.footer == 'hide') {
      $("#footer-bar").hide();
    }

    var body = document.body, html = document.documentElement;
    var height = Math.min(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 56;
    document.getElementById('slide1').style.height = height + 'px';
    document.getElementById('slide2').style.height = height + 'px';
    document.getElementById('slide3').style.height = height + 'px';
    document.getElementById('slide4').style.height = height + 'px';
    document.getElementById('slide5').style.height = height + 'px';
    document.getElementById('slide6').style.height = height + 'px';
    
  },
  components: {
    
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
        instructor_phone: '',
        file_photo: null,
        file_certificate: null,
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
        next4_word: '넘어가기',
    }
  }, 
  watch: {
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
      free_license: function(newVal, oldVal) {
          if (this.free_license === '' && this.free_level === '') {
              this.next4_word = '넘어가기';
          } else {
              this.next4_word = '다음';
          }
      },
      free_level: function(newVal, oldVal) {
          if (this.free_license === '' && this.free_level === '') {
              this.next4_word = '넘어가기';
          } else {
              this.next4_word = '다음';
          }
      },
  },
  methods: {
      imageUserChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload1-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload1-back").css("background-size", "cover");
        $("#file-upload1-img").hide();
      },
      imageInstructorChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_certificate = files[0];
        $("#file-upload2-back").css("background", "url(" + URL.createObjectURL(this.file_certificate) + ")");
        $("#file-upload2-back").css("background-size", "cover");
        $("#file-upload2-text").hide();
      },
      next1() {
          $(".progress-bar").css("width", "40%");
          setTimeout(function() {
              $("#form2").focus();
          },200);
      },
      next2() {
          $(".progress-bar").css("width", "60%");
      },
      next3() {
          $(".progress-bar").css("width", "80%");
      },
      next4() {
          $(".progress-bar").css("width", "100%");
      },
      async next5() {
        //console.log(this.file_photo);
        
        localStorage.nickName = this.nickname;
        localStorage.userAge = ((new Date()).getFullYear() - parseInt(this.userage) + 1);
        localStorage.userSex = ((this.usersex == "남자") ? "m" : "f");

        
        
        var freeBest = new Array();
        if (this.pb_sta != null && this.pb_sta != '') freeBest.push({"key": "STA", "value": this.pb_sta});
        if (this.pb_dyn != null && this.pb_dyn != '') freeBest.push({"key": "DYN", "value": this.pb_dyn});
        if (this.pb_dnf != null && this.pb_dnf != '') freeBest.push({"key": "DNF", "value": this.pb_dnf});
        if (this.pb_cwt != null && this.pb_cwt != '') freeBest.push({"key": "CWT", "value": this.pb_cwt});
        if (this.pb_vwt != null && this.pb_vwt != '') freeBest.push({"key": "VWT", "value": this.pb_vwt});
        if (this.pb_fim != null && this.pb_fim != '') freeBest.push({"key": "FIM", "value": this.pb_fim});
        if (this.pb_cnf != null && this.pb_cnf != '') freeBest.push({"key": "CNF", "value": this.pb_cnf});
        if (this.pb_nlt != null && this.pb_nlt != '') freeBest.push({"key": "NLT", "value": this.pb_nlt});

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
                        createdAt
                        updatedAt
                    }
                }
            `
            
            var client = new GraphQLClient('https://api.wedives.com/graphql',
            {
                headers: {
                    countryCode: "ko"
                }
            })

            result_img_user = await client.request(mutation, {uploadImageFile: this.file_photo,});
            console.log(result_img_user);


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
                    }
                }
            `;
            

            var result_upload = await client.request(updateMutation, {input: {"_id": result_img_user.uploadImage._id,"name": result_img_user.name,"description": "userImage","reference": null}})
            console.log(result_upload);


        }
        
        var result_img_certi = null;
        if (this.file_certificate != null) {
            var mutation = gql`
                mutation UploadImageMutation($uploadImageFile: Upload!) {
                    uploadImage(file: $uploadImageFile) {
                        _id
                        name
                        mimeType
                        encoding
                        createdAt
                        updatedAt
                    }
                }
            `
            
            var client = new GraphQLClient('https://api.wedives.com/graphql',
            {
                headers: {
                    countryCode: "ko"
                }
            })

            result_img_certi = await client.request(mutation, {uploadImageFile: this.file_certificate,});
            console.log(result_img_certi);


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
                    }
                }
            `;
            

            var result_upload = await client.request(updateMutation, {input: {"_id": result_img_certi.uploadImage._id,"description": "userCertificate","reference": null}})
            console.log(result_upload);


        }
        
        

        var result = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            data: {
                query: `
                    mutation Mutation($input: UserInput) {
                        upsertUser(input: $input) {
                            instructorLicenseImages {
                            _id
                            }
                            instructorTypes
                            instructorVerifications {
                            _id
                            }
                            scubaLicenseType
                            scubaLicenseLevel
                            freeLicenseType
                            freeLicenseLevel
                            _id
                            firebaseUid
                            fcmToken
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
                            freeDivingBests {
                            key
                            value
                            }
                        }
                    }
                `,
                variables: {
                    "input": {
                        "instructorVerifications": null,
                        "scubaLicenseType": (this.scuba_license == '') ? null : this.scuba_license,
                        "scubaLicenseLevel": parseInt(this.scuba_level),
                        "freeLicenseType": (this.free_license == '') ? null : this.free_license,
                        "freeLicenseLevel": parseInt(this.free_level),
                        "name": localStorage.userName,
                        "nickName": this.nickname,
                        "email": localStorage.userEmail,
                        "birthAge": parseInt(localStorage.userAge),
                        "gender": localStorage.userSex,
                        "instructors": null,
                        "profileImages": ((result_img_user == null) ? null : [result_img_user.uploadImage._id]),
                        "divingLog": parseInt(this.scuba_log),
                        "freeDivingBest": freeBest,
                        "interests": interest_list
                    }
                }
            }
        });

        console.log("result ================");
        console.log(result);
        console.log(this.instructor_phone)
        localStorage.userId = result.data.data.upsertUser._id;

        var result2 = await axios({
            url: 'https://api.wedives.com/graphql',
            method: 'post',
            data: {
                query: `
                    mutation UpsertInstructorVerification($input: InstructorVerificationInput) {
                        upsertInstructorVerification(input: $input) {
                            _id
                            instructorType
                            isVerified
                            verificationReason
                        }
                    }
                `,
                variables: {
                    "input": {
                        "instructorLicenseImage": ((result_img_certi == null) ? null : result_img_certi.uploadImage._id),
                        "instructorType": null,
                        "isVerified": null,
                        "verificationReason": null,
                        "user": result.data.data.upsertUser._id
                    }
                }
            }
        });
        console.log("result2 ================");
        console.log(result2);
        

        setTimeout(function() {
            $(".span_timer").text("2");
        },1000)
        setTimeout(function() {
            $(".span_timer").text("1");
        },2000)
        setTimeout(function() {
            
            //window.location.href="/";
        },2100)
      },
      
      addPersonalBest: function() {
            if (this.pb_sta != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dyn != "") {
                var record_type = "STA"
                var record_val = this.pb_sta;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_dnf != "") {
                var record_type = "DNF"
                var record_val = this.pb_dnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cwt != "") {
                var record_type = "CWT"
                var record_val = this.pb_cwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_vwt != "") {
                var record_type = "VWT"
                var record_val = this.pb_vwt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_fim != "") {
                var record_type = "FIM"
                var record_val = this.pb_fim;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_cnf != "") {
                var record_type = "CNF"
                var record_val = this.pb_cnf;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }
            if (this.pb_nlt != "") {
                var record_type = "NLT"
                var record_val = this.pb_nlt;
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
            }

            
            const activeMenu = document.querySelectorAll('.menu-active');
            for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
            //for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            
            

            /*var record_type = $('#form_pb').val();
            var record_val = $("#form_record").val();

            if (record_type == null || record_val == '') {
                var toastData = 'snackbar-inputerror';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
            } else {
                $('#form_pb').val('');
                $("#form_record").val('');
                
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label bg-white">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
                const activeMenu = document.querySelectorAll('.menu-active');
                for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
                for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            }*/
      },
      
  }

  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border-08 {border: 1px solid rgba(0, 0, 0, 0.08) !important;}
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
</style>
