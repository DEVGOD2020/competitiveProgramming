/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let a of matrix){
        if(a[0] <= target){
            if(search(a, target) > -1){
                return search(a, target);
            }
        }
        else{
            return false;
        }
    }
    return false;
};

var search = function(nums, target) {
    if(nums[0] == target){return 1;}
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