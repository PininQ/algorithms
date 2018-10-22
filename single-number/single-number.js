/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {},
        len = nums.length

    for (let i = 0; i < len; i++) {
        let num = nums[i]
        if (map[num]) {
            map[num] = map[num] + 1
        } else {
            map[num] = 1
        }
    }

    for (let i = 0; i < len; i++) {
        let num = nums[i]
        if (map[num] === 1) {
            return num
        }
    }

    return null
};

var singleNumber2 = function (nums) {
    let res = 0
    for (let i of nums) {
        res ^= nums[i]
    }
    return res
};

var singleNumber3 = function (nums) {
    return nums.reduce((a, b) => a ^ b)
};

console.log(singleNumber2([4, 1, 2, 1, 2]));