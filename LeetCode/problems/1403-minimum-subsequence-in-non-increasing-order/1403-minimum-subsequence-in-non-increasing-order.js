/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort( (a,b)=>b-a);
    let sum = nums.reduce( (sum,el)=>sum+el,0);

    let ans = [];
    let score = 0;
    for(let num of nums){
        score += num;
        ans.push(num);
        if(score > sum-score){
            return ans;
        }
    }
    
    return ans;
};
