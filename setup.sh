#!/bin/sh

yarn install
docker-compose up
yarn file:fixData
yarn db:copyJsonToContainer
yarn db:populateDbWithJson
docker-compose down
