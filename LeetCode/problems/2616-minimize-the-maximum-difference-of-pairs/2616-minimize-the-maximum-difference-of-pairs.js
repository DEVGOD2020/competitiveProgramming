/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    if (p === 0){ return 0;}

    nums.sort((a,b)=>a-b);

    let validPairs = function(target){
        let count = 0;
        for(let I = 0; I<nums.length-1; I++){
            if(nums[I+1] - nums[I] <= target){
                count++;
                I++;
            }
        }
        return count;
    }

    let L = 0;
    let R = nums[nums.length-1] - nums[0];
    while(L<R){
        let M = Math.floor( (L+R)/2 );
        if(validPairs(M) >= p){
            R = M;
        }else{
            L = M+1;
        }
    }

    return L;
};
