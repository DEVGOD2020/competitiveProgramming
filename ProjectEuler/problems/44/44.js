let isPenta = function(n){
    return (1+Math.sqrt(1 + (24*n) ))%6 == 0;
}

let penta = function(n){
    return n*(3*n-1)/2;
}

for(let A = 1; A<2500; A++){
    for(let B = A; B>0; B--){
        let C = penta(A);
        let D = penta(B);
        if( isPenta( Math.abs(C-D) ) && isPenta(C+D) ){
            console.log(A,B,C,D);
            console.log( Math.abs(C-D) );
            return Math.abs(C-D);
        }
    }
}
