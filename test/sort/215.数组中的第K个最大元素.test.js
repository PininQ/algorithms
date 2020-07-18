import { findKthLargest, findKthLargest2 } from '../../code/sort/215.数组中的第K个最大元素'

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
