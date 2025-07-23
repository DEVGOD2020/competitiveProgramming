/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let score = 0;
    for(let col = 0; col<strs[0].length; col++){
        let prev = strs[0][col];
        for(let row = 1; row<strs.length; row++){
            if(prev > strs[row][col]){
                score++;
                break;
            }
            prev = strs[row][col];
        }
    }
    return score;
};
