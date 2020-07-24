import { calPoints, calPoints2 } from '../../code/stack/682. 棒球比赛'

test('calPoints', () => {
  expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30)
})
test('calPoints:2', () => {
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})

test('calPoints2', () => {
  expect(calPoints2(['5', '2', 'C', 'D', '+'])).toBe(30)
})
test('calPoints2:2', () => {
  expect(calPoints2(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})
