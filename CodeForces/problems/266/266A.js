let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
const SIZE = Number(input[0]);
 
let score = 0;
for(let I = 0; I<SIZE-1; I++){
  if(input[1][I] == input[1][I+1]){
    score++;
  }
}
