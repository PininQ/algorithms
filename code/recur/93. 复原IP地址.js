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

// ip 为 0~255 之间
var test = function (a, b, c, d) {
  let t = x => x === '0' || (x <= 255 && x.indexOf('0') !== 0)
  return t(a) && t(b) && t(c) && t(d)
}

var restoreIpAddresses3 = function (str) {
  let len = str.length
  let res = []
  if (len < 4 || len > 12) return []
  fn(str, [], res)
  return res
}

var fn = function (remain, temp, result) {
  // 递归结束条件：当判断到最后一段时，如果合法直接加入到结果集
  if (temp.length === 3) {
    regular(remain) && result.push([...temp, remain].join('.'))
    return
  }
  // 递归体：每一段长度可以为1、2、3，所以每次都有三种可能
  for (let i = 1; i < 4; i++) {
    regular(remain.substr(0, i)) && fn(remain.substr(i), [...temp, remain.substr(0, i)], result)
  }
}

/**
 * 判断每一段是否合法，是否合法需要满足以下条件：
 * 大于等于0；
 * 小于等于255
 * 如果是一位可以为0，如果超过一位，不能以0开头
 * @param {string} s
 * @returns {boolean}
 */
var regular = function (s) {
  if (!s.length) return false
  return +s >= 0 && +s <= 255 && (s.length > 1 ? !!+s[0] : true)
}

export {
  restoreIpAddresses,
  restoreIpAddresses2,
  restoreIpAddresses3
}
