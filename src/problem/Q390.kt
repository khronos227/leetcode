package problem

class Q390 {
    fun lastRemaining(n: Int): Int {
        if (n == 1) {
            return 1
        }
        val min = 1
        val max = if (n % 2 == 0) n else n - 1

        return reduceFromStart(min, max, 1)
    }

    private fun reduceFromStart(min: Int, max: Int, diff: Int): Int {
        val nextDiff = diff * 2
        val nextMin = min + diff
        val nextMax = ((max - nextMin) / nextDiff).toInt() * nextDiff + nextMin
        if (nextMin == nextMax) return nextMin

        return reduceFromEnd(nextMin, nextMax, nextDiff)
    }

    private fun reduceFromEnd(min: Int, max: Int, diff: Int): Int {
        val nextDiff = diff * 2
        val nextMax = max - diff
        if (min == nextMax) return min

        val nextMin = ((max - diff) % nextDiff).let {
            if (it == 0) min + diff else it
        }
        if (nextMin == nextMax) return nextMin

        return reduceFromStart(nextMin, nextMax, nextDiff)
    }
}

fun main(args: Array<String>) {
    val q = Q390()
    q.lastRemaining(44).let {
        println(it)
        println(it == 30)
    }
    q.lastRemaining(40).let {
        println(it)
        println(it == 30)
    }
    q.lastRemaining(16).let {
        println(it)
        println(it == 6)
    }
    q.lastRemaining(6).let {
        println(it)
        println(it == 4)
    }
    q.lastRemaining(48).let {
        println(it)
        println(it == 22)
    }
}