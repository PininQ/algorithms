import { hasGroupsSizeX, hasGroupsSizeX2 } from '../../code/array/914.卡牌分组'

test('hasGroupsSizeX2', () => {
  expect(hasGroupsSizeX2([1,2,3,4,4,3,2,1])).toBe(true)
})

test('hasGroupsSizeX2', () => {
  expect(hasGroupsSizeX2([1,1,1,2,2,2,3,3])).toBe(false)
})

test('hasGroupsSizeX2', () => {
  expect(hasGroupsSizeX2([1])).toBe(false)
})

test('hasGroupsSizeX2', () => {
  expect(hasGroupsSizeX2([1,1])).toBe(true)
})

test('hasGroupsSizeX2', () => {
  expect(hasGroupsSizeX2([1,2,3,4,4,3,2,1])).toBe(true)
})