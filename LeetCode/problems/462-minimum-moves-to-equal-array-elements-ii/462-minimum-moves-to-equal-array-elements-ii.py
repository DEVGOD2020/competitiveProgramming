class Solution:
    def minMoves2(self, nums: list[int]) -> int:
        M = median_low(nums)
        ans = sum( abs(num-M) for num in nums)
        return ans