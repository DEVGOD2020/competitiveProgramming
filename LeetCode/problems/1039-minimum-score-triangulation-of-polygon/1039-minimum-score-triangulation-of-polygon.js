/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    let dp = Array.from(
        { length: values.length }, 
        () => Array( values.length ).fill(0)
    );

    for(let A = values.length-2; A >= 0; A--){
        for(let C = A+2; C < values.length; C++){
            dp[A][C] = Infinity;
            for(let B = A+1; B<C; B++){
                dp[A][C] = Math.min(
                    dp[A][C], 
                    dp[A][B] + dp[B][C] + 
                    values[A]*values[B]*values[C]
                );
            }
        }
    }

    return dp[0][values.length - 1];
};
