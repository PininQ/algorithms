/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
// 执行用时 :  80 ms
var wordPattern = function (pattern, str) {
  let arrStr = str.split(" ");
  if (pattern.length !== arrStr.length)
    return false;
  if (pattern.length === 1 && arrStr.length === 1)
    return true
  if (func(pattern) === func(arrStr))
    return true
  return false
};

function func(arr) {
  let a = 97,
    strArr = [],
    resStr = "",
    index = -1;
  for (let i = 0, len = arr.length; i < len; i++) {
    index = strArr.indexOf(arr[i])
    if (index === -1) {
      strArr.push(arr[i]);
      resStr += String.fromCharCode(a);
      a++;
    } else {
      resStr += resStr[index]
    }
  }
  return resStr;
}

// 执行用时 : 88 ms
var wordPattern2 = function (pattern, str) {
  let strArr = str.split(" ")
  if (strArr.length !== pattern.length)
    return false
  for (let i = 0, len = pattern.length; i < len; i++) {
    if (pattern.indexOf(pattern[i]) !== strArr.indexOf(strArr[i]))
      return false
  }
  return true
}

// 执行用时 : 92 ms
var wordPattern3 = function (pattern, str) {
  var arr = str.split(' ');

  if (pattern.length !== arr.length)
    return false;

  var a2b = {},
    b2a = {};

  for (var i = 0, len = pattern.length; i < len; i++) {
    var a = pattern[i],
      b = arr[i];

    if (!a2b[a]) {
      a2b[a] = b;
    } else {
      if (a2b[a] !== b)
        return false;
    }

    if (!b2a[b]) {
      b2a[b] = a;
    } else {
      if (b2a[b] !== a)
        return false;
    }
  }

  return true;
};

// 执行用时 : 84 ms
var wordPattern4 = function (pattern, str) {
  let sarr = str.split(' '),
    len = pattern.length
  if (sarr.length !== len) {
    return false
  }
  for (let i = 0; i < len; i++) {
    if (pattern.indexOf(pattern[i]) !== sarr.indexOf(sarr[i])) {
      return false
    }
  }
  return true
};

let pattern1 = "abba",
  str1 = "dog cat cat dog", // true
  pattern2 = "abba",
  str2 = "dog cat cat fish", // false
  pattern3 = "aaaa",
  str3 = "dog cat cat dog", // false
  pattern4 = "abba",
  str4 = "dog dog dog dog" // false

console.log('1 :', wordPattern4(pattern1, str1));
console.log('2 :', wordPattern4(pattern2, str2));
console.log('3 :', wordPattern4(pattern3, str3));
console.log('4 :', wordPattern4(pattern4, str4));