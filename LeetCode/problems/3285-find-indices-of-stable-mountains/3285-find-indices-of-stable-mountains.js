/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let ans = [];
    for(let I = 1; I<height.length; I++){
        if(height[I-1] > threshold){
            ans.push(I);
        }
    }
    return ans;
};