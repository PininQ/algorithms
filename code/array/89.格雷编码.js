/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  // 递归函数，用来算输入为n的格雷编码序列
  let res = [0];
  let right;
  for (let i = 1; i <= n; i++) {
    right = [...res].reverse().map((item) => item + Math.pow(2, i - 1));
    res = res.concat(right);
  }
  return res;
};

var grayCode2 = function (n) {
  if (n === 0) return [0]
  // 递归函数，用来算输入为n的格雷编码序列
  let make = (n) => {
    if (n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      let result = []
      let max = Math.pow(2, n) - 1
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  return make(n).map(i => parseInt(i, 2))
};

export {
  grayCode,
  grayCode2
}
