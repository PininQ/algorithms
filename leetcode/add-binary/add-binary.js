/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a === "" || b === "")
        return a !== "" ? a : b
    let aLen = a.length - 1,
        bLen = b.length - 1,
        carry = 0,
        res = ""
    while (aLen >= 0 || bLen >= 0 || carry > 0) {
        let sum = (Number(a[aLen]) | 0) + (Number(b[bLen]) | 0) + carry
        carry = sum >= 2 ? 1 : 0
        sum = sum % 2
        res = sum + res
        aLen--
        bLen--
    }
    return res
};

var addBinary2 = function (a, b) {
    if (a === "" || b === "")
        return a !== "" ? a : b
    a = a.split("").reverse()
    b = b.split("").reverse()
    let res = [],
        carry = 0,
        len = Math.max(a.length, b.length)
    for (let i = 0; i < len; i++) {
        let sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + carry
        res[i] = sum & 1
        carry = sum >= 2 ? 1 : 0
    }
    if (carry) res[len] = 1
    return res.reverse().join("").toString()
};

console.log(addBinary2("11", "1")) // "100"
console.log(addBinary2("1010", "1011")) // "10101"
console.log(addBinary2("1", "111")) // "1000"