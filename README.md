# Simple movie API with node.js, mongodb and docker 

## Introduction
Here you will find a simple API for a videoclub, It is running on two containers

## Installation
* `git clone git@github.com:Armoredbrain/videoclub.git videoclub-backend`
* cd videoclub-backend 
* yarn install
* docker-compose up >>> will setup start two containers, one for node and one for mongodb
* yarn file:fixDataCsvToJson >>> will convert csv to json and correct accent error
* yarn db:copyJsonToContainer >>> will copy movies.json to mongodb container
* yarn db:populateDbWithJson >>> will populate db with movie data from movies.json

Your videoclub API is ready to use on port 3000! :rocket:

## API routes
* /movies --> Get all movie list 
* /movies/`part of title` --> Get the movie list searching by partial title
* /halloffame/movies --> Get the most top 100 rented movies for all time
* /halloffame/movies/`year` --> Get the most top 100 rented movie for a specific year
* /halloffame/movie --> Get the most rented movie for all time
* /halloffame/movie/`year` --> Get the most top rented movie for a specific year
* /halloffame/author --> Get the author of the most rented movies for all time

## Future improvements
* add .env!
* add post request to add movie
* add update request to change value of `nbre_de_prets` for a specific movie during a specific year
* add tests
* automatize launch with a bash script
* setup travis (might be vast)
* add middlewares to check request and response (mainly for security)
* add logger to uniformize console log
* take advantage of mongodb graph capabilities to replace some JS logic
