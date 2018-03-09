package problem

import lib.TreeNode

class Q637 {
    fun averageOfLevels(root: TreeNode?): DoubleArray {
        val result = arrayListOf<Double>()
        if (root == null) return doubleArrayOf()
        var targets = listOf(root)
        while (targets.isNotEmpty()) {
            result.add(targets.sumByDouble { it.`val`.toDouble() } / targets.size)
            val nextTargets = arrayListOf<TreeNode>()
            targets.forEach {
                it.left?.let {
                    nextTargets.add(it)
                }
                it.right?.let {
                    nextTargets.add(it)
                }
            }
            targets = nextTargets
        }
        return result.toDoubleArray()
    }
}

fun main(args: Array<String>) {
    val root = TreeNode(3)
    root.left = TreeNode(9)
    root.right = TreeNode(20).apply {
        this.left = TreeNode(15)
        this.right = TreeNode(7)
    }
    val q = Q637()
    q.averageOfLevels(root).let {
        println(it.joinToString(separator = ","))
    }
}