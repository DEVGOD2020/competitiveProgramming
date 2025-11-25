let input = require('fs').readFileSync(0,'utf8').split(" ").map( (el)=>Number(el) );
let A = input[0];
let B = input[1];
console.log(  (A+B-1)%12 + 1  );
