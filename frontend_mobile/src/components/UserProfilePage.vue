<template>
  <div class="">
    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필 수정</a>
        <a href="#" data-back-button class="font-16 header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="font-16 header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-3"> 
        <div class="text-center mt-3 mb-3">
            <div id="file-upload1-back" :style="'border: 1px solid #abb7ba;width: 152px;height:152px;display: inline-block;position: relative;' + ((userData && userData.profileImages && userData.profileImages.length > 0) ? 'background:url('+userData.profileImages[0].thumbnailUrl+');background-size: cover;' : '')">
                <input type="file" @change="imageUserChange" id="file-upload" :class="'upload-file text-center' + ((userData && userData.profileImages && userData.profileImages.length > 0) ? ' opacity-0': '')" accept=".jpg, .png" style="height: 150px;background: white;">
                <p id="file-upload1-img" :class="'upload-file-text' + ((userData && userData.profileImages && userData.profileImages.length > 0) ? ' opacity-0': '')" style="color: #abb7ba;position:absolute;left:40px;top:76px;"><img src="/static/images/assets/icon_image2.png" height="80" style="filter: brightness(.7);"/></p>
            </div>
        </div>
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-3 mb-0">매너수심 <span class="mb-2 color-gray-light-mid font-13 ms-2 font-400"><i class="wedive_icoset wedive_icoset_info me-1"></i>활동을 많이 할 수록 깊어져요.</span></h4>
            <div class="mt-4 mb-1">
                <div class="progress rounded-l wedive-deep" style="height:28px">
                    <div class="progress-bar bg-heart text-start ps-3 color-white" 
                         role="progressbar" style="width: 18%" 
                         aria-valuenow="10" aria-valuemin="0" 
                         aria-valuemax="100">
                         18미터
                    </div>
                </div>
            </div>

            <h4 class="pt-4 mb-3">기본 정보</h4>
            <div class="mt-2">
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-id-card-alt color-gray ms-2"></i>
                    <input type="name" class="form-control validate-name wedive-input" style="padding-left:30px;" id="form1" placeholder="닉네임" v-model="userData.nickName">
                    <label for="form1" class="color-highlight">닉네임</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-user-clock color-gray ms-2"></i>
                    <input type="number" class="form-control validate-number wedive-input" style="padding-left:30px;" id="form3" placeholder="나이" v-model="age">
                    <label for="form3" class="color-highlight">나이</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-venus-mars color-gray ms-2"></i>
                    <label for="form5" class="color-highlight">성별</label>
                    <select id="form5" required v-model="userData.gender" class="wedive-input" style="padding-left:30px;">
                        <option value="" selected disabled>성별</option>
                        <option value="m">남자</option>
                        <option value="f">여자</option>
                    </select>
                    <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                    <em></em>
                </div>

            </div>

          </div>
        </div>

        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
                <div class="d-flex no-effect" 
                     data-trigger-switch="toggle-id-1" 
                     data-bs-toggle="collapse" 
                     href="#collapse1" 
                     role="button" 
                     aria-expanded="false" 
                     aria-controls="collapse1">
                    <div class="pt-1">
                        <h4 class="pt-3 mb-2">스쿠바다이빙 정보</h4>
                    </div>
                    <div class="ms-auto me-4 pe-2 mt-2">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-1">
                            <label class="custom-control-label" for="toggle-id-1"></label>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse1">
                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-address-card color-gray ms-2"></i>
                        <label for="form11" class="color-highlight">스쿠바 라이센스</label>
                        <select id="form11" required v-model="userData.scubaLicenseType" class="wedive-input" style="padding-left:30px;">
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
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-layer-group color-gray ms-2"></i>
                        <label for="form22" class="color-highlight">스쿠바 레벨</label>
                        <select id="form22" required v-model="userData.scubaLicenseLevel" class="wedive-input" style="padding-left:30px;">
                            <option value="" selected disabled>스쿠바 레벨</option>
                            <option value="1">오픈워터</option>
                            <option value="2">어드밴스드</option>
                            <option value="3">레스큐</option>
                            <option value="4">마스터</option>
                            <option value="5">강사</option>
                            <option value="0">없음</option>
                        </select>
                        <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-clipboard-check color-gray ms-2"></i>
                        <label for="form23" class="color-highlight">다이빙 로그</label>
                        <select id="form23" required v-model="userData.divingLog" class="wedive-input" style="padding-left:30px;">
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
                        <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="mb-0 mt-5 pt-2">
                        <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">선호사항</label>
                        <div class="form-check interest-check">
                        <input v-if="interest6===true" v-on:click="interest6=!interest6;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_scuba1">
                        <input v-else v-on:click="interest6=!interest6;" class="form-check-input" type="checkbox" value="" id="check_scuba1">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba1">대물포인트</label>
                        <i class="fas fa-fish color-white font-17"></i>
                        <i class="fas fa-fish font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest7===true" v-on:click="interest6=!interest7;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_scuba2">
                        <input v-else v-on:click="interest6=!interest7;" class="form-check-input" type="checkbox" value="" id="check_scuba2">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba2">이색포인트</label>
                        <i class="fas fa-grin-stars color-white font-17"></i>
                        <i class="fas fa-grin-stars font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest8===true" v-on:click="interest8=!interest8;" class="form-check-input" type="checkbox" value="" checked="checked" id="check_scuba3">
                        <input v-else v-on:click="interest8=!interest8;" class="form-check-input" type="checkbox" value="" id="check_scuba3">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba3">수중촬영</label>
                        <i class="fas fa-camera-retro color-white font-17"></i>
                        <i class="fas fa-camera-retro font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest9===true" v-on:click="interest9=!interest9;" class="form-check-input" type="checkbox" value="" checked="checked" id="check_scuba4">
                        <input v-else v-on:click="interest9=!interest9;" class="form-check-input" type="checkbox" value="" id="check_scuba4">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba4">리브어보드</label>
                        <i class="fas fa-ship color-white font-17"></i>
                        <i class="fas fa-ship font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest10===true" v-on:click="interest10=!interest10;" class="form-check-input" type="checkbox" value="" checked="true" id="check_scuba5">
                        <input v-else v-on:click="interest10=!interest10;" class="form-check-input" type="checkbox" value="" id="check_scuba5">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba5">체크다이빙</label>
                        <i class="fas fa-check-square color-white font-17"></i>
                        <i class="fas fa-check-square font-17 color-highlight"></i>
                        </div>
                        
                        
                        <div class="form-check interest-check">
                        <input v-if="interest11===true" v-on:click="interest11=!interest11;" class="form-check-input" type="checkbox" value="" checked="true" id="check_scuba6">
                        <input v-else v-on:click="interest11=!interest11;" class="form-check-input" type="checkbox" value="" id="check_scuba6">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba6">먹다이빙</label>
                        <i class="fab fa-get-pocket color-white font-17"></i>
                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest12===true" v-on:click="interest12=!interest12;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_scuba7">
                        <input v-else v-on:click="interest12=!interest12;" class="form-check-input" type="checkbox" value="" id="check_scuba7">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba7">테크니컬다이빙</label>
                        <i class="fas fa-drafting-compass color-white font-17"></i>
                        <i class="fas fa-drafting-compass font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest13===true" v-on:click="interest13=!interest13;" class="form-check-input" type="checkbox" value="" checked="checked" id="check_scuba8">
                        <input v-else v-on:click="interest13=!interest13;" class="form-check-input" type="checkbox" value="" id="check_scuba8">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba8">마크로포인트</label>
                        <i class="fas fa-fish color-white font-17"></i>
                        <i class="fas fa-fish font-17 color-highlight"></i>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>






        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
                <div class="d-flex no-effect" 
                     data-trigger-switch="toggle-id-2" 
                     data-bs-toggle="collapse" 
                     href="#collapse2"
                     role="button" 
                     aria-expanded="false" 
                     aria-controls="collapse2">
                    <div class="pt-1">
                        <h4 class="pt-3 mb-2">프리다이빙 정보</h4>
                    </div>
                    <div class="ms-auto me-4 pe-2 mt-2">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-2">
                            <label class="custom-control-label" for="toggle-id-2"></label>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse2">
                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-address-card color-gray ms-2"></i>
                        <label for="form21" class="color-highlight">프리 라이센스</label>
                        <select id="form21" required v-model="userData.freeLicenseType" class="wedive-input" style="padding-left:30px;">
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
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-layer-group color-gray ms-2"></i>
                        <label for="form12" class="color-highlight">프리 레벨</label>
                        <select id="form12" required v-model="userData.freeLicenseLevel" class="wedive-input" style="padding-left:30px;">
                            <option value="" selected disabled>프리 레벨</option>
                            <option value="1">레벨1</option>
                            <option value="2">레벨2</option>
                            <option value="3">레벨3</option>
                            <option value="4">레벨4</option>
                            <option value="5">강사</option>
                            <option value="0">없음</option>
                        </select>
                        <span class="mt-n1 me-3"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="mb-0 mt-5">
                        <label class="wediev-label pb-1 color-highlight" style="margin-top:-26px;">Personal Best</label>
                        
                        <div id="div_personal_best" style="display: inline-block;">
                        </div>

                        <a href="#" data-menu="menu-personal-best" class="btn btn-xs mb-0 rounded-xl text-uppercase font-900 shadow-s bg-dark-dark"><i class="fas fa-plus"></i></a>
                    </div>

                    <div class="mb-0" style="margin-top:40px;">
                        <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-24px;">선호사항</label>
                        <div class="form-check interest-check">
                        <input v-if="interest14===true" v-on:click="interest14=!interest14;" class="form-check-input" type="checkbox" value="" checked="checked" id="check_free1">
                        <input v-else v-on:click="interest14=!interest14;" class="form-check-input" type="checkbox" value="" id="check_free1">
                        <label class="form-check-label rounded-xl border-08" for="check_free1">트레이닝</label>
                        <i class="fas fa-graduation-cap color-white font-17"></i>
                        <i class="fas fa-graduation-cap font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest15===true" v-on:click="interest15=!interest15;" class="form-check-input" type="checkbox" value="" id="check_free2">
                        <input v-else v-on:click="interest15=!interest15;" class="form-check-input" type="checkbox" value="" id="check_free2">
                        <label class="form-check-label rounded-xl border-08" for="check_free2">수중화보</label>
                        <i class="fas fa-camera-retro color-white font-17"></i>
                        <i class="fas fa-camera-retro font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input v-if="interest16===true" v-on:click="interest16=!interest16;" class="form-check-input" type="checkbox" value="" id="check_free3">
                        <input v-else v-on:click="interest16=!interest16;" class="form-check-input" type="checkbox" value="" id="check_free3">
                        <label class="form-check-label rounded-xl border-08" for="check_free3">해루질</label>
                        <i class="fab fa-get-pocket color-white font-17"></i>
                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        




        <div class="card card-full pb-0 mb-3 border-bottom hide">
          <div class="content mt-1">
                <div class="d-flex no-effect" 
                     data-trigger-switch="toggle-id-3"
                     data-bs-toggle="collapse" 
                     href="#collapse3"
                     role="button" 
                     aria-expanded="false" 
                     aria-controls="collapse3">
                    <div class="pt-1">
                        <h4 class="pt-3 mb-0">위다이브 강사 <span class="mb-2 color-gray-light-mid font-13 ms-2 font-400"><i class="wedive_icoset wedive_icoset_info me-1"></i>위다이브에서 강좌를 개설합니다.</span></h4>
                    </div>
                    <div class="ms-auto me-4 pe-2 mt-2">
                        <div class="custom-control ios-switch">
                            <input type="checkbox" class="ios-input" id="toggle-id-3">
                            <label class="custom-control-label" for="toggle-id-3"></label>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="collapse3">
                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-phone-alt color-gray"></i>
                        <input type="tel" class="form-control validate-text" id="form31" placeholder="전화번호">
                        <label for="form31" class="color-highlight">전화번호</label>
                        <i class="fa fa-times disabled invalid color-red-dark"></i>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <em>(필수입력)</em>
                    </div>
                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fa fa-at color-gray"></i>
                        <input type="email" class="form-control validate-text" id="form32" placeholder="이메일">
                        <label for="form32" class="color-highlight">이메일</label>
                        <i class="fa fa-times disabled invalid color-red-dark"></i>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <em>(필수입력)</em>
                    </div>
                    
                    <div style="border: 1px solid #abb7ba;width: 150px;height:150px;display: inline-block;background: white;position: relative;">
                        <input type="file" id="file-upload2" class="upload-file text-center" accept=".jpg, .png" style="height: 150px;">
                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:80px;"><i class="fas fa-plus"></i><br/>자격증 업로드</p></input>
                    </div>
                </div>
            </div>
        </div>



        <div class="card card-full pb-0 mb-3 border-bottom">
            <div class="content mt-1">
                <h4 class="pt-2 mb-2">선호사항</h4>
                <a class="color-highlight font-12 hide" style="margin-top: -30px;padding-bottom: 10px;float:right;">초기화</a>


                <div class="mb-0 mt-4 pt-2">
                    <label class="wediev-label pb-1 color-highlight ms-2" style="margin-top:-26px;">공통 선호사항</label>
                    <div class="form-check interest-check">
                    <input v-if="interest1===true" v-on:click="interest1=!interest1;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_general1">
                    <input v-else v-on:click="interest1=!interest1;" class="form-check-input" type="checkbox" value="" id="check_general1">
                    <label class="form-check-label rounded-xl border-08" for="check_general1">국내투어</label>
                    <i class="fas fa-caravan color-white font-17"></i>
                    <i class="fas fa-caravan font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input v-if="interest2===true" v-on:click="interest2=!interest2;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_general2">
                    <input v-else v-on:click="interest2=!interest2;" class="form-check-input" type="checkbox"  value="" id="check_general2">
                    <label class="form-check-label rounded-xl border-08" for="check_general2">해외투어</label>
                    <i class="fas fa-globe-americas color-white font-17"></i>
                    <i class="fas fa-globe-americas font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input v-if="interest3===true" v-on:click="interest3=!interest3;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_general3">
                    <input v-else v-on:click="interest3=!interest3;" class="form-check-input" type="checkbox" value="" id="check_general3">
                    <label class="form-check-label rounded-xl border-08" for="check_general3">수중정화</label>
                    <i class="fas fa-broom color-white font-17"></i>
                    <i class="fas fa-broom font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input v-if="interest4===true" v-on:click="interest4=!interest4;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_general4">
                    <input v-else v-on:click="interest4=!interest4;" class="form-check-input" type="checkbox" value="" id="check_general4">
                    <label class="form-check-label rounded-xl border-08" for="check_general4">뒷풀이</label>
                    <i class="fas fa-beer color-white font-17"></i>
                    <i class="fas fa-beer font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input v-if="interest5===true" v-on:click="interest5=!interest5;" class="form-check-input" type="checkbox" checked="checked" value="" id="check_general5">
                    <input v-else v-on:click="interest5=!interest5;" class="form-check-input" type="checkbox" value="" id="check_general5">
                    <label class="form-check-label rounded-xl border-08" for="check_general5">동호회</label>
                    <i class="fas fa-users color-white font-17"></i>
                    <i class="fas fa-users font-17 color-highlight"></i>
                    </div>
                </div>


                
            </div>

            <a v-on:click="updateUser" href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-5">수정</a>
                
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
    <div id="snackbar-info" class="snackbar-toast color-white bg-yellow-dark" data-bs-delay="2000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>수정이 완료되었습니다.</div>
    
  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
import { GraphQLClient, request, gql } from "graphql-request";
const axios = require("axios")
var schedule_status = [0, 0, 0, 0, 0];

export default {
  name: 'HelloWorld',
  async beforeRouteEnter(to, from, next) {

    var result = await axios({
        url: 'https://api.wedives.com/graphql',
        method: 'post',
        headers: {
            countrycode: 'ko',
            idtoken: (localStorage.idToken) ? localStorage.idToken : "",
        },
        data: {
            query: `
            query GetCurrentUser {
                getCurrentUser {
                    _id
                    uid
                    authProvider
                    oauthToken
                    fcmToken
                    email
                    phoneNumber
                    profileImages {
                        _id
                        thumbnailUrl
                    }
                    nickName
                    name
                    birthAge
                    gender
                    residence
                    interests {
                        _id
                        title
                        type
                    }
                    divingLog
                    freeDivingBests
                    freeLicenseLevel
                    freeLicenseType
                    scubaLicenseLevel
                    scubaLicenseType
                }
            }
            `

        }
    });
    

    var ret = null;
    if (result && result.data && result.data.data && result.data.data.getCurrentUser) {ret = result.data.data.getCurrentUser;}
    
    next(vm => {vm.setData(ret)});
  },
  mounted() {
    
    $(".page-title").hide();
    $(".page-title-clear").hide();
    
    setTimeout(function() {
        $("#toggle-id-1").click();
        $("#toggle-id-2").click();
        $(".wedive-search2 > .input-group").prepend('<i class="fas fa-swimming-pool wedive-search2-icon color-gray"></i>');

        $('#form_pb').on('change', function() {
            var val = $('#form_pb').val();
            if (val == 'STA') {
                $("#em_pb_record").text("(단위, 분)");
            } else {
                $("#em_pb_record").text("(단위, 미터)")
            }
        });
    }, 500);

    if (this.$route.query.header && this.$route.query.header == 'hide') {
      $(".page-title").hide();
      $(".page-title-clear").hide();
      $(".header-fixed").hide();
    }
  },
  components: {
    VueTypeaheadBootstrap
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
        userData: null,
        nickName: '',
        age: '',
        gender: '',
        phoneNumber: '',
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
        file_photo: null,
        interest_id: ["61ac9d06eac3ebfb7ac9f952", "61ac9d0beac3ebfb7ac9f955", "61ac9d18eac3ebfb7ac9f958", "6174da70a60639819c3e6ad9", "61ac9d25eac3ebfb7ac9f95b", "61a2fefa098b3785ef439cb3", "61ac9de8eac3ebfb7ac9f95e", "61ac9deceac3ebfb7ac9f961", "6174da75a60639819c3e6ae5", "61ac9e21eac3ebfb7ac9f964", "6178f02df7c3a048b4706cc8", "6198ff5eae1cc12e02c3cca0", "6178f01cf7c3a048b4706cc6", "61ac9eaeeac3ebfb7ac9f968", "61ac9eb7eac3ebfb7ac9f96b", "61780278f7c3a048b4704a85"],
    }
  }, methods: {
      imageUserChange({ target: { files = [] } }) {
        if (!files.length) {
          return
        }
        this.file_photo = files[0];
        $("#file-upload1-back").css("background", "url(" + URL.createObjectURL(this.file_photo) + ")");
        $("#file-upload1-back").css("background-size", "cover");
        $("#file-upload1-img").hide();
      },
      setData(userData) {
          this.userData = userData;
          this.age = ((new Date()).getFullYear()) - userData.birthAge + 1
          this.userData.interests.forEach(interest => {
              //console.log("interest" + (this.interest_id.indexOf(interest._id)+1) + ":true")
              this["interest" + (this.interest_id.indexOf(interest._id)+1)] = true;
          });
          this.userData.freeDivingBests.forEach(freeDivingBest => {
              var record_type = freeDivingBest[0];
              var record_val = freeDivingBest[1];
              if (freeDivingBest[0] == 'STA') {this.pb_sta = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'DYN') {this.pb_dyn = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'DNF') {this.pb_dnf = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'CWT') {this.pb_cwt = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'VWT') {this.pb_vwt = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'FIM') {this.pb_fim = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'CNF') {this.pb_cnf = freeDivingBest[1];}
              else if (freeDivingBest[0] == 'NLT') {this.pb_nlt = freeDivingBest[1];}
              
              setTimeout(function(record_type, record_val) {
                  $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-17 color-highlight"></i></div>');
              },100, record_type, record_val);
              
          });
          
      },
      async updateUser() {
        // progress bar
        var preloader = document.getElementById('preloader')
        if(preloader){
            preloader.classList.remove('preloader-hide');
            preloader.classList.add('opacity-50');
        }
        

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

        var _userData = JSON.parse(JSON.stringify(this.userData));
        _userData.interests = [];
        _userData.interests = interest_list;
        _userData.freeDivingBests = [];
        _userData.freeDivingBests = freeBest;
        
        _userData.birthAge = (new Date()).getFullYear() - this.age + 1;
        
        // 이미지
        var img_list = new Array();
        _userData.profileImages.forEach(img => {img_list.push(img._id)});

        _userData.profileImages = [];
        _userData.profileImages = img_list;


        // 이미지가 교체되면 이곳에서 업로드를 해야합니다.
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
        if (result_img_user) _userData.profileImages = [result_img_user.uploadImage._id];

        // upsertUser //
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
                    "input": _userData
                }
            }
        });
        if(preloader){
            preloader.classList.remove('opacity-50');
            preloader.classList.add('preloader-hide');
        }
        var toastData = 'snackbar-info';
        var notificationToast = document.getElementById(toastData);
        var notificationToast = new bootstrap.Toast(notificationToast);
        notificationToast.show();
      },
      show_scuba_label: function() {
          document.getElementById('scuba_label').classList.remove('hide')
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
</style>
