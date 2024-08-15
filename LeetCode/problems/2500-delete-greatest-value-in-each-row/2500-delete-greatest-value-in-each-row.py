
class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        ans = 0
        n = len(grid)
        while(len(grid[n-1])):
            myMax = 0
            for row in grid:
                if myMax < max(row):
                    myMax = max(row)
                del row[row.index(max(row))]
            ans += myMax
        return ans
                
        