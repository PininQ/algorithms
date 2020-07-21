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

export {
  restoreIpAddresses
}
