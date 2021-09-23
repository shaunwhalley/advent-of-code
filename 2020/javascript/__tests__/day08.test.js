const fs = require('fs');
const { partOne, partTwo } = require('../day08');

const input = fs.readFileSync('inputs/day08.txt', 'utf8');
const testInput = fs.readFileSync('__tests__/data/day08.txt', 'utf8');

it('part one example passes', () => {
  expect(partOne(testInput)).toBe(5);
});

it('part two example passes', () => {
  expect(partTwo(testInput)).toBe(8);
});

it('part one passes', () => {
  expect(partOne(input)).toBe(1584);
});

it('part two passes', () => {
  expect(partTwo(input)).toBe(920);
});
