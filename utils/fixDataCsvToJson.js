#!/usr/bin/env node
const fs = require('fs');
const csvtojson = require('csvtojson');

const jsonDataFix = [];

const fixAndSaveData = (inputPath, outputPath) => {
  fs.createReadStream(inputPath)
    .on('error', () => {})
    .pipe(csvtojson({ delimiter: ';', checkType: true }))
    .on('data', (row) => {
      const jsonRow = JSON.stringify(JSON.parse(row))
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
      jsonDataFix.push(JSON.parse(jsonRow));
    })
    .on('end', () => {
      const json = JSON.stringify(jsonDataFix, null, 2);
      fs.writeFile(outputPath, json, (error) => {
        if (error) {
          console.info(error);
        }
      });
    });
};

fixAndSaveData('./assets/moviesTest.csv', './assets/moviesTest.json');

module.exports = {
  fixAndSaveData,
};
