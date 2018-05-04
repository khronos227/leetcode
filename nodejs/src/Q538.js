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
const convertBST = function (root) {
  if (!root) return root

  const convert = (tree, parent) => {
    const right = tree.right ? convert(tree.right, parent) : 0
    const left = tree.left ? convert(tree.left, tree.val + right + parent) : 0
    const res = tree.val + right + left
    tree.val += right + parent
    return res
  }
  convert(root, 0)
  return root
}

//=======================
const {assertEqual} = require('./lib/Assertion')

function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right

  this.toString = () => {
    return `${this.val}(${this.left || ''}, ${this.right || ''})`
  }
}

assertEqual(
  convertBST(new TreeNode(5, new TreeNode(2), new TreeNode(13))).toString(),
  new TreeNode(18, new TreeNode(20), new TreeNode(13)).toString()
)

assertEqual(
  convertBST(new TreeNode(2, new TreeNode(0, new TreeNode(-4), new TreeNode(1)), new TreeNode(3))).toString(),
  new TreeNode(5, new TreeNode(6, new TreeNode(2), new TreeNode(6)), new TreeNode(3)).toString()
)
