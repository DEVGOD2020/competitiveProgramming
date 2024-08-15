/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let mySet = new Set();
    let max = -1;
    for(let num of nums){
        if(!mySet.has( num )){
            mySet.add( -num );
        }else{
            max = Math.max(max, Math.abs(num) );
        }
    }
    return max;
};