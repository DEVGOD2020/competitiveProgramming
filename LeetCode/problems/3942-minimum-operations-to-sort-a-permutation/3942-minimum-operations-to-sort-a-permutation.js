/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let test = function(t){
        let ID = 0;
        let score = 0;
        for(let I = 1; I<nums.length; I++){
            if(nums[I-1] !== nums[I]+t){score++; ID = I;}
            if(score > 1){return Infinity;}
        }
        return ID;
    }

    let ans = Infinity;
    ans = Math.min( ans, test(-1), test(1)+1 );
    nums.reverse();
    ans = Math.min( ans, test(-1)+1, test(1)+2 );

    return ans < Infinity ? ans : -1;
};