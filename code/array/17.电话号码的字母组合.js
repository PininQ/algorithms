/**
 * @param {string} digits
 * @return {string[]}
 */
export default (str) => {
  // 对输入做处理，如果小于 1 返回空数组
  if (str.length < 1) return []
  // 电话号码键盘映射
  const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 只给了一个按键，直接把案件内容取出来按照单个字符分组返回
  if (str.length < 2) return map[str].split('')
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  const code = str.split('').map(i => map[i])
  const comb = function (arr) {
    const tmp = []
    for (let i = 0, iLen = arr[0].length; i < iLen; i ++) {
      for (let j= 0, jLen = arr[1].length; j< jLen; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }

    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }

  return comb(code)
}