/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let ball = 0;
    let path = 1;
    for(let I = 0; I<k; I++){
        if(ball === n-1 || ball === 0 && I !== 0){
            path = -path;
        }
        ball += path;
    }
    return ball;
};