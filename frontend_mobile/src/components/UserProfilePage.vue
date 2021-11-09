<template>
  <div class="">

    <div class="header header-fixed header-logo-center">
        <a href="" class="header-title color ellipsis">프로필 등록</a>
        <a href="#" data-back-button class="header-icon header-icon-1"><i class="fas fa-chevron-left"></i></a>
        <a href="#" data-menu="menu-main" class="header-icon header-icon-4"><i class="fas fa-bars"></i></a>
    </div>
    
    <div class="card card-clear" data-card-height="80"></div>

    <div class="page-content pb-3"> 
        <div class="text-center mt-3 mb-3">
            <div style="border: 1px solid #abb7ba;width: 150px;height:150px;display: inline-block;background: white;position: relative;">
                <input type="file" id="file-upload" class="upload-file text-center" accept="image/*" style="height: 150px;">
                <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:80px;"><i class="fas fa-plus"></i><br/>사진 업로드</p></input>
            </div>
        </div>
        <!-- card in this page format must have the class card-full to avoid seeing behind it-->
        <div class="card card-full pb-0 mb-3 border-bottom">
          <div class="content mt-1">
            <h4 class="pt-3 mb-0">매너수심 <span class="mb-2 color-gray-light-mid font-13 ms-2 font-400"><i class="wedive_icoset wedive_icoset_info me-1"></i>활동을 많이 할 수록 깊어져요.</span></h4>
            <div class="mt-4 mb-1">
                <div class="progress rounded-l wedive-deep" style="height:28px">
                    <div class="progress-bar bg-highlight text-start ps-3 color-white" 
                         role="progressbar" style="width: 18%" 
                         aria-valuenow="10" aria-valuemin="0" 
                         aria-valuemax="100">
                         18미터
                    </div>
                </div>
            </div>

            <h4 class="pt-4 mb-3">기본정보</h4>
            <div class="mt-2">
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-id-card-alt color-gray"></i>
                    <input type="name" class="form-control validate-name" id="form1" placeholder="닉네임">
                    <label for="form1" class="color-highlight">닉네임</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em>(필수입력)</em>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fa fa-user color-gray"></i>
                    <input type="name" class="form-control validate-name" id="form2" placeholder="이름">
                    <label for="form2" class="color-highlight">이름</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em>(필수입력)</em>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fa fa-user color-gray"></i>
                    <input type="name" class="form-control validate-name" id="form7" placeholder="전화번호">
                    <label for="form7" class="color-highlight">전화번호</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em>(필수입력)</em>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-user-clock color-gray"></i>
                    <input type="number" class="form-control validate-number" id="form3" placeholder="나이">
                    <label for="form3" class="color-highlight">나이</label>
                    <i class="fa fa-times disabled invalid color-red-dark"></i>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <em>(필수입력)</em>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-venus-mars color-gray"></i>
                    <label for="form5" class="color-highlight">성별</label>
                    <select id="form5" required>
                        <option value="" selected disabled>성별</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                    <i class="fa fa-check disabled valid color-green-dark"></i>
                    <i class="fa fa-check disabled invalid color-red-dark"></i>
                    <em></em>
                </div>
                <div class="input-style no-borders has-icon validate-field mb-3">
                    <i class="fas fa-address-book color-gray"></i>
                    <label for="form6" class="color-highlight">거주지</label>
                    <select id="form6" required>
                        <option value="" selected disabled>거주지</option>
                        <option value="서울 강남구">서울 강남구</option>
                        <option value="서울 강동구">서울 강동구</option>
                        <option value="서울 강북구">서울 강북구</option>
                        <option value="서울 강서구">서울 강서구</option>
                        <option value="서울 관악구">서울 관악구</option>
                        <option value="서울 광진구">서울 광진구</option>
                        <option value="서울 구로구">서울 구로구</option>
                        <option value="서울 금천구">서울 금천구</option>
                        <option value="서울 노원구">서울 노원구</option>
                        <option value="서울 도봉구">서울 도봉구</option>
                        <option value="서울 동대문구">서울 동대문구</option>
                        <option value="서울 동작구">서울 동작구</option>
                        <option value="서울 마포구">서울 마포구</option>
                        <option value="서울 서대문구">서울 서대문구</option>
                        <option value="서울 서초구">서울 서초구</option>
                        <option value="서울 성동구">서울 성동구</option>
                        <option value="서울 성북구">서울 성북구</option>
                        <option value="서울 송파구">서울 송파구</option>
                        <option value="서울 양천구">서울 양천구</option>
                        <option value="서울 영등포구">서울 영등포구</option>
                        <option value="서울 용산구">서울 용산구</option>
                        <option value="서울 은평구">서울 은평구</option>
                        <option value="서울 종로구">서울 종로구</option>
                        <option value="서울 중구">서울 중구</option>
                        <option value="서울 중랑구">서울 중랑구</option>
                        <option value="부산광역시">부산광역시</option>
                        <option value="대구광역시">대구광역시</option>
                        <option value="인천광역시">인천광역시</option>
                        <option value="광주광역시">광주광역시</option>
                        <option value="대전광역시">대전광역시</option>
                        <option value="울산광역시">울산광역시</option>
                        <option value="세종특별자치시">세종특별자치시</option>
                        <option value="경기도 수원시">경기도 수원시</option>
                        <option value="경기도 성남시">경기도 성남시</option>
                        <option value="경기도 안양시">경기도 안양시</option>
                        <option value="경기도 안산시">경기도 안산시</option>
                        <option value="경기도 용인시">경기도 용인시</option>
                        <option value="경기도 부천시">경기도 부천시</option>
                        <option value="경기도 광명시">경기도 광명시</option>
                        <option value="경기도 평택시">경기도 평택시</option>
                        <option value="경기도 과천시">경기도 과천시</option>
                        <option value="경기도 오산시">경기도 오산시</option>
                        <option value="경기도 시흥시">경기도 시흥시</option>
                        <option value="경기도 군포시">경기도 군포시</option>
                        <option value="경기도 의왕시">경기도 의왕시</option>
                        <option value="경기도 하남시">경기도 하남시</option>
                        <option value="경기도 이천시">경기도 이천시</option>
                        <option value="경기도 안성시">경기도 안성시</option>
                        <option value="경기도 김포시">경기도 김포시</option>
                        <option value="경기도 화성시">경기도 화성시</option>
                        <option value="경기도 광주시">경기도 광주시</option>
                        <option value="경기도 여주시">경기도 여주시</option>
                        <option value="경기도 고양시">경기도 고양시</option>
                        <option value="경기도 의정부시">경기도 의정부시</option>
                        <option value="경기도 동두천시">경기도 동두천시</option>
                        <option value="경기도 구리시">경기도 구리시</option>
                        <option value="경기도 남양주시">경기도 남양주시</option>
                        <option value="경기도 파주시">경기도 파주시</option>
                        <option value="경기도 양주시">경기도 양주시</option>
                        <option value="경기도 포천시">경기도 포천시</option>
                        <option value="경기도 연천군">경기도 연천군</option>
                        <option value="경기도 가평군">경기도 가평군</option>
                        <option value="강원도 춘천시">강원도 춘천시</option>
                        <option value="강원도 원주시">강원도 원주시</option>
                        <option value="강원도 강릉시">강원도 강릉시</option>
                        <option value="강원도 동해시">강원도 동해시</option>
                        <option value="강원도 태백시">강원도 태백시</option>
                        <option value="강원도 속초시">강원도 속초시</option>
                        <option value="강원도 삼척시">강원도 삼척시</option>
                        <option value="강원도 홍천군">강원도 홍천군</option>
                        <option value="강원도 횡성군">강원도 횡성군</option>
                        <option value="강원도 영월군">강원도 영월군</option>
                        <option value="강원도 평창군">강원도 평창군</option>
                        <option value="강원도 정선군">강원도 정선군</option>
                        <option value="강원도 철원군">강원도 철원군</option>
                        <option value="강원도 화천군">강원도 화천군</option>
                        <option value="강원도 양구군">강원도 양구군</option>
                        <option value="강원도 인제군">강원도 인제군</option>
                        <option value="강원도 고성군">강원도 고성군</option>
                        <option value="강원도 양양군">강원도 양양군</option>
                        <option value="경상북도 포항시">경상북도 포항시</option>
                        <option value="경상북도 경주시">경상북도 경주시</option>
                        <option value="경상북도 김천시">경상북도 김천시</option>
                        <option value="경상북도 안동시">경상북도 안동시</option>
                        <option value="경상북도 구미시">경상북도 구미시</option>
                        <option value="경상북도 영주시">경상북도 영주시</option>
                        <option value="경상북도 영천시">경상북도 영천시</option>
                        <option value="경상북도 상주시">경상북도 상주시</option>
                        <option value="경상북도 문경시">경상북도 문경시</option>
                        <option value="경상북도 경산시">경상북도 경산시</option>
                        <option value="경상북도 군위군">경상북도 군위군</option>
                        <option value="경상북도 의성군">경상북도 의성군</option>
                        <option value="경상북도 청송군">경상북도 청송군</option>
                        <option value="경상북도 영양군">경상북도 영양군</option>
                        <option value="경상북도 영덕군">경상북도 영덕군</option>
                        <option value="경상북도 청도군">경상북도 청도군</option>
                        <option value="경상북도 고령군">경상북도 고령군</option>
                        <option value="경상북도 성주군">경상북도 성주군</option>
                        <option value="경상북도 칠곡군">경상북도 칠곡군</option>
                        <option value="경상북도 예천군">경상북도 예천군</option>
                        <option value="경상북도 봉화군">경상북도 봉화군</option>
                        <option value="경상북도 울진군">경상북도 울진군</option>
                        <option value="경상북도 울릉군">경상북도 울릉군</option>
                        <option value="경상남도 창원시">경상남도 창원시</option>
                        <option value="경상남도 진주시">경상남도 진주시</option>
                        <option value="경상남도 통영시">경상남도 통영시</option>
                        <option value="경상남도 사천시">경상남도 사천시</option>
                        <option value="경상남도 김해시">경상남도 김해시</option>
                        <option value="경상남도 밀양시">경상남도 밀양시</option>
                        <option value="경상남도 거제시">경상남도 거제시</option>
                        <option value="경상남도 양산시">경상남도 양산시</option>
                        <option value="경상남도 의령군">경상남도 의령군</option>
                        <option value="경상남도 함안군">경상남도 함안군</option>
                        <option value="경상남도 창녕군">경상남도 창녕군</option>
                        <option value="경상남도 고성군">경상남도 고성군</option>
                        <option value="경상남도 남해군">경상남도 남해군</option>
                        <option value="경상남도 하동군">경상남도 하동군</option>
                        <option value="경상남도 산청군">경상남도 산청군</option>
                        <option value="경상남도 함양군">경상남도 함양군</option>
                        <option value="경상남도 거창군">경상남도 거창군</option>
                        <option value="경상남도 합천군">경상남도 합천군</option>
                        <option value="충청북도 청주시">충청북도 청주시</option>
                        <option value="충청북도 충주시">충청북도 충주시</option>
                        <option value="충청북도 제천시">충청북도 제천시</option>
                        <option value="충청북도 보은군">충청북도 보은군</option>
                        <option value="충청북도 옥천군">충청북도 옥천군</option>
                        <option value="충청북도 영동군">충청북도 영동군</option>
                        <option value="충청북도 증평군">충청북도 증평군</option>
                        <option value="충청북도 진천군">충청북도 진천군</option>
                        <option value="충청북도 괴산군">충청북도 괴산군</option>
                        <option value="충청북도 음성군">충청북도 음성군</option>
                        <option value="충청북도 단양군">충청북도 단양군</option>
                        <option value="충청남도 천안시">충청남도 천안시</option>
                        <option value="충청남도 공주시">충청남도 공주시</option>
                        <option value="충청남도 보령시">충청남도 보령시</option>
                        <option value="충청남도 아산시">충청남도 아산시</option>
                        <option value="충청남도 서산시">충청남도 서산시</option>
                        <option value="충청남도 논산시">충청남도 논산시</option>
                        <option value="충청남도 계룡시">충청남도 계룡시</option>
                        <option value="충청남도 당진시">충청남도 당진시</option>
                        <option value="충청남도 금산군">충청남도 금산군</option>
                        <option value="충청남도 부여군">충청남도 부여군</option>
                        <option value="충청남도 서천군">충청남도 서천군</option>
                        <option value="충청남도 청양군">충청남도 청양군</option>
                        <option value="충청남도 홍성군">충청남도 홍성군</option>
                        <option value="충청남도 예산군">충청남도 예산군</option>
                        <option value="충청남도 태안군">충청남도 태안군</option>
                        <option value="전랴북도 전주시">전랴북도 전주시</option>
                        <option value="전랴북도 군산시">전랴북도 군산시</option>
                        <option value="전랴북도 익산시">전랴북도 익산시</option>
                        <option value="전랴북도 정읍시">전랴북도 정읍시</option>
                        <option value="전랴북도 남원시">전랴북도 남원시</option>
                        <option value="전랴북도 김제시">전랴북도 김제시</option>
                        <option value="전랴북도 완주군">전랴북도 완주군</option>
                        <option value="전랴북도 진안군">전랴북도 진안군</option>
                        <option value="전랴북도 무주군">전랴북도 무주군</option>
                        <option value="전랴북도 장수군">전랴북도 장수군</option>
                        <option value="전랴북도 임실군">전랴북도 임실군</option>
                        <option value="전랴북도 순창군">전랴북도 순창군</option>
                        <option value="전랴북도 고창군">전랴북도 고창군</option>
                        <option value="전랴북도 부안군">전랴북도 부안군</option>
                        <option value="전라남도 목포시">전라남도 목포시</option>
                        <option value="전라남도 여수시">전라남도 여수시</option>
                        <option value="전라남도 순천시">전라남도 순천시</option>
                        <option value="전라남도 나주시">전라남도 나주시</option>
                        <option value="전라남도 광양시">전라남도 광양시</option>
                        <option value="전라남도 담양군">전라남도 담양군</option>
                        <option value="전라남도 곡성군">전라남도 곡성군</option>
                        <option value="전라남도 구례군">전라남도 구례군</option>
                        <option value="전라남도 고흥군">전라남도 고흥군</option>
                        <option value="전라남도 보성군">전라남도 보성군</option>
                        <option value="전라남도 화순군">전라남도 화순군</option>
                        <option value="전라남도 장흥군">전라남도 장흥군</option>
                        <option value="전라남도 강진군">전라남도 강진군</option>
                        <option value="전라남도 해남군">전라남도 해남군</option>
                        <option value="전라남도 영암군">전라남도 영암군</option>
                        <option value="전라남도 무안군">전라남도 무안군</option>
                        <option value="전라남도 함평군">전라남도 함평군</option>
                        <option value="전라남도 영광군">전라남도 영광군</option>
                        <option value="전라남도 장성군">전라남도 장성군</option>
                        <option value="전라남도 완도군">전라남도 완도군</option>
                        <option value="전라남도 진도군">전라남도 진도군</option>
                        <option value="전라남도 신안군">전라남도 신안군</option>
                        <option value="제주특별자치도 제주시">제주특별자치도 제주시</option>
                        <option value="제주특별자치도 서귀포시">제주특별자치도 서귀포시</option>
                        
                    </select>
                    <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
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
                        <h4 class="pt-3 mb-2">스쿠버다이빙 정보</h4>
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
                        <i class="fas fa-address-card color-gray"></i>
                        <label for="form11" class="color-highlight">라이센스</label>
                        <select id="form11" required>
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
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-layer-group color-gray"></i>
                        <label for="form22" class="color-highlight">레벨</label>
                        <select id="form22" required>
                            <option value="" selected disabled>레벨</option>
                            <option value="오픈워터">오픈워터</option>
                            <option value="어드밴스드">어드밴스드</option>
                            <option value="레스큐">레스큐</option>
                            <option value="마스터">마스터</option>
                            <option value="강사">강사</option>
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-clipboard-check color-gray"></i>
                        <label for="form23" class="color-highlight">다이빙 로그</label>
                        <select id="form23" required>
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

                    <div class="mb-0 mt-5">
                        <label class="wediev-label pb-1 color-highlight" style="margin-top:-26px;">스쿠버 선호사항</label>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba1">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba1">체크다이빙</label>
                        <i class="fas fa-check-square color-white font-18"></i>
                        <i class="fas fa-check-square font-16 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba2">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba2">먹다이빙</label>
                        <i class="fab fa-get-pocket color-white font-18"></i>
                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba3">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba3">리브어보드</label>
                        <i class="fas fa-ship color-white font-18"></i>
                        <i class="fas fa-ship font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba4">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba4">테크니컬다이빙</label>
                        <i class="fas fa-drafting-compass color-white font-18"></i>
                        <i class="fas fa-drafting-compass font-17 color-highlight"></i>
                        </div>
                    </div>
                    <div class="mb-0 mt-4">
                        <label class="wediev-label pb-1 color-highlight" style="margin-top:-26px;">선호 포인트</label>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba6">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba6">마크로포인트</label>
                        <i class="fas fa-search-minus color-white font-18"></i>
                        <i class="fas fa-search-minus font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_scuba7">
                        <label class="form-check-label rounded-xl border-08" for="check_scuba7">대물포인트</label>
                        <i class="fas fa-search-plus color-white font-18"></i>
                        <i class="fas fa-search-plus font-17 color-highlight"></i>
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
                    <div class="mt-3 mb-3">
                        <label id="scuba_label" class="color-highlight wediev-label hide">자주가는 수영장</label>
                        <vue-typeahead-bootstrap
                            class="wedive-search2 border-bottom"
                            v-model="query"
                            :data="users"
                            :serializer="item => item.name_ko"
                            :screen-reader-text-serializer="item => `${item.name_ko}`"
                            highlightClass="special-highlight-class"
                            @hit="selecteduser = $event;show_scuba_label();"
                            :minMatchingChars="2"
                            placeholder="자주가는 수영장"
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
                    
                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-address-card color-gray"></i>
                        <label for="form21" class="color-highlight">라이센스</label>
                        <select id="form21" required>
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
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                        <i class="fa fa-check disabled valid color-green-dark"></i>
                        <i class="fa fa-check disabled invalid color-red-dark"></i>
                        <em></em>
                    </div>

                    <div class="input-style no-borders has-icon validate-field mb-3">
                        <i class="fas fa-layer-group color-gray"></i>
                        <label for="form12" class="color-highlight">레벨</label>
                        <select id="form12" required>
                            <option value="" selected disabled>레벨</option>
                            <option value="레벨1">레벨1</option>
                            <option value="레벨2">레벨2</option>
                            <option value="레벨3">레벨3</option>
                            <option value="레벨4">레벨4</option>
                            <option value="강사">강사</option>
                            <option value="없음">없음</option>
                        </select>
                        <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
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

                    <div class="mb-0 mt-5">
                        <label class="wediev-label pb-1 color-highlight" style="margin-top:-26px;">프리 선호사항</label>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_free1">
                        <label class="form-check-label rounded-xl border-08" for="check_free1">트레이닝</label>
                        <i class="fas fa-graduation-cap color-white font-18"></i>
                        <i class="fas fa-graduation-cap font-16 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_free2">
                        <label class="form-check-label rounded-xl border-08" for="check_free2">스피어 피싱</label>
                        <i class="fas fa-fish color-white font-18"></i>
                        <i class="fas fa-fish font-17 color-highlight"></i>
                        </div>
                        <div class="form-check interest-check">
                        <input class="form-check-input" type="checkbox" value="" id="check_free3">
                        <label class="form-check-label rounded-xl border-08" for="check_free3">해루질</label>
                        <i class="fab fa-get-pocket color-white font-18"></i>
                        <i class="fab fa-get-pocket font-17 color-highlight"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        




        <div class="card card-full pb-0 mb-3 border-bottom">
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
                        <input type="file" id="file-upload2" class="upload-file text-center" accept="image/*" style="height: 150px;">
                        <p class="upload-file-text" style="color: #abb7ba;position:absolute;left:40px;top:80px;"><i class="fas fa-plus"></i><br/>자격증 업로드</p></input>
                    </div>
                </div>
            </div>
        </div>



        <div class="card card-full pb-0 mb-3 border-bottom">
            <div class="content mt-1">
                <h4 class="pt-2 mb-2">선호사항</h4>
                <a class="color-highlight font-12 hide" style="margin-top: -30px;padding-bottom: 10px;float:right;">초기화</a>


                <div class="mb-0 mt-5">
                    <label class="wediev-label pb-1 color-highlight" style="margin-top:-26px;">공통 선호사항</label>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general1">
                    <label class="form-check-label rounded-xl border-08" for="check_general1">국내투어</label>
                    <i class="fas fa-caravan color-white font-18"></i>
                    <i class="fas fa-caravan font-16 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general2">
                    <label class="form-check-label rounded-xl border-08" for="check_general2">해외투어</label>
                    <i class="fas fa-globe-americas color-white font-18"></i>
                    <i class="fas fa-globe-americas font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general3">
                    <label class="form-check-label rounded-xl border-08" for="check_general3">수중촬영</label>
                    <i class="fas fa-camera-retro color-white font-18"></i>
                    <i class="fas fa-camera-retro font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general6">
                    <label class="form-check-label rounded-xl border-08" for="check_general6">수중정화</label>
                    <i class="fas fa-broom color-white font-18"></i>
                    <i class="fas fa-broom font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general4">
                    <label class="form-check-label rounded-xl border-08" for="check_general4">뒷풀이</label>
                    <i class="fas fa-beer color-white font-18"></i>
                    <i class="fas fa-beer font-17 color-highlight"></i>
                    </div>
                    <div class="form-check interest-check">
                    <input class="form-check-input" type="checkbox" value="" id="check_general5">
                    <label class="form-check-label rounded-xl border-08" for="check_general5">동호회</label>
                    <i class="fas fa-users color-white font-18"></i>
                    <i class="fas fa-users font-17 color-highlight"></i>
                    </div>
                </div>


                
            </div>

            <a href="#" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0 ms-3 me-3 mb-5">완료</a>
                
        </div>



        
    </div>
    <!-- Page content ends here-->
    
    <!-- Menu : Personal Best -->
    <div id="menu-personal-best" 
         class="menu menu-box-modal rounded-m bg-theme" 
         data-menu-width="350"
         data-menu-height="300">
        <div class="menu-title p-2">
            <h1 class="font-600 font-18">Personal Best 추가</h1>
            <a href="#" class="close-menu"><i class="wedive_icoset wedive_icoset_close"></i></a>
        </div>
        
        <div class="content">
            
            <div class="input-style no-borders has-icon validate-field mb-3">
                <i class="fas fa-record-vinyl color-gray"></i>
                <label for="form_pb" class="color-highlight">Personal Best</label>
                <select id="form_pb" required>
                    <option value="" selected disabled>Personal Best</option>
                    <option value="STA">STA (숨참기)</option>
                    <option value="DYN">DYN (핀잠영)</option>
                    <option value="DNF">DNF (맨발 잠영)</option>
                    <option value="CWT">CWT (고정 웨이트)</option>
                    <option value="VWT">VWT (가변 웨이트)</option>
                    <option value="FIM">FIM (프리 이머전)</option>
                    <option value="CNF">CNF (맨발 잠수)</option>
                    <option value="NLT">NLT (무제한 잠수)</option>
                </select>
                <span class="mt-n1 me-2"><i class="fa fa-chevron-down"></i></span>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <i class="fa fa-check disabled invalid color-red-dark"></i>
                <em></em>
            </div>


            <div class="input-style no-borders has-icon validate-field mb-3">
                <i class="fas fa-clipboard color-gray"></i>
                <input type="number" class="form-control validate-number" id="form_record" placeholder="기록">
                <label for="form_record" class="color-highlight">기록</label>
                <i class="fa fa-times disabled invalid color-red-dark"></i>
                <i class="fa fa-check disabled valid color-green-dark"></i>
                <em id="em_pb_record">(단위, 미터)</em>
            </div>
            
            <a href="#" v-on:click="addPersonalBest()" class="btn btn-full font-400 rounded-s shadow-l gradient-highlight color-white bd-w-0">추가하기</a>
        </div>
    </div>


    <div id="snackbar-inputerror" class="snackbar-toast color-white bg-red-dark" data-bs-delay="3000" data-bs-autohide="true"><i class="fa fa-times me-3"></i>모든 항목을 입력해주세요.</div>


  </div>
</template>
<script>
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';
import {debounce} from 'lodash';
var schedule_status = [0, 0, 0, 0, 0];

export default {
  name: 'HelloWorld',
  mounted() {
    var preloader = document.getElementById('preloader')
    if(preloader){preloader.classList.add('preloader-hide');}
    
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
  },
  components: {
    VueTypeaheadBootstrap
  },
  created() {
    
  },
  data () {
    return {
        query: '',
        selecteduser: null,
        users: []
    }
  }, methods: {
      show_scuba_label: function() {
          document.getElementById('scuba_label').classList.remove('hide')
      },
      lookupUser: debounce(function(){
        // in practice this action should be debounced
        fetch(`https://api.github.com/search/users?q=${this.query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            this.users = data.items;
          })
      }, 500),
      lookupUser2: debounce(function(){
        this.users = [
            {"id": "region_ko_jeju", "type": "region", "name_ko": "제주도", name_en: "Jeju island", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bf/d2/56/photo1jpg.jpg?w=100&h=100&s=1"},
            {"id": "region_ko_wooljin", "type": "region", "name_ko": "울진", name_en: "Wooljin", "img_url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/5a/31/a0/sunrise-peak-seongsan.jpg?w=100&h=100&s=1"},
            {"id": "center_ko_jeju_bubbletank", "type": "center", "name_ko": "제주 버블탱크 스쿠버다이빙", name_en: "Bubble tank", "img_url": "/static/bubble2.jpg"},
            {"id": "point_ko_jeju_munisland", "type": "point", "name_ko": "제주도 문섬", name_en: "Mun island", "img_url": "https://api.cdn.visitjeju.net/photomng/imgpath/201907/31/07c1996d-4374-4e77-b353-300d01783718.jpg"},
        ];
      }, 500),
      addPersonalBest: function() {
            var record_type = $('#form_pb').val();
            var record_val = $("#form_record").val();

            if (record_type == null || record_val == '') {
                var toastData = 'snackbar-inputerror';
                var notificationToast = document.getElementById(toastData);
                var notificationToast = new bootstrap.Toast(notificationToast);
                notificationToast.show();
            } else {
                $('#form_pb').val('');
                $("#form_record").val('');
                
                $("#div_personal_best").append('<div class="form-check interest-check"><label class="form-check-label rounded-xl border-08 wedive-label">'+ record_type + ', '+ record_val + ((record_type=='STA') ? '분' : '미터') +'</label><i class="fas fa-clipboard font-16 color-highlight"></i></div>');
                const activeMenu = document.querySelectorAll('.menu-active');
                for(let i=0; i < activeMenu.length; i++){activeMenu[i].classList.remove('menu-active');}
                for(let i=0; i < wrappers.length; i++){wrappers[i].style.transform = "translateX(-"+0+"px)"}
            }
      }
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
</style>
