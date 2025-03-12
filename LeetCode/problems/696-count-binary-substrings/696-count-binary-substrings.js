/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let group = [];

    let prev = 0;
    let curr = 1;
    let score = 0;
    for(let I = 0; I<s.length; I++){
        if(s[I] !== s[I+1]){
            score += Math.min(prev,curr);
            [prev,curr] = [curr,1];
        }else{
            curr += 1;
        }
    }

    return score;
};