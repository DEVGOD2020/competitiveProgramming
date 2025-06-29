/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let blah = new Map();
    for(let s of strs){
        let key = s.split("").sort().join("");
        if(!blah.has(key)){ blah.set(key,[]); }
        blah.get(key).push(s);
    }
    return [...blah.values()];
};
