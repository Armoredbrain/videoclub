#!/usr/bin/env node
const fs = require('fs');
const csvtojson = require('csvtojson');

const jsonDataFix = [];

const accentCorrector = (dataObject) => {
  const jsonString = JSON.stringify(dataObject);
  const jsonStringFix = jsonString
    .replaceAll('âe', 'é')
    .replaceAll('áa', 'à')
    .replaceAll('áe', 'è')
    .replaceAll('ãa', 'â')
    .replaceAll('ãe', 'ê')
    .replaceAll('ãi', 'î')
    .replaceAll('ãu', 'û')
    .replaceAll('èi', 'ï')
    .replaceAll('èe', 'ë')
    .replaceAll('èu', 'ü')
    .replaceAll('ðc', 'ç')
    .replaceAll('ão', 'ô');
  return JSON.parse(jsonStringFix);
};

const jsonWriter = (json) => {
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('./assets/movies.json', jsonString, (error) => {
    if (error) {
      console.info(error);
    } else {
      console.info('Data fixed');
    }
  });
};

fs.createReadStream('./assets/movies.csv')
  .on('error', () => {})
  .pipe(csvtojson({ delimiter: ';', checkType: true }))
  .on('data', (row) => {
    const parseAndFixRow = accentCorrector(JSON.parse(row));
    jsonDataFix.push(parseAndFixRow);
  })
  .on('end', () => {
    jsonWriter(jsonDataFix);
  });
