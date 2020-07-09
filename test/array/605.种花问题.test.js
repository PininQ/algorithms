import { canPlaceFlowers, canPlaceFlowers2, canPlaceFlowers3 } from '../../code/array/605.种花问题'

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true)
})

test('canPlaceFlowers', () => {
  expect(canPlaceFlowers([0], 1)).toBe(true)
})

test('canPlaceFlowers2', () => {
  expect(canPlaceFlowers2([1,0,0,0,1], 1)).toBe(true)
})

test('canPlaceFlowers2', () => {
  expect(canPlaceFlowers2([1,0,0,0,1], 2)).toBe(false)
})

test('canPlaceFlowers2', () => {
  expect(canPlaceFlowers2([0], 1)).toBe(true)
})