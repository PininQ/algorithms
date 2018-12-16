/* Node 类 */
function Node() {
  this.data = null // 当前节点数据
  this.leftChild = null // 左指针
  this.rightChild = null // 右指针
}

/* BinaryTree 类，包含节点的所有属性，以及一个根节点 */
function BinaryTree() {
  this.root = null // 根节点
}

/* 通过原型 (prototype) 定义树和节点之间的继承关系 */
BinaryTree.prototype = {
  constructor: Node,
  insertNode: function (data) {
    if (this.root === null) {
      this.root = {}
      this.root.data = data
    } else {
      insertData(this.root, data)
    }
  },
  travelTree: function (root) {
    if (root != null) {
      console.log(root.data)
      this.travelTree(root.leftChild)
      this.travelTree(root.rightChild)
    }
  }
}

/* 插入节点，构造一颗二叉搜索树 */
function insertData(node, data) {
  if (data < node.data) {
    if (node.leftChild == null) {
      node.leftChild = {
        data
      }
    } else {
      insertData(node.leftChild, data)
    }
  } else {
    if (node.rightChild == null) {
      node.rightChild = {
        data
      }
    } else {
      insertData(node.rightChild, data)
    }
  }
}

var tree = new BinaryTree()

tree.insertNode(4)
tree.insertNode(13)
tree.insertNode(7)
tree.insertNode(3)
tree.insertNode(20)
tree.insertNode(11)
tree.travelTree(tree.root)