/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function(nums) {
    const max = nums.reduce( (sum,el)=>sum|el,0)
    let ans = 0;
    let backtrack = function(I,score=0){
        if(score === max){ans++;}
        for(let A = I; A<nums.length; A++){
            backtrack(A+1, score|nums[A]);
        }
    }
    backtrack(0);
    return ans;
}
