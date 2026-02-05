/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    if(nums[0] >= nums[1]){ return false;}

    let blah = 0;
    for(let I = 1; I<nums.length-1; I++){
        if(nums[I] === nums[I+1]){return false;}

        if(blah == 0 && nums[I] > nums[I+1] ){
            blah++;
        }

        else if(blah == 1 && nums[I] < nums[I+1]){
            blah++;
        }

        else if (blah == 2 && nums[I] > nums[I+1]){
            return false;
        }
    }

    return blah == 2;
};
