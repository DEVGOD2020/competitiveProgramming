/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    let shiftEvents = new Array(s.length).fill(0);
    for(let [L,R,D] of shifts){
        shiftEvents[L] = shiftEvents[L] + (D === 1 ? 1 : -1);
        shiftEvents[R+1] = shiftEvents[R+1] - (D === 1 ? 1 : -1);
    }

    let prefix = 0;
    
    let ans = "";
    for(let I in s){
        prefix += shiftEvents[I];
        ans +=
            String.fromCharCode(
                ((s[I].charCodeAt(0)-97) + (((prefix%26)+26)%26) )%26 + 97
            );
    }

    return ans;
};