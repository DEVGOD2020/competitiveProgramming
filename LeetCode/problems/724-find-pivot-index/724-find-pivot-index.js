/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let L = 0;
    let R = _.sumBy(nums);

    for(let I = 0; I<nums.length; I++){
        L += nums[I];
        if(L==R){ return I; }
        R += -nums[I];
    }
    
    return -1;
};