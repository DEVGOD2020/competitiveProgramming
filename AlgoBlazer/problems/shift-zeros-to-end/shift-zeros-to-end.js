function shiftZerosToEnd(nums) {
    let L = 0;
    let R = 0;
    while(L<nums.length){
        if(nums[L] !== 0){ nums[R++] = nums[L];}
        L++;
    }
    while(R<nums.length){
        nums[R] = 0;
        R++;
    }
    return nums;
}