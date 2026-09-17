function kSmallestAcross(arrays, k) {
    let HP = new MinPriorityQueue( (el)=>el[0]);

    for(let I = 0; I<arrays.length; I++){
        if(arrays[I].length >= 1){
            HP.push( [arrays[I][0], I, 0]);
        }
    }

    let ans = [];
    for(let I = 0; I<k; I++){
        let [val, row, col] = HP.pop();
        ans.push(val);
        HP.push( [arrays[row][col+1]??Infinity,row,col+1]);
    }
    return ans;
}
