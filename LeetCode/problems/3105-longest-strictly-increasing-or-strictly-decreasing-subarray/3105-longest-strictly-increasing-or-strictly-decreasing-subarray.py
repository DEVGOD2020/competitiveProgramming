class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        si = 1
        sd = 1
        score = 1
        for I in range(1,len(nums)):
            if nums[I-1] >= nums[I]:
                si = 1
            else:
                si += 1
            if nums[I-1] <= nums[I]:
                sd = 1
            else:
                sd += 1
            score = max(score,si,sd)
        return score
