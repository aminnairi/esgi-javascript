.PHONY: install transpile

install:
	docker-compose run npm install

transpile:
	docker-compose run npm run transpile
	docker-compose run shell sed -i "/exports/d" exercise-*/*.js
