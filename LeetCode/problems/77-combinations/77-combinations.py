class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        a = combinations([str(i) for i in range(1,n)], k) 
        y = [' '.join(i) for i in a]
        return y