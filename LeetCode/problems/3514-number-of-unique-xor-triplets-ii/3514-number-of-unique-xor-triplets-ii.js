/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    let mySet = new Set();
    let totalSet = new Set();
    for(let A = 0; A<nums.length; A++){
        for(let B = A; B<nums.length; B++){
            mySet.add(nums[A]^nums[B]);
        }
    }
    for(let A = 0; A<nums.length; A++){
        for(let B of mySet){
            totalSet.add(nums[A]^B);
        }
    }

    return totalSet.size;
};