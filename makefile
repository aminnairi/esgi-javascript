.PHONY: install build

install:
	docker-compose run npm install

build:
	docker-compose run npm run build
	docker-compose run shell sed -i "/exports/d" exercise-*/*.js
