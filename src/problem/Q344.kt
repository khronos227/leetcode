package problem

class Q344 {
    fun reverseString(s: String): String {
        val chars = s.toCharArray()
        (0 until chars.size / 2).forEach { index ->
            chars[index] = chars[chars.lastIndex - index].also {
                chars[chars.lastIndex - index] = chars[index]
            }
        }
        return chars.joinToString(separator = "")
    }
}