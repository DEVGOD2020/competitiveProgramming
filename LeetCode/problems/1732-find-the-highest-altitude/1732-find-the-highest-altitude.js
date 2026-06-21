/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let score = 0;
    let ans = 0;
    for(let g of gain){
        score += g;
        ans = Math.max(ans,score);
    }
    return ans;
};