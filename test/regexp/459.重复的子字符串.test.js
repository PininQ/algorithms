import { repeatedSubstringPattern, repeatedSubstringPattern2, repeatedSubstringPattern3_2 as repeatedSubstringPattern3 } from '../../code/regexp/459.重复的子字符串'

test('repeatedSubstringPattern', () => {
  expect(repeatedSubstringPattern('abab')).toBe(true)
})

test('repeatedSubstringPattern:2', () => {
  expect(repeatedSubstringPattern('abababc')).toBe(false)
})

test('repeatedSubstringPattern2', () => {
  expect(repeatedSubstringPattern2('abab')).toBe(true)
})

test('repeatedSubstringPattern2:2', () => {
  expect(repeatedSubstringPattern2('abababc')).toBe(false)
})

test('repeatedSubstringPattern3', () => {
  expect(repeatedSubstringPattern3('abab')).toBe(true)
})

test('repeatedSubstringPattern3:2', () => {
  expect(repeatedSubstringPattern3('abababc')).toBe(false)
})
