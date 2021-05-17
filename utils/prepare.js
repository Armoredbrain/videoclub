const { fixAndSaveData } = require('./fixAndSaveData');

const inputPath = './assets/movies.csv';
const outputPath = './assets/movies.json';

fixAndSaveData(inputPath, outputPath);
