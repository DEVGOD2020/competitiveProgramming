/**
 * @param {number} n
 * @return {number}
 */

var genArray = function(n){
    let nums = [];
    nums[0] = 0;
    nums[1] = 1;

    let I = 1;
    while(2*I+1 <= n){
        nums[2*I] = nums[I];
        nums[2*I+1] = nums[I]+nums[I+1];
        I++;
    }

    return nums;
}
var getMaximumGeneratedOld = function(n) {
    if(n==0){return 0;}
    return Math.max(...genArray(n));
};

//Actually using DP
//Find value at n
var getMaximumGenerated = function(n, ans=[0,1]) {
    if(ans[n] !== undefined){
        return ans[n];
    }
    
    else if(n%2 === 1){
        if( ans[Math.floor(n/2)] === undefined ){
            ans[Math.floor(n/2)] = getMaximumGenerated(Math.floor(n/2), ans);
        }
        if( ans[Math.floor(n/2)+1] === undefined ){
            ans[Math.floor(n/2)+1] = getMaximumGenerated(Math.floor(n/2)+1, ans);
        }
        ans[n] = ans[Math.floor(n/2)]+ans[Math.floor(n/2)+1];
    }else{
        if( ans[Math.floor(n/2)] === undefined ){
            ans[Math.floor(n/2)] = getMaximumGenerated(Math.floor(n/2), ans);
        }
        ans[n] = ans[Math.floor(n/2)];
    }

    return ans[n];
};