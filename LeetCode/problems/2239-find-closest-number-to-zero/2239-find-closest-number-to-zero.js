/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let dist = Infinity;
    let ans = 0;
    for(let num of nums){
        if(dist >= Math.abs(num)){
            if(Math.abs(ans) != Math.abs(num)){
                ans = num;
            }
            if(ans < num){
                ans = num;
            }
            dist = Math.abs(num);
        }
    }
    return ans;
};