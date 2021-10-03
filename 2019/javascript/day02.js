const readInput = require('./read-input')
const intcode = require('./intcode')

const input = readInput('day02.txt')

const partOne = intcode({
  program: input,
  overrides: [
    [1, 12],
    [2, 2]
  ]
})[0]

const partTwo = (() => {
  const expected_output = 19690720
  const range = [...Array(100).keys()]

  for (const noun of range) {
    for (const verb of range) {
      const output = intcode({
        program: input,
        overrides: [
          [1, noun],
          [2, verb]
        ]
      })

      if (output[0] === expected_output) return 100 * noun + verb
    }
  }
})()

console.log(partOne) // 3306701
console.log(partTwo) // 7621
