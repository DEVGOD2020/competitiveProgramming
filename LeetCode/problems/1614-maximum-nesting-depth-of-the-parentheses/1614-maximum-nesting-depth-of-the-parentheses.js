/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let score = 0;
    let ans = 0;
    for(let chr of s){
        if(chr=="("){score++;}
        if(chr==")"){score--;}
        ans = Math.max(score,ans);
    }
    return ans;
};
