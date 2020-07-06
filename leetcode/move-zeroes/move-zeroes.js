/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 执行用时: 80 ms
var moveZeroes = function (nums) {
  for (let i = nums.length; i--;) {
    if (!nums[i]) {
      // 移除 0 并在结尾添加 0
      nums.splice(i, 1)
      nums.push(0)
    }
  }
}

// 执行用时: 96 ms
var moveZeroes2 = function (nums) {
  let y = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let tmp = nums[i]
      nums[i] = nums[y]
      nums[y] = tmp
      y++
    }
  }

  return nums
}

// 测试
const nums = [0, 1, 0, 3, 12]
moveZeroes2(nums)
console.log(nums)