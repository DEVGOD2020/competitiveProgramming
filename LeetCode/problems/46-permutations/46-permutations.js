/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];

    if(nums.length === 1){
        return [[...nums]];
    }

    for(let i = 0; i < nums.length; i++) {
        console.log(nums);
        const n = nums.shift();
        const perms = permute(nums);

        for(let perm of perms){
            perm.push(n);
            result.push(perm);
        }
        console.log(result);
        nums.push(n);
    }

    return result;

};