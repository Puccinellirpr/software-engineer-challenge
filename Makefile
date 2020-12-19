export

up:
	docker-compose up -d db
	curl https://s3.amazonaws.com/careers-picpay/users.csv.gz --output data/users.csv.gz
	gunzip -f -k data/users.csv.gz > data/users.csv
	docker exec db bash -c 'while !</dev/tcp/db/5432; do sleep 1; done;'
	docker exec db psql -U docker -f /opt/data/migration.sql
	docker exec db psql -U docker -f /opt/data/import-data.sql
	docker-compose up -d user_search

up-test:
	docker-compose up -d db
	docker exec db bash -c 'while !</dev/tcp/db/5432; do sleep 1; done;'
	docker exec db psql -U docker -f /opt/data/test/migration.sql
	docker exec db psql -U docker -f /opt/data/test/import-data.sql
	docker-compose up -d user_search

down:
	docker-compose down

	