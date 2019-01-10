/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
// 执行用时: 100 ms
var findTheDifference = function (s, t) {
    s = Array.from(s).sort()
    t = Array.from(t).sort()
    slen = s.length
    tlen = t.length
    for (let i = 0, len = slen > tlen ? slen : tlen; i < len; i++) {
        if (s[i] === t[i])
            continue
        return slen > tlen ? s[i] : t[i]
    }
};

// 执行用时: 100 ms
var findTheDifference2 = function (s, t) {
    s = s.split('').sort()
    t = t.split('').sort()
    for (let i = 0, len = t.length; i < len; i++) {
        if (s[i] !== t[i])
            return t[i]
    }
};


// 测试
var s = "abcd",
    t = "abcde"
console.log(findTheDifference2(s, t));