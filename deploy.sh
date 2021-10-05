cp /wedive-secret/frontend-config.env .env &&
docker-compose build &&
docker-compose up -d &&
docker image prune -a -f