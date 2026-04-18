/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    return Math.abs(Number(n.toString().split("").reverse().join(""))-n)
};
