const express = require('express');
const Movie = require('../models/movie');

const hallOfFameRouter = express.Router();

hallOfFameRouter.route('/author').get((request, response) => {
  const pipeline = [
    {
      $group: {
        _id: '$auteur',
        total: {
          $sum: '$nbre_de_prets',
        },
      },
    },
  ];
  Movie.aggregate(pipeline)
    .sort({ total: -1 })
    .limit(1)
    .exec((error, authors) => {
      return error ? console.error(error) : response.json(authors);
    });
});

hallOfFameRouter.route('/movie').get((request, response) => {
  Movie.where('nbre_de_prets')
    .gte(1)
    .sort({ nbre_de_prets: -1 })
    .limit(1)
    .exec((error, movies) => {
      if (error) console.error(error);
      response.json(movies);
    });
});

hallOfFameRouter.route('/:year').get((request, response) => {
  Movie.where('annee')
    .equals(request.params.year)
    .sort({ nbre_de_prets: -1 })
    .limit(100)
    .exec((error, movies) => {
      if (error) console.error(error);
      response.json(movies);
    });
});

module.exports = hallOfFameRouter;
