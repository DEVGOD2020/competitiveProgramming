/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let pre = [nums[0]];
    for(let I = 1; I<nums.length; I++){
        pre[I] = pre[I-1]+nums[I];
    }
    const sum = pre[ nums.length-1 ];
    
    let ans = 0;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] > 0){ continue; }
        const suf = (sum - pre[I]);
        const diff = Math.abs( pre[I] - suf );
        if( diff == 0){ ans += 2; }
        if( diff == 1){ ans++; }
    }
    return ans;
};
