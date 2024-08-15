/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
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
