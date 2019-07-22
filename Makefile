build: ##@application Creates Docker container.
	docker-compose build

start: ##@application Starts Web App Locally.
	docker-compose up -d webapp

stop: ##@application Stop all container.
	docker-compose down

run:
	docker run -p 8000:8000 educodar:latest