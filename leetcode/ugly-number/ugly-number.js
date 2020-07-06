/**
 * @param {number} num
 * @return {boolean}
 */
// 执行用时: 88 ms
var isUgly = function (num) {
  if (num <= 0) return false
  while (num % 2 === 0) num /= 2
  while (num % 3 === 0) num /= 3
  while (num % 5 === 0) num /= 5
  return num === 1
}

var isUgly2 = function (num) {
  if (num <= 0) return false
  const a = [2, 3, 5]
  for (let i = 0; i < 3; i++) {
    while (num % a[i] === 0)
      num /= a[i]
  }
  return num === 1 ? true : false
}

// true
console.log(isUgly2(6))
// true
console.log(isUgly2(8))
// false
console.log(isUgly2(14))