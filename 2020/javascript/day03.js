const fs = require('fs');

const inputs = fs.readFileSync('inputs/day03.txt', 'utf8').split('\n');

function partOne(inputs) {
  let trees = 0, x = 0;

  for (let y = 1; y < inputs.length; y++) {
    const input = inputs[y];
    x = x + 3 > input.length - 1 ? x + 3 - input.length : x + 3;
    if (input.charAt(x) === '#') trees++;
  }

  return trees;
}

const slopes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 }
];

function partTwo(inputs, slopes) {
  const totals = slopes.map(slope => {
    let trees = 0, x = 0;

    for (let y = slope.down; y < inputs.length; y += slope.down) {
      const input = inputs[y];
      x = x + slope.right > input.length - 1 ? x + slope.right - input.length : x + slope.right;
      if (input.charAt(x) === '#') trees++;
    }

    return trees;
  });

  return totals.reduce((total, n) => total * n, 1);
}

console.log(partOne(inputs));
console.log(partTwo(inputs, slopes));

module.exports.partOne = partOne;
module.exports.partTwo = partTwo;
