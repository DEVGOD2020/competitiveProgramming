/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let myMap = new Map();
    if(s.split(" ").length !== pattern.length){
        return false;
    }
    if(new Set(pattern).size !== new Set(s.split(" ")).size){
        return false;
    }
    for(let I in pattern){
        let key = pattern[I];
        let val = s.split(" ")[I];
        if(myMap.has(key) && myMap.get(key) !== val){
            return false;
        }
        myMap.set(key,val);
    }
    return true;
};