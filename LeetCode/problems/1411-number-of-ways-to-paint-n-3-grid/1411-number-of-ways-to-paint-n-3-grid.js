/**
 * @param {number} n
 * @return {number}
 */
var numOfWays = function(n) {
    //https://oeis.org/A052913
    const MOD = 1e9+7;
    let prev = 1;
    let curr = 4;

    for(let I = 1; I<n; I++){
        [prev,curr] = [curr, ((5*curr)%MOD - (2*prev)%MOD + MOD)%MOD ];
    }

    return (3*curr)%MOD
};
