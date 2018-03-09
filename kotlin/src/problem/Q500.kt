package problem

class Q500 {
    private val keyRowMap = hashMapOf(
            *"qwertyuiop".toCharArray().map { it to 1 }.toTypedArray(),
            *"asdfghjkl".toCharArray().map { it to 2 }.toTypedArray(),
            *"zxcvbnm".toCharArray().map { it to 3 }.toTypedArray(),
            *"QWERTYUIOP".toCharArray().map { it to 1 }.toTypedArray(),
            *"ASDFGHJKL".toCharArray().map { it to 2 }.toTypedArray(),
            *"ZXCVBNM".toCharArray().map { it to 3 }.toTypedArray()
    )

    fun findWords(words: Array<String>): Array<String> {
        return words.filter { word ->
            word.toCharArray().map {
                keyRowMap[it]
            }.distinct().size == 1
        }.toTypedArray()
    }
}

fun main(args: Array<String>) {
    println(Q500().findWords(arrayOf("Hello", "Alaska", "Dad", "Peace")).contentToString())
}