const readInput = require('../readInput')

const instructions = readInput(__dirname).split('\n').map(instruction => {
  const [direction, distance] = instruction.split(' ')
  return [direction, Number(distance)]
})

const partOne = () => {
  const [x, y] = instructions.reduce((coords, instruction) => {
    const axis = instruction[0] === 'forward' ? 0 : 1
    instruction[0] === 'up' ? coords[axis] -= instruction[1] : coords[axis] += instruction[1]
    return coords
  }, [0, 0])

  return x * y
}

const partTwo = () => {
  const [x, y] = instructions.reduce((coords, instruction) => {
    if (instruction[0] === 'forward') {
      coords[0] += instruction[1]
      coords[1] += coords[2] * instruction[1]
      return coords
    }

    instruction[0] === 'up' ? coords[2] -= instruction[1] : coords[2] += instruction[1]
    return coords
  }, [0, 0, 0])

  return x * y
}

console.log(partOne()) // 1893605
console.log(partTwo()) // 900
