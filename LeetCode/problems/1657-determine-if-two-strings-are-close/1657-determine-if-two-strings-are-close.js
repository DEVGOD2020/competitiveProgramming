/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){return false;}
    let map1 = {};
    let map2 = {};

    for(let chr of word1){
        if(map1[chr] === undefined){map1[chr] = 0;}
        map1[chr]++;
    }

    for(let chr of word2){
        if(map2[chr] === undefined){map2[chr] = 0;}
        map2[chr]++;
    }

    return _.isEqual(
        Object.keys(map1).sort(),
        Object.keys(map2).sort()) && 
        _.isEqual(
            Object.values(map1).sort(),
            Object.values(map2).sort() 
        );
};