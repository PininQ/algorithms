/**
 * @param {number} n
 * @return {number}
 */
// 递归超时
var climbStairs = function (n) {
    if (n === 1) return 1
    if (n === 2) return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
};

// 动态规划
var climbStairs2 = function (n) {
    let a1 = 1,
        a2 = 1
    for (let i = 2; i <= n; i++) {
        let temp = a1 + a2
        a1 = a2
        a2 = temp
    }
    return a2
};

// 动态规划 ES6
var climbStairs3 = function (n) {
    let a1 = 1,
        a2 = 1
    for (let i = 2; i <= n; i++) {
        [a1, a2] = [a2, a1 + a2]
    }
    return a2
};

console.log(climbStairs(2));
console.log(climbStairs(3));