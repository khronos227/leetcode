/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  const searchDepth = function (node) {
    if (node === null) return 0
    if (node.left === null && node.right === null) return 1
    return Math.max(searchDepth(node.left), searchDepth(node.right)) + 1
  }
  return searchDepth(root)
}

//=======================
function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

const {assertEqual} = require('./lib/Assertion')

const root = new TreeNode(3, new TreeNode(9, null, null), new TreeNode(20, new TreeNode(15, null, null), new TreeNode(7, null, null)))
assertEqual(maxDepth(root), 3)
