#!/usr/bin/env node
const fs = require('fs');
const csvtojson = require('csvtojson');
const logger = require('./logger');

const jsonDataFix = [];

const fixAndSaveData = async (inputPath, outputPath) => {
  fs.createReadStream(inputPath)
    .on('error', (error) => {
      logger.error(error);
    })
    .pipe(csvtojson({ delimiter: ';', checkType: true }))
    .on('data', (row) => {
      try {
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
      } catch (error) {
        logger.error(error);
      }
    })
    .on('end', () => {
      const json = JSON.stringify(jsonDataFix, null, 2);
      fs.writeFile(outputPath, json, (error) => {
        if (error) {
          logger.error(error);
        } else {
          logger.info('Data fixed and saved to json file');
        }
      });
    });
};

module.exports = {
  fixAndSaveData,
};
