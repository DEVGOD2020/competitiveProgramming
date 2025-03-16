/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function(nums, k) {
    let validCapa = function(target){
        let robbed = 0;
        for(let I = 0; I<nums.length; I++){
            if(nums[I] <= target){
                robbed++;
                I++;
            }
        }
        return robbed >= k;
    }

    let L = Math.min(...nums);
    let R = Math.max(...nums);
    let M = Math.floor( (L+R)/2);
    while(L<R){
        M = Math.floor( (L+R)/2);
        
        if(validCapa(M)){
            R = M;
        }else{
            L = M+1;
        }
    }

    return L;
};