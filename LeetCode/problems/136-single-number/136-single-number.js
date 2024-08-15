/**
 * @param {number[]} nums
 * @return {number}
 */


//Bitwise XOR
var singleNumber = function(nums) {
    let uniqNum = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        uniqNum = uniqNum ^ nums[idx];
    } 
    return uniqNum; 
};

//BruteForce
var singleNumber2 = function(nums) {
    nums.sort();
    for(let A=0; A<nums.length; A+=2){
        if(nums[A] != nums[A+1]){
            return nums[A];
        }
    }
};