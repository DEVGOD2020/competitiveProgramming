/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if(n==1){return 1;}
    let sum = (n+1)*(n/2);
    let temp = 0;

    for(let I = 0; I<n; I++){
        sum += -I;
        if(sum == temp){
            return I;
        }
        temp += I;
    }

    return -1;
};