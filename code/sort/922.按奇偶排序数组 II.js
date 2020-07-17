/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const res = []
  let i = -1
  let odd = 1
  let even = 0

  while (++i < A.length) {
    if (A[i] % 2 === 0) {
      res[even] = A[i]
      even += 2
    } else {
      res[odd] = A[i]
      odd += 2
    }
  }
  return res
}

var sortArrayByParityII2 = function (A) {
  let res = []
  // 记录奇数、偶数位下标
  let odd = 1
  let even = 0
  // 对数组进行遍历
  A.forEach(item => {
    if (item % 2 === 1) {
      res[odd] = item
      odd += 2
    } else {
      res[even] = item
      even += 2
    }
  })
  return res
}

export {
  sortArrayByParityII,
  sortArrayByParityII2
}
