package problem

class Q496 {
    fun nextGreaterElement(nums1: IntArray, nums2: IntArray): IntArray {
        return hashMapOf(*nums2.map { it to -1 }.toTypedArray()).apply {
            val list = arrayListOf<Int>()
            nums2.forEach { num ->
                val found = arrayListOf<Int>()
                list.forEach {
                    if (it < num) {
                        this.put(it, num)
                        found.add(it)
                    }
                }
                list.removeAll(found)
                list.add(num)
            }
        }.let {
            nums1.map { num ->
                it.getOrDefault(num, -1)
            }.toIntArray()
        }
    }
}

fun main(args: Array<String>) {
    val q = Q496()
    q.nextGreaterElement(intArrayOf(4, 1, 2), intArrayOf(1, 3, 4, 2)).let {
        println(it.joinToString(separator = ","))
    }
    q.nextGreaterElement(intArrayOf(2, 4), intArrayOf(1, 2, 3, 4)).let {
        println(it.joinToString(separator = ","))
    }
}