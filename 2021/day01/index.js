const readInput = require('../readInput')

const readings = readInput(__dirname).split('\n').map(reading => Number(reading))

const calculate = lookAhead => readings.reduce((total, reading, idx) => {
  return reading < (readings[idx + lookAhead] || 0) ? total + 1 : total
}, 0)

console.log('partOne:', calculate(1)) // 1624
console.log('partTwo:', calculate(3)) // 1653
