/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let I = matrix.length-1;
    const XX = matrix[0].length;
    while(I>0){
        for(let X = 0; X<XX; X++){
            matrix[I-1][X] += Math.min(
                isNaN( matrix[I][X-1] ) ? Infinity : matrix[I][X-1],
                matrix[I][X],
                isNaN( matrix[I][X+1] ) ? Infinity : matrix[I][X+1]
            ); 
        }
        I+=-1;
    }
    
    return Math.min(...matrix[0]);
};