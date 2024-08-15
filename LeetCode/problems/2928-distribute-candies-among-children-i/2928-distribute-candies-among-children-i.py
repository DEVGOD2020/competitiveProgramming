class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        if(limit*3 < n):
            return 0
            
        return math.comb(n+2, 2)