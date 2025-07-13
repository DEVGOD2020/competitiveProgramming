/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    let ans = 0;
    let time = 0;
    for(let I = 0; I<startTime.length;I++){
        time += endTime[I]-startTime[I];
        let left = I<=k-1 ? 0 : endTime[I-k];
        let right = I === startTime.length-1 ? eventTime : startTime[I+1];
        ans = Math.max(ans, right-left-time);
        if(I >= k-1){
            time -= endTime[I-k+1] - startTime[I-k+1];
        }
    }
    return ans;
};
