package problem

class Q463 {
    fun islandPerimeter(grid: Array<IntArray>): Int {
        return (0 until grid.size).map { h ->
            (0 until grid[0].size).map { w ->
                if (grid[h][w] == 0) {
                    0
                } else {
                    val left = grid[h].getOrNull(w - 1) ?: 0
                    val right = grid[h].getOrNull(w + 1) ?: 0
                    val top = grid.getOrNull(h - 1)?.get(w) ?: 0
                    val bottom = grid.getOrNull(h + 1)?.get(w) ?: 0
                    4 - (left + right + top + bottom)
                }
            }.sum()
        }.sum()
    }
}

fun main(args: Array<String>) {
    val q = Q463()
    q.islandPerimeter(arrayOf(
            intArrayOf(0, 1, 0, 0),
            intArrayOf(1, 1, 1, 0),
            intArrayOf(0, 1, 0, 0),
            intArrayOf(1, 1, 0, 0)
    )).let {
        println("$it: ${it == 16}")
    }
}