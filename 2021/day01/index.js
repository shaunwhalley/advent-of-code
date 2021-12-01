const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8')
const readings = input.split('\n').map(reading => Number(reading))

const partOne = readings.reduce((total, reading, idx) => {
  return reading < (readings[idx + 1]) || 0 ? total + 1 : total
}, 0)

console.log('partOne:', partOne)

const partTwo = readings.reduce((total, reading, idx) => {
  if (idx === readings.length - 1) return total
  const current = reading + readings[idx + 1] + readings[idx + 2]
  const next = readings[idx + 1] + readings[idx + 2] + readings[idx + 3]

  return current < (next) ? total + 1 : total
}, 0)

console.log('partTwo:', partTwo)
