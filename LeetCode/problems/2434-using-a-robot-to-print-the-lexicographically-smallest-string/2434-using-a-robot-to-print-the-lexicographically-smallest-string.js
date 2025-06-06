/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    let stack = [];
    let ans = [];

    let myMap = new Map();
    for(let I = 0; I<26; I++){
        myMap.set(String.fromCharCode(I+97), 0);
    }

    for(let chr of s){
        myMap.set(chr, myMap.get(chr)+1 );
    }

    let minChr = "a";
    for(let chr of s){
        stack.push(chr);
        myMap.set(chr, myMap.get(chr)-1);
        while(minChr !== "z" && myMap.get(minChr) === 0){
            minChr = String.fromCharCode(minChr.charCodeAt(0)+1);
        }

        while(stack.length > 0 && stack[stack.length-1] <= minChr){
            ans.push(stack.pop());
        }
    }

    return ans.join("");
};
