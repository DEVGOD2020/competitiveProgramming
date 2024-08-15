/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals[intervals.length] = newInterval;
    let newArr = [];
    intervals.sort((a,b)=>a[0]-b[0]);

    for(let interval of intervals){

        if(newArr[0] === undefined || newArr[newArr.length-1][1] < interval[0]){
            newArr.push(interval);
        }else{
            newArr[newArr.length-1][1] = Math.max(newArr[newArr.length-1][1],interval[1])
        }
        
    }

    return newArr;
};