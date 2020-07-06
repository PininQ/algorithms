/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力法 O(N^2)
var maxSubArray = function (nums) {
    let max_sum = Number.MIN_SAFE_INTEGER
    let current,
        len = nums.length
    for (let i = 0; i < len; i++) {
        current = 0
        for (let j = i; j < len; j++) {
            current += nums[j]
            if (current > max_sum) max_sum = current
        }
    }
    return max_sum
};

// 扫描法 O(N)
var maxSubArray2 = function (nums) {
    let current = nums[0],
        max_sum = nums[0]
    for (let i = 1, len = nums.length; i < len; i++) {
        if (current < 0) current = nums[i]
        else current += nums[i]
        // 这里隐式的列举了所有可能，保留了所有可能的最大值
        if (current > max_sum) max_sum = current
    }
    return max_sum
};

// 动态规划 O(N)
var maxSubArray3 = function (nums) {
    let current = nums[0],
        max_sum = nums[0]
    for (let i = 1, len = nums.length; i < len; i++) {
        if (current > 0) current += nums[i]
        else current = nums[i]
        // 这里隐式的列举了所有可能，保留了所有可能的最大值
        if (current > max_sum) max_sum = current
    }
    return max_sum
};

var maxSubArray4 = function (nums) {
    let current = 0,
        max_sum = -Infinity;
    for (let i = 0, len = nums.length; i < len; i++) {
        current += nums[i]
        max_sum = Math.max(max_sum, current)
        if (current < 0) current = 0
    }
    return max_sum
};

// 测试
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let arr2 = [-1]
console.log(maxSubArray4(arr)) // 6