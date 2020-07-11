import { grayCode, grayCode2 } from '../../code/array/89.格雷编码'

test('grayCode', () => {
  expect(grayCode(2)).toEqual([0, 1, 3, 2])
})

test('grayCode', () => {
  expect(grayCode(0)).toEqual([0])
})

test('grayCode2', () => {
  expect(grayCode2(2)).toEqual([0, 1, 3, 2])
})

test('grayCode2', () => {
  expect(grayCode2(0)).toEqual([0])
})
