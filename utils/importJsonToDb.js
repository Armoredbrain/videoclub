#!/usr/bin/env node
const { exec } = require('child_process');

const copyJsonToMongoContainer = () => {
  exec('docker cp ./assets/movies.json videoclub-backend_mongodb_1:movies.json', (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
};

const populateMongoDbWithMovieData = () => {
  exec(
    'docker exec -it videoclub-backend_mongodb_1 mongoimport -d videoclub -c movies --type json --file movies.json --jsonArray',
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
};

module.exports = {
  copyJsonToMongoContainer,
  populateMongoDbWithMovieData,
};
