/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = nums.filter(i => i > 0).sort((a, b) => a - b)

  if (nums[0] !== 1) return 1
  for (let i = 0, len = nums.length; i < len - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) { return nums[i] + 1 }
  }
  return nums.pop() + 1
}

var firstMissingPositive2 = function (nums) {
  nums = nums.filter(i => i > 0)

  for (let i = 0, len = nums.length, min; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < nums[min]) {
        [nums[j], nums[min]] = [nums[min], nums[j]]
      }
    }
    nums[i] = nums[min]
    if (i > 0) {
      if (nums[i] - nums[i - 1] > 1) return nums[i - 1] + 1
    } else {
      if (nums[min] > 1) return 1
    }
  }
  return nums.length ? nums.pop() + 1 : 1
}

// 时间复杂度 O(2n) 空间复杂度 O(1)
var firstMissingPositive3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] >= 1 &&
      nums[i] <= nums.length && // 对1~nums.length范围内的元素进行安排
      nums[nums[i] - 1] !== nums[i] // 已经出现在理想位置的，不用交换
    ) {
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }

  // 期待结果 [1,2,3,...]，如果遍历到不是放着该放的元素
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  // 发现 1~nums.length 占满了数组，一个没缺
  return nums.length + 1
}

export {
  firstMissingPositive,
  firstMissingPositive2,
  firstMissingPositive3
}
