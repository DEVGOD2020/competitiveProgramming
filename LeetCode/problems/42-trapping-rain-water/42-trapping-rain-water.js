/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let DP = Array.from(
        {length:height.length},()=>new Array(2).fill(0)
    );

    for(let L = 0; L<height.length; L++){
        DP[L][0] = Math.max(height[L-1]??0,DP[L-1]?.[0]??0);
    }
    for(let R = height.length-1; R>=0; R--){
        DP[R][1] = Math.max(height[R+1]??0,DP[R+1]?.[1]??0);
    }

    let score = 0;
    for(let I = 0; I<height.length; I++){
        score += Math.max(0, Math.min(DP[I][0],DP[I][1])-height[I] );
    }

    return score;
};