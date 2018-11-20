/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0) {
      res[i] = [1]
      continue
    }
    res[i] = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) res[i][j] = 1
      else res[i][j] = res[i - 1][j] + res[i - 1][j - 1]
    }
  }
  return res[rowIndex]
};

var getRow2 = function (rowIndex) {
  const res = new Array(rowIndex + 1).fill(1)

  for (let i = 1; i < rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      res[j] = res[j] + res[j - 1]
    }
  }
  return res
};

var getRow3 = function (rowIndex) {
  if (rowIndex === null || rowIndex < 0)
    return []

  let res = [1]
  for (let i = 1; i <= rowIndex; i++) {
    let cur = []
    for (let j = 0; j <= i; j++) {
      cur[j] = (res[j - 1] || 0) + (res[j] || 0)
    }
    res = cur
  }
  return res
};

console.log(getRow3(3)) // [ 1, 3, 3, 1 ]
console.log(getRow3(5)) // [ 1, 5, 10, 10, 5, 1 ]