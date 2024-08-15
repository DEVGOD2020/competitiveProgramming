/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const Q = new MaxPriorityQueue();
    for(a of score){
        Q.enqueue(a);
    }

    let rank = 0;
    while(Q.size() > 0){
        let val = Q.dequeue()['element'];
        let index = score.indexOf(val);

        if(rank > 2){score[index] = ""+(rank+1);}
        else if(rank == 0){score[index] = "Gold Medal";}
        else if(rank == 1){score[index] = "Silver Medal";}
        else if(rank == 2){score[index] = "Bronze Medal";}
        rank += 1;
    }

    return score;
};