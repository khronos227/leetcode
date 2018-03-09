package problem

class Q657 {
    fun judgeCircle(moves: String): Boolean {
        var (x, y) = Pair(0, 0)
        moves.forEach {
            when (it) {
                'R' -> x++
                'L' -> x--
                'U' -> y++
                'D' -> y--
            }
        }
        return x == 0 && y == 0
    }
}