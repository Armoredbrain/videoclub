const express = require('express');
const Movie = require('../models/movie');
const { removeDuplicateTitle } = require('../managers/movie');
const logger = require('../utils/logger');

const movieRouter = express.Router();

movieRouter.route('/').get((request, response) => {
  Movie.find({}, (error, movies) => {
    if (error) {
      logger.error(error);
      return;
    }
    const uniqueMovie = removeDuplicateTitle(movies);
    response.json(uniqueMovie);
  });
});

movieRouter.route('/:partOfTitle').get((request, response) => {
  Movie.find({ titre: { $regex: request.params.partOfTitle, $options: 'i' } }, (error, movies) => {
    if (error) {
      logger.error(error);
      return;
    }
    response.json(movies);
  });
});

module.exports = movieRouter;
