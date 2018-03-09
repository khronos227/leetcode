package problem

class Q412 {
    fun fizzBuzz(n: Int): List<String> {
        return (1..n).map { num ->
            when {
                num % 15 == 0 -> "FizzBuzz"
                num % 5 == 0 -> "Buzz"
                num % 3 == 0 -> "Fizz"
                else -> num.toString()
            }
        }
    }
}

fun main(args: Array<String>) {
    println(Q412().fizzBuzz(15))
}