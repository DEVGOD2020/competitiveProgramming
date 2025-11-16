/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const MOD = 10**9 + 7;
    return s.split("0").reduce( 
        (sum,el)=>sum = (sum+(el.length/2)*(el.length+1))%MOD, 0
    )%MOD;
};
