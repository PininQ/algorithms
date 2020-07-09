/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
  if (deck.length < 2) return false
  const arr = deck.sort((a, b) => a - b)
  const res = {}
  for (let i = 0, iLen = arr.length; i < iLen; i++) {
    if (res[arr[i] + '']) {
      res[arr[i] + '']++
    } else {
      res[arr[i] + ''] = 1
    }
  }
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  return Object.values(res).reduce((a, b) => gcd(a, b)) >= 2
};

var hasGroupsSizeX2 = function (deck) {
  // 相同牌出现次数 Map
  let timeMap = new Map()

  // 统计每张牌出现次数
  deck.forEach(num => {
    timeMap.set(num, timeMap.has(num) ? timeMap.get(num) + 1 : 1)
  })

  let timeArr = [...timeMap.values()]

  let g = timeArr[0]

  let gcd = (a, b) => b === 0 ? a : gcd(b , a % b)

  timeArr.forEach(time => {
    g = gcd(g, time)
  })

  return g >= 2
};

var hasGroupsSizeX3 = function (deck) {
  // 将卡牌按值排序保证相同的卡牌是挨着的
  let str = deck.sort((a, b) => a - b).join('')
  // 分组（单张或者多张）
  let group = str.match(/(\d)\1+|\d/g)
  // 求两个数的最大公约数
  let gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
  // 思路：只要所有的分组具有最大公约数大于1 就满足条件
  while(group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v < 2)
      return false
    else
      // 将前两个分组的最大公约数推进数组与下一个分组再次验证是否有最大公约数
      group.unshift('0'.repeat(v))
  }
  // 边界 ['11'] 只有一个分组
  return group.length ? group[0].length > 1 : false
};

export {
  hasGroupsSizeX,
  hasGroupsSizeX2,
  hasGroupsSizeX3
}