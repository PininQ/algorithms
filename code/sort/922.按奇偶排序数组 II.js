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
  A.forEach((item) => {
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

var sortArrayByParityII3 = function (A) {
  let odd = 1

  for (let i = 0; i < A.length; i += 2) {
    if (A[i] % 2 === 1) {
      while (A[odd] % 2 === 1) {
        odd += 2
      }
      ;[A[i], A[odd]] = [A[odd], A[i]]
    }
  }
  return A
}

export {
  sortArrayByParityII,
  sortArrayByParityII2,
  sortArrayByParityII3
}
