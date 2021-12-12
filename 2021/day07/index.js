const readInput = require('../readInput')

const input = readInput(__dirname).split(',').map(Number).sort()

const answer = (reducer) => {
  const totalsByIndex = input.map(i => input.reduce(reducer(i), 0))

  return Math.min(...totalsByIndex)
}

const partOneReducer = (idx) => (total, num) => total + Math.abs(num - idx)
const partTwoReducer = (idx) => (total, num) => {
  const diff = Math.abs(num - idx)

  return total + (diff * (diff + 1))
}

console.log(answer(partOneReducer)) // 340052
// console.log(answer(partTwoReducer))
