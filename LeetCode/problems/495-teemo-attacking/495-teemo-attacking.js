/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if(timeSeries.length == 0){
        return 0;
    }   
    let total = 0;
    for(let I = 1; I<timeSeries.length; I++){
        total += Math.min(duration, timeSeries[I]-timeSeries[I-1]);
    }
    return total+duration;
};
