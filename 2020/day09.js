const fs = require('fs');

const input = fs.readFileSync('inputs/day09.txt', 'utf8');

const parseInput = input => input.split('\n').map(n => Number(n));

function partOne(input, blockLength) {
  const numbers = parseInput(input);

  return numbers.slice(blockLength, numbers.length).find((sum, idx) => {
    const sumBlock = numbers.slice(idx, idx + blockLength);

    return !sumBlock.some(num => sumBlock.includes(sum - num));
  });
}

function partTwo(input, sum) {
  const numbers = parseInput(input);

  for (let x = 0; x < numbers.length; x++) {
    for (let y = x + 1; y < numbers.length; y++) {
      const block = numbers.slice(x, y + 1);
      const total = block.reduce((a, b) => a + b, 0);

      if (total === sum) return Math.min(...block) + Math.max(...block);

      if (total > sum) break;
    }
  }
}

console.log(`Part one answer: ${partOne(input, 25)}`);
console.log(`Part two answer: ${partTwo(input, 257342611)}`);

module.exports = {
  partOne,
  partTwo
};
