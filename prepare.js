const { fixAndSaveData } = require('./utils/fixDataCsvToJson');

const inputPath = './assets/movies.csv';
const outputPath = './assets/movies.json';

fixAndSaveData(inputPath, outputPath);
