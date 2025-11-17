/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const AS = (x)=>(x/2)*(x+1);
    if(n==1){return 1;}
    for(let I = 1; I<n; I++){
        if( AS(I) == AS(n)-AS(I-1)){
            return I;
        }
    }
    return -1;
};
