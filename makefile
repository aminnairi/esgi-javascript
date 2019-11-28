.PHONY: install build test

install:
	docker-compose run npm install

build:
	docker-compose run npm run build
	docker-compose run shell sed -i "/exports/d" exercise-*/*.js

test:
	docker-compose run npm test
