/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    if(n==1 && k==1){return 1;}
    let I = n-1;
    let score = 1;
    while(n/I > 1){
        if(n%I == 0){
            score++;
        }
        if(score == k){
            return n/I;
        }
        I+= -1;
    }
    return -1;
};