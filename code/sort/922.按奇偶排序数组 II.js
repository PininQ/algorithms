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

/**
 * 当偶数位出来奇数时，一定有奇数位出现偶数
 * 以偶数位来遍历，0、2、4、...，如果遇到奇数值，则使用奇数位来找偶数，1、3、5...，
 * 如果找到了，则交换值，然后进入下一轮偶数遍历
 * @param {Array} A
 */
var sortArrayByParityII3 = function (A) {
  let odd = 1

  // 1. 如果为偶数，则进入下一次循环，检查下一个偶数下标的值是否为偶数
  // 2. 如果非偶数，就用 odd 找到一个奇数下标的值为偶数来交换
  for (let even = 0; even < A.length; even += 2) {
    if (A[even] % 2 === 1) {
      // 偶数位出现不为偶数的值，说明奇数位肯定能找到偶数
      // 2.1 跳过奇数，找到一个奇数位为偶数值的下标
      while (A[odd] % 2 === 1) {
        odd += 2
      }
      // 2.2 奇数位找到偶数了，将偶数位的奇数和奇数位的偶数进行交换
      ;[A[even], A[odd]] = [A[odd], A[even]]
      odd += 2
    }
  }
  return A
}

var sortArrayByParityII4 = function (A) {
  let oddIndex = 1
  let evenIndex = 0
  let res = []

  for (let i = 0, len = A.length; i < len; i++) {
    if (A[i] % 2 === 0) {
      res[evenIndex] = A[i]
      evenIndex += 2
    } else {
      res[oddIndex] = A[i]
      oddIndex += 2
    }
  }

  return res
}

export {
  sortArrayByParityII,
  sortArrayByParityII2,
  sortArrayByParityII3,
  sortArrayByParityII4
}
