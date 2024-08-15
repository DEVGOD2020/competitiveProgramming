/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {    

    let helper = function(amount){
        if(amount < 0){
            return Infinity;
        }

        if(amount == 0){
            return 0;
        }

        let score = Infinity;
        let currTime = sessionTime;
        for(let task of tasks){
            currTime += -task;
            if(currTime < 0){
                break;
            }
            score = Math.min(score, helper(amount - task)+1);
        }
        return score;
    }

    return helper( tasks.reduce(function(a,b){return a+b;}));
}
