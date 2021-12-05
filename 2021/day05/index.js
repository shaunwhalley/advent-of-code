const readInput = require('../readInput')

const inputs = readInput(__dirname, false).split('\n')
const posRegEX = new RegExp(/\d+/g)

const partOne = (includeDiagonals) => {

  const overlaps = []

  inputs.forEach(input => {
    const [startX, startY, endX, endY] = input.match(posRegEX).map(Number)

    if (startY === endY) {
      const [start, end] = [startX, endX].sort((a, b) => a - b)

      for (let n = start; n <= end; n++) {
        const [x, y] = [n, startY]
        if (!overlaps[y]) overlaps[y] = []
        overlaps[y][x] = (overlaps[y][x] || 0) + 1
      }
    } else if (startX === endX) {
      const [start, end] = [startY, endY].sort((a, b) => a - b)

      for (let n = start; n <= end; n++) {
        const [x, y] = [startX, n]
        if (!overlaps[y]) overlaps[y] = []
        overlaps[y][x] = (overlaps[y][x] || 0) + 1
      }
    } else if (includeDiagonals) {
      const diff = Math.abs(startX - endX)

      for (let n = 0; n <= diff; n++) {
        const x = startX > endX ? startX - n : startX + n
        const y = startY > endY ? startY - n : startY + n
        if (!overlaps[y]) overlaps[y] = []
        overlaps[y][x] = (overlaps[y][x] || 0) + 1
      }
    }
  })

  return overlaps.flat().reduce((total, overlapTotal) => overlapTotal >= 2 ? total + 1 : total, 0)
}

console.log(partOne()) // 7644
console.log(partOne(true)) // 12
