/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */



var nonSpecialCount = function(l, r) {
    let distance = r-l+1;

    function sieve_of_eratosthenes(n) {
        let is_prime = new Array(n + 1).fill(true);
        is_prime[0] = is_prime[1] = false;

        for (let p = 2; p * p <= n; p++) {
            if (is_prime[p]) {
                for (let i = p * p; i <= n; i += p) {
                    is_prime[i] = false;
                }
            }
        }

        return is_prime;
    }

    let arr = sieve_of_eratosthenes(Math.floor(Math.sqrt(r)));
    let I = 2;
    while(I**2<=r){
        if(arr[I]){
            if(I**2 >= l && I**2 <= r){
                distance += -1;
            }
        }
        I++;
    }

    return distance;
};