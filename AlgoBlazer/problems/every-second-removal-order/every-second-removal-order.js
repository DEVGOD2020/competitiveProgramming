function removalOrder(n) {
    let ans = [];
    let Q = new Deque();
    for(let I = 1; I<=n; I++){
        Q.pushBack(I);
    }
    let skip = true;
    while(!Q.isEmpty()){
        if(skip){
            Q.pushBack(Q.popFront());
        }else{
            ans.push(Q.popFront());
        }
        skip = !skip;
    }
    return ans;
}