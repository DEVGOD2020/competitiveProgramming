/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let words = text.split(" ");

    let ans = [];
    
    for(let I = 2; I<words.length; I++){
        if( words[I-2] == first && words[I-1] == second){
            ans.push(words[I]);
        }
    }

    return ans;
};
