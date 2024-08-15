/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if(nums.length == 1){return true;}

    var isInc = function(nums, size){
        let I = 0;
        while(I<size){
            if(nums[I] >= nums[I+1]){I++;}else{return false;}
        }
        return true;
    }

    var isDec = function(nums, size){
        let I = 0;
        while(I<size){
            if(nums[I] <= nums[I+1]){I++;}else{return false;}
        }
        return true;
    }

    return isInc(nums, nums.length-1) || isDec(nums, nums.length-1);
};