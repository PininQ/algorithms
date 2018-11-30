/**
 * @param {number} n
 * @return {number}
 */
/* 执行用时: 72 ms */
const trailingZeroes = function (n) {
  if (n < 0) return -1
  let res = 0
  while (n >= 5) {
    let temp = parseInt(n / 5)
    res += temp
    n = temp
  }
  return res
}

/* 执行用时: 76 ms */
const trailingZeroes2 = function (n) {
  let res = 0
  while (n) {
    res += ~~(n / 5)
    n /= 5
    n = ~~n
  }
  return res
}

/* 执行用时: 76 ms */
const trailingZeroes3 = n => n < 5 ? 0 : ~~(n / 5) + trailingZeroes3(~~(n / 5))

/* 测试 */
let r1 = trailingZeroes3(3) // 0
let r2 = trailingZeroes3(5) // 1
let r3 = trailingZeroes3(30) // 2
console.log(r1)
console.log(r2)
console.log(r3)