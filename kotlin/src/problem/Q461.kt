package problem

class Q461 {
    fun hammingDistance(x: Int, y: Int): Int {
        val hamming = x xor y
        return (0..31).map {
            if (hamming and (1 shl it) == 0) 0 else 1
        }.sum()
    }
}