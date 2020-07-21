/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (str) {
  // 保存所有符合要求的 IP 地址
  let res = []
  // 分四步递归处理 IP 分段
  let search = (cur, sub) => {
    // 过滤非法输入
    if (str.length > 12) return

    // 边界条件
    if (cur.length === 4 && cur.join('') === str) {
      res.push(cur.join('.'))
    } else {
      // 正常的处理过程
      for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
        tmp = sub.substr(0, i + 1)
        if (tmp - 256 < 0) {
          // 转换下数据类型，如 01 为 1
          search(cur.concat([tmp * 1]), sub.substr(i + 1))
        }
      }
    }
  }
  search([], str)
  return res
}

var restoreIpAddresses2 = function (str) {
  let len = str.length
  let res = []
  if (len < 4 || len > 12) return res

  for (let i = 1; i < 4; i++) {
    for (let j = i + 1; j < i + 4; j++) {
      if (j >= len) break
      for (let k = j + 1; k < j + 4; k++) {
        if (k >= len) break
        let a = str.slice(0, i)
        let b = str.slice(i, j)
        let c = str.slice(j, k)
        let d = str.slice(k)
        if (d.length > 3) continue
        if (test(a, b, c, d)) res.push(`${a}.${b}.${c}.${d}`)
      }
    }
  }

  return res
}

var test = function (a, b, c, d) {
  let t = x => x === '0' || (x <= 255 && x.indexOf('0') !== 0)
  return t(a) && t(b) && t(c) && t(d)
}

export {
  restoreIpAddresses,
  restoreIpAddresses2
}
