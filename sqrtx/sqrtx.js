/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x
    for (var i = 1, n = parseInt(x / 2) + 1; i <= n;) {
        if (i * i <= x) i++
        else return i - 1
    }
};

var mySqrt2 = function (x) {
    if (x <= 0) return 0
    var i = 1
    while (i++) {
        if (i * i > x)
            return i - 1
    }
};

var mySqrt3 = function (x) {
    var start = 1,
        end = x,
        mid
    if (x === 0) return x
    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2)
        if (mid * mid <= x) {
            start = mid
        } else {
            end = mid
        }
    }
    return start
};

var mySqrt4 = function (x) {
    return Math.floor(Math.sqrt(x))
    // 或者是
    // return parseInt(Math.pow(x, 1 / 2))
};

// 测试
console.log(mySqrt4(1)) // 1
console.log(mySqrt4(2)) // 1
console.log(mySqrt4(3)) // 1
console.log(mySqrt4(4)) // 2
console.log(mySqrt4(5)) // 2
console.log(mySqrt4(8)) // 2