const input = require('fs').readFileSync(0,'utf8').split("").map((el)=>Number(el));

const part1 = input.reduce( (sum,el,I)=> el == input[ (I+1)%input.length ] ? sum += el : sum,0 )
const part2 = input.reduce( (sum,el,I)=> el == input[ (I+input.length/2)%input.length ] ? sum += el : sum,0 )

console.log(
  part1,
  part2
);
