/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.join('') === '0') return 1 >= n
  let count = 0
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    if (i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
      count++
      flowerbed[i] = 1
    } else if (i === len - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0) {
      count++
      flowerbed[i] = 1
    } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 && flowerbed[i] !== 1) {
      count++
      flowerbed[i] = 1
    }
  }
  return count >= n
};

var canPlaceFlowers2 = function (flowerbed, n) {
  let count = 0
  flowerbed.push(0)
  for (let i = 0, len = flowerbed.length; i < len - 1; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0 && flowerbed[1] === 0) {
        count++
        i++
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
        count++
        i++
      }
    }
  }
  return count >= n
};

// 进一步简化：假设 flowerbed = [0,0,1,0]，flowerbed[-1] != 1 得 true,flowerbed[4] != 1 得 true，
// 那就不用做边界识别。指针从下标 0 开始，该下标对应的值不为 1，左边不为 1，右边不为 1，种花 顺便 count++。
var canPlaceFlowers3 = function (flowerbed, n) {
  let count = 0
  for (let i = 0, len = flowerbed.length; i < len; i++) {
    if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      count++
      flowerbed[i] = 1
    }
  }
  return count >= n
};

export {
  canPlaceFlowers,
  canPlaceFlowers2,
  canPlaceFlowers3,
}