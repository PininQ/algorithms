/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const minn = -(1 << 30) * 2,
        maxn = (1 << 30) * 2 - 1,
        arr = x.toString().split('')
    let res = ""
    if (x < 0) {
        arr.shift()
    }
    res = Number(arr.reverse().join(''))
    if (x < 0) {
        res *= -1
    }
    if (res < minn || res > maxn) {
        return 0
    } else {
        return res
    }
};

var reverse2 = function (x) {
    const minn = Math.pow(-2, 31),
        maxn = Math.pow(2, 31) - 1,
        arr = Math.abs(x).toString().split("")
    let res = ""
    console.log(minn, maxn);
    for (let i = arr.length - 1; i >= 0; i--) {
        res += arr[i]
    }
    if (x > 0 && +res <= maxn) {
        return +res
    }
    if (x < 0 && -res >= minn) {
        return -res
    }
    return 0
};

// 测试
console.log(reverse2(-123)) // -321
console.log(reverse2(120)) // 21