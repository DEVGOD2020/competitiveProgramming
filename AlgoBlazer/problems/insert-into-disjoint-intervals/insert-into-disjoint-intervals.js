function insertIntoDisjointIntervals(intervals, newInterval) {
    let ans = [];
    let curr = [...newInterval];
    for (let I = 0; I < intervals.length; I++) {
        let [S, E] = intervals[I];
        if(S > curr[1]){
            ans.push(curr);
            curr = [];
            ans.push([S, E]);
        }
        else if (newInterval[0] <= E && S <= newInterval[1]){
            curr = [ 
                Math.min(curr[0],S), 
                Math.max(curr[1],E)
            ];
        } else {
            ans.push([S, E]);
        }
    }
    if(curr.length > 0){ans.push(curr);}
    return ans;
}
