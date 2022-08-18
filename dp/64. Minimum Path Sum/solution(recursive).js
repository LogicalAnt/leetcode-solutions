/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid, row = 0, col = 0, memo = {}) {
  //reached out of bounds
  const rowEdgeIndex = grid.length - 1
  const colEdgeIndex = grid[0].length - 1
  if (row > rowEdgeIndex || col > colEdgeIndex) return Infinity

  //reached base case
  if (row == rowEdgeIndex && col == colEdgeIndex) return grid[row][col]

  //reached cached case
  const memoKey = `${row}_${col}`
  if (memoKey in memo) return memo[memoKey]

  const left = minPathSum(grid, row + 1, col, memo)
  const right = minPathSum(grid, row, col + 1, memo)
  let res = grid[row][col] + Math.min(left, right)
  memo[memoKey] = res

  return res
}
