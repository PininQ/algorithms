/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    const dict = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15,
        P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    }
    let len = s.length,
        sum = 0
    if (len <= 1) {
        return dict[s]
    }
    for (let i = 0; i < len - 1; i++) {
        sum = (sum + dict[s[i]]) * 26
    }
    return sum + dict[s[s.length - 1]]
};

// 执行用时：100 ms
var titleToNumber = function (s) {
    let a = s.split('').reverse()
    s = a.join('')
    // 累加每个字母
    let ans = a.reduce(function (pre, item, index) {
        // ES5 charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
        // return pre + Math.pow(26, index) * (s.charCodeAt(index) - 64);
        // ES7
        return pre + (26 ** index) * (s.charCodeAt(index) - 64)
    }, 0)
    return ans
};

// 测试
console.log(titleToNumber("A")) // 1
console.log(titleToNumber("AB")) // 28
console.log(titleToNumber("ZY")) // 701