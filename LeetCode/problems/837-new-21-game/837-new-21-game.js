/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if(k == 0 || k+maxPts <= n){return 1.0;}

    let dp = new Array(n+1).fill(0);
    dp[0] = 1.0;

    let window = 1.0;
    for(let I = 1; I<=n; I++){
        dp[I] = window/maxPts;
        if(I<k){
            window += dp[I];
        }
        if(I-maxPts >= 0){
            window += -dp[I-maxPts];
        }
    }

    return dp.reduce( (sum,el,I)=>sum+(I>=k?el:0),0 );
};
