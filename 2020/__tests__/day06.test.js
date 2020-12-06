const fs = require('fs');
const { partOne, partTwo } = require('../day06');

const input = fs.readFileSync('inputs/day06.txt', 'utf8');
const testInput = fs.readFileSync('__tests__/data/day06.txt', 'utf8');

it('part one example passes', () => {
  expect(partOne(testInput)).toBe(11);
});

it('part two example passes', () => {
  expect(partTwo(testInput)).toBe(6);
});

it('part one passes', () => {
  expect(partOne(input)).toBe(7128);
});

it('part two passes', () => {
  expect(partTwo(input)).toBe(3640);
});
