/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    paragraph = paragraph.replace(/[^\sa-zA-z]/g,' ');
    
    let freqWord = ["",0];
    let arr = paragraph.split(/\s+/g);
    let freqMap = new Map();

    for(let el of arr){
        let word = el.toLowerCase();
        if(banned.includes(word)){ continue; }
        freqMap.set( word, (freqMap.get(word)|0) + 1);
        if(freqMap.get(word) > freqWord[1]){
            freqWord = [word, freqMap.get(word)];
        }
    }
    
    return freqWord[0];
};
