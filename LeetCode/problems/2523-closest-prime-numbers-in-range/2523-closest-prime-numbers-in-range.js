/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    let seive = function(){
        let arr = new Array( right + 1).fill(true);
        arr[0] = false;
        arr[1] = false;
        for(let I = 2; I*I<=right; I++){
            if(arr[I]){
                for(let Z = I*I; Z<=right; Z+=I){
                    arr[Z] = false;
                }
            }
        }
        return arr;
    }

    let arr = seive();
    let primes = [];
    for(let I = left; I<=right; I++){
        if(arr[I]){
            primes.push(I);
        }
    }

    let L = 0;
    let R = 1;
    let dis = Infinity;
    let pair = [-1,-1]
    while(R<primes.length){
        if(primes[R]-primes[L] < dis){
            dis = primes[R]-primes[L];
            pair = [primes[L],primes[R]];
        }
        if(dis <= 2){
            break;
        }
        L++;
        R++;
    }

    return pair;
};