const fs = require('fs')
const path = require('path')

const readInput = (filename) => {
  return fs.readFileSync(path.join(__dirname, 'inputs', filename), 'utf-8')
}

module.exports = readInput
