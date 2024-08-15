/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let altitudes = [];

    let val = 0;
    for(a of gain){
        altitudes.push(val);
        val += a;
    }
    altitudes.push(val);

    
    return Math.max(...altitudes);
    //gain.unshift(0);
    //Math.max(...gain.map(function(a,b){return gain[b]+gain[b+1]}));
    //return Math.max(...gain.map(function(a,b){return gain[b]+gain[b+1]}));
};