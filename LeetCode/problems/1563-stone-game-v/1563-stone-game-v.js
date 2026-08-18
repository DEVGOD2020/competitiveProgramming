/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    let dp = Array.from({length:stoneValue.length}, ()=> new Array(stoneValue.length).fill(0));

    let sum = new Array(stoneValue.length+1).fill(0);
    for(let I = 0; I<stoneValue.length; I++){
        sum[I+1] = sum[I]+stoneValue[I];
        dp[I][I+1] = Math.min(stoneValue[I],stoneValue[I+1]);
    }
    let DP = function(L,R){
        if(L>=R || L>stoneValue.length || R>stoneValue.length){
            return 0;
        }
        if(dp[L][R] !== 0){
            return dp[L][R];
        }
        let max = 0;
        for(let I = L+1; I<=R; I++){
            let left = sum[I]-sum[L];
            let right = sum[R+1]-sum[I];
            if(left > right){
                max = Math.max(max, right + DP(I,R));
                continue;
            }
            if(left < right){
                max = Math.max(max, left + DP(L,I-1));
                continue;
            }
            max = Math.max(max, left + DP(L,I-1));
            max = Math.max(max, right + DP(I,R));
        }
        dp[L][R] = max;
        return max;
    }
    return DP(0,stoneValue.length-1);
};