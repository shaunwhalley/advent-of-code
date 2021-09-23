const fs = require('fs');

const inputs = fs.readFileSync('inputs/day05.txt', 'utf8').split('\n');

const ROWS_COLS_REGEX = /^([BF]{7})([RL]{3})$/;

const findPos = (bounds, section) => {
  const [min, max] = bounds;
  const split = (max - min) / 2;

  if (section === 'F' || section === 'L') {
    return [min, max - Math.ceil(split)];
  }

  return [max - Math.floor(split), max];
}

function calculateSeatId(row) {
  const [_, rows, columns] = row.match(ROWS_COLS_REGEX);

  const rowNum = rows.split('').reduce(findPos, [0, 127])[0];
  const colNum = columns.split('').reduce(findPos, [0, 7])[0];

  return rowNum * 8 + colNum;
}

function partOne(inputs) {
  const seatIds = inputs.map(input => calculateSeatId(input));

  return Math.max(...seatIds);
}

function partTwo(inputs) {
  const seatIds = inputs.map(input => calculateSeatId(input)).sort((a, b) => a - b);

  return seatIds.find((id, idx) => seatIds[idx + 1] !== id + 1) + 1;
}

console.log(`Part one answer: ${partOne(inputs)}`);
console.log(`Part two answer: ${partTwo(inputs)}`);

module.exports = {
  partOne,
  partTwo,
  calculateSeatId
};
