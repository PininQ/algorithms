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

export {
  canPlaceFlowers,
  canPlaceFlowers2,
}