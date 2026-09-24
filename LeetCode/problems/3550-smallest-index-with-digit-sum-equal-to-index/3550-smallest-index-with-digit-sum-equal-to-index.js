/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for(let I = 0; I<nums.length; I++){
        let score = 0;
        while(nums[I]>0){
            score += nums[I]%10;
            nums[I] = Math.floor(nums[I]/10);
        }
        if(I == score){return I;}
    }
    return -1;
};
