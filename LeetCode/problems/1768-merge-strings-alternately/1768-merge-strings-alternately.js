/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let L = 0;
    let R = 0;
    let myStr = "";

    while(L<word1.length || R<word2.length){
        if(L<word1.length){
            myStr += word1[L];
            L++;
        }
        if(R<word2.length){
            myStr += word2[R];
            R++;
        }
    }

    return myStr;
};