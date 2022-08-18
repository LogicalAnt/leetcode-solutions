/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rowEdgeIndex = grid.length - 1
  const colEdgeIndex = grid[0].length - 1

  for (let row = 0; row <= rowEdgeIndex; row++) {
    for (let col = 0; col <= colEdgeIndex; col++) {
      if (row == 0 && col != 0) grid[row][col] += grid[row][col - 1] //top row(excl 1st item)
      if (row != 0 && col == 0) grid[row][col] += grid[row - 1][col] //left column(excl 1st item)
      if (row != 0 && col != 0)
        grid[row][col] += Math.min(grid[row - 1][col], grid[row][col - 1]) //others
    }
  }
  return grid[rowEdgeIndex][colEdgeIndex]
}
