const logger = require('../utils/logger');

const removeDuplicateTitle = (objects) => {
  try {
    const flag = {};
    const unique = [];
    objects.forEach((element) => {
      if (!flag[element.titre]) {
        flag[element.titre] = true;
        unique.push(element);
      }
    });
    return unique;
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  removeDuplicateTitle,
};
