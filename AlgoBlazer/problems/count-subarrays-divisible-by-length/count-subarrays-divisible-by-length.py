def countDivisibleSubarrays(nums: list[int]) -> int:
    N = len(nums)
    ans = 0
    sum = 0
    
    myMap = {0:1}
    for num in nums:
        sum = (sum+num)%N
        if sum in myMap:
            ans += myMap[sum]
        myMap[sum] = myMap.get(sum,0) + 1
    return ans
