const readInput = require('./read-input')

const input = readInput('day01.txt')
const modules = input.split('\n')

const calculateFuel = (module, recurse) => {
  const fuel = Math.floor(Number(module) / 3) - 2

  if (!recurse) return fuel

  return fuel > 0 ? fuel + calculateFuel(fuel) : 0
}

const partOne = modules.reduce((totalFuel, module) => totalFuel + calculateFuel(module), 0)
const partTwo = modules.reduce((totalFuel, module) => totalFuel + calculateFuel(module, true), 0)

console.log(partOne) // 3296560
console.log(partTwo) // 4941976
