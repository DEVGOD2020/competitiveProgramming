/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let myMap = new Map();
    for(let chr of s){
        if(!myMap.has(chr)){
            myMap.set(chr,0);
        }
        myMap.set(chr, myMap.get(chr)+1);
    }

    let oddCount = 0;
    for(let val of myMap.values()){
        if(val%2 == 1){
            oddCount++;
        }
    }

    if(oddCount == 0){return s.length;}
    
    return s.length-(oddCount-1);
};
