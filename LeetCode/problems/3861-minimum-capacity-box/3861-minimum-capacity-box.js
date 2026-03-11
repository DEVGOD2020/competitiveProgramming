/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    let ans = -1;
    let minCap = Infinity;
    for(let I = 0; I<capacity.length; I++){
        if(capacity[I] < minCap && capacity[I] >= itemSize){
            minCap = capacity[I];
            ans = I;
        }
    }
    return ans;
};
