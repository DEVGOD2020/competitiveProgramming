/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    let L = 0;
    let R = 0;
    let ans = 0;
    let maxFreq = 0;
    while(R<s.length){
        maxFreq = Math.max(maxFreq, (map.get(s[R])|0)+1 );
        map.set(s[R], (map.get(s[R])|0)+1);
        while( (R-L+1) - maxFreq > k){
            map.set(s[L], map.get(s[L])-1 );
            L++;
        }
        ans = Math.max(ans, R-L+1);
        R++;
    }
    return ans;
};
