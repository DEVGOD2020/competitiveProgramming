/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort(function(a,b){return a-b;})
    console.log(nums);

    let L = 0;
    let R = nums.length-1;
    let score = 0;

    while(L < R){
        if(nums[L]+nums[R] < target){
            score++;
            R += -1;
        }else{
            L++;
        }
    }

    console.log(L,R)
    return score;
};