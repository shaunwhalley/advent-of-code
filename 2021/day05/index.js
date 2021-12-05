const readInput = require('../readInput')

const partOne = () => {
  const inputs = readInput(__dirname).split('\n')
  const posRegEX = new RegExp(/\d+/g)
  const overlaps = []

  inputs.forEach(input => {
    const [startX, startY, endX, endY] = input.match(posRegEX).map(Number)
    const isDiagonal = startX !== endX && startY !== endY
    if (isDiagonal) return

    const isHorizontal = startX !== endX
    const [start, end] = (isHorizontal ? [startX, endX] : [startY, endY]).sort((a, b) => a - b)

    for (let n = start; n <= end; n++) {
      const [x, y] = isHorizontal ? [n, startY] : [startX, n]
      if (!overlaps[y]) overlaps[y] = []
      overlaps[y][x] = (overlaps[y][x] || 0) + 1
    }
  })

  return overlaps.flat().reduce((total, overlapTotal) => overlapTotal >= 2 ? total + 1 : total, 0)
}

console.log(partOne()) // 7644
