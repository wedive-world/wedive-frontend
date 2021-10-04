cp /wedive-secret/frontend-config.env frontend/.env &&
cp /wedive-secret/frontend-config.env frontend_mobile/.env &&
cp /wedive-secret/frontend-config.env /root/.env &&
docker-compose build &&
docker-compose up -d &&
docker-compose &&
docker image prune -a -f