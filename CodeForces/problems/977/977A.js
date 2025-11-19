const input = require('fs').readFileSync(0,'utf8').trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);

while(B>0){
  if(A%10 === 0){ A = Math.floor(A/10);  }
  else{ A--; }
  B--;
}

console.log(A);
