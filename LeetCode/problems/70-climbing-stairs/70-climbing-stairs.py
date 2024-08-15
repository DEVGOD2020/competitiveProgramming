##int climbStairs(int n) {
 ##   if(n <= 3){return n;}
 ##   return climbStairs(n-1)+climbStairs(n-2);
##}
class Solution:
    @cache
    def climbStairs(self, n: int) -> int:
        if n <= 3:
            return n
        return self.climbStairs(n-1)+self.climbStairs(n-2)