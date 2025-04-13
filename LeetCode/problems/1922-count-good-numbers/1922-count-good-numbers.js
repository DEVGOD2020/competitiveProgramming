/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function(n) {
    const mod = (10n**9n) + 7n;
    const evenSlots = BigInt( Math.ceil(n/2) );
    const oddSlots = BigInt( Math.floor(n/2) );

    let quickExpo = function(base,exp){
        let ret = 1n;
        while(exp > 0){
            if(exp % 2n === 1n){
                ret = (ret * base) % mod;
            }
            base = (base*base)%mod;
            exp = exp / 2n;
        }
        return ret;
    }

    return Number(
        (
            quickExpo(5n, evenSlots) * 
            quickExpo(4n, oddSlots)
        ) % mod
    );
};