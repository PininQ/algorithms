import { selectSort } from '../../code/sort/选择排序'

test('selectSort：1', () => {
  expect(selectSort([2, 3, 1])).toEqual([1, 2, 3])
})

test('selectSort：2', () => {
  expect(selectSort([2, 17, 9, 11])).toEqual([2, 9, 11, 17])
})
