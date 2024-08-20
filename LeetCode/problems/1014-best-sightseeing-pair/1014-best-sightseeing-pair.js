/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let prevMax = values[0], max = 0;
    for(let i = 1; i < values.length; i++) {
        prevMax--;
        max = Math.max(max, prevMax + values[i]);
        prevMax = Math.max(prevMax, values[i]);
    }
    return max;
};