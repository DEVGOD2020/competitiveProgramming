function minJumpsToTarget(blocked, forward, backward, target) {
    let visit = new Set(blocked);

    let Q = [ [0,0,true] ];
    while(Q.length){
        let [curr, score, lastBack] = Q.shift();
        if(curr < 0){continue;}
        if(curr > 6000){continue;}
        if(curr == target){return score;}
        if(visit.has(curr)){continue;}
        visit.add(curr);

        if(!lastBack) Q.push( [curr-backward,score+1, true] );
        Q.push( [curr+forward,score+1, false] );
    }
    return -1;
}