let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
const T = Number(input[0]);

let score = 0;
for(let I = 1; I<=T; I++){
  let [A,B] = input[I].split(" ").map( (el)=> Number(el) );
  if(B-A >= 2){score++;}
}

console.log(score);
