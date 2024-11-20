/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    let L = 0;
    let R = 0;

    let freqMap = _.countBy(s);
    if(freqMap['a'] === undefined){freqMap['a'] = 0;}
    if(freqMap['b'] === undefined){freqMap['b'] = 0;}
    if(freqMap['c'] === undefined){freqMap['c'] = 0;}

    if(freqMap['a'] < k || freqMap['b'] < k || freqMap['c'] < k){
        return -1;
    }

    let maxRange = 0;
    while(R < s.length){
        freqMap[s[R]]--;

        while( (freqMap['a'] < k || freqMap['b'] < k || freqMap['c'] < k) && L<=R){
            freqMap[s[L]]++;
            L++;
        }

        maxRange = Math.max(maxRange, R-L+1);
        R++;
    }

    return s.length-maxRange;
};