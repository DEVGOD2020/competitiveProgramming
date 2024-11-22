/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function(logs) {
    let freqMap = new Map();
    for(let log of logs){
        freqMap.set(log[0], (freqMap.get(log[0])||0)+1);
        freqMap.set(log[1], (freqMap.get(log[1])||0)-1);
    }

    let sortedMap = _.sortBy(Array.from(freqMap.entries()));

    let popu = 0;
    let max = 0;
    let maxYear = 0;
    for(let freq of sortedMap){
        popu += freq[1];
        if(popu > max){
            max = popu;
            maxYear = freq[0];
        }
    }

    return maxYear;
};