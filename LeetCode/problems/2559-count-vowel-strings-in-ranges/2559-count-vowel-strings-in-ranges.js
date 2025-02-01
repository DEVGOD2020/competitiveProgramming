/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    let prefixSum = [];

    let prefix = 0;
    for(let word of words){
        if( 
            "aeiou".includes(word[0]) && "aeiou".includes(word[word.length-1])
        ){
            prefix++;
        }
            prefixSum.push(prefix);
    }

    let ans = [];
    for(let [L,R] of queries){
        ans.push( prefixSum[R] - (prefixSum[L-1]|0) );
    }

    return ans;
};