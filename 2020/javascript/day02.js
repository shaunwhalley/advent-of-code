const fs = require('fs');

const inputs = fs.readFileSync('inputs/day02.txt', 'utf8').split('\n');

const passRegex = /(\d+)-(\d+) (\w): ([\w]+)/;

function partOne() {
  return inputs.filter(input => {
    const [_, min, max, letter, pass] = input.match(passRegex);
    const numLetters = (pass.match(new RegExp(letter, 'g')) || []).length;
    return numLetters >= min && numLetters <= max;
  }).length;
}

function partTwo() {
  return inputs.filter(input => {
    const [_, first, second, letter, pass] = input.match(passRegex);
    const firstMatch = pass.charAt(first - 1) === letter;
    const secondMatch = pass.charAt(second - 1) === letter;

    return (firstMatch && !secondMatch) || (secondMatch && !firstMatch);
  }).length;
}

console.log(partOne());
console.log(partTwo());
