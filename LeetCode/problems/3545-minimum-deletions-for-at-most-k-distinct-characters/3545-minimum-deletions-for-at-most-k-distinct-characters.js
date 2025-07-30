/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minDeletion = function(s, k) {
    let d = new Set(s).size - k;
    let freqs = Object.values(_.countBy(s)).sort((a,b)=>a-b);
    let ans = 0;
    for(let I = 0; I<freqs.length && d>0; I++){
        ans += freqs[I];
        d--;
    }
    return ans;
};
