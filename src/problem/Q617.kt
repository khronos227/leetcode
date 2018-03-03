package problem

class Q617 {
    fun mergeTrees(t1: TreeNode?, t2: TreeNode?): TreeNode? {
        if (t1 == null && t2 == null) {
            return null
        }
        return TreeNode((t1?.`val` ?: 0) + (t2?.`val` ?: 0)).apply {
            this.left = mergeTrees(t1?.left, t2?.left)
            this.right = mergeTrees(t1?.right, t2?.right)
        }
    }
}

class TreeNode(var `val`: Int = 0) {
    var left: TreeNode? = null
    var right: TreeNode? = null
}