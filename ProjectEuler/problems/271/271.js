//91 = 7*13
//130... = primes multiplied to 2...43, oeis A0040,
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43];
const TARGET = BigInt(2*3*5*7*11*13*17*19*23*29*31*37*41*43);

//Build prime cubic roots answers
let res = {};
for(let prime of primes){
  for(let I = 1; I<prime; I++){
    if( (I**3) % prime == 1){
      if(res[prime] == undefined){
        res[prime] = [];
      }
      res[prime].push(I);
    }
  }
}

//Geeks,edited always gcd = 1
function modInverse(a, m)
{
    return power(a, m - 2n, m);
}
function power(base, exp, mod)
{
    if (mod == 1n){ return 0n; }
    base = base%mod;
    
    let result = 1n;
    while(exp > 0n){
      if(exp%2n == 1n){
        result = (result*base)%mod;
        exp += -1n;
      }
      else{
        base = (base*base)%mod;
        exp = exp / 2n;
      }
    }
    
    return result;
}

//CP algos,
let chinese_remainder_theorem = function(congruences) {
    let M = 1n;
    for (let [a,m] of congruences) {
        M *= BigInt(m);
    }

    let solution = 0n;
    for (let [a,m] of congruences) {
        let a_i = BigInt(a);
        let M_i = M / BigInt(m);
        let N_i = BigInt( modInverse(M_i, BigInt(m) ) );
        solution = (solution + a_i * M_i % M * N_i) % M;
    }
    return solution;
}

//Backtrack and chinese remainder theorem
let ans = 0n;
let arr = [];
let backtrack = function(I=0){
  if(I == primes.length ){
    ans += chinese_remainder_theorem(arr) % TARGET;
    return;
  }
  if( res[primes[I]] != undefined){
    for(let num of res[ primes[I] ] ){
      arr.push( [num,primes[I]] );
      backtrack(I+1);
      arr.pop();
    }
  }else{
    backtrack(I+1);
  }
  return;
}
backtrack();

console.log( ans-1n );







