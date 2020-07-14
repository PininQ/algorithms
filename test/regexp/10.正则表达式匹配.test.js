import { isMatch } from '../../code/regexp/10.正则表达式匹配'

test('isMatch：1', () => {
  expect(isMatch(`mississippi`, 'mis*is*p*.')).toBe(false)
})

test('isMatch：2', () => {
  expect(isMatch(`aab`, 'c*a*b')).toBe(true)
})
