/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function (A) {
    if (A.length < 3)
        return 0
    A = A.sort((a, b) => b - a)
    for (let i = 0, len = A.length; i < len; i++) {
        if (A[i + 1] + A[i + 2] > A[i]) {
            return A[i] + A[i + 1] + A[i + 2]
        }
    }
    return 0
}

// 同样做法——执行用时: 196 ms
var largestPerimeter2 = function (A) {
    A = A.sort((a, b) => a - b)
    for (let i = A.length - 1; i >= 2; i--) {
        if (A[i - 1] + A[i - 2] > A[i])
            return A[i] + A[i - 1] + A[i - 2]
    }
    return 0
}

// 同样做法——执行用时: 180 ms
var largestPerimeter3 = function (A) {
    var a, b, c, len = A.length
    A = A.sort((a, b) => a - b)
    while (len >= 3) {
        c = A[len - 1]
        b = A[len - 2]
        a = A[len - 3]
        if (a + b > c)
            return a + b + c
        len--
    }
    return 0
}

console.log(largestPerimeter3([3, 2, 3, 4]))
console.log(largestPerimeter3([1, 2, 2, 4, 18, 8]))