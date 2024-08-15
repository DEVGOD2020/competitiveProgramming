/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function(n, x) {
    let blah = BigInt(n-1);
    x = BigInt(x);
    let output = x;

    for(let I=0n; blah && I<64n; I++){
        if( !(x&(1n<<I)) ){
            output |= (blah&1n)<<I;
            blah >>= 1n;
        }
    }

    return Number(output);
};