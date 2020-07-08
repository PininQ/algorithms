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

export {
  hasGroupsSizeX,
  hasGroupsSizeX2,
}