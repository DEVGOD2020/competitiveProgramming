/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort();
    let b = undefined;
    for(const a of nums){
        if(a==b){
            return true;
        }
        b = a;
    }
    return false;
};