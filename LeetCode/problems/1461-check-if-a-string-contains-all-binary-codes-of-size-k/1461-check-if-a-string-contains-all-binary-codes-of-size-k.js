/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
    let mySet = new Set();
    let state = parseInt(s.slice(0,k),2);
    mySet.add(state);
    for(let I = 0; I+k<s.length; I++){
        state <<= 1;
        state += Number(s[I+k]);
        state &= (2**k)-1;
        mySet.add(state);
    }
    return mySet.size === 2**k;
};
