const convertToCelsius = function (tempInFarenheit) {
  return (((tempInFarenheit - 32) * 5) / 9).toFixed(1) * 1;
};

const convertToFahrenheit = function (tempInCelsius) {
  return ((tempInCelsius * 9) / 5 + 32).toFixed(1) * 1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
