/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let map = new Map();
    let score = 0;
    for(let song of hours){
        score += map.get((24-song%24)%24)|0;
        map.set( song%24, (map.get(song%24)|0) +1)
    }
    console.log(map);
    return score;
};