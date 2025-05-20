/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    let sweep = new Array(nums.length).fill(0);
    for(let [start,end] of queries){
        sweep[start]++;
        sweep[end+1]--;
    }

    let sum = 0;
    for(let I = 0; I<nums.length; I++){
        sum += sweep[I];
        if(nums[I] > sum){
            return false;
        }
    }
    return true;
};
