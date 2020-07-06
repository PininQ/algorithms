/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {}
    nums.forEach(element => {
        if (map[element] === undefined) {
            map[element] = 1
        } else {
            map[element]++
        }
    })
    let maxCount = Number.MIN_VALUE,
        index
    for (let i in map) {
        if (map[i] > maxCount) {
            maxCount = map[i]
            index = i
        }
    }
    return maxCount > nums.length / 2 ? Number(index) : null
};

var majorityElement2 = function (nums) {
    let cout = [],
        len = nums.length
    for (let i = 0; i < len; i++) {
        if (!cout[nums[i]]) cout[nums[i]] = 1
        else cout[nums[i]]++
        if (cout[nums[i]] > len / 2) {
            return nums[i]
        }
    }
};

var majorityElement3 = function (nums) {
    let map = {},
        len = nums.length
    for (let i of nums) {
        if (!map[i])
            map[i] = 0
        map[i]++
        if (map[i] > len / 2)
            return i
    }
};

// 测试
// let nums = [2, 2, 1, 1, 1, 2, 2]
let nums = [3, 2, 3]
console.log(majorityElement2(nums)) // 2