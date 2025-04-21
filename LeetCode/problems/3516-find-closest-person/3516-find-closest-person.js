/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let xToZ = Math.abs(x-z);
    let yToZ = Math.abs(y-z);

    if(xToZ == yToZ){
        return 0;
    }
    return xToZ < yToZ ? 1 : 2;
};