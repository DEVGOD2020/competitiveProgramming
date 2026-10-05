function countCoveringIntervals(intervals, queries) {
    let lineSweep = [];
    for(let [start,end] of intervals){
        lineSweep.push([start,1]);
        lineSweep.push([end+1,-1]);
    }

    lineSweep.sort( (a,b)=> a[0]-b[0]);

    queries = queries.map( (el,I)=>[el,I] );
    queries.sort( (a,b)=>a[0]-b[0]);

    let ans = [];
    let score = 0;
    let Z = 0;
    for(let [Q,I] of queries){
        while(Z < lineSweep.length && lineSweep[Z][0] <= Q ){
            score += lineSweep[Z][1];
            Z++;
        }
        ans[I] = score;
    }
    return ans;
}