class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        return Counter(target).items() == Counter(arr).items()