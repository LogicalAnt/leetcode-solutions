/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle, row = 0, col = 0, memo = {}) {
  if (row === triangle.length - 1) return triangle[row][col]
  const index = `${row}_${col}`
  if (index in memo) return memo[index]

  const left = minimumTotal(triangle, row + 1, col, memo)
  const right = minimumTotal(triangle, row + 1, col + 1, memo)
  const res = triangle[row][col] + Math.min(left, right)
  memo[index] = res
  return res
}
