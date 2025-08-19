/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    const as = (n)=>{return (n/2)*(n+1)}
    let score = 0;
    let ans = 0;
    for(let num of nums){
        if(num !== 0){
            ans += as(score); 
            score = 0;
        }else{
            score++;
        }
    }
    ans += as(score); 
    return ans;
};
