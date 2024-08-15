class Solution:
    def longestPalindrome(self, s: str) -> int:
        myMap = Counter(s)
        score = 0
        hasOdd = 0
        for val in myMap.values():
            score += floor(val/2)*2
            if(val%2 == 1):
                hasOdd = 1
        return score+hasOdd