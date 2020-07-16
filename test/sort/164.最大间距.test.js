import { maximumGap, maximumGap2 } from '../../code/sort/164.最大间距'

test('maximumGap:input2', () => {
  expect(maximumGap([3, 6, 9, 1])).toBe(3)
})
test('maximumGap:input3', () => {
  expect(maximumGap([10])).toBe(0)
})
test('maximumGap:input4', () => {
  expect(maximumGap([13, 16, 19, 1])).toBe(12)
})

test('maximumGap2:input2', () => {
  expect(maximumGap2([3, 6, 9, 1])).toBe(3)
})
test('maximumGap2:input3', () => {
  expect(maximumGap2([10])).toBe(0)
})
test('maximumGap2:input4', () => {
  expect(maximumGap2([13, 16, 19, 1])).toBe(12)
})
