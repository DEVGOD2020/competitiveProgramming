/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);

    let L = 0;
    let R = 0;
    let freq = 0;
    let score = 0;

    while(R<nums.length){
        if(nums[R] == max){freq++;}
        while(freq >= k && L <= R){
            if(nums[L++] === max){
                freq--;
            }
        }
        score += L;
        R++;
    }

    return score;
};