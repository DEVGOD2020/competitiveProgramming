/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let totalSum = _.sumBy(nums);
    if(totalSum%2 === 1){return false;}
    
    let dp = Array.from(
        {length:nums.length}, 
        ()=> new Array(totalSum/2).fill(null)
    );

    let blah = function(I=0,left=0){
        if(left == totalSum/2){
            return true;
        }

        if(left > totalSum/2 || I>=nums.length){
            return false;
        }

        if( dp[I][left] !== null){
            return dp[I][left];
        }
        
        let addLeft = blah(I+1,left+nums[I]);
        let addRight = blah(I+1,left);

        dp[I][left] = addLeft || addRight;

        return dp[I][left];
    }

    return blah();
};