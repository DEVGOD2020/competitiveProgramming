/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let score = 0;
    while(start > 0 || goal > 0){
        if( (start&1) !== (goal&1) ){
            score++;
        }
        start = start >> 1;
        goal = goal >> 1;
    }
    return score;
};