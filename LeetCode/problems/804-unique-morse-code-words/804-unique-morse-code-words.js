/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const cipher = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    let stringToMorse = function(word){
        let str = "";
        for(let chr of word){
            str += cipher[chr.charCodeAt(0)-97];
        }
        return str;
    }

    let mySet = new Set();
    for(let word of words){
        let morseWord = stringToMorse(word);
        mySet.add(morseWord);
    }

    return mySet.size;
};