/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longestPalindrome = ""
  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandPalindrome(s, i, i) //aba
    const evenPalindrome = expandPalindrome(s, i, i + 1) //abba
    const currentMax =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome

    longestPalindrome =
      currentMax.length > longestPalindrome.length
        ? currentMax
        : longestPalindrome
  }
  return longestPalindrome
}

const expandPalindrome = (s, start, end) => {
  let expanded = ""
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    expanded = s.substring(start, end + 1)
    start--
    end++
  }
  return expanded
}
