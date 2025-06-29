/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort( (a,b)=>a-b);
    const mod = BigInt( (1e9)+7 );
    let ans = 0n;
    for(let I = 0; I<nums.length; I++){
        let R = _.sortedLastIndex(nums, target-nums[I])-1;
        if(R >= I){
            ans += (2n**BigInt(R-I)) % mod;
        }
    }
    return Number(ans % mod);
};
