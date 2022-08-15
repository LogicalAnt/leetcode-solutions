/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, memo = {}) {
  if (n == 1) return 1
  if (n == 2) return 2
  if (n in memo) return memo[n]

  const ways = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
  memo[n] = ways

  return ways
}
