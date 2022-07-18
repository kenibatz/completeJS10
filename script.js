'use strict';

console.log(`\n*** Functions ***`);
console.log(`\n*** Higher Order Functions ***`);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HOF
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transormed String: ${fn(str)};`);
  console.log(`Transformed by: ${fn.name}`);
};

console.log(
  `\n* transformer is the higher order function that receives the function 'oneWord' as an argument`
);
transformer('JS is the best!', oneWord);
console.log(
  `\n* since it is meant as an abstraction, transformer can also use a different function as an argument`
);
transformer('javascript is the best!', upperFirstWord);
