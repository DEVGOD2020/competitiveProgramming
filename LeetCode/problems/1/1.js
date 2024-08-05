/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = new Map();
    for(let A in nums){
        let diff = target - nums[A];
        if(myMap.has(diff)){
            return [myMap.get(diff), A];
        }
        myMap.set(nums[A], A);
    }
};