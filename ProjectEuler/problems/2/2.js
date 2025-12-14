let fib = function(val){
   if(val == 0){
    return 1;
   }
   if(val == 1){
    return 1;
   }
   return fib(val-1) + fib(val-2);
}

let score = 0;

let I = 0;
let temp = 0;
while(temp < 4000000){
    temp = fib(I);
    score += temp%2==0 ? temp : 0;
    I++;
}

console.log(score);