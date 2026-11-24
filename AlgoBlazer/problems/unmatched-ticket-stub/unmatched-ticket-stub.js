function findUnmatchedStub(ticketNumbers) {
    let ans = 0;
    for(let num of ticketNumbers){
        ans ^= num;
    }
    return ans;
}