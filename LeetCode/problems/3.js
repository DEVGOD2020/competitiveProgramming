/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let L = 0;

    let myMap = new Map();
    myMap.set(s[L],0);

    let max = 0;
    for(let R=0; R<s.length; R++){
        if(!myMap.has(s[R])){
            myMap.set(s[R],0);
        }
        myMap.set(s[R], myMap.get(s[R])+1);
        while(myMap.get(s[R]) > 1 && L < R){
            myMap.set(s[L], myMap.get(s[L])-1);
            L++;
        }
        max = Math.max(max,R-L+1);
    }

    return max;
};