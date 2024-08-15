/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let special = 0;

    for(let chr of alphabet){
        if(word.includes(chr) && word.lastIndexOf(chr) < word.indexOf(chr.toUpperCase())){
            special++;
        }
    }

    return special;
};