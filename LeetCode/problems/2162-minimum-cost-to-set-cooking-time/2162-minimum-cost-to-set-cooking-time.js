/**
 * @param {number} startAt
 * @param {number} moveCost
 * @param {number} pushCost
 * @param {number} targetSeconds
 * @return {number}
 */
var minCostSetTime = function(startAt, moveCost, pushCost, targetSeconds) {
    let blahMins = Math.floor(targetSeconds/60);
    let blahSecs = targetSeconds%60;

    let nyaMins = blahMins-1;
    let nyaSecs = blahSecs+60;

    let cost = function(min, sec){
        if(min > 99 || sec > 99){return Infinity;}
        if(min < 0|| sec < 0){return Infinity;}

        let score = 0;
        let targetTime = ""+(min<=0?'':min)+""+(sec<=9&&min>0?"0"+sec:sec);

        let curChar = ""+startAt;
        for(let I = 0; I<targetTime.length; I++){
            if(targetTime[I] !== curChar){
                score += moveCost;
                curChar = targetTime[I];
                score += pushCost;
            }else{
                score += pushCost;
            }
        }
        return score;
    }

    return Math.min(cost(blahMins,blahSecs), cost(nyaMins,nyaSecs))
};