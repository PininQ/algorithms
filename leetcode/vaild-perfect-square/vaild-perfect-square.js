/**
 * @param {number} num
 * @return {boolean}
 */
// 执行用时 : 140 ms
var isPerfectSquare = function (num) {
  var left = 0,
    right = num

  while (left <= right) {
    var mid = left + parseInt((right - left) / 2)
    var pow = mid * mid
    if (pow === num)
      return true
    else if (pow < num)
      left = mid + 1
    else
      right = mid - 1
  }
  return false
};

// 执行用时 : 140 ms
var isPerfectSquare2 = function (num) {
  var a = 0,
    b = num

  while (a <= b) {
    var mid = (a + b) >> 1,
      ans = mid * mid

    if (ans > num)
      b = mid - 1
    else if (ans < num)
      a = mid + 1
    else
      return true
  }
  return false
};