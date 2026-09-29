function balancedBracketStrings(n) {
    let arr = [];
    let backtrack = function(s="",score=0){
    if(s.length == n*2 && score == 0){arr.push(s); return 0;}
    if(score < 0){return 0;}
    if(s.length >= n*2){return 0;}
        backtrack(s+"(",score+1);
        backtrack(s+")",score-1);
    }

    backtrack();
    return arr;
}
