/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    let parseTime = function(time){
        return Number(time.split(":")[0])*60+Number(time.split(":")[1]);
    }

    let event1Start = parseTime(event1[0]);
    let event1End = parseTime(event1[1]);

    let event2Start = parseTime(event2[0]);
    let event2End = parseTime(event2[1]);

    return !(event1End < event2Start || event2End < event1Start);
};