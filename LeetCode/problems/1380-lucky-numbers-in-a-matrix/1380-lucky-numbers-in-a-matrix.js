/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let luckyNumbers = [];
    for(let a of matrix){
        const val = Math.min(...a);
        let index = a.indexOf( val);
        let small = -Infinity;
        for(let b in matrix){
            if(matrix[b][index] > small){ small = matrix[b][index] }
        }
        if(small === val){ luckyNumbers.push(val); }
    }
    return luckyNumbers;
};