/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let score = 0;
    for(let log of logs){
        if(log.includes("../")){
            score--;
        }
        if(!log.includes("./")){
            score++;
        }
        if(score < 0){score = 0;}
    }
    return score;
};