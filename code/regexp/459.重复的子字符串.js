/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  return /^([a-z]+)\1+$/.test(s)
};

var repeatedSubstringPattern2 = function (s) {
  return (s + s).slice(1, -1).indexOf(s) !== -1
};

// 周期串
var repeatedSubstringPattern3_1 = function (s) {
  let len = s.length
  let i = 1
  while (i <= len / 2) {
    if (len % i === 0 && s.slice(0, i).repeat(len / i) === s) {
      return true
    }
    i++
  }
  return false
};

var repeatedSubstringPattern3_2 = function (s) {
  let len = s.length;
  for (let t = 1; t <= len / 2; t++) {
    const item = s.slice(0, t);
    const count = len / item.length;
    if (Number.isInteger(count) && item.repeat(count) === s) {
      return true
    }
  }
  return false
};

export {
  repeatedSubstringPattern,
  repeatedSubstringPattern2,
  repeatedSubstringPattern3_1,
  repeatedSubstringPattern3_2,
}