const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let lengthOfArray = arr.length;
  let sumres = 0;
  for (let i = 0; i < lengthOfArray; i++) {
    sumres += arr[i];
  }
  return sumres
};

const multiply = function (a) {
  res = 1;
  for (let i = 0; i < a.length; i++) {
    res = res * a[i];
  }
  return res;
};

const power = function (base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function (num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
