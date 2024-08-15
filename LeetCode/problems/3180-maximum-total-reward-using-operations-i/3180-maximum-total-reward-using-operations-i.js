/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function(rewardValues) {
    let myMap = {};

    rewardValues.sort(function(a,b){return a-b;});
    
    for(let reward=0; reward<rewardValues.length; reward++){
        let val = rewardValues[reward]
        myMap[val] = rewardValues.slice(reward+1,rewardValues.length);
    }
};