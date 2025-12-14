let input = require('fs').readFileSync(0,'utf8').split(/\r?\n/)
.map( (row)=> row.split(/\t/).map( (el)=> Number(el) ).sort( (a,b)=>b-a) );

let part1 = function(){
  let score = 0;
  for(let line of input){
    score += line[0] - line[1];
  }
  return score; 
}

let part2 = function(){
  let score = 0;
  for(let line of input){
    
    for(let A = 0; A<line.length-1; A++){
      for(let B = A+1; B<line.length; B++){
        if( ( line[A]%line[B]) == 0){
          score += line[A]/line[B];
          break;
        }
      }
    }
    
  }
  return score;
}

console.log( part1() );
console.log( part2() );

