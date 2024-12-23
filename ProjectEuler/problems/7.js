const N = 10001;

function isPrime(n){
    if(n%2==0){return false;}
    for(let I = 2; I<Math.floor(n/2); I++){
        if(n%I == 0){
            return false;
        }
    }
    return true;
}

let count = 1;
let num = 2;
while(count < N){
    num++;
    if(isPrime(num)){
        count++;
    }
}

console.log(num);