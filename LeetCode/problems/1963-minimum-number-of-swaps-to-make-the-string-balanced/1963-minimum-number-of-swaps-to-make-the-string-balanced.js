/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let score = 0;
    for(char of s){
        if(char == "["){
            score++;
        }else{
            if(score > 0){
                score--;
            }
        }
    }

    return Math.ceil(score/2);
};