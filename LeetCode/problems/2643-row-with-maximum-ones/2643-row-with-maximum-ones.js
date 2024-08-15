/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let high = [0,0];
    const N = mat.length;
    let I = 0;
    while(I<N){
        let val = teamScore(mat[I]);
        if(val > high[1]){
            high = [I,val];
        }
        I++;
    }

    return high;
};

function teamScore(arr){
    return arr.filter((data) => data == 1).length;
}