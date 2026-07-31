/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let A = 0;
    let B = 0;
    while(n>0){
        let D = n%10;
        if(B<=D){B=D}
        if(A<=D){B=A; A=D}
        n = Math.floor(n/10);
    }
    return A*B;
};