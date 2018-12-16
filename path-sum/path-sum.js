// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 从头结点开始，向它的左右孩子节点寻找 sum - 根节点的值，不断向下寻找
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// 执行用时: 96 ms
var hasPathSum = function (root, sum) {
  if (root == null)
    return false
  // 叶子节点
  if (root.left == null && root.right == null)
    return sum - root.val == 0
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}

// 执行用时: 108 ms
var hasPathSum2 = function (root, sum) {
  const queue = [
    [root, 0]
  ]

  while (queue.length) {
    const [node, s] = queue.shift()

    if (!node) continue
    const current = s + +node.val
    queue.push([node.left, current], [node.right, current])

    if (current === sum && !node.left && !node.right)
      return true
  }
  return false
}

// 执行用时: 124 ms
var hasPathSum3 = function (root, sum) {
  if (!root) return false
  else {
    let res = {
      isOK: false
    }
    traversal(root, sum, res, 0)
    return res.isOK
  }
}

// 递归遍历各个子节点
function traversal(tree, sum, res, value) {
  if (tree.left === null && tree.right === null) {
    value = value + tree.val
    if (value === sum)
      res.isOK = true
  } else {
    value = value + tree.val
    if (tree.left)
      traversal(tree.left, sum, res, value)
    if (tree.right)
      traversal(tree.right, sum, res, value)
  }
}