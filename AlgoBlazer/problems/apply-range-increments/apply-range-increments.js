function applyRangeIncrements(nums, operations) {
    let events = new Array(nums.length).fill(0);
    for(let [L,R,X] of operations){
        events[L] += X;
        events[R+1] -= X;
    }
    let prefix = 0;
    for(let I = 0; I<nums.length; I++){
        prefix += events[I];
        nums[I] = prefix+nums[I];
    }
    return nums;
}