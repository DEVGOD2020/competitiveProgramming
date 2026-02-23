/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let freqMap = new Map();
    for(let chr of s){
        freqMap.set( chr, (freqMap.get(chr)|0) + 1);
    }
    let keys = [...freqMap.keys()].sort();
    
    let ans = "";
    let LEN = s.length;
    while(LEN > 0){
        for(let L = 0; L<keys.length; L++){
            if( freqMap.get(keys[L]) > 0){
                freqMap.set(keys[L], freqMap.get(keys[L])-1);
                ans += keys[L];
                LEN--;
            }
        }

        for(let R = keys.length-1; R>=0; R--){
            if( freqMap.get(keys[R]) > 0){
                freqMap.set(keys[R], freqMap.get(keys[R])-1);
                ans += keys[R];
                LEN--;
            }
        }
    }

    return ans;
};
