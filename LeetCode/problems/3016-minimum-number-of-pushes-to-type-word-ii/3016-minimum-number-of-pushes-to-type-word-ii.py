class Solution:
    def minimumPushes(self, word: str) -> int:
        myCounter = Counter(word).most_common()
        
        score = 0
        for i, (key, val) in enumerate(myCounter):
            score += val * (int(i / 8) + 1)

        return score