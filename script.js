'use strict';
const vowelArray = ['A', 'E', 'I', 'O', 'U'];
let sum = 0;

const countVowels = function (str, vowel) {
  let target = vowel; // let's look for it
  let count = 0;
  let pos = 0;
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;
    pos = foundPos + 1; // continue the search from the next position
    count++;
  }
  return count;
};

document.querySelector('#check').addEventListener('click', function () {
  let str = document.querySelector('#input').value.toUpperCase();
  for (let i = 0; i < vowelArray.length; i++) {
    let vowelTotal = 0;
    vowelTotal = countVowels(str, vowelArray[i]);
    sum = sum + vowelTotal;
  }
  alert(`There are ${sum} vowels`);
});
