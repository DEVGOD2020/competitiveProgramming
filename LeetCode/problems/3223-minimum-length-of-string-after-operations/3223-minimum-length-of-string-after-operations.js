/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let count = _.countBy(s);

    let score = 0;
    for(let key of _.keys(count)){
        if(count[key] >= 3){
            score += count[key]%2 ? 1 : 2;
        }else{
            score += count[key];
        }
    }

    return score;
};