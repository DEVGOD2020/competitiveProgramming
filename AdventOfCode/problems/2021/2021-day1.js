let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/).map( (el)=>Number(el) );

let part1 = function(){
  let score = 0;
  for(let I = 1; I<input.length; I++){
    if(input[I-1] < input[I]){
      score++;
    }
  }
  return score;
}

let part2 = function(){
  let score = 0;
  for(let I = 3; I<input.length; I++){
    if(input[I-3]+input[I-2]+input[I-1] < input[I-2]+input[I-1]+input[I] ){
      score++;
    }
  }
  return score;
}

console.log( part1() );
console.log( part2() );

