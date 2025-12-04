/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    return directions.replace(/^L+/,'').replace(/R+$/,'').replaceAll("S",'').length;
};

