function tightestKValueSpread(nums, k) {
    nums.sort((a,b)=>a-b);
    let L = 0;
    let R = k-1;
    let ans = Infinity;
    while(R<nums.length){
        ans = Math.min(nums[R]-nums[L], ans);
        L++; R++;
    }
    return ans;
}
