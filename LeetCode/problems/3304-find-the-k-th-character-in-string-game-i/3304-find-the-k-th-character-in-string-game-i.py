class Solution:
    def kthCharacter(self, k: int) -> str:
        return chr((k - 1).bit_count() + 97)
