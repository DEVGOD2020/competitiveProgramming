/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let score = 0;
    for(let A = 1; A<n; A++){
        for(let B = A+1; B<n; B++){
            let C = Math.sqrt(A**2+B**2);
            if(Number.isInteger( C ) && C <= n){
                score += 2;
            }
        }
    }
    return score;
};