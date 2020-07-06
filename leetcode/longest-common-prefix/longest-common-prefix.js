/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return ""
    let str_len = strs.length,
        min_len = Infinity,
        res = ""
    if (str_len === 1) return strs[0]
    for (let i = 0; i < str_len; i++) {
        if (min_len > strs[i].length) min_len = strs[i].length
    }
    let flag = false
    for (let i = 0; i < min_len; i++) {
        for (let j = 1; j < str_len; j++) {
            if (strs[0][i] !== strs[j][i] && !flag) {
                flag = true
                break
            } else if (j === str_len - 1 && !flag) {
                res += strs[0][i]
            }
        }
        if (flag) break
    }
    return res
};

var longestCommonPrefix2 = function (strs) {
    if (!strs.length) return ''
    const str = strs[0]
    const arr = str.split('')
    let temp = ''
    let result = ''
    for (let i = 0; i < arr.length; i++) {
        temp += arr[i]
        if (!strs.every(item => item.startsWith(temp))) return result
        else result = temp
    }
    return result
}

console.log(longestCommonPrefix2(["flower", "flow", "flight"])) // fl
console.log(longestCommonPrefix2(["dog", "racecar", "car"])) // ""
console.log(longestCommonPrefix2([])) // ""
console.log('end')