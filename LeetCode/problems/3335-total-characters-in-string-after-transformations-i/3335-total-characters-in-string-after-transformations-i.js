/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    let mod = 1e9 + 7;

    let memo = new Map();
    let blah = function(I){
        if(I<26){
            return 1;
        }
        if(memo.has(I)){
            return memo.get(I);
        }
        
        memo.set(I, (blah( I-26) + blah( I-25 )) % mod);
        return memo.get(I);
    }

    let ans = 0;
    let count = _.countBy(s);
    for(let [key,val] of Object.entries(count) ){
        let ID = key.charCodeAt(0) - 97;
        ans = (ans + val*blah(ID + t) )%mod;
    }

    return ans;
};