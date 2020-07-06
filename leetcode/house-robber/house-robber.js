/**
 * @param {number[]} nums
 * @return {number}
 */
// 执行用时: 94 ms
var rob = function (nums) {
  var len = nums.length;
  if (!len) return 0;

  var dp = [];
  dp[0] = [];
  dp[0][0] = 0 // not steal 1st room
  dp[0][1] = nums[0]; // steal 1st room

  for (var i = 1; i < len; i++) {
    dp[i] = [];
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};

// 执行用时: 100 ms
var rob2 = function (nums) {
  if (nums === null)
    return nums;

  var even = 0;
  var odd = 0;

  for (var i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      even = Math.max(even + nums[i], odd);
    } else {
      odd = Math.max(odd + nums[i], even);
    }
  }

  return Math.max(even, odd);
};

console.log(rob2([1, 2, 3, 1])); // 4
console.log(rob2([2, 7, 9, 3, 1])); // 12