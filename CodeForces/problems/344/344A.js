let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
const T = Number(input[0]);

let score = 0;
let prev = "";
for(let I = 1; I<=T; I++){
  if(prev != input[I]){
    score++;
  }
  prev = input[I];
}

console.log(score);
