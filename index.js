const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const logger = require('./utils/logger');

const movieRouter = require('./routes/movie.route');
const hallOfFameRouter = require('./routes/hallOfFame.route');

const app = express();

app.use(morgan('combined', { stream: logger.stream }));
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://mongodb:27017/videoclub', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use('/movies', movieRouter);
app.use('/halloffames', hallOfFameRouter);

const port = 3000;
app.listen(port, () => console.log(`Server running on port:${port}...`));
