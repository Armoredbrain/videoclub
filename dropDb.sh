#!/bin/sh

docker exec -it videoclub-backend_mongodb_1 mongo videoclub --eval "db.dropDatabase()"
