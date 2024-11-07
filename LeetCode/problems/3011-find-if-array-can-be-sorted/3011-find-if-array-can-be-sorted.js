/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function(nums) {
    let countBits = function(num){
        let count = 0;
        while(num>0){
            count += num&1;
            num = num >> 1;
        }
        return count;
    };

    for(let L = 0; L<nums.length-1; L++){
        for(let R = L+1; R<nums.length; R++){
            if(nums[L] > nums[R] && countBits(nums[L]) === countBits(nums[R])){
                const temp = nums[L];
                nums[L] = nums[R];
                nums[R] = temp;
            }else if(nums[L] > nums[R] && countBits(nums[L]) !== countBits(nums[R])){
                return false;
            }
        }
    }
    
    return true;
};