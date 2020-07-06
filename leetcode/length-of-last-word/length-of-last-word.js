/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim()
    var _str = s.replace(/s/g, '')
    if (!_str.length) return 0
    for (let i = s.length; i--;) {
        if (s[i] === ' ')
            return s.length - i - 1
        if (i === 0)
            return s.length
    }
};

var lengthOfLastWord2 = function (s) {
    if (s === null || s.length === 0)
        return 0
    var count = 0
    for (let i = s.length; i--;) {
        if (s[i] === ' ') {
            if (count === 0) continue
            else return count
        }
        count++
    }
    return count
}

// 测试
console.log(lengthOfLastWord2("Hello World")) // 5