/**
 * @param {number[]} skill
 * @param {number[]} mana
 * @return {number}
 */
var minTime = function(skill, mana) {
    let dp = new Array(skill.length+1).fill(0);

    for(let A = 0; A<2; A++){
        for(let I = 0; I<skill.length; I++){
            dp[I+1] = Math.max(dp[I+1],dp[I]) + mana[A]*skill[I];
        }
        for(let I = skill.length-1; I>0; I--){
            dp[I] = dp[I+1] - mana[A]*skill[I];
        }
    }

    return dp[dp.length-1];
};
