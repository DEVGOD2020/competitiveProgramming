let input = require('fs').readFileSync(0,'utf8').trim().split(/\r?\n/);

const H = Number(input[0].split(" ")[1]);

let data = input[1].split(" ").map( (el)=> Number(el) );

let score = 0;
for(let num of data){
  score += +(num>H);
  score++;
}

console.log(score);
