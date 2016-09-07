import findNeighbors from './findNeighbors'

export default (cells, width, height) => {
  const initEmptyBoard = (width, height) => {
    const board = []
    for (var i = 0; i < width * height; ++i) { board[i] = false }
    return board
  }

  const board = initEmptyBoard(width, height)
  cells.forEach((isAlive, i) => {
    const neighborIndexes = findNeighbors(i, width, height)
    const neighborStatuses = neighborIndexes.map(ni => cells[ni])
    const aliveNeighbors = neighborStatuses.filter(e => e).length

    // rules
    if (!isAlive && aliveNeighbors === 3) {
      board[i] = true
    } else if (isAlive && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      board[i] = true
    } else if (isAlive && aliveNeighbors < 2) {
      board[i] = false
    } else if (isAlive && aliveNeighbors > 3) {
      board[i] = false
    }
  })

  return board
}
