/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let line = new Array(102).fill(0);
    for(num of nums){
        line[num[0]]++;
        line[num[1]+1] += -1;
    }

    let max = 0;
    let cars = 0;
    let points = 0;
    for(let I = 1; I<102; I++){
        cars += line[I];
        if(cars !== 0){
            points++;
        }
    }
    return points;
};