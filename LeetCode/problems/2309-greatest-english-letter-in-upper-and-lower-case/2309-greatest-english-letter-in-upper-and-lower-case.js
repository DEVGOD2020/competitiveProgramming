/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let mySet = new Set();
    for(let chr of s){
        if(chr.charCodeAt(0) >= 97 && chr.charCodeAt(0) < 97+26){
            mySet.add(chr);
        }
    }
    let ans = "";
    for(let chr of s){
        if(chr.charCodeAt(0) >= 65 && chr.charCodeAt(0) < 65+26){
            if(mySet.has(chr.toLowerCase())){
                if(chr > ans){
                    ans = chr;
                }
            }
        }
    }
    return ans;
};