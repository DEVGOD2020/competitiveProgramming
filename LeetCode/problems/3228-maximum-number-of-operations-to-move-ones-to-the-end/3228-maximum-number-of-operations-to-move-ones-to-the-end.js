/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function(s) {
    let count = 0;
    let score = 0;
    let prev = '';
    for(let chr of s){
        if(chr == '1'){ count++;}
        else if(prev === '1'){
            score += count;
        }
        prev = chr;
    }
    return score;
};
