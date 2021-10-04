cp /wedive-secret/frontend-config.env frontend/.env &&
cp /wedive-secret/frontend-config.env frontend_mobile/.env &&
docker-compose build &&
docker-compose up -d &&
docker image prune -a -f