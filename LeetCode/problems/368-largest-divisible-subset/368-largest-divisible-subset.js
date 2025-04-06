/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    let dp = new Array(nums.length).fill(1);

    let myMap = new Map();
    nums = nums.sort((a,b)=>a - b);

    let broIndex = 0;
    let maxSize = 0;
    for(let R = 1; R<nums.length; R++){
        for(let L = 0; L<R; L++){
            if( nums[R]%nums[L] === 0 && dp[L]+1 > dp[R] ){
                dp[R] = dp[L]+1;
                myMap.set(R, L);
            }
        }
        if(dp[R] > maxSize){
            maxSize = dp[R];
            broIndex = R;
        }
    }

    let ans = [];
    while(broIndex >= 0){
        ans.push(nums[broIndex]);
        broIndex = myMap.get(broIndex);
    }

    return ans;
};