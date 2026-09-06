function loadStaysWithinCapacity(demands, capacity) {
    let lineSweep = new Array(1001).fill(0);
    for(let [A,B,C] of demands){
        lineSweep[B] += A;
        lineSweep[C] += -A;
    }
    let level = 0;
    for(let I = 0; I<1001; I++){
        if(level > capacity){return false}
        level += lineSweep[I];
    }
    return true;
}
