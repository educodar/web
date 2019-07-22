build: ##@application Creates Docker container.
	docker-compose build

run-local: ##@application Starts Web App Locally.
	docker-compose up -d webapp

stop: ##@application Stop all container.
	docker-compose down