/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const MOD = 1e9 + 7;
    const N = complexity.length;
    let blah = 0;
    for(let I=1; I<N; I++){
        if( complexity[I] <= complexity[0]){
            return 0;
        }
    }

    let score = 1;
    for(let I = 2; I<N; I++){
        score = (score*I)%MOD;
    }
    return score % MOD;
};
