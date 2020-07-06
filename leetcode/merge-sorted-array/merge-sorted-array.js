/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // let n1 = nums1.splice(0, m),
    //     n2 = nums2.splice(0, n)
    nums1.length = m
    nums2.length = n

    // Array.prototype.push.apply(nums1, nums2);
    // ES6
    nums1.push(...nums2)
    nums1.sort((a, b) => a - b);
};

var merge2 = function (nums1, m, nums2, n) {
    let index = m + n - 1,
        aindex = m - 1,
        bindex = n - 1
    while (aindex >= 0 && bindex >= 0) {
        if (nums1[aindex] >= nums2[bindex])
            nums1[index--] = nums1[aindex--]
        else
            nums1[index--] = nums2[bindex--]
    }
    while (bindex >= 0) {
        nums1[index--] = nums2[bindex--]
    }
};

// 测试
let nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3
merge2(nums1, m, nums2, n)
console.log(nums1) // [1,2,2,3,5,6]