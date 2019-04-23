/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    return nums.sort((a, b) => a - b)
        .filter((_, index) => index % 2 === 0)
        .reduce((prev, current) => prev + current)
};

var arrayPairSum2 = function (nums) {
    let n = 0;
    nums.sort((a, b) => a - b)
    let res = 0;
    while (n < nums.length - 1) {
        res += nums[n];
        n += 2;
    }
    return res;
};

var arrayPairSum3 = function (nums) {
    let newArr = nums.slice(0);
    let i = 0,
        j = 0,
        res = 0;
    newArr.sort(function (a, b) {
        return a - b;
    })
    for (i = 0; i < newArr.length - 1; i = i + 2) {
        j = i + 1;
        res += newArr[i];
    }
    return res;
};

console.log(arrayPairSum([1, 4, 3, 2]));