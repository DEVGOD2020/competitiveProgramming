/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const N = nums.length-1;
    let L = 0;
    let R = N;
    while(L<R){
        let M = Math.floor((L+R)/2);
        if(nums[M] >= nums[R]){L = M+1;}
        else{R = M;}
    }
    return nums[L];
};
