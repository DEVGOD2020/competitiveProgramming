/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = [];

    nums = nums.sort(function(a,b){return a-b})

    let arr = new Array(nums.length).fill(-1);
    let visit=new Array(nums.length).fill(false);
    let backtrack = function(I=0){
        if(I == nums.length){
            ans.push([...arr]);
            return true;
        }

        for(let A = 0; A<nums.length; A++){
            if(visit[A]){continue;}

            if (A > 0 && nums[A] === nums[A - 1] && !visit[A - 1]){continue;}

            arr[I] = nums[A];
            visit[A] = true;

            backtrack(I+1);

            arr[I] = -1;
            visit[A] = false;
        }
    }

    backtrack();

    return ans;
};