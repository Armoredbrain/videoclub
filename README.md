# Simple movie API with NEM stack

## Installation
git clone <repo>
cd <folder>
yarn install
docker-compose up >>> will setup start two container, one for node and one for mongodb
yarn fixDataCsvToJson >>> will convert csv to json and correct accent error
yarn db:copyJsonToContainer >>> will copy movies.json to mongodb container
yarn db:populateDbWithJson >>> will populate db with movie data from movies.json

Your videoclub API is ready to use! :rocket:

## API routes
* /movies >>> Get all movie list 
* /movies/<part of title> >>> Get the movie list searching by partial title
* /halloffame/movies >>> Get the most top 100 rented movies for all time
* /halloffame/movies/<year> >>> Get the most top 100 rented movie for a specific year
* /halloffame/movie >>> Get the most rented movie for all time
* /halloffame/movie/<year> >>> Get the most top rented movie for a specific year
* /halloffame/author >>> Get the author of the most rented movies for all time

## Future improvement
* add post request to add movie
* add update request to change value of 'nbre_de_prets' for a specific movie
* add more tests to have a better coverage
* automatize launch with a bash script
* setup travis
* move logic from route to manager
* add middlewares to check request and response (mainly for security)
