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

// 时间复杂度 O(3n) 空间复杂度 O(1)
var firstMissingPositive4 = function (nums) {
  const n = nums.length

  // 处理负数
  // 可以不处理超出 length + 1 的值，因为 js 数组没有越界问题
  // 由于 NaN 会影响判断并且结果最大为 length + 1，所以将边界增加大 length + 1
  // 可以不添加边界，在结果判断 NaN
  for (let i = 0; i <= n + 1; i++) {
    if (nums[i] <= 0 || !nums[i]) { nums[i] = n + 1 }
  }

  // 如果出现正整数 a，将第 a 项的值转为负数，标记 a 出现过
  for (let i = 0; i < n; i++) {
    let a = Math.abs(nums[i])
    nums[a] = -Math.abs(nums[a])
  }

  // 如果第 i 项为正整数，则说明 i 没有出现过（负数说明出现过），即为答案
  for (let i = 1; i <= n + 1; i++) {
    if (nums[i] > 0) { return i }
  }
}

export {
  firstMissingPositive,
  firstMissingPositive2,
  firstMissingPositive3,
  firstMissingPositive4
}
