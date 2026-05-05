/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    let ans = [];
    for(let I = 0; I<nums.length; I++){
        let score = 0;
        for(let Z = I; Z<nums.length; Z++){
            if(nums[I]%2 !== (nums[Z]%2)){
                score++;
            }
        }
        ans.push(score);
    }
    return ans;
};
