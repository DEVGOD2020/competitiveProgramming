/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function(n) {
    const MOD = 1e9 + 7;
    let primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];

    let A = 0;
    for (let p of primes) {
        if(p <= n){A++;}
    }

    let res = 1;
    for(let I = 2; I<=A; I++){
        res = (res*I)%MOD;
    }
    for(let I = 2; I<=(n-A); I++){
        res = (res*I)%MOD;
    }

    return res%MOD;
};
