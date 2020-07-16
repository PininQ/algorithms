/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) return 0

  nums.sort((a, b) => a - b)
  let maxGap = 0
  for (let i = 1, len = nums.length; i < len; i++) {
    var gap = nums[i] - nums[i - 1]
    if (gap > maxGap) {
      maxGap = gap
    }
  }
  return maxGap
}

var maximumGap2 = function (nums) {
  if (nums.length < 2) return 0
  let maxGap = 0
  let len = nums.length
  for (let i = len; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
    if (i < len) {
      let gap = nums[i + 1] - nums[i]
      if (gap > maxGap) {
        maxGap = gap
      }
    }
  }
  return Math.max(maxGap, nums[1] - nums[0])
}

export {
  maximumGap,
  maximumGap2
}
