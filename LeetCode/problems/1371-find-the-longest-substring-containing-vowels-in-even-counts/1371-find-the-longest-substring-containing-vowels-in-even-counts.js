/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    let vowels = {'a':1,"e":2,"i":4,"o":8,"u":16};
    let mask = 0;
    let myMap = new Map();
    myMap.set(0,-1);
    let res = 0;
    for(let I = 0; I<s.length; I++){
        let val = vowels[s[I]] || 0;
        mask ^= val;
        if(!myMap.has(mask)){
            myMap.set(mask,I);
        }
        res = Math.max(res, I-myMap.get(mask));
    }

    return res;
};
