/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let I = 0;
    let ans = [];
    const size = nums.length;
    const bSize = 2**size;
    while(I < bSize){
        let arr = [];
        for(let A = 0; A<size; A++){
            if( (I>>A)&1 == 1){
                arr.push(nums[A]);
            }
        }
        ans.push(arr);
        I++;
    }

    return ans;
};