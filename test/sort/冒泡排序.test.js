import { bubbleSort } from '../../code/sort/冒泡排序'

test('bubbleSort：1', () => {
  expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3])
})

test('bubbleSort：2', () => {
  expect(bubbleSort([2, 17, 9, 11])).toEqual([2, 9, 11, 17])
})
