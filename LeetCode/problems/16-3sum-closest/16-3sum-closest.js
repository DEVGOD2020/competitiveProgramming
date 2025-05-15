/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = _.sortBy(nums);
    let ans = Infinity;
    let dis = Infinity;
    for(let I = 0; I<nums.length-2; I++){
        let L = I+1;
        let R = nums.length-1;
        while(L<R){
            let sum = (nums[I]+nums[L]+nums[R]);
            let newDis = Math.abs(target - sum);
            if(newDis < dis){
                dis = newDis;
                ans = sum;
            }
            if(sum < target){ L++; }
            else{ R--; }
        }
    }

    return ans;
};