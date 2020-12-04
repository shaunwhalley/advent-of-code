const fs = require('fs');
const { partOne, partTwo } = require('../day04');

const inputs = fs.readFileSync('__tests__/data/day04.txt', 'utf8').split('\n\n').map(p => p.split('\n').join(' '));
const valid = fs.readFileSync('__tests__/data/day04-pt2-valid.txt', 'utf8').split('\n\n').map(p => p.split('\n').join(' '));
const invalid = fs.readFileSync('__tests__/data/day04-pt2-invalid.txt', 'utf8').split('\n\n').map(p => p.split('\n').join(' '));

it('part one example passes', () => {
  expect(partOne(inputs)).toBe(2);
});

it('part two example passes', () => {
  expect(partTwo(valid)).toBe(4);
  expect(partTwo(invalid)).toBe(0);
});
