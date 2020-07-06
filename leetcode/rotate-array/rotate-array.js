/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
Array.prototype.reverseFromLToR = function (left, right) {
  if (right >= this.length)
    return

  while (left < right) {
    [this[left], this[right]] = [this[right], this[left]]
    left++
    right--
  }
}

var rotate = function (nums, k) {
  k = k % nums.length

  nums.reverse()
  nums.reverseFromLToR(0, k - 1)
  nums.reverseFromLToR(k, nums.length - 1)
}

var rotate2 = function (nums, k) {
  let newnums = nums.splice(nums.length - k, k)
  nums.unshift(...newnums)
}

var rotate3 = function (nums, k) {
  k %= nums.length
  let tmp = []
  if (k) tmp = nums.slice(-k)
  nums.splice(-k, k)
  Array.prototype.unshift.apply(nums, tmp)
}

let nums = [1, 2, 3, 4, 5, 6, 7]
rotate3(nums, 3)
// [ 5, 6, 7, 1, 2, 3, 4 ]
console.log(nums)

nums = [-1, -100, 3, 99]
rotate3(nums, 2)
// [ 3, 99, -1, -100 ]
console.log(nums)