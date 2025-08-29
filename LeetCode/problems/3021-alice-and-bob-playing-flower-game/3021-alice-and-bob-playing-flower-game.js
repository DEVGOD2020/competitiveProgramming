/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var flowerGame = function(n, m) {
    return Math.ceil(n/2)*Math.floor(m/2)+Math.floor(n/2)*Math.ceil(m/2);
};
