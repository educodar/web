run-local: ##@application Creates Docker container for local development
	docker-compose -f "docker-compose.debug.yml" up -d --build

stop-local: ##@application Stop container for local development
	docker-compose -f "docker-compose.debug.yml" down

start: ##@application Creates Docker container for production
	docker-compose -f "docker-compose.yml" up -d --build

stop: ##@application Stop container for production
	docker-compose -f "docker-compose.yml" down