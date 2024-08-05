class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        myMap = Counter(arr)
        arr = [key for key, value in myMap.items() if value <= 1]
        return "" if len(arr)-k < 0 else arr[k-1]