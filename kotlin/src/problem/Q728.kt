package problem

class Q728 {
    fun selfDividingNumbers(left: Int, right: Int): List<Int> {
        return (left..right).filter {
            var num = it
            while (num > 0) {
                val target = num % 10
                if (target == 0 || it % target != 0) {
                    return@filter false
                }
                num /= 10
            }
            true
        }
    }
}