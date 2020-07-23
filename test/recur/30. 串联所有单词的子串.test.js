import { findSubstring } from '../../code/recur/30. 串联所有单词的子串'

test('findSubstring', () => {
  expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
})
test('findSubstring:2', () => {
  expect(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])).toEqual([])
})
