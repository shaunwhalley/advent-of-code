const fs = require('fs');
const { partOne, partTwo } = require('../day10');

const input = fs.readFileSync('inputs/day10.txt', 'utf8');
const testInput = fs.readFileSync('__tests__/data/day10.txt', 'utf8');

it('part one example passes', () => {
  expect(partOne(testInput)).toBe(35);
});

it.only('part two example passes', () => {
  expect(partTwo(testInput)).toBe(8);
});

it('part one passes', () => {
  expect(partOne(input)).toBe(1885);
});

it('part two passes', () => {

});
