/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let total = 0;
    let size = 1 << nums.length;
    for(let mask = 0; mask<size; mask++){
        let curr = 0;
        for(let I = 0; I<nums.length; I++){
            if(mask & (1<<I)){
                curr = curr ^ nums[I];
            }
        }
        total += curr;
    }
    return total;
};