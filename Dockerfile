FROM node:14

WORKDIR /usr/src/wedive-frontend
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해
# 와일드카드를 사용
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/
COPY frontend_mobile/package*.json ./frontend_mobile/
COPY pm2.config.js .

RUN npm --prefix frontend install 
RUN npm --prefix frontend_mobile install
RUN npm --prefix backend install
# 프로덕션을 위한 코드를 빌드하는 경우
# RUN npm ci --only=production

RUN npm install -g pm2

# 앱 소스 추가 a
COPY . .

ARG VUE_APP_API_PATH
ENV VUE_APP_API_PATH $VUE_APP_API_PATH

ARG VUE_APP_API_PATH2
ENV VUE_APP_API_PATH2 $VUE_APP_API_PATH2

RUN npm run build --prefix frontend
RUN npm run build --prefix frontend_mobile

EXPOSE 3000

CMD [ "pm2-runtime", "start", "backend/bin/www" ]
