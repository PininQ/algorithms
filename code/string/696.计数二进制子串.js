/**
 * @param {string} s
 * @return {number}
 */
export default (s) => {
  let res = 0
  // 将连续的 0 或 1 拆分，返回数组
  let arr = s.match(/(0+)|(1+)/g)
  // 循环比较相加减
  for (let i = 1; i < arr.length; i++) {
    res += Math.min(arr[i].length, arr[i - 1].length)
  }
  return res
};

