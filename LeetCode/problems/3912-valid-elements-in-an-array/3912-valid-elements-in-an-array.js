/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findValidElements = function(nums) {
    let left = -Infinity;
    let right = -Infinity;

    let mySet = new Set();
    for(let I = 0; I<nums.length; I++){
        if(nums[I] > left){mySet.add(I);}
        left = Math.max(left,nums[I]);
    }

    for(let I = nums.length-1; I>=0; I--){
        if(nums[I] > right){mySet.add(I);}
        right = Math.max(right,nums[I]);
    }

    let ans = [];
    for(let I = 0; I<nums.length; I++){
        if(mySet.has(I)){
            ans.push(nums[I]);
        }
    }

    return ans;
};
