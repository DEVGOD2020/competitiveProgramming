/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let state = groups[0];
    let ans = [words[0]];
    for(let I = 1; I<words.length; I++){
        if(state !== groups[I]){
            ans.push(words[I]);
            state = groups[I];
        }
    }

    return ans;
};