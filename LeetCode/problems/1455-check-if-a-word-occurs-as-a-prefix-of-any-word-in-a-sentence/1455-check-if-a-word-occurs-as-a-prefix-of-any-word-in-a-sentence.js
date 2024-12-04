/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ");
    for(let I in words){
        if(words[I].startsWith(searchWord)){
            return Number(I)+1;
        }
    }
    return -1;
};