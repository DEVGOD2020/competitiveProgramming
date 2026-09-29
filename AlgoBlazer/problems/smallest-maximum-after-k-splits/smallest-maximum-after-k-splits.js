function smallestMaxAfterSplits(nums, k) {
    let L = 1;
    let R = Math.max(...nums);
    let M = 0;
    let check = function(M){
        let score = 0;
        for(let num of nums){
            score += Math.floor( (num-1)/M );
        }
        return score <= k;
    }
    while(L<R){
        M = Math.floor( (L+R)/2 );
        if(!check(M)){
            L = M+1;
        }else{
            R = M;
        }
    }
    return L;
}
