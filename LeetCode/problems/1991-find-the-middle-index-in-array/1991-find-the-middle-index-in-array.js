/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    if(nums.length == 1){return 0;}
    let prefix = [nums[0]];
    let postfix = Array(nums.length).fill(1);
    postfix[nums.length-1] = nums[nums.length-1];

    for(let num = 1; num<nums.length; num++){
        prefix[num] = prefix[num-1]+nums[num];
        postfix[nums.length-1-num] = postfix[nums.length-1-num+1]+nums[nums.length-1-num];
    }

    if(postfix[1] == 0){
        return 0;
    }
    for(let I = 1; I<nums.length-1; I++){
        if(prefix[I-1] == postfix[I+1]){
            return I;
        }
    }
    if(prefix[nums.length-2] == 0){
        return nums.length-1;
    }

    return -1;
};