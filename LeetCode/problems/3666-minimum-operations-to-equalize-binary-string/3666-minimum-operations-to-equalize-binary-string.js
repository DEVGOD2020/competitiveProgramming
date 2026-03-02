/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var minOperations = function(s, k) {
    let Z = s.split("").reduce((sum,el)=>sum + (el=="0"?1:0), 0);

    if(Z==0){return 0;}
    if(k == s.length){
        if(Z == s.length){return 1;}
        return -1;
    }

    const ONES = s.length-Z;
    const BASE = s.length - k;

    let ans = Infinity;

    if( k%2 === Z%2){
        let ops = Math.max(
            Math.ceil(Z/k),
            Math.ceil(ONES/BASE)
        );
        if(ops%2 == 0){ops++;}
        ans = Math.min(ans,ops)
    }

    if(Z%2 == 0){
        let ops = Math.max(
            Math.ceil(Z/k),
            Math.ceil(Z/BASE)
        );
        if(ops%2 == 1){ops++;}
        ans = Math.min(ans,ops)
    }

    return ans === Infinity ? -1 : ans;
};

