const { createLogger, format, transports } = require('winston');

const { combine, timestamp, prettyPrint, colorize } = format;

const logger = createLogger({
  format: combine(timestamp(), prettyPrint(), colorize()),
  transports: [new transports.Console()],
  exitOnError: false,
});

logger.stream = {
  write: (message, encoding) => {
    logger.error(message, encoding);
  },
};

module.exports = logger;
