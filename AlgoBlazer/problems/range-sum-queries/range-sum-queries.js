function rangeSums(nums, queries) {
    let ps = [nums[0]];
    for(let I = 1; I<nums.length; I++){
        ps[I] = ps[I-1]+nums[I];
    }
    let ans = [];
    for(let [L,R] of queries){
        ans.push(ps[R]-(ps[L-1]??0));
    }
    return ans;
}
