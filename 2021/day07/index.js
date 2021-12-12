const readInput = require('../readInput')

const input = readInput(__dirname).split(',').map(Number)

const answer = (reducer) => {
  const min = Math.min(...input), max = Math.max(...input), totalsByPos = []

  for (let n = min; n <= max; n++) {
    totalsByPos.push(input.reduce(reducer(n), 0))
  }

  return Math.min(...totalsByPos)
}

const partOneReducer = (idx) => (total, num) => total + Math.abs(num - idx)
const partTwoReducer = (idx) => (total, num) => {
  const diff = Math.abs(num - idx)
  return total + ((diff * (diff + 1)) / 2)
}

console.log(answer(partOneReducer)) // 340052
console.log(answer(partTwoReducer)) // 92948968
