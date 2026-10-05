function survivingLabel(order) {
    let A = [];
    let B = [];
    for(let I = 0; I<order.length; I++){
        if(order[I]=="A"){A.push(I);}else{B.push(I);}
    }
    while(A.length && B.length){
        if(A.length == 0){return "B";}
        if(B.length == 0){return "A";}
        if(A[0] < B[0]){
            let curr = A.shift();
            B.shift();
            A.push(curr+order.length);
        }else{
            let curr = B.shift();
            A.shift();
            B.push(curr+order.length);
        }
    }

    return A.length ? "A" : "B";
}