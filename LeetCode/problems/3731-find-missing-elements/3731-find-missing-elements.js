/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    let ans = [];
    let mySet = new Set( nums );
    for(let I = min; I<max; I++){
        if( !mySet.has(I) ){
            ans.push(I);
        }
    }
    return ans;
};
