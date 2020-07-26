import { maximalRectangle } from '../../code/stack/85. 最大矩形'

const arr = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
]
test('maximalRectangle', () => {
  expect(maximalRectangle(arr)).toBe(6)
})
