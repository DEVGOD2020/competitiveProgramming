/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    let size = 2**(n-2);
    function meh(n,k){
        if(n == 1){ return false; }
        SIZE = 2**(n-2);
        if(k>SIZE){
            return ~meh(n-1,k-SIZE);
        }else{
            return meh(n-1,k); 
        }
    }

    if(meh(n,k) < 0){return 1;}else{return 0;}
};