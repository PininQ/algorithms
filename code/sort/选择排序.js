var selectSort = function (arr) {
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]]
    }
  }
  return arr
}

export {
  selectSort
}
