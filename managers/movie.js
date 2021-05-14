const removeDuplicateTitle = (objects) => {
  const flag = {};
  const unique = [];
  objects.forEach((element) => {
    if (!flag[element.titre]) {
      flag[element.titre] = true;
      unique.push(element);
    }
  });
  return unique;
};

module.exports = {
  removeDuplicateTitle,
};
