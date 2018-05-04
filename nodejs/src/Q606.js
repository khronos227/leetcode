/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function (t) {
  if (!t || t.val == null) return ''

  let left = tree2str(t.left)
  let right = tree2str(t.right)

  left = left.length === 0 && right.length > 0 ? '()' : left.length > 0 ? `(${left})` : left
  right = right.length > 0 ? `(${right})` : right

  return `${t.val}${left}${right}`
}

//=======================
const {assertEqual} = require('./lib/Assertion')

function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

assertEqual(tree2str(new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))), '1(2(4))(3)')
assertEqual(tree2str(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3))), '1(2()(4))(3)')
assertEqual(tree2str(new TreeNode(0)), '0')