const readInput = require('../readInput')

const input = readInput(__dirname).split('\n\n')
const calledNumbers = input[0].split(',')
const boards = input.slice(1, input.length).map(board => board.split('\n').join(' ').split(' '))

const partTwo = (nthBoard) => {
  const boardState = []

  let winningNumberIdx
  const winningBoards = []

  calledNumbers.some((calledNum, nIdx) => {
    if (nIdx >= 4) {
      boardState.forEach((board, boardStateIdx) => {
        return Object.values(board).some(total => {
          if (total === 5 && !winningBoards.includes(boardStateIdx)) {
            winningNumberIdx = nIdx
            winningBoards.push(boardStateIdx)
          }
        })
      })

      if (winningBoards.length === nthBoard) return true
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

  const winningNumbers = calledNumbers.slice(0, winningNumberIdx)
  const winningBoard = boards[winningBoards[winningBoards.length - 1]]
  const winningBoardUnmarkedSum = winningBoard.filter(n => !winningNumbers.includes(n)).reduce((total, n) => total + Number(n), 0)

  return winningBoardUnmarkedSum * calledNumbers[winningNumberIdx -1]
}

const partOneAnswer = partTwo(1) // 14093
const partTwoAnswer = partTwo(boards.length) // 17388
console.log('partOneAnswer:', partOneAnswer)
console.log('partTwoAnswer:', partTwoAnswer)


