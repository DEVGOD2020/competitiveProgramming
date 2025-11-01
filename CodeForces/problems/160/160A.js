const input = require('fs').readFileSync(0,'utf8').split(/\r?\n/);
const arr = input[1].split(" ").map( (el)=> Number(el) );
arr.sort( (a,b)=>b-a);

let I = 1;
let sum = arr.reduce( (sum,el)=>sum+el);
let score = 0;

for(let num of arr){
  sum += -num;
  score += num;
  if(score > sum){
    console.log(I);
    break;
  }
  I++;
}
