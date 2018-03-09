package problem

class Q771 {
    fun numJewelsInStones(J: String, S: String): Int {
        val map = mutableMapOf<Char, Int>()
        S.forEach {
            map[it] = map.getOrDefault(it, 0) + 1
        }
        return J.map {
            map.getOrDefault(it, 0)
        }.sum()
    }
}