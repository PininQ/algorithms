import { findKthLargest, findKthLargest2, findKthLargest3, findKthLargest4 } from '../../code/sort/215.数组中的第K个最大元素'

test('findKthLargest:input 2', () => {
  expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})
test('findKthLargest:input 4', () => {
  expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})

test('findKthLargest2:input 2', () => {
  expect(findKthLargest2([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})
test('findKthLargest2:input 4', () => {
  expect(findKthLargest2([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})

test('findKthLargest3:input 2', () => {
  expect(findKthLargest3([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})
test('findKthLargest3:input 4', () => {
  expect(findKthLargest3([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})

test('findKthLargest4:input 2', () => {
  expect(findKthLargest4([3, 2, 1, 5, 6, 4], 2)).toBe(5)
})
test('findKthLargest4:input 4', () => {
  expect(findKthLargest4([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4)
})
