const input = require('fs').readFileSync(0,'utf8').split("");

let part1 = input.reduce( (sum,el)=>sum + (el==="(" ? 1 : -1), 0);

let part2 = function(){
  let sum = 0;
  for(let I = 0; I<input.length; I++){
    sum += (input[I]==="(" ? 1 : -1);
    if(sum == -1){
      return I+1;
    }
  }
}

console.log(part1);
console.log(part2());
