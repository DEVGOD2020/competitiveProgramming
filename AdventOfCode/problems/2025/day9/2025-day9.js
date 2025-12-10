let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/)
.map( 
  (el)=> el.split(",").map( (col)=> Number(col) ) 
)

let area = (A,B)=> ( Math.abs(input[A][0]-input[B][0])+1 ) * ( Math.abs(input[A][1]-input[B][1])+1 );

let score = 0;
for(let A = 0; A<input.length-1; A++){
  for(let B = A+1; B<input.length; B++){
    score = Math.max(score, area(A,B) );
  }
}

console.log(score);


