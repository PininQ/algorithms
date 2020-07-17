import { sortArrayByParityII, sortArrayByParityII2 } from '../../code/sort/922.按奇偶排序数组 II'

test('sortArrayByParityII', () => {
  expect(sortArrayByParityII([4, 2, 5, 7, 1, 6])).toEqual([4, 5, 2, 7, 6, 1])
})

test('sortArrayByParityII2', () => {
  expect(sortArrayByParityII2([4, 2, 5, 7, 1, 6])).toEqual([4, 5, 2, 7, 6, 1])
})
