/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let ans = 0;
    for(let I = 1; I<word.length; I++){
        if( word[I-1] === word[I]){
            ans++;
        }
    }
    return ans+1;
};
