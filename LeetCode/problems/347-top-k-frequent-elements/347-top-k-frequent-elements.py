class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        myFreqMap = Counter(nums).most_common()
        arr = [myFreqMap[i][0] for i in range(0,k)]
        return arr