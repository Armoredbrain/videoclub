#!/usr/bin/env node
const fs = require('fs');
const csv = require('csvtojson');

const accentCorrector = (data) => {
  const jsonFix = JSON.stringify(data, null, 2).replaceAll('âe', 'é')
    .replaceAll('áa', 'à')
    .replaceAll('áe', 'è')
    .replaceAll('ãa', 'â')
    .replaceAll('ãe', 'ê')
    .replaceAll('ãi', 'î')
    .replaceAll('ãu', 'û')
    .replaceAll('èi', 'ï')
    .replaceAll('èe', 'ë')
    .replaceAll('èu', 'ü')
    .replaceAll('ðc', 'ç');

  return jsonFix;
};

const jsonWriter = (data) => {
  fs.writeFile('moviesFix.json', data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.info('Data fixed');
    }
  });
};

const parserConfig = {
  noheader: false,
  headers: [
    'annee', 'nbre_de_prets', 'titre',
    'auteur', 'editeur', 'indice', 'bib',
    'cote', 'cat_1', 'cat_2',
  ],
  delimiter: ';',
};

csv(parserConfig).fromFile('./movies.csv')
  .then((jsonObject) => jsonWriter(accentCorrector(jsonObject)));
