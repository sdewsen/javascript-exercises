const sumAll = function (x, y) {
  let contador = 0;
  let z;
  if (typeof x !== "number" || typeof y !== "number" || x < 0 || y < 0) {
    return "ERROR";
  }
  if (x > y) {
    z = y;
    y = x;
    x = z;
  }
  do {
    contador += x;
    x++;
  } while (x <= y);
  return contador;
};

// Do not edit below this line
module.exports = sumAll;
