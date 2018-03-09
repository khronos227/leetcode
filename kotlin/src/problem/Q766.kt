package problem

class Q766 {
    fun isToeplitzMatrix(matrix: Array<IntArray>): Boolean {
        (0 until matrix.lastIndex).forEach { row ->
            (0 until matrix[row].lastIndex).forEach { col ->
                if (matrix[row][col] != matrix[row + 1][col + 1]) {
                    return false
                }
            }
        }
        return true
    }
}

fun main(args: Array<String>) {
    println(Q766().isToeplitzMatrix(arrayOf(intArrayOf(1, 2, 3, 4), intArrayOf(5, 1, 2, 3), intArrayOf(9, 5, 1, 2))))
    println(Q766().isToeplitzMatrix(arrayOf(intArrayOf(1,2), intArrayOf(2,2))))
}