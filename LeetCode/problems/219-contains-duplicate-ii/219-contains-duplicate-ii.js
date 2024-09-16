/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let myMap = new Map();
    for(let I = 0; I<nums.length; I++){
        if(!myMap.has(nums[I])){
            myMap.set(nums[I], I);
            continue;
        }
        let pastIndex = myMap.get(nums[I]);
        myMap.set(nums[I], I);
        if( I-pastIndex <= k){ return true; }
    }
    return false;
};