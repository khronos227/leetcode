package problem

class Q566 {
    fun matrixReshape(nums: Array<IntArray>, r: Int, c: Int): Array<IntArray> {
        if (nums.size * nums[0].size != r * c) {
            return nums
        }
        return nums.flatMap { it.toList() }.let { list ->
            (0 until r).map { row ->
                list.subList(row * c, (row + 1) * c).toIntArray()
            }
        }.toTypedArray()
    }
}