class Solution:
    def isArraySpecial(self, nums: List[int]) -> bool:
        return all(nums[I]%2 != nums[I+1]%2 for I in range(len(nums)-1))