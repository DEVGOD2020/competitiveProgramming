/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const jobsQueue = new PriorityQueue({
        compare: (e1, e2) => {
            if (e1.d < e2.d) return -1;
            if (e1.d > e2.d) return 1;
            return e1.p < e2.p ? 1 : -1;
        }
    });

    for(let I in difficulty){
        jobsQueue.enqueue({'d': difficulty[I], 'p': profit[I]});
    }
    worker.sort(function(a,b){return a-b;});

    let diff = 0;
    let maxProfit = 0;
    let score = 0;
    for(work of worker){
        while( !jobsQueue.isEmpty() && work >= jobsQueue.front().d){
            let job = jobsQueue.dequeue();
            maxProfit = Math.max(maxProfit,job.p);
        }
        score += maxProfit;
    }

    return score;
};