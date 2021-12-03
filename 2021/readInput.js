const fs = require('fs')
const path = require('path')

const readInput = (day) => {
  return fs.readFileSync(path.join(day, './input.txt'), 'utf-8')
}

module.exports = readInput
