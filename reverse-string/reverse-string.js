/**
 * @param {string} s
 * @return {string}
 */
// 执行用时: 140 ms
var reverseString = function (s) {
  return s.split('').reverse().join('')
}

// 执行用时: 88 ms
var reverseString2 = function (s) {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--)
    res += s[i]
  return res
}

// 测试
console.log(reverseString2('hello'))
console.log(reverseString2('A man, a plan, a canal: Panama'))