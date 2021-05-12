const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
  annee: {
    type: Number,
  },
  nbre_de_prets: {
    type: Number,
  },
  titre: {
    type: String,
  },
  auteur: {
    type: String,
  },
  editeur: {
    type: String,
  },
  indice: {
    type: String,
  },
  bib: {
    type: String,
  },
  cote: {
    type: String,
  },
  cat_1: {
    type: String,
  },
  cat_2: {
    type: String,
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
