const readInput = require('./read-input')

const input = readInput('day03.txt')

const processWire = (wire) => {
  const coords = [0, 0]
  const allSteps = new Set()

  for (const point of wire.split(',')) {
    for (_ = 0; _ < Number(point.slice(1)); _++) {
      const idx = ['L', 'R'].includes(point.charAt(0)) ? 0 : 1
      coords[idx] += ['L', 'D'].includes(point.charAt(0)) ? -1 : 1
      allSteps.add(`${coords[0]},${coords[1]}`)
    }
  }

  return allSteps
}

const wires = input.split('\n').map(processWire)
const intersections = []
wires[0].forEach((x) => wires[1].has(x) && intersections.push(x))

const partOne = Math.min(...intersections.map((i) => Math.abs(Number(i.split(',')[0])) + Math.abs(Number(i.split(',')[1]))))
const partTwo = Math.min(...intersections.map((i) => wires.reduce((s, w) => s + [...w].indexOf(i) + 2, 0)))

console.log('partOne:', partOne) // 1285
console.log('partTwo:', partTwo) // 14228
