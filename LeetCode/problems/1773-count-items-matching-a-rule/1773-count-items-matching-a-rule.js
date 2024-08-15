/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let score = 0;

    let ID = 0;
    if(ruleKey == "type"){ID = 0;}
    if(ruleKey == "color"){ID = 1;}
    if(ruleKey == "name"){ID = 2;}

    for(const item of items){
        if(item[ID] === ruleValue){score++;}
    }

    return score;
};