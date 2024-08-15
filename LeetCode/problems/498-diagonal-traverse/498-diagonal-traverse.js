/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    if(mat.length == 1){return mat[0];}

    let X = 1
    let Y = 0
    const M = mat[0].length-1;
    const N = mat.length-1;
    let ans = [mat[0][0]];
    let dir = -1;
    
    if(dir == -1){
      while(X>0 && Y>N){
            console.log(X+" "+Y)
            X += dir;
            Y += dir;
        }
    }
    
    return ans;
};