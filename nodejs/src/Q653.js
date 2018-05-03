/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
  const search = (tree, n) => {
    if (tree.val === n) return true
    if (tree.val > n && tree.left != null && search(tree.left, n)) {
      return true
    } else if (tree.val < n && tree.right != null && search(tree.right, n)) {
      return true
    }
    return false
  }

  // depth-first search
  const dfs = (tree) => {
    if (tree.val !== k - tree.val && search(root, k - tree.val)) return true
    if (tree.left != null && dfs(tree.left)) return true
    if (tree.right != null && dfs(tree.right)) return true
    return false
  }

  return dfs(root)
}

//=======================
const {assertTrue, assertFalse} = require('./lib/Assertion')

function TreeNode(val, left, right) {
  this.val = val
  this.left = left
  this.right = right
}

assertTrue(findTarget(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))), 9))
assertFalse(findTarget(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))), 28))
assertTrue(findTarget(new TreeNode(2, new TreeNode(1), new TreeNode(3)), 4))