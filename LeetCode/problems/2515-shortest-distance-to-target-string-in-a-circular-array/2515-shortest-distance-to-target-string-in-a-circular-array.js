/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    let ans = 101;
    for(let I = 0; I<words.length; I++){
        if(words[I] == target){
            ans = Math.min(ans, 
            Math.abs(startIndex-I), 
            words.length-Math.abs(startIndex-I));
        }
    }
    return ans==101?-1:ans;
};
