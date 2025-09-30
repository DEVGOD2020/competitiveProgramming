class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        return sum( num*comb(len(nums)-1, I ) for I,num in enumerate(nums) )%10

