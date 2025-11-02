let input = require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/);

let T = Number(input[0]);

let A = 0;
let B = 0;
let C = 0;

for(let t = 1; t<=T; t++){
  let arr = input[t].split(" ").map( (el)=> Number(el) );
  A += arr[0];
  B += arr[1];
  C += arr[2];
}

if( A == 0 && B == 0 && C == 0){
  console.log("YES");
}else{
  console.log("NO");
}
