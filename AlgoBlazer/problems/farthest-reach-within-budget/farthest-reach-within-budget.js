function farthestReach(costs, queries) {
    let ps = new Array(costs.length);
    ps[0] = costs[0];
    let ans = [];
    for(let I = 1; I<costs.length; I++){
        ps[I] = ps[I-1]+costs[I];
    }
    let search = function(start,target){
        let L = start;
        let R = costs.length;
        let M = 0;
        while(L<R){
            M = Math.floor( (L+R)/2 );
            if(ps[M]-(ps[start-1]??0) <= target ){
                L = M+1;
            }else{
                R = M;
            }
        }
        if(L == start && costs[L] > target){return -1}
        return L-1;
    }
    for(let [S,B] of queries){
        ans.push(search(S,B));
    }
    return ans;
}
