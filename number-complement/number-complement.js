/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var num2 = num.toString(2);
  var newNum = "";
  for (var i = 0; i < num2.length; i++) {
    if (num2[i] == 0) {
      newNum += "1";
    } else {
      newNum += "0";
    }
  }
  return parseInt(newNum, 2);
};


var findComplement2 = function (num) {
  let ans = 0;
  let add = 1;

  while (num) {
    if (!(num & 1))
      ans += add;
    num >>= 1;
    add <<= 1;
  }

  return ans;
};