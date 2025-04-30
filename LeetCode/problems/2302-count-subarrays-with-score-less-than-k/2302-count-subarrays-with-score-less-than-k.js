/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let prefixSum = [];
    for(let num of nums){
        prefixSum.push((prefixSum[prefixSum.length-1]||0)+num);
    }

    let L = 0;
    let R = 0;
    let ans = 0;
    while(R<nums.length){
        let score = (prefixSum[R]- (prefixSum[L-1]||0) )*( (R-L) + 1);
        if(score >= k && L<R){
            L++;
        }else{
            if(score < k){
                ans += (R-L)+1;
            }
            R++;
        }
    }

    return ans;
};