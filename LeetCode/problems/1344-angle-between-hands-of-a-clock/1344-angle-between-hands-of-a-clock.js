/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let A = 30*hour+30*(minutes/60);
    let B = 360*(minutes/60);
    return Math.min( Math.abs(A-B),360-Math.abs(A-B));
};