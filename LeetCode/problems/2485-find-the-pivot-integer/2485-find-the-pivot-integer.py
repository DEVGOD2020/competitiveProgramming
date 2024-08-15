class Solution:
    def pivotInteger(self,n):
        if n == 1:
            return 1

        sum_total = (n + 1) * (n // 2)
        temp = 0

        for i in range(n):
            sum_total -= i
            if sum_total == temp:
                return i
            temp += i

        return -1