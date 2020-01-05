# ElevenTest

Initialization: 

git clone https://github.com/Ylahjaily/ElevenTest
docker-compose up -d
docker-compose exec web composer install
docker-compose exec web php bin/console doctrine:database:create
docker-compose exec web php bin/console make:migration
docker-compose exec web php bin/console
doctrine:migrations:migrate 
docker-compose exec web php bin/console doctrine:fixtures:load
