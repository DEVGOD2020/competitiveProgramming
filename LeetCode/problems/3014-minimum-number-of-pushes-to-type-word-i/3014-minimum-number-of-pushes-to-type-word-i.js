/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    if(word.length <= 8){return word.length;}
    if(word.length <= 16){return 8 + (word.length-8)*2;}
    if(word.length <= 24){return 8 + 16 + (word.length-16)*3;}
    return 8 + 16 + 24 + (word.length-24)*4;
};