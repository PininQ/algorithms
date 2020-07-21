import { restoreIpAddresses, restoreIpAddresses2, restoreIpAddresses3 } from '../../code/recur/93. 复原IP地址'

test('restoreIpAddresses', () => {
  expect(restoreIpAddresses('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(restoreIpAddresses('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
  expect(restoreIpAddresses('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')).toEqual([])
})

test('restoreIpAddresses2', () => {
  expect(restoreIpAddresses2('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(restoreIpAddresses2('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
  expect(restoreIpAddresses2('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')).toEqual([])
})

test('restoreIpAddresses3', () => {
  expect(restoreIpAddresses3('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
  expect(restoreIpAddresses3('010010')).toEqual(['0.10.0.10', '0.100.1.0'])
  expect(restoreIpAddresses3('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111')).toEqual([])
})
