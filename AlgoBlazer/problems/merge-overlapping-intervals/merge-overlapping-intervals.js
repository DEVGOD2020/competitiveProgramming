function mergeIntervals(intervals) {
    intervals.sort( (a,b)=>a[0]-b[0]);

    let curr = intervals[0];

    let ans = [];
    for(let I = 1; I<intervals.length; I++){
        let [S,E] = intervals[I];
        if(curr[1] < S){
            ans.push(curr);
            curr = intervals[I];
        }else{
            curr[1] = Math.max(curr[1],E);
        }
    }
    ans.push(curr);
    return ans;
}
