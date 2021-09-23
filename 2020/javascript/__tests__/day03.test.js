const { partOne, partTwo } = require('../day03');

const input = [
  '..##.........##.........##.........##.........##.........##.......',
  '#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..',
  '.#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.',
  '..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#',
  '.#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.',
  '..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....',
  '.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#',
  '.#........#.#........#.#........#.#........#.#........#.#........#',
  '#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...',
  '#...##....##...##....##...##....##...##....##...##....##...##....#',
  '.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#'];

it('part two example passes', () => {
  expect(partOne(input)).toBe(7);
});

it('part two example passes', () => {
  expect(partTwo(input, [{ right: 1, down: 1}])).toBe(2);
  expect(partTwo(input, [{ right: 3, down: 1}])).toBe(7);
  expect(partTwo(input, [{ right: 5, down: 1}])).toBe(3);
  expect(partTwo(input, [{ right: 7, down: 1}])).toBe(4);
  expect(partTwo(input, [{ right: 1, down: 2}])).toBe(2);
});