/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x, score=0) {

    let first = nums[0];
    let last = nums[nums.length-1];

    if(x<0){return -1;}
    if(x==0){return score;}

    if(nums.length > 0){
        if(first >= last){
            if(x-first >= 0){
                return minOperations(nums.slice(1,nums.length),x-first,score+1);
            }
            else{
                return minOperations(nums.slice(0,nums.length-1),x-last,score+1);
            }
        }
        if(first < last){
            if(x-last >= 0){
                return minOperations(nums.slice(0,nums.length-1),x-last,score+1);
            }else{
                return minOperations(nums.slice(1,nums.length),x-first,score+1);
            }
        }
    }

    return -1;
};