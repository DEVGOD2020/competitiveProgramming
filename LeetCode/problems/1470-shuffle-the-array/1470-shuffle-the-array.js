/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr = [];

    let I = 0;
    while(I<n){
        newArr.push(nums[I],nums[I+n]);
        I++;
    }

    return newArr;
};