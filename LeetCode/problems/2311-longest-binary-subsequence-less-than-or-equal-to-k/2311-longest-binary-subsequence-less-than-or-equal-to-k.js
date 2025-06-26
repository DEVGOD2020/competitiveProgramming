/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let count = 0;
    let score = 0;
    for(let I = 0; I<s.length; I++){
        if(s[s.length-1-I] == "1"){
            if( I < 31 && score + (1 << I ) <= k){
                score += 1 << I;
                count++;
            }
        }else{
            count++;
        }
    }

    return count;
};
