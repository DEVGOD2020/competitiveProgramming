/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let ans = [];
    let helper = function(n=0, perm=[]){
        if(n == nums.length){
            ans.push([...perm]);
            return;
        }
        for(let I = 0; I<nums.length; I++){
            if(!perm.includes(nums[I])){
                perm.push(nums[I]);
                helper(n+1,perm);
                perm.pop();
            }
        }
    }
    helper();
    return ans;
};