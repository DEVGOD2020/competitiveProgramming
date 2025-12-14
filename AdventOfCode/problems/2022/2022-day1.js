let input = require('fs').readFileSync(0,'utf8').split(/\r?\n\n/).map( (el)=> el.split(/\n/).map( (el)=> Number(el) ) );

let part1 = function(){
  let max = 0;
  for(let line of input){
    let sum = line.reduce( (sum,el)=>sum+el, 0);
    if(sum > max){max = sum;}
  }
  return max;
}

let part2 = function(){
  let maxA = 0;
  let maxB = 0;
  let maxC = 0;
  for(let line of input){
    let sum = line.reduce( (sum,el)=>sum+el, 0);
    if(sum >= maxA){maxC = maxB; maxB = maxA; maxA = sum;}
    else if(sum >= maxB){maxC = maxB; maxB = sum;}
    else if(sum >= maxC){maxC = sum;}
  }
  return maxA+maxB+maxC;
}

console.log( part1() );
console.log( part2() );


