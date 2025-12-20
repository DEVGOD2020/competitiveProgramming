/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let score = 0;
    for(let A = 0; A<strs[0].length; A++){
        score += strs.some( 
            (el,I)=> I>0 && (strs[I-1][A] > strs[I][A]) 
        );
    }
    return score;
};
