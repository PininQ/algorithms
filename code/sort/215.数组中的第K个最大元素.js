/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1]
}

var findKthLargest2 = function (nums, k) {
  let len = nums.length - 1
  for (let i = len; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }

  return nums[len - (k - 1)]
}

/* 归并排序实现 */
var findKthLargest3 = function (nums, k) {
  return mSplit(nums)[nums.length - k]
}

function mSplit (arr) {
  let len = arr.length
  if (len === 1) return arr

  let mid = len >> 1
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return mMerge(mSplit(left), mSplit(right))
}

function mMerge (left, right) {
  let lLen = left.length
  let rLen = right.length
  let i = 0
  let j = 0
  let res = []

  while (i < lLen && j < rLen) {
    if (left[i] < right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  while (i < lLen) {
    res.push(left[i++])
  }
  while (j < rLen) {
    res.push(right[j++])
  }

  return res
}

/* 快速排序实现 */
// 每执行一次的时候，比较基准值位置是否在 n-k 位置上。
// 如果小于 n-k，则第 k 个最大值在基准值的右边，所以只需要递归基准值右边的子序列即可；
// 如果大于 n-k，则第 k 个最大值在基准值的左边，所以只需要递归基准值左边的子序列即可；
// 如果等于 n-k，则第 k 个最大值就是基准值。
var findKthLargest4 = function (nums, k) {
  return quickSort(nums, nums.length - k)
}

let quickSort = (arr, k) => {
  return quick(arr, 0, arr.length - 1, k)
}

let quick = (arr, left, right, k) => {
  let index
  if (left < right) {
    // 划分数组
    index = partition(arr, left, right)
    // Top k
    if (k === index) {
      return arr[index]
    } else if (k < index) {
      // Top k 在左边
      return quick(arr, left, index - 1, k)
    } else {
      // Top k 在右边
      return quick(arr, index + 1, right, k)
    }
  }
  return arr[left]
}

let partition = (arr, left, right) => {
  // 取中间项为基准
  var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left]
  var i = left
  var j = right
  // 开始调整
  while (i < j) {
    // 左指针右移
    while (arr[i] < datum) i++
    // 右指针左移
    while (arr[j] > datum) j--
    // 交换值
    if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    // 当数组中存在重复数据时，即都为 datum，但是位置不同
    // 继续递增 i，防止死循环
    if (arr[i] === arr[j] && i !== j) i++
  }
  return i
}

export {
  findKthLargest,
  findKthLargest2,
  findKthLargest3,
  findKthLargest4
}
