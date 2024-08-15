/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//Binary Search
var search = function(nums, target) {
    let L = 0;
    let R = nums.length-1;
    let M = null;
    while(L<=R){
        M = Math.floor((L+R)/2);
        if(nums[M] == target){
            return M;
        }
        else if(nums[M] < target){
            L = M+1;
        }
        else{
            R = M-1;
        }
    }
    return -1;
};

//Two Pointers
var mediumSearch = function(nums, target) {
    if(nums[0] == target){return 0;}

    let L = 0;
    let R = nums.length-1;
    while(L<=R){
        if(nums[L] == target){
            return L;
        }
        if(nums[R] == target){
            return R;
        }
        L++;
        R--;
    }
    return -1;
};

//BruteForce
var easySearch = function(nums, target) {
    for(let a in nums){
        if(nums[a] == target){
            return a;
        }
    }
    return -1;
};