let input = require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/);

let score = 0;
let max = 0;
for(let I = 1; I<input.length; I++){
  let [exit, enter] = input[I].split(" ").map( (el)=> Number(el) );
  score += enter;
  score -= exit;
  max = Math.max(max, score);
}

console.log(max);
