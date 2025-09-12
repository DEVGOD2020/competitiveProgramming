/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if(n%2 == 1){
        return _.range( -Math.floor(n/2), Math.floor(n/2)+1);
    }
    return _.compact( 
        _.range( -Math.floor(n/2), Math.floor(n/2)+1) 
    );
};
