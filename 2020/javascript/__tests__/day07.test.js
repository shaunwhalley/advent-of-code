const fs = require('fs');
const { partOne, partTwo } = require('../day07');

const input = fs.readFileSync('inputs/day07.txt', 'utf8');
const testInput = fs.readFileSync('__tests__/data/day07.txt', 'utf8');
const testInputPt2 = fs.readFileSync('__tests__/data/day07-pt2.txt', 'utf8');

it('part one example passes', () => {
  expect(partOne(testInput)).toBe(4);
});

it('part two example passes', () => {
  expect(partTwo(testInputPt2)).toBe(126);
});

it('part one passes', () => {
  expect(partOne(input)).toBe(142);
});

it('part two passes', () => {
  expect(partTwo(input)).toBe(10219);
});
