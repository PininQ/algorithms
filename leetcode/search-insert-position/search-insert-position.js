/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let len = nums.length,
        index = nums.indexOf(target)
    if (index !== -1) return index
    for (let i = 0; i < len; i++) {
        if (target < nums[i]) {
            // nums.splice(i, 0, target)
            return i
        }
    }
    // nums.splice(len, 0, target)
    return len
};

var searchInsert2 = function (nums, target) {
    let left = 0,
        right = nums.length - 1
    while (left < right) {
        let mid = left + Math.ceil((right - left) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) right = mid - 1
        else left = mid + 1
    }
    if (nums[left] < target) return left + 1
    return left
};

console.log(searchInsert2([1, 3, 5, 6], 5));
console.log(searchInsert2([1, 3, 5, 6], 2));
console.log(searchInsert2([1, 3, 5, 6], 7));