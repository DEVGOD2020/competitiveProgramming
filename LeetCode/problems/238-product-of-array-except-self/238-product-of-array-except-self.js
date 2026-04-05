/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const SIZE = nums.length;
    let prefix = [nums[0]];
    let postfix = Array(SIZE).fill(1);
    postfix[postfix.length-1] = nums[SIZE-1];

    let I = 1;
    while(I<SIZE){
        prefix[I] = prefix[I-1]*nums[I];
        postfix[SIZE-1-I] = postfix[SIZE-I]*nums[SIZE-1-I];
        I++;
    }

    nums[0] = postfix[1];
    nums[SIZE-1] = prefix[SIZE-2];
    for(let num=1; num<SIZE-1; num++){
        if(num > 0 && num < SIZE-1){
            nums[num] = prefix[num-1]*postfix[num+1];
        }
    }
    return nums;
}
