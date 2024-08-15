import math
from collections import Counter

class Solution:
    def minAnagramLength(self, s):
        n = len(s)
        factors = []
        
        # Find the factors of the length of the string
        for i in range(1, int(math.sqrt(n)) + 1):
            if n % i == 0:
                k = n // i
                if k != i:
                    factors.append(i)
                    factors.append(k)
                else:
                    factors.append(i)
                    
        factors.sort()

        print(factors)

        return 0
        