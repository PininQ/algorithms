/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.search(needle);
};

var haystack = "hello"
var needle = "ll"
console.log(strStr(haystack, needle));