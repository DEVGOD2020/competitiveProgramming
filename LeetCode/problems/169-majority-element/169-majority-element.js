/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let score = 0;
    let ans = nums[0];

    for(let num of nums ){
        if(score === 0){
            ans = num;
        }
        if(num === ans){
            score++;
        }else{
            score--;
        }
    }

    return ans;
};
