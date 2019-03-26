/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let p = new Map()

  for (let item of candies) {
    p.set(item, ~~p.get(item) + 1)
  }

  let res = [...p.values()].sort((a, b) => a - b)

  return Math.min(res.length, candies.length >> 1)
};

var distributeCandies2 = function(candies) {
  return Math.min(candies.length / 2, [...new Set(candies)].length)
};