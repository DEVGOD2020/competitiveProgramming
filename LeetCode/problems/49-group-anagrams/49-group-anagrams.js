/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    for(let str of strs){
        const str2 = str.split("").sort().join();
        if(hash[str2] !== undefined){ hash[str2].push(str); }
        else{hash[str2] = [str];}
    }

    return Object.values(hash);
};