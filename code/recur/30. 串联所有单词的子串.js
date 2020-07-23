/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (str, words) {
  if (!words || !words.length) return []
  let wordLen = words[0].length
  let allWordsLen = wordLen * words.length
  let ans = []
  let wordMap = {}

  for (let w of words) {
    wordMap[w] ? wordMap[w]++ : (wordMap[w] = 1)
  }
  for (let i = 0; i < str.length - allWordsLen + 1; i++) {
    let wm = Object.assign({}, wordMap)
    for (let j = i; j < i + allWordsLen - wordLen + 1; j += wordLen) {
      let w = str.slice(j, j + wordLen)
      if (wm[w]) {
        wm[w]--
      } else {
        break
      }
    }
    if (Object.values(wm).every((n) => n === 0)) {
      ans.push(i)
    }
  }
  return ans
}

export {
  findSubstring
}
