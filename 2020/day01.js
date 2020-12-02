const fs = require('fs');

const input = fs.readFileSync('inputs/day01.txt', 'utf8');
const numbers = input.split('\n').map(n => Number(n));

function partOne() {
  for (x = 0; x < numbers.length; x++) {
    for (y = x + 1; y < numbers.length; y++) {
      if (numbers[x] + numbers[y] === 2020) {
        console.log(numbers[x] * numbers[y]);
        break;
      }
    }
  }
}

function partTwo() {
  for (x = 0; x < numbers.length; x++) {
    for (y = x + 1; y < numbers.length; y++) {
      for (z = y + 1; z < numbers.length; z++) {
        if (numbers[x] + numbers[y] + numbers[z] === 2020) {
          console.log(numbers[x] * numbers[y] * numbers[z]);
          break;
        }
      }
    }
  }
}

partOne()
partTwo()
