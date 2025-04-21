/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let preSum = [0];
    for(let diff of differences){
        preSum.push( preSum[preSum.length-1] + diff);
    }

    let windowSize = Math.abs(Math.max(...preSum) - Math.min(...preSum));
    let ans = (upper-lower)+1 - windowSize;
    return ans > 0 ? ans : 0;
};