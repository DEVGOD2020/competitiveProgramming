/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let map = new Map();
    let score = 0;
    for(let song of time){
        score += map.get((60-song)%60)|0;
        map.set( song%60, (map.get(song%60)|0) +1)
    }
    console.log(map);
    return score;
};