def occurrenceRange(nums: list[int], target: int) -> list[int]:
    left = bisect.bisect_left(nums, target)
    right = bisect.bisect_right(nums,target)
    print(left,right)
    return [
        left if left < len(nums) and nums[left] == target else -1, 
        right-1 if right-1 < len(nums) and right-1 >= 0 and nums[right-1] == target else -1
    ]
