function repeatedMaxPickTotal(counts, k) {
    let L = 0;
    let R = Math.max(...counts);
    while(L<R){
        let M = Math.floor( (L+R)/2 );
        let Z = 0;
        for(let C of counts){
            if(C > M ){
                Z += (C-M);
            }
        }
        if(Z>=k){
            L = M+1;
        }else{
            R = M;
        }
    }

    let score = 0;
    for(let C of counts){
        //score += ()
    }

    console.log(L);
}