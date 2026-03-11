/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce( 
        (sum,el,I)=> sum + ((el<=queryTime && endTime[I]>=queryTime)?1:0),
        0
    );
};
