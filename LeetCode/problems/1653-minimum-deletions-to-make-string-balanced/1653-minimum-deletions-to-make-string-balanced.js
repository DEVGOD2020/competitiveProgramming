/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let length = s.length;
    let score = 0;
    let bCount = 0;

    for(let chr of s){
        if(chr === 'b'){
            bCount++;
        }else{
            score = Math.min(score+1,bCount);
        }
    }
    return score;
};