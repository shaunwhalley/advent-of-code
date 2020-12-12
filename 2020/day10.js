const fs = require('fs');

const input = fs.readFileSync('inputs/day10.txt', 'utf8');

const parseInput = input => input.split('\n').map(n => Number(n));

function partOne(input) {
  const adapters = [0].concat(parseInput(input).sort((a, b) => a - b));
  const totals = { 1: 0, 2: 0, 3: 1 };

  adapters.forEach((adapter, idx, arr) => totals[arr[idx + 1] - adapter]++);

  return totals[1] * totals[3];
}

function partTwo(input) {
  const adapters = [0].concat(parseInput(input).sort((a, b) => a - b));
  const pathTotals = [1];

  adapters.forEach((adapter, idx, arr) => {
    for (let j = idx - 3; j < idx; j++) {
      if (adapter - arr[j] <= 3) {
        pathTotals[idx] ? pathTotals[idx] += pathTotals[j] : pathTotals[idx] = 0 + pathTotals[j];
      }
    }
  });

  return Math.max(...pathTotals);

}

console.log(`Part one answer: ${partOne(input)}`);
console.log(`Part two answer: ${partTwo(input)}`);

module.exports = {
  partOne,
  partTwo
};
