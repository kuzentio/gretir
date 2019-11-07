WEB_CONTAINER_ID=$(shell docker ps -a -q  --filter name=gretir_web)

init:
	docker-compose -f docker-compose.yml build

start:
	docker-compose -f docker-compose.yml up -d

stop:
	docker-compose -f docker-compose.yml down

restart:
	make stop
	make start

destroy:
	docker-compose -f docker-compose.yml rm -f -s -v

test:
	docker-compose -f docker-compose.yml exec web python manage.py test

shell_plus:
	docker-compose -f docker-compose.yml exec web python manage.py shell_plus

bash:
	docker-compose -f docker-compose.yml exec web bash

logs:
	docker logs $(WEB_CONTAINER_ID) -f

run:
	docker-compose run --service-ports web
