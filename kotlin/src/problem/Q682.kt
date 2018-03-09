package problem

class Q682 {
    fun calPoints(ops: Array<String>): Int {
        val list = mutableListOf<Int>()
        (0 until ops.size).forEach { index ->
            when (ops[index]) {
                "+" -> {
                    list.add((list.getOrNull(list.lastIndex) ?: 0) + (list.getOrNull(list.lastIndex - 1) ?: 0))
                }
                "D" -> {
                    list.add((list.getOrNull(list.lastIndex) ?: 0) * 2)
                }
                "C" -> {
                    list.removeAt(list.lastIndex)
                }
                else -> {
                    list.add(ops[index].toInt())
                }
            }
        }
        return list.sum()
    }
}

fun main(args: Array<String>) {
    println(Q682().calPoints(arrayOf("5","2","C","D","+")))
    println(Q682().calPoints(arrayOf("5","-2","4","C","D","9","+","+")))
}