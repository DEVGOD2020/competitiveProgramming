/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let ans = [];

    nums.sort( (a,b)=>a-b);
    const MAX = nums[nums.length-1];
    
    let twoSum = function(start,target){
        let ans = [];
        let mySet = new Set();
        for(let I = start; I<nums.length; I++){
            if(ans == 0 || ans[ans.length-1][1] != nums[I] ){
                if(mySet.has(target-nums[I])){
                    ans.push([target-nums[I],nums[I]]);
                }
            }
            mySet.add(nums[I]);
        }
        return ans;
    }

    let threeSum = function(start,target){
        let ans = [];
        const AVG = Math.floor(target/3);
        for(let I = start; I<nums.length; I++){
            if(nums[I] > AVG ){break;}
            if(AVG > MAX ){break;}

            if(I == start || nums[I-1] !== nums[I]){
                for(let el of twoSum(I+1,target-nums[I])){
                    ans.push([nums[I],...el]);
                }
            }
        }
        return ans;
    }

    let fourSum = function(start,target){
        let ans = [];
        const AVG = Math.floor(target/4);
        for(let I = start; I<nums.length; I++){
            if(nums[I] > AVG){break;}
            if(AVG > MAX ){break;}

            if(I== start || nums[I-1] !== nums[I]){
                for(let el of threeSum(I+1,target-nums[I])){
                    ans.push([nums[I],...el]);
                }
            }
        }
        return ans;
    }

    return fourSum(0,target);
};
