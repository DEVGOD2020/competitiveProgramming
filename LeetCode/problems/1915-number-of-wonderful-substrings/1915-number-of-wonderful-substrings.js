/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let myMap = new Map();
    myMap.set(0,1);

    let mask = 0;
    let res = 0;
    for(let c in word){
        let val = word[c].charCodeAt(0) - 97;
        mask ^= (1 << val);

        res += myMap.get(mask) || 0;
        myMap.set(mask, (myMap.get(mask)||0)+1);

        for(let I = 0; I<10; I++){
            res += myMap.get(mask ^ (1<<I)) || 0;
        }
    }

    return res;
};
