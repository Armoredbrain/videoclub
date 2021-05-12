const express = require('express');
const Movie = require('../models/movie');

const movieRouter = express.Router();

const removeDuplicateTitle = (objects) => {
  const flag = {};
  const unique = [];
  objects.forEach((element) => {
    if (!flag[element.titre]) {
      flag[element.titre] = true;
      unique.push(element);
    }
  });
  return unique;
};

movieRouter.route('/').get((request, response) => {
  Movie.find({}, (error, movies) => {
    if (error) console.error(error);
    const uniqueMovie = removeDuplicateTitle(movies);
    response.json(uniqueMovie);
  });
});

movieRouter.route('/:partOfTitle').get((request, response) => {
  Movie.find({ titre: { $regex: request.params.partOfTitle, $options: 'i' } }, (error, movies) => {
    if (error) console.error(error);
    response.json(movies);
  });
});

module.exports = movieRouter;
