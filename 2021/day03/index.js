const readInput = require('../readInput')

const lines = readInput(__dirname).split('\n')

const partOne = () => {
  const [gammaBits, epsilonBits] =
    lines
      .reduce((totals, line) => {
        line.split('').forEach((digit, idx) => totals[idx] = (totals[idx] || 0) + (Number(digit)))
        return totals
      }, [])
      .reduce((bits, total) => {
        total > (lines.length / 2) ? bits[0].push(1) && bits[1].push(0) : bits[0].push(0) && bits[1].push(1)
        return bits
      }, [[], []])

  const gammaRate = parseInt((gammaBits.join('')), 2)
  const epsilonRate = parseInt((epsilonBits.join('')), 2)

  return gammaRate * epsilonRate
}

const partTwo = () => {
  const oxygenBitFilter = (lines, bitTotal) => bitTotal >= (lines.length / 2) ? 1 : 0
  const c02BitFilter = (lines, bitTotal) => bitTotal < (lines.length / 2) ? 1 : 0

  const findRating = (lines, filter, idx = 0) => {
    const bitTotal = lines.reduce((totals, line) => totals + Number(line.split('')[idx]), 0)
    const bit = filter(lines, bitTotal)
    const filteredLines = lines.filter(line => Number(line.split('')[idx]) === bit)

    return filteredLines.length === 1 ? parseInt(filteredLines[0], 2) : findRating(filteredLines, filter, idx + 1)
  }

  const oxygenRating = findRating(lines, oxygenBitFilter)
  const c02Rating = findRating(lines, c02BitFilter)

  return oxygenRating * c02Rating
}

const partOneAnswer = partOne() // 3912944
const partTwoAnswer = partTwo() // 4996233

console.log('partOneAnswer:', partOneAnswer)
console.log('partTwoAnswer:', partTwoAnswer)
