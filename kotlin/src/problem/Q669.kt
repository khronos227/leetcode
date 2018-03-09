package problem

import lib.TreeNode

class Q669 {
    fun trimBST(root: TreeNode?, L: Int, R: Int): TreeNode? {
        return root?.let {
            when {
                it.`val` < L -> {
                    trimBST(it.right, L, R)
                }
                it.`val` in L..R -> {
                    it.apply {
                        this.left = trimBST(this.left, L, R)
                        this.right = trimBST(this.right, L, R)
                    }
                }
                R < it.`val` -> {
                    trimBST(it.left, L, R)
                }
                else -> null
            }
        }
    }
}
