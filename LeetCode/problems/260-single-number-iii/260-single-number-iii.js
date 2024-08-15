/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let val = 0;
    let val2 = 0;
    for(let I = 0; I<nums.length; I++){
        val = val ^ nums[I];
    }
    val &= -val;

    let ans = [0,0];
    for(let num of nums){
        if( (num&val) === 0){
            ans[0] ^= num;
        }else{
            ans[1] ^= num;
        }
    }
    
    return ans;
};

//XOR of array = a^b;
//1100 1000

//1111 1010
//0011 0010