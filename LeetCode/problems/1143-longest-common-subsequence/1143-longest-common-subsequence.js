/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let DP = Array.from(
        {length:text1.length}, 
        ()=> new Array(text2.length).fill(0)
    )

    let score = 0;
    for(let X = 0; X<text1.length; X++){
        for(let Y = 0; Y<text2.length; Y++){
            if(text1[X] === text2[Y]){
                DP[X][Y] = ( DP[X-1]?.[Y-1] | 0 )+1;
            }else{
                DP[X][Y] = Math.max(DP[X-1]?.[Y]|0,DP[X][Y-1]|0)
            }
            score = Math.max(DP[X][Y], score);
        }
    }

    return score;

};