package problem

class Q575 {
    fun distributeCandies(candies: IntArray): Int {
        return Math.min(candies.toSet().size, candies.size / 2)
    }
}