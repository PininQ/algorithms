/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var a = []
    for (var i = 0, len = nums.length; i < len; i++) {
        var tmp = target - nums[i]
        if (a[tmp] !== undefined) {
            return [a[tmp], i]
        }
        a[nums[i]] = i
    }
};

var nums = [2, 7, 11, 15],
    target = 9
console.log(twoSum(nums, target));