/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    let ans = new Set();

    let freqMap2 = new Map();

    for(let word of words2){
        let count = _.countBy(word);
        for(let chr of [...new Set(word)] ){
            freqMap2.set(chr, Math.max(freqMap2.get(chr)||0, count[chr]) );
        }
    }

    freqMap2 = _.toPairs(freqMap2);

    for(let word of words1){
        let freqMap = _.countBy(word);
        if( freqMap2.every( ([key,val])=> val <= freqMap[key] ) ){
            ans.add(word);
        }
    }
    return [...ans];
};