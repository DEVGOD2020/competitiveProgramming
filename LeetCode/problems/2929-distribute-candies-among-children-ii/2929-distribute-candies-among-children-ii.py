class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        total = comb(n+2,2)
        badCases = 3*comb( (n-(limit+1))+2 if (n-(limit+1))+2 >= 0 else 0, 2)
        overCounted = 3*comb( n- (2*(limit+1)) + 2 if n-(2*(limit+1)) + 2 >= 0 else 0, 2)
        overCountedLast = comb( n- (3*(limit+1)) + 2 if n-(3*(limit+1)) + 2 >= 0 else 0, 2)
        return total-badCases + overCounted - overCountedLast
