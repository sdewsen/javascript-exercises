const reverseString = function (string) {
  const arrayString = [...string];
  const reversedArray = arrayString.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
