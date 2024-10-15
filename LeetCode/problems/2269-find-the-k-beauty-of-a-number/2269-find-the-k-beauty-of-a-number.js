/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let L = 0;
    let score = 0;

    for(let R=k; R <= String(num).length; R++){
        let val = parseInt(String(num).slice(L,R)) ;
        if( num && num%val == 0 ){
            score++;
        }
        L++;
    }
    return score;
};