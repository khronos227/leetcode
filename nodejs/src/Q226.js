/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (!root) return root
  function invertNestedTree(node) {
    const tmp = node.left
    node.left = node.right
    node.right = tmp
    if (node.left) {
      invertNestedTree(node.left)
    }
    if (node.right) {
      invertNestedTree(node.right)
    }
  }

  invertNestedTree(root)
  return root
}


//=======================
class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left
    this.right = right
  }

  toString() {
    return `${this.val | 0}:[${this.left | ''},${this.right | ''}]`
  }
}

const {assertEqual} = require('./lib/Assertion')

assertEqual(
  invertTree(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))).toString(),
  new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1))).toString()
)
assertEqual(invertTree(new TreeNode()).toString(), new TreeNode().toString())
assertEqual(invertTree(null), null)

