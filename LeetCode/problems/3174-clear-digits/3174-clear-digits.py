class Solution:
    def clearDigits(self, s: str) -> str:
        dq = deque()
        for blah in s:
            if blah.isdigit():
                dq.pop()
            else:
                dq.append(blah)
        return ''.join(dq)
