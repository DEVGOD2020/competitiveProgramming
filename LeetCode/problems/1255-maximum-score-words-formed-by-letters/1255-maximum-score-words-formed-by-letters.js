/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    let myScore = 0;
    let max = 0;
    let backup = [...letters];
    for(let bitmask = 1; bitmask<(1<<words.length); bitmask++){
        myScore = 0;
        breakHere:
        for(let val = 0; val<words.length; val++){
            if( (bitmask>>val)&1 == 1){
                for(let chr of words[val]){
                    if(!letters.includes(chr)){
                        myScore = 0;
                        break breakHere;
                    }
                    myScore += score[ chr.charCodeAt(0)-97 ];
                    letters[letters.indexOf(chr)] = null;
                }
            }
        }
        letters = [...backup];
        max = Math.max(max,myScore);
    }
    return max;
};