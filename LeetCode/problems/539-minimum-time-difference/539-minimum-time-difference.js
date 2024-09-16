/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let times = [];
    for(let time of timePoints){
        let hour = parseInt(time.split(":")[0]);
        let minute = parseInt(time.split(":")[1]);
        times.push(hour*60+minute);
    }

    times = _.sortBy(times);

    let min = Infinity;
    for(let I = 1; I<timePoints.length; I++){
        min = Math.min(min, times[I]-times[I-1]);
    }

    return Math.min( min, 1440 - times[times.length-1] + times[0]);
};