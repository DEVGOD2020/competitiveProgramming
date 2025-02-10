/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if(ops.length === 0){return m*n;}

    let minX = m;
    let minY = n
    for(let [X,Y] of ops){
        minX = Math.min(minX,X);
        minY = Math.min(minY,Y);
    }

    return minX*minY;
};