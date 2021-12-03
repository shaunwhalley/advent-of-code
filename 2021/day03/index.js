const readInput = require('../readInput')

const nums = readInput(__dirname).split('\n')

const partOne = () => {
  const oneTotals = nums.reduce((totals, num) => {
    num.split('').forEach((digit, idx) => (totals[idx] = (totals[idx] || 0) + Number(digit)))
    return totals
  }, [])

  const gammaRateBits = oneTotals.map(total => total > (nums.length / 2) ? 1 : 0)
  const gammaRate = parseInt((gammaRateBits.join('')), 2)
  const epsilonRate = parseInt(gammaRateBits.map(bit => bit === 0 ? 1 : 0).join(''), 2)

  return gammaRate * epsilonRate
}

const partTwo = () => {
  const oxygenBitFilter = (total, nums) => total >= (nums.length / 2) ? 1 : 0
  const c02BitFilter = (total, nums) => total < (nums.length / 2) ? 1 : 0

  const findRating = (nums, filter, idx = 0) => {
    const oneTotal = nums.reduce((totals, num) => totals + Number(num.split('')[idx]), 0)
    const bitFilter = filter(oneTotal, nums)
    const filteredNums = nums.filter(num => Number(num.split('')[idx]) === bitFilter)

    return filteredNums.length === 1 ? parseInt(filteredNums[0], 2) : findRating(filteredNums, filter, idx + 1)
  }

  const oxygenRating = findRating(nums, oxygenBitFilter)
  const c02Rating = findRating(nums, c02BitFilter)

  return oxygenRating * c02Rating
}

const partOneAnswer = partOne() // 3912944
const partTwoAnswer = partTwo() // 4996233

console.log('partOneAnswer:', partOneAnswer)
console.log('partTwoAnswer:', partTwoAnswer)
