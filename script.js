'use strict';

const myArray = [1, 2, 3, 4, 5];

const changedNums = myArray.map((num, i, arr) => {
  console.log(arr[i]);
  console.log('Orginal number: ', num);
  return num * 2;
});
console.log('New nums array: ', changedNums);

const odds = myArray.filter((element) => element % 2 !== 0);

console.log('Odd numbers: ', odds);

myArray.forEach((item) => {
  console.log(item ** (2 + 1));
});
