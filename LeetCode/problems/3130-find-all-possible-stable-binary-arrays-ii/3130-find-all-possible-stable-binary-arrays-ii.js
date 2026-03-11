/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1000000007n;
    const N = zero+one;

    const fact = Array(N + 1).fill(1n);
    const invFact = Array(N + 1).fill(1n);

    for (let i = 1; i <= N; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    function modPow(base, exp, mod) {
        let result = 1n;
        base = base % mod;
        while (exp > 0n) {
            if (exp % 2n === 1n) result = (result * base) % mod;
            base = (base * base) % mod;
            exp = exp / 2n;
        }
        return result;
    }

    invFact[N] = modPow(fact[N], MOD - 2n, MOD);
    for (let i = N - 1; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
    }

    function nCr(n, k) {
        if (k < 0 || k > n) return 0n;
        return BigInt( 
            ((fact[n] * invFact[k] % MOD) * invFact[n - k]) % MOD
        );
    }

    let f = function(n,k,l){
        let score = 0n;
        for(let I = 0; I<=k; I++){
            let A = nCr(k,I);
            let B = nCr( (n-I*l-1), k-1);
            let val = ( (I%2==1)?-1n:1n)*A*B;
            score += ( ( val % MOD) + MOD )%MOD;
        }
        return score%MOD;
    }

    let score = 0n;
    for(let A = Math.ceil(zero/limit); A<=zero; A++){
        for(let B = Math.ceil(one/limit); B<=one; B++){
            if( Math.abs(A-B) <= 1){
                let val = (f(zero,A,limit)*f(one,B,limit)) %MOD;
                score = (score + ((A==B)?2n*val:val) )%MOD;
            }
        }
    }

    return Number(score%MOD);
};
