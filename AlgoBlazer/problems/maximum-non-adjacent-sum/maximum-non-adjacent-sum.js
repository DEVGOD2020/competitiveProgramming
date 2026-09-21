function maxNonAdjacentSum(nums) {
    let DP = new Array(nums.length).fill(0);
    for(let I = 0; I<nums.length; I++){
        DP[I] = Math.max((DP[I-2]??0), DP[I-3]??0)+nums[I];
    }
    return Math.max(...DP);
}
