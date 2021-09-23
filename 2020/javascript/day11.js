const fs = require('fs');

const input = fs.readFileSync('inputs/day11.txt', 'utf8');

const parseInput = input => input.split('\n').map(row => row.split(''));

function partOne(input) {
  const seats = parseInput(input);
  console.log('seats:', seats)
}

function partTwo(input) {

}

// console.log(`Part one answer: ${partOne(input)}`);
// console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
