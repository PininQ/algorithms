/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    for (let i = parseInt(Math.sqrt(c)); i > -1; i--) {
        if (Math.sqrt(c - (i * i)) % 1 == 0) {
            return true;
        }
    }
    return false;
};

var judgeSquareSum2 = function (c) {
    var low = 0,
        sum, heig = Math.ceil(Math.sqrt(c));

    while (low <= heig) {
        sum = low * low + heig * heig
        if (sum == c) {
            return true;
        } else if (sum < c) {
            low++
        } else {
            heig--
        }
    }

    return false;
};