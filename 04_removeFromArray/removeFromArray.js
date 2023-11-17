const removeFromArray = function (array, ...parameter) {
  for (let i = 0; i < parameter.length; i++) {
    for (let y = 0; y < array.length; y++) {
      if (parameter[i] === array[y]) {
        array.splice(array[y]);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
