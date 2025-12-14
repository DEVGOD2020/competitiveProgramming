let blah = 600851475143;

function isPrime(n){
    if(n%2 == 0){
        return false;
    }

    for(let I = 2; I<n; I++){
        if(n%I == 0){
            return false;
        }
    }
    return true;
}

for(let A = Math.ceil(Math.sqrt(blah)); A>2; A--){
    if(blah%A==0 && isPrime(A)){
        console.log( A );
        break;
    }
}

