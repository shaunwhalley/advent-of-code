const readInput = require('../readInput')

const inputs = readInput(__dirname, true).split('\n')

const partOne = () => {
  return inputs.reduce((total, input) => {
    const [_, displays] = input.split('|').map(i => i.split(' ').filter(Boolean))
    return total + displays.filter(digit => [2, 4, 3, 7].includes(digit.length)).length
  }, 0)
}

const partTwo = () => {
  return inputs.reduce((total, input) => {
    const digits = {}
    const [signals, displays] = input.split('|').map(i => i.split(' ').filter(Boolean))
    const sortedSignals = signals.sort((a, b) => a.length - b.length).map(signal => signal.split('').sort().join(''))
    digits[sortedSignals[0]] = 1
    digits[sortedSignals[1]] = 7
    digits[sortedSignals[2]] = 4
    digits[sortedSignals[9]] = 8
    console.log('digits:', digits)

    console.log('signals:', sortedSignals)
    // return total + digits.filter(digit => [2, 4, 3, 7].includes(digit.length)).length
  }, 0)
}

// console.log(partOne()) // 390
console.log(partTwo()) // 390
