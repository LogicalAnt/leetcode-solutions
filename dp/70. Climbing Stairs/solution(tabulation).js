/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const result = Array(n + 1).fill(0)
  result[1] = 1
  result[2] = 2

  for (let i = 3; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2]
  }

  return result[n]
}

console.log(climbStairs(45))
