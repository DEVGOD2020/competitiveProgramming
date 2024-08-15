/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4){
        return 0;
    }

    nums.sort(function(a,b){return a-b;})

    let minDif = Infinity;
    
    let L = 0;
    let R = nums.length-4;
    while(R<nums.length){
        minDif = Math.min(minDif,nums[R]-nums[L]);
        L++;
        R++;
    }

    return minDif;
};