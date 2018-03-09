package problem

class Q557 {
    fun reverseWords(s: String): String {
        return s.split(" ").joinToString(separator = " ", transform = String::reversed)
    }
}