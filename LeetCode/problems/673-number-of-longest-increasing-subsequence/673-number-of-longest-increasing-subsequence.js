/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumberOfLIS = function(nums) {
    let length = Array(nums.length).fill(1);
    let count = Array(nums.length).fill(1);

    for(let I=0; I<nums.length;I++){
        for(let J=0; J<I;J++){
            if(nums[J] < nums[I]){
                if(length[J]+1 > length[I]){
                    length[I] = length[J]+1;
                    count[I] = 0;
                }
                if(length[J]+1 == length[I]){
                    length[I] = length[J]+1;
                    count[I] += count[J];
                }
            }
        }
    }

    let maxCount = Math.max(length);
    let result = 0;

    for(let a in length){
        if(length[a] == maxCount ){
            result += count[a]
        }
    }

    return result;
};