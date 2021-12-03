const fs = require('fs')
const path = require('path')

const readInput = (day, test = false) => {
  return fs.readFileSync(path.join(day, test ? 'test-input.txt' : 'input.txt'), 'utf-8')
}

module.exports = readInput
