/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let score = 0;
    let totalNeg = 0;
    let absMin = 10e6;
    for(let row of matrix){
        let absRow = row.map( (el)=>Math.abs(el));
        let numNegs = row.reduce( (sum,el)=>sum+(el<0?1:0),0);
        score += Math.abs(_.sumBy(absRow));
        absMin = Math.min(absMin, ...absRow);
        totalNeg += numNegs;
    }

    if(totalNeg%2==1){
        score -= 2*absMin;
    }

    return score;

};
