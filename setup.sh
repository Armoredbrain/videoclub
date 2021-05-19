#!/bin/sh

yarn install
docker-compose up -d
yarn file:fixData
yarn db:copyJsonToContainer
yarn db:populateDbWithJson
docker-compose down
