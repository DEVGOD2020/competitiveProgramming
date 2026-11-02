function fewestPairsWithinCapacity(values, capacity) {
    values.sort((a,b)=>a-b);
    let L = 0
    let R = values.length-1;
    let ans = 0;
    while(L<=R){
        if( (L<R) && (values[L]+values[R] <= capacity) ){
            L++;
        }
        R--;
        ans++;
    }
    return ans;
}