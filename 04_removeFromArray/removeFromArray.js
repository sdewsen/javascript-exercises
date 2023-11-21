const removeFromArray = function (array, ...parameter) {
  const filtredArray = array.filter((n) => {
    return !parameter.includes(n);
  });
  return filtredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
