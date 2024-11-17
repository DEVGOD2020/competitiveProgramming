/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
    let L = 1;
    let R = Math.max(...quantities);
    let M;
    let val;
    while(L<=R){
        M = Math.floor( (L+R)/2 );
        val = quantities.reduce((sum, cur) => sum + Math.ceil(cur / M), 0);
        console.log(L,M,R,val);
        if(val > n){
            L = M+1;
        }
        else{
            R = M-1;
        }
    }
    return L;
};