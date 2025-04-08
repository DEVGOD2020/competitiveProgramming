/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let mySet = new Set();
    for(let I = nums.length-1; I>=0; I--){
        if(mySet.has(nums[I])){
            return Math.floor(I/3)+1;
        }
        mySet.add(nums[I]);
    }

    return 0;
};