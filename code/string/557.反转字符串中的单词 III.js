/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const arr = s.split(' ')
  const res = []
  arr.map(i => res.push(i.split('').reverse().join('')))
  return res.join(' ')
};

// export default (s) => {
//   // 1. 字符串按空格进行分隔，保存数组，数组的元素的先后顺序就是单词的顺序
//   // 2. 对数组进行遍历，然后每个元素进行反转
//   return s.split(' ').map(i => i.split('').reverse().join('')).join(' ')
// }

export default (s) => {
  return s.split("").reverse().join("").split(' ').reverse().join(' ')
}