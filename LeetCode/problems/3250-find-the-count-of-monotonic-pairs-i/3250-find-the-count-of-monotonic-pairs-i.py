class Solution:
    def countOfPairs(self, nums: List[int]) -> int:
        MOD = 10**9 + 7
        a, b = 0, nums[0]
        arr1 = [a]
        arr2 = [b]
        for i in nums[1:]:
            a = max(a, i - b)
            b = i - a
            arr1.append(a)
            arr2.append(b)
        
        print(arr1)
        print(arr2)
        return 0
        