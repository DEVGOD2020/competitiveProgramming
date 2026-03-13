/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {
    let check = function(T){
        T = Number(T);
        let sum = 0;
        for(let A of workerTimes){
            sum += Math.floor( 
                (Math.sqrt( 1 + (8*T) / A ) - 1)/2
            );
        }
        return sum >= mountainHeight;
    };

    let L = 1n;
    let R = BigInt(
        Math.floor( 
            Math.max(...workerTimes) * 
            mountainHeight*(mountainHeight+1) / 2)
    );
    let M = 0n;
    while(L<R){
        M = (L+R) >> 1n;
        if( check(M) ){R = M;}
        else{L=M+1n;}
    }

    return Number(R);
};
