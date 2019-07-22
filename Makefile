run-local: ##@application Creates Docker container.
	docker-compose -f "docker-compose.yml" up -d --build

stop: ##@application Stop all container.
	docker-compose -f "docker-compose.yml" down

run:
	docker run -p 8000:8000 website