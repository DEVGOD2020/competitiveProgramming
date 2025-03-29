/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    let primeSet = new Set([2,3,5,7,11,13,17,19]);

    let bitCountPrime = function(val){
        let score = 0;
        while(val > 0){
            score += (val&1);
            val >>= 1;
        }
        return primeSet.has(score);
    }

    let ans = 0;
    while(left<=right){
        if(bitCountPrime(left)){
            ans++;
        }
        left++;
    }
    
    return ans;
};