/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === null || n.length === 0) return ""
    let cur = "1",
        num = 1
    while (n > 1) {
        let tmp = "",
            len = cur.length
        for (let i = 0; i < len; i++) {
            if (i < len - 1 && cur[i] === cur[i + 1]) {
                num++
            } else {
                tmp += (num + "" + cur[i])
                num = 1
            }
        }
        cur = tmp
        n--
    }
    return cur
};

console.log(countAndSay(1)) // "1"
console.log(countAndSay(4)) // "1211"