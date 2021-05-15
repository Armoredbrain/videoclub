# Simple movie API with node.js, mongodb and docker 

## Introduction
Here you will find a simple API for a videoclub, It is running on two containers

## Installation
* `git clone git@github.com:Armoredbrain/videoclub.git videoclub-backend`
* `cd videoclub-backend` 
* make `setup.sh` executable
* run `./setup.sh` in terminal

Once done, run `docker-compose up` and your videoclub API is ready to use on port 3000! :rocket:

## Scripts
* `docker-compose up` --> will launch two containers (mongo and node)
* `docker-compose down` --> will stop the two containers
* `yarn test` and `yarn test:watch` --> run tests
* `yarn prettier` and `yarn prettier: fix` --> run prettier check and prettier fix
* `lint` and `lint:fix`--> run eslint check and fix


## API routes
* /movies --> Get all movie list 
* /movies/`part of title` --> Get the movie list searching by partial title
* /halloffame/movies --> Get the most top 100 rented movies for all time
* /halloffame/movies/`year` --> Get the most top 100 rented movie for a specific year
* /halloffame/movie --> Get the most rented movie for all time
* /halloffame/movie/`year` --> Get the most top rented movie for a specific year
* /halloffame/author --> Get the author of the most rented movies for all time

## Future improvements
* add .env
* add post request to add movie
* add update request to change value of `nbre_de_prets` for a specific movie during a specific year
* test api routes
* setup travis (might be vast)
* add middlewares to check request and response (mainly for security)
* take advantage of mongodb graph capabilities to replace some JS logic

## Know issues
* database getting populate over and over if `setup.sh` is ran multiple time, to fix this run `docker exec -it videoclub-backend_mongodb_1 mongo` then `use videoclub` and `db.dropDtabase()`
