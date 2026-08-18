/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    let a = _.countBy(nums);

    if(k == nums.length){
        return Math.max(...nums);
    }

    if(k > 1){
        return Math.max( 
            a[nums[0]]==1?nums[0]:-1, 
            a[nums[nums.length-1]]==1?nums[nums.length-1]:-1 
        )
    }

    for(let I = 50; I>=0; I--){
        if(a[I] == 1){
            return I;
        }
    }

    return -1
};