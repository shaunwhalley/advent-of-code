const fs = require('fs');
const { partOne, partTwo } = require('../day09');

const input = fs.readFileSync('inputs/day09.txt', 'utf8');
const testInput = fs.readFileSync('__tests__/data/day09.txt', 'utf8');

it('part one example passes', () => {
  expect(partOne(testInput, 5)).toBe(127);
});

it('part two example passes', () => {
  expect(partTwo(testInput, 127)).toBe(62);
});

it('part one passes', () => {
  expect(partOne(input, 25)).toBe(257342611);
});

it('part two passes', () => {
  expect(partTwo(testInput, 257342611)).toBe(35602097);
});
