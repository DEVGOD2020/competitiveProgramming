/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    return (high-low)%2 == 1 ? Math.ceil( (high-low) / 2) : (high-low) / 2 + low%2;
};
