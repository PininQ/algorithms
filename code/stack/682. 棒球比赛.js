/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = []
  for (let i of ops) {
    if ((/^-?[1-9]+[0-9]*$|^0$/g).test(i)) {
      stack.push(Number(i))
    }
    if (i === '+') {
      stack.push(stack.slice(-1)[0] + stack.slice(-2, -1)[0])
    }
    if (i === 'D') {
      stack.push(stack.slice(-1) * 2)
    }
    if (i === 'C') {
      stack.pop()
    }
  }
  return stack.reduce((acc, cur) => acc + Number(cur), 0)
}

var calPoints2 = function (ops) {
  const stack = []
  let pre1, pre2
  ops.forEach(ele => {
    switch (ele) {
      case '+':
        pre1 = stack.pop()
        pre2 = stack.pop()
        stack.push(pre2, pre1, pre1 + pre2)
        break
      case 'D':
        pre1 = stack.pop()
        stack.push(pre1, pre1 * 2)
        break
      case 'C':
        stack.length && stack.pop()
        break
      default:
        stack.push(ele * 1)
        break
    }
  })
  return stack.reduce((acc, cur) => acc + Number(cur), 0)
}

export {
  calPoints,
  calPoints2
}
