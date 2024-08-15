/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let L = 0;
    let score = 0;
    let prod = 1;

    for(let R = 0; R<nums.length; R++){
        prod *= nums[R];
        while(prod >= k && L <= R){
            prod /= nums[L];
            L++;
        }

        score += R-L+1;
    }

    return score;
};

//10
//10,5

//5,2


//5,2,6

//50