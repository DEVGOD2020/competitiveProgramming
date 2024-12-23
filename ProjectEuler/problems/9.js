const N = 1000;

for(let A = 1; A<N; A++){
    for(let B = A+1; B<N; B++){
        for(let C = B+1; C<N; C++){
            if( (A**2 + B**2) === C**2){
                if(A+B+C === N){
                    console.log(A,B,C);
                    console.log(A*B*C);
                    break;
                }
            }
        }
    }
}