/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let E = 0;
    let O = 1;

    while(E < nums.length && O < nums.length){
        if(nums[E]%2 == 0){
            E += 2;
        }else if(nums[O]%2 == 1){
            O += 2;
        }else{
            [nums[O],nums[E]] = [nums[E],nums[O]];
            E += 2;
            O += 2;
        }
    }

    return nums;
};
