import { firstMissingPositive, firstMissingPositive2, firstMissingPositive3, firstMissingPositive4 } from '../../code/sort/41.缺失的第一个正数'

test('firstMissingPositive:input1', () => {
  expect(firstMissingPositive([1, 2, 3, 4, 5, 6])).toBe(7)
})
test('firstMissingPositive:input2', () => {
  expect(firstMissingPositive([1, 2, 0])).toBe(3)
})
test('firstMissingPositive:input3', () => {
  expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
})
test('firstMissingPositive:input4', () => {
  expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1)
})

test('firstMissingPositive2:input1', () => {
  expect(firstMissingPositive2([1, 2, 3, 4, 5, 6])).toBe(7)
})
test('firstMissingPositive2:input2', () => {
  expect(firstMissingPositive2([1, 2, 0])).toBe(3)
})
test('firstMissingPositive2:input3', () => {
  expect(firstMissingPositive2([3, 4, -1, 1])).toBe(2)
})
test('firstMissingPositive2:input4', () => {
  expect(firstMissingPositive2([7, 8, 9, 11, 12])).toBe(1)
})

test('firstMissingPositive3:input1', () => {
  expect(firstMissingPositive3([1, 2, 3, 4, 5, 6])).toBe(7)
})
test('firstMissingPositive3:input2', () => {
  expect(firstMissingPositive3([1, 2, 0])).toBe(3)
})
test('firstMissingPositive3:input3', () => {
  expect(firstMissingPositive3([3, 4, -1, 1])).toBe(2)
})
test('firstMissingPositive3:input4', () => {
  expect(firstMissingPositive3([7, 8, 9, 11, 12])).toBe(1)
})

test('firstMissingPositive4:input1', () => {
  expect(firstMissingPositive4([1, 2, 3, 4, 5, 6])).toBe(7)
})
test('firstMissingPositive4:input2', () => {
  expect(firstMissingPositive4([1, 2, 0])).toBe(3)
})
test('firstMissingPositive4:input3', () => {
  expect(firstMissingPositive4([3, 4, -1, 1])).toBe(2)
})
test('firstMissingPositive4:input4', () => {
  expect(firstMissingPositive4([7, 8, 9, 11, 12])).toBe(1)
})
