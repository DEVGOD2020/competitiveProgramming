/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let score = 0;
    for(let A = 0; A<hours.length; A++){
        for(let B = A+1; B<hours.length; B++){
            if( (hours[A] + hours[B])%24 === 0 ){
                score++;
            }
        }
    }
    return score;
};