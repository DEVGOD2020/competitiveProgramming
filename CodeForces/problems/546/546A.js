const input = require('fs').readFileSync(0,'utf8').trim().split(" ");

const k = Number(input[0]);
const n = Number(input[1]);
const w = Number(input[2]);

const need = (k * (w/2)*(w+1)) - n;
if(need > 0){
  console.log(need);
}else{
  console.log(0);
}
