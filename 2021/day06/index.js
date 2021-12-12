const readInput = require('../readInput')

const input = readInput(__dirname).split(',').map(Number)

const findNewSpawns = (iterations, total = 0) => {
  if (iterations > 0) {
    const remainder = iterations - 7
    return findNewSpawns(remainder, total + 1) + findNewSpawns(iterations - 9, 0)
  }
  return total
}

const answer = (iterations) => {
  return input.reduce((total, num) => total + findNewSpawns(iterations - num) + 1, 0)
}

console.log(answer(80)) // 3918888
