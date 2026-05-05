class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        for R in range(0,len(matrix)):
            for C in range(R+1,len(matrix)):
                matrix[R][C], matrix[C][R] = matrix[C][R], matrix[R][C]
        
        for R in matrix:
            R.reverse()
