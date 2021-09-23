const fs = require('fs');
const { partOne, partTwo, calculateSeatId } = require('../day05');

const inputs = fs.readFileSync('inputs/day05.txt', 'utf8').split('\n');

it('calculate seat id', () => {
  expect(calculateSeatId('BFFFBBFRRR')).toBe(567);
  expect(calculateSeatId('FFFBBBFRRR')).toBe(119);
  expect(calculateSeatId('BBFFBBFRLL')).toBe(820);
});

it('part one example passes', () => {
  expect(partOne(inputs)).toBe(959);
});

it('part two example passes', () => {
  expect(partTwo(inputs)).toBe(527);
});
