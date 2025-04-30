process.stdin.on('data', (data) => {
    let [n,k] = data.toString().trim().split(" ").map((el)=>Number(el));
    console.log(fib(n,k));
});

function fib(n,k){
    let DP = new Array(n+1).fill(1);
    let currSum = k;
    for(let I = k; I<=n; I++){
        DP[I] = currSum%(10**9);
        currSum += ( DP[I] - (DP[I-k]||0) + (10**9) ) %(10**9);
    }
    return DP[n];
}