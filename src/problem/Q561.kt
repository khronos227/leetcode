package problem

class Q561 {
    fun arrayPairSum(nums: IntArray): Int {
        nums.sort()
        return (0 until nums.size step 2).map {
            nums[it]
        }.sum()
    }
}