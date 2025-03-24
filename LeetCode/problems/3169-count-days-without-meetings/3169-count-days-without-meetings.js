/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
    let PQ = new MinPriorityQueue((el)=>el[0]);

    for(let [start,end] of meetings){
        PQ.enqueue([start,1]);
        PQ.enqueue([end+1,-1]);
    }

    let sum = 0;
    let lastLuckyDay = 0;
    let score = 0;
    while(!PQ.isEmpty()){
        let [currDay,event] = PQ.dequeue();
        //Last day of meeting free range
        if(sum === 0){
            score += currDay - lastLuckyDay;
        }
        sum += event;
        //first day of meeting free range
        if(sum === 0){
            lastLuckyDay = currDay;
        }
        
    }

    score += days-lastLuckyDay;

    return score;
};