let data = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
 
let N = Number(data[0]);
 
let A = Math.floor(N/100);
let B = Math.floor( ( N - (A*100) ) / 20);
let C = Math.floor( ( N - (A*100) - (B*20) ) / 10);
let D = Math.floor( ( N - (A*100) - (B*20) - (C*10) ) / 5);
let E = N - (A*100) - (B*20) - (C*10) - (D*5);
 
console.log(A+B+C+D+E);
