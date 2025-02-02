/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function(derived) {
    let score = 0;
    for(let num of derived){
        score ^= num;
    }
    return score === 0;
};