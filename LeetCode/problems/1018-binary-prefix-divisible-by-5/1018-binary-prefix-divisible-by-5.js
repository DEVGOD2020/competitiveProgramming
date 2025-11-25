/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let ans = [];
    let state = 0;
    for(let num of nums){
        state = ((state<<1) | num)%5;
        ans.push( !state )
    }
    return ans;
};
