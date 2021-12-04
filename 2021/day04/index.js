const readInput = require('../readInput')

const input = readInput(__dirname).split('\n\n')
const calledNumbers = input[0].split(',')
const boards = input.slice(1, input.length).map(board => board.split('\n').join(' ').split(' '))

const answer = (nthBoard) => {
  const boardState = []
  const winningIdxs = []

  calledNumbers.some((calledNum, nIdx) => {
    if (nIdx >= 4) {
      boardState.forEach((board, boardStateIdx) => {
        return Object.values(board).some(total => {
          if (total === 5 && !winningIdxs.find(([boardIdx]) => boardIdx === boardStateIdx)) {
            winningIdxs.push([boardStateIdx, nIdx - 1])
            return true
          }
        })
      })

      if (winningIdxs.length === nthBoard) return true
    }

    boards.forEach((board, boardIdx) => {
      const matchIdx = board.findIndex(n => n === calledNum)
      if (matchIdx === -1) return
      const rowIdx = Math.floor(matchIdx / 5)
      const colIdx = (matchIdx % 5)
      const state = boardState[boardIdx] || {}
      state[`x${rowIdx}`] = (state[`x${rowIdx}`] || 0) + 1
      state[`y${colIdx}`] = (state[`y${colIdx}`] || 0) + 1
      boardState[boardIdx] = state
    })
  })


  const [winningBoardIdx, winningNumberIdx] = winningIdxs[winningIdxs.length - 1]
  const winningBoard = boards[winningBoardIdx]
  const winningNumbers = calledNumbers.slice(0, winningNumberIdx + 1)
  const unmarkedSum = winningBoard.filter(n => !winningNumbers.includes(n)).reduce((total, n) => total + Number(n), 0)

  return unmarkedSum * calledNumbers[winningNumberIdx]
}

console.log(answer(1)) // 14093
console.log(answer(boards.length)) // 17388


