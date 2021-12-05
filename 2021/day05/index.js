const readInput = require('../readInput')

const inputs = readInput(__dirname, false).split('\n')
const posRegEX = new RegExp(/\d+/g)

const answer = (includeDiagonals) => {
  const overlaps = {}

  const setOverlap = (x, y) => {
    const pos = `${x},${y}`
    overlaps[pos] = (overlaps[pos] || 0) + 1
  }

  inputs.forEach(input => {
    const [startX, startY, endX, endY] = input.match(posRegEX).map(Number)

    if (startY === endY) {
      const [start, end] = [startX, endX].sort((a, b) => a - b)

      for (let n = start; n <= end; n++) {
        setOverlap(n, startY)
      }
    } else if (startX === endX) {
      const [start, end] = [startY, endY].sort((a, b) => a - b)

      for (let n = start; n <= end; n++) {
        setOverlap(startX, n)
      }
    } else if (includeDiagonals) {
      const diff = Math.abs(startX - endX)

      for (let n = 0; n <= diff; n++) {
        const x = startX > endX ? startX - n : startX + n
        const y = startY > endY ? startY - n : startY + n

        setOverlap(x, y)
      }
    }
  })

  return Object.values(overlaps).reduce((total, overlapTotal) => overlapTotal >= 2 ? total + 1 : total, 0)
}

console.log(answer()) // 7644
console.log(answer(true)) // 18627
