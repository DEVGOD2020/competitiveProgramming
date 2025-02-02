function isArraySpecial(nums: number[]): boolean {
    return nums.every( (el,I)=>nums[I]%2!=nums[ I<nums.length ? I+1 : nums.length-1]%2)
};