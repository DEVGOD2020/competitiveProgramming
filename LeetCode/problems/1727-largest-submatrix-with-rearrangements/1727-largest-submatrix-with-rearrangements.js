/**
 * @param {number[][]} matrix
 * @return {number}
 */
var largestSubmatrix = function(matrix) {
    let ans = 0;
    for(let row = 0; row<matrix.length; row++){
        for(let col=0; col<matrix[0].length; col++){
            if(matrix[row][col] > 0 && row>0){
                matrix[row][col] += matrix[row-1][col];
            }
        }
        let arr = [...matrix[row]].sort((a,b)=>b-a);
        for(let I = 0; I<matrix[row].length; I++){
            ans = Math.max(arr[I]*(I+1), ans);
        }
    }
    return ans;
};
