/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    let arr = [0,0,0];
    for(let stone of stones){
        arr[stone%3]++;
    }
    if(arr[0]%2 == 0){
        return arr[1]>0 && arr[2]>0;
    }
    return Math.abs(arr[1]-arr[2])>2;
};