/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const hash = {};
    let score = 0;

    for(let b of jewels){
        hash[b] = 0;
    }

    for(let a of stones){
        if(hash[a] !== undefined){
           hash[a]++; 
        }
    }

    for(let b of jewels){
        score += hash[b];
    }


    return score;
};