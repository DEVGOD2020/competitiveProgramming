/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let roadMap = new Map();

    for(let road of roads){
        roadMap.set( road[0], (roadMap.get(road[0])|0) +1 );
        roadMap.set( road[1], (roadMap.get(road[1])|0) +1 );
    }

    let sortedRoadMap = new Map([...roadMap.entries()].sort(
        (a, b) => a[1] - b[1])
    );

    console.log(sortedRoadMap);

    let score = 0;
    let level = 1;
    for(let el of sortedRoadMap){
        score += el[1]*level;
        level++;
    }

    return score;
};