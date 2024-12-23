let memo = {};
let fib = function(n){
    if(n == 1){return 1n;}
    if(n == 2){return 1n;}
    if(memo[n] !== undefined){
        return memo[n];
    }
    memo[n] = fib(n-1)+fib(n-2)
    return memo[n];
}

let bs = function(){
    let L = 3;
    let R = 5000;
    let M = Math.floor( (L+R)/2);
    while(L<=R){
        if(fib(M).toString().length < 1000){
            L = M+1;
            M = Math.floor( (L+R)/2);
        }
        else if(fib(M).toString().length >= 1000){
            R = M-1;
            M = Math.floor( (L+R)/2);
        }
    }
    return M+1;
}

console.log( bs() );