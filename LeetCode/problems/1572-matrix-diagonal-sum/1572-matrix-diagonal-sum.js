/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let L = 0;
    let R = mat[0].length-1;

    let sum = 0;
    const size = mat.length;
    for(I = 0; I < size; I++){
        if(L == R){
            sum += mat[I][L];
        }else{
            sum += mat[I][L];
            sum += mat[I][R]; 
        }
        
        L++;
        R--;
    }

    return sum;

};