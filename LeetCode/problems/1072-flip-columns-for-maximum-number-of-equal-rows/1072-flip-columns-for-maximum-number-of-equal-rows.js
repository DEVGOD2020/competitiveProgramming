/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function(matrix) {
    let freqMap = new Map();

    for(let row of matrix){
        const A = row.join();
        const B = row.map( (el)=> el^1).join();
        freqMap.set( A, ( freqMap.get(A)||0 )+1)
        freqMap.set( B, ( freqMap.get(B)||0 )+1)
    }

    return Math.max(...freqMap.values());
};