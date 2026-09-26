function canBalanceWildcards(s) {
    let A = 0;
    let B = 0;
    for(let chr of s){
        if(chr == "("){A++; B++;}
        if(chr == "*"){A--; B++;}
        if(chr == ")"){A--; B--;}
        if(B < 0){return false;}
        if(A<0){A=0;}
    }
    return A == 0;
}
