package problem

class Q476 {
    fun findComplement(num: Int): Int {
        var n = num
        var mask = 1
        while (n > 1) {
            mask = (mask shl 1) + 1 // create bit mask (e.g. 0001111, 0011)
            n = n shr 1
        }
        return num xor mask
    }
}

fun main(args: Array<String>) {
    println(Q476().findComplement(5))
    println(5.inv())
}